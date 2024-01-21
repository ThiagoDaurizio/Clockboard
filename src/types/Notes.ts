export type TypedNoteBody = {
  id: string
  key: string
  value: string
}

export type TypedNote = {
  id: string
  title: string
  isHided: boolean
  body: TypedNoteBody[]
  uid: string
  createAt: any
}

export type TypedNoteDTO = {
  title: string
  isHided: boolean
  body: TypedNoteBody[]
  uid: string
}