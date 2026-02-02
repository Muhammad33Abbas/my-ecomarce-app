import { Box, Container } from '@mui/material'
import React from 'react'
import HeroSec1 from '../../Common Components/HeroSec1'
import HeroSec2 from '../../Common Components/HeroSec2'


const HeroSection = () => {
  return (
    <Container sx={{paddingTop:{md:'30px',xs:'10px'},}}>
    <Box sx={{display:'flex', gap:10,  width:'100%', flexWrap:{xs:'wrap-reverse',md:'nowrap'}}}>
        <HeroSec1/>
        <HeroSec2/>
      
    </Box>

    </Container>
  )
}

export default HeroSection
