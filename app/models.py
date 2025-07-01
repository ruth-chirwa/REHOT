from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class Patient(Base):
    __tablename__ = 'patients'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    age = Column(Integer)
    gender = Column(String)
    village = Column(String)

    visits = relationship("Visit", back_populates="patient")

#Health visit table
class HealthVisit(Base):
    __tablename__ = 'health_visits'

    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey('patients.id'))
    date = Column(Date,nullable=False)
    symptoms = Column(String)
    diagnosis = Column(String)
    
    #link back to patient
    patient = relationship("Patient", back_populates="visits")
