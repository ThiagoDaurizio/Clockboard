'use client'
import CompInputText from '@/components/InputText'
import { modalContext } from '@/context/modalsContext'
import { notesContext } from '@/context/notesContext'
import { TypedNote, TypedNoteItem } from '@/types/Notes'
import React, { useEffect, useState } from 'react'

interface IProps {
  actualNote: TypedNote
  actualNoteItem: TypedNoteItem
}

const ModalEditNoteItem = ( { actualNote, actualNoteItem }:IProps ) => {
  const { modalEditNoteItem, set_modalEditNoteItem } = modalContext()
  const { callUpdateNoteItemInfos } = notesContext()

  const [noteItemKey, set_noteItemKey] = useState<string>(actualNoteItem.key)
  const [noteItemValue, set_noteItemValue] = useState<string>(actualNoteItem.value)

  useEffect(() => {
    if(modalEditNoteItem){
      modalSetup()
    }
  }, [modalEditNoteItem])

  
  const modalSetup = () => {
    set_noteItemKey(actualNoteItem?.key)
    set_noteItemValue(actualNoteItem?.value)
  }

  const handleConfirm = async () => {
    const body: TypedNoteItem = {
      ...actualNoteItem,
      key: noteItemKey,
      value: noteItemValue
    }

    callUpdateNoteItemInfos(actualNote.id, actualNoteItem.id, body)
    set_modalEditNoteItem(false)
  }

  return (
    <>
      <label 
        className="w-full"
      >
        <span className="text-green-400 text-sm mb-1 pl-1">
          Item Category
        </span>
        <CompInputText text={noteItemKey} set_text={set_noteItemKey} width={'100%'} />
      </label>
      <label 
        className="w-full"
      >
        <span className="text-green-400 text-sm mb-1 pl-1">
          Item Name
        </span>
        <CompInputText text={noteItemValue} set_text={set_noteItemValue} width={'100%'} />
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
          onClick={() => set_modalEditNoteItem(false)}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default ModalEditNoteItem