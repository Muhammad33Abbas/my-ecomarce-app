import { Box, Container } from '@mui/material'
import React from 'react'
import SignUpPage1 from './../Common Components/SignUpPage1'
import SignUpPage2 from './../Common Components/SignUpPage2'

const SignUpPage = () => {
  return (
    // <Container>
    <Box sx={{ paddingTop:'100px',display:'flex',gap:'160px', justifyContent:'',flexWrap:{md:'nowrap', xs:'wrap-reverse'}}}>

       
        <SignUpPage1/>
        <SignUpPage2/>

      
    </Box>
    // </Container>
  )
}

export default SignUpPage
