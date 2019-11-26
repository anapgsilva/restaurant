import React, {Component} from 'react';
import axios from 'axios';

class SignIn extends Component {
  constructor () {
    super();
    this.state ={
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  _handleInputEmail = event => {
    this.setState( {email: event.target.value})
  }

  _handleInputPassword = event => {
    this.setState( {password: event.target.value})
  }

  _handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:3000/user/token', {
      "auth": {
        "email": this.state.email,
        "password": this.state.password,
      }
    }).then( result => {
      localStorage.setItem("jwt", result.data.jwt)
      console.log("user logged in")
      this.props.history.push('/') //where is user taken
    })
    .catch( err => {
      this.setState({ errorMessage: 'Invalid email or password'})
    }) //error logic
  }


  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form>
          <label>Email: </label>
          <input type="text" placeholder="Email" required onInput={ this._handleInputEmail } />

          <label>Password:</label>
          <input type="text" placeholder="Password" required onInput={ this._handleInputPassword } />

          <input type="submit" placeholder="Log In" onClick={this._handleSubmit} />
        </form>
      </div>
    );
  }

}

export default SignIn;


// <Form className="loginForm">
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//   </Form.Group>
//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>
