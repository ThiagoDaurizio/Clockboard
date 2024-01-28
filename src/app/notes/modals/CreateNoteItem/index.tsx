'use client'
import CompInputText from '@/components/InputText'
import CompInputToggle from '@/components/InputToggle'
import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import { notesContext } from '@/context/notesContext'
import { TypedNote, TypedNoteItemDTO } from '@/types/Notes'
import React, { useEffect, useState } from 'react'

interface IProps {
  actualNote: TypedNote
}

const ModalCreateNoteItem = ( { actualNote }:IProps ) => {
  const { set_isLoading, userData } = globalContext()
  const  { callCreateNoteItem, callUpdateNoteHided } = notesContext()
  const { modalCreateNoteItem, set_modalCreateNoteItem } = modalContext()

  const [noteStyle, set_noteStyle] = useState<boolean>(false)

  const [noteKey, set_noteKey] = useState<string>('')
  const [noteValue, set_noteValue] = useState<string>('')
  const [noteIsHided, set_noteIsHided] = useState<boolean>(false)

  useEffect(() => {
    if(modalCreateNoteItem){
      modalSetup()
    }
  }, [modalCreateNoteItem])

  useEffect(() => {
    if(!noteStyle){
      set_noteKey('')
    }
  }, [noteStyle])

  const modalSetup = () => {
    set_noteKey('')
    set_noteValue('')
    set_noteIsHided(false)
  }

  const handleCreate = async () => {
    set_isLoading(true)

    const body: TypedNoteItemDTO = {
      key: noteKey,
      value: noteValue,
      isHided: noteIsHided
    }
    
    callCreateNoteItem(actualNote.id, body)
    callUpdateNoteHided(actualNote.id, false)

    set_isLoading(false)
    set_modalCreateNoteItem(false)
    resetForm()
  }

  const resetForm = () => {
    set_noteKey('')
    set_noteValue('')
  }

  return (
    <>
      <label 
        className="w-full"
      >
        <span className="text-green-400 text-sm mb-1 pl-1">
          List type
        </span>
        <div
          className="flex justify-center items-center gap-2 text-gray-400 text-xs"
        >
        <p
          className="flex flex-col items-center justify-center"
        >
          <span>Listed</span> 
          <span>basic</span>
        </p>
        <CompInputToggle 
          toggle={noteStyle}
          set_toggle={set_noteStyle}
        />
        <p
          className="flex flex-col items-center justify-center"
        >
          <span>Listed</span> 
          <span>categories</span>
        </p>
      </div>
      </label>

      <label 
        className="w-full transition-all duration-500"
        style={{opacity: noteStyle ? '100' : '0', pointerEvents: noteStyle ? 'auto' : 'none'}}
      >
        <span className="text-green-400 text-sm mb-1 pl-1">
          Item Category
        </span>
        <CompInputText text={noteKey} set_text={set_noteKey} width={'100%'} />
      </label>

      <label 
        className="w-full transition-transform duration-500"
        style={{transform: noteStyle ? 'translateY(0px)' : 'translateY(-50px)'}}
      >
        <span className="text-green-400 text-sm mb-1 pl-1">
          Item Name
        </span>
        <CompInputText text={noteValue} set_text={set_noteValue} width={'100%'} />
      </label>

      <label 
        className="w-full flex flex-col items-center transition-transform duration-500"
        style={{transform: noteStyle ? 'translateY(0px)' : 'translateY(-50px)'}}
      >
        <span className="text-green-400 text-sm mb-1 pl-1">
          Start Hided?
        </span>
        <CompInputToggle 
          toggle={noteIsHided}
          set_toggle={set_noteIsHided}
        />
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
          onClick={() => set_modalCreateNoteItem(false)}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default ModalCreateNoteItem