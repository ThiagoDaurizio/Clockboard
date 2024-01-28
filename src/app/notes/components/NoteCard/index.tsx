'use client'
import { IconsApp } from '@/assets/icons'
import { modalContext } from '@/context/modalsContext'
import { notesContext } from '@/context/notesContext'
import { TypedNote, TypedNoteItem } from '@/types/Notes'
import React, { useState } from 'react'
import NoteCardItems from '../NoteCardItems'
import CompTooltip from '@/components/Tooltip'

interface IProps {
  note: TypedNote
  set_actualNote: React.Dispatch<React.SetStateAction<TypedNote>>
  set_actualNoteItem: React.Dispatch<React.SetStateAction<TypedNoteItem>>
}


const NoteCard = ( { note, set_actualNote, set_actualNoteItem }:IProps ) => {
  const { callUpdateNoteInfos, callDeleteNote, callUpdateNoteHided, callBringNoteToUp } = notesContext()
  const { set_modalCreateNoteItem, set_modalEditNote, set_modalDeleteNote } = modalContext()

  const handleEditNote = () => {
    set_actualNote(note)
    set_modalEditNote(true)
  }

  const handleDeleteNote = () => {
    set_actualNote(note)
    set_modalDeleteNote(true)
  }

  const handleBringNoteToUp = () => {
    callBringNoteToUp(note.id)
  }

  const handleHidedNoteMode = () => {
    callUpdateNoteHided(note.id, !note.isHided)
  }

  const handleCreateNoteItem = () => {
    set_actualNote(note)
    set_modalCreateNoteItem(true)
  }

  return (
    <li 
      className="flex flex-col gap-2 bg-gray-700 p-4 rounded-md w-[720px] max-w-[720px]"
    >
      <p
        onClick={() => navigator.clipboard.writeText(note.title)}
        className="bg-gray-800/50 cursor-pointer rounded-md text-center border border-transparent border-b-violet-500 font-semibold text-green-400 transition-colors duration-300 hover:bg-gray-800/30 active:text-green-300 active:border-b-violet-400"
      >
        {note.title}
      </p>

      <div
        className="flex justify-evenly items-center"
      >
        <button
          onClick={handleEditNote}
          className="relative group w-6 h-6 flex justify-center items-center bg-violet-600 p-1 rounded-full border-2 border-gray-300 text-base text-gray-200 font-semibold transition-colors duration-300 hover:bg-gray-700 hover:text-green-400"
        >
          <IconsApp.edit/>
          <CompTooltip label='Edit'/>
        </button>
        <button
          onClick={handleDeleteNote}
          className="relative group w-6 h-6 flex justify-center items-center bg-violet-600 p-1 rounded-full border-2 border-gray-300 text-base text-gray-200 font-semibold transition-colors duration-300 hover:bg-gray-700  hover:border-rose-600 hover:text-rose-500"
        >
          <IconsApp.delete/>
          <CompTooltip label='Delete'/>
        </button>

        <button 
          onClick={handleCreateNoteItem}
          className="flex justify-center items-center bg-violet-600 p-1 px-2 gap-1 rounded-full border-2 border-gray-300 text-lg text-gray-200 font-semibold transition-colors duration-300 hover:bg-violet-700"
        >
          <IconsApp.createNote/>
          <span 
            className="text-sm"
          >
            Create Item
          </span>
        </button>

        <button
          onClick={handleBringNoteToUp} 
          className="relative group w-6 h-6 flex justify-center items-center bg-violet-600 p-1 rounded-full border-2 border-gray-300 text-base text-gray-200 font-semibold transition-colors duration-300 hover:bg-violet-700"
        >
          <IconsApp.arrowToUp/>
          <CompTooltip label='To First'/>
        </button>
        <button 
          onClick={handleHidedNoteMode} 
          className="relative group w-6 h-6 flex justify-center items-center bg-violet-600 p-1 rounded-full border-2 border-gray-300 text-base text-gray-200 font-semibold transition-colors duration-300 hover:bg-violet-700"
        >
          {note.isHided ? 
            <IconsApp.sightOn/>
            :
            <IconsApp.sightOff/>
          }
          <CompTooltip label={note.isHided ? 'Unhide Items' : 'Hide Items'}/>
        </button>
      </div>

      {!note.isHided && note.items.length > 0 &&(
        <ul
          className="bg-gray-800 rounded-md p-2 max-h-[200px] overflow-y-scroll overflow-x-visible flex flex-col"
        >
          {note?.items?.map((item: TypedNoteItem, index: number) => {
            return(
              <NoteCardItems 
                key={item.id}
                note={note}
                noteItem={item}
                set_actualNote={set_actualNote}
                set_actualNoteItem={set_actualNoteItem}
              />
            )
          })}
        </ul>
      )}
    </li>
  )
}

export default NoteCard