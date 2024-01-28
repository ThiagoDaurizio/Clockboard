'use client'
import { IconsApp, IconsMenu } from '@/assets/icons'
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

  
  const [noteKey, set_noteKey] = useState<string>('')
  const [noteValue, set_noteValue] = useState<string>('')
  const [noteIsHided, set_noteIsHided] = useState<boolean>(false)
  const [noteStyle, set_noteStyle] = useState<boolean>(false)

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
    set_noteIsHided(false)
  }

  return (
    <>
      <div
        className="flex justify-between gap-8"
      >
        <label 
          className="w-full"
        >
          <span className="text-green-400 text-sm mb-1 text-center block">
            List type
          </span>
          <div
            className="flex justify-center items-center gap-2 text-gray-400 text-xl"
          >
          <p
            className="flex flex-col items-center justify-center"
          >
            <span 
              className={`${noteStyle ? 'text-gray-500' : 'text-gray-200'}`}
            >
              <IconsMenu.listArray/>
            </span>
          </p>
          <CompInputToggle 
            toggle={noteStyle}
            set_toggle={set_noteStyle}
            colored={false}
          />
          <p
            className="flex flex-col items-center justify-center"
          >
            <span 
              className={`${noteStyle ? 'text-gray-200' : 'text-gray-500'}`}
            >
              <IconsMenu.listObject/>
            </span>
          </p>
        </div>
        </label>

        <label 
          className="w-full flex flex-col transition-transform duration-500"
        >
          <span className="text-green-400 text-sm mb-1 text-center">
            Start hided
          </span>
          <div
            className="flex justify-center items-center gap-2 text-xl"
          >
          <p
            className="flex flex-col items-center justify-center"
          >
            <span 
              className={`${noteIsHided ? 'text-gray-500' : 'text-gray-200'}`}
            >
              <IconsApp.sightOn/>
            </span>
          </p>
          <CompInputToggle 
            toggle={noteIsHided}
            set_toggle={set_noteIsHided}
            colored={false}
          />
          <p
            className="flex flex-col items-center justify-center"
          >
            <span 
              className={`${noteIsHided ? 'text-gray-200' : 'text-gray-500'}`}
            >
              <IconsApp.sightOff/>
            </span>
          </p>
        </div>
        </label>
      </div>


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