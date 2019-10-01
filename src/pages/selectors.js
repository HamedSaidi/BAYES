import { createSelector } from 'reselect'

// list page selectors
const getFilters = (state) => state.app.filters
const getTournaments = (state) => state.app.tournaments

export const getFiltersState = createSelector(
  [ getFilters ],
  (state) => state
)

export const getTournamentsState = createSelector(
  [ getTournaments ],
  (state) => state
)

// details page selectors
const getTournamentDetails = (state) => state.app.tournamentToDisplay

export const getTournamentDetailsState = createSelector(
  [ getTournamentDetails ],
  (state) => state
)
