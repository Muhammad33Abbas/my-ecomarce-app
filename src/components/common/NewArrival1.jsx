import { Box, Button, Typography } from '@mui/material'
import React from 'react'

 const NewArrival1 =  () => {
return(
    <Box sx={{width:{xs:'100%', sm:'300px', md:'570px'}, height:{xs:'300px', sm:'400px', md:'600px'}, bgcolor:'black',position:'relative'}}>
        <Box component={'img'} src='/Images/PowerBank img.svg' sx={{width:'100%', height:'100%', objectFit:'cover'}}/>
        <Box sx={{color:'white',position:'absolute', bottom:{xs:30, md:60}, left:{xs:10, md:15}}}>
            <Typography sx={{fontSize:{xs:'18px', md:'24px'},  fontWeight:580, marginBottom:'10px'}}>PlayStation 5</Typography>
            <Typography sx={{width:{xs:'100%', md:'242px'}, height:'auto', fontSize:{xs:'12px', md:'14px'},marginBottom:'10px',lineHeight:'21px'}}>Black and White version of the PS5 Coming out sale</Typography>
            <Button sx={{textDecoration:'underline', color:'white', fontSize:{xs:'12px', md:'14px'}}}>Shop Now</Button>
        </Box>

    </Box>

    )

}
export default NewArrival1;