import React, {Component} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
// import jwtDecode from 'jwt-decode';
import axios from 'axios';
const SERVER_URL = "http://localhost:3000/users/current";

class UserForm extends Component {

  constructor(props) {
    super(props);
    this.state ={
      user_id: '',
      name: '',
      phone_number:'',
      email:'',
      address:''
    }
    this._handleInputs = this._handleInputs.bind(this);
    this._handleInputName = this._handleInputName.bind(this);
    this._handleInputPhoneNumber = this._handleInputPhoneNumber.bind(this);
    this._handleInputEmail = this._handleInputEmail.bind(this);
    this._handleInputAddress = this._handleInputAddress.bind(this);
  }


  componentDidMount(){
    const jwt = window.localStorage.getItem('jwt');

    try {
      axios.get(SERVER_URL, {
        headers:{
          Authorization: "Bearer " + jwt
        }}).then( res => {
        // set in state and display
        this.setState({user_id: res.data.id})
        this.setState({name: res.data.name});
        this.setState({phone_number: res.data.phone_number});
        this.setState({email: res.data.email});
        this.setState({address: res.data.address});
      })
    } catch(error) {
      this.setState({name: "", phone_number: "", email: "", address: ""});
    };


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
  _handleInputs(event) {
    const userInfo = [this.state.user_id, this.state.name, this.state.phone_number, this.state.email, this.state.address];
    return this.props.onSubmit(userInfo);
  }

   // post request to orders after user after pay

  render() {
    return (
      <Form onSubmit={this._handleInputs}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" defaultValue={this.state.name} onChange={this._handleInputName} required />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" defaultValue={this.state.phone_number} onChange={this._handleInputPhoneNumber} required/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" defaultValue={this.state.email} onChange={this._handleInputEmail} required />
          </Form.Group>
        </Form.Row>

        {this.props.delivery ?
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Unit/House No, Street address, Suburb" defaultValue={this.state.address} onChange={this._handleInputAddress} required/>
        </Form.Group>
        : ""}

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    );


  }

}

export default UserForm;
