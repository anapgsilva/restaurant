import React, {Component} from 'react';


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
      <div>
        <form>

        </form>
      </div>

    );

  }

}

export default UserForm;
