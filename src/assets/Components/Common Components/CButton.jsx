import { Box, Button } from '@mui/material'
import React from 'react'

const CButton = ({bgcolor,color, Bname, width, height,TotalPrice}) => {
  return (
    <Box sx={{ display:{md:'flex', xs:'none'}, alignItems:'center', justifyContent:'center'}}>
    <Box sx={{width:{width}, height:{height},}} >
        <Button fullWidth variant='outlined' sx={{bgcolor:bgcolor, color:color,padding:'10px' }}>{Bname}</Button>
      
    </Box>
    </Box>
  )
}
 
export default CButton
