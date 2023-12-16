'use client'
import { IconsApp, IconsMenu } from '@/assets/icons'
import CompInputText from '@/components/InputText'
import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import { TypedShortcut } from '@/types/Theme'
import React, { useEffect, useState } from 'react'
import ShortcutsIcons from './components/ShortcutsIcons'
import ShortcutsTab from './components/ShortcutsTab'

const ModalEditShortcuts = () => {
  const { userTheme, callEditShortcut } = globalContext()
  const { modalSettingsEditShortcuts, set_modalSettingsEditShortcuts } = modalContext()

  const [actualShortcut, set_actualShortcut] = useState<1 | 2>(1)

  const [labelShortcut1, set_labelShortcut1] = useState<string>('')
  const [labelShortcut2, set_labelShortcut2] = useState<string>('')

  const [urlShortcut1, set_urlShortcut1] = useState<string>('')
  const [urlShortcut2, set_urlShortcut2] = useState<string>('')

  const [iconShortcut1, set_iconShortcut1] = useState<any>('')
  const [iconShortcut2, set_iconShortcut2] = useState<any>('')

  useEffect(() => {
    if(modalSettingsEditShortcuts){
      modalSetup()
    }
  }, [modalSettingsEditShortcuts])

  const modalSetup = () => {
    set_labelShortcut1(userTheme?.data?.shortcut1?.label)
    set_urlShortcut1(userTheme?.data?.shortcut1?.url)
    set_iconShortcut1(userTheme?.data?.shortcut1?.icon)

    set_labelShortcut2(userTheme?.data?.shortcut2?.label)
    set_urlShortcut2(userTheme?.data?.shortcut2?.url)
    set_iconShortcut2(userTheme?.data?.shortcut2?.icon)

    set_actualShortcut(1)
  }

  const handleConfirm = () => {
    const bodyShortcut1 = {
      label: labelShortcut1,
      url: urlShortcut1,
      icon: iconShortcut1
    }

    const bodyShortcut2 = {
      label: labelShortcut2,
      url: urlShortcut2,
      icon: iconShortcut2
    }

    callEditShortcut(bodyShortcut1, bodyShortcut2)
    
    set_modalSettingsEditShortcuts(false)
  }


  return (
    <div>
      <ShortcutsTab
        actualShortcut={actualShortcut}
        set_actualShortcut={set_actualShortcut}
      />

      {actualShortcut === 1 &&(
        <div
          className="flex flex-col items-center w-[90%] mx-auto gap-2"
        >
          <p className="text-green-400 font-semibold">Shortcut 1</p>
          <label 
            className="w-[90%] flex flex-col"
            >
            <p className="w-fit ml-2 mb-1 pr-8 text-xs font-semibold text-green-400 border border-transparent border-b-gray-500">Title</p>
            <CompInputText text={labelShortcut1} set_text={set_labelShortcut1} width={'100%'}/>
          </label>
          <label 
            className="w-[90%] flex flex-col"
            >
            <p className="w-fit ml-2 mb-1 pr-8 text-xs font-semibold text-green-400 border border-transparent border-b-gray-500">Url</p>
            <CompInputText text={urlShortcut1} set_text={set_urlShortcut1} width={'100%'}/>
          </label>

          <div 
            className="w-[90%]"
          >
            <p className="w-fit ml-2 mb-1 pr-8 text-xs font-semibold text-green-400 border border-transparent border-b-gray-500">Icon</p>

            <ShortcutsIcons 
              iconShortcut={iconShortcut1}
              set_iconShortcut={set_iconShortcut1}
            />
          </div>
        </div>
      )}

      {actualShortcut === 2 &&(
        <div
          className="flex flex-col items-center w-[90%] mx-auto gap-2"
        >
          <p className="text-green-400 font-semibold">Shortcut 2</p>
          <label 
            className="w-[90%] flex flex-col"
            >
            <p className="w-fit ml-2 mb-1 pr-8 text-xs font-semibold text-green-400 border border-transparent border-b-gray-500">Title</p>
            <CompInputText text={labelShortcut2} set_text={set_labelShortcut2} width={'100%'}/>
          </label>
          <label 
            className="w-[90%] flex flex-col"
            >
            <p className="w-fit ml-2 mb-1 pr-8 text-xs font-semibold text-green-400 border border-transparent border-b-gray-500">Url</p>
            <CompInputText text={urlShortcut2} set_text={set_urlShortcut2} width={'100%'}/>
          </label>

          <div 
            className="w-[90%]"
          >
            <p className="w-fit ml-2 mb-1 pr-8 text-xs font-semibold text-green-400 border border-transparent border-b-gray-500">Icon</p>

            <ShortcutsIcons 
              iconShortcut={iconShortcut2}
              set_iconShortcut={set_iconShortcut2}
            />
          </div>
        </div>
      )}


      <div 
        className="flex justify-center w-full gap-24 mt-3"
      >
        <button
          onClick={handleConfirm}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Confirm
        </button>
        <button
          onClick={() => set_modalSettingsEditShortcuts(false)}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ModalEditShortcuts