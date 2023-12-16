import React from 'react'

interface IProps {
  actualShortcut: 1 | 2
  set_actualShortcut: React.Dispatch<React.SetStateAction<1 | 2>>
}

const ShortcutsTab = ( { actualShortcut, set_actualShortcut }:IProps ) => {
  return (
    <ul
      className="flex justify-center gap-2"
    >
      {actualShortcut === 1 ?
        <li
          onClick={() => set_actualShortcut(1)}
          className="flex justify-center items-center text-xl w-10 h-8 bg-violet-600 rounded-l-lg rounded-r-sm text-gray-200 font-semibold cursor-pointer transition-colors duration-300 hover:bg-violet-700 hover:text-gray-200"
        >
          1
        </li>
        :
        <li
          onClick={() => set_actualShortcut(1)}
          className="flex justify-center items-center text-xl w-10 h-8 bg-gray-600 rounded-l-lg rounded-r-sm text-gray-400 font-semibold cursor-pointer transition-colors duration-300 hover:bg-violet-600 hover:text-gray-200"
        >
          1
        </li>
      }
      {actualShortcut === 2 ?
        <li
          onClick={() => set_actualShortcut(2)}
          className="flex justify-center items-center text-xl w-10 h-8 bg-violet-600 rounded-r-lg rounded-l-sm text-gray-200 font-semibold cursor-pointer transition-colors duration-300 hover:bg-violet-700 hover:text-gray-200"
        >
          2
        </li>
        :
        <li
          onClick={() => set_actualShortcut(2)}
          className="flex justify-center items-center text-xl w-10 h-8 bg-gray-600 rounded-r-lg rounded-l-sm text-gray-400 font-semibold cursor-pointer transition-colors duration-300 hover:bg-violet-600 hover:text-gray-200"
        >
          2
        </li>
      }
    </ul>
  )
}

export default ShortcutsTab