import React, {Component} from 'react';
import OrderSummary from './OrderSummary';
import Nav from './Nav';
import {Form, Col} from 'react-bootstrap';
import axios from 'axios';


// const SERVER_URL = "https://restaurant-order-server.herokuapp.com/users";
// const SERVER_URL = `http://localhost:3000/users/${this.state.user_id}`;
// const SERVER_URL_TOKEN = "http://localhost:3000/user/token";
const SERVER_URL_TOKEN = "https://restaurant-order-server.herokuapp.com/user/token";



class OrderComplete extends Component {

  constructor() {
    super();
    this.state = {
      orderItems: {},
      allProducts: [],
      delivery: '',
      paymentOption: '',
      totalPrice: '',
      loggedIn: '',
      name: '',
      phone_number: '',
      email: "",
      user_id: "",
      password: "",
      password_confirmation: ''
    }
    this._handleInputName = this._handleInputName.bind(this);
    this._handleInputPhoneNumber = this._handleInputPhoneNumber.bind(this);
    this._handleInputEmail = this._handleInputEmail.bind(this);
    this._handleInputPassword = this._handleInputPassword.bind(this);
    this._handleInputPasswordConfirmation = this._handleInputPasswordConfirmation.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    //Check if user logged in
    const jwt = window.localStorage.getItem('jwt');
    if (jwt) {
      this.setState({loggedIn: true});
    }

    //Gets shopping cart from local storage
    const orderItems = JSON.parse(localStorage.getItem('orderItems'));
    //Gets delivery status from local storage
    const delivery = JSON.parse(localStorage.getItem('delivery'));
    //Gets payment option from local storage
    const paymentOption = JSON.parse(localStorage.getItem('paymentOption'));
    //Gets total price from local storage
    const totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
    //get Name
    const name = JSON.parse(localStorage.getItem('name'));
    //get Phone number
    const phone_number = JSON.parse(localStorage.getItem('phone_number'));
    //get Email
    const email = JSON.parse(localStorage.getItem('email'));
    //get user_id
    const user_id = JSON.parse(localStorage.getItem('user_id'));
    //sets state of all variables
    this.setState({ orderItems, delivery, paymentOption, name, phone_number, email, user_id });

  }


  _handleInputName = event => {
    this.setState( {name: event.target.value} );
  }
  _handleInputPhoneNumber = event => {
    this.setState( {phone_number: event.target.value} );
  }
  _handleInputEmail = event => {
    this.setState( {email: event.target.value} );
  }
  _handleInputPassword = event => {
    this.setState( {password: event.target.value} );
  }
  _handleInputPasswordConfirmation = event => {
    this.setState( {password_confirmation: event.target.value} );
  }


  _handleSubmit() {

    const order_id = JSON.parse(localStorage.getItem('order_id'));
    this.props.history.push('/') //where is user taken
    localStorage.removeItem("orderItems");
      localStorage.removeItem("delivery");
      localStorage.removeItem("paymentOption");


    //make user
    // axios.put(`http://localhost:3000/users/${this.state.user_id}`, { user:
    //   {name: this.state.name, phone_number: this.state.phone_number, email: this.state.email, address: this.state.address, password: this.state.password, password_confirmation: this.state.password_confirmation, orders: {id: order_id}}
    // }).then( result => {
    //   console.log( "user updated", result.data.user_id );
    //
    //   this.logIn();
    //   localStorage.removeItem("orderItems");
    //   localStorage.removeItem("delivery");
    //   localStorage.removeItem("paymentOption");
    //
    // }).catch( error => {
    //   window.alert( "There is already a user with this email.");
    // })
  }


  // logIn = () => {
  //   axios.post(SERVER_URL_TOKEN, {
  //     "auth": {
  //       "email": this.state.email,
  //       "password": this.state.password,
  //     }
  //   }).then( result => {
  //     console.log(result);
  //     localStorage.setItem("jwt", result.data.jwt)
  //     console.log("user logged in");
  //     this.props.history.push('/') //where is user taken
  //   })
  //   .catch( err => {
  //     this.setState({ errorMessage: 'Invalid email or password'})
  //   }) //error logic
  //
  // }





  render() {
    return(
      <div>
        <Nav />
        <div id="main">
          <div id="forms">
            <h3>Thank you for your order!</h3>

            {this.state.loggedIn ? "" :
            <div>
            <h6>Fast check out next time?</h6>
            <h4>Sign up</h4>

            <Form id="forms" onSubmit={ this._handleSubmit }>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" defaultValue={this.state.name} required onInput={ this._handleInputName } />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone number:</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" defaultValue={this.state.phone_number} required onInput={ this._handleInputPhoneNumber } />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" defaultValue={this.state.email} required onInput={ this._handleInputEmail } />
              </Form.Group>
            </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" required onInput={ this._handleInputPassword } />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPasswordConfirmation">
                  <Form.Label>Password confirmation:</Form.Label>
                  <Form.Control type="password" placeholder="Confirm password" required onInput={ this._handleInputPasswordConfirmation } />
                </Form.Group>
              </Form.Row>

              <input className="pay" value="Sign Up" type="submit" />
            </Form>
            </div>
            }

          </div>

          <div className="orderSummary">
            <OrderSummary />
          </div>

        </div>
      </div>
    );

  }


}


export default OrderComplete;
