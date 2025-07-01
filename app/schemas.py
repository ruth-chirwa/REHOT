from pydantic import BaseModel, Field
from datetime import date

#patient schemas
class PatientBase(BaseModel):
    name: str
    age: int
    gender: str
    village: str

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