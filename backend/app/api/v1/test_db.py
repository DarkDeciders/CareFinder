from fastapi import APIRouter, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase
from app.core.database import get_database
from datetime import datetime

router = APIRouter()


@router.get("/test-db")
async def test_database(db: AsyncIOMotorDatabase = Depends(get_database)):
    """
    Test database operations - Create, Read, Update, Delete
    """
    try:
        # Test 1: Insert a test document
        test_collection = db["test_collection"]
        test_doc = {
            "test": "CareFinder Database Test",
            "timestamp": datetime.utcnow().isoformat(),
            "status": "testing"
        }
        insert_result = await test_collection.insert_one(test_doc)

        # Test 2: Read the document back
        found_doc = await test_collection.find_one({"_id": insert_result.inserted_id})

        # Test 3: Update the document
        await test_collection.update_one(
            {"_id": insert_result.inserted_id},
            {"$set": {"status": "updated"}}
        )

        # Test 4: Count documents
        count = await test_collection.count_documents({})

        # Test 5: Delete the test document
        await test_collection.delete_one({"_id": insert_result.inserted_id})

        return {
            "database_working": True,
            "tests_passed": {
                "insert": True,
                "read": found_doc is not None,
                "update": True,
                "count": count,
                "delete": True
            },
            "message": "All database operations successful!",
            "database_name": db.name
        }

    except Exception as e:
        return {
            "database_working": False,
            "error": str(e),
            "message": "Database test failed"
        }


@router.get("/collections")
async def list_collections(db: AsyncIOMotorDatabase = Depends(get_database)):
    """List all collections in the database"""
    try:
        collections = await db.list_collection_names()
        return {
            "database_name": db.name,
            "collections": collections,
            "total_collections": len(collections)
        }
    except Exception as e:
        return {
            "error": str(e),
            "message": "Failed to list collections"
        }
