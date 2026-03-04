import { Box } from '@mui/material'
import React from 'react'
import SignUpPage1 from '../../../components/common/SignUpPage1'
import LoginP2 from '../../../components/common/LoginP2'
import MainLayout from '../../../layout/MainLayout'

const LoginPage = () => {
  return (
    <MainLayout>
    <Box sx={{ paddingTop:'100px',display:'flex',gap:'160px', justifyContent:'',flexWrap:{md:'nowrap', xs:'wrap-reverse'}}}>
        <SignUpPage1/>
        <LoginP2/>
      
    </Box>
    </MainLayout>
  )
}

export default LoginPage
