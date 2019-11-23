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
      selected_products: []
    }
    this.addItemToOrder = this.addItemToOrder.bind(this);
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

  addItemToOrder(p) {
    this.setState({selected_products: [...this.state.selected_products, p]})
    console.log(this.state.selected_products);
  }


  render() {
    return (
      <div className="homePage">
        <div className="menu">
          <h1>Menu</h1>
          {this.state.categories.map( c => {
            return (
            <div key={c}>
              <h3>{c}</h3>
              {this.state.products.map( p => {
                  return (p.category === c &&
                  <div key={p.id}>
                    <p>{p.name} ${p.price}</p>
                    <button type="button" onClick={() => this.addItemToOrder(p)}>
                    +</button>
                  </div>);
              })}
            </div>);
          })}
        </div>

        <aside className="shoppingCart">
          <Cart cart_products={this.state.selected_products}/>
        </aside>
      </div>
    );
  }

}


export default Menu;
