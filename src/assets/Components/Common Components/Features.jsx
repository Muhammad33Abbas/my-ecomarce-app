import { Padding } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Features = () => {
  return (
    <Box sx={{paddingTop:'100px',display:'flex', alignItems:'center', justifyContent:'center', gap:10, flexWrap:'wrap'}}>
        <Box textAlign={'center'}>
            <img src="./public/Icons/Services.svg" alt="" />
            <Typography  sx={{paddingTop:'15px', fontWeight:'1000px'}}><strong>Free and Fast Delivery</strong></Typography>
            <Typography  sx= {{fontSize:'12px'}}>Free Delivery for all order over 140$</Typography>
        </Box>

         <Box textAlign={'center'}>
            <img src=" ./public/Icons/Services (1).svg" alt="" />
            <Typography sx={{paddingTop:'15px'}}><strong>24/7 Customer Services</strong></Typography>
            <Typography sx= {{fontSize:'12px'}}>Friendly 24/7 customer support</Typography>
        </Box>
         <Box textAlign={'center'}>
            <img src="./public/Icons/Services (2).svg" alt="" />
            <Typography  sx={{paddingTop:'15px'}}><strong>Money Back Gurantee</strong></Typography>
            <Typography sx= {{fontSize:'12px'}}>We return the money in 30 days</Typography>
        </Box>
       
      
    </Box>
  )
}

export default Features
