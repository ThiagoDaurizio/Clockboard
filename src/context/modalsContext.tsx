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
}

const ModalContext = createContext({} as InterfacedModalContext)

export const ModalContextProvider = ( { children }:IProps ) => {
  const [modalCreateTodo, set_modalCreateTodo] = useState<boolean>(false)
  const [modalEditTodo, set_modalEditTodo] = useState<boolean>(false)
  const [modalUpdateTodoStatus, set_modalUpdateTodoStatus] = useState<boolean>(false)
  const [modalDeleteTodo, set_modalDeleteTodo] = useState<boolean>(false)

  return(
    <ModalContext.Provider value={{
      modalCreateTodo, set_modalCreateTodo,
      modalUpdateTodoStatus, set_modalUpdateTodoStatus,
      modalDeleteTodo, set_modalDeleteTodo,
      modalEditTodo, set_modalEditTodo
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export const modalContext = () => useContext(ModalContext)