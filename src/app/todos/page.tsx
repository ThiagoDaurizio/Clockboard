'use client'

import React, { useState } from 'react'
import TodoCard from './components/TodoCard'
import TodoHeader from './components/TodoHeader'
import CompModal from '@/components/Modal'
import ModalCreateTodo from './modals/CreateTodo'
import { TypedTodo } from '@/types/Todo'
import ModalStatusUpdate from './modals/StatusUpdate'
import { todosContext } from '@/context/todosContext'
import { modalContext } from '@/context/modalsContext'
import ModalDeleteTodo from './modals/DeleteTodo'
import ModalEditTodo from './modals/EditTodo'

const page = () => {
  const { todosListData } = todosContext()
  const { modalCreateTodo, modalEditTodo, modalUpdateTodoStatus, modalDeleteTodo } = modalContext()
  const [actualTodo, set_actualTodo] = useState<TypedTodo>({} as TypedTodo)

  return (
    <main className="flex flex-col items-center min-h-screen max-w-[1360px] w-full">
      <TodoHeader />

      <ul className="grid grid-cols-2 gap-10">
        {todosListData?.data?.map((todo: any) => {
          return(
            <TodoCard 
              key={todo.id}
              todo={todo}
              set_actualTodo={set_actualTodo}
            />
          )
        })}
      </ul>

      <CompModal isOpened={modalCreateTodo}>
        <ModalCreateTodo/>
      </CompModal>

      <CompModal isOpened={modalUpdateTodoStatus}>
        <ModalStatusUpdate 
          actualTodo={actualTodo}
        />
      </CompModal>

      <CompModal isOpened={modalEditTodo}>
        <ModalEditTodo
          actualTodo={actualTodo}
        />
      </CompModal>

      <CompModal isOpened={modalDeleteTodo}>
        <ModalDeleteTodo 
          actualTodo={actualTodo}
        />
      </CompModal>
    </main>
  )
}

export default page