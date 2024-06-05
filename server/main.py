import uvicorn
from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware, db

from database import User as SchemaUser
from database import Profesori as SchemaProfesori
from database import User, Profesori

from models import User as ModelUser
from models import Profesori as ModelProfesori

import os
from dotenv import load_dotenv

load_dotenv('.env')

app = FastAPI()

app.add_middleware(DBSessionMiddleware, db_url=os.environ['DATABASE_URL'])


@app.get("/")
async def root():
    return {"message": "The API is working"}


@app.post('/user/', response_model=SchemaUser)
async def create_user(User: SchemaUser):
    db_user = ModelUser(user_id=User.id, login=User.username, password=User.password, email=User.email,
                        functie=User.functie)
    db.session.add(db_user)
    db.session.commit()
    return db_user


@app.get("/profesori/")
async def get_profesori():
    profesori = db.session.query(ModelProfesori).all()
    return profesori


if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
