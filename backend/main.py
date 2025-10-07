from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.core.config import settings
from app.core.database import connect_to_mongo, close_mongo_connection
from app.api.v1 import api_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifespan event handler for startup and shutdown"""
    # Startup
    await connect_to_mongo()
    print(f"[STARTUP] {settings.PROJECT_NAME} started successfully!")
    yield
    # Shutdown
    await close_mongo_connection()
    print("[SHUTDOWN] Application shutdown complete!")


# Create FastAPI app
app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Backend API for CareFinder - Connecting families with verified caregivers",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Root endpoint
@app.get("/")
async def root():
    """Welcome endpoint"""
    return {
        "message": "Welcome to CareFinder API",
        "version": "1.0.0",
        "docs": "/docs",
        "health": f"{settings.API_V1_PREFIX}/health"
    }


# Include API v1 routes
app.include_router(api_router, prefix=settings.API_V1_PREFIX)
