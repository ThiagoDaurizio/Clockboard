import React from 'react'

const colors = [
  '#907AD6',
  '#06BEE1',
  '#7AE693',
  '#dacf51', 
  '#F4A261',
  '#ED4949',
  '#E426A5'
]

interface IProps {
  handleColor: (colorHex: string) => void
}

const SettingsColorPreset = ( { handleColor }:IProps ) => {
  return (
    <ul className="flex gap-3">
      {colors.map((item) => {
        return(
          <li 
            onClick={() => handleColor(item)}
            className="w-6 h-5 cursor-pointer border bordar-gray-200 rounded-sm"
            style={{backgroundColor: item}}
          >

          </li>
        )
      })}
    </ul>
  )
}

export default SettingsColorPreset