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
    this.createUser();
    this.props.history.push('/')

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
          <label>Name:</label>
          <input type="text" placeholder="Name" required onInput={ this._handleInputName } /><br/>

          <label>E-mail:</label>
          <input type="text" placeholder="Email" required onInput={ this._handleInputEmail } /><br/>

          <label>Password:</label>
          <input type="text" placeholder="Password" required onInput={ this._handleInputPassword } /><br/>

          <label>Password confirmation:</label>
          <input type="text" placeholder="Password" required onInput={ this._handleInputPassword } /><br/>

          <label>Phone number:</label>
          <input type="text" placeholder="000-000-000" required onInput={ this._handleInputPhoneNumber } /><br/>

          <label>Delivery address:</label>
          <input type="text" placeholder="Street address" onInput={ this._handleInputAddress } /><br/>

          <input type="submit" placeholder="SignUp" onClick={this._handleSubmit} />
        </form>
      </div>
    );
  }
}


export default SignUp;
