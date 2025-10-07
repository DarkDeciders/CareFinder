# CareFinder Backend API

FastAPI + MongoDB backend for CareFinder platform.

## Setup

1. **Create virtual environment:**
```bash
python -m venv venv
```

2. **Activate virtual environment:**

Windows:
```bash
venv\Scripts\activate
```

Mac/Linux:
```bash
source venv/bin/activate
```

3. **Install dependencies:**
```bash
pip install -r requirements.txt
```

4. **Configure environment:**
- Copy `.env.example` to `.env` if needed
- Update MongoDB URL if not using localhost

5. **Run the application:**

**Simple method:**
```bash
python run.py
```

**Or using uvicorn directly:**
```bash
uvicorn main:app --reload
```

## Endpoints

- **Root:** http://localhost:8000/
- **Health Check:** http://localhost:8000/api/v1/health
- **API Docs:** http://localhost:8000/docs
- **ReDoc:** http://localhost:8000/redoc

## Project Structure

```
backend/
├── main.py                 # Application entry point
├── requirements.txt        # Python dependencies
├── .env                    # Environment variables
├── app/
│   ├── api/
│   │   └── v1/
│   │       ├── __init__.py
│   │       └── health.py   # Health check endpoint
│   ├── core/
│   │   ├── config.py       # Configuration
│   │   └── database.py     # MongoDB connection
│   ├── models/             # Database models (add later)
│   └── schemas/            # Pydantic schemas (add later)
```

## Testing

Open your browser and go to:
- http://localhost:8000/api/v1/health

You should see:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00",
  "service": "CareFinder API",
  "version": "1.0.0",
  "database": "connected"
}
```
