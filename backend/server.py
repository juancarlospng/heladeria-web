from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'info@ladolcevita.ch')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

# Create the main app without a prefix
app = FastAPI(title="Gelateria La Dolcevita API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: str = "Richiesta informazioni"
    message: str
    inquiry_type: str = "general"  # general | catering
    email_sent: bool = False
    email_error: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactInquiryCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    subject: Optional[str] = Field(default="Richiesta informazioni", max_length=200)
    message: str = Field(..., min_length=1, max_length=4000)
    inquiry_type: Optional[str] = Field(default="general", pattern="^(general|catering)$")


# ---------- Helpers ----------
def _build_email_html(payload: ContactInquiry) -> str:
    inquiry_label = "Catering" if payload.inquiry_type == "catering" else "Generale"
    phone_html = f"<p style='margin:4px 0;'><strong>Telefono:</strong> {payload.phone}</p>" if payload.phone else ""
    return f"""
    <table style="font-family: Arial, sans-serif; color:#4A3B32; max-width:640px; margin:0 auto; padding:24px; background:#FDFBF7; border:1px solid #EBE3D5; border-radius:12px;">
      <tr><td>
        <h2 style="font-family: Georgia, serif; color:#4A3B32; margin:0 0 16px 0;">Nuova richiesta dal sito · Gelateria La Dolcevita</h2>
        <p style="margin:4px 0;"><strong>Tipo richiesta:</strong> {inquiry_label}</p>
        <p style="margin:4px 0;"><strong>Nome:</strong> {payload.name}</p>
        <p style="margin:4px 0;"><strong>Email:</strong> {payload.email}</p>
        {phone_html}
        <p style="margin:4px 0;"><strong>Oggetto:</strong> {payload.subject}</p>
        <hr style="border:none; border-top:1px solid #EBE3D5; margin:16px 0;" />
        <p style="white-space:pre-wrap; line-height:1.6;">{payload.message}</p>
        <hr style="border:none; border-top:1px solid #EBE3D5; margin:16px 0;" />
        <p style="font-size:12px; color:#7A6859;">Inviato automaticamente da ladolcevita.ch — {payload.created_at.isoformat()}</p>
      </td></tr>
    </table>
    """


async def _send_inquiry_email(payload: ContactInquiry) -> tuple[bool, Optional[str]]:
    if not RESEND_API_KEY:
        return False, "RESEND_API_KEY non configurata"

    params = {
        "from": SENDER_EMAIL,
        "to": [RECIPIENT_EMAIL],
        "reply_to": payload.email,
        "subject": f"[La Dolcevita] {payload.subject} — {payload.name}",
        "html": _build_email_html(payload),
    }
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Resend email queued: {result}")
        return True, None
    except Exception as exc:
        logger.exception("Resend email failed")
        return False, str(exc)


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Gelateria La Dolcevita API", "status": "ok"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(payload: StatusCheckCreate):
    status_obj = StatusCheck(**payload.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check.get('timestamp'), str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/contact", response_model=ContactInquiry, status_code=201)
async def create_contact_inquiry(payload: ContactInquiryCreate):
    inquiry = ContactInquiry(**payload.model_dump())
    sent, error = await _send_inquiry_email(inquiry)
    inquiry.email_sent = sent
    inquiry.email_error = error

    doc = inquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    try:
        await db.contact_inquiries.insert_one(doc)
    except Exception:
        logger.exception("Failed to persist contact inquiry")
        raise HTTPException(status_code=500, detail="Errore durante il salvataggio della richiesta.")

    return inquiry


@api_router.get("/contact", response_model=List[ContactInquiry])
async def list_contact_inquiries(limit: int = 100):
    inquiries = await db.contact_inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for item in inquiries:
        if isinstance(item.get('created_at'), str):
            item['created_at'] = datetime.fromisoformat(item['created_at'])
    return inquiries


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
