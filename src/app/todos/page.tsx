'use client'
import { getTodosByUserId } from '@/api/todos'
import { globalContext } from '@/context/global'
import React, { useState } from 'react'
import TodoCard from './components/TodoCard'
import CompTodoHeader from './components/TodoHeader'
import CompModal from '@/components/Modal'
import ModalCreateTodo from './modals/CreateTodo'

const page = () => {
  const { userData, userTodos, userTheme } = globalContext()
  
  const [modalCreateTodoIsOpened, set_modalCreateTodoIsOpened] = useState<boolean>(false)

  return (
    <main className="flex flex-col min-h-screen">
      <CompTodoHeader 
        set_modalCreateTodoIsOpened={set_modalCreateTodoIsOpened}
      />
      <button onClick={() => console.log(userTodos, userTheme, userData)}>INFO</button>
      <ul>
        {userTodos?.map((todo, index) => {
          return(
            <TodoCard 
              key={index}
              todo={todo}
            />
          )
        })}
      </ul>

      <CompModal
        isOpened={modalCreateTodoIsOpened}
      >
        <ModalCreateTodo
          set_modalCreateTodoIsOpened={set_modalCreateTodoIsOpened}
        />
      </CompModal>
    </main>
  )
}

export default page