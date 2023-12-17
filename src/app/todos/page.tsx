'use client'

import React, { useState } from 'react'
import TodoCard from './components/TodoCard'
import TodoHeader from './components/TodoHeader'
import CompModal from '@/components/Modal'
import { TypedTodo } from '@/types/Todo'
import { todosContext } from '@/context/todosContext'
import { modalContext } from '@/context/modalsContext'
import ModalCreateTodo from './modals/CreateTodo'
import ModalDeleteTodo from './modals/DeleteTodo'
import ModalEditTodo from './modals/EditTodo'
import ModalStatusUpdate from './modals/StatusUpdate'

const page = () => {
  const { todosListData } = todosContext()
  const { modalCreateTodo, modalEditTodo, modalUpdateTodoStatus, modalDeleteTodo } = modalContext()

  const [searchTodo, set_searchTodo] = useState<string>('')
  const [actualTodo, set_actualTodo] = useState<TypedTodo>({} as TypedTodo)

  const filteredTodos = todosListData?.data?.filter((item: TypedTodo) => item.title.toLowerCase().includes(searchTodo.toLocaleLowerCase()))

  return (
    <main className="flex flex-col items-center min-h-screen max-w-[1360px] w-full pb-20">
      <TodoHeader 
        searchTodo={searchTodo}
        set_searchTodo={set_searchTodo}
      />

      <ul className="grid grid-cols-2 gap-10">
        {searchTodo.trim() ? 
          filteredTodos?.map((item: TypedTodo) => {
            return(
              <TodoCard 
                key={item.id}
                todo={item}
                set_actualTodo={set_actualTodo}
              />
            )
          })
          :
          todosListData?.data?.map((item: TypedTodo) => {
            return(
              <TodoCard 
                key={item.id}
                todo={item}
                set_actualTodo={set_actualTodo}
              />
            )
          })
        }
      </ul>

      <CompModal isOpened={modalCreateTodo} modalHeading='Create Todo'>
        <ModalCreateTodo/>
      </CompModal>

      <CompModal isOpened={modalUpdateTodoStatus} modalHeading='Change Todo Status' modalWidth={300}>
        <ModalStatusUpdate 
          actualTodo={actualTodo}
        />
      </CompModal>

      <CompModal isOpened={modalEditTodo} modalHeading='Edit Todo'>
        <ModalEditTodo
          actualTodo={actualTodo}
        />
      </CompModal>

      <CompModal isOpened={modalDeleteTodo} modalHeading='Delele Todo' modalWidth={300}>
        <ModalDeleteTodo 
          actualTodo={actualTodo}
        />
      </CompModal>
    </main>
  )
}

export default page