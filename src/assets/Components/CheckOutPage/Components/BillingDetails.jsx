import { Label } from '@mui/icons-material'
import { Box, Checkbox, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const BillingDetails = () => {
  return (
    <Container>
        <Typography sx={{paddingTop:{md:3,xs:6},fontSize:'36px', fontWeight:300}}>Billing Details</Typography>
        <Box sx={{paddingTop:'30px', width:{md:'470px',xs:"100%"}}}>
            <Box>
           <Typography sx={{paddingBottom:'10px', color:"#363738"}}>First Name</Typography>
            <TextField fullWidth sx={{bgcolor:"#F5F5F5"}}></TextField>
            </Box>

            <Box sx={{paddingTop:'25px'}}>
           <Typography sx={{paddingBottom:'10px', color:"#363738"}}>Company Name </Typography>
            <TextField fullWidth sx={{bgcolor:"#F5F5F5"}}></TextField>
            </Box>

             <Box sx={{paddingTop:'25px'}}>
           <Typography sx={{paddingBottom:'10px', color:"#363738"}}>Street Address </Typography>
            <TextField fullWidth sx={{bgcolor:"#F5F5F5"}}></TextField>
            </Box>

             <Box sx={{paddingTop:'25px'}}>
           <Typography sx={{paddingBottom:'10px', color:"#363738"}}>Appartment,floor,etc (optional) </Typography>
            <TextField fullWidth sx={{bgcolor:"#F5F5F5"}}></TextField>
            </Box>

             <Box sx={{paddingTop:'25px'}}>
           <Typography sx={{paddingBottom:'10px', color:"#363738"}}>Town City</Typography>
            <TextField fullWidth sx={{bgcolor:"#F5F5F5"}}></TextField>
            </Box>

             <Box sx={{paddingTop:'25px'}}>
           <Typography sx={{paddingBottom:'10px', color:"#363738"}}>Phone No </Typography>
            <TextField fullWidth sx={{bgcolor:"#F5F5F5"}}></TextField>
            </Box>
             <Box sx={{paddingTop:'25px'}}>
           <Typography sx={{paddingBottom:'10px', color:"#363738"}}>Email Address </Typography>
            <TextField fullWidth sx={{bgcolor:"#F5F5F5"}}></TextField>
            </Box>

      <Checkbox defaultChecked sx={{color:"#DB4444"}} />
      <label htmlFor="">Save the information for faster check-out next time</label>
        </Box>
      
    </Container>
  )
}

export default BillingDetails
