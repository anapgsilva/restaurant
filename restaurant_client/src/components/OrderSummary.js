import React, {Component} from 'react';


class OrderSummary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderItems: {},
      allProducts: [],
      delivery: '',
      paymentOption: ''
    }
  }

  componentDidMount() {

    //Gets shopping cart from local storage
    const orderItems = JSON.parse(localStorage.getItem('orderItems'));
    //Gets all products from local storage
    const allProducts = JSON.parse(localStorage.getItem('allProducts'));
    //Gets delivery status from local storage
    const delivery = JSON.parse(localStorage.getItem('delivery'));
    //Gets payment option from local storage
    const paymentOption = JSON.parse(localStorage.getItem('paymentOption'));
    //sets state of all variables
    this.setState({ orderItems, allProducts, delivery, paymentOption });

  }

  render() {
    const props = this.props;

    let total = 0;
    let deliveryCost;
    //updates total price according to delivery status
    if (props.deliveryStatus) {
      total += 5;
      deliveryCost = "Delivery fee: $5.00";
    }

    return(
      <div className='orderList'>
        <h3>Order Summary</h3>

        {Object.entries(this.state.orderItems).map( ([id, quantity]) => {
          const item = this.state.allProducts.find( p => p.id.toString() === id);
          total += quantity * item.price;
          return (
            <div className="item" key={id}>
              <label className="itemName">
               {item.name}
              </label>
              <label className="quantity">
                x {quantity}
              </label>

              <label className="itemPrice">
                ${Number(item.price * quantity).toFixed(2)}
              </label>
            </div>
        )})}
        {props.deliveryStatus ?
        (<p className="totalPrice">{deliveryCost}</p>)
        : ""}
        <p className="totalPrice">Total ${Number(total).toFixed(2)}</p>

      </div>
    );
  }

}


export default OrderSummary;
