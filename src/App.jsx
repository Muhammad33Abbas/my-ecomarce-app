import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import SignUpPage from './pages/Auth/SignUpPage'
import LoginPage from './pages/Auth/components/LoginPage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'
import Error404 from './components/common/Error404'
import CartPage from './pages/Cart/CartPage'
import CheckOutPage from './pages/Checkout/CheckOutPage'
import AccountPage from './pages/Account/AccountPage'
import Wishlist from './pages/Wishlist/Wishlist'
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage'

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/signup" replace />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/checkout" element={<CheckOutPage />} />
    <Route path="/account" element={<AccountPage />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/product/:id" element={<ProductDetailPage />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
)

export default App
