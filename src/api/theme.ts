import { database } from "@/services/authentication"
import { collection, getDocs } from "firebase/firestore"



export const getThemeByUserId = async (userId: string) => {
  try{
    const querySnapshot = await getDocs(collection(database, 'themes'))
    const themeData = querySnapshot.docs
      .map((doc: any) => {
        return{
          id: doc.id,
          ...doc.data()
        }
      })
      .filter((theme) => theme.uid === userId)[0]

    return themeData

  } catch (error) {
    console.error(error)
  }
}