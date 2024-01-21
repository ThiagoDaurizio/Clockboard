'use client'
import { modalContext } from '@/context/modalsContext'
import React from 'react'

const ModalCreateNote = () => {
  const { set_modalCreateNote } = modalContext()


  const handleCreate = async () => {

  }

  return (
    <>
    <input/>

    <div 
        className="flex justify-center w-full gap-24 mt-3"
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