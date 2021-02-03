import React, { useContext } from 'react'
import NotesContext from '../context/notes-contex'
import LoadingPage from './LoadingPage'

const HistoryItem = ({ history: { modification, note }, ...props }) => {
  return (
    <tr key={props.key} >
      <td>{modification}</td>
      <td>{note.status}</td>
      <td>{note.note}</td>
      <td>{note.description}</td>
    </tr>
  )
}

export default () => {
  const { historyState: { meta, payload: history } } = useContext(NotesContext)

  if (meta.loading) {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Notes History</h1>
          </div>
        </div>
        <div className="content-container">
          <LoadingPage />
        </div>
      </div>

    )
  }

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Notes History</h1>
        </div>
      </div>
      {
        history.length > 0 &&
        <table className="content-container table">
          <tr className="table__header">
            <th>Action</th>
            <th>Status</th>
            <th>Note</th>
            <th>Description</th>
          </tr>
          {
            history.map((history) => (<HistoryItem key={history.id} history={history} />))
          }
        </table>
      }
    </div>
  )
}