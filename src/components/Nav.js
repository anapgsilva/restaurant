import React from 'react';
import {Link} from 'react-router-dom';
import babbologo from "../babbologo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import {DropdownButton, Form, Navbar} from 'react-bootstrap';
import SignIn from './SignIn';
import {Redirect} from 'react-router-dom';




const Nav = () => {

  const logoutUser = () => {
    localStorage.clear();
    return <Redirect to='/menu' />;
  }

  return (
    <Navbar id="bootstrap-override" bg="light" variant="light" className="justify-content-between">

      <Link to="/">
        <img src={babbologo} alt="Home" className="navbar-brand" />
      </Link>

      <div className="nav-bar-links">
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

        <div id="bootstrap-override">
          <li className="nav-item ml-2">
            {localStorage.getItem('jwt') ? <Link onClick={logoutUser} className="nav-link">Logout</Link> : <Link to="/signup" className="nav-link">Sign Up</Link>}
          </li>
        </div>
      </ul>
    </div>

    </Navbar>
  );

}

export default Nav;
