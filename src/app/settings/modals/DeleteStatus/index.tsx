'use client'
import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import { todosContext } from '@/context/todosContext'
import { TypedStatus } from '@/types/Theme'
import React from 'react'

interface IProps {
  actualStatus: TypedStatus
}

const ModalDeleteStatus = ( { actualStatus }:IProps ) => {
  const { set_modalSettingsDeleteStatus } = modalContext()
  const { callDeleteStatus } = globalContext()

  const handleConfirm = async () => {
    callDeleteStatus(actualStatus.id)
    set_modalSettingsDeleteStatus(false)
  }

  return (
    <div className="w-[280px] h-[120px] bg-gray-700 rounded-md flex flex-col justify-between items-center p-4">
      <h1 className="text-gray-200 text-lg font-semibold">Really want delete this Status?</h1>

      <div className="flex gap-8">
        <button 
          className="transition-all duration-300 p-1 PX-2 bg-gray-600 border border-gray-300 rounded-md text-rose-500 text-lg w-24 h-8 flex justify-center items-center hover:bg-gray-700 hover:border-rose-600"
          onClick={handleConfirm}
        >
          Confirm
        </button>
        <button 
          className="transition-all duration-300 p-1 PX-2 bg-violet-600 border border-gray-300 rounded-md text-gray-200 text-lg w-24 h-8 flex justify-center items-center hover:bg-violet-700"
          onClick={() => set_modalSettingsDeleteStatus(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ModalDeleteStatus