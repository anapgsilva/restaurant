import React from 'react';
import {Dropdown, Menu} from 'semantic-ui-react';




const DropdownTime = () => {

  const options = [
    { key: 1, text: '5:00', value: '5:00' },
    { key: 2, text: '5:15', value: '5:15' },
    { key: 3, text: '5:30', value: '5:30' }
  ];

  const submitTime = (props) => {
    console.log("I can see this", props);
    // console.log(event.target.value);
  };

  return (
    <Menu compact>
      <Dropdown onClick={() => submitTime()} text='Order time' options={options} simple item />
    </Menu>
  );
}

export default DropdownTime;
