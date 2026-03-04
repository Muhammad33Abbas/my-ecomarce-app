import { Box, Typography } from '@mui/material'
import React from 'react'

const DIgitalTIme = () => {
  return (
    <Box sx={{display:{md:'flex', xs:'none'},width:'302px', height:'50px',  gap:4,  paddingTop:'70px'}}>
        <Box sx={{display:'flex', gap:'15px',alignItems:'center', justifyContent:'center'}}>
          <Box>
            <Typography sx={{fontSize:'12px'}}>Days</Typography>
            <Typography sx={{fontSize:'32px'}} component={'strong'}><strong>20</strong></Typography>
            </Box>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'4px', height:'4px', paddingTop:'10px'}}>
             <Typography sx={{color:'#E07575'}}>:</Typography>
             </Box>
        </Box>

           <Box sx={{display:'flex', gap:'15px',alignItems:'center', justifyContent:'center'}}>
          <Box>
            <Typography sx={{fontSize:'12px'}}>Hours</Typography>
            <Typography sx={{fontSize:'32px'}} component={'strong'}><strong>20</strong></Typography>
            </Box>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'4px', height:'4px', paddingTop:'10px'}}>
             <Typography sx={{color:'#E07575'}}>:</Typography>
             </Box>
        </Box>

           <Box sx={{display:'flex', gap:'15px',alignItems:'center', justifyContent:'center'}}>
          <Box>
            <Typography sx={{fontSize:'12px'}}>Minutes</Typography>
            <Typography sx={{fontSize:'32px'}} component={'strong'}><strong>20</strong></Typography>
            </Box>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'4px', height:'4px', paddingTop:'10px'}}>
             <Typography sx={{color:'#E07575'}}>:</Typography>
             </Box>
        </Box>
       

          <Box sx={{display:'flex', gap:'15px',alignItems:'center', justifyContent:'center'}}>
          <Box>
            <Typography sx={{fontSize:'12px'}}>Seconds</Typography>
            <Typography sx={{fontSize:'32px'}} component={'strong'}><strong>20</strong></Typography>
            </Box>
           
        </Box>
       
       
       
     
    
      
    </Box>
  )
}

export default DIgitalTIme
