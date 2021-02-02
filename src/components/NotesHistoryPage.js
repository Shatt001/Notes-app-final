import React, { useContext } from 'react'
import NotesContext from '../context/notes-contex'
import LoadingPage from './LoadingPage'

const HistoryItem = ({ history: { modification, note }, ...props }) => {
  return (
    <div key={props.key} >
      {modification} {note.status} {note.note} {note.description}
    </div>
  )
}

export default () => {
  const { historyState: { meta, payload: history } } = useContext(NotesContext)

  if (meta.loading) {
    return (
      <div>
        <h1>History page</h1>
        <LoadingPage />
      </div>
    )
  }

  return (
    <div>
      <h1>History page</h1>
      {
        history.length > 0 &&
        history.map((history) => (<HistoryItem key={history.id} history={history} />))
      }
    </div>
  )
}