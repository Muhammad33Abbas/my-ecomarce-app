import { Box } from '@mui/material'
import React from 'react'
import breadcrumbs from './Components/FirstC'
import FirstC from './Components/FirstC'
import SecondComponent from './Components/SecondComponent'
import ThirdComponent from './Components/ThirdComponent'
import AboutCard from './Components/AboutCard'
import Features from '../Common Components/Features'
const AboutPage = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', gap:"20px"}}>
       
         <FirstC/>
         <SecondComponent/>
         <ThirdComponent/>
         <AboutCard/>
            <Features/>
        
      
    </Box>
  )
}

export default AboutPage
