import React from 'react';
import {useHistory} from 'react-router-dom';


const Cart = (props) => {
  //GET PROPS FROM PARENT
  const orderItems = props.cart_products;
  const allProducts = props.products;
  const history = useHistory(); //so we can redirect to checkout page


  //REMOVE ITEM FROM CART
  const removeItem = function(id) {
    orderItems[id] -= 1;
    if (orderItems[id] === 0){
      delete orderItems[id]; //removes item from cart completely
    }
    let order = JSON.stringify(orderItems);
    localStorage.setItem('orderItems', order);
    return props.onClick(orderItems);//SENDS PROP TO PARENT
  }

  //ADD ITEM TO CART
  const addItem = function(id) {
    //checks if item is already there and changes the quantity
    if (orderItems[id]) {
      orderItems[id] += 1;
    } else {
      orderItems[id] = 1;
    }
    let order = JSON.stringify(orderItems);
    localStorage.setItem('orderItems', order);
    return props.onClick(orderItems);//SENDS PROP TO PARENT
  }

  //ADD CART LIST TO LOCALSTORAGE
  const submitOrder = (orderItems) => {
    let order = JSON.stringify(orderItems);
    localStorage.setItem('orderItems', order);
    //Redirect to checkout page
    if (Object.keys(orderItems).length > 0) {
      history.push("/checkout");
    }
  }


  let totalPrice = 0;

  // totalPrice = Object.entries(orderItems).reduce(
  //   (result, [id, quantity]) => {
  //     const item = allProducts.find( p => p.id.toString() === id);
  //     return result + (item.price * quantity);
  //   },
  //   0);
  
  Object.entries(orderItems).map( ([id, quantity]) => {
    allProducts.find( p => {
      if (p.id.toString() === id) {
       totalPrice += p.price * quantity;
      }
    })}
  );


  return (
    allProducts.length > 0 &&

      (<div className='orderList'>
        <h1>Order</h1>

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

                      <label className="quantity value">
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

              <p className="totalPrice">Total: ${Number(totalPrice).toFixed(2)}</p>

            </div>
          )
          : (<h6>Your cart is empty</h6>)}


      <button className="checkout-button" onClick={() => submitOrder(orderItems)}>
        Check Out
      </button>
    </div>)

    );

}

export default Cart;
