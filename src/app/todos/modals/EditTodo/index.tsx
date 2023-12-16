'use client'
import CompInputText from '@/components/InputText'
import CompInputToggle from '@/components/InputToggle'
import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import { todosContext } from '@/context/todosContext'
import { TypedTodo, TypedTodoDTO } from '@/types/Todo'
import React, { useEffect, useState } from 'react'

interface IProps {
  actualTodo: TypedTodo
}

const ModalEditTodo = ( { actualTodo }:IProps ) => {
  const { userTheme } = globalContext()
  const { callUpdateTodoInfos } = todosContext()
  const { modalEditTodo, set_modalEditTodo } = modalContext()

  const [todoTitle, set_todoTitle] = useState<string>('')
  const [todoInfoLabel1, set_todoInfoLabel1] = useState<string>('')
  const [todoInfoLabel2, set_todoInfoLabel2] = useState<string>('')

  const [todoMarker1, set_todoMarker1] = useState<boolean>(false)
  const [todoMarker2, set_todoMarker2] = useState<boolean>(false)
  const [todoMarker3, set_todoMarker3] = useState<boolean>(false)
  const [todoMarker4, set_todoMarker4] = useState<boolean>(false)

  useEffect(() => {
    if(modalEditTodo){
      modalSetup()
    }

  }, [modalEditTodo])

  const modalSetup = () => {
    set_todoTitle(actualTodo.title)
    set_todoInfoLabel1(actualTodo.infoLabel1)
    set_todoInfoLabel2(actualTodo.infoLabel2)

    const setupMarker1 = actualTodo.markers.filter((marker) => marker.position === 1)[0].isActive
    const setupMarker2 = actualTodo.markers.filter((marker) => marker.position === 2)[0].isActive
    const setupMarker3 = actualTodo.markers.filter((marker) => marker.position === 3)[0].isActive
    const setupMarker4 = actualTodo.markers.filter((marker) => marker.position === 4)[0].isActive

    set_todoMarker1(setupMarker1)
    set_todoMarker2(setupMarker2)
    set_todoMarker3(setupMarker3)
    set_todoMarker4(setupMarker4)
  }

  const handleConfirm = async () => {
    const body = {
      title: todoTitle,
      infoLabel1: todoInfoLabel1,
      infoLabel2: todoInfoLabel2,
      markers: [
        {position: 1, isActive: todoMarker1},
        {position: 2, isActive: todoMarker2},
        {position: 3, isActive: todoMarker3},
        {position: 4, isActive: todoMarker4},
      ],
      uid: actualTodo.uid,
      statusId: actualTodo.statusId
    }

    callUpdateTodoInfos(actualTodo.id, body)
    set_modalEditTodo(false)
  }

  const handleSaveChange = async () => {

  }

  return (
    <>
      <label 
        className="w-full"
      >
        <span className="text-green-400 text-sm mb-1 pl-1">
          Title
        </span>
        <CompInputText text={todoTitle} set_text={set_todoTitle} width={'100%'} />
      </label>

      <div
        className="flex justify-between w-full"
      >
        <label className="flex flex-col max-w-[50%]">
          <span className="capitalize text-green-400 text-sm mb-1 pl-1">
            {userTheme?.data?.infoLabel1}
          </span>
          <CompInputText text={todoInfoLabel1} set_text={set_todoInfoLabel1} width={'90%'} />
        </label>
        <label className="flex flex-col w-full max-w-[50%] items-end">
          <span className="capitalize text-green-400 text-sm mb-1 pr-1">
            {userTheme?.data?.infoLabel2}
          </span>
          <CompInputText text={todoInfoLabel2} set_text={set_todoInfoLabel2} width={'90%'} />
        </label>
      </div>

      <div className="grid grid-cols-2 w-full gap-4">
        <div className="flex flex-col items-center gap-1 text-green-400 capitalize text-sm tracking-wide">
          {userTheme?.data?.markers?.filter((marker) => marker.position === 1).map((item) => {
            return(
              <p key={item.position}>{item.label}</p>
              )})}
          <CompInputToggle toggle={todoMarker1} set_toggle={set_todoMarker1}/>
        </div>
        <div className="flex flex-col items-center gap-1 text-green-400 capitalize text-sm tracking-wide">
          {userTheme?.data?.markers?.filter((marker) => marker.position === 2).map((item) => {
            return(
              <p key={item.position}>{item.label}</p>
              )})}
          <CompInputToggle toggle={todoMarker2} set_toggle={set_todoMarker2}/>
        </div>
        <div className="flex flex-col items-center gap-1 text-green-400 capitalize text-sm tracking-wide">
          {userTheme?.data?.markers?.filter((marker) => marker.position === 3).map((item) => {
            return(
              <p key={item.position}>{item.label}</p>
              )})}
          <CompInputToggle toggle={todoMarker3} set_toggle={set_todoMarker3}/>
        </div>
        <div className="flex flex-col items-center gap-1 text-green-400 capitalize text-sm tracking-wide">
          {userTheme?.data?.markers?.filter((marker) => marker.position === 4).map((item) => {
            return(
              <p key={item.position}>{item.label}</p>
              )})}
          <CompInputToggle toggle={todoMarker4} set_toggle={set_todoMarker4}/>
        </div>
      </div>

      <div 
        className="flex justify-center w-full gap-24 mt-3"
      >
        <button
          onClick={handleConfirm}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Confirm
        </button>
        <button
          onClick={() => set_modalEditTodo(false)}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default ModalEditTodo