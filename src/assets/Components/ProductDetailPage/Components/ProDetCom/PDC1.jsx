import { Box } from '@mui/material'
import React from 'react'


const Images = [
    "/Images/PDImg1.svg",
    "/Images/PDImg2.svg",
    "/Images/PDImg3.svg",
    "/Images/PDImg4.svg",
]

const PDC1 = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', gap:'18px'}}>

          {Images.map((img, i) => (
       
        <Box sx={{width:'170px', height:'138px', bgcolor:'#F5F5F5', display:'flex', alignItems:'center', justifyContent:'center'}}>
           
           
             
             <img key={i} src={img}/>
                
                 
        </Box>
  
    ))}

      
    </Box>
  )
}

export default PDC1
