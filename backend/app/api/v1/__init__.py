from fastapi import APIRouter
from app.api.v1 import health, test_db

api_router = APIRouter()

# Include routers
api_router.include_router(health.router, tags=["Health"])
api_router.include_router(test_db.router, tags=["Database Test"])
