'use client'
import CompInputText from '@/components/InputText'
import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import { TypedStatus } from '@/types/Theme'
import React, { useEffect, useState } from 'react'
import SettingsColorPreset from '../../components/SettingsColorPreset'

interface IProps {
  actualStatus: TypedStatus
}

const ModalEditStatus = ( { actualStatus }:IProps ) => {
  const { modalSettingsEditStatus, set_modalSettingsEditStatus } = modalContext()
  const { callEditStatus } = globalContext()

  const [statusTitle, set_statusTitle] = useState<string>('')
  const [statusColor, set_statusColor] = useState<string>('')
  const [statusTextColor, set_statusTextColor] = useState<boolean>(false)

  useEffect(() => {
    if(modalSettingsEditStatus){
      modalSetup()
    }
  }, [modalSettingsEditStatus])

  const modalSetup = () => {
    set_statusTitle(actualStatus.label)
    set_statusColor(actualStatus.color)
    set_statusTextColor(actualStatus.colorText)
  }

  const handleConfirm = async () => {
    const body: TypedStatus = {
      id: actualStatus.id,
      label: statusTitle,
      color: statusColor,
      colorText: statusTextColor
    }

    callEditStatus(actualStatus.id, body)
    set_modalSettingsEditStatus(false)
  }

  const handleColor = (colorHex: string) => {
    set_statusColor(colorHex)
  }

  return (
    <>
      <label 
        className="w-full"
      >
        <span className="text-green-400 text-sm mb-1 pl-1">
          Status Title
        </span>
        <CompInputText text={statusTitle} set_text={set_statusTitle} width={'100%'}/>
      </label>

      <SettingsColorPreset 
        handleColor={handleColor}
      />

      <label 
        className="w-[80%] h-8 flex justify-center items-center relative cursor-pointer font-medium rounded-t-md rounded-b-xl tracking-wider"
        style={{backgroundColor: statusColor}}
      >
        <input 
          type={'color'}
          value={statusColor}
          onChange={(event) => set_statusColor(event.target.value)}
          className="appearance-none opacity-0 pointer-events-none absolute"
        />
        <p className={`${statusTextColor ? 'text-gray-200' : 'text-gray-900'}`}>{statusTitle}</p>
      </label>

    <div
      onClick={() => set_statusTextColor(!statusTextColor)}
      className={`w-[60px] h-[30px] ${statusTextColor ? 'bg-gray-800' : 'bg-gray-400'} rounded-3xl transition-colors duration-200 flex items-center cursor-pointer`}
    >
      <span
        className={`w-[26px] h-[26px] rounded-full ${statusTextColor ? 'text-gray-200' : 'text-gray-900'} block transform ${statusTextColor ? 'translate-x-[32px]' : 'translate-x-[2px]'} transition-transform duration-300 flex justify-center items-center font-bold text-lg`}
      >A</span>
    </div>


      <div 
        className="flex justify-center w-full gap-24 mt-3"
      >
        <button
          onClick={handleConfirm}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Create
        </button>
        <button
          onClick={() => set_modalSettingsEditStatus(false)}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Cancelar
        </button>
      </div>
    </>
  )
}

export default ModalEditStatus