import React, {Component} from 'react';
import {Form, Col} from 'react-bootstrap';
// import jwtDecode from 'jwt-decode';
import axios from 'axios';
const SERVER_URL = "http://localhost:3000/users/current";

class UserForm extends Component {

  constructor(props) {
    super(props);
    this.state ={
      name: '',
      phone_number:'',
      email:'',
      address:''
    }
    this._handleInputs = this._handleInputs.bind(this);
    this._handleInputName = this._handleInputEmail.bind(this);
    this._handleInputPhoneNumber = this._handleInputPhoneNumber.bind(this);
    this._handleInputAddress = this._handleInputAddress.bind(this);
    this._handleInputs = this._handleInputs.bind(this);
  }


  componentDidMount(){
    const jwt = window.localStorage.getItem('jwt');

    axios.get(SERVER_URL, {
      headers:{
        Authorization: "Bearer " + jwt
      }}).then( res => {
      console.log(res);
      // set in state and display
      this.setState({name: res.data.name});
      this.setState({phone_number: res.data.phone_number});
      this.setState({email: res.data.email});
      this.setState({address: res.data.address});

      console.log(res.data.name);
    })

  }


  _handleInputName = event => {
    this.setState( {name: event.target.value})
  }

  _handleInputPhoneNumber = event => {
    this.setState( {phone_number: event.target.value})
  }
  _handleInputEmail = event => {
    this.setState( {email: event.target.value})
  }

  _handleInputAddress = event => {
    this.setState( {address: event.target.value})
  }

  //handle the variables
  _handleInputs(props) {
    const userInfo = [this.state.name, this.state.phone_number, this.state.email, this.state.address];
    console.log(userInfo);

    return props.onChange(userInfo);

  }

   // post request to orders after user after pay

  render() {
    return (
      <Form onChange={this._handleInputs}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name" value={this.state.name} onChange={this._handleInputName} required/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" value={this.state.phone_number} onChange={this._handleInputPhoneNumber} required/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this._handleInputEmail} required />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Unit or House No/ St No Main St" value={this.state.address} onChange={this._handleInputAddress} required/>
        </Form.Group>

      </Form>
    );


  }

}

export default UserForm;
