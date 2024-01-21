'use client'

import { TypedNote } from "@/types/Notes"
import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { globalContext } from "./global"
import { getNotesByUserId } from "@/api/notes"

interface NotesListDataInterface {
  status: 'idle' | 'pedding' | 'completed' | 'failed'
  data: TypedNote[]
}

interface NotesContextInterface {
  notesListData: NotesListDataInterface
  getUserNotes: () => void
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

  return(
    <NotesContext.Provider value={{
      notesListData,
      getUserNotes
    }}>
      {children}
    </NotesContext.Provider>
  )
}

export const notesContext = () => useContext(NotesContext)