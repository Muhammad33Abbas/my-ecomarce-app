import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const LoginP2 = () => {
  return (
    <Box sx={{width:'371px', height:'326px', display:'flex', flexDirection:'column', gap:'40px',
      //  justifyContent:'center',
      // alignItems:'center'
    }}>
     <Box>
        <Typography sx={{ fontSize: "36px" }}>
          Log in to Exclusive 
        </Typography>
        <Typography sx={{ fontSize: "16px", marginTop: "10px" }}>
          Enter your details below
        </Typography>
      </Box>

       <Box sx={{ display: "flex", flexDirection: "column", gap: "40px",alignItems:'start' }}>
               
               <TextField
                 fullWidth
                 variant="standard"
                 placeholder="Email or Phone Number"
               />
               <TextField
                 fullWidth
                 variant="standard"
                 placeholder="Password"
                 type="password"
               />
             </Box>

              <Box sx={{display:'flex',gap:5,ustifyContent:'space-Between'}}>
                <Button sx={{color:'white',bgcolor:"#DB4444", width:'143px',height:'50px'}}>Log In</Button>
                <Button sx={{bgcolor:'white', color:"#DB4444"}}>Forget Password?</Button>
              </Box>
      
    </Box>
  )
}

export default LoginP2
