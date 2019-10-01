import constants from '../actions/constants'
import { TournamentType } from '../data'
import moment from 'moment'

export interface FiltersType {
  name: string;
  startDate: Date;
  endDate: Date;
};

export interface StateType {
  tournaments: TournamentType[];
  filters: FiltersType;
  tournamentToDisplay: TournamentType | null;
}

export interface AppStateType {
  app: StateType;
}

const initialState: StateType = {
  tournaments: [],
  filters: {
    name: '',
    startDate: moment('2019-01-01', 'YYYY-MM-DD').toDate(),
    endDate: moment('2019-09-30', 'YYYY-MM-DD').toDate()
  },
  tournamentToDisplay: null
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case constants.LOAD_TOURNAMENTS:
      return {
        ...state,
        tournaments: action.tournaments,
      }

    case constants.FILTERS_CHANGE:
      return {
        ...state,
        filters: action.filters
      }

      case constants.SHOW_SINGEL_TOURNAMENT:
        return {
          ...state,
          tournamentToDisplay: action.tournament
        }

    default:
      return state
  }
}
