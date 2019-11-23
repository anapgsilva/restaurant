import React from 'react';
import {Link} from 'react-router-dom';


const Cart = (props) => {

  const orderItems = props.cart_products;
  const allProducts = props.products;

  const removeItem = function(id) {
    return props.onClick(id);
  }

  return (
    <aside className='orderList'>
      <h1>Your Order</h1>

      {Object.entries(orderItems).map( ([id, quantity]) => {
        const item = allProducts.find( p => p.id.toString() === id);

        return (quantity > 0 &&
          <div key={id}>
            <label>{quantity} X {item.name}<span>${item.price}</span></label>
            <button onClick={ () => removeItem(id)}>
            -
            </button>
          </div>)
      })}

      <button>
        <Link to="/checkout">Check Out</Link>
      </button>
    </aside>
  );
}




export default Cart;
