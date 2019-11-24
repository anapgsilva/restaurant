import React from 'react';
import {Link} from 'react-router-dom';


const Cart = (props) => {

  const orderItems = props.cart_products;
  const allProducts = props.products;

  const removeItem = function(id) {
    return props.onClick(id);
  }

  const submitOrder = (orderItems, allProducts) => {
    console.log('orderItems', orderItems);
    let order = JSON.stringify(orderItems);
    localStorage.setItem('orderItems', order);
    let products = JSON.stringify(allProducts);
    localStorage.setItem('allProducts', products);
    console.log('order', order);
    console.log('products', products);
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

      <button onClick={() => submitOrder(orderItems, allProducts)}>
        <Link to="/checkout">Check Out</Link>
      </button>
    </aside>
  );
}




export default Cart;
