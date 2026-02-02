import React from 'react'
import {Container , Box, Typography } from '@mui/material'

const SubTitle = ({title, HeaderName}) => {
  return (
    <>
    <Box>
        <Box sx={{display:'flex', gap:2,}}>
            <Box sx={{width:'20px', height:'20px', bgcolor:'#DB4444'}}></Box>
            <Box sx={{fontWeight:'200px', fontSize:'16px', color:'#DB4444',paddingTop:1}}>{title}</Box>
        </Box>
        <Typography sx={{paddingTop:3, fontSize:'36px', fontWeight:600}}>{HeaderName}</Typography>
        </Box>
      
    </>
  )
}

export default SubTitle
