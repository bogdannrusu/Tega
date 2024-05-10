from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mysql.connector

app = FastAPI()

# MySQL connection
db = mysql.connector.connect(
  host="localhost",
  user="root",
  password="Ban4ever!#",
  database="brs_autoschool"
)


class User(BaseModel):
  login: str
  password: str


@app.post("/login")
def login(user: User):
  cursor = db.cursor()
  cursor.execute("SELECT * FROM users_admin ua WHERE ua.login = %s AND password = %s", (user.login, user.password))
  user = cursor.fetchone()
  cursor.close()

  if user:
    return {"message": "Login successful"}
  else:
    raise HTTPException(status_code=401, detail="Invalid credentials")
