
from fastapi import FastAPI
from .routers import patients, visits
from .database import engine, Base
# Import the database engine and Base from the database module


# Create the database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Rural e-Health Outreach Tracker",
    description="API for managing health visits and patient records",
    version="1.0.0",
)

# Include routers for patients and visits
app.include_router(patients.router, prefix="/patients", tags=["Patients"])
app.include_router(visits.router, prefix="/visits", tags=["Health Visits"])

@app.get("/", tags=["Root"])
def read_root():
    """
    Root endpoint to check if the API is running.
    """
    return {"message": "Welcome to the Rural e-Health Outreach Tracker API!"}