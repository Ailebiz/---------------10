import React,{ useContext } from 'react'
import CartContext from './CartContext'

const products = [
    { id: 1, name: "Book", price: 2000 },
    { id: 2, name: "Laptop", price: 150000 },
    { id: 3, name: "Phone", price: 120000 },
    { id: 4, name: "Watch", price: 60000 },
];

export default function ProductList() {
    const {dispatch} = useContext(CartContext)
  return (

    <div>
      <h2>Products</h2>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            {prod.name} - {prod.price}Tg
            <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: prod })}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}