from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas,database

router = APIRouter(
    prefix="/visits",
    tags=["Health Visits"]
)

# Dependency to get the database session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.VisitOut)
def create_visit(visit: schemas.VisitCreate, db: Session = Depends(get_db)):
    """
    Create a new health visit.
    """
    return crud.create_visit(db, visit)

@router.get("/{patient_id}", response_model=list[schemas.VisitOut])
def get_visits_for_patient(patient_id: int, db: Session = Depends(get_db)):
    """
    Retrieve all health visits for a specific patient.
    """
    visits = crud.get_visits_by_patient_id(db, patient_id)
    if not visits:
        raise HTTPException(status_code=404, detail="No visits found for this patient")
    return visits