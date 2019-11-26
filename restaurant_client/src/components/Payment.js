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
    this.submitCardDetails = this.submitCardDetails.bind(this);

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

  submitCardDetails() {
    console.log("submitCardDetails");
    // return this.state.ccName, this.state.ccNumber, this.state.ccCVV;
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
          <input value={this.state.ccCVV} onChange={this._handleCVVChange} placeholder="3 digits at the back of the card" required/><br/>

          <button onClick={this.submitCardDetails} className="pay">Pay</button>
        </form>
      </div>
    );
  }
}


export default Payment;
