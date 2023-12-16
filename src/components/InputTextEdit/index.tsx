'use client'
import { IconsApp } from '@/assets/icons'
import React, { useState } from 'react'

interface IProps {
  text: string
  set_text: React.Dispatch<React.SetStateAction<string>>
  width?: number | string
}

const CompInputTextEdit = ( { text, set_text, width = 200 }:IProps ) => {
  const [isEditing, set_isEditing] = useState<boolean>(false)

  return (
    <>
    {isEditing ?
        <div>
          <input
            className="bg-gray-800 border text-base border-gray-400 rounded-md h-8 p-2 text-gray-300 transition-colors duration-500 focus:border-violet-500 focus:text-gray-200"
            style={{width: width}}
            value={text}
            onChange={(event) => set_text(event.target.value)}
          />
          <button>
            <IconsApp.accept/>
          </button>
          <button>
            <IconsApp.decline/>
          </button>
        </div>
        :
        <div>
          <p>{text}</p>
        </div>
    }
    </>
  )
}

export default CompInputTextEdit