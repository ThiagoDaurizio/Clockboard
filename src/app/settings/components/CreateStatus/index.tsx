'use client'
import { createStatus } from '@/api/theme'
import { globalContext } from '@/context/global'
import { TypedStatus } from '@/types/Theme'
import React, { useState } from 'react'

const ModalCreateStatus = () => {
  const { userTheme, set_isLoading } = globalContext()
  const [statusLabel, set_statusLabel] = useState<string>('')
  const [statusColor, set_statusColor] = useState<string>('')
  const [statusColorText, set_statusColorText] = useState<string>('')

  const handleCreate = async () => {
    set_isLoading(true)

    const body: TypedStatus = {
      label: statusLabel.toLocaleLowerCase(),
      color: statusColor.toLocaleLowerCase(),
      colorText: statusColorText.toLocaleLowerCase(),
      id: crypto.randomUUID()
    }

    createStatus(userTheme.id, body)

    set_isLoading(false)
  }

  return (
    <div>
      <input 
        value={statusLabel}
        onChange={(event) => set_statusLabel(event.target.value)}
        placeholder={'status label'}
      />
      <input 
        value={statusColor}
        onChange={(event) => set_statusColor(event.target.value)}
        placeholder={'status color'}
        type={'color'}
      />
      <input 
        value={statusColorText}
        onChange={(event) => set_statusColorText(event.target.value)}
        placeholder={'status textColor'}
        type={'color'}
      />

      <button onClick={handleCreate}>Create</button>
    </div>
  )
}

export default ModalCreateStatus