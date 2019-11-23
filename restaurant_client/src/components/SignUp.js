import React, {Component} from 'react';
import axios from 'axios';


class SignUp extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      phone_number: '',
      address: ''
    }
  }


  _handleInputName = event => {
    this.setState( {name: event.target.value} )
  }
  _handleInputEmail = event => {
    this.setState( {email: event.target.value} )
  }
  _handleInputPassword = event => {
    this.setState( {password: event.target.value} )
  }
  _handleInputPassword = event => {
    this.setState( {phone_number: event.target.value} )
  }
  _handleInputPassword = event => {
    this.setState( {address: event.target.value} )
  }

  _handleSubmit = event => {
    event.preventDefault();
    console.log('getting ready to be submitted');
    this.createUser();
  }

  createUser = event => {
    axios.post('http://localhost:3000/users', { user:
      {name: this.state.name, email: this.state.email, password: this.state.password, phone_number: this.state.phone_number, address: this.state.address}
    }).then( result => {
      console.log( result );
    }).catch( error => {
      console.log( error );
    })
  }

  render() {
    return (
      // <h1>Sign Up page coming soon</h1>
      <form onSubmit={ this._handleSubmit }>
        <input type="text" placeholder="Name" onInput={ this._handleInputName } />
        <input type="text" placeholder="Email" onInput={ this._handleInputEmail } />
        <input type="text" placeholder="Password" onInput={ this._handleInputPassword } />
        <input type="integer" placeholder="000-000-000" onInput={ this._handleInputPhone_number } />
        <input type="text" placeholder="Address" onInput={ this._handleInputAddress } />
        <input type="submit" placeholder="SignUp"  />
      </form>
    );
  }
}


export default SignUp;
