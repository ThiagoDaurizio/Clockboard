'use client'
import CompInputText from '@/components/InputText'
import { modalContext } from '@/context/modalsContext'
import { notesContext } from '@/context/notesContext'
import { TypedNote } from '@/types/Notes'
import React, { useEffect, useState } from 'react'

interface IProps {
  actualNote: TypedNote
}

const ModalEditNote = ( { actualNote }:IProps ) => {
  const { callUpdateNoteInfos } = notesContext()
  const { modalEditNote, set_modalEditNote } = modalContext()

  const [noteTitle, set_noteTitle] = useState<string>(actualNote?.title)

  useEffect(() => {
    if(modalEditNote){
      modalSetup()
    }
  }, [modalEditNote])

  
  const modalSetup = () => {
    set_noteTitle(actualNote?.title)
  }

  const handleConfirm = async () => {
    const body: TypedNote = {
      ...actualNote,
      title: noteTitle
    }

    callUpdateNoteInfos(actualNote.id, body)
    set_modalEditNote(false)
  }

  return (
    <>
      <label 
        className="w-full"
      >
        <span className="text-green-400 text-sm mb-1 pl-1">
          Title
        </span>
        <CompInputText text={noteTitle} set_text={set_noteTitle} width={'100%'} />
      </label>
      <div 
        className="flex justify-between w-full mt-3"
      >
        <button
          onClick={handleConfirm}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Confirm
        </button>
        <button
          onClick={() => set_modalEditNote(false)}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default ModalEditNote