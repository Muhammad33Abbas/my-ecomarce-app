import { Box, Typography } from '@mui/material'
import React from 'react'



const LogoCard = ({Pname, img}) => {
  return (
    <Box sx={{}}>

    <Box sx={{border:'1px solid black',  height:'150px', width:'150px' , display:'flex', alignItems:'center',justifyContent:'center',  flexDirection:'column'}}>
    <img src={img} alt="" />
    <Typography>{Pname}</Typography>
      
    </Box>
    </Box>
  )
}

export default LogoCard
