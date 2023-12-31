'use client'
import { IconsApp } from '@/assets/icons'
import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import React, { useEffect, useState } from 'react'
import SettingsUser from '../SettingsUser'
import { TypedMarker, TypedShortcut } from '@/types/Theme'
import CompTooltip from '@/components/Tooltip'

const SettingsBar = () => {
  const { set_modalSettingsEditMarkers, set_modalSettingsEditInfolabels, set_modalSettingsEditShortcuts } = modalContext()
  const { userTheme, getUserTheme } = globalContext()

  const [settingsInfolabel1, set_settingsInfolabel1] = useState<string>('')
  const [settingsInfolabel2, set_settingsInfolabel2] = useState<string>('')

  const [settingsMarkers, set_settingsMarkers] = useState<TypedMarker[]>([])

  const [settingsShortcut1, set_settingsShortcut1] = useState<TypedShortcut>({label: '', url: '#', icon: ''} as TypedShortcut)
  const [settingsShortcut2, set_settingsShortcut2] = useState<TypedShortcut>({label: '', url: '#', icon: ''} as TypedShortcut)

  useEffect(() => {
    set_settingsInfolabel1(userTheme?.data?.infoLabel1)
    set_settingsInfolabel2(userTheme?.data?.infoLabel2)
    
    set_settingsMarkers(userTheme?.data?.markers)
    
    set_settingsShortcut1(userTheme?.data?.shortcut1)
    set_settingsShortcut2(userTheme?.data?.shortcut2)
  }, [userTheme])


  return (
    <div
      className="flex flex-col gap-4 bg-gray-800 border border-gray-400 rounded-md p-4 text-gray-300 w-[300px] max-h-[85vh]"
    >
      <SettingsUser/>
      <h1 className="text-center border border-transparent border-b-violet-600 w-[90%] mx-auto font-semibold">LABELS</h1>
      <div
        className="flex justify-between items-center"
      >
        <div className="flex flex-col gap-4">
          <p className="flex flex-col">
            <span className="text-xs text-green-400 font-medium">
              Label 1
            </span>
            <span className="pl-4 text-gray-300 max-w-[220px] truncate">
              {settingsInfolabel1}
            </span>
          </p>

          <p className="flex flex-col">
            <span className="text-xs text-green-400 font-medium">
              Label 2
            </span>
            <span className="pl-4 text-gray-300 max-w-[220px] truncate">
              {settingsInfolabel2}
            </span>
          </p>
        </div>
        <button 
          onClick={() => set_modalSettingsEditInfolabels(true)}
          className="relative group transition-all duration-300 p-1 bg-gray-600 rounded-full border-2 border-gray-300 text-gray-200 text-xl w-8 h-8 flex justify-center items-center hover:bg-gray-700 hover:text-green-400"
        >
          <IconsApp.edit/>
          <CompTooltip label='Edit'/>
        </button>
      </div>

      <h1 className="text-center border border-transparent border-b-violet-600 w-[90%] mx-auto font-semibold">MARKERS</h1>
      <div className="flex items-center justify-between">
        <ul className="flex flex-col gap-2 w-full">
          {settingsMarkers?.map((item) => {
            return(
              <li className="flex gap-2 items-center">
                <span  
                  className='inline-block h-6 w-6 rounded-sm border border-gray-300'
                  style={{backgroundColor: item.color}}
                />
                <p className="flex gap-1 items-center w-full">
                  <span className="text-green-400 text-lg">
                    {item.position}.
                  </span>
                  <span className="flex-1 truncate max-w-[180px]">
                    {item.label}
                  </span>
                </p>
              </li>
            )
          })}
        </ul>
        <button 
          onClick={() => set_modalSettingsEditMarkers(true)}
          className="relative group transition-all duration-300 p-1 bg-gray-600 rounded-full border-2 border-gray-300 text-gray-200 text-xl w-8 h-8 flex justify-center items-center hover:bg-gray-700 hover:text-green-400"
        >
          <IconsApp.edit/>
          <CompTooltip label='Edit'/>
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
              {settingsShortcut1?.label}
            </span>
          </p>

          <p className="flex flex-col">
            <span className="text-xs text-green-400 font-medium">
              Shortcut 2
            </span>
            <span className="pl-4 text-gray-300">
              {settingsShortcut2?.label}
            </span>
          </p>
        </div>
        <button 
          onClick={() => set_modalSettingsEditShortcuts(true)}
          className="relative group transition-all duration-300 p-1 bg-gray-600 rounded-full border-2 border-gray-300 text-gray-200 text-xl w-8 h-8 flex justify-center items-center hover:bg-gray-700 hover:text-green-400"
        >
          <IconsApp.edit/>
          <CompTooltip label='Edit'/>
        </button>
      </div>
    </div>
  )
}

export default SettingsBar