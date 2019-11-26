import React, {Component} from 'react';
import Cart from './Cart';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const SERVER_URL = "http://localhost:3000/products.json"

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state ={
      products: [],
      categories: [],
      selected_products: {}
    }
    this._handleChange = this._handleChange.bind(this);
    this.addItemToOrder = this.addItemToOrder.bind(this);
  }

  //get all products
  fetchProducts() {
    axios.get(SERVER_URL).then( (results) => {
      const allProducts = results.data;
      this.setState({products: allProducts})

      const courses = [...new Set(allProducts.map(p => p.category))]
      this.setState({categories: courses});

    })
  }

  componentDidMount() {
    this.fetchProducts();

    const orderProducts = JSON.parse(localStorage.getItem('orderItems'));
    if (orderProducts) {
      this.setState({selected_products: orderProducts});
    };

  }

  addItemToOrder(id) {
    const orderItems = this.state.selected_products;
    orderItems[id] = 1;
    this.setState({selected_products: orderItems})
  }

  _handleChange(orderItems) {
    this.setState({selected_products: orderItems});
  }

  render() {
    return (
      <div className="main">
        <div className="menu">
          <h1>Menu</h1>
          {this.state.categories.map( cat => {
            return (
            <div key={cat}>
              <h3>{cat}</h3>
              {this.state.products.map( prod => {
                  return (prod.category === cat &&
                  <div key={prod.id}>
                    <label className="product-name">
                      {prod.name}
                    </label>
                    <label className="product-price">
                      ${Number(prod.price).toFixed(2)}
                    </label>
                    {this.state.selected_products[Number(prod.id).toString()] ?
                      (<button type="button">Added</button>)
                      :
                      (<button type="button" onClick={() => this.addItemToOrder(prod.id)}>Add</button>)
                    }
                    // <br/>
                    // {prod.stars > 1 ? Array.from(Array(prod.stars).keys()).map( star => { return (<FontAwesomeIcon key={star} icon='star' />)
                    // }) : ""}
                    // <br/>
                  </div>);
              })}
            </div>);
          })}
        </div>

        <Cart onClick={this._handleChange} cart_products={this.state.selected_products} products={this.state.products} />
      </div>
      
    );
  }
 

}


export default Menu;
