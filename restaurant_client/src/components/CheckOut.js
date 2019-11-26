import React, {Component} from 'react';
import PaymentForm from './PaymentForm';
// import {Link} from 'react-router-dom';
import UserForm from './UserForm';
import OrderSummary from './OrderSummary';
import {Button} from 'semantic-ui-react';
import DropdownTime from './DropdownTime';


class CheckOut extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderItems: {},
      allProducts: [],
      delivery: false,
      paymentOption: "Cash",
      ccName: '',
      ccNumber: '',
      ccCVV: '',
      totalPrice: 0,
      time: ''
    }
    this._handleClick = this._handleClick.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleCardDetails = this._handleCardDetails.bind(this);
    this.updateTime = this.updateTime.bind(this);
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
  }

  _handleClick(event, state) {
    const value = state.value
    //get value of button and set state
    if (value === "Pick-up"){
      this.setState({delivery: false});
    } else if (value === "Delivery" ){
      this.setState({delivery: true});
    }
    // //sets delivery state in local storage
    let deliveryStatus = JSON.stringify(this.state.delivery);
    localStorage.setItem('delivery', deliveryStatus);
  }

  updateTime(timeOrder) {
    this.setState({time: timeOrder});
    localStorage.setItem('time', timeOrder);
  }

  _handleChange(event) {
    //sets state of payment type
    this.setState({paymentOption: event.target.value})
    //saves payment type to local storage
    let paymentStatus = JSON.stringify(this.state.paymentOption);
    localStorage.setItem('paymentOption', paymentStatus);
  }

  _handleCardDetails(event) {
    event.preventDefault();
    console.log("handling card details");
    // this.setState({ccName: name});
    // this.setState({ccNumber: number});
    // this.setState({ccCVV: cvv});
    console.log(event.target.value);
    this.createOrder();

  }

  createOrder() {
    //make order and each line item
    console.log("will make request");
    // redirect to /ordercomplete if all verified

  }


  render() {

    return (
      <div className="main">

        <div className="leftside">

          <div className="kind-order">
            <h3>Please select:</h3>

            <Button onClick={this._handleClick} value='Pick-up'>Pick-Up</Button>
            <Button onClick={this._handleClick} value='Delivery'>Delivery</Button>

          </div>

          <DropdownTime onChange={this.updateTime} />

          <UserForm deliveryStatus={this.state.delivery} />

          <form className="payment-form">
            <h3>Payment option:</h3>
            <div className="cash-option">
              <label>
                <input type="radio" value="Cash" checked={this.state.paymentOption === "Cash"} onChange={this._handleChange}/>
                Cash
              </label>
            </div>
            <div className="card-option">
              <label>
                <input type="radio" value="Card" checked={this.state.paymentOption === "Card"} onChange={this._handleChange}/>
                Card
              </label>
            </div>
          </form>

          {this.state.paymentOption === "Card" ? <PaymentForm onClick={this._handleCardDetails} orderItems={this.state.orderItems} totalPrice={30} /> : <button onClick={this.createOrder} className="pay">Pay</button>}

        </div>


        <div>
          <OrderSummary deliveryStatus={this.state.delivery} />
        </div>

      </div>


    );
  }
}


export default CheckOut;
