import { Box, Container } from '@mui/material'
import React from 'react'
import CheckoutBredcrumbs from './components/CheckoutBredcrumbs'
import BillingDetails from './components/BillingDetails'
import PlaceOrder from './components/PlaceOrder'
import MainLayout from '../../layout/MainLayout'

const CheckOutPage = () => {
  return (
     <MainLayout>
    <Container>
        <CheckoutBredcrumbs/>
        <Box sx={{display:{md:'flex', xs:'block'}, justifyContent:'center', alignItems:'center', gap:{md:12,xs:20}}}>
        <BillingDetails/>
        <PlaceOrder/>
        </Box>  
    </Container>
     </MainLayout>
  )
}

export default CheckOutPage
