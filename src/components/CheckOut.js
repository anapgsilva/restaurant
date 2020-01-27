import React, {Component} from 'react';
import PaymentForm from './PaymentForm';
import {Link} from 'react-router-dom';
import UserForm from './UserForm';
import OrderSummary from './OrderSummary';
import DropdownTime from './DropdownTime';
import {withRouter} from 'react-router-dom';
import babbologo from "../babbologo.png"
import axios from 'axios';

// const SERVER_URL = "http://localhost:3000/products";
// const SERVER_URL_MAKEORDER = "http://localhost:3000/orders/generate_order";
// const SERVER_URL_USERS = "http://localhost:3000/users";
const SERVER_URL = "https://restaurant-order-server.herokuapp.com/products";
const SERVER_URL_MAKEORDER = "https://restaurant-order-server.herokuapp.com/orders/generate_order";
const SERVER_URL_USERS = "https://restaurant-order-server.herokuapp.com/users";


class CheckOut extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderItems: {},
      allProducts: [],
      delivery: '',
      paymentOption: "Cash",
      totalPrice: '',
      time: '',
      name: '',
      phone_number: '',
      email: '',
      address: '',
      userInfo: false
    };

    this.onRadioChange = this.onRadioChange.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleCardDetails = this._handleCardDetails.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this._handleUserInfo = this._handleUserInfo.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {
    //Gets shopping cart from local storage
    const orderItems = JSON.parse(localStorage.getItem('orderItems'));
    //Gets delivery status from local storage
    let delivery = JSON.parse(localStorage.getItem('delivery'));
    if (delivery !== true || delivery !== false) {
      delivery = false;
    }
    //Gets payment option from local storage
    let paymentOption = localStorage.getItem('paymentOption');
    if (paymentOption !== 'Cash' || paymentOption !== 'Card') {
      paymentOption = 'Cash';
    }
    const name = JSON.parse(localStorage.getItem('name'));
    const phone_number = JSON.parse(localStorage.getItem('phone_number'));
    const email = JSON.parse(localStorage.getItem('email'));
    const address = JSON.parse(localStorage.getItem('address'));

    //sets state of all variables
    this.setState({ orderItems, delivery, paymentOption, name, phone_number, email, address });

    this.fetchProducts();
  }

  //get all products
  fetchProducts() {
    axios.get(SERVER_URL).then( (results) => {
      const allProducts = results.data;
      this.setState({allProducts: allProducts});
      this.calculateTotal(this.state.delivery, allProducts, this.state.orderItems);
    })
  }

  onRadioChange(event) {
    const value = event.target.value;
    //get value of button and set state
    const delivery = value === 'Delivery';
    this.setState({delivery});
    //sets delivery state in local storage
    localStorage.setItem('delivery', JSON.stringify(delivery));
    this.calculateTotal(delivery, this.state.allProducts, this.state.orderItems);
  }

  calculateTotal(delivery, allProducts, orderItems) {
    let total = 0;
    if (Object.keys(orderItems).length > 0){
      total = Object.entries(orderItems).reduce(
        (result, [id, quantity]) => {
          const item = allProducts.find( p => p.id.toString() === id);
          return result + (item.price * quantity);
        },
        0);
    }
    const totalPrice = delivery ? total += 5 : total;
    this.setState({totalPrice});
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice) );
  }


  updateTime(timeOrder) {
    //saves time in state
    this.setState({time: timeOrder});
    //save time to local storage
    const time = JSON.stringify(timeOrder);
    localStorage.setItem('time', time);
  }

  _handleUserInfo(userInfo){
    this.setState({user_id: userInfo[0], name: userInfo[1], phone_number: userInfo[2], email: userInfo[3], address: userInfo[4], userInfo: true});

    if (userInfo[0] === ''){
      localStorage.setItem('name', JSON.stringify(userInfo[1]));
      localStorage.setItem('phone_number', JSON.stringify(userInfo[2]));
      localStorage.setItem('email', JSON.stringify(userInfo[3]));
      localStorage.setItem('address', JSON.stringify(userInfo[4]));
    }

  }

  _handleChange(event) {
    //sets state of payment type
    this.setState({paymentOption: event.target.value});
    //saves payment type to local storage
    localStorage.setItem('paymentOption', JSON.stringify(event.target.value));
  }

  _handleCardDetails(token) {
    if (token && this.state.userInfo) {
      this.createOrder();
    } else {
      window.alert("Please fill in contact details.")
    }
  }

  createOrder() {
    if (this.state.userInfo) {

      //send data to back to make order, user, line-items
      const orderItems = this.state.orderItems;
      const kind = this.state.delivery ? "Delivery" : "Pick-up";
      const totalPrice = this.state.totalPrice;
      const user_id = this.state.user_id;

      if (user_id !== '') {
        const newAddress = this.state.address;
        if (newAddress !== null || newAddress !== "" ) {
          //update user details
          axios.put(`${SERVER_URL_USERS}/${user_id}`, {
            name: this.state.name,
            phone_number: this.state.phone_number,
            address: newAddress
          }).then(res => {
            console.log('saved address? ', res.data);
          }).catch(err => console.log('address not saved', err));
        }

        axios.post(SERVER_URL_MAKEORDER, {
          orderItems: orderItems,
          kind: kind,
          total_price: totalPrice,
          user_id: user_id})
        .then( result => {
          localStorage.setItem('user_id', JSON.stringify(user_id));
          this.props.history.push('/ordercomplete');
        })
        .catch( error => {
          window.alert("Order submission failed. Please try again.");
        });
      }
      else {
        localStorage.setItem('orderItems', JSON.stringify(orderItems));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
        this.props.history.push('/ordercomplete');
      }
    }
    else {
      window.alert("Please fill in all details required for your order.")
    }

  }


  render() {

    return (
      <div>

        <Link to="/">
          <img src={babbologo} alt="Home" className="navbar-brand" />
        </Link>

        <div id="main">

          <div id="forms">

            <Link className="back" to="/menu">Back to Menu</Link>

            {this.state.delivery !== "" && this.state.time ? "" :
            (<div><form id="delivery-form">
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
            </div></div>)}

            {this.state.time ?
              <div>
              {!this.state.userInfo ?
                <div><h4>Customer contact details:</h4>
                <UserForm onSubmit={this._handleUserInfo} delivery={this.state.delivery} name={this.state.name} phoneNumber={this.state.phone_number} email={this.state.email} address={this.state.address} /></div>
                : ""}
              </div> : "" }


            {this.state.userInfo ?
            <div>
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

              {this.state.paymentOption === "Card" ?
              <PaymentForm id="stripe" onChange={this._handleCardDetails} orderItems={this.state.orderItems} totalPrice={this.state.totalPrice} />
              :
              <button onClick={this.createOrder}  className="pay">Submit Order
              </button>}
            </form>
            </div>
            : ""}

          </div>


          <div className="orderSummary">
            <OrderSummary deliveryStatus={this.state.delivery} time={this.state.time} />
          </div>

        </div>
      </div>

    );
  }
}


export default withRouter(CheckOut);
