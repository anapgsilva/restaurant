import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import {Dropdown,DropdownButton,Button, Form, FormGroup, Label, Input,Row, Col, Navbar}
from 'react-bootstrap';

class Nav extends Component {

  constructor() {
    super();
    this.state = {
      current_user: {}
    }
  }
  fetchUser() {
  //need to fetch current user
  //if current user present then dont show login and signup below
  
  }

  render() {
    return (
      <Navbar bg="light" variant="light" className="justify-content-between">
        <div></div>
        <Link to="/">
          <img src={logo} alt="Home" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
          </li>
        </ul>

        <Form inline>
          <DropdownButton
            variant="outline-primary"
            className="dropdown"
            id="dropdown-item-button"
            title="Log In"
          >
            <Form className="loginForm">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </DropdownButton>
        </Form>
      </Navbar>
    );
  }

}

export default Nav;
