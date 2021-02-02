import React, { useState, useContext } from 'react'
import NoteForm from './NoteForm'
import NotesContext from '../context/notes-contex'
import { editNote, removeNote } from '../actions/notes'
import { addHistory } from '../actions/history'
import { firebaseEditNote, firebaseRemoveNote, firebaseAddHistory } from '../firebase/api'

export default (props) => {
  const { notesState: { payload: notes }, notesDispatch, historyDispatch } = useContext(NotesContext)
  const [error, setError] = useState('')
  const filteredNote = notes.filter((note) => {
    if (note.id.toString() === props.match.params.id) {
      return true
    }
  })

  const onNoteEdit = ({ note, description, status }) => {
    const promise1 = firebaseEditNote(props.match.params.id, note, description, status)
    const promise2 = firebaseAddHistory({ modification: 'Edited', note: filteredNote[0] })

    Promise.all([promise1, promise2]).then(([undefined, ref]) => {
      notesDispatch(editNote({ id: props.match.params.id, note, description, status }))
      historyDispatch(addHistory(ref.key, 'Edited', filteredNote[0]))
      props.history.push('/')
    }).
      catch((err) => {
        throw err
      })
  }

  const onNoteRemove = () => {
    const promise1 = firebaseRemoveNote(props.match.params.id)
    const promise2 = firebaseAddHistory({ modification: 'Removed', note: filteredNote[0] })

    Promise.all([promise1, promise2]).
      then(([undefined, ref]) => {
        notesDispatch(removeNote(props.match.params.id))
        historyDispatch(addHistory(ref.key, 'Removed', filteredNote[0]))
        props.history.push('/')

        if (error) {
          setError('')
        }
      }).
      catch((err) => {
        setError(err)
      })
  }

  return (
    <div>
      <h1>Edit note</h1>
      <NoteForm
        dispatch={onNoteEdit}
        buttonPrefix={'Edit'}
        editNote={filteredNote[0]}
      />
      <button onClick={onNoteRemove}>Remove</button>
      {error && <p>{error}</p>}
    </div>
  )
}