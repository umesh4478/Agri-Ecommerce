import React from 'react'
import Auth from './Auth'
import { Navigate, Routes, useLocation } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CartPage from './pages/cartPage'
import Products from './pages/Products'
import Home from './pages/Home'
import Profile from './pages/ProfilePage'
<head>
  
</head>

export const App = () => {
  const location = useLocation();
  const isAuthPage= location.pathname=="/login"|| location.pathname=="/signup";

  return (
    <div>
    {!isAuthPage && <Header/> }

    <Routes>
    <Route path='/'
     element={< Navigate to="/login"  replace/>} />
      
      <Route path='/login' 
      element={<Auth/>}
      />

      <Route path='/signup'
      element={<Auth/>} 
       />

       <Route path='/home'
       element={<Home/>} />

       <Route path='/cart'
       element={<CartPage/>}
       />
       
       <Route path='/products'
       element={<Products/>} 
       />

       <Route path='/profile'
        element={<Profile/>}
       />
     
       
    </Routes>

    {!isAuthPage && <Footer/> }
    </div>
  )
}
export default App