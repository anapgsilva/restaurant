import React, {Component} from 'react';


class Logout extends Component {

  _logout = () => {
    localStorage.clear();
    this.props.history.push('/menu')
  }

  render () {
    return (
    );
  }
}

export default Logout;
