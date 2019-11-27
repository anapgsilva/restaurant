import React, {Component} from 'react';
import OrderSummary from './OrderSummary';
import Nav from './Nav';

class OrderComplete extends Component {

  constructor() {
    super();
    this.state = {
      orderItems: {},
      allProducts: [],
      delivery: '',
      paymentOption: ''
    }
  }

  componentDidMount() {

    //Gets shopping cart from local storage
    const orderItems = JSON.parse(localStorage.getItem('orderItems'));
    //Gets delivery status from local storage
    const delivery = JSON.parse(localStorage.getItem('delivery'));
    //Gets payment option from local storage
    const paymentOption = JSON.parse(localStorage.getItem('paymentOption'));
    //sets state of all variables
    this.setState({ orderItems, delivery, paymentOption });



    // localStorage.setItem('orderItems', JSON.stringify({}));
    // localStorage.setItem('delivery', JSON.stringify(false));
    // localStorage.setItem('paymentOption', "");
    // localStorage.setItem('total', JSON.stringify(0));
    // localStorage.setItem('time', "");

  }

  render() {
    return(
      <div>
        <Nav />
        <div id="main">
          <div id="forms">
            <h3>Thank you for your order!</h3>
            <h6>Fast check out next time?</h6>

            <h4>Sign up</h4>
            <form>
              <label>Password:</label>
              <input type="password" placeholder="Password" required onInput={ this._handleInputPassword } /><br/>

              <label>Password confirmation:</label>
              <input type="password" placeholder="Confirm Password" required onInput={ this._handleInputPasswordConfirmation } /><br/>

              <input type="submit" placeholder="Sign Up" onClick={this._handleSubmit} />
            </form>
          </div>

          <div className="orderList">
            <OrderSummary />
          </div>

        </div>
      </div>
    );

  }


}


export default OrderComplete;
