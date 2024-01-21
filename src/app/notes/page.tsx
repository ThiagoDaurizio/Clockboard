'use client'
import { notesContext } from '@/context/notesContext'
import { TypedNote } from '@/types/Notes'
import React, { useState } from 'react'
import NoteCard from './components/NoteCard'
import NoteHeader from './components/NoteHeader'
import CompModal from '@/components/Modal'
import { modalContext } from '@/context/modalsContext'
import ModalCreateNote from './modals/CreateNote'

const page = () => {
  const { notesListData } = notesContext()
  const { modalCreateNote, modalEditNote, modalDeleteNote } = modalContext()

  const [searchNote, set_searchNote] = useState<string>('')
  const [actualNote, set_actualNote] = useState<TypedNote>({} as TypedNote)

  const filteredNotes = notesListData?.data?.filter((item: TypedNote) => item.title.toLocaleLowerCase().includes(searchNote.toLowerCase()))


  return (
    <main className="flex flex-col items-center min-h-screen max-w-[1360px] w-full pb-20">
      <NoteHeader 
        searchNote={searchNote}
        set_searchNote={set_searchNote}
      />

      <ul>
        {searchNote.trim() ? 
          filteredNotes?.map((item: TypedNote) => {
            return(
              <NoteCard 
                key={item.id}
                note={item}
                set_actualNote={set_actualNote}
              />
            )
          })
          :
          notesListData?.data?.map((item: TypedNote) => {
            return(
              <NoteCard
                key={item.id}
                note={item}
                set_actualNote={set_actualNote}
              />
            )
          })
        }
      </ul>

      <CompModal isOpened={modalCreateNote} modalHeading='Create Note' modalWidth={300} >
        <ModalCreateNote/>
      </CompModal>

    </main>
  )
}

export default page