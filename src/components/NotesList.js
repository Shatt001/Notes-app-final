import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'moment'
import NotesContext from '../context/notes-contex'
import getFilteredNotes from '../selectors/notes'
import LoadingPage from './LoadingPage'


export default () => {
  const { notesState: { meta, payload: notes }, filtersState: filters } = useContext(NotesContext)

  if (meta.loading) {
    return (
      <div>
        <h1>Notes List</h1>
        <LoadingPage />
      </div>
    )
  }

  const filteredNotes = getFilteredNotes(notes, filters)

  return (
    <div>
      <h1>Notes List</h1>
      {filteredNotes.map((note) => {
        return (
          <div key={note.id}>
            <input
              type="checkbox"
              checked={note.status === 'finished' ? true : false}
              readOnly
            />
            <Link to={'/edit/' + note.id}>{note.note}</Link>
            <p>{note.description}</p>
            <p>{Moment(note.createdAt).fromNow()}</p>
          </div>
        )
      })}
    </div>
  )
}