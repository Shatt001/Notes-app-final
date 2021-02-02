import React, { useReducer, useEffect, useState } from 'react'
import Moment from 'moment'
import { populateData } from '../actions/data'
import filtersReducer from '../reducers/filters'
import historyReducer from '../reducers/history'
import notesReducer from '../reducers/notes'

const NotesContext = React.createContext()

export const NotesProvider = ({ children }) => {
  const [error, setError] = useState('')
  const defaultHistory = { meta: { loading: true }, payload: [] }
  const defaultNotes = { meta: { loading: true }, payload: [] }
  const defaultFilters = {
    type: 'all',
    text: '',
    startDate: Moment().startOf('month'),
    endDate: Moment().endOf('month'),
    sortBy: 'alphabetical'
  }

  useEffect(() => {
    populateData().then(data => {
      notesDispatch({ type: 'POPULATE_NOTES', payload: data.notes, meta: { loading: false } })
      historyDispatch({ type: 'POPULATE_HISTORY', payload: data.history, meta: { loading: false } })

      if (error) {
        setError('')
      }
    }).catch((err) => {
      setError(err)
    })
  }, [])

  const [filtersState, filtersDispatch] = useReducer(filtersReducer, defaultFilters)
  const [historyState, historyDispatch] = useReducer(historyReducer, defaultHistory)
  const [notesState, notesDispatch] = useReducer(notesReducer, defaultNotes)

  return (
    <NotesContext.Provider value={{ notesState, notesDispatch, filtersState, filtersDispatch, historyState, historyDispatch }} >
      {error ? <p>{error}</p> : <div>{children}</div>}
    </NotesContext.Provider>
  )
}

export default NotesContext