import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Placeorder from './pages/Placeorder'
import Orders from './Orders'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import SearchBar from './componets/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gradient-to-r from-[#FAF3E0] to-[#F5E6E8]'>

      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path ='/about' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/place-order' element={<Placeorder/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/verify' element={<Verify/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

