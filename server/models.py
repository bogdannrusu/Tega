from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Float, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

Base = declarative_base()


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(200))
    password = Column(String(255))
    email = Column(String(100))
    functie = Column(String(100))


class Profesori(Base):
    __tablename__ = 'profesori'
    id = Column(Integer, primary_key=True, index=True)
    firstname = Column(String(50))
    email = Column(String(100))
    age = Column(Integer)
    phone = Column(Integer)
    is_active = Column(Boolean)
