import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import CheckOut from './components/CheckOut';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import OrderComplete from './components/OrderComplete';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHeart, faUser);

//This is going to replace App.js
//This is not a component: just a collection of JSX

const Routes = (
  <Router basename="/restaurant_client">
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/checkout" component={CheckOut}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/ordercomplete" component={OrderComplete}/>
      <Route component={Footer} />
    </div>
  </Router>
);

export default Routes;
