import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ccName: "",
      ccNumber: "",
      ccCVV: ""
    }
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleNumberChange = this._handleNumberChange.bind(this);
    this._handleCVVChange = this._handleCVVChange.bind(this);

  }

  _handleNameChange(event) {
    this.setState({ccName: event.target.value});
    console.log(this.state.ccName);
  }

  _handleNumberChange(event) {
    this.setState({ccNumber: event.target.value})
    console.log(this.state.ccNumber);

  }

  _handleCVVChange(event) {
    this.setState({ccCVV: event.target.value})
    console.log(this.state.ccCVV);

  }


  render() {
    return (
      <div className="ccForm">
        <h4>Paying by card</h4>
        <form>
          <label>Card holder's name: </label>
          <input value={this.state.ccName} onChange={this._handleNameChange} placeholder="Name on the card" required /><br/>

          <label>Card number: </label>
          <input value={this.state.ccNumber} onChange={this._handleNumberChange} placeholder="Card number" required/><br/>

          <label>Card Validation Value: </label>
          <input value={this.state.ccCVV} onChange={this._handleCVVChange} placeholder="CVV number (3 digits)" required/><br/>

          <button className="pay">Pay</button>
        </form>
      </div>
    );
  }
}


export default Payment;
