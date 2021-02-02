import { firebase, googleAuthProvider } from '../firebase/firebase'

let user = {}

export const startLogin = () => {
  return firebase.auth().signInWithPopup(googleAuthProvider)
}

export const startLogout = () => {
  return firebase.auth().signOut()
}

export const setUser = (providedUser) => {
  user = providedUser
}
export const getUserId = () => {
  if (user) {
    return user.uid
  } else {
    return ''
  }
}