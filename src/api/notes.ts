import { database } from "@/services/authentication"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"



// 

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