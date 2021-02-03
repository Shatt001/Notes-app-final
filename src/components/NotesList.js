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
        <div className="content-container">
          <LoadingPage />
        </div>
      </div>
    )
  }

  const filteredNotes = getFilteredNotes(notes, filters)

  return (
    <div>
      <div className="content-container">
        {
          filteredNotes &&
          <div className="list">
            <div className="list__header">
              <span>Status / Note</span>
              <span>Description</span>
            </div>
            {
              filteredNotes.map((note) => {
                return (
                  <div className="list__data" key={note.id}>
                    <div className="list__data__container">
                      <div>
                        <input
                          className="cb-input cb-input--disabled"
                          type="checkbox"
                          checked={note.status === 'finished' ? true : false}
                          readOnly
                        />
                        <Link className="list__data__container__link" to={'/edit/' + note.id}>{note.note}</Link>
                      </div>
                      <p>{Moment(note.createdAt).fromNow()}</p>
                    </div>
                    <p className="list__data__description">{note.description}</p>
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    </div>
  )
}