import React, {Component} from 'react';
import Payment from './Payment';
import {Link} from 'react-router-dom';

class CheckOut extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderItems: {},
      allProducts: [],
      delivery: false,
      paymentOption: "Cash",
    }
    this._handleClick = this._handleClick.bind(this);
    this._handleChange = this._handleChange.bind(this);
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

  _handleClick(event) {
    console.log(event);
    const value = event.target.value
    //get value of button and set state
    if (value === "Pick-up"){
      this.setState({delivery: false});
    } else if (value === "Delivery" ){
      this.setState({delivery: true});
    }
    //sets delivery state in local storage
    let deliveryStatus = JSON.stringify(this.state.delivery);
    localStorage.setItem('delivery', deliveryStatus);
  }

  _handleChange(event) {
    //sets state of payment type
    this.setState({paymentOption: event.target.value})
    //saves payment type to local storage
    let paymentStatus = JSON.stringify(this.state.paymentOption);
    localStorage.setItem('paymentOption', paymentStatus);
  }

  render() {
    let total = 0;
    let deliveryCost;
    //updates total price according to delivery status
    if (this.state.delivery) {
      total += 5;
      deliveryCost = "Delivery fee: $5.00";
    }

    return (
      <div className="checkout">
        <div className="kind-order">
          <h2>Please select:</h2>
          <button type='button' onClick={this._handleClick} value="Pick-up">
          Pick-up
          </button>
          <button type='button' onClick={this._handleClick} value="Delivery">
          Delivery
          </button>
        </div>

        <UserForm />


        <form className="payment-form">
          <h2>Payment option:</h2>
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
        {this.state.paymentOption === "Card" ? <Payment /> : ""}
        <Link to="/ordercomplete"> <button className="pay">Pay</button></Link>

        <div className='orderList'>
          <h2>Order Summary</h2>
          {Object.entries(this.state.orderItems).map( ([id, quantity]) => {
            const item = this.state.allProducts.find( p => p.id.toString() === id);
            total += quantity * item.price;
            return (
              <div key={id}>
                <label>
                  {quantity} X
                </label>
                <label>
                 {item.name}
                </label>
                <label>
                  ${Number(item.price).toFixed(2)}
                </label>
              </div>
          )})}
          <p>{deliveryCost}</p>
          <p>Total ${Number(total).toFixed(2)}</p>
        </div>


      </div>


    );
  }
}


export default CheckOut;
