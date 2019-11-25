import React, {Component} from 'react';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state ={
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
      <div>
        <h4>Paying by card</h4>
        <form>
          <label>Card holder's name: </label>
          <input onChange={this._handleNameChange} value={this.state.ccName} placeholder="Name on the card" />

          <label>Card number: </label>
          <input value={this.state.ccNumber} onChange={this._handleNumberChange} placeholder="Card number"/>

          <label>Card Validation Value: </label>
          <input value={this.state.ccCVV} onChange={this._handleCVVChange} placeholder="CVV number (3 digits) "/>
        </form>
      </div>
    );
  }
}


export default Payment;
