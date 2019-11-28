import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import babbo_sm_footer_logo from "../babbo_sm_footer_logo.png"

const Footer = () => {

  return (

    <footer className="footercontainer">
        <div className="row">

            <div className="col">
            <img
              src={babbo_sm_footer_logo}
              alt="Babbo Logo"
            />
            </div>

            <div className="col-lg-2">
              <p className="ttl">LOCATION</p>
              <p>75 Washington Place</p>
              <p>Sydney, Australia</p>
              <p>2095</p>
            </div>

            <div className="col-lg-2">
              <p className="ttl">CONTACT</p>
              <p>T 212 539 1776</p>
              <p>F 212 539 0959</p>
              <p>Babbo@ga.co</p>
            </div>

            <div className="col-lg-2">
              <p className="ttl">HOURS</p>
              <p>Sunday-Thursday</p>
              <p>5:00PM - 11:00PM</p>
              <br />
              <p>Friday-Saturday</p>
              <p>5:00PM - 11:30PM</p>
            </div>


      </div>
    </footer>
  )
};

export default Footer;
