import React, { useContext } from 'react';
import CartContext from './CartContext';

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const totalPrice = state.cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {state.cart.length == 0 ? (
        <p>Empty</p>
      ) : (
        <ul>
          {state.cart.map(item => (
            <li key={item.id}>
                {item.name}-{item.price}т
                <button onClick={()=> dispatch({type:'REMOVE_ITEM',payload:item.id})}>
                    Remove
                </button>
                <p>Total: {totalPrice}т</p>
                <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}