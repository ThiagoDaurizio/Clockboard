'use client'

import { TypedNote, TypedNoteDTO, TypedNoteItem, TypedNoteItemDTO } from "@/types/Notes"
import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { globalContext } from "./global"
import { addNoteItem, bringNoteToUp, changeNoteHided, changeNoteItemHided, createNote, deleteNoteById, deleteNoteItemByIds, editNote, editNoteItem, getNotesByUserId } from "@/api/notes"

interface NotesListDataInterface {
  status: 'idle' | 'pedding' | 'completed' | 'failed'
  data: TypedNote[]
}

interface NotesContextInterface {
  notesListData: NotesListDataInterface
  getUserNotes: () => void
  callCreateNote: (noteBody: TypedNoteDTO) => void
  callUpdateNoteInfos: (noteId: string, newBody: TypedNote) => void
  callUpdateNoteHided: (noteId: string, newHidedMode: boolean) => void
  callBringNoteToUp: (noteId: string) => void
  callDeleteNote: (noteId: string) => void
  callCreateNoteItem: (noteId: string, itemBody: TypedNoteItemDTO) => void
  callUpdateNoteItemInfos: (noteId: string, itemId: string, newBody: TypedNoteItem) => void
  callUpdateNoteItemHided: (noteId: string, itemId: string, newHidedMode: boolean) => void
  callDeleteItemNote: (noteId: string, itemId: string) => void
}

const NotesContext = createContext({} as NotesContextInterface )

interface IProps {
  children: ReactNode
}

export const NotesContextProvider = ( { children }:IProps ) => {
  const { userData, userTheme, set_isLoading } = globalContext()
  const [notesListData, set_notesListData] = useState<NotesListDataInterface>({status: 'idle', data: []})

  useEffect(() => {
    if(userData?.uid && notesListData.status === 'idle'){
      getUserNotes()
    }
  }, [userData])

  const getUserNotes = async () => {
    set_isLoading(true)

    try {
      const data = await getNotesByUserId(userData!.uid)
      set_notesListData({status: 'completed', data: data})
    } catch (error) {
      set_notesListData({status: 'failed', data: []})
      console.error(error)
    }

    set_isLoading(false)
    return
  }

  const callCreateNote = async (noteBody: TypedNoteDTO) => {
    await createNote(noteBody)
    await getUserNotes()
  }

  const callUpdateNoteInfos = async (noteId: string, newBody: TypedNote) => {
    await editNote(noteId, newBody)
    await getUserNotes()
  }

  const callUpdateNoteHided = async (noteId: string, newHidedMode: boolean) => {
    await changeNoteHided(noteId, newHidedMode)
    await getUserNotes()
  }

  const callBringNoteToUp = async (noteId: string) => {
    await bringNoteToUp(noteId)
    await getUserNotes()
  }

  const callDeleteNote = async (noteId: string) => {
    await deleteNoteById(noteId)
    await getUserNotes()
  }


  const callCreateNoteItem = async (noteId: string, itemBody: TypedNoteItemDTO) => {
    await addNoteItem(noteId, itemBody)
    await getUserNotes()
  }

  const callUpdateNoteItemInfos = async (noteId: string, itemId: string, newBody: TypedNoteItem) => {
    await editNoteItem(noteId, itemId, newBody)
    await getUserNotes()
  }

  const callUpdateNoteItemHided = async (noteId: string, itemId: string, newHidedMode: boolean) => {
    await changeNoteItemHided(noteId, itemId, newHidedMode)
    await getUserNotes()
  }

  const callDeleteItemNote = async (noteId: string, itemId: string) => {
    await deleteNoteItemByIds(noteId, itemId)
    await getUserNotes()
  }

  return(
    <NotesContext.Provider value={{
      notesListData,
      getUserNotes,
      callCreateNote,
      callUpdateNoteInfos,
      callUpdateNoteHided,
      callBringNoteToUp,
      callDeleteNote,
      callCreateNoteItem,
      callUpdateNoteItemInfos,
      callUpdateNoteItemHided,
      callDeleteItemNote
    }}>
      {children}
    </NotesContext.Provider>
  )
}

export const notesContext = () => useContext(NotesContext)