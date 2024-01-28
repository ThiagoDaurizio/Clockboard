import { database } from "@/services/authentication"
import { TypedNote, TypedNoteDTO, TypedNoteItem, TypedNoteItemDTO } from "@/types/Notes"
import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, serverTimestamp, updateDoc, where } from "firebase/firestore"



export const createNote = async (body: TypedNoteDTO) => {
  try {
    await addDoc(collection(database, 'notes'), {
      id: crypto.randomUUID(),
      createAt: serverTimestamp(),
      ...body
    }).then(async (response) => {
      await updateDoc(doc(database, 'notes', response.id), {
        id: response.id
      })
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getNotesByUserId = async (userId: string) => {
  try {
    const queryGet = query(collection(database, 'notes'), where('uid', '==', userId), orderBy('createAt', 'desc'))
    const querySnapshot = await getDocs(queryGet)
    
    const notesData: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))

    return notesData

  } catch (error) {
    console.error(error)
    throw error
  }
}

export const editNote = async (noteId: string, newBody: TypedNoteDTO) => {
  try {
    await updateDoc(doc(database, 'notes', noteId), {
      title: newBody.title,
      color: newBody.color,
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const changeNoteHided = async (noteId: string, newHidedMode: boolean) => {
  try {
    await updateDoc(doc(database, 'notes', noteId), {
      isHided: newHidedMode
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const bringNoteToUp = async (noteId: string) => {
  try {
    await updateDoc(doc(database, 'notes', noteId), {
      createAt: serverTimestamp()
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const deleteNoteById = async (noteId: string) => {
  try {
    await deleteDoc(doc(database, 'notes', noteId))
  } catch (error) {
    console.error(error)
    throw error
  }
}



export const addNoteItem = async (noteId: string, body: TypedNoteItemDTO) => {
  const formatedBody: TypedNoteItem = {
    ...body,
    id: crypto.randomUUID(),
    createAt: new Date(),
  }

  try {
    await updateDoc(doc(database, 'notes', noteId), {
      items: arrayUnion(formatedBody)
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const editNoteItem = async (noteId: string, itemId: string, newBody: TypedNoteItem) => {
  try {
    const documentRef = doc(database, 'notes', noteId)
    const documentSnapshot = await getDoc(documentRef)

    if(documentSnapshot.exists()){
      const noteData = documentSnapshot.data() as TypedNote

      const updatedItems = (noteData?.items || []).map((item) => {
        if(item.id === itemId){
          return newBody
        } else {
          return item
        }
      })

      await updateDoc(documentRef, {
        items: updatedItems
      })

      return
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const changeNoteItemHided = async (noteId: string, itemId: string, newHidedMode: boolean) => {
  try {
    const documentRef = doc(database, 'notes', noteId)
    const documentSnapshot = await getDoc(documentRef)

    
    if(documentSnapshot.exists()){
      const noteData = documentSnapshot.data() as TypedNote
      
      const updatedItems = (noteData?.items ?? []).map((item) => {
        if(item.id === itemId){
          return {
            ...item,
            isHided: newHidedMode
          }
        } else {
          return item
        }
      })

      await updateDoc(documentRef, {
        items: updatedItems
      })

      return
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const bringNoteItemToUp = async (noteId: string, itemId: string) => {  
  try {
    const documentRef = doc(database, 'notes', noteId)
    const documentSnapshot = await getDoc(documentRef)

    
    if(documentSnapshot.exists()){
      const noteData = documentSnapshot.data() as TypedNote

      const updatedItems = (noteData?.items || []).map((item) => {
        if(item.id === itemId){
          return {
            ...item,
            createAt: new Date()
          }
        } else {
          return item
        }
      })

      await updateDoc(documentRef, {
        items: updatedItems
      })

      return
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const deleteNoteItemByIds = async (noteId: string, itemId: string) => {
  try {
    const documentRef = doc(database, 'notes', noteId)
    const documentSnapshot = await getDoc(documentRef)

    if(documentSnapshot.exists()){
      const noteData = documentSnapshot.data() as TypedNote

      const filteredData = noteData?.items?.filter((item) => item.id !== itemId)

      await updateDoc(documentRef, {
        items: filteredData
      })

      return
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}