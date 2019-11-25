import React, {Component} from 'react';
import Cart from './Cart';
import axios from 'axios';


const SERVER_URL = "http://localhost:3000/products.json"

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state ={
      products: [],
      categories: [],
      selected_products: {}
    }
    this.addItemToOrder = this.addItemToOrder.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  //get all products
  fetchProducts() {
    console.log("I am fetching");
    axios.get(SERVER_URL).then( (results) => {
      const allProducts = results.data;
      console.log("all P", allProducts);
      this.setState({products: allProducts})

      const courses = [...new Set(allProducts.map(p => p.category))]
      this.setState({categories: courses});

    })
  }

  componentDidMount() {
    this.fetchProducts();

    const orderProducts = JSON.parse(localStorage.getItem('orderItems'));
    if (orderProducts) {
      console.log(orderProducts);
      this.setState({selected_products: orderProducts});
    };
  }

  addItemToOrder(p) {
    const currentCart = this.state.selected_products;
    //checks if item is already there and changes the quantity
    if (currentCart[p.id]) {
      currentCart[p.id] += 1;
    } else {
      currentCart[p.id] = 1;
    }
    this.setState({selected_products: currentCart});
  }

  _handleChange(id) {
    const currentCart = this.state.selected_products;
    currentCart[id] -= 1;
    if (currentCart[id] === 0){
      delete currentCart[id];
    }
    this.setState({selected_products: currentCart});
  }

  render() {
    return (
      <div className="main">
        <div className="menu">
          <h1>Menu</h1>
          {this.state.categories.map( c => {
            return (
            <div key={c}>
              <h3>{c}</h3>
              {this.state.products.map( p => {
                  return (p.category === c &&
                  <div key={p.id}>
                    <label>{p.name} {} ${p.price}</label>
                    <button type="button" onClick={() => this.addItemToOrder(p)}>
                    +</button>
                  </div>);
              })}
            </div>);
          })}
        </div>
        {Object.keys(this.state.selected_products).length > 0 &&
        <Cart onClick={this._handleChange} cart_products={this.state.selected_products} products={this.state.products} />
        }
      </div>
    );
  }

}


export default Menu;
