from fastapi import APIRouter, Depends
from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorDatabase
from app.core.database import get_database

router = APIRouter()


@router.get("/health")
async def health_check(db: AsyncIOMotorDatabase = Depends(get_database)):
    """
    Health check endpoint
    Returns API status and database connection status
    """
    # Check MongoDB connection
    try:
        await db.command("ping")
        db_status = "connected"
    except Exception as e:
        db_status = f"disconnected: {str(e)}"

    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "service": "CareFinder API",
        "version": "1.0.0",
        "database": db_status
    }
