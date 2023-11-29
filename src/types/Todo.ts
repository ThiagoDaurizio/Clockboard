type Marker = {
  isActive: boolean
  position: number
}

export type TypedTodo = {
  id: string
  title: string
  infoLabel1: string
  infoLabel2: string
  markers: Marker[]
  statusId: string
  uid: string
}