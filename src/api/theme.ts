import { database } from "@/services/authentication"
import { TypedStatus } from "@/types/Theme";
import { arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"

export const createStatus = async (themeId: string, body: TypedStatus) => {
  try{
    const documentoRef = doc(database, 'themes', themeId);
    await updateDoc(documentoRef, {
      status: arrayUnion(body),
    })

    return
  } catch (error) {
    console.error(error)
  }
}

export const getThemeByUserId = async (userId: string) => {
  try{
    const queryGet = query(collection(database, 'themes'), where('uid', '==', userId))
    const querySnapshot = await getDocs(queryGet)

    const themeData = querySnapshot.docs
      .map((doc: any) => {
        return{
          id: doc.id,
          ...doc.data()
        }
      })

    return themeData[0]

  } catch (error) {
    console.error(error)
  }
}