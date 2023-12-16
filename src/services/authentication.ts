import { app } from './firebase'

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { query, where, collection, getFirestore, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'


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

      await addDoc(collection(database, 'themes'),{
        id: '',
        infoLabel1: 'Branch',
        infoLabel2: 'Note',
        markers: [
          {position: 1, label: 'marker 1', color: '#74ec82'},
          {position: 2, label: 'marker 2', color: '#fff36b'},
          {position: 3, label: 'marker 3', color: '#f9bc53'},
          {position: 4, label: 'marker 4', color: '#ff2e2e'},
        ],
        shortcut1: {
          icon: 'gitbranch',
          url: '',
          label: 'git'
        },
        shortcut2: {
          icon: 'music',
          url: '',
          label: 'music'
        },
        status: [
          {id: crypto.randomUUID(), color: '#7AE693', colorText: false, label: 'Done'},
          {id: crypto.randomUUID(), color: '#dacf51', colorText: false, label: 'Working'},
          {id: crypto.randomUUID(), color: '#ED4949', colorText: false, label: 'Stoped'}
        ],
        uid: user.uid
      }).then(async (response) =>{
        await updateDoc(doc(database, 'themes', response.id), {
          id: response.id
        })
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