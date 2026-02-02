import { Box } from '@mui/material'
import React from 'react'
import SignUpPage1 from '../../Common Components/SignUpPage1'
import LoginP2 from '../../Common Components/LoginP2'



const LoginPage = () => {
  return (
    <Box sx={{ paddingTop:'100px',display:'flex',gap:'160px', justifyContent:'',flexWrap:{md:'nowrap', xs:'wrap-reverse'}}}>
        <SignUpPage1/>
        <LoginP2/>
      
    </Box>
  )
}

export default LoginPage
