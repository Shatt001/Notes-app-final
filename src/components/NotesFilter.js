import React, { useState, useContext } from 'react'
import { DateRangePicker } from 'react-dates'
import NotesContext from '../context/notes-contex'

const NotesFilter = () => {
  const { filtersState: filters, filtersDispatch } = useContext(NotesContext)
  const [calendarFocused, setCalendarFocused] = useState(null)

  const onDatesChange = ({ startDate, endDate }) => {
    if (startDate || startDate === null) {
      filtersDispatch({
        type: 'SET_START_DATE',
        filterStartDate: startDate
      })
    }

    if (endDate || endDate === null) {
      filtersDispatch({
        type: 'SET_END_DATE',
        filterEndDate: endDate
      })
    }
  }

  const onFocusChange = (calendarFocused) => {
    setCalendarFocused(calendarFocused)
  }

  const onTypeChange = (e) => {
    filtersDispatch({
      type: 'SET_TYPE',
      filterType: e.target.value
    })
  }

  const onTextChange = (e) => {
    filtersDispatch({
      type: 'SET_TEXT',
      filterText: e.target.value
    })
  }

  const onSortChange = (e) => {
    filtersDispatch({
      type: 'SET_SORT_BY',
      filterSortBy: e.target.value
    })
  }

  return (
    <div>
      <select value={filters.type} onChange={onTypeChange}>
        <option value="all">All</option>
        <option value="finished">Finished</option>
        <option value="unfinished">Unfinished</option>
      </select>
      <select value={filters.sortBy} onChange={onSortChange}>
        <option value="alphabetical">Alphabetical</option>
        <option value="dateAsc">First created</option>
        <option value="dateDsc">Last created</option>
      </select>
      <input value={filters.text} onChange={onTextChange} placeholder="Add search filter here..." />
      <DateRangePicker
        startDate={filters.startDate}
        endDate={filters.endDate}
        onDatesChange={onDatesChange}
        focusedInput={calendarFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
        startDateId="start_date_input"
        endDateId="end_date_input"
      />
    </div>
  )
}

export default NotesFilter