import React, {Component} from 'react';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state ={
      ccName: "",
      ccNumber: "",
      ccCVV: ""
    }
  }

  render() {
    return (
      <div>
        <h4>Paying by card</h4>
        <form>
          <label>Card holder's name: </label>
          <input value={this.state.ccName} placeholder="Name on the card"/>

          <label>Card number: </label>
          <input value={this.state.ccNumber} placeholder="Card number"/>

          <label>Card Validation Value: </label>
          <input value={this.state.ccCVV} placeholder="CVV number (3 digits) "/>
        </form>
      </div>
    );
  }
}


export default Payment;
