import { Container } from '@mui/material'
import React from 'react'
import PDCComp from './components/ProDetCom/PDCComp'
import MainLayout from '../../layout/MainLayout'

const ProductDetailPage = () => {
  return (
    <MainLayout>
    <Container>
      <PDCComp/>
      
    </Container>
    </MainLayout>
  )
}

export default ProductDetailPage
