import React from 'react';
import {TournamentType} from '../data';
import { Link } from 'react-router-dom'

import { parseDate } from '../helpers'

interface ListItemProps {
  item: TournamentType;
}

const ListItem: React.FC<ListItemProps> = ({item: {date_start, date_end, name, id}}) => {
  return (
    <div className="ListItem">
      <div className="title"><div className="title-icon"/>{parseDate(date_start)} - {parseDate(date_end)}</div>
      <div className="body">{name}</div>
      <Link className="styled-link" to={`/tournament/${id}`}>see details <div className="styled-link-icon"/></Link>
    </div>
  );
};

export default React.memo(ListItem);
