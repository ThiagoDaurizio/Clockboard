export type TypedMarker = {
  color: string
  label: string
  position: number
}

export type TypedStatus = {
  color: string
  colorText: string
  id: string
  label: string
}

export type TypedTheme = {
  id: string
  uid: string
  infoLabel1: string
  infoLabel2: string
  markers: TypedMarker[]
  status: TypedStatus[]
}