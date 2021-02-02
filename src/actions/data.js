import database from '../firebase/firebase'
import { getUserId } from './auth'

export const populateData = () => {

  const uid = getUserId()
  const userData = database.ref('users/' + uid + '/').once('value')

  const result = userData.
    then((userSnap) => {
      let data = {
        notes: [],
        history: []
      }

      userSnap.child('/notes').forEach((noteSnap) => {
        data.notes.push({ id: noteSnap.key, ...noteSnap.val() })
      })
      userSnap.child('/history').forEach((histSnap) => {
        data.history.push({ id: histSnap.key, ...histSnap.val() })
      })

      return data
    }).catch((err) => {
      throw err
    })

  return result
}
