import React from 'react'

interface IProps {
  actualSection: 'core' | 'status' | 'others',
  set_actualSection: React.Dispatch<React.SetStateAction<'core' | 'status' | 'others'>>
}

const SettingsHeader = ( { actualSection, set_actualSection }:IProps ) => {
  return (
    <ul
      className="flex gap-2 mt-4"
    >
      <li 
        onClick={() => set_actualSection('core')}
        className="bg-gray-700 p-0 px-2 rounded-md text-gray-400 cursor-pointer transition-all duraction-500 border border-transparent hover:border-gray-400"
        style={{
          backgroundColor: actualSection === 'core' ? 'rgb(75 85 99)' : 'rgb(55 65 81)',
          color: actualSection === 'core' ? 'rgb(74 222 128)' : 'rgb(156 163 175)',
          paddingLeft: actualSection === 'core' ? '1.25rem' : '8px',
          paddingRight: actualSection === 'core' ? '1.25rem' : '8px',
        }}
      >
        CORE
      </li>
      <li
        onClick={() => set_actualSection('status')}
        className="bg-gray-700 p-0 px-2 rounded-md text-gray-400 cursor-pointer transition-all duraction-500 border border-transparent hover:border-gray-400"
        style={{
          backgroundColor: actualSection === 'status' ? 'rgb(75 85 99)' : 'rgb(55 65 81)',
          color: actualSection === 'status' ? 'rgb(74 222 128)' : 'rgb(156 163 175)',
          paddingLeft: actualSection === 'status' ? '1.25rem' : '8px',
          paddingRight: actualSection === 'status' ? '1.25rem' : '8px',
        }}
      >
        STATUS
      </li>
      <li 
        onClick={() => set_actualSection('others')}
        className="bg-gray-700 p-0 px-2 rounded-md text-gray-400 cursor-pointer transition-all duraction-500 border border-transparent hover:border-gray-400"
        style={{
          backgroundColor: actualSection === 'others' ? 'rgb(75 85 99)' : 'rgb(55 65 81)',
          color: actualSection === 'others' ? 'rgb(74 222 128)' : 'rgb(156 163 175)',
          paddingLeft: actualSection === 'others' ? '1.25rem' : '8px',
          paddingRight: actualSection === 'others' ? '1.25rem' : '8px',
        }}
      >
        OTHERS
      </li>
    </ul>
  )
}

export default SettingsHeader