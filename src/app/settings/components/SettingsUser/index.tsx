'use client'
import { globalContext } from '@/context/global'
import { logout } from '@/services/authentication'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const SettingsUser = () => {
  const { userData } = globalContext()

  const [userPhoto, set_userPhoto] = useState<string>('')
  const [userName, set_userName] = useState<string>('')
  const [userEmail, set_userEmail] = useState<string>('')

  const router = useRouter()

  useEffect(() => {
    if(userData?.providerData[0]){
      set_userPhoto(userData?.providerData[0]?.photoURL as string)
      set_userName(userData?.providerData[0]?.displayName as string)
      set_userEmail(userData?.providerData[0]?.email as string)
    }

  }, [userData])

  const logoutApp = async () => {
    await logout()

    router.push('/login')
  }

  return (
    <div className="flex flex-col gap-1 bg-gray-700 p-2 rounded-md border border-gray-600 transition-colors duration-500 hover:border-violet-700">
      <div className="flex justify-end gap-2">
        <div className="flex flex-col justify-start">
          <p className="text-right font-bold">{userName}</p>
          <p className="text-right text-xs text-green-400">{userEmail}</p>
        </div>
        <img src={userPhoto} width={50} height={50} alt='user photo'
          className="rounded-full"
          />
      </div>
      <button 
        onClick={logoutApp}
        className="self-end bg-gray-700 p-0 px-1 text-xs rounded-md border border-rose-600 font-semibold transition-colors duration-500 hover:text-rose-600 hover:border-gray-400"
      >
        LOGOUT
      </button>
    </div>
  )
}

export default SettingsUser