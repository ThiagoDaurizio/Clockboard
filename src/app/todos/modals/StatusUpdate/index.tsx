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
    <div className='bg-gray-700 w-[240px] min-h-[280px] h-fit rounded-md p-4 flex flex-col justify-between items-center'>
        <ul 
          className="flex flex-col gap-2 w-full"        
        >
          {userTheme?.status?.map((status) => {
            return(
              <li
                key={status.id}
                onClick={() => handleChooseStatus(actualTodo.id, status.id)}
                className="rounded text-center capitalize p-1 px-2 font-medium tracking-wide cursor-pointer transition-all duration-200 w-full hover:opacity-80"
                style={{backgroundColor: status.color, color: status.colorText}}
              >
                {status.label}
              </li>
            )
          })}
        </ul>
        <button 
          onClick={() => set_modalUpdateTodoStatus(false)}
          className="bg-violet-600 text-gray-200 rounded-md p-1 px-3 border border-gray-300 transition-all duration-300 hover:bg-violet-700"
        >
          Cancel
        </button>
    </div>
  )
}

export default ModalStatusUpdate