import React from 'react'
import PRODUCTS from '../data'
import Products from '../pages/Products'
import Productcart from '../Cartcomponents/Productcart'

const Dashboardcart = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center '>
       {PRODUCTS.map ((PRODUCTS)=> <Productcart{...PRODUCTS} /> )}
    </div>
    
  )
}

export default Dashboardcart
