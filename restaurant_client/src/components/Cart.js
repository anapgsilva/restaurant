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
    return props.onClick(orderItems);
  }

  const submitOrder = (orderItems) => {
    let order = JSON.stringify(orderItems);
    localStorage.setItem('orderItems', order);
  }

  let totalPrice = 0;
  if (Object.entries(orderItems).length > 0) {
    Object.entries(orderItems).map( ([id, quantity]) => {
      return allProducts.find( p => {
        return (p.id.toString() === id ? (totalPrice += p.price * quantity): totalPrice);
      })
    });
  }


  return (
    allProducts.length > 0 &&

      (<div className='orderList'>
        <h2>Cart</h2>

        {Object.keys(orderItems).length > 0 ?

          ( <div>
              <div className="title">
                <label className="quantity">Qty</label>
                <label className="itemPrice">Total</label>
              </div>

              <div className="items-list">

                {Object.entries(orderItems).map( ([id, quantity]) => {
                const item = allProducts.find( p => p.id.toString() === id);
                return (quantity > 0 &&
                  <div className="item" key={id}>
                    <label className="itemName">
                    {item.name}
                    </label>


                    <label className="quantity">
                    <button className="minus" onClick={ () => removeItem(id)}>
                    -
                    </button>
                    {quantity}
                    <button className="plus" onClick={ () => addItem(id)}>
                    +
                    </button>
                    </label>


                    <label className="itemPrice">
                    ${Number(quantity * item.price).toFixed(2)}
                    </label>
                  </div>)
                })}
              </div>

              <p className="totalPrice">Total (exc. delivery): ${Number(totalPrice).toFixed(2)}</p>

            </div>
          )
          : (<h4>Your cart is empty.</h4>)}


      <button className="checkout-button" onClick={() => submitOrder(orderItems)}>
        {Object.keys(orderItems).length > 0 ? (<Link to="/checkout">Check Out</Link>) : "Check Out"}
      </button>
    </div>)

    );

}

export default Cart;
