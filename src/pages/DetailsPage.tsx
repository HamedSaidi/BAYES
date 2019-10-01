import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getTournamentDetailsState } from './selectors'
import { parseDate } from '../helpers'
import { TournamentType } from '../data';
import { app } from '../actions'
import { KeyValue } from '../components'

interface StateProps {
  item?: TournamentType;
}

interface DispatchProps {
  showTournamentDetails: Function;
}

interface DetailsPageProps extends StateProps, DispatchProps {
}

const DetailsPage: React.FC<DetailsPageProps> = (props) => {
  const { item, showTournamentDetails } = props
  useEffect(() => {
    showTournamentDetails()
  }, [showTournamentDetails])

  if(!item)
    return (<div> Loading </div>)

  return (
    <div className="DetailsPage">
      <KeyValue field={'id'} value={item.id} />
      <KeyValue field={'name'} value={item.name} />
      <KeyValue field={'country'} value={item.country} />
      <KeyValue field={'city'} value={item.city} />
      <KeyValue field={'date_start'} value={parseDate(item.date_start)} />
      <KeyValue field={'date_end'} value={parseDate(item.date_end)} />
      <div className="series">
        <div className="series-title">series</div>
        <KeyValue field={'id'} value={item.series.id} />
        <KeyValue field={'name'} value={item.series.name} />
        <KeyValue field={'date_start'} value={item.series.date_start} />
        <KeyValue field={'date_end'} value={item.series.date_end} />
      </div>
      <Link className="styled-link" to={`/`}>go back to list page <div className="styled-link-icon"/></Link>
    </div>
  );
};


const mapStateToProps = (state: any) => ({
  item: getTournamentDetailsState(state),
})

const mapDispatchToProps = (dispatch: Function) => ({
  showTournamentDetails: () => dispatch(app.showTournamentDetails()),
})

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(React.memo(DetailsPage));
