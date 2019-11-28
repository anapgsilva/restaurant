import React, {Component} from 'react';
import OrderSummary from './OrderSummary';
import Nav from './Nav';
import {Form, Col} from 'react-bootstrap';
import axios from 'axios';


// const SERVER_URL = "https://restaurant-order-server.herokuapp.com/users";
const SERVER_URL = "http://localhost:3000/users";


class OrderComplete extends Component {

  constructor() {
    super();
    this.state = {
      orderItems: {},
      allProducts: [],
      delivery: '',
      paymentOption: '',
      loggedIn: '',
      email: "",
      user_id: ""
    }
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
    //get Email
    const email = JSON.parse(localStorage.getItem('email'));
    //get user_id
    const user_id = JSON.parse(localStorage.getItem('user_id'));
    //sets state of all variables
    this.setState({ orderItems, delivery, paymentOption, email, user_id });

  }


  _handleSubmit() {
    axios.post(SERVER_URL, { user:
      {id: this.state.user_id, email: this.state.email, password: this.state.password, password_confirmation: this.state.password_confirmation}
    }).then( result => {
      console.log( "user created", result.data );
    }).catch( error => {
      console.log( "user not created", error );
    })
  }

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
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" required onInput={ this._handleInputEmail } />
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
