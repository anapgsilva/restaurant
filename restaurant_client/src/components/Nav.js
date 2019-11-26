import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import {Dropdown,DropdownButton,Button, Form, FormGroup, Label, Input,Row, Col, Navbar} from 'react-bootstrap';
import SignIn from './SignIn';



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
    let userSession;
    if (localStorage.getItem('jwt')) {
      userSession = JSON.parse(localStorage.getItem('jwt'));
    } else {
      userSession = "";
    }

    return (
      <Navbar bg="light" variant="light" className="justify-content-between">
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
          <SignIn />
          </DropdownButton>
        </Form>


        {userSession.length > 0 ? <Link to="/logout">Logout</Link> : <Link to="/signup">Sign Up</Link>}


      </Navbar>



    );
  }

}

export default Nav;
