import React from 'react'

interface IProps {
  set_modalCreateTodoIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const CompTodoHeader = ( { set_modalCreateTodoIsOpened }:IProps ) => {
  return (
    <div className="flex flex-col items-center m-4">
      <button 
        onClick={() => set_modalCreateTodoIsOpened(true)}
        className="bg-violet-600 p-12 py-1 rounded-t-lg border border-gray-400  border-b-transparent text-lg text-gray-200 font-semibold transition-colors duration-300 hover:bg-violet-700"
      >
        CREATE
      </button>
      <input className="w-[320px] h-8 rounded-md bg-gray-700 border border-gray-400 p-2 py-1 text-gray-300"/>
      <span className="bg-gray-700 text-violet-600 p-4 py-0 border border-gray-400 border-t-transparent rounded-b-md">Search</span>
    </div>
  )
}

export default CompTodoHeader