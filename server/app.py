from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from app import models

from . import models, database

app = FastAPI()

# Dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

@app.post("/users/")
def create_user(Usename: str, Password: str, Email: str, Functie: str, db: Session = Depends(get_db)):
    db_user = models.User(username=Usename, password=Password, email=Email, functie=Functie)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users/")
def read_users(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    users = db.query(models.User).offset(skip).limit(limit).all()
    return users
