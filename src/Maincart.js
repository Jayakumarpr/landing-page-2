import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartHome from './Cartcontainer/CartHome'
// import './index.css';


const Maincart = () => {
  return (
    <div>
         <main>
              <CartHome/>
         </main>
    </div>
  )
}

export default Maincart
