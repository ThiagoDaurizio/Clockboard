'use client'
import { TypedNote, TypedNoteBody } from '@/types/Notes'
import React from 'react'

interface IProps {
  note: TypedNote
  set_actualNote: React.Dispatch<React.SetStateAction<TypedNote>>
}


const NoteCard = ( { note, set_actualNote }:IProps ) => {
  return (
    <li>
      <p>{note.title}</p>

      <ul>

      {note.body.map((item: TypedNoteBody) => {
        return(
          <li>
            <p>{item.key}: {item.value}</p>
          </li>
        )
      })}
      </ul>
    </li>
  )
}

export default NoteCard