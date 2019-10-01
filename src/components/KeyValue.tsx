import React from 'react';

interface KeyValueProps {
  field: string;
  value: string | number;
}

const KeyValue: React.FC<KeyValueProps>  = (props) => (
  <div className="key-value">
    <span key="1" className="key">{props.field}: </span>
    <span className="value">{props.value}</span>
  </div>
);

export default React.memo(KeyValue);
