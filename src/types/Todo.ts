export type TypedTodo = {
  id: string
  title: string
  infoLabel1: string
  infoLabel2: string
  markers: [
    {isActive: boolean, position: number}
  ]
  statusId: string
  uid: string
}