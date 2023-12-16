'use client'
import { ReactNode, createContext, useContext, useState } from "react";

interface IProps {
  children: ReactNode
}

interface InterfacedModalContext {
  modalCreateTodo: boolean 
  set_modalCreateTodo: React.Dispatch<React.SetStateAction<boolean>>
  modalUpdateTodoStatus: boolean
  set_modalUpdateTodoStatus: React.Dispatch<React.SetStateAction<boolean>>
  modalDeleteTodo: boolean
  set_modalDeleteTodo: React.Dispatch<React.SetStateAction<boolean>>
  modalEditTodo: boolean
  set_modalEditTodo: React.Dispatch<React.SetStateAction<boolean>>
  
  modalSettingsCreateStatus: boolean
  set_modalSettingsCreateStatus: React.Dispatch<React.SetStateAction<boolean>>
  modalSettingsEditStatus: boolean
  set_modalSettingsEditStatus: React.Dispatch<React.SetStateAction<boolean>>
  modalSettingsEditMarkers: boolean
  set_modalSettingsEditMarkers: React.Dispatch<React.SetStateAction<boolean>>
  modalSettingsEditInfolabels: boolean
  set_modalSettingsEditInfolabels: React.Dispatch<React.SetStateAction<boolean>>
  modalSettingsDeleteStatus: boolean
  set_modalSettingsDeleteStatus: React.Dispatch<React.SetStateAction<boolean>>
  modalSettingsEditShortcuts: boolean
  set_modalSettingsEditShortcuts: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContext = createContext({} as InterfacedModalContext)

export const ModalContextProvider = ( { children }:IProps ) => {
  const [modalCreateTodo, set_modalCreateTodo] = useState<boolean>(false)
  const [modalEditTodo, set_modalEditTodo] = useState<boolean>(false)
  const [modalUpdateTodoStatus, set_modalUpdateTodoStatus] = useState<boolean>(false)
  const [modalDeleteTodo, set_modalDeleteTodo] = useState<boolean>(false)

  const [modalSettingsCreateStatus, set_modalSettingsCreateStatus] = useState<boolean>(false)
  const [modalSettingsEditStatus, set_modalSettingsEditStatus] = useState<boolean>(false)
  const [modalSettingsDeleteStatus, set_modalSettingsDeleteStatus] = useState<boolean>(false)
  const [modalSettingsEditMarkers, set_modalSettingsEditMarkers] = useState<boolean>(false)
  const [modalSettingsEditInfolabels, set_modalSettingsEditInfolabels] = useState<boolean>(false)
  const [modalSettingsEditShortcuts, set_modalSettingsEditShortcuts] = useState<boolean>(false)



  return(
    <ModalContext.Provider value={{
      modalCreateTodo, set_modalCreateTodo,
      modalUpdateTodoStatus, set_modalUpdateTodoStatus,
      modalDeleteTodo, set_modalDeleteTodo,
      modalEditTodo, set_modalEditTodo,
      modalSettingsCreateStatus, set_modalSettingsCreateStatus,
      modalSettingsEditStatus, set_modalSettingsEditStatus,
      modalSettingsDeleteStatus, set_modalSettingsDeleteStatus,
      modalSettingsEditMarkers, set_modalSettingsEditMarkers,
      modalSettingsEditInfolabels, set_modalSettingsEditInfolabels,
      modalSettingsEditShortcuts, set_modalSettingsEditShortcuts
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export const modalContext = () => useContext(ModalContext)