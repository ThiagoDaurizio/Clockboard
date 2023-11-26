import { app } from './firebase'

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { query, where, collection, getFirestore, getDocs, addDoc } from 'firebase/firestore'


const auth = getAuth(app)
const database = getFirestore(app)

const googleProvider = new GoogleAuthProvider()

const loginWithGoogle = async ()  => {
  try {
    const response = await signInWithPopup(auth,  googleProvider)

    const user = response.user
    const token = await user.getIdToken()

    const userId = query(collection(database, 'users'), where('uid', '==', user.uid))
    const docs = await getDocs(userId)

    if(docs.docs.length === 0){
      await addDoc(collection(database, 'users'), {
        uid: user.uid,
        name:user.displayName,
        authProvider: 'google',
        email: user.email
      })
    }
  } catch (error) {
    console.error(error)
  }
}

const logout = async () => {
  await signOut(auth)
}


export {auth, database, loginWithGoogle, logout}