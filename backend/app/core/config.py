from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application configuration"""

    # MongoDB
    MONGODB_URL: str = "mongodb://localhost:27017"
    DATABASE_NAME: str = "carefinder"

    # API
    PROJECT_NAME: str = "CareFinder API"
    API_V1_PREFIX: str = "/api/v1"
    DEBUG: bool = True

    class Config:
        env_file = ".env"


settings = Settings()
