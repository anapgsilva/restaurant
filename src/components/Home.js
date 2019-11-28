import React, {Component} from 'react';
import Nav from './Nav';
import { Carousel } from 'react-bootstrap';
import babbo_img_1 from "../babbo_img_1.jpg"
import babbo_img_2 from "../babbo_img_2.jpg"
import babbo_img_3 from "../babbo_img_3.jpg"
import axios from "axios";

// const SERVER_URL = "https://restaurant-order-server.herokuapp.com/users";
const SERVER_URL_CurrentUser = "http://localhost:3000/users/current";
const SERVER_URL_Orders = "http://localhost:3000/orders.json"

 


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      id: '',
      orders:[],
      products:[]
    };
  }

  componentDidMount(){
    const jwt = window.localStorage.getItem('jwt');

    axios.get(SERVER_URL_CurrentUser , {
      headers:{
        Authorization: "Bearer " + jwt
      }}).then( res => {
      console.log(res);
      console.log(res.data.orders);
      this.setState({orders: res.data.orders})
      
    })

  }

  render() {
    return (
      this.state.orders.length > 0 && (
        <div>
          <div>
            <Nav />
          </div>

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

          <div>
            {this.state.orders.map(order => (
              <div>
                <div>
                  {order.line_items.map(item => (
                    <div>
                      {item.product.name}: {item.product.price}
                    </div>
                  ))}
                </div>
                <div>Total: ${order.total_price}</div>
              </div>
            ))}
          </div>
        </div>
      )
    );
  }
}

export default Home;
