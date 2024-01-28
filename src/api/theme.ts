import { database } from "@/services/authentication"
import { TypedMarker, TypedShortcut, TypedStatus, TypedTheme } from "@/types/Theme";
import { arrayRemove, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"

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

export const createStatus = async (themeId: string, body: TypedStatus) => {
  try{
    const documentRef = doc(database, 'themes', themeId)
    await updateDoc(documentRef, {
      status: arrayUnion(body),
    })

    return
  } catch (error) {
    console.error(error)
  }
}

export const editStatus = async (themeId: string, statusId: string, newBody: TypedStatus) => {
  try {
    const documentRef = doc(database, 'themes', themeId)
    const documentSnapshot = await getDoc(documentRef)

    if(documentSnapshot.exists()){
      const themeData = documentSnapshot.data() as TypedTheme

      const updatedStatus = (themeData?.status || []).map((status) => {
        if (status.id === statusId) {
          return newBody
        } else {
          return status
        }
      })

      await updateDoc(documentRef, {status: updatedStatus})
      return
    }
  } catch (error) {
    console.error(error)
  }
}

export const deleteStatus = async (themeId: string, statusId: string) => {
  try {
    const documentRef = doc(database, 'themes', themeId)
    const documentSnapshot = await getDoc(documentRef)

    if(documentSnapshot.exists()){
      const themeData = documentSnapshot.data() as TypedTheme

      const filteredData = themeData?.status?.filter((status) => status.id !== statusId)

      await updateDoc(documentRef, {status: filteredData})

      return
    }

  } catch (error) {
    console.error(error)
  }
}

export const editInfolabels = async (themeId: string, label1: string, label2: string) => {
  await updateDoc(doc(database, 'themes', themeId), {
    infoLabel1: label1,
    infoLabel2: label2
  })

  return
}

export const editMarkers = async (themeId: string, newBody: TypedMarker[]) => {
  await updateDoc(doc(database, 'themes', themeId), {
    markers: newBody
  })

  console.log(newBody)

  return
}

export const editShortcuts = async (themeId: string, shortcut1: TypedShortcut, shortcut2: TypedShortcut) => {
  await updateDoc(doc(database, 'themes', themeId), {
    shortcut1: shortcut1,
    shortcut2: shortcut2
  })
  return
}