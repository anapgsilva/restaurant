import React from 'react';
import Nav from './Nav';
import { Carousel } from 'react-bootstrap';
import babbo_img_1 from "../babbo_img_1.jpg"
import babbo_img_2 from "../babbo_img_2.jpg"
import babbo_img_3 from "../babbo_img_3.jpg"


const Home = () => {

  //
  // fetchUser() {
  //
  // }


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
          <Carousel.Caption>
            <h3>Book Your Flight With Us</h3>
            <div className="caption-description">
              <p>Whether you're jetting off or traveling for business, we offer flight deals to the best destinations in Australia. Find your domestic airfare, and get ready to explore the sights from sea to shining sea.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={babbo_img_1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Book Your Flight With Us</h3>
            <div className="caption-description">
              <p>Whether you're jetting off or traveling for business, we offer flight deals to the best destinations in Australia. Find your domestic airfare, and get ready to explore the sights from sea to shining sea.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={babbo_img_2}
            alt="First slide"
          />
        <Carousel.Caption>
          <h3>Book Your Flight With Us</h3>
          <div className="caption-description">
            <p>Whether you're jetting off or traveling for business, we offer flight deals to the best destinations in Australia. Find your domestic airfare, and get ready to explore the sights from sea to shining sea.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </div>
  );


}

export default Home;
