import React, {Component} from 'react';
import SignUp from './SignUp';
import OrderSummary from './OrderSummary';


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
    //Gets all products from local storage
    const allProducts = JSON.parse(localStorage.getItem('allProducts'));
    //Gets delivery status from local storage
    const delivery = JSON.parse(localStorage.getItem('delivery'));
    //Gets payment option from local storage
    const paymentOption = JSON.parse(localStorage.getItem('paymentOption'));
    //sets state of all variables
    this.setState({ orderItems, allProducts, delivery, paymentOption });

  }

  render() {
    return(
      <div className="main">
        <div className="orderComplete">
          <h3>Thank you for your order!</h3>
          <h6>Fast check out next time?</h6>
          <SignUp />
        </div>

        <div>
          <OrderSummary />
        </div>

      </div>
    );

  }


}


export default OrderComplete;
