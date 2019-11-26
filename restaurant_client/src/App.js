import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements'
import PaymentForm from './PaymentForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import './App.css';
import {Button, Form, FormGroup, Label, Input}
from 'reactstrap';
import { element } from 'prop-types';

class App extends Component {
  state = {  }
  render() { 
    return (  
      
      <React.Fragment>
        <Nav/>
        <div>
        <StripeProvider apiKey="pk_test_JhdcAxGUY3owc3ECy0W1PWGC0048vo2QDZ">
        <Elements>
          <PaymentForm/>
        </Elements>
      </StripeProvider>
      </div>
      </React.Fragment>
    );
  }
}
 
export default App;

