import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'


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
