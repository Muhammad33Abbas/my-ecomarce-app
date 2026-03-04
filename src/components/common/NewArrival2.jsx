import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const NewArrival2 = () => {
  return (
    <Box sx={{}}>
        <Box sx={{display:'flex', flexDirection:'column', gap:{xs:'16px', md:'13px'}}}>
        <Box sx={{width:{xs:'100%', sm:'300px', md:'570px'},color:'white', bgcolor:'#0D0D0D',position:'relative', height:{xs:'200px', sm:'250px', md:'305px'},  zIndex:'1111111'}}>

             <Box sx={{ position:'absolute',right:0,zIndex:'-001'}}> 
                <img sx={{width:'100%', height:'100%', objectFit:'cover'}}  src='/Images/attractive-woman.svg' />
            </Box>

           
            <Box sx={{ position:'absolute', bottom:{xs:10, md:30} , left:{xs:10, md:20}, width:{xs:'80%', md:'255px'}, paddingBottom:'10px'}} >
                <Typography sx={{fontSize:{xs:'18px', md:'24px'}, fontWeight:550}}>Women's Collections</Typography>
                <Typography sx={{fontSize:{xs:'12px', md:'14px'},lineHeight:'21px'}}>Featured Women Collection that give you another vibe</Typography>
                <Button sx={{fontSize:{xs:"14px", md:"16px"},textDecoration:'underline',color:'white',}}><strong>Shop Now</strong></Button>

            </Box>
            
        </Box>

        <Box sx={{paddingTop:{md:0,xs:15},position:'relative',width:{xs:'100%', sm:'300px', md:'570px'}, color:'white',}}>
        <Box 
        sx={{width:'100%',height:'100%' , display:'flex',gap:{xs:'15px', md:'30px'}, flexDirection:{xs:'column', sm:'row'}}}>
            <Box sx={{  bgcolor:'black',width:{xs:'100%', sm:'48%', md:'270px'}, height:{xs:'200px', sm:'250px', md:'284px'}, display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <Box component={'img'} src='/Images/SpeakersImg.svg' sx={{width:'80%', height:'auto'}}/>
              
            </Box>
            <Box sx={{ bgcolor:'black',width:{xs:'100%', sm:'48%', md:'270px'}, height:{xs:'200px', sm:'250px', md:'284px'},display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                  <Box component={'img'} src='/Images/PerfumeImg.svg' sx={{width:'80%', height:'auto'}}/>
                </Box>
                  </Box>

            <Box sx={{position:'absolute', bottom:{xs:10, md:20}, left:{xs:10, md:25}}}>
                    <Typography sx={{fontSize:{xs:'18px', md:'24px'} , fontWeight:550}}>Perfume</Typography>
                    <Typography sx={{fontSize:{xs:'12px', md:'14px'}}}>GUCCI INTENSE OUD EDP</Typography>
                     <Button sx={{fontSize:{xs:"12px", md:"16px"},textDecoration:'underline',color:'white',}}><strong>Shop Now</strong></Button>

                  </Box>


                  
            <Box sx={{position:'absolute', bottom:{xs:10, md:20}, right:{xs:10, md:80}}}>
                    <Typography sx={{fontSize:{xs:'18px', md:'24px'} , fontWeight:550}}>Perfume</Typography>
                    <Typography sx={{fontSize:{xs:'12px', md:'14px'}}}>GUCCI INTENSE OUD EDP</Typography>
                     <Button sx={{fontSize:{xs:"12px", md:"16px"},textDecoration:'underline',color:'white',}}><strong>Shop Now</strong></Button>

                  </Box>
                  </Box>
         
      </Box>

      
    </Box>
  )
}

export default NewArrival2
