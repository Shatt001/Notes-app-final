import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NotesContext from '../context/notes-contex';
import getFilteredNotes from '../selectors/notes';
import LoadingPage from './LoadingPage';

const NotesSummary = () => {
  const { notesState: { meta, payload: notes }, filtersState: filters } = useContext(NotesContext);

  const allNotes = getFilteredNotes(notes, filters);
  const allCount = allNotes.length;
  const unfinishedNotes = allNotes.filter(note => note.status === 'unfinished');
  const unfinishedCount = unfinishedNotes.length;
  const countWord = allCount === 1 ? 'note' : 'notes';

  return (
    <div className="page-header">
      <div className="content-container">
        {
          meta.loading ?
            <LoadingPage /> :
            <div>
              <h1 className="page-header__title">Displayed <span>{allCount}</span> {countWord}, <span>{unfinishedCount}</span> of them unfinished yet</h1>
              <div className="page-header__actions">
                <Link className="button" to="/add">Add Note</Link>
                <Link className="button" to="/history">View History</Link>
              </div>
            </div>
        }
      </div >
    </div >
  )
}

export default NotesSummary;