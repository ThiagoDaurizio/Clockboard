import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import { todosContext } from '@/context/todosContext'
import { TypedTodo } from '@/types/Todo'
import React from 'react'

interface IProps {
  actualTodo: TypedTodo
}

const ModalStatusUpdate = ( { actualTodo }:IProps ) => {
  const { userTheme } = globalContext()
  const { callUpdateTodoStatus } = todosContext()
  const { set_modalUpdateTodoStatus } = modalContext()

  const handleChooseStatus = async (todoId: string, statusId: string) => {
    callUpdateTodoStatus(todoId, statusId)
    set_modalUpdateTodoStatus(false)
  }

  return (
    <>
        <ul 
          className="flex flex-col gap-2 w-full p-2 pl-4 overflow-y-scroll max-h-[400px]"        
        >
          {userTheme?.data?.status?.map((status) => {
            return(
              <li
                key={status.id}
                onClick={() => handleChooseStatus(actualTodo.id, status.id)}
                className="rounded text-center capitalize p-1 px-2 font-medium tracking-wide cursor-pointer transition-all duration-200 w-full hover:opacity-80"
                style={{backgroundColor: status.color, color: status.colorText ? 'white' : 'black'}}
              >
                {status.label}
              </li>
            )
          })}
        </ul>
        <button 
          onClick={() => set_modalUpdateTodoStatus(false)}
          className="bg-violet-600 text-gray-200 rounded-md mt-5 p-1 px-3 border border-gray-300 transition-all duration-300 hover:bg-violet-700"
        >
          Cancel
        </button>
    </>
  )
}

export default ModalStatusUpdate