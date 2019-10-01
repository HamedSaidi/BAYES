import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { app } from '../actions'
import { TournamentType } from '../data'
import { List, Filters} from '../components'
import { FiltersType } from '../reducers/app'
import { getFiltersState, getTournamentsState } from './selectors'

interface DispatchProps {
  loadTournaments: Function;
  handleFiltersChange: Function;
}

interface StateProps {
  filters: FiltersType;
  tournaments: TournamentType[];
}

interface ListPageProps extends DispatchProps, StateProps {
}

const ListPage: React.FC<ListPageProps> = (props) => {
  const { tournaments, filters, handleFiltersChange, loadTournaments } = props

  useEffect(() => {
    loadTournaments()
  }, [loadTournaments])

  return (
    <>
      <Filters {...filters} handleFiltersChange={handleFiltersChange} />
      <List tournaments={tournaments} />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  filters: getFiltersState(state),
  tournaments: getTournamentsState(state),
})

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  loadTournaments: () => dispatch(app.loadTournaments()),
  handleFiltersChange: (filters: FiltersType) => dispatch(app.handleFiltersChange(filters)),
})

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(React.memo(ListPage));
