import { Box, Container } from '@mui/material'
import React from 'react'
import Card from '../../Card'
import CButton from '../../CButton'
import SubTitle from '../../SubTitle'
// import { Subtitles } from '@mui/icons-material'


const newData  = [
  {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: "HElleeOAd",Pprice:"10$",ActualPrice :"120$", Reviews: "(29)"},
  {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: "HElleeOAd",Pprice:"10$",ActualPrice :"120$", Reviews: "(29)"},
  {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: "HElleeOAd",Pprice:"10$",ActualPrice :"120$", Reviews: "(29)"},
  {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: " HAVIT HV-G92 Gamepad",Pprice:"10$",ActualPrice :"120$", Reviews: "(29)"},

]
const data = [
     {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: "HElleeOAd",Pprice:"10$",ActualPrice :"120$", Reviews: "(29)"},
  {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: "HElleeOAd",Pprice:"10$",ActualPrice :"120$", Reviews: "(29)"},
  {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: "HElleeOAd",Pprice:"10$",ActualPrice :"120$", Reviews: "(29)"},
  {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: " HAVIT HV-G92 Gamepad",Pprice:"10$",ActualPrice :"120$", Reviews: "(29)"},
]


const ExploreOurProduct = () => {
  return (
    <Container>
        <Box sx={{display:'flex', flexDirection:'column', gap:7}}>
    <SubTitle 
    title={"Our Products"}
    HeaderName={"Explore Our Product"}
    />
       
                <Box sx={{display:'flex', flexWrap:'wrap', gap:2, justifyContent:'center'}}>
             {newData.map((item, z) => (
            <Card
            key={z}
            Discount={item.Discount}
            Pimg={item.Pimg}
            Pname={item.Pname}
            Pprice={item.Pprice}
            ActualPrice={item.ActualPrice}
            Reviews={item.Reviews}
            />
            ))}
        </Box>
          <Box sx={{display:'flex', flexWrap:'wrap', gap:2, justifyContent:'center', paddingTop:"30px"}}>
             {data.map((item, z) => (
            <Card
            key={z}
            Discount={item.Discount}
            Pimg={item.Pimg}
            Pname={item.Pname}
            Pprice={item.Pprice}
            ActualPrice={item.ActualPrice}
            Reviews={item.Reviews}
            />
            ))}
        </Box>
        <Box sx={{paddingTop:'30px'}}>
        <CButton
     
        width={"236px"}
        height={"56px"}
        bgcolor={"#DB4444"}
        color={"white"}
        Bname={"View All Products"}/>
        </Box>
    
        </Box>
        </Container>
      
    
  )
}

export default ExploreOurProduct
