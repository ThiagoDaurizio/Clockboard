'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import { IconsMenu } from '@/assets/icons'

const menuItems = [
  {menuUrl: '/', menuLabel: 'HOME'},
  {menuUrl: '/todos', menuLabel: 'TODOS'},
  {menuUrl: '/', menuLabel: 'NOTES'},
  {menuUrl: '/', menuLabel: 'PROJECTS'},
  {menuUrl: '/', menuLabel: 'DOCS'},
  {menuUrl: '/', menuLabel: 'LINKS'},
]

const Menubar = () => {
  const [isOpened, set_isOpened] = useState<boolean>(false)

  return (
    <div 
      className="fixed bottom-0 bg-gray-800 border border-transparent border-x-violet-600 rounded-t-3xl left-[50%] transform translate-x-[-50%] w-[160px] shadow-2xl"
    >
      <div 
        onClick={() =>  set_isOpened(!isOpened)}
        className='bg-violet-600 h-[44px] cursor-pointer rounded-t-2xl flex justify-between items-center'>
          <p 
            className="text-center bg-gray-700 m-auto px-2 rounded-full text-green-400 font-medium border border-gray-300 transition-all duration-500"
            style={{color: isOpened ? 'lime' : '', filter: isOpened ? 'drop-shadow(0px 0px 5px rgba(150, 200, 100, 1))' : ''}}
          >
            MENU
          </p>
      </div>
      <ul 
        className="overflow-hidden transition-all duration-700 flex flex-col items-center"
        style={{height : isOpened ? '260px' : '0px'}}
      >
        {menuItems?.map((item) => {
          return(
            <li
              className="p-2 py-1 w-[144px] text-center text-gray-300 border border-transparent border-b-violet-500"
            >
              <Link 
                onClick={() => set_isOpened(false)} href={item.menuUrl}
                className="bg-gray-700 w-[90%] mx-auto block rounded-md transition-all duration-300 hover:bg-gray-600 hover:text-green-400 hover:w-[95%]"
                >
                  {item.menuLabel}
                </Link>
            </li>
          )
        })}
        <div 
          onClick={() => set_isOpened(false)}
          className="flex flex-1 w-full justify-between text-2xl p-4 px-3 text-green-400"
        >
          <Link href={'https://github.com/'} target='_blank' className=" transition-all duration-500 hover:text-green-500 transform hover:-translate-y-1 border border-transparent hover:border-b-violet-500 hover:pb-1">
            <IconsMenu.github/>
          </Link>
          <Link href={'https://open.spotify.com/'} target='_blank' className=" transition-all duration-500 hover:text-green-500 transform hover:-translate-y-1 border border-transparent hover:border-b-violet-500 hover:pb-1">
            <IconsMenu.spotify/>
          </Link>
          <Link href={'/'} className=" transition-all duration-300 hover:text-green-500 transform hover:-translate-y-1 border border-transparent hover:border-b-violet-500 hover:pb-1">
            <IconsMenu.settings/>
          </Link>
        </div>
      </ul>
    </div>
  )
}

export default Menubar