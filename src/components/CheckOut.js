import React, {Component} from 'react';
import PaymentForm from './PaymentForm';
import {Link} from 'react-router-dom';
import UserForm from './UserForm';
import OrderSummary from './OrderSummary';
// import {Button} from 'semantic-ui-react';
import DropdownTime from './DropdownTime';
import {withRouter} from 'react-router-dom';



class CheckOut extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderItems: {},
      allProducts: [],
      delivery: false,
      paymentOption: "Cash",
      totalPrice: 0,
      time: ''
    };

    this.onRadioChange = this.onRadioChange.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleCardDetails = this._handleCardDetails.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  onRadioChange(event) {
    console.log(event.target.value);
    const value = event.target.value;
    //get value of button and set state
    if (value === "Pick-up"){
      this.setState({delivery: false});
    } else if (value === "Delivery" ){
      this.setState({delivery: true});
    }
    console.log(this.state.delivery);
    // //sets delivery state in local storage
    let deliveryStatus = JSON.stringify(this.state.delivery);
    localStorage.setItem('delivery', deliveryStatus);
  }

  updateTime(timeOrder) {
    console.log(timeOrder);
    // //save stime in state
    this.setState({time: timeOrder});
    //save time to local storage
    const time = JSON.stringify(timeOrder);
    localStorage.setItem('time', time);
  }

  _handleChange(event) {
    //sets state of payment type
    this.setState({paymentOption: event.target.value})
    //saves payment type to local storage
    let paymentStatus = JSON.stringify(event.target.value);
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
    //Check that all input is present - delivery type and timeout, user details
    //ootherwise
    //make order and each line item
    console.log("will make request");


    // redirect to /ordercomplete if all verified
    this.props.history.push('/ordercomplete');
  }


  render() {

    return (
      <div id="main">
        <div id="forms">

          <Link className="back" to="/menu">Back to Menu</Link>

          <form id="delivery-form">
            <div className="custom-control custom-radio custom-control-inline">
              <label>
                <input type="radio" value="Pick-up" checked={this.state.delivery === false} onChange={this.onRadioChange}/>
                Pick-up
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <label>
                <input type="radio" value="Delivery" checked={this.state.delivery === true} onChange={this.onRadioChange}/>
                Delivery
              </label>
            </div>
          </form>

          <div id="time-form">
            <h4>Time for order:</h4>
            <DropdownTime onChange={this.updateTime} /><br/>
          </div>

          <h4>Customer contact details:</h4>
          <UserForm deliveryStatus={this.state.delivery} />


          <h4>Payment option:</h4><br/>
          <form id="payment-form">
              <div id="option" className="custom-control custom-radio custom-control-inline">
                <label>
                  <input type="radio" value="Cash" checked={this.state.paymentOption === "Cash"} onChange={this._handleChange}/>
                  Cash
                </label>
              </div>
              <div id="option" className="custom-control custom-radio custom-control-inline">
                <label>
                  <input type="radio" value="Card" checked={this.state.paymentOption === "Card"} onChange={this._handleChange}/>
                  Card
                </label>
              </div>

            {this.state.paymentOption === "Card" ? <PaymentForm id="stripe" onClick={this._handleCardDetails} orderItems={this.state.orderItems} totalPrice={this.state.totalPrice} /> : <button onClick={this.createOrder} className="pay">Submit Order</button>}
          </form>

        </div>


        <div className="orderSummary">
          <OrderSummary deliveryStatus={this.state.delivery} time={this.state.time} />
        </div>

      </div>

    );
  }
}


export default withRouter(CheckOut);
