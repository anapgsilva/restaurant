import React, {Component} from 'react';
import OrderSummary from './OrderSummary';
import Nav from './Nav';
import {Form, Col} from 'react-bootstrap';
import axios from 'axios';


// const SERVER_URL_TOKEN = "http://localhost:3000/user/token";
// const SERVER_URL_USERS = "http://localhost:3000/users";
// const SERVER_URL_CurrentUser = "http://localhost:3000/users/current";
// const SERVER_URL_MAKEORDER = "http://localhost:3000/orders/generate_order";


const SERVER_URL_TOKEN = "https://restaurant-order-server.herokuapp.com/user/token";
const SERVER_URL_USERS = "https://restaurant-order-server.herokuapp.com/users";
const SERVER_URL_CurrentUser = "https://restaurant-order-server.herokuapp.com/users/current";
const SERVER_URL_MAKEORDER = "https://restaurant-order-server.herokuapp.com/orders/generate_order";


class OrderComplete extends Component {

  constructor(props) {
    super(props);
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
      address: "",
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
    this.logIn = this.logIn.bind(this);
  }

  componentDidMount() {
    //Check if user logged in
    const jwt = window.localStorage.getItem('jwt');

    if (jwt) {
      this.setState({loggedIn: true});
    }
    else {
      const name = JSON.parse(localStorage.getItem('name'));
      const phone_number = JSON.parse(localStorage.getItem('phone_number'));
      const email = JSON.parse(localStorage.getItem('email'));
      const address = JSON.parse(localStorage.getItem('address'));
      this.setState({ name, phone_number, email, address});
    }

    //Gets shopping cart from local storage
    const orderItems = JSON.parse(localStorage.getItem('orderItems'));
    //Gets delivery status from local storage
    const delivery = JSON.parse(localStorage.getItem('delivery'));
    //Gets payment option from local storage
    const paymentOption = localStorage.getItem('paymentOption');
    //Gets total price from local storage
    const totalPrice = JSON.parse(localStorage.getItem('totalPrice'));

    //sets state of all variables
    this.setState({ orderItems, delivery, paymentOption, totalPrice});

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

    //make user
    axios.post(SERVER_URL_USERS, {user: {
      name: this.state.name, phone_number: this.state.phone_number, email: this.state.email, address: this.state.address, password: this.state.password, password_confirmation: this.state.password_confirmation
      }})
    .then( result => {
      console.log('user created');
      this.logIn();

    }).catch( error => {
      window.alert( "There is already a user with this email.");
    })
  }


  logIn = () => {
    axios.post(SERVER_URL_TOKEN, {
      "auth": {
        "email": this.state.email,
        "password": this.state.password,
      }
    }).then( result => {
      const jwt = result.data.jwt;
      console.log('jwt', jwt);
      localStorage.setItem("jwt", jwt);

      //axios request to get the user_id
      axios.get(SERVER_URL_CurrentUser , {
        headers:{
          Authorization: "Bearer " + jwt
        }}).then( result => {

          const user_id = result.data.id;
          const kind = this.state.delivery ? "Delivery" : "Pick-up";

          //axios request to save order
          axios.post(SERVER_URL_MAKEORDER, {
            orderItems: this.state.orderItems,
            kind: kind,
            total_price: this.state.totalPrice,
            user_id: user_id
          }).then( res => {
            localStorage.removeItem("orderItems");
            localStorage.removeItem("delivery");
            localStorage.removeItem("paymentOption");
            this.props.history.push('/'); //where is user taken
          })
          .catch(err => console.log(err));
      });
    })
    .catch( err => {
      this.setState({ errorMessage: 'Invalid email or password'})
      console.log(err);
    }) //error logic
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
