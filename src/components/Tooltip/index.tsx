import React from 'react'

interface IProps {
  label: string
}

const CompTooltip = ( { label }:IProps ) => {
  return (
    <div    
      className="absolute z-50 -top-8 left-[100%] transform translate-x-[-50%] flex items-center justify-center whitespace-nowrap p-1 px-2 bg-gray-800 border border-gray-400 text-green-300 min-w-fit h-6 text-sm rounded-3xl transition-all duration-700 pointer-events-none opacity-0 group-hover:opacity-90"
    >
      {label}
    </div>
  )
}

export default CompTooltip