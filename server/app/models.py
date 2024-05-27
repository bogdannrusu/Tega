from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Database URL
DATABASE_URL = "mysql+pymysql://root:Ban4ever!#@localhost/brs_autoschool"

# Create SQLAlchemy engine
engine = create_engine(DATABASE_URL)

# Create a configured "Session" class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for our models
Base = declarative_base()

# Define a model
class User(Base):
    __tablename__ = "users_admin"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50))
    password = Column(String(50))
    email = Column(String(50))
    functie = Column(String(50))

# Create tables
Base.metadata.create_all(bind=engine)
