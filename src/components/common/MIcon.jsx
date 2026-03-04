import { Box } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MIcon = () => {
  return (
    <Box sx={{ display:{md:"flex",xs:"none"}, gap:4, paddingTop:'50px'}}>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',width:'46px', height:'46px', bgcolor:'#F5F5F5', borderRadius:'50%'}}>
             <ArrowBackIcon/>
        </Box>
   <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'46px', height:'46px', bgcolor:'#F5F5F5', borderRadius:'50%'}}>
              <ArrowForwardIcon/>
        </Box>
      
    

      
    </Box>
    
  )
}

export default MIcon
