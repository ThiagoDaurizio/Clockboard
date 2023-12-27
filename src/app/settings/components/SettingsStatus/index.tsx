'use client'
import { IconsApp } from '@/assets/icons'
import CompTooltip from '@/components/Tooltip'
import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import { TypedStatus } from '@/types/Theme'
import React from 'react'

interface IProps {
  set_actualStatus: React.Dispatch<React.SetStateAction<TypedStatus>>
}

const SettingsStatus = ( { set_actualStatus }: IProps ) => {
  const { set_modalSettingsCreateStatus, set_modalSettingsEditStatus, set_modalSettingsDeleteStatus } = modalContext()
  const { userTheme } = globalContext()

  const handleEditStatus = (status: TypedStatus) => {
    set_actualStatus(status)
    set_modalSettingsEditStatus(true)
  }
  
  const handleDeleteStatus = (status: TypedStatus) => {
    set_actualStatus(status)
    set_modalSettingsDeleteStatus(true)
  }

  return (
    <div
      className="flex flex-col gap-4 bg-gray-800 border border-gray-400 rounded-md p-4 text-gray-300 w-[300px] max-h-[80vh]"
    >
      <h1 className="text-center border border-transparent border-b-violet-600 w-[90%] mx-auto font-semibold">STATUS LIST</h1>

      <button 
        onClick={() => set_modalSettingsCreateStatus(true)}
        className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors border border-gray-300 duration-300 hover:bg-violet-700"
      >
        Create Status
      </button>
      <ul
        className="flex flex-col gap-3 w-full"
      >
        {userTheme?.data?.status?.map((item) => {
          return(
            <li 
              key={item.id}
              className="flex justify-between gap-1 w-full"
            >
              <div 
                className="flex items-center w-full gap-1"
              >
                <span 
                  className="inline-block h-6 w-6 rounded-sm border border-gray-300"
                  style={{backgroundColor: item.color}}
                />
                <p className="whitespace-nowrap flex-1 truncate max-w-[170px]">{item.label}</p>
              </div>

              <div className='flex gap-2'>
                <button 
                  onClick={() => handleEditStatus(item)}
                  className="relative group transition-all duration-300 p-1 bg-gray-600 rounded-full border-2 border-gray-300 text-gray-200 text-xl w-6 h-6 flex justify-center items-center hover:bg-gray-700 hover:text-green-400"
                >
                  <IconsApp.edit/>
                  <CompTooltip label='Edit'/>
                </button>
                <button 
                  onClick={() => handleDeleteStatus(item)}
                  className="relative group transition-all duration-300 p-1 bg-gray-600 rounded-full border-2 border-gray-300 text-gray-200 text-xl w-6 h-6 flex justify-center items-center hover:bg-gray-700 hover:border-rose-600 hover:text-rose-500"
                >
                  <IconsApp.delete/>
                  <CompTooltip label='Delete'/>
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SettingsStatus