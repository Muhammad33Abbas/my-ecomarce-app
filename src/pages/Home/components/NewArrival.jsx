import { Box, Container } from '@mui/material'
import React from 'react'
// import NewArrival1 from '../../NewArrival1'
// import NewArrival2 from '../../NewArrival2'
import NewArrival1 from "../../../components/common/NewArrival1"
import NewArrival2 from "../../../components/common/NewArrival2"

const NewArrival = () => {
  return (
    <Container>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:{xs:'column', md:'row'}, gap:{xs:2, md:4}}}>
    <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, gap:{xs:2, md:4}, width:'100%'}}>
        <NewArrival1/>
        <NewArrival2/>
      
    </Box>
    </Box>
    </Container>
  )
}

export default NewArrival
