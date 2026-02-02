import { Box, Container } from '@mui/material'
import React from 'react'
import CheckoutBredcrumbs from './Components/CheckoutBredcrumbs'
import BillingDetails from './Components/BillingDetails'
import PlaceOrder from './Components/PlaceOrder'

const CheckOutPage = () => {
  return (
    <Container>
        <CheckoutBredcrumbs/>
        <Box sx={{display:{md:'flex', xs:'block'}, justifyContent:'center', alignItems:'center', gap:{md:12,xs:20}}}>
        <BillingDetails/>
        <PlaceOrder/>
        </Box>
        

        

      
    </Container>
  )
}

export default CheckOutPage
