import { Box, Container } from '@mui/material'
import React from 'react'
import CardBreadCrumbs from './Component/CardBreadCrumbs'
import CardProductList from './Component/CardProductList'

const Cart = () => {
  return (
    <Container>
        <CardBreadCrumbs/>
        <CardProductList/>
      
    </Container>
  )
}

export default Cart
