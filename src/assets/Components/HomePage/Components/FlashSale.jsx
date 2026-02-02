import { Box, Container } from '@mui/material'
import React from 'react'
import SubTitle from '../../Common Components/SubTitle'
import DIgitalTIme from '../../Common Components/DIgitalTIme'
import MIcon from '../../Common Components/MIcon'
import Card from '../../Common Components/Card'
import CButton from '../../Common Components/CButton'
// import CButton from './CButton'



const data  = [
  {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: "HAVIT HV-G92 Gamepad", Pprice: 10, ActualPrice :"120$", Reviews: "(29)"},
  {Discount: "20%", Pimg:"  /Images/flashsale1.svg", Pname: "AK-900 Wired Keyboard", Pprice: 10, ActualPrice :"120$", Reviews: "(29)"},
  {Discount: "20%", Pimg:"  /Images/flashsale2.svg", Pname: "IPS LCD Gaming Monitor", Pprice: 10, ActualPrice :"120$", Reviews: "(29)"},
  {Discount: "20%", Pimg:"  /Images/flashsale3.svg", Pname: " HAVIT HV-S-Series Comfort Chair  Gamepad", Pprice: 10, ActualPrice :"120$", Reviews: "(29)"},
]

   
             

const FlashSale = () => {
  return (
    <Container>
        <Box sx={{display:'flex', flexDirection:'column', gap:4, paddingTop:'80px'}}>
        <Box sx={{display:'flex', gap:10, justifyContent:'space-between',}}>
        <SubTitle
         title={"Today's"}
        HeaderName={"Flash Sales"}/>
        <DIgitalTIme/>

        <MIcon/>
        </Box>
        <Box sx={{display:{md:'flex', lg:'flex', xs:'block'}, gap:3 }}>
             {data.map((item,a) => (
            <Card
              BadgeColor={"#DB4444"}
            key={a}
            Discount={item.Discount}
            Pimg={item.Pimg}
            Pname={item.Pname}
            Pprice={item.Pprice}
            ActualPrice={item.ActualPrice}
            Reviews={item.Reviews}
            />
            ))}
        </Box>
        <CButton
     
        width={"236px"}
        height={"56px"}
        bgcolor={"#DB4444"}
        color={"white"}
        Bname={"View All Products"}/>
        </Box>
      
    </Container>
  )
}

export default FlashSale
