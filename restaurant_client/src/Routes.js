import React from 'react';

import {HashRouter as Router, Route} from 'react-router-dom';

//This is goign to replace App.js


import Nav from './components/Nav';
import Menu from './components/Menu';
import CheckOut from './components/CheckOut';
import SignUp from './components/SignUp';
import OrderComplete from './components/OrderComplete'


//This is not a component: just a collection of JSX

const Routes = (
  <Router>
    <div>
      <Route component={Nav}/>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/checkout" component={CheckOut}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/ordercomplete" component={OrderComplete}/>
    </div>
  </Router>
);

export default Routes;
