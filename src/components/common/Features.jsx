import { Padding } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Features = () => {
  return (
    <Box sx={{paddingTop:'100px',display:'flex', alignItems:'center', justifyContent:'center', gap:10, flexWrap:'wrap'}}>
        <Box textAlign={'center'}>
            <img src="/Icons/Services.svg" alt="" />
            <Typography  sx={{paddingTop:'15px', fontWeight:'1000px'}}><strong>Free and Fast Delivery</strong></Typography>
            <Typography  sx= {{fontSize:'12px'}}>Free Delivery for all order over 140$</Typography>
        </Box>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <Box sx={{width:'80px', height:'80px', bgcolor:'#B3B3B3', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'24px' }}>
            <Box sx={{width:'58px', height:'58px', bgcolor:'black', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img src=" /Icons/Services (1).svg" alt="" />
            </Box>
            </Box>
            <Typography sx={{fontSize:'20px', fontWeight:600}}>24/7 CUSTOMER SERVICE</Typography>
            <Typography sx={{fontSize:'14px'}}>Friendly 24/7 customer support</Typography>

        </Box>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <Box sx={{width:'80px', height:'80px', bgcolor:'#B3B3B3', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'24px' }}>
            <Box sx={{width:'58px', height:'58px', bgcolor:'black', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img src="/Icons/Services (2).svg" alt="" />
            </Box>
            </Box>
            <Typography sx={{fontSize:'20px', fontWeight:600}}>MONEY BACK GUARANTEE</Typography>
            <Typography sx={{fontSize:'14px'}}>We return the money in 30 days</Typography>
        </Box>
       
      
    </Box>
  )
}

export default Features
