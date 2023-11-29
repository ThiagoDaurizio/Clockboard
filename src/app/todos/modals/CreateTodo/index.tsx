import CompInputText from '@/components/InputText'
import CompInputToggle from '@/components/InputToggle'
import { globalContext } from '@/context/global'
import React, { useState } from 'react'

interface IProps {
  set_modalCreateTodoIsOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalCreateTodo = ( { set_modalCreateTodoIsOpened }:IProps ) => {
  const { userTheme } = globalContext()

  const [todoTitle, set_todoTitle] = useState<string>('')
  const [todoInfoLabel1, set_todoInfoLabel1] = useState<string>('')
  const [todoInfoLabel2, set_todoInfoLabel2] = useState<string>('')

  const [todoActiveMarker1, set_todoActiveMarker1] = useState<boolean>(false)
  const [todoActiveMarker2, set_todoActiveMarker2] = useState<boolean>(false)
  const [todoActiveMarker3, set_todoActiveMarker3] = useState<boolean>(false)
  const [todoActiveMarker4, set_todoActiveMarker4] = useState<boolean>(false)


  return (
    <div 
      className="w-[340px] h-[400px] bg-gray-700 rounded-md flex flex-col items-center gap-6 p-4"
    >
      <h1>Create Todo</h1>

      <CompInputText text={todoTitle} set_text={set_todoTitle} width={'90%'} />

      <div
        className="flex justify-between w-[90%]"
      >
        <label className="flex flex-col max-w-[50%]">
          <span className="capitalize text-gray-400 text-sm mb-1 pl-1">
            {userTheme?.infoLabel1}
          </span>
          <CompInputText text={todoInfoLabel1} set_text={set_todoInfoLabel1} width={'90%'} />
        </label>
        <label className="flex flex-col w-full max-w-[50%] items-end">
          <span className="capitalize text-gray-400 text-sm mb-1 pr-1">
            {userTheme.infoLabel2}
          </span>
          <CompInputText text={todoInfoLabel2} set_text={set_todoInfoLabel2} width={'90%'} />
        </label>
      </div>

      <div>
        <CompInputToggle toggle={todoActiveMarker1} set_toggle={set_todoActiveMarker1}/>
        <CompInputToggle toggle={todoActiveMarker2} set_toggle={set_todoActiveMarker2}/>
        <CompInputToggle toggle={todoActiveMarker3} set_toggle={set_todoActiveMarker3}/>
        <CompInputToggle toggle={todoActiveMarker4} set_toggle={set_todoActiveMarker4}/>
      </div>
    
      <button
        onClick={() => set_modalCreateTodoIsOpened(false)}
      >
        Cancelar
      </button>
    </div>
  )
}

export default ModalCreateTodo