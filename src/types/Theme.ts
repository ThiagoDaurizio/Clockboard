export type TypedMarker = {
  color: string
  label: string
  position: number
}

export type TypedStatus = {
  color: string
  colorText: boolean
  id: string
  label: string
}

export type TypedShortcut = {
  label: string
  url: string
  icon: '' | 'gitbranch' | 'music' | 'github' | 'gitlab' | 'spotify' | 'youtube' | 'chat' | 'play' | 'react'
}

export type TypedTheme = {
  id: string
  uid: string
  infoLabel1: string
  infoLabel2: string
  shortcut1: TypedShortcut
  shortcut2:TypedShortcut
  markers: TypedMarker[]
  status: TypedStatus[]
}