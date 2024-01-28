import React from 'react'

interface IProps {
  toggle: boolean
  set_toggle: React.Dispatch<React.SetStateAction<boolean>>
  colored?: boolean
}

const CompInputToggle = ( { toggle, set_toggle, colored = true }:IProps ) => {
  return (
    <div
      onClick={() => set_toggle(!toggle)}
      className={`w-[60px] h-[30px] ${toggle && colored ? 'bg-green-400' : 'bg-gray-400'} rounded-3xl transition-colors duration-200 flex items-center cursor-pointer`}
    >
      <span
        className={`w-[26px] h-[26px] rounded-full bg-gray-300 border border-gray-200 block transform ${toggle ? 'translate-x-[32px]' : 'translate-x-[2px]'} transition-transform duration-300`}
      />
    </div>
  )
}

export default CompInputToggle