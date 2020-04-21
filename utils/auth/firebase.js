import firebase from "firebase/app"
import "firebase/auth"
import { useState, useEffect } from "react"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser
    return user
  })
  function onChange(user) {
    setState(user)
  }
  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange)
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])
  return state
}

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

export const auth = firebase.auth
