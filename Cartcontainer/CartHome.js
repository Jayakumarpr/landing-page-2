import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Headercart from '../Cartcomponents/Headercart'
import Dashboardcart from './Dashboardcart'
import ProductCartview from './ProductCartview'




const CartHome = () => {
  return (
    <div>
        <Headercart/>
       <Routes>
            <Route path='/' element={<Dashboardcart/>}/>
           <Route path='productcartview' element={<ProductCartview/>}/>
            
       </Routes>
    </div>
  )
}

export default CartHome
