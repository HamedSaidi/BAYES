import constants from './constants'
import tournaments from '../data'
import moment from 'moment'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppStateType, FiltersType } from '../reducers/app'



export const loadTournaments = (): ThunkAction<void, AppStateType, null, Action<string>> => (dispatch, getState) => {
  const filters = getState().app.filters
  const res = tournaments.filter((tournament) => {
    const dateFormat = 'YYYY-MM-DD';
    const naemQuery = new RegExp(`${filters.name}`, 'i');
    return naemQuery.test(tournament.name)
      && filters.startDate < moment(tournament.date_start, dateFormat).toDate()
      && filters.endDate > moment(tournament.date_end, dateFormat).toDate();
  });

  dispatch({ type: constants.LOAD_TOURNAMENTS, tournaments:res });
}

export const handleFiltersChange = (filters: FiltersType): ThunkAction<void, AppStateType, null, Action<string>> => (dispatch) => {
  dispatch({ type: constants.FILTERS_CHANGE, filters });
  dispatch(loadTournaments());
}

export const showTournamentDetails = ():  ThunkAction<void, AppStateType, null, Action<string>> => (dispatch) => {
  const tournamentId = parseInt(window.location.pathname.split('/')[2], 10);
  const tournament = tournaments.find(({id}) => id === tournamentId);
  dispatch({ type: constants.SHOW_SINGEL_TOURNAMENT, tournament });
}
