import { TypedTodo } from '@/types/Todo'
import React from 'react'

interface IProps {
  todo: TypedTodo
}

const TodoCard = ( { todo }: IProps ) => {
  return (
    <div>
      {todo.title}
    </div>
  )
}

export default TodoCard
