from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import databases
import sqlalchemy

DATABASE_URL = "sqlite:///./notes.db"

metadata = sqlalchemy.MetaData()

notes = sqlalchemy.Table(
    "notes",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("title", sqlalchemy.String),
    sqlalchemy.Column("content", sqlalchemy.Text),
)

engine = sqlalchemy.create_engine(DATABASE_URL)
metadata.create_all(engine)

database = databases.Database(DATABASE_URL)

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/notes")
async def get_notes():
    query = notes.select()
    return await database.fetch_all(query)

@app.post("/notes")
async def create_note(title: str, content: str):
    query = notes.insert().values(title=title, content=content)
    return await database.execute(query)

@app.put("/notes/{note_id}")
async def update_note(note_id: int, title: str, content: str):
    query = notes.update().where(notes.c.id == note_id).values(title=title, content=content)
    await database.execute(query)
    return {"message": "Note updated successfully"}

@app.delete("/notes/{note_id}")
async def delete_note(note_id: int):
    query = notes.delete().where(notes.c.id == note_id)
    await database.execute(query)
    return {"message": "Note deleted successfully"}
