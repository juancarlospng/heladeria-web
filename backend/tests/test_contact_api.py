"""Backend API tests for Gelateria La Dolcevita."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://artisan-gelato-ch-1.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root_returns_welcome(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert "Gelateria" in data.get("message", "")


# ---------- Contact create ----------
class TestContactCreate:
    def test_create_general_inquiry_persists_and_email_not_sent(self, client):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"TEST Mario {unique}",
            "email": f"{unique}@example.com",
            "phone": "+41 91 000 00 00",
            "message": "Vorrei informazioni sul gelato artigianale.",
            "inquiry_type": "general",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()

        # Response shape
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "_id" not in data  # mongo internal must not leak
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["inquiry_type"] == "general"
        assert data["email_sent"] is False
        assert data["email_error"] == "RESEND_API_KEY non configurata"
        assert "created_at" in data

        # Verify persisted via GET
        list_r = client.get(f"{API}/contact")
        assert list_r.status_code == 200
        items = list_r.json()
        assert isinstance(items, list)
        ids = [i["id"] for i in items]
        assert data["id"] in ids
        # No _id leaked in any item
        for it in items:
            assert "_id" not in it

    def test_create_catering_inquiry(self, client):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"TEST Catering {unique}",
            "email": f"{unique}@example.com",
            "message": "Vorremmo un servizio catering per 50 persone.",
            "inquiry_type": "catering",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["inquiry_type"] == "catering"
        assert data["email_sent"] is False

    def test_reject_invalid_inquiry_type(self, client):
        payload = {
            "name": "TEST x",
            "email": "x@example.com",
            "message": "msg",
            "inquiry_type": "spam",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_reject_missing_name(self, client):
        payload = {"email": "x@example.com", "message": "hello"}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_reject_empty_name(self, client):
        payload = {"name": "", "email": "x@example.com", "message": "hello"}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_reject_invalid_email(self, client):
        payload = {"name": "TEST", "email": "not-an-email", "message": "hello"}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_reject_missing_message(self, client):
        payload = {"name": "TEST", "email": "x@example.com"}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_reject_empty_message(self, client):
        payload = {"name": "TEST", "email": "x@example.com", "message": ""}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422


# ---------- Contact list ----------
class TestContactList:
    def test_list_returns_array_without_objectid(self, client):
        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        for it in data:
            assert "_id" not in it
            assert "id" in it
