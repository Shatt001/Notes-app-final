import React, { useContext } from 'react'
import Moment from 'moment'
import NoteForm from './NoteForm'
import NotesContext from '../context/notes-contex'
import { addNote } from '../actions/notes'
import { firebaseAddNote } from '../firebase/api'

export default (props) => {
  const { notesDispatch } = useContext(NotesContext)

  const onNoteAdd = ({ note, description, status }) => {

    if (note.toLowerCase().trim() === '' || description.toLowerCase().trim() === '') {
      throw 'Note and description fields cannot be empty';
    }

    const createdAt = Moment().valueOf()
    firebaseAddNote({ note, description, status, createdAt }).
      then((ref) => {
        notesDispatch(addNote(ref.key, note, description, status, createdAt))
        props.history.push('/')
      }).
      catch((err) => {
        throw err
      })
  }

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add note</h1>
        </div>
      </div>
      <div className="content-container">
        <NoteForm dispatch={onNoteAdd} buttonPrefix={'Add'} />
      </div>
    </div>
  )
}