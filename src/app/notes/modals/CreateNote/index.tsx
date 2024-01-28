'use client'
import CompInputText from '@/components/InputText'
import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import { notesContext } from '@/context/notesContext'
import { TypedNoteDTO } from '@/types/Notes'
import React, { useState } from 'react'

const ModalCreateNote = () => {
  const { set_isLoading, userData } = globalContext()
  const  { callCreateNote } = notesContext()
  const { set_modalCreateNote } = modalContext()

  const [noteTitle, set_noteTitle] = useState<string>('')
  const [noteColor, set_noteColor] = useState<string>('')

  const handleCreate = async () => {
    set_isLoading(true)

    const body: TypedNoteDTO = {
      uid: userData!.uid,
      title: noteTitle,
      color: noteColor,
      isHided: false,
      items: []
    }
    
    callCreateNote(body)

    set_isLoading(false)
    set_modalCreateNote(false)
    resetForm()
  }

  const resetForm = () => {
    set_noteTitle('')
    set_noteColor('')
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
          onClick={handleCreate}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Create
        </button>
        <button
          onClick={() => set_modalCreateNote(false)}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default ModalCreateNote