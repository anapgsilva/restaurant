import React from 'react';
import Nav from './Nav';
import { Carousel } from 'react-bootstrap';
import babbo_img_1 from "../babbo_img_1.jpg"
import babbo_img_2 from "../babbo_img_2.jpg"
import babbo_img_3 from "../babbo_img_3.jpg"
import axios from "axios";

// const SERVER_URL = "https://restaurant-order-server.herokuapp.com/users";
const SERVER_URL = "http://localhost:3000/users";

 


const Home = () => {
 
  


  return (
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

  </div>
  );


}

export default Home;
