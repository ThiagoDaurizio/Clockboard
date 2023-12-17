'use client'
import { loginWithGoogle } from '@/services/authentication'
import React from 'react'

const page = () => {
  const login = async () => {
    await loginWithGoogle()

    window.location.pathname = '/todos'
  }

  return (
    <div>
      <button
        onClick={login}
      >
        LOGIN
      </button>
    </div>
  )
}

export default page