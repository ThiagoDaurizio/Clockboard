import CompInputText from '@/components/InputText'
import CompInputToggle from '@/components/InputToggle'
import { globalContext } from '@/context/global'
import { modalContext } from '@/context/modalsContext'
import { todosContext } from '@/context/todosContext'
import React, { useState } from 'react'

const ModalCreateTodo = () => {
  const { userTheme, userData, set_isLoading } = globalContext()
  const { callCreateTodo} = todosContext()
  const { set_modalCreateTodo } = modalContext()

  const [todoTitle, set_todoTitle] = useState<string>('')
  const [todoInfoLabel1, set_todoInfoLabel1] = useState<string>('')
  const [todoInfoLabel2, set_todoInfoLabel2] = useState<string>('')

  const [todoActiveMarker1, set_todoActiveMarker1] = useState<boolean>(false)
  const [todoActiveMarker2, set_todoActiveMarker2] = useState<boolean>(false)
  const [todoActiveMarker3, set_todoActiveMarker3] = useState<boolean>(false)
  const [todoActiveMarker4, set_todoActiveMarker4] = useState<boolean>(false)

  const handleCreate = async () => {
    set_isLoading(true)

    const body = {
      uid: userData!.uid,
      title: todoTitle,
      infoLabel1: todoInfoLabel1,
      infoLabel2: todoInfoLabel2,
      markers: [
        {isActive: todoActiveMarker1, position: 1},
        {isActive: todoActiveMarker2, position: 2},
        {isActive: todoActiveMarker3, position: 3},
        {isActive: todoActiveMarker4, position: 4}
      ],
      statusId: ''
    }
    
    callCreateTodo(body)

    set_isLoading(false)
    set_modalCreateTodo(false)
    resetForm()
  }

  const resetForm = () => {
    set_todoTitle('')
    set_todoInfoLabel1('')
    set_todoInfoLabel2('')

    set_todoActiveMarker1(false)
    set_todoActiveMarker2(false)
    set_todoActiveMarker3(false)
    set_todoActiveMarker4(false)

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
          <CompInputToggle toggle={todoActiveMarker1} set_toggle={set_todoActiveMarker1}/>
        </div>
        <div className="flex flex-col items-center gap-1 text-green-400 capitalize text-sm tracking-wide">
          {userTheme?.data?.markers?.filter((marker) => marker.position === 2).map((item) => {
            return(
              <p key={item.position}>{item.label}</p>
              )})}
          <CompInputToggle toggle={todoActiveMarker2} set_toggle={set_todoActiveMarker2}/>
        </div>
        <div className="flex flex-col items-center gap-1 text-green-400 capitalize text-sm tracking-wide">
          {userTheme?.data?.markers?.filter((marker) => marker.position === 3).map((item) => {
            return(
              <p key={item.position}>{item.label}</p>
              )})}
          <CompInputToggle toggle={todoActiveMarker3} set_toggle={set_todoActiveMarker3}/>
        </div>
        <div className="flex flex-col items-center gap-1 text-green-400 capitalize text-sm tracking-wide">
          {userTheme?.data?.markers?.filter((marker) => marker.position === 4).map((item) => {
            return(
              <p key={item.position}>{item.label}</p>
              )})}
          <CompInputToggle toggle={todoActiveMarker4} set_toggle={set_todoActiveMarker4}/>
        </div>
      </div>
    
      <div 
        className="flex justify-center w-full gap-24 mt-3"
      >
        <button
          onClick={handleCreate}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Create
        </button>
        <button
          onClick={() => set_modalCreateTodo(false)}
          className="bg-violet-600 text-gray-200 text-lg p-1 px-2 min-w-[100px] rounded transition-colors duration-300 hover:bg-violet-700"
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default ModalCreateTodo