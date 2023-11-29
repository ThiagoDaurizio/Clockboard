'use client'
import { getThemeByUserId } from '@/api/theme'
import { getTodosByUserId } from '@/api/todos'
import { auth } from '@/services/authentication'
import { TypedTheme } from '@/types/Theme'
import { User, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface GlobalContextInterface {
  userData: User | null
  set_userData: React.Dispatch<React.SetStateAction<User | null>>
  isLoading: boolean
  set_isLoading: React.Dispatch<React.SetStateAction<boolean>>
  userTheme: TypedTheme
  set_userTheme: React.Dispatch<React.SetStateAction<TypedTheme>>
  userTodos: any[]
  set_userTodos: React.Dispatch<React.SetStateAction<any[]>>
}

const GlobalContext = createContext({} as GlobalContextInterface)

interface IProps {
  children: ReactNode
}

export const GlobalContextProvider = ( { children }:IProps ) => {
  const [userData, set_userData] = useState<User | null>(null)
  const [isLoading, set_isLoading] = useState<boolean>(false)
  const [userTheme, set_userTheme] = useState({} as TypedTheme)

  const [userTodos, set_userTodos] = useState<any[]>([])

  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        set_userData(user)
        const theme = await getThemeByUserId(user.uid)
        set_userTheme(theme ? theme : {})

        const todosList = await getTodosByUserId(user.uid)
        set_userTodos(todosList ? todosList :  [])
      } else {
        router.push('/login')
      }
    })
  }, [])

  return (
    <GlobalContext.Provider value={{
      userData, set_userData,
      isLoading, set_isLoading,
      userTheme, set_userTheme,
      userTodos, set_userTodos
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const globalContext = () =>  useContext(GlobalContext)