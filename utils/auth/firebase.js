import firebase from "firebase/app"
import "firebase/auth"
import { useState, useEffect } from "react"

const firebaseConfig = {
  apiKey: "AIzaSyBm7FS1ca4O-qlBjM01bv2YG5a8_89jkYU",
  authDomain: "video-course-platform.firebaseapp.com",
  databaseURL: "https://video-course-platform.firebaseio.com",
  projectId: "video-course-platform",
  storageBucket: "video-course-platform.appspot.com",
  messagingSenderId: "76687715517",
  appId: "1:76687715517:web:dd1f9da0bdb3869a3bdbd4",
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
