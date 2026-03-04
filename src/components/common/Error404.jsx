// import { Container } from '@mui/material'
// import React from 'react'
import { Box, Breadcrumbs, Container, Typography, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import CButton from './CButton';

const Error404 = () => {
  return (
   
    <Container>
      <Box sx={{ height: "100px", pt: "50px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          
          <Link
            component={RouterLink}
            to="/home"
            underline="hover"
            color="inherit"
          >
            Home
          </Link>

          <Link
            component={RouterLink}
            to="/contact"
            underline="hover"
            color="inherit"
          >
            Error 404
          </Link>

          {/* Current page (no link) */}
          

        </Breadcrumbs>
      </Box>

      <Box sx={{display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center',gap:5 }}>
        <Typography sx={{fontSize:'110px'}}><strong>404 Not Found</strong></Typography>
        <Typography>You visited Page not Found you may go home</Typography>
        <CButton
        onClick={() => navigate('/home')}
      
        bgcolor={"#DB4444"}
        color={"white"}
        Bname={"Back to home page"}
        width={"254px"}
        height={"56px"}/>
      </Box>
    </Container>

  )
}

export default Error404




