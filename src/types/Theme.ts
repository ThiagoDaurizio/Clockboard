type Marker = {
  color: string
  label: string
  position: number
}

type Status = {
  color: string
  colorText: string
  id: string
  label: string
  uid: string
}

export type TypedTheme = {
  id: string
  uid: string
  infoLabel1: string
  infoLabel2: string
  markers: Marker[]
  status: Status[]
}