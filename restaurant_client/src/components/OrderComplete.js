import React, {Component} from 'react';
import UserForm from './UserForm';
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
      <div>
        <div>
          <h2>Thank you for your order!</h2>
          <OrderSummary />
        </div>

        <div>
          <UserForm />
        </div>

      </div>
    );

  }


}


export default OrderComplete;
