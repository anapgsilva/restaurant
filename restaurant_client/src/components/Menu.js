import React, {Component} from 'react';
import Cart from './Cart';
import axios from 'axios';


const SERVER_URL = "http://localhost:3000/products.json"

class Menu extends Component {

  constructor() {
    super();
    this.state ={
      products: {},
      selected_products: []
    }
  }

  //get all products
  fetchProducts() {
    axios.get(SERVER_URL).then( (results) => {
      const allProducts = results.data
      console.log(allProducts);

    })

  }


  render() {
    return (
      <div>
        <h1>Menu page coming soon</h1>


        <Cart />
      </div>
    );
  }
}




export default Menu;
