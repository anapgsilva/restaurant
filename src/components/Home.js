import React, {Component} from 'react';
import Nav from './Nav';
import { Carousel } from 'react-bootstrap';
import babbo_img_1 from "../babbo_img_1.jpg"
import babbo_img_2 from "../babbo_img_2.jpg"
import babbo_img_3 from "../babbo_img_3.jpg"
import axios from "axios";

// const SERVER_URL = "https://restaurant-order-server.herokuapp.com/users/current";
const SERVER_URL_CurrentUser = "http://localhost:3000/users/current";
// const SERVER_URL_Orders = "http://localhost:3000/orders.json"




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      orders:[],
      loggedIn: false
    };
  }


  componentDidMount(){
    const jwt = window.localStorage.getItem('jwt');

    if (jwt) {
      this.setState({loggedIn: true});
      axios.get(SERVER_URL_CurrentUser , {
        headers:{
          Authorization: "Bearer " + jwt
        }}).then( result => {
        if (Object.keys(result.data).length > 0) {
          this.setState({orders: result.data.orders});
          this.setState({user_id: result.data.id});

          const user_id = JSON.stringify(result.data.id);
          localStorage.setItem('user_id', user_id);
        };
      })

    } else {
      this.setState({orders: []});
    }

    this.setLoggedIn();
  }

  setLoggedIn() {
    if (window.localStorage.getItem('jwt')) {
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  }

  render() {
    return (
      <div>
        <Nav  />

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={babbo_img_3}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={babbo_img_1}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={babbo_img_2}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>

        {(this.state.loggedIn && this.state.orders !== undefined) ?

        <div id="list-orders">
          {this.state.orders.map( (order, index) => (
            <div id="order" key={index}>
              <p className="headerline"> Your {order.kind} order on {order.created_at.slice(0, 10)} </p>
              {order.line_items.map((item, index) => (
                <div key={index}>
                  {item.quantity} X {item.product.name} ${item.product.price}
                </div>
              ))}
              <p>Total: ${order.total_price}</p>
            </div>
          ))}
        </div>
        : ""
        }

      </div>

    )
  }
}

export default Home;
