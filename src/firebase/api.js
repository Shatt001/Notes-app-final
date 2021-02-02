import database from './firebase'
import { getUserId } from '../actions/auth'

export const firebaseAddNote = (noteObj) => {
  const uid = getUserId()
  return database.ref('users/' + uid + '/notes').push(noteObj)
}

export const firebaseEditNote = (id, note, description, status) => {
  const uid = getUserId()
  return database.ref('users/' + uid + '/notes/' + id).update({ note, description, status })
}

export const firebaseRemoveNote = (id) => {
  const uid = getUserId()
  return database.ref('users/' + uid + '/notes/' + id).remove()
}

export const firebaseAddHistory = (historyObj) => {
  const uid = getUserId()
  return database.ref('users/' + uid + '/history').push(historyObj)
}