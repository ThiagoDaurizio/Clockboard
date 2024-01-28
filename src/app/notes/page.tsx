'use client'
import { notesContext } from '@/context/notesContext'
import { TypedNote, TypedNoteItem } from '@/types/Notes'
import React, { useState } from 'react'
import NoteCard from './components/NoteCard'
import NoteHeader from './components/NoteHeader'
import CompModal from '@/components/Modal'
import { modalContext } from '@/context/modalsContext'
import ModalCreateNote from './modals/CreateNote'
import ModalCreateNoteItem from './modals/CreateNoteItem'
import ModalEditNote from './modals/EditNote'
import ModalDeleteNote from './modals/DeleteNote'
import ModalEditNoteItem from './modals/EditNoteItem'
import ModalDeleteNoteItem from './modals/DeleteNoteItem'

const page = () => {
  const { notesListData } = notesContext()
  const { modalCreateNote, modalEditNote, modalDeleteNote, modalCreateNoteItem, modalEditNoteItem, modalDeleteNoteItem } = modalContext()

  const [searchNote, set_searchNote] = useState<string>('')
  const [actualNote, set_actualNote] = useState<TypedNote>({} as TypedNote)
  const [actualNoteItem, set_actualNoteItem] = useState<TypedNoteItem>({} as TypedNoteItem)

  const filteredNotes = notesListData?.data?.filter((item: TypedNote) => item.title.toLocaleLowerCase().includes(searchNote.toLowerCase()))


  return (
    <main className="flex flex-col items-center min-h-screen max-w-[1360px] w-full pb-20">
      <NoteHeader 
        searchNote={searchNote}
        set_searchNote={set_searchNote}
      />

      <ul
        className="flex flex-col gap-4"
      >
        {searchNote.trim() ? 
          filteredNotes?.map((item: TypedNote) => {
            return(
              <NoteCard 
                key={item.id}
                note={item}
                set_actualNote={set_actualNote}
                set_actualNoteItem={set_actualNoteItem}
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
                set_actualNoteItem={set_actualNoteItem}
              />
            )
          })
        }
      </ul>

      <CompModal isOpened={modalCreateNote} modalHeading='Create Note' modalWidth={300} >
        <ModalCreateNote/>
      </CompModal>

      <CompModal isOpened={modalEditNote} modalHeading='Edit Note' modalWidth={300}>
        <ModalEditNote 
          actualNote={actualNote}
        />
      </CompModal>

      <CompModal isOpened={modalDeleteNote} modalHeading='Delete Note'>
        <ModalDeleteNote 
          actualNote={actualNote}
        />
      </CompModal>

      <CompModal isOpened={modalCreateNoteItem} modalHeading='Create a Item to this Note' modalWidth={300} >
        <ModalCreateNoteItem 
          actualNote={actualNote}
        />
      </CompModal>

      <CompModal isOpened={modalEditNoteItem} modalHeading='Edit Note Item' modalWidth={300}>
        <ModalEditNoteItem 
          actualNote={actualNote}
          actualNoteItem={actualNoteItem}
        />
      </CompModal>

      <CompModal isOpened={modalDeleteNoteItem} modalHeading='Delete Note Item' modalWidth={300}>
        <ModalDeleteNoteItem 
          actualNote={actualNote}
          actualNoteItem={actualNoteItem}
        />
      </CompModal>

    </main>
  )
}

export default page