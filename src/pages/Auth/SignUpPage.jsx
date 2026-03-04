import { Box, Container } from '@mui/material'
import React from 'react'
import SignUpPage1 from './../../components/common/SignUpPage1'
import SignUpPage2 from './../../components/common/SignUpPage2'
import MainLayout from '../../layout/MainLayout'

const SignUpPage = () => {
  return (
    <MainLayout>
    <Box sx={{ paddingTop:'100px',display:'flex',gap:'160px', justifyContent:'',flexWrap:{md:'nowrap', xs:'wrap-reverse'}}}>

       
        <SignUpPage1/>
        <SignUpPage2/>

      
    </Box>
    </MainLayout>
  )
}

export default SignUpPage
