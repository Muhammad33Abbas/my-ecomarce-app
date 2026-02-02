import React from 'react'
import LogoCard from '../../Common Components/LogoCard'
import { Box, Container } from '@mui/material'
import SubTitle from '../../Common Components/SubTitle'
import MIcon from '../../Common Components/MIcon'
import CButton from '../../Common Components/CButton'

const data = [
  {Pname : "Mobile", img : "/public/Icons/Category-CellPhone.svg"},
  {Pname : "Computer", img : "/public/Icons/Computer.svg"},
  {Pname : "Smart Watch", img : "/public/Icons/SmartWatch.svg"},
  {Pname : "Camera", img : "/public/Icons/Camera.svg"},
  {Pname : "HeadPhone", img : "/public/Icons/HeadPhone.svg"},
  {Pname : "Game Pad", img : "/public/Icons/Gamepad.svg"},
]

const BrowseByCatigories = () => {

  return (
    <Container sx={{paddingTop:'100px'}}>
      <Box sx={{display:'flex',flexDirection:'column', gap:5}}>
      <Box  sx={{display:'flex', justifyContent:'space-between'}}>
    <SubTitle 
    title={"Categories"}
    HeaderName={"Browse By Categories"}
    />
    <MIcon/>
    </Box>

   
    <Box sx={{display:'flex',gap:4 , alignItems:'center', justifyContent:'center', flexWrap:{lg:'nowrap',md:'wrap', xs:'wrap'} }}>
        {data.map((item,i) => (
         <LogoCard 
         key={i} 
        
         Pname={item.Pname}
         img={item.img}/>
             ))}
      
    </Box>
    <Box sx={{display:'flex', justifyContent:'center'}}>
    <CButton
     
        width={"236px"}
        height={"56px"}
        bgcolor={"#DB4444"}
        color={"white"}
        Bname={"View All Categories"}/>
    </Box>
    </Box>
</Container>
  )
}

export default BrowseByCatigories
