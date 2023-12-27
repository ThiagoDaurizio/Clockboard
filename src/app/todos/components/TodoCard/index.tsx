'use client'
import { globalContext } from '@/context/global'
import { TypedStatus } from '@/types/Theme'
import { TypedTodo } from '@/types/Todo'
import React, { useState, useEffect } from 'react'
import { modalContext } from '@/context/modalsContext'
import { IconsApp } from '@/assets/icons'
import CompModal from '@/components/Modal'
import ModalDeleteTodo from '../../modals/DeleteTodo'
import { todosContext } from '@/context/todosContext'
import CompTooltip from '@/components/Tooltip'

interface IProps {
  todo: TypedTodo
  set_actualTodo: React.Dispatch<React.SetStateAction<TypedTodo>>
}

const TodoCard = ( { todo, set_actualTodo }: IProps ) => {
  const { userTheme } = globalContext()
  const { callBringTodoToUp } = todosContext()
  const { set_modalEditTodo, set_modalUpdateTodoStatus, set_modalDeleteTodo } = modalContext()

  const [toolsOpened, set_toolsOpened] = useState<boolean>(false)
  const [cardStatus, set_cardStatus] = useState<TypedStatus>({} as TypedStatus)

  const [hoveredMarkerTooltip1, set_hoveredMarkerTooltip1] = useState<boolean>(false)
  const [hoveredMarkerTooltip2, set_hoveredMarkerTooltip2] = useState<boolean>(false)
  const [hoveredMarkerTooltip3, set_hoveredMarkerTooltip3] = useState<boolean>(false)
  const [hoveredMarkerTooltip4, set_hoveredMarkerTooltip4] = useState<boolean>(false)



  useEffect(() => {
    const actualStatus = userTheme?.data?.status?.filter((status) => status.id === todo.statusId)[0]
    set_cardStatus(actualStatus)
  }, [todo.statusId, userTheme])

  const handleChooseStatus = () => {
    set_actualTodo(todo)
    set_modalUpdateTodoStatus(true)
  }

  const handleEditTodo = () => {
    set_actualTodo(todo)
    set_modalEditTodo(true)
  }

  const handleDeleteTodo = () => {
    set_actualTodo(todo)
    set_modalDeleteTodo(true)
  }

  return (
    <div className="bg-gray-700 w-[550px] h-36 rounded-md p-4 relative flex flex-col gap-3">
      <p 
        onClick={() => navigator.clipboard.writeText(todo.title)}
        className="flex truncate h-8 p-1 items-center justify-center gap-2 border border-transparent pb-1 text-center border-b-violet-600 text-gray-300 font-medium transition duration-200 bg-gray-600/50 hover:bg-gray-600 rounded-md cursor-pointer active:text-green-400 active:border-b-violet-500"
      >
        {todo.title}
      </p>

      <div className="flex justify-between gap-4">
        <p className="flex flex-col gap-1 w-[240px] items-start">
          <span className="block w-full max-w-[220px] truncate text-green-400 text-xs text-left pl-4">
            {userTheme?.data?.infoLabel1}
          </span>
          <span 
            onClick={() => navigator.clipboard.writeText(todo.infoLabel1)}
            className="block w-full max-w-[220px] truncate p-1 border border-transparent pb-1 h-8 border-b-violet-600 text-gray-300 font-medium transition duration-200 bg-gray-600/50 hover:bg-gray-600 rounded-md text-center cursor-pointer active:text-green-400 active:border-b-violet-500"
          >
            {todo.infoLabel1}
          </span>
        </p>
        <p className="flex flex-col gap-1 w-[240px] items-end">
          <span className="block w-full max-w-[220px] truncate text-green-400 text-xs text-right pr-4">
            {userTheme?.data?.infoLabel2}
          </span>
          <span 
            onClick={() => navigator.clipboard.writeText(todo.infoLabel2)}
            className="block w-full max-w-[220px] truncate p-1 border border-transparent pb-1 h-8 border-b-violet-600 text-gray-300 font-medium transition duration-200 bg-gray-600/50 hover:bg-gray-600 rounded-md text-center cursor-pointer active:text-green-400 active:border-b-violet-500"
          >
            {todo.infoLabel2}
          </span>
        </p>
      </div>

      <button 
        onClick={() => set_toolsOpened(!toolsOpened)}
        className="absolute -bottom-3 transition-all duration-300 p-1 bg-violet-600 rounded-full border-2 border-gray-300 text-gray-200 text-xl w-8 h-8 flex justify-center items-center hover:bg-violet-700"
        style={{transform: toolsOpened ? 'rotate(315deg' : 'rotate(0deg)'}}
      >
        <IconsApp.add/>
      </button>

      <button 
        onClick={() => callBringTodoToUp(todo.id)}
        className="absolute group -bottom-3 left-16 transition-all duration-300 p-1 bg-violet-600 rounded-full border-2 border-gray-300 text-gray-200 text-xl w-8 h-8 flex justify-center items-center hover:bg-violet-700"
      >
        <IconsApp.arrowToUp/>
        <CompTooltip label='To First'/>
      </button>

      <div
        className="flex items-center gap-4 absolute -bottom-4 left-16 h-10"
        style={{pointerEvents: toolsOpened ? 'auto' : 'none'}}
      >
        <div
          className="flex items-center gap-4 transition-all duration-500"
          style={{opacity: toolsOpened ? '100' : '0', pointerEvents: toolsOpened ? 'auto' : 'none'}}
        >
          <button 
            onClick={handleEditTodo}
            className="relative group transition-all duration-300 p-1 bg-gray-600 rounded-full border-2 border-gray-300 text-gray-200 text-xl w-8 h-8 flex justify-center items-center hover:bg-gray-700 hover:text-green-400"
          >
            <IconsApp.edit/>
            <CompTooltip label='Edit'/>
          </button>
          <button 
            onClick={handleDeleteTodo}
            className="relative group transition-all duration-300 p-1 bg-gray-600 rounded-full border-2 border-gray-300 text-gray-200 text-xl w-8 h-8 flex justify-center items-center hover:bg-gray-700 hover:border-rose-600 hover:text-rose-500"
          >
            <IconsApp.delete/>
            <CompTooltip label='Delete'/>
          </button>
        </div>
      </div>

      <div 
        onClick={handleChooseStatus}
        className="cursor-pointer absolute -bottom-4 h-8 left-[50%] translate-x-[-50%] bg-gray-500 w-[200px] flex items-center justify-center text-gray-800 font-medium rounded-t-md rounded-b-xl"
      >
        <p
          className="w-full h-full truncate flex items-center justify-center font-medium rounded-t-md rounded-b-xl capitalize tracking-wider p-1 transition-all duration-200 hover:opacity-80"
          style={{backgroundColor: cardStatus?.color, color: cardStatus?.colorText ? 'white' : 'black'}}
        >
          {cardStatus ? cardStatus?.label : 'SELECT AN STATUS'}
        </p>
      </div>

      <div className="absolute -bottom-4 right-4 w-40 h-8 flex justify-center items-center gap-2">
        {userTheme?.data?.markers?.filter((marker) => marker.position === 1).map((item) => {
          const markerActived = todo.markers.filter((marker) => marker.position === 1 && marker.isActive === true)[0]?.isActive
          return markerActived ?
            <p 
              key={todo.id}
              className="w-7 h-5 rounded-3xl relative border-2 border-gray-700"
              style={{backgroundColor: item.color}}
              onMouseEnter={() => set_hoveredMarkerTooltip1(true)}
              onMouseLeave={() => set_hoveredMarkerTooltip1(false)}
            >
              <span 
                className="absolute flex items-center justify-center whitespace-nowrap p-1 px-2 bg-gray-800 border border-gray-400 text-green-300 min-w-fit h-6 text-sm -top-8 left-3 rounded-3xl rounded-bl-sm transition-all duration-300 pointer-events-none"
                style={{opacity: hoveredMarkerTooltip1 ? '0.70' : '0'}}
              >{item.label}</span>
            </p>
            :
            <p
              key={todo.id}
              className="w-7 h-5 rounded-3xl"
            ></p>
        })}
        {userTheme?.data?.markers?.filter((marker) => marker.position === 2).map((item) => {
          const markerActived = todo.markers.filter((marker) => marker.position === 2 && marker.isActive === true)[0]?.isActive
          return markerActived ?
            <p 
              key={todo.id}
              className="w-7 h-5 rounded-3xl relative border-2 border-gray-700"
              style={{backgroundColor: item.color}}
              onMouseEnter={() => set_hoveredMarkerTooltip2(true)}
              onMouseLeave={() => set_hoveredMarkerTooltip2(false)}
            >
              <span 
                className="absolute flex items-center justify-center whitespace-nowrap p-1 px-2 bg-gray-800 border border-gray-400 text-green-300 min-w-fit h-6 text-sm -top-8 left-3 rounded-3xl rounded-bl-sm transition-all duration-300 pointer-events-none"
                style={{opacity: hoveredMarkerTooltip2 ? '0.70' : '0'}}
              >{item.label}</span>
            </p>
            :
            <p
              key={todo.id}
              className="w-7 h-5 rounded-3xl"
            ></p>
        })}
        {userTheme?.data?.markers?.filter((marker) => marker.position === 3).map((item) => {
          const markerActived = todo.markers.filter((marker) => marker.position === 3 && marker.isActive === true)[0]?.isActive
          return markerActived ?
            <p 
              key={todo.id}
              className="w-7 h-5 rounded-3xl relative border-2 border-gray-700"
              style={{backgroundColor: item.color}}
              onMouseEnter={() => set_hoveredMarkerTooltip3(true)}
              onMouseLeave={() => set_hoveredMarkerTooltip3(false)}
            >
              <span 
                className="absolute flex items-center justify-center whitespace-nowrap p-1 px-2 bg-gray-800 border border-gray-400 text-green-300 min-w-fit h-6 text-sm -top-8 left-3 rounded-3xl rounded-bl-sm transition-all duration-300 pointer-events-none"
                style={{opacity: hoveredMarkerTooltip3 ? '0.70' : '0'}}
              >{item.label}</span>
            </p>
            :
            <p
              key={todo.id}
              className="w-7 h-5 rounded-3xl"
            ></p>
        })}
        {userTheme?.data?.markers?.filter((marker) => marker.position === 4).map((item) => {
          const markerActived = todo.markers.filter((marker) => marker.position === 4 && marker.isActive === true)[0]?.isActive
          return markerActived ?
            <p 
              key={todo.id}
              className="w-7 h-5 rounded-3xl relative border-2 border-gray-700"
              style={{backgroundColor: item.color}}
              onMouseEnter={() => set_hoveredMarkerTooltip4(true)}
              onMouseLeave={() => set_hoveredMarkerTooltip4(false)}
            >
              <span 
                className="absolute flex items-center justify-center whitespace-nowrap p-1 px-2 bg-gray-800 border border-gray-400 text-green-300 min-w-fit h-6 text-sm -top-8 left-3 rounded-3xl rounded-bl-sm transition-all duration-300 pointer-events-none"
                style={{opacity: hoveredMarkerTooltip4 ? '0.70' : '0'}}
              >{item.label}</span>
            </p>
            :
            <p
              key={todo.id}
              className="w-7 h-5 rounded-3xl"
            ></p>
        })}
      </div>
    </div>
  )
}

export default TodoCard
