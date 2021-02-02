import React, { useContext } from 'react'
import Moment from 'moment'
import NoteForm from './NoteForm'
import NotesContext from '../context/notes-contex'
import { addNote } from '../actions/notes'
import { firebaseAddNote } from '../firebase/api'

export default (props) => {
  const { notesDispatch } = useContext(NotesContext)

  const onNoteAdd = ({ note, description, status }) => {
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
      <h1>Add note</h1>
      <NoteForm dispatch={onNoteAdd} buttonPrefix={'Add'} />
    </div>
  )
}