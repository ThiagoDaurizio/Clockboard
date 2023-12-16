import { database } from "@/services/authentication"
import { app } from "@/services/firebase"
import { TypedTodoDTO } from "@/types/Todo"
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp, updateDoc, where } from "firebase/firestore"

export const createTodo = async (body: TypedTodoDTO) => {
  try{
    await addDoc(collection(database, 'todos'), {
      id: crypto.randomUUID(),
      createAt: serverTimestamp(),
      ...body
    }).then(async (response) =>{
      await updateDoc(doc(database, 'todos', response.id), {
        id: response.id
      })
    })
  } catch (error) {
    console.error(error)
  }

  return
}

export const getTodosByUserId = async (userId: string) =>  {
  try {
    const queryGet = query(collection(database, 'todos'), where('uid', '==', userId), orderBy('createAt', 'desc'))
    const querySnapshot = await getDocs(queryGet)

    const todosData: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    return todosData

  } catch (error) {
    console.error(error)
    throw error
  }
}

export const changeTodoInfos = async (todoId: string, newBody: TypedTodoDTO) => {
  await updateDoc(doc(database, 'todos', todoId), {
    title: newBody.title,
    infoLabel1: newBody.infoLabel1,
    infoLabel2: newBody.infoLabel2,
    markers: newBody.markers
  })

  return
}

export const changeTodoStatus = async (todoId: string, newStatusId: string) => {
  await updateDoc(doc(database, 'todos', todoId), {
    statusId: newStatusId,
  })

  return
}

export const deleteTodoById = async (todoId: string) => {
  await deleteDoc(doc(database, "todos", todoId))

  return
}