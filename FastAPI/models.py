from sqlalchemy import Boolean, Column, Integer, String
from database import Base

class User(Base):
    __tablename__ = 'users_admin'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(200))
    password = Column(String(255))
    email = Column(String(100))
    functie = Column(String(100))
