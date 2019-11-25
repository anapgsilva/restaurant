import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormGroup, Label, Input,Row, Col}
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
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5 ">
        <Link to="/">
          <img src={logo} alt="Home"
          className="navbar-brand"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
          <Link to="/menu" className="nav-link">Menu 
          </Link>
          </li>
        </ul>
        
        <div className="d-flex justify-content-end">
        <Form >
       
          <Row>
          <div className="p-2">
            <Col>
            
          <Form.Control type="text" placeholder="email"/>
          
          </Col>
          </div>
          <div className="p-2">
          <Col>
          <Form.Control type="text" placeholder="password"/>
          <Link to="/signin"><input type="submit" value="Log In" /></Link>
          </Col>
          </div>
          <Link to="/signup">Sign Up</Link>
        </Row>
        </Form>
        </div>

      </nav>
    );
  }

}

export default Nav;
