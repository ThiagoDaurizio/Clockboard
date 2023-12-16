'use client'
import CompInputText from '@/components/InputText'
import CompInputTextEdit from '@/components/InputTextEdit'
import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import React, { useEffect, useState } from 'react'

const ModalEditInfolabels = () => {
  const { userTheme, callEditInfolabels } = globalContext()
  const { modalSettingsEditInfolabels, set_modalSettingsEditInfolabels } = modalContext()
  const [infolabel1, set_infolabel1] = useState<string>('')
  const [infolabel2, set_infolabel2] = useState<string>('')

  useEffect(() => {
    set_infolabel1(userTheme?.data?.infoLabel1)
    set_infolabel2(userTheme?.data?.infoLabel2)
  }, [modalSettingsEditInfolabels])

  const handleConfirm = () => {
    callEditInfolabels(infolabel1, infolabel2)
    set_modalSettingsEditInfolabels(false)
  }


  return (
    <>
      <label 
        className="w-[90%] flex flex-col"
      >
        <p className="w-fit ml-2 mb-1 pr-8 text-xs font-semibold text-green-400 border border-transparent border-b-gray-500">Label 1</p>
        <CompInputText text={infolabel1} set_text={set_infolabel1} width={'100%'}/>
      </label>

      <label 
        className="w-[90%] flex flex-col"
      >
        <p className="w-fit ml-2 mb-1 pr-8 text-xs font-semibold text-green-400 border border-transparent border-b-gray-500">Label 2</p>
        <CompInputText text={infolabel2} set_text={set_infolabel2} width={'100%'}/>
      </label>

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
          onClick={() => set_modalSettingsEditInfolabels(false)}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default ModalEditInfolabels