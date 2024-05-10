from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mysql.connector

app = FastAPI()

# MySQL connection
db = mysql.connector.connect(
  host="localhost",
  user="username",
  password="password",
  database="database_name"
)


class User(BaseModel):
  email: str
  password: str


@app.post("/login")
def login(user: User):
  cursor = db.cursor()
  cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (user.email, user.password))
  user = cursor.fetchone()
  cursor.close()

  if user:
    return {"message": "Login successful"}
  else:
    raise HTTPException(status_code=401, detail="Invalid credentials")
