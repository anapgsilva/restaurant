import React, {Component} from 'react';
import axios from 'axios';
import Nav from './Nav';

const SERVER_URL = "https://restaurant-order-server.herokuapp.com/users";

class SignUp extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone_number: '',
      address: ''
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
      console.log( result );
    }).catch( error => {
      console.log( error );
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <h2>Sign Up</h2>
        <form onSubmit={ this._handleSubmit }>
          <label>Name:</label>
          <input type="text" placeholder="Name" required onInput={ this._handleInputName } /><br/>

          <label>Email:</label>
          <input type="text" placeholder="Email" required onInput={ this._handleInputEmail } /><br/>

          <label>Password:</label>
          <input type="password" placeholder="Password" required onInput={ this._handleInputPassword } /><br/>

          <label>Password confirmation:</label>
          <input type="password" placeholder="Confirm Password" required onInput={ this._handleInputPasswordConfirmation } /><br/>

          <label>Phone number:</label>
          <input type="text" placeholder="000-000-000" required onInput={ this._handleInputPhoneNumber } /><br/>

          <label>Delivery address:</label>
          <input type="text" placeholder="Street address" onInput={ this._handleInputAddress } /><br/>

          <input type="submit" placeholder="Sign Up" onClick={this._handleSubmit} />
        </form>
      </div>
    );
  }
}


export default SignUp;
