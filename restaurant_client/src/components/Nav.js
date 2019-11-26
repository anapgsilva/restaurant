import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import {DropdownButton, Form, Navbar} from 'react-bootstrap';
import SignIn from './SignIn';



const Nav = () => {


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

      {localStorage.getItem('jwt') ? "" :
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
      }

      {localStorage.getItem('jwt') ? <Link to="/logout">Logout</Link> : <Link to="/signup">Sign Up</Link>}


    </Navbar>

  );

}

export default Nav;
