const filtersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TYPE':
      return {
        ...state,
        type: action.filterType
      }
    case 'SET_TEXT':
      return {
        ...state,
        text: action.filterText
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.filterStartDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.filterEndDate
      }
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.filterSortBy
      }
    default:
      return state
  }
}

export default filtersReducer