import React, {Component} from 'react';
import {Form, Button, Col} from 'react-bootstrap';
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
  }


  componentDidMount(){
    const jwt = window.localStorage.getItem('jwt');
    
    axios.get(SERVER_URL, {
      headers:{
        Authorization: "Bearer " + jwt
      }

    }).then( res => {
      console.log(res);
      // set in state and display
      this.setState({name: res.data.name});
      this.setState({phone_number: res.data.phone_number});
      this.setState({email: res.data.email});
      this.setState({address: res.data.address});
      
      console.log(res.data.name);
      
    }) 
    
    
  }
   // post request to orders after user after pay

  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Name" value={this.state.name}/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" value={this.state.phone_number}/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={this.state.email} />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Unit or House No/ St No Main St" value={this.state.address}/>
        </Form.Group>
        
      </Form>
    );
    

  }

}

export default UserForm;
