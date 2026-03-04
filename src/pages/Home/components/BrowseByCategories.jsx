import React from 'react'
import LogoCard from '../../../components/common/LogoCard'
import { Box, Container } from '@mui/material'
import SubTitle from '../../../components/common/SubTitle'
import MIcon from '../../../components/common/MIcon'
import CButton from '../../../components/common/CButton'

const data = [
  {Pname : "Mobile", img : "/Icons/Category-CellPhone.svg"},
  {Pname : "Computer", img : "/Icons/Computer.svg"},
  {Pname : "Smart Watch", img : "/Icons/SmartWatch.svg"},
  {Pname : "Camera", img : "/Icons/Camera.svg"},
  {Pname : "HeadPhone", img : "/Icons/HeadPhone.svg"},
  {Pname : "Game Pad", img : "/Icons/Gamepad.svg"},
]

const BrowseByCategories = () => {

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

export default BrowseByCategories
