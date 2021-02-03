import React from 'react';
import NotesFilter from './NotesFilter';
import NotesList from './NotesList';
import NotesSummary from './NotesSummary';

export default () => {
  return (
    <div>
      <NotesSummary />
      <NotesFilter />
      <NotesList />
    </div>
  )
}
