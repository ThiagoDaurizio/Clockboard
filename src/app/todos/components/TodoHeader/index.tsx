'use client'
import { modalContext } from '@/context/modalsContext'
import React from 'react'

const TodoHeader = (  ) => {
  const { set_modalCreateTodo } = modalContext()

  return (
    <div className="flex flex-col items-center m-4">
      <button 
        onClick={() => set_modalCreateTodo(true)}
        className="bg-violet-600 p-12 py-1 rounded-t-lg border border-gray-400  border-b-transparent text-lg text-gray-200 font-semibold transition-colors duration-300 hover:bg-violet-700"
      >
        CREATE TODO
      </button>
      <input className="w-[320px] h-8 rounded-md bg-gray-700 border border-gray-400 p-2 py-1 text-gray-300"/>
      <span className="bg-gray-700 text-violet-600 p-4 py-0 border border-gray-400 border-t-transparent rounded-b-md">Search</span>
    </div>
  )
}

export default TodoHeader