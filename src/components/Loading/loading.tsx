'use client'
import { IconsApp } from '@/assets/icons'
import { globalContext } from '@/context/global'

import React from 'react'

const Loading = () => {
  const { isLoading } = globalContext()
  return (
    <div>
      {isLoading && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-gray-800/60 z-50">
          <div className="animate-ping fixed top-[50%] left-[50%] text-5xl text-violet-500">
            <IconsApp.logo/>
          </div>
        </div>
      )}
    </div>
  )
}

export default Loading