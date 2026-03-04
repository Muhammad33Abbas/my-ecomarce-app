import { Box, Container } from '@mui/material'
import React from 'react'
import SubTitle from '../../../components/common/SubTitle'
import DIgitalTIme from '../../../components/common/DIgitalTIme'
import MIcon from '../../../components/common/MIcon'
import Card from '../../../components/common/Card'
import CButton from '../../../components/common/CButton'
import HeroSec1 from '../../../components/common/HeroSec1'
import HeroSec2 from '../../../components/common/HeroSec2'


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
