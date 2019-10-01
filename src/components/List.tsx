import React from 'react';
import { TournamentType } from '../data';
import ListItem from './ListItem';

interface ListProps {
  tournaments: TournamentType[];
}

const List: React.FC<ListProps> = (props) => {
  return (
    <div className="List">
      {props.tournaments.map((item: TournamentType) => <ListItem key={item.id} item={item} />)}
    </div>
  );
};

export default React.memo(List);
