import Moment from 'moment'

const getFilteredNotes = (notes, filters) => {
  let filteredNotes = []
  filteredNotes = notes.filter(({ note, status, createdAt }) => {
    const isTextMatch = note.toLowerCase().includes(filters.text.toLowerCase().trim())
    const isTypeMatch = filters.type === 'all' || status === filters.type
    const isPeriodMatch = (!filters.startDate || !filters.endDate) || Moment(createdAt).isBetween(filters.startDate, filters.endDate)
    return isTextMatch && isTypeMatch && isPeriodMatch
  })

  filteredNotes.sort((a, b) => {
    if (filters.sortBy === 'alphabetical') {
      if (a.note < b.note) return -1
      else if (a.note > b.note) return 1
      return 0
    } else if (filters.sortBy === 'dateAsc') {
      if (a.createdAt < b.createdAt) return -1
      else if (a.createdAt > b.createdAt) return 1
      return 0
    } else if (filters.sortBy === 'dateDsc') {
      if (a.createdAt > b.createdAt) return -1
      else if (a.createdAt < b.createdAt) return 1
      return 0
    }
  })

  return filteredNotes
}

export default getFilteredNotes