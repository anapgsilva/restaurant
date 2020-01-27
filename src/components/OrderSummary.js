import React, {Component} from 'react';
import axios from 'axios';


// const SERVER_URL = "https://restaurant-order-server.herokuapp.com/products.json"
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

  componentDidMount() {
    this.fetchProducts();
  }

  //get all products (slowest action) and then set variables
  fetchProducts(props) {
    axios.get(SERVER_URL).then( (results) => {
      const allProducts = results.data;

      //Gets shopping cart from local storage
      const orderItems = JSON.parse(localStorage.getItem('orderItems'));
      //Gets delivery status from local storage
      const delivery = this.props.deliveryStatus? this.props.deliveryStatus : localStorage.getItem('delivery');
      //Gets payment option from local storage
      const paymentOption = localStorage.getItem('paymentOption');
      //get time for order
      const time = this.props.time? this.props.time : JSON.parse(localStorage.getItem('time'));

      const total = this.calculateTotal(allProducts, orderItems);

      this.setState({allProducts, orderItems, delivery, paymentOption, time, total});
    })

  }

  calculateTotal(allProducts, orderItems) {
    let total = 0;
    if (Object.keys(orderItems).length > 0){
      total = Object.entries(orderItems).reduce(
        (result, [id, quantity]) => {
          const item = allProducts.find( p => p.id.toString() === id);
          return result + (item.price * quantity);
        },
        0);
    }
    return total;
  }

  render(props) {
    const deliveryCost = "Delivery fee: $5.00";
    //updates total price according to delivery status
    const total = this.props.deliveryStatus ? (this.state.total + 5) : this.state.total;

    return(this.state.allProducts.length > 0 &&
      (<div>
        <h3>Order Summary</h3>

        <h6>For {this.props.deliveryStatus ? "delivery" : "pick-up"} at {this.props.time? this.props.time : this.state.time} pm.</h6>

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
        (<p className="deliveryPrice">{deliveryCost}</p>)
        : ""}
        <p className="totalPrice">Total ${Number(total).toFixed(2)}</p>

      </div>)
    );
  }

}


export default OrderSummary;
