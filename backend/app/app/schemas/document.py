from typing import Optional

from pydantic import BaseModel


# Shared properties
class DocumentBase(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None


# Properties to receive on Document creation
class DocumentCreate(DocumentBase):
    ...


# Properties to receive on Document update
class DocumentUpdate(DocumentBase):
    ...


# Properties shared by models stored in DB
class DocumentInDBBase(DocumentBase):
    id: int
    title: str
    owner_id: int

    class Config:
        orm_mode = True


# Properties to return to client
class Document(DocumentInDBBase):
    ...


# Properties properties stored in DB
class DocumentInDB(DocumentInDBBase):
    ...
