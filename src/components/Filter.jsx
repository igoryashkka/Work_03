import React from 'react';
import './Filter.css'

function Filter({ onChangeFilter, options }) {
  return (
      <select onChange={onChangeFilter}>
        {options.map(option => <option value={option} key={option}>{option}</option>)}
      </select>
  );
}

export default Filter;
