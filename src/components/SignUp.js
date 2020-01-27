import React, {Component} from 'react';
import axios from 'axios';
import Nav from './Nav';
import {Form, Col} from 'react-bootstrap';
import babbo_signup_img from "../babbo_signup_img.jpg"

// const SERVER_URL = "https://restaurant-order-server.herokuapp.com/users";
// const SERVER_URL_TOKEN = "https://restaurant-order-server.herokuapp.com/user/token";
const SERVER_URL = "http://localhost:3000/users";
const SERVER_URL_TOKEN = "http://localhost:3000/user/token";


class SignUp extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone_number: '',
      address: '',
      errorMessage: ""
    }
  }


  _handleInputName = event => {
    this.setState( {name: event.target.value} );
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
  _handleInputPhoneNumber = event => {
    this.setState( {phone_number: event.target.value} );
  }
  _handleInputAddress = event => {
    this.setState( {address: event.target.value} );
  }

  _handleSubmit = event => {
    event.preventDefault();
    this.createUser();
    this.props.history.push('/');
  }

  createUser = event => {
    axios.post(SERVER_URL, { user:
      {name: this.state.name, email: this.state.email, password: this.state.password, password_confirmation: this.state.password_confirmation, phone_number: this.state.phone_number, address: this.state.address}
    }).then( result => {

      this.logIn();

    }).catch( error => {
      console.log( error );
    });
  }

    logIn = () => {
      axios.post(SERVER_URL_TOKEN, {
        "auth": {
          "email": this.state.email,
          "password": this.state.password,
        }
      }).then( result => {
        console.log('result.data when we login', result.data);
        localStorage.setItem("jwt", result.data.jwt)
        this.props.history.push('/') //where is user taken
      })
      .catch( err => {
        this.setState({ errorMessage: 'Invalid email or password'})
      }) //error logic

    }

  render() {
    return (
      <div id="page">
        <Nav />

        <div className="menubanner">
          <img src={babbo_signup_img} alt="Menu" className="d-block w-100" />
        </div>

        <div id='main' className="signup">
          <div>
          <h2>Sign Up</h2>
          <br />
          <Form id="forms" onSubmit={ this._handleSubmit }>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" required onInput={ this._handleInputName } />
              </Form.Group>
            </Form.Row>

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

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone number:</Form.Label>
                <Form.Control type="text" placeholder="000-000-000" onInput={ this._handleInputPhoneNumber } />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Delivery address:</Form.Label>
                <Form.Control type="text" placeholder="Street address" onInput={ this._handleInputAddress} />
              </Form.Group>
            </Form.Row>

            <input type="submit" placeholder="Sign Up" />
          </Form>
        </div>
      </div>
    </div>

    );
  }
}


export default SignUp;
