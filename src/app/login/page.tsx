'use client'
import { loginWithGoogle } from '@/services/authentication'
import React from 'react'

const page = () => {
  const login = async () => {
    await loginWithGoogle()

    window.location.pathname = '/todos'
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-gray-700 w-[300px] h-fit p-4 rounded-md flex flex-col items-center">
        <h1 className='text-gray-200 font-semibold tracking-wider text-xl border border-transparent border-b-violet-600 w-[90%] text-center pb-2'>LOGIN</h1>
        <div className="flex flex-col justify-between flex-1 mt-4">
          <p className="text-center text-gray-300 text-sm">To use this application you must be logged in and authenticated by a gmail account.</p>
          <button
            onClick={login}
            className="mt-10 bg-violet-600 p-2 px-4 rounded-md text-gray-200 transition-colors duration-300 hover:bg-violet-700"
          >
            LOGIN WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  )
}

export default page