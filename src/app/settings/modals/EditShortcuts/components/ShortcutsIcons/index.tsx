'use client'
import { IconsApp, IconsMenu } from '@/assets/icons'
import React from 'react'

interface IProps {
  iconShortcut: string
  set_iconShortcut: React.Dispatch<React.SetStateAction<string>>
}

const ShortcutsIcons = ( { iconShortcut, set_iconShortcut }:IProps ) => {
  const iconList = "text-xl text-gray-300 cursor-pointer bg-gray-500 p-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-violet-600 hover:text-gray-200"
  const iconListActived = "text-xl text-gray-200 cursor-pointer bg-violet-600 p-2 rounded-md transition-all duration-300 transform scale-105 hover:bg-violet-700"

  return (
    <ul
    className="flex flex-wrap justify-center items-center gap-3 h-fit max-w-[95%] mx-auto mb-4"
  >
    {iconShortcut !== 'gitbranch' ? 
      <li onClick={() => set_iconShortcut('gitbranch')} className={iconList}>
        <IconsMenu.gitbranch/>
      </li>
      :
      <li onClick={() => set_iconShortcut('gitbranch')} className={iconListActived}>
        <IconsMenu.gitbranch/>
      </li>
    }
    {iconShortcut !== 'github' ? 
      <li onClick={() => set_iconShortcut('github')} className={iconList}>
        <IconsMenu.github/>
      </li>
      :
      <li onClick={() => set_iconShortcut('github')} className={iconListActived}>
        <IconsMenu.github/>
      </li>
    }
    {iconShortcut !== 'gitlab' ? 
      <li onClick={() => set_iconShortcut('gitlab')} className={iconList}>
        <IconsMenu.gitlab/>
      </li>
      :
      <li onClick={() => set_iconShortcut('gitlab')} className={iconListActived}>
        <IconsMenu.gitlab/>
      </li>
    }
    {iconShortcut !== 'chat' ? 
      <li onClick={() => set_iconShortcut('chat')} className={iconList}>
        <IconsMenu.chat/>
      </li>
      :
      <li onClick={() => set_iconShortcut('chat')} className={iconListActived}>
        <IconsMenu.chat/>
      </li>
    }
    {iconShortcut !== 'react' ? 
      <li onClick={() => set_iconShortcut('react')} className={iconList}>
        <IconsMenu.react/>
      </li>
      :
      <li onClick={() => set_iconShortcut('react')} className={iconListActived}>
        <IconsMenu.react/>
      </li>
    }
    {iconShortcut !== 'music' ? 
      <li onClick={() => set_iconShortcut('music')} className={iconList}>
        <IconsMenu.music/>
      </li>
      :
      <li onClick={() => set_iconShortcut('music')} className={iconListActived}>
        <IconsMenu.music/>
      </li>
    }
    {iconShortcut !== 'spotify' ? 
      <li onClick={() => set_iconShortcut('spotify')} className={iconList}>
        <IconsMenu.spotify/>
      </li>
      :
      <li onClick={() => set_iconShortcut('spotify')} className={iconListActived}>
        <IconsMenu.spotify/>
      </li>
    }
    {iconShortcut !== 'youtube' ? 
      <li onClick={() => set_iconShortcut('youtube')} className={iconList}>
        <IconsMenu.youtube/>
      </li>
      :
      <li onClick={() => set_iconShortcut('youtube')} className={iconListActived}>
        <IconsMenu.youtube/>
      </li>
    }
    {iconShortcut !== 'play' ? 
      <li onClick={() => set_iconShortcut('play')} className={iconList}>
        <IconsMenu.play/>
      </li>
      :
      <li onClick={() => set_iconShortcut('play')} className={iconListActived}>
        <IconsMenu.play/>
      </li>
    }
    {iconShortcut !== '' ? 
      <li onClick={() => set_iconShortcut('')} className={iconList}>
        <IconsApp.logo/>
      </li>
      :
      <li onClick={() => set_iconShortcut('')} className={iconListActived}>
        <IconsApp.logo/>
      </li>
    }
  </ul>
  )
}

export default ShortcutsIcons