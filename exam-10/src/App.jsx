import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import CartContext from './components/CartContext'
 
const initialState = {
  cart:[],
  products:[
    { id: 1, name: "Book", price: 2000 },
    { id: 2, name: "Laptop", price: 150000 },
    { id: 3, name: "Phone", price: 120000 },
    { id: 4, name: "Watch", price: 60000 },
  ]

}


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return{cart:[...state.cart, action.payload]} 
    case "REMOVE_ITEM":
      return { cart: state.cart.filter((item, index) => index !== action.payload)} 
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};




function App() {
 

  // const Cart = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // }


  return (
    <>
      <CartContext.Provider value ={{state, dispatch}}>
        <ProductList/>
        <Cart/>
      </CartContext.Provider>
     
    </>
  )
}

export default App
