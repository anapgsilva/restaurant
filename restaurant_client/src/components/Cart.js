import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Cart extends Component {


  render() {
    return (
      <div>
        <h1>Cart div coming soon</h1>
        <button onSubmit="">
          <Link to="/checkout">Check Out</Link>
        </button>
      </div>
    );
  }
}



export default Cart;
