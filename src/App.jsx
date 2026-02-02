import React from 'react'
// import Card from './assets/Components/Common Components/Card'
// import { Box, Container } from '@mui/material'
import Navbar from './assets/Components/Navbar/Navbar'
import HomePage from './assets/Components/HomePage/HomePage'
import Footer from './assets/Components/Footer/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUpPage from './assets/Components/SignUpPage/SignUpPage'
import LoginPage from './assets/Components/SignUpPage/Components/LoginPage'
import CardCarousel from './assets/Components/Carusel'
import AboutPage from './assets/Components/AboutPage/AboutPage'
import FirstC from './assets/Components/AboutPage/Components/FirstC'
import ContactPage from './assets/Components/ContactPage/ContactPage'
import Error404 from './assets/Components/Common Components/Error404'
import CartPage from './assets/Components/Cart/CartPage'
import CheckOutPage from './assets/Components/CheckOutPage/CheckOutPage'
import AccountPage from './assets/Components/AcccountPage/AccountPage'
import Wishlist from './assets/Components/WishList/Wishlist'
import PDCComp from './assets/Components/ProductDetailPage/Components/ProDetCom/PDCComp'
// import ManageAccount from './assets/Components/AcccountPage/Components/ManageAccount'
// import { ContactPage } from '@mui/icons-material'
// import { ContactPage } from '@mui/icons-material' 
// import ProductDetailPage from "./assets/Components/ProductDetailPage/ProductDetailPage"

const App = () => (
  <div>
    <Navbar />
    {/* <HomePage /> */}
    {/* <LoginPage/> */}
    {/* <CardCarousel/> */}
    {/* <ManageAccount/> */}
   


         <Routes>
            <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path="/home" element= {<HomePage /> } />
      <Route path="/contact" element={<ContactPage />} /> 
       <Route path="/about" element={<AboutPage />} /> 
       <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
         <Route path="*" element={<Error404 />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/CheckOutPage" element={<CheckOutPage />} />
         <Route path="/accountpage" element={<AccountPage />} />
         <Route path="/wishlist" element={<Wishlist/>} />
         {/* <Route path="/ProductDetailPage" element={<ProductDetailPage/>} /> */}


         

    </Routes>
    
   <Footer/>
    {/* <PDCComp/> */}
    
  </div>
)

export default App
