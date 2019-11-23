import React, {Component} from 'react';
import Cart from './Cart';
import axios from 'axios';


const SERVER_URL = "http://localhost:3000/products.json"

class Menu extends Component {

  constructor() {
    super();
    this.state ={
      products: [],
      categories: [],
      selected_products: []
    }
  }

  //get all products
  fetchProducts() {
    axios.get(SERVER_URL).then( (results) => {
      const allProducts = results.data;
      this.setState({products: allProducts})


      const courses = [...new Set(allProducts.map(p => p.category))]
      this.setState({categories: courses})


    })

  }

  componentDidMount() {
    this.fetchProducts();
  }



  render() {
    return (
      <div>
        <h1>Menu page coming soon</h1>
        {this.state.categories.map( c => {
          return (
          <div>
            <h3>{c}</h3>
            {this.state.products.map( p => {
              if (p.category === c){
                return <p>{p.name} ${p.price}</p>
              }
            })}
          </div>)
        })}



        <Cart />
      </div>
    );
  }
}




export default Menu;
