'use client'
import { createStatus, deleteStatus, editInfolabels, editMarkers, editShortcuts, editStatus, getThemeByUserId } from '@/api/theme'
import { getTodosByUserId } from '@/api/todos'
import { auth } from '@/services/authentication'
import { TypedMarker, TypedShortcut, TypedStatus, TypedTheme } from '@/types/Theme'
import { User, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface ThemeDataInterface {
  status: 'idle' | 'pedding' | 'completed' | 'failed'
  data: TypedTheme
}

interface GlobalContextInterface {
  userData: User | null
  set_userData: React.Dispatch<React.SetStateAction<User | null>>
  isLoading: boolean
  set_isLoading: React.Dispatch<React.SetStateAction<boolean>>
  userTheme: ThemeDataInterface
  set_userTheme: React.Dispatch<React.SetStateAction<ThemeDataInterface>>
  userTodos: any[]
  set_userTodos: React.Dispatch<React.SetStateAction<any[]>>
  getUserTheme: () => void
  callCreateStatus: (statusBody: TypedStatus) => void
  callEditStatus: (statusId: string, statusBody: TypedStatus) => void
  callDeleteStatus: (statusId: string) => void
  callEditInfolabels: (label1: string, label2: string) => void
  callEditMarker: (markersBody: TypedMarker[]) => void
  callEditShortcut: (shortcut1: TypedShortcut, shortcut2: TypedShortcut) => void
}

const GlobalContext = createContext({} as GlobalContextInterface)

interface IProps {
  children: ReactNode
}

export const GlobalContextProvider = ( { children }:IProps ) => {
  const [userData, set_userData] = useState<User | null>(null)
  const [isLoading, set_isLoading] = useState<boolean>(false)
  const [userTheme, set_userTheme] = useState<ThemeDataInterface>({ status: 'idle', data: {} as TypedTheme})

  const [userTodos, set_userTodos] = useState<any[]>([])

  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        set_userData(user)
        const todosList = await getTodosByUserId(user.uid)
        set_userTodos(todosList ? todosList :  [])
        if(userTheme.status === 'idle'){
          getUserTheme()
        }
      } else {
        router.push('/login')
      }

    })
  }, [userData])

  const getUserTheme = async () => {
    set_isLoading(true)

    try{
      const data = await getThemeByUserId(userData!.uid)
      set_userTheme({status: 'completed', data: data})
    } catch (error) {
      set_userTheme({status: 'failed', data: {} as TypedTheme})
    }

    set_isLoading(false)
    return
  }

  const callCreateStatus = async (statusBody: TypedStatus) => {
    await createStatus(userTheme.data.id, statusBody)
    await getUserTheme()
  }

  const callEditStatus = async (statusId: string, statusBody: TypedStatus) => {
    await editStatus(userTheme.data.id, statusId, statusBody)
    await getUserTheme()
  }

  const callDeleteStatus = async (statusId: string) => {
    await deleteStatus(userTheme.data.id, statusId)
    await getUserTheme()
  }

  const callEditInfolabels = async (label1: string, label2: string) => {
    await editInfolabels(userTheme.data.id, label1, label2)
    await getUserTheme()
  }

  const callEditMarker = async (markersBody: TypedMarker[]) => {
    await editMarkers(userTheme.data.id, markersBody)
    await getUserTheme()
  }

  const callEditShortcut = async (shortcut1: TypedShortcut, shortcut2: TypedShortcut) => {
    await editShortcuts(userTheme.data.id, shortcut1, shortcut2)
    await getUserTheme()
  }

  return (
    <GlobalContext.Provider value={{
      userData, set_userData,
      isLoading, set_isLoading,
      userTheme, set_userTheme,
      userTodos, set_userTodos,
      getUserTheme,
      callCreateStatus,
      callEditStatus,
      callDeleteStatus,
      callEditInfolabels,
      callEditMarker,
      callEditShortcut
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const globalContext = () =>  useContext(GlobalContext)