import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import './App.css';
import {Button, Form, FormGroup, Label, Input}
from 'reactstrap';

class App extends Component {
  state = {  }
  render() { 
    return (  
      <React.Fragment>
        <Nav/>
      </React.Fragment>
    );
  }
}
 
export default App;

