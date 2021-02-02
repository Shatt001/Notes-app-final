import React from 'react'
import NotesFilter from './NotesFilter'
import NotesList from './NotesList'

export default () => {
  return (
    <div>
      <h1>Notes-app dashboard</h1>
      <NotesFilter />
      <NotesList />
    </div>
  )
}
