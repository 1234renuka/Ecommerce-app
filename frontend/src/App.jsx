// App.jsx - Updated with Chat System
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collection from './pages/Collection.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Placeorder from './pages/Placeorder'
import Orders from './Orders.jsx'
import Navbar from './components/Navbar.jsx'  
import Footer from './components/Footer.jsx'  
import SearchBar from './components/SearchBar.jsx' 
import BargainingChatbox from './components/BargainingChatbox.jsx'  
 import ChatAdminPanel from './components/ChatAdminPanel.jsx' 
import { ChatContextProvider } from '../context/ChatContext.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify.jsx'

const App = () => {
  return (
    <ChatContextProvider> {/* Wrap everything in ChatContextProvider */}
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-white'>
        <ToastContainer/>
        <Navbar/>
        <SearchBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/place-order' element={<Placeorder/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/verify' element={<Verify/>}/>
          {/* Add admin route for chat management */}
           <Route path='/admin/chats' element={<ChatAdminPanel/>}/> 
        </Routes>
        <Footer/>
        
        
        <BargainingChatbox/>
      </div>
    </ChatContextProvider>
  )
}

export default App