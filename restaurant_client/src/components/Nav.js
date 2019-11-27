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

        <div class="nav-bar-links">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-2">
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
            </li>

            {localStorage.getItem('jwt') ? "" :
            <li className="nav-item ml-2">
              <div id="bootstrap-override">
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
              </div>
            </li>
            }

            <li className="nav-item ml-2">
              {localStorage.getItem('jwt') ? <Link to="/logout">Logout</Link> : <Link to="/signup" className="nav-link">Sign Up</Link>}
            </li>
          </ul>
        </div>



  </Navbar>
);




}

export default Nav;
