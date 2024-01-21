'use client'
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { globalContext } from './global'
import { TypedTodo, TypedTodoDTO } from '@/types/Todo'
import { changeTodoStatus, deleteTodoById, getTodosByUserId, createTodo, changeTodoInfos, bringTodoToUp } from '@/api/todos'

interface TodoListDataInterface {
  status: 'idle' | 'pedding' | 'completed' | 'failed'
  data: TypedTodo[]
}

interface TodosContextInterface {
  todosListData: TodoListDataInterface
  getUserTodos: () => void
  getTodoStatus: (todoStatus: string) => void
  callUpdateTodoInfos: (todoId: string, newBody: TypedTodoDTO) => void
  callUpdateTodoStatus: (todoId: string, statusId: string) => void
  callDeleteTodo: (todoId: string) => void
  callCreateTodo: (todoBody: TypedTodoDTO) => void
  callBringTodoToUp: (todoId: string) => void
  // set_todosListData: React.Dispatch<React.SetStateAction<TodoListData>>
}

const TodosContext = createContext({} as TodosContextInterface)

interface IProps {
  children: ReactNode
}


export const TodosContextProvider = ( { children }:IProps ) => {
  const { userData, userTheme, set_isLoading } = globalContext()
  const [todosListData, set_todosListData] = useState<TodoListDataInterface>({ status: 'idle', data: []})

  useEffect(() => {
    if(userData?.uid && todosListData.status === 'idle'){
      getUserTodos()
    }
  }, [userData])

  const getUserTodos = async () => {
    set_isLoading(true)

    try {
      const data = await getTodosByUserId(userData!.uid)
      set_todosListData({status: 'completed', data: data})
    } catch (error) {
      set_todosListData({status: 'failed', data: []})
      console.error(error)
    }

    set_isLoading(false)
    return
  }

  const getTodoStatus = async (todoStatus: string) => {
    userTheme?.data?.status?.filter((status) => status.id === todoStatus)[0]
  }

  const callCreateTodo = async (todoBody: TypedTodoDTO) => {
    await createTodo(todoBody)
    await getUserTodos()
  }

  const callUpdateTodoInfos = async (todoId: string, newBody: TypedTodoDTO) => {
    await changeTodoInfos(todoId, newBody)
    await getUserTodos()
  }

  const callUpdateTodoStatus = async (todoId: string, statusId: string) => {
    await changeTodoStatus(todoId, statusId)
    await getUserTodos()
  }

  const callBringTodoToUp = async (todoId: string) => {
    await bringTodoToUp(todoId)
    await getUserTodos()
  }

  const callDeleteTodo = async (todoId: string) => {
    await deleteTodoById(todoId)
    await getUserTodos()
  }


  return (
    <TodosContext.Provider value={{
      todosListData,
      getUserTodos,
      getTodoStatus,
      callUpdateTodoInfos,
      callUpdateTodoStatus,
      callDeleteTodo,
      callCreateTodo,
      callBringTodoToUp
    }}>
      {children}
    </TodosContext.Provider>
  )
}

export const todosContext = () =>  useContext(TodosContext)