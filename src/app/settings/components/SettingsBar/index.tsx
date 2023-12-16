'use client'
import { IconsApp } from '@/assets/icons'
import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import React from 'react'

const SettingsBar = () => {
  const { set_modalSettingsEditMarkers, set_modalSettingsEditInfolabels, set_modalSettingsEditShortcuts } = modalContext()
  const { userTheme } = globalContext()

  return (
    <div
      className="flex flex-col gap-4 bg-gray-800 border border-gray-400 rounded-md p-4 text-gray-300 w-[300px] max-h-[80vh]"
    >
      <h1 className="text-center border border-transparent border-b-violet-600 w-[90%] mx-auto font-semibold">LABELS</h1>
      <div
        className="flex justify-between items-center"
      >
        <div className="flex flex-col gap-4">
          <p className="flex flex-col">
            <span className="text-xs text-green-400 font-medium">
              Label 1
            </span>
            <span className="pl-4 text-gray-300">
              {userTheme?.data?.infoLabel1}
            </span>
          </p>

          <p className="flex flex-col">
            <span className="text-xs text-green-400 font-medium">
              Label 2
            </span>
            <span className="pl-4 text-gray-300">
              {userTheme?.data?.infoLabel2}
            </span>
          </p>
        </div>
        <button 
          onClick={() => set_modalSettingsEditInfolabels(true)}
          className="transition-all duration-300 p-1 bg-gray-600 rounded-full border-2 border-gray-300 text-gray-200 text-xl w-8 h-8 flex justify-center items-center hover:bg-gray-700 hover:text-green-400"
        >
          <IconsApp.edit/>
        </button>
      </div>

      <h1 className="text-center border border-transparent border-b-violet-600 w-[90%] mx-auto font-semibold">MARKERS</h1>
      <div className="flex items-center justify-between">
        <ul className="flex flex-col gap-2">
          {userTheme?.data?.markers?.map((item) => {
            return(
              <li className="flex gap-2 items-center">
                <span  
                  className='inline-block h-6 w-6 rounded-sm border border-gray-300'
                  style={{backgroundColor: item.color}}
                />
                <p className="flex gap-1 items-center">
                  <span className="text-green-400 text-lg">
                    {item.position}.
                  </span>
                  <span>
                    {item.label}
                  </span>
                </p>
              </li>
            )
          })}
        </ul>
        <button 
          onClick={() => set_modalSettingsEditMarkers(true)}
          className="transition-all duration-300 p-1 bg-gray-600 rounded-full border-2 border-gray-300 text-gray-200 text-xl w-8 h-8 flex justify-center items-center hover:bg-gray-700 hover:text-green-400"
        >
          <IconsApp.edit/>
        </button>
      </div>

      <h1 className="text-center border border-transparent border-b-violet-600 w-[90%] mx-auto font-semibold">SHORTCUTS</h1>

      <div
        className="flex justify-between items-center"
      >
        <div className="flex flex-col gap-4">
          <p className="flex flex-col">
            <span className="text-xs text-green-400 font-medium">
              Shortcut 1
            </span>
            <span className="pl-4 text-gray-300">
              {userTheme?.data?.shortcut1?.label}
            </span>
          </p>

          <p className="flex flex-col">
            <span className="text-xs text-green-400 font-medium">
              Shortcut 2
            </span>
            <span className="pl-4 text-gray-300">
              {userTheme?.data?.shortcut2?.label}
            </span>
          </p>
        </div>
        <button 
          onClick={() => set_modalSettingsEditShortcuts(true)}
          className="transition-all duration-300 p-1 bg-gray-600 rounded-full border-2 border-gray-300 text-gray-200 text-xl w-8 h-8 flex justify-center items-center hover:bg-gray-700 hover:text-green-400"
        >
          <IconsApp.edit/>
        </button>
      </div>
    </div>
  )
}

export default SettingsBar