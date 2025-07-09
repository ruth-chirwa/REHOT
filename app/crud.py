from sqlalchemy.orm import Session
from . import models, schemas

#patient logic
def create_patient(db: Session, patient: schemas.PatientCreate):
    new_patient = models.Patient(**patient.dict())
    db.add(new_patient)
    db.commit()
    db.refresh(new_patient)
    return new_patient

def get_all_patients(db: Session):
    return db.query(models.Patient).all()

def get_patient_by_id(db: Session, patient_id: int):
    return db.query(models.Patient).filter(models.Patient.id == patient_id).first()

#visit logic
def create_visit(db: Session, visit: schemas.VisitCreate):
    new_visit = models.Visit(**visit.dict())
    db.add(new_visit)
    db.commit()
    db.refresh(new_visit)
    return new_visit

def get_visits_by_patient_id(db: Session, patient_id: int):
    return db.query(models.Visit).filter(models.Visit.patient_id == patient_id).all()

