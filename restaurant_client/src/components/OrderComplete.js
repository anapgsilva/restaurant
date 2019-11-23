import React, {Component} from 'react';
import UserForm from './UserForm';

class OrderComplete extends Component {

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
