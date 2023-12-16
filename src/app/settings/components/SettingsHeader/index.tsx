import React from 'react'
import { ActualSectionENUM } from '../../page'

interface IProps {
  actualSection: ActualSectionENUM,
  set_actualSection: React.Dispatch<React.SetStateAction<ActualSectionENUM>>
}

const SettingsHeader = ( { actualSection, set_actualSection }:IProps ) => {
  return (
    <ul
      className="flex gap-2 mt-4"
    >
      <li 
        onClick={() => set_actualSection(ActualSectionENUM.core)}
        className="bg-gray-700 p-0 px-2 rounded-md text-gray-400 cursor-pointer transition-all duraction-500 border border-transparent hover:border-gray-400"
        style={{
          backgroundColor: actualSection === ActualSectionENUM.core ? 'rgb(75 85 99)' : 'rgb(55 65 81)',
          color: actualSection === ActualSectionENUM.core ? 'rgb(74 222 128)' : 'rgb(156 163 175)',
          paddingLeft: actualSection === ActualSectionENUM.core ? '1.25rem' : '8px',
          paddingRight: actualSection === ActualSectionENUM.core ? '1.25rem' : '8px',
        }}
      >
        CORE
      </li>
      <li
        onClick={() => set_actualSection(ActualSectionENUM.status)}
        className="bg-gray-700 p-0 px-2 rounded-md text-gray-400 cursor-pointer transition-all duraction-500 border border-transparent hover:border-gray-400"
        style={{
          backgroundColor: actualSection === ActualSectionENUM.status ? 'rgb(75 85 99)' : 'rgb(55 65 81)',
          color: actualSection === ActualSectionENUM.status ? 'rgb(74 222 128)' : 'rgb(156 163 175)',
          paddingLeft: actualSection === ActualSectionENUM.status ? '1.25rem' : '8px',
          paddingRight: actualSection === ActualSectionENUM.status ? '1.25rem' : '8px',
        }}
      >
        STATUS
      </li>
      <li
        onClick={() => set_actualSection(ActualSectionENUM.shortcuts)}
        className="bg-gray-700 p-0 px-2 rounded-md text-gray-400 cursor-pointer transition-all duraction-500 border border-transparent hover:border-gray-400"
        style={{
          backgroundColor: actualSection === ActualSectionENUM.shortcuts ? 'rgb(75 85 99)' : 'rgb(55 65 81)',
          color: actualSection === ActualSectionENUM.shortcuts ? 'rgb(74 222 128)' : 'rgb(156 163 175)',
          paddingLeft: actualSection === ActualSectionENUM.shortcuts ? '1.25rem' : '8px',
          paddingRight: actualSection === ActualSectionENUM.shortcuts ? '1.25rem' : '8px',
        }}
      >
        SHORTCUTS
      </li>
      <li 
        onClick={() => set_actualSection(ActualSectionENUM.others)}
        className="bg-gray-700 p-0 px-2 rounded-md text-gray-400 cursor-pointer transition-all duraction-500 border border-transparent hover:border-gray-400"
        style={{
          backgroundColor: actualSection === ActualSectionENUM.others ? 'rgb(75 85 99)' : 'rgb(55 65 81)',
          color: actualSection === ActualSectionENUM.others ? 'rgb(74 222 128)' : 'rgb(156 163 175)',
          paddingLeft: actualSection === ActualSectionENUM.others ? '1.25rem' : '8px',
          paddingRight: actualSection === ActualSectionENUM.others ? '1.25rem' : '8px',
        }}
      >
        OTHERS
      </li>
    </ul>
  )
}

export default SettingsHeader