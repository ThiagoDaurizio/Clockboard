'use client'
import React, { useState } from 'react'
import SettingsBar from './components/SettingsBar'
import SettingsStatus from './components/SettingsStatus'
import { modalContext } from '@/context/modalsContext'
import CompModal from '@/components/Modal'

import ModalCreateStatus from './modals/CreateStatus'
import SettingsHeader from './components/SettingsHeader'
import { TypedStatus } from '@/types/Theme'
import ModalDeleteStatus from './modals/DeleteStatus'
import ModalEditStatus from './modals/EditStatus'
import { globalContext } from '@/context/global'
import ModalEditInfolabels from './modals/EditInfolabels'
import ModalEditMarkers from './modals/EditMarkers'
import ModalEditShortcuts from './modals/EditShortcuts'

export enum ActualSectionENUM {
  core = 'core',
  status = 'status',
  others = 'others',

}

const page = () => {
  const { userTheme, isLoading } = globalContext()
  const { modalSettingsCreateStatus, modalSettingsEditStatus, modalSettingsDeleteStatus, modalSettingsEditInfolabels, modalSettingsEditMarkers, modalSettingsEditShortcuts } = modalContext()
  
  const [actualSection, set_actualSection] = useState<ActualSectionENUM>(ActualSectionENUM.core)
  const [actualStatus, set_actualStatus] = useState<TypedStatus>({} as TypedStatus)

  return (
    <div className="flex flex-col items-center gap-4">
      <SettingsHeader 
        actualSection={actualSection}
        set_actualSection={set_actualSection}
      />

      {actualSection === ActualSectionENUM.core && !isLoading && userTheme.status === 'completed' &&(
        <section 
          className="flex"
        >
          <SettingsBar />
        </section>
      )}

      {actualSection === ActualSectionENUM.status && !isLoading && userTheme.status === 'completed' &&(
        <section 
          className="flex"
        >
          <SettingsStatus 
            set_actualStatus={set_actualStatus}
          />
        </section>
      )}


      <CompModal isOpened={modalSettingsCreateStatus} modalHeading='Create Status'>
        <ModalCreateStatus />
      </CompModal>

      <CompModal isOpened={modalSettingsEditStatus} modalHeading='Edit Status'>
        <ModalEditStatus 
          actualStatus={actualStatus}
        />
      </CompModal>

      <CompModal isOpened={modalSettingsDeleteStatus} modalHeading='Delete this Status?'>
        <ModalDeleteStatus 
          actualStatus={actualStatus}
        />
      </CompModal>

      <CompModal isOpened={modalSettingsEditInfolabels} modalHeading='Edit Todos Labels'>
        <ModalEditInfolabels />
      </CompModal>

      <CompModal isOpened={modalSettingsEditMarkers} modalHeading='Edit Todos Markers'>
        <ModalEditMarkers />
      </CompModal>

      <CompModal isOpened={modalSettingsEditShortcuts} modalHeading='Edit Shortcuts'>
        <ModalEditShortcuts />
      </CompModal>
    </div>
  )
}

export default page