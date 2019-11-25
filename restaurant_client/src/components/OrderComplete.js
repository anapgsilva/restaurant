import React, {Component} from 'react';
import UserForm from './UserForm';

class OrderComplete extends Component {

  componentDidMount() {
    const orderItems = JSON.stringify({});
    localStorage.setItem('orderItems', orderItems);
  }

  render() {
    return(
      <div>
        <h1>Thank you for your order.</h1>

        <p>If not logged in, show sign up form</p>
        <UserForm />

      </div>
    );

  }


}


export default OrderComplete;
