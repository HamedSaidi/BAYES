import React from 'react';
import  DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { FiltersType } from '../reducers/app'

interface FiltersProps extends FiltersType {
  handleFiltersChange: Function;
}

const Filters: React.FC<FiltersProps> = (props) => {
  const { name, startDate, endDate, handleFiltersChange } = props

  return (
    <div className="FiltersType">
      <div className="date-picker-container">
        <div className="title">Event Name</div>
        <input value={name} onChange={({target: { value: name }}) => handleFiltersChange({name, startDate, endDate})} className="InputField"/>
      </div>
      <div className="date-picker-container">
        <div className="title">Start Date</div>
        <DatePicker
          className="date-picker"
          selected={startDate}
          onChange={startDate => props.handleFiltersChange({name, startDate, endDate})}
          selectsStart={true}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className="date-picker-container">
        <div className="title">End Date</div>
        <DatePicker
          className="date-picker"
          selected={endDate}
          onChange={endDate => handleFiltersChange({name, startDate, endDate})}
          selectsEnd={true}
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
    </div>
  );
};

export default React.memo(Filters);
