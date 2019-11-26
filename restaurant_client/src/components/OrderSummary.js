import React, {Component} from 'react';
import axios from 'axios';

const SERVER_URL = "http://localhost:3000/products.json"


class OrderSummary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderItems: {},
      allProducts: [],
      delivery: '',
      paymentOption: '',
      time: '',
      total: 0
    }
  }

  //get all products (slowest action) and then set variables
  fetchProducts(props) {
    axios.get(SERVER_URL).then( (results) => {
      const allProducts = results.data;

      //Gets shopping cart from local storage
      const orderItems = JSON.parse(localStorage.getItem('orderItems'));
      //Gets delivery status from local storage
      const delivery = this.props.deliveryStatus? this.props.deliveryStatus : JSON.parse(localStorage.getItem('delivery'));
      //Gets payment option from local storage
      const paymentOption = JSON.parse(localStorage.getItem('paymentOption'));
      //get time for order
      const time = this.props.time? this.props.time : JSON.parse(localStorage.getItem('time'));

      const total = this.calculateTotal(allProducts, orderItems, delivery);

      this.setState({allProducts, orderItems, delivery, paymentOption, time, total});
    })

  }

  calculateTotal(allProducts, orderItems) {
    let totalPrice = 0;
    if (Object.keys(orderItems).length > 0){
      Object.entries(orderItems).map( ([id, quantity]) => {
        allProducts.find( p => {
         if (p.id.toString() === id) {
           totalPrice += p.price * quantity;
         };
       })
      });
    }
    this.setState({total: totalPrice});
    return totalPrice;
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render(props) {
    const deliveryCost = "Delivery fee: $5.00";
    //updates total price according to delivery status
    const total = this.props.deliveryStatus ? (this.state.total + 5) : this.state.total;

    return(this.state.allProducts.length > 0 &&
      (<div className='orderList'>
        <h3>Order Summary</h3>

        <h6>For {this.props.deliveryStatus ? "delivery" : "pick-up"} at {this.props.time} pm.</h6>

        {Object.entries(this.state.orderItems).map( ([id, quantity]) => {
          const item = this.state.allProducts.find( p => p.id.toString() === id);
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
        {this.props.deliveryStatus ?
        (<p className="totalPrice">{deliveryCost}</p>)
        : ""}
        <p className="totalPrice">Total ${Number(total).toFixed(2)}</p>

      </div>)
    );
  }

}


export default OrderSummary;
