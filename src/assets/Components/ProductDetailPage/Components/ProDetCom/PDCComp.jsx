import { Box } from '@mui/material'
import React from 'react'
import PDC1 from './PDC1'
import PDC2 from './PDC2'
import PDC3 from './PDC3'
// import PDC1 from './assets/Components/ProductDetailPage/Components/ProDetCom/PDC1'
// import PDC2 from './assets/Components/ProductDetailPage/Components/ProDetCom/PDC2'

const PDCComp = () => {
  return (
    <Box sx={{display:'flex', gap:'10px', flexWrap:'wrap-reverse'}}>
        <PDC1/>
        <PDC2/>
        <PDC3/>
      
    </Box>
  )
}

export default PDCComp
