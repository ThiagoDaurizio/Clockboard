'use client'
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { globalContext } from './global'
import { TypedTodo, TypedTodoDTO } from '@/types/Todo'
import { changeTodoStatus, deleteTodoById, getTodosByUserId, createTodo, chanceTodoInfos } from '@/api/todos'

interface TodoListDataInterface {
  status: 'idle' | 'pedding' | 'completed' | 'failed'
  data: TypedTodo[]
}

interface TodosContextInterface {
  todosListData: TodoListDataInterface
  getUserTodos: () => void
  callUpdateTodoInfos: (todoId: string, newBody: TypedTodoDTO) => void
  callUpdateTodoStatus: (todoId: string, statusId: string) => void
  callDeleteTodo: (todoId: string) => void
  callCreateTodo: (todoBody: TypedTodoDTO) => void
  // set_todosListData: React.Dispatch<React.SetStateAction<TodoListData>>
}

const TodosContext = createContext({} as TodosContextInterface)

interface IProps {
  children: ReactNode
}


export const TodosContextProvider = ( { children }:IProps ) => {
  const { userData, set_isLoading } = globalContext()
  const [todosListData, set_todosListData] = useState<TodoListDataInterface>({ status: 'idle', data: []})
  const [watcher, set_watcher] = useState<number>(0)

  useEffect(() => {
    if(userData?.uid && todosListData.status === 'idle'){
      getUserTodos()
    }
  }, [userData])

  const callCreateTodo = async (todoBody: TypedTodoDTO) => {
    await createTodo(todoBody)
    await getUserTodos()
  }

  const callUpdateTodoInfos = async (todoId: string, newBody: TypedTodoDTO) => {
    await chanceTodoInfos(todoId, newBody)
    await getUserTodos()
  }

  const callUpdateTodoStatus = async (todoId: string, statusId: string) => {
    await changeTodoStatus(todoId, statusId)
    await getUserTodos()
  }

  const callDeleteTodo = async (todoId: string) => {
    await deleteTodoById(todoId)
    await getUserTodos()
  }

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

  return (
    <TodosContext.Provider value={{
      todosListData,
      getUserTodos,
      callUpdateTodoInfos,
      callUpdateTodoStatus,
      callDeleteTodo,
      callCreateTodo
    }}>
      {children}
    </TodosContext.Provider>
  )
}

export const todosContext = () =>  useContext(TodosContext)