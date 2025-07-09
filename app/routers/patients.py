from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import crud, schemas,database

router = APIRouter(
    #prefix="/patients",
    tags=["patients"]
)

# Dependency to get the database session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=schemas.PatientOut)
def create_patient(patient: schemas.PatientCreate, db: Session = Depends(get_db)):
    """
    Create a new patient.
    """
    return crud.create_patient(db=db, patient=patient)

@router.get("/", response_model=list[schemas.PatientOut])
def list_patients(db: Session = Depends(get_db)):
    """
    Retrieve all patients.
    """
    return crud.get_all_patients(db)

@router.get("/{patient_id}", response_model=schemas.PatientOut)
def get_patient(patient_id: int, db: Session = Depends(get_db)):
    """
    Retrieve a patient by ID.
    """
    patient = crud.get_patient_by_id(db=db, patient_id=patient_id)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient


