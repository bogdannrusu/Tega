from pydantic import BaseModel

class User(BaseModel):
    id: int
    username: str
    password: str
    email: str
    functie: str

    class Config:
        orm_mode = True

class Profesori(BaseModel):
    id: int
    firstname: str
    email: str
    age: int
    phone: int
    is_active: bool

    class Config:
        orm_mode = True