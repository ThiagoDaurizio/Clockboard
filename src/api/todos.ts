import { database } from "@/services/authentication"
import { collection, getDocs } from "firebase/firestore"

export const getTodosByUserId = async (userId: string) =>  {
  try{
    const querySnapshot = await getDocs(collection(database, 'todos'))
    const todosData = querySnapshot.docs
      .map((doc: any) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      .filter((todo) => todo.uid === userId)

    return todosData

  } catch (error) {
    console.error(error)
  }
}