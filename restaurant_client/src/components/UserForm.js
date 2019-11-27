import React, {Component} from 'react';
import {Form, Button, Col} from 'react-bootstrap';

class UserForm extends Component {

  constructor() {
    super();
    this.state ={
      name: '',
      phone_number:'',
      address:'',
      suburb: '',



    }
  }


  componentDidMount(){

  }


  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Unit or House No/ St No Main St" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Suberb</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Post Code</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
      </Form>
    );

  }

}

export default UserForm;
