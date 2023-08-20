import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './pages/MainLayout.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Posts from './pages/Posts.jsx';
import Products from './pages/Products.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
// import Error from './pages/Error.jsx';
// import Login from './pages/Login.jsx';
import React, { useState } from 'react'

import ReactDOM from 'react-dom/client'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Preorder from './pages/Preorder.jsx';
import Maincart from './Maincart.js';
import ProductCartview from './Cartcontainer/ProductCartview.js';

import Banner from './pages/Banner.jsx';
import CarouselFadeExample from './pages/Banner.jsx';






function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='brand' element={<CarouselFadeExample/>} />
						
						
						<Route path='products' element={<Products />} />
						<Route path='products/:productId' element={<SingleProduct />} />
						<Route path='posts' element={<Posts />} />
						{/* <Route path='*' element={<Error />} />
						<Route path='' element={<Login/>}/> */}
						<Route path='preorder' element={<Preorder/>} />
						<Route path='maincart' element={<Maincart/>} />
						<Route path='productcartview' element={<ProductCartview/>}/>
						
						
						

						
					</Route>
				</Routes>
	
			</BrowserRouter>
			 {/* <Hooks/> */}
		</div>
	);
}

export default App;