import { Box, Container } from '@mui/material'
import React from 'react'
import CardBreadCrumbs from './components/CardBreadCrumbs'
import CardProductList from './components/CardProductList'
import MainLayout from '../../layout/MainLayout'

const Cart = () => {
  return (
   <MainLayout>
    <Container>
        <CardBreadCrumbs/>
        <CardProductList/>
      
    </Container>
     </MainLayout>
  )
}

export default Cart
