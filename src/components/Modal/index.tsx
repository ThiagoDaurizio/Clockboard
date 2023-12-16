import React, { ReactNode } from 'react'

interface IProps {
  isOpened: boolean
  children: ReactNode
  modalHeading: string
  modalWidth?: number | string
  modalHeight?: number | string
}

const CompModal = ( { isOpened, children, modalHeading, modalWidth = '340px', modalHeight = 'fit-content' }: IProps ) => {
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-900/50 z-40"
      style={{display: isOpened ? 'flex' : 'none'}}
    >
      <div 
        className="w-[340px] h-[400px] bg-gray-700 rounded-md flex flex-col items-center gap-3 p-4"
        style={{width: modalWidth, height: modalHeight}}
      >
      <h1 className='text-gray-200 font-semibold tracking-wider text-xl border border-transparent border-b-violet-600 w-[90%] text-center pb-2'>{modalHeading}</h1>
      {children}
      </div>
    </div>
  )
}

export default CompModal