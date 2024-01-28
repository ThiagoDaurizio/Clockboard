import { modalContext } from '@/context/modalsContext'
import { notesContext } from '@/context/notesContext'
import { TypedNote } from '@/types/Notes'
import React from 'react'

interface IProps {
  actualNote: TypedNote
}

const ModalDeleteNote = ( { actualNote }:IProps ) => {
  const { callDeleteNote } = notesContext()
  const { set_modalDeleteNote } = modalContext()

  const handleConfirm = async () => {
    callDeleteNote(actualNote.id)
    set_modalDeleteNote(false)
  }

  return (
    <div className="w-[280px] h-[120px] bg-gray-700 rounded-md flex flex-col gap-4 justify-between items-center p-4">
      <h1 className="text-gray-200 text-lg font-semibold">Really want delete this Note?</h1>

      <div className="flex gap-8">
        <button 
          className="transition-all duration-300 p-1 PX-2 bg-gray-600 border border-gray-300 rounded-md text-rose-500 text-lg w-24 h-8 flex justify-center items-center hover:bg-gray-700 hover:border-rose-600"
          onClick={handleConfirm}
        >
          Confirm
        </button>
        <button 
          className="transition-all duration-300 p-1 PX-2 bg-violet-600 border border-gray-300 rounded-md text-gray-200 text-lg w-24 h-8 flex justify-center items-center hover:bg-violet-700"
          onClick={() => set_modalDeleteNote(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ModalDeleteNote