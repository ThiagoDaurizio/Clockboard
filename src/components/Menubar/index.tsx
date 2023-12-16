'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import { IconsApp, IconsMenu } from '@/assets/icons'
import { globalContext } from '@/context/global'

const menuItems = [
  {menuUrl: '/', menuLabel: 'HOME'},
  {menuUrl: '/todos', menuLabel: 'TODOS'},
  {menuUrl: '/', menuLabel: 'NOTES'},
  {menuUrl: '/', menuLabel: 'PROJECTS'},
  {menuUrl: '/', menuLabel: 'DOCS'},
  {menuUrl: '/', menuLabel: 'LINKS'},
]

const Menubar = () => {
  const { userTheme } = globalContext()
  const [isOpened, set_isOpened] = useState<boolean>(false)

  const [hoveredLink1, set_hoveredLink1] = useState<boolean>(false)
  const [hoveredLink2, set_hoveredLink2] = useState<boolean>(false)
  const [hoveredLink3, set_hoveredLink3] = useState<boolean>(false)

  const getMenuIcon1 = () => {
    switch (userTheme?.data?.shortcut1?.icon) {
      case '':
        return <IconsApp.logo/>
      case 'gitbranch':
        return <IconsMenu.gitbranch/>
      case 'music':
        return <IconsMenu.music/>
      case 'github':
        return <IconsMenu.github/>
      case 'gitlab':
        return <IconsMenu.gitlab/>
      case 'spotify':
        return <IconsMenu.spotify/>
      case 'youtube':
        return <IconsMenu.youtube/>
      case 'chat':
        return <IconsMenu.chat/>
      case 'play':
        return <IconsMenu.play/>
      case 'react':
        return <IconsMenu.react/>
      default:
        break;
    }
  }

  const getMenuIcon2 = () => {
    switch (userTheme?.data?.shortcut2?.icon) {
      case '':
        return <IconsApp.logo/>
      case 'gitbranch':
        return <IconsMenu.gitbranch/>
      case 'music':
        return <IconsMenu.music/>
      case 'github':
        return <IconsMenu.github/>
      case 'gitlab':
        return <IconsMenu.gitlab/>
      case 'spotify':
        return <IconsMenu.spotify/>
      case 'youtube':
        return <IconsMenu.youtube/>
      case 'chat':
        return <IconsMenu.chat/>
      case 'play':
        return <IconsMenu.play/>
      case 'react':
        return <IconsMenu.react/>
      default:
        break;
    }
  }


  return (
    <div 
      className="fixed bottom-0 z-30 bg-gray-800 border border-transparent border-x-violet-600 rounded-t-3xl left-[50%] transform translate-x-[-50%] w-[160px] shadow-2xl"
    >
      <div 
        onClick={() =>  set_isOpened(!isOpened)}
        className='bg-violet-600 h-[44px] cursor-pointer rounded-t-2xl flex justify-between items-center'>
          <p 
            className="text-center bg-gray-700 m-auto px-2 rounded-full text-gray-300 font-medium border border-gray-300 transition-all duration-500"
            style={{color: isOpened ? 'lime' : '', filter: isOpened ? 'drop-shadow(0px 0px 5px rgba(150, 200, 100, 1))' : ''}}
          >
            MENU
          </p>
      </div>
      <ul 
        className="transition-all duration-700 flex flex-col items-center"
        style={{height : isOpened ? '260px' : '0px'}}
      >
        {menuItems?.map((item) => {
          return(
            <li
              key={item.menuLabel}
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
          <Link href={userTheme?.data?.shortcut1?.url ? userTheme?.data?.shortcut1?.url : '#'} target='_blank' className="relative transition-all duration-500 hover:text-green-500 transform hover:-translate-y-1 border border-transparent hover:border-b-violet-500 hover:pb-1"
            onMouseEnter={() => set_hoveredLink1(true)}
            onMouseLeave={() => set_hoveredLink1(false)}
          >
            {getMenuIcon1()}
            <span 
              className="absolute flex items-center justify-center whitespace-nowrap p-1 px-2 bg-gray-800 border border-gray-400 text-green-300 min-w-fit h-6 text-sm -top-8 left-[50%] rounded-3xl transition-all duration-300 pointer-events-none transform translate-x-[-50%]"
              style={{opacity: hoveredLink1 ? '0.90' : '0'}}
            >
              {userTheme?.data?.shortcut1?.label}
            </span>
          </Link>
          <Link href={userTheme?.data?.shortcut2?.url ? userTheme?.data?.shortcut2?.url : '#'} target='_blank' className=" transition-all duration-500 hover:text-green-500 transform hover:-translate-y-1 border border-transparent hover:border-b-violet-500 hover:pb-1"
            onMouseEnter={() => set_hoveredLink2(true)}
            onMouseLeave={() => set_hoveredLink2(false)}
          >
            {getMenuIcon2()}
            <span 
              className="absolute flex items-center justify-center whitespace-nowrap p-1 px-2 bg-gray-800 border border-gray-400 text-green-300 min-w-fit h-6 text-sm -top-8 left-[50%] rounded-3xl transition-all duration-300 pointer-events-none transform translate-x-[-50%]"
              style={{opacity: hoveredLink2 ? '0.90' : '0'}}
            >
              {userTheme?.data?.shortcut2?.label}
            </span>
          </Link>
          <Link href={'/settings'} className=" transition-all duration-300 hover:text-green-500 transform hover:-translate-y-1 border border-transparent hover:border-b-violet-500 hover:pb-1"
            onMouseEnter={() => set_hoveredLink3(true)}
            onMouseLeave={() => set_hoveredLink3(false)}
          >
            <IconsMenu.settings/>
            <span 
              className="absolute flex items-center justify-center whitespace-nowrap p-1 px-2 bg-gray-800 border border-gray-400 text-green-300 min-w-fit h-6 text-sm -top-8 left-[50%] rounded-3xl transition-all duration-300 pointer-events-none transform translate-x-[-50%]"
              style={{opacity: hoveredLink3 ? '0.90' : '0'}}
            >
              Settings
            </span>
          </Link>
        </div>
      </ul>
    </div>
  )
}

export default Menubar