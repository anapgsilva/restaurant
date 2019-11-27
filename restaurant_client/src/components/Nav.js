import React from 'react';
import {Link} from 'react-router-dom';
import babbo from "../babbo.jpg"
import babbologo from "../babbologo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import {DropdownButton, Form, Navbar} from 'react-bootstrap';
import SignIn from './SignIn';



const Nav = () => {


    return (
      <Navbar id="bootstrap-override" bg="light" variant="light" className="justify-content-between">

        <Link to="/">
          <img src={babbologo} alt="Home" className="navbar-brand" />
        </Link>

        <div class="nav-bar-links">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-2">
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
            </li>

            {localStorage.getItem('jwt') ? "" :

            <li className="nav-item ml-2">
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
            </li>
            }

            <li className="nav-item ml-2">
              {localStorage.getItem('jwt') ? <Link to="/logout" className="nav-link">Logout</Link> : <Link to="/signup" className="nav-link">Sign Up</Link>}
            </li>
          </ul>
        </div>



  </Navbar>
);




}

export default Nav;
