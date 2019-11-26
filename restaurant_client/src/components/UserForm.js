import React, {Component} from 'react';
import {Form, Button, Col} from 'react-bootstrap'
import ChekOut from './CheckOut'

class UserForm extends Component {

  constructor() {
    super();
    this.state = {
      delivery: '',
      currentUser: false
    }
  }

  componentDidMount() {
    const currentUser = JSON.parse(localStorage.getItem('jwt'));

    // if (currentUser.length > 0) {
    //
    // }

    // const deliveryStatus = props.deliveryStatus;
    // this.setState({delivery: deliveryStatus})


  }

  render() {
    return (
<<<<<<< HEAD
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
=======
      <div>
        <form>

        </form>
      </div>
>>>>>>> f9e5ed3415a82528da98d09a4396dcb48900da4b

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );

  }

}

export default UserForm;
