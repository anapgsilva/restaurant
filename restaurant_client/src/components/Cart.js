import React from 'react';
import {Link} from 'react-router-dom';


const Cart = (props) => {

  const orderItems = props.cart_products;
  const allProducts = props.products;

  const removeItem = function(id) {
    orderItems[id] -= 1;
    if (orderItems[id] === 0){
      delete orderItems[id];
    }
    return props.onClick(orderItems);
  }

  const addItem = function(id) {
    //checks if item is already there and changes the quantity
    if (orderItems[id]) {
      orderItems[id] += 1;
    } else {
      orderItems[id] = 1;
    }
    return props.onClick(orderItems)
  }

  const submitOrder = (orderItems, allProducts) => {
    let order = JSON.stringify(orderItems);
    localStorage.setItem('orderItems', order);
    let products = JSON.stringify(allProducts);
    localStorage.setItem('allProducts', products);
  }

  let totalPrice = 0;
  Object.entries(orderItems).map( ([id, quantity]) => {
    const item = allProducts.find( p => {
    if (p.id.toString() === id) {
      totalPrice += p.price * quantity;
    };
  })});

  return (
    allProducts.length > 0 ?

      (<div className='orderList'>
        <h2>Cart</h2>

        {Object.keys(orderItems).length > 0 ?

          ( <div>
              <div className="title">
                <label>Qty</label>
                <label>Total</label>
              </div>

              <div className="items-list">

                {Object.entries(orderItems).map( ([id, quantity]) => {
                const item = allProducts.find( p => p.id.toString() === id);
                return (quantity > 0 &&
                  <div key={id}>
                    <label>
                    {item.name}
                    </label>

                    <button className="minus" onClick={ () => removeItem(id)}>
                    -
                    </button>
                    <label>
                    {quantity}
                    </label>
                    <button className="plus" onClick={ () => addItem(id)}>
                    +
                    </button>

                    <label>
                    ${Number(quantity * item.price).toFixed(2)}
                    </label>
                  </div>)
                })}
              </div>)

              <p>Total (exc. delivery): ${Number(totalPrice).toFixed(2)}</p>

            </div>
          )
          : (<h4>Your cart is empty.</h4>)}


      <button className="checkout-button" onClick={() => submitOrder(orderItems, allProducts)}>
        {Object.keys(orderItems).length > 0 ? (<Link to="/checkout">Check Out</Link>) : "Check Out"}
      </button>
    </div>)

    : "");

}

export default Cart;
