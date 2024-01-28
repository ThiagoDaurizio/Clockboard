'use client'
import { IconsApp } from '@/assets/icons'
import CompTooltip from '@/components/Tooltip'
import { modalContext } from '@/context/modalsContext'
import { notesContext } from '@/context/notesContext'
import { TypedNote, TypedNoteItem } from '@/types/Notes'
import React, { useState } from 'react'

interface IProps {
  note: TypedNote
  noteItem: TypedNoteItem
  set_actualNote: React.Dispatch<React.SetStateAction<TypedNote>>
  set_actualNoteItem: React.Dispatch<React.SetStateAction<TypedNoteItem>>
}
const NoteCardItems = ( { note, noteItem, set_actualNote, set_actualNoteItem }:IProps ) => {
  const { callUpdateNoteItemHided } = notesContext()
  const { set_modalEditNoteItem, set_modalDeleteNoteItem } = modalContext()

  const [toolsOpened, set_toolsOpened] = useState<boolean>(false)

  const handleEditNoteItem = (noteItem: TypedNoteItem) => {
    set_actualNote(note)
    set_actualNoteItem(noteItem)
    set_modalEditNoteItem(true)
    set_toolsOpened(false)
  }

  const handleDeleteNoteItem = (noteItem: TypedNoteItem) => {
    set_actualNote(note)
    set_actualNoteItem(noteItem)
    set_modalDeleteNoteItem(true)
    set_toolsOpened(false)
  }

  const handleHidedNoteItemMode = (noteItem: TypedNoteItem) => {
    callUpdateNoteItemHided(note.id, noteItem.id, !noteItem.isHided)
    set_toolsOpened(false)
  }

  return (
    <li 
      className="flex relative border border-transparent border-b-gray-700/80 py-1"
    >
      <div
        className="relative flex items-center w-full"
      >
        <button 
          onClick={() => set_toolsOpened(!toolsOpened)}
          className="bg-violet-600 rounded-full p-1 text-gray-200 border border-gray-200 transition-all duration-300 hover:bg-violet-700 hover:border-gray-100 text-xl w-6 h-6 flex justify-center items-center"
          style={{transform: !toolsOpened ? 'rotate(0deg)' : 'rotate(315deg)'}}
        >
          <IconsApp.add/>
        </button>

        <div
          className="relative flex gap-1 ml-2 overflow-hidden transition-all duration-500"
          style={{minWidth: toolsOpened ? '80px' : '0', width: toolsOpened ? '80px' : '0', opacity: toolsOpened ? '100' : '0'}}
        >
          <button
            onClick={() => handleEditNoteItem(noteItem)}
            className="relative group bg-violet-600 rounded-full p-1 text-gray-200 border border-gray-300 transition-colors duration-300 text-sm w-6 h-6 flex justify-center items-center hover:bg-gray-700 hover:text-green-400"
          >
            <IconsApp.edit/>
            <CompTooltip label='Edit'/>
          </button>
          <button
            onClick={() => handleDeleteNoteItem(noteItem)}
            className="relative group bg-violet-600 rounded-full p-1 text-gray-200 border border-gray-300 transition-colors duration-300 text-sm w-6 h-6 flex justify-center items-center  hover:bg-gray-700 hover:border-rose-600 hover:text-rose-500"
          >
            <IconsApp.delete/>
            <CompTooltip label='Delete'/>
          </button>
          <button
            onClick={() => handleHidedNoteItemMode(noteItem)}
            className="relative group bg-violet-600 rounded-full p-1 text-gray-200 border border-gray-300 transition-colors duration-300 hover:bg-violet-700 hover:border-gray-200 text-sm w-6 h-6 flex justify-center items-center"
          >
            {noteItem.isHided ? 
              <IconsApp.sightOn/>
              :
              <IconsApp.sightOff/>
            }
            <CompTooltip label={noteItem.isHided ? 'Unhide Items' : 'Hide Items'}/>
          </button>
        </div>

        <p
          className="ml-1 flex items-center flex-1"
        >
          {!noteItem?.key.trim() &&(
            <span
              className="text-gray-400 text-xl font-extrabold"
            >
              ·
            </span>
            ) 
          }
          {noteItem?.key?.trim() &&(
            <span
              onClick={() => navigator.clipboard.writeText(noteItem.key)}
              className="text-gray-400 transition-colors duration-300 p-1 py-0 rounded-md cursor-pointer hover:bg-gray-700/30 active:text-green-400"
            > 
              {noteItem.key}
              {noteItem?.key?.trim() ? ':' : ''}
            </span>
          )}
          {noteItem?.value?.trim() &&(
            <span
              onClick={() => navigator.clipboard.writeText(noteItem.value)}
              className={`flex-1 transition-colors duration-300 p-1 py-0 rounded-md cursor-pointer hover:bg-gray-700/30 border border-transparent ${noteItem.isHided ? 'text-transparent' : 'text-gray-300'} ${noteItem.isHided ? 'active:bg-violet-300/10' : 'active:text-green-400'}`}
              style={{textShadow: noteItem?.isHided ? '0 0 7px rgba(255,255,255,0.5)' : ''}}
            >
              {noteItem.value}
            </span>
          )}
        </p>
      </div>
    </li>
  )
}

export default NoteCardItems