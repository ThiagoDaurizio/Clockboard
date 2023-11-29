import React from 'react'

interface IProps {
  text: string
  set_text: React.Dispatch<React.SetStateAction<string>>
  width?: number | string
}

const CompInputText = ( { text, set_text, width = 200 }:IProps ) => {
  return (
    <input
      className="bg-gray-800 border border-gray-400 rounded-md h-8 p-2 text-gray-300"
      style={{width: width}}
      value={text}
      onChange={(event) => set_text(event.target.value)}
    />
  )
}

export default CompInputText