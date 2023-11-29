import React, { ReactNode } from 'react'

interface IProps {
  isOpened: boolean
  children: ReactNode
}

const CompModal = ( { isOpened, children }: IProps ) => {
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-900/50 z-40"
      style={{display: isOpened ? 'flex' : 'none'}}
    >
      {children}
    </div>
  )
}

export default CompModal