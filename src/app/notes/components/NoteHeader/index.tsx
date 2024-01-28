'use client'
import { modalContext } from '@/context/modalsContext'
import React from 'react'

interface IProps {
  searchNote: string
  set_searchNote: React.Dispatch<React.SetStateAction<string>>
}

const NoteHeader = ( { searchNote, set_searchNote }:IProps ) => {
  const { set_modalCreateNote } = modalContext()

  return (
    <div className="flex flex-col items-center m-4">
    <button 
      onClick={() => set_modalCreateNote(true)}
      className="bg-violet-600 p-12 py-1 rounded-t-lg border border-gray-400  border-b-transparent text-lg text-gray-200 font-semibold transition-colors duration-300 hover:bg-violet-700"
    >
      CREATE NOTE
    </button>
    <input 
      value={searchNote}
      onChange={(event) => set_searchNote(event.target.value)}
      className="w-[320px] h-8 rounded-md bg-gray-700 border border-gray-400 p-2 py-1 text-gray-300"
    />
    {searchNote ?
    <span 
      onClick={() => set_searchNote('')}
      className="bg-violet-600 text-gray-200 p-4 py-0 border border-gray-400 border-t-transparent rounded-b-md cursor-pointer transition-colors duration-300 hover:bg-violet-700"
    >
      Clear Filter
    </span>
    :
    <span className="bg-gray-700 text-violet-600 p-4 py-0 border border-gray-400 border-t-transparent rounded-b-md">Search</span>
    }
  </div>
  )
}

export default NoteHeader