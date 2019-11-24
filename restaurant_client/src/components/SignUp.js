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
  _handleInputPhoneNumber = event => {
    this.setState( {phone_number: event.target.value} )
  }
  _handleInputAddress = event => {
    this.setState( {address: event.target.value} )
  }

  _handleSubmit = event => {
    event.preventDefault();
    // console.log('getting ready to be submitted');
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
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={ this._handleSubmit }>
          <input type="text" placeholder="Name" required onInput={ this._handleInputName } />
          <input type="text" placeholder="Email" required onInput={ this._handleInputEmail } />
          <input type="text" placeholder="Password" required onInput={ this._handleInputPassword } />
          <input type="text" placeholder="000-000-000" required onInput={ this._handleInputPhoneNumber } />
          <input type="text" placeholder="Address" onInput={ this._handleInputAddress } />
          <input type="submit" placeholder="SignUp" onClick={this._handleSubmit} />
        </form>
      </div>
    );
  }
}


export default SignUp;
