'use client'
import { loginWithGoogle } from '@/services/authentication'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

  const router = useRouter()

  const login = async () => {
    await loginWithGoogle()

    router.push('/todos')
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