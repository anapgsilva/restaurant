import React from 'react';
import {Dropdown} from 'semantic-ui-react';




const DropdownTime = (props) => {

  const options = [
    { key: 1, text: '5:00', value: '5:00' },
    { key: 2, text: '5:30', value: '5:30' },
    { key: 3, text: '6:00', value: '6:00' },
    { key: 4, text: '6:30', value: '6:30' },
    { key: 5, text: '7:00', value: '7:00' },
    { key: 6, text: '7:30', value: '7:30' },
    { key: 7, text: '8:00', value: '8:00' },
    { key: 8, text: '8:30', value: '8:30' },
    { key: 9, text: '9:00', value: '9:00' },
    { key: 10, text: '9:30', value: '9:30' },
    { key: 11, text: '10:00', value: '10:00' }
  ];

  const submitTime = (event, state) => {
    const timeOrder = state.value;
    console.log(timeOrder);
    return props.onChange(timeOrder);
  };

  return (
    <Dropdown id="dropdown-time" onChange={submitTime} search searchInput={{type: 'string'}} selection options={options} placeholder="Select a time" required />
  );
}

export default DropdownTime;
