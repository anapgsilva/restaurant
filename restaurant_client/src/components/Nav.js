import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>

        <form>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="password"/>
          <Link to="/signin"><input type="submit" value="Log In" /></Link>
        </form>
        <Link to="/signup">Sign Up</Link>

      </nav>
    );
  }

}

export default Nav;
