export type TypedNoteItem = {
  id: string
  key: string
  value: string
  isHided: boolean
  createAt: any
}

export type TypedNote = {
  id: string
  title: string
  items: TypedNoteItem[]
  isHided: boolean
  uid: string
  createAt: any
  color: string
}

export type TypedNoteItemDTO = {
  key: string
  value: string
  isHided: boolean
}

export type TypedNoteDTO = {
  title: string
  items: TypedNoteItem[]
  isHided: boolean
  uid: string
  color: string
}