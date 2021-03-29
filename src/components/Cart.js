import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeProduct} from '../store/actions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const total = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);

  return (
    <>
      <main>
      <h2>Your pizza order: </h2>
        {cartItems.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              <div className='cartProduct'>
                <strong>{cartItem.title}</strong> - {cartItem.price}€ (
                {cartItem.quantity}{cartItem.style})
              </div>
              <div>
                <button onClick={() => dispatch(removeProduct(cartItem.id))}>
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className='total'>
          Total: {total} €
        </div>
      </main>
    </>
  );
};

export default Cart;
