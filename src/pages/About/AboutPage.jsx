import { Box } from '@mui/material'
import React from 'react'
// import breadcrumbs from './components/FirstC'
import FirstC from './components/FirstC'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import AboutCard from './components/AboutCard'
// import Features from '../Common Components/Features'

import MainLayout from '../../layout/MainLayout'
import Features from '../../components/common/Features'

const AboutPage = () => {
  return (
     <MainLayout>
    <Box sx={{display:'flex', flexDirection:'column', gap:"20px"}}>
   
         <FirstC/>
         <SecondComponent/>
         <ThirdComponent/>
         <AboutCard/>
            <Features/> 
    </Box>
    </MainLayout>
  )
}

export default AboutPage
