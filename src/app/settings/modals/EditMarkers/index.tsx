'use client'
import CompInputText from '@/components/InputText'
import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import { TypedMarker } from '@/types/Theme'
import React, { useEffect, useState } from 'react'

const ModalEditMarkers = () => {
  const { userTheme, callEditMarker } = globalContext()
  const { modalSettingsEditMarkers, set_modalSettingsEditMarkers } = modalContext()
  const [actualMarker, set_actualMarker] = useState<null | 1 | 2 | 3 | 4>(null)

  const [labelMarker1, set_labelMarker1] = useState<string>('')
  const [labelMarker2, set_labelMarker2] = useState<string>('')
  const [labelMarker3, set_labelMarker3] = useState<string>('')
  const [labelMarker4, set_labelMarker4] = useState<string>('')

  const [colorMarker1, set_colorMarker1] = useState<string>('')
  const [colorMarker2, set_colorMarker2] = useState<string>('')
  const [colorMarker3, set_colorMarker3] = useState<string>('')
  const [colorMarker4, set_colorMarker4] = useState<string>('')

  useEffect(() => {
    if(modalSettingsEditMarkers){
      modalSetup()
    }

  }, [modalSettingsEditMarkers])


  const modalSetup = () => {
    userTheme.data.markers.map((item) => {
      if(item.position === 1){
        set_labelMarker1(item.label)
        set_colorMarker1(item.color)
      }

      if(item.position === 2){
        set_labelMarker2(item.label)
        set_colorMarker2(item.color)
      }

      if(item.position === 3){
        set_labelMarker3(item.label)
        set_colorMarker3(item.color)
      }

      if(item.position === 4){
        set_labelMarker4(item.label)
        set_colorMarker4(item.color)
      }

      return
    })
  }

  const handleConfirm = () => {
    const body:TypedMarker[] = [
      {position: 1, label: labelMarker1, color: colorMarker1},
      {position: 2, label: labelMarker2, color: colorMarker2},
      {position: 3, label: labelMarker3, color: colorMarker3},
      {position: 4, label: labelMarker4, color: colorMarker4}
    ]

    callEditMarker(body)
    set_modalSettingsEditMarkers(false)
  }


  return (
    <div className="flex flex-col items-center gap-4 w-full">

      <div className="w-full flex flex-col gap-1">
        <p className="w-fit ml-1 pr-8 text-xs font-semibold text-green-400 border border-transparent border-b-gray-500">Marker 1</p>
        <div 
          className="flex justify-center items-center gap-2 w-full"
        >
          <label 
            className="w-8 h-8 flex justify-center items-center relative cursor-pointer font-medium rounded-md tracking-wider"
            style={{backgroundColor: colorMarker1}}
          >
            <input 
              type={'color'}
              value={colorMarker1}
              onChange={(event) => set_colorMarker1(event.target.value)}
              className="appearance-none opacity-0 pointer-events-none absolute"
            />
          </label>
          <CompInputText text={labelMarker1} set_text={set_labelMarker1} width={'80%'}/>
        </div>
      </div>

      <div className="w-full flex flex-col gap-1">
        <p className="w-fit ml-1 pr-8 text-xs font-semibold text-green-400 border border-transparent border-b-gray-500">Marker 2</p>
        <div 
          className="flex justify-center items-center gap-2 w-full"
        >
          <label 
            className="w-8 h-8 flex justify-center items-center relative cursor-pointer font-medium rounded-md tracking-wider"
            style={{backgroundColor: colorMarker2}}
          >
            <input 
              type={'color'}
              value={colorMarker2}
              onChange={(event) => set_colorMarker2(event.target.value)}
              className="appearance-none opacity-0 pointer-events-none absolute"
            />
          </label>
          <CompInputText text={labelMarker2} set_text={set_labelMarker2} width={'80%'}/>
        </div>
      </div>

      <div className="w-full flex flex-col gap-1">
        <p className="w-fit ml-1 pr-8 text-xs font-semibold text-green-400 border border-transparent border-b-gray-500">Marker 3</p>

        <div 
          className="flex justify-center items-center gap-2 w-full"
          >
          <label 
            className="w-8 h-8 flex justify-center items-center relative cursor-pointer font-medium rounded-md tracking-wider"
            style={{backgroundColor: colorMarker3}}
            >
            <input 
              type={'color'}
              value={colorMarker3}
              onChange={(event) => set_colorMarker3(event.target.value)}
              className="appearance-none opacity-0 pointer-events-none absolute"
              />
          </label>
          <CompInputText text={labelMarker3} set_text={set_labelMarker3} width={'80%'}/>
        </div>
      </div>

      <div className="w-full flex flex-col gap-1">
        <p className="w-fit ml-1 pr-8 text-xs font-semibold text-green-400 border border-transparent border-b-gray-500">Marker 4</p>
        <div 
          className="flex justify-center items-center gap-2 w-full"
        >
          <label 
            className="w-8 h-8 flex justify-center items-center relative cursor-pointer font-medium rounded-md tracking-wider"
            style={{backgroundColor: colorMarker4}}
          >
            <input 
              type={'color'}
              value={colorMarker4}
              onChange={(event) => set_colorMarker4(event.target.value)}
              className="appearance-none opacity-0 pointer-events-none absolute"
            />
          </label>
          <CompInputText text={labelMarker4} set_text={set_labelMarker4} width={'80%'}/>
        </div>
      </div>

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
          onClick={() => set_modalSettingsEditMarkers(false)}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ModalEditMarkers