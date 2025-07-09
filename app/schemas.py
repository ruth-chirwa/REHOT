from pydantic import BaseModel, Field
from datetime import date

from pydantic import BaseModel
from typing import Optional

class PatientBase(BaseModel):
    name: str
    age: int
    gender: str
    village: str
    status: Optional[str] = None
    contact: Optional[str] = None
    department: Optional[str] = None
    region: Optional[str] = None
    notes: Optional[str] = None

    class Config:
        orm_mode = True

class PatientCreate(PatientBase):
    pass

class PatientOut(PatientBase):
    id: int

    class Config:
        orm_mode = True

#visit schemas
class VisitBase(BaseModel):
    patient_id: int
    date: date
    symptoms: str
    diagnosis: str

class VisitCreate(VisitBase):
    pass

class VisitOut(VisitBase):
    id: int

    class Config:
        orm_mode = True