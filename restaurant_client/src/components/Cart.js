import React, {Component} from 'react';
// import {Link} from 'react-router-dom';


class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: []
    }
    this.removeItem = this.removeItem.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  };

  componentDidMount() {

    const props = this.props;

    this.setState({shoppingCart: [...this.state.shoppingCart, props.cart_products] });

    setTimeout(this.componentDidMount, 2000);
  };

  removeItem(p) {
    console.log(p);
    this.setState({shoppingCart: [this.state.shoppingCart]})
  }


  render() {

    return (
      <div key='orderList'>
        <h1>Cart div coming soon</h1>
        {this.state.shoppingCart.map( p => {
          return ( p.length > 0 &&
            <div key={p.name}>
              <p>{p.name}</p>
              <input value="-" type="submit" onClick={ () => this.removeItem(p)} />
            </div>
          )
        })}
        <button>
          Check Out
        </button>
      </div>
    );
  }
}




export default Cart;
