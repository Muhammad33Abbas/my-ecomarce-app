import { Box, Container } from '@mui/material'
import React from 'react'
import Card from '../../Common Components/Card'
import CButton from '../../Common Components/CButton'
import SubTitle from '../../Common Components/SubTitle'
// import { Subtitles } from '@mui/icons-material'


const newData = [
  {Discount: "", Pimg: "  /Images/EOP1.svg", Pname: "Breed Dry Dog Food", Pprice: 10, ActualPrice: "120$", Reviews: "(29)"},
  {Discount: "", Pimg: "  /Images/EOP2.svg", Pname: "CANON EOS DSLR Camera", Pprice: 10, ActualPrice: "120$", Reviews: "(29)"},
  {Discount: "", Pimg: "  /Images/EOP3.svg", Pname: "ASUS FHD Gaming Laptop", Pprice: 10, ActualPrice: "120$", Reviews: "(29)"},
  {Discount: "", Pimg: "  /Images/EOP4.svg", Pname: "Curology Product Set ", Pprice: 10, ActualPrice: "120$", Reviews: "(29)"},
];

const data = [
  {Discount: "New", Pimg: "  /Images/EOP5.svg", Pname: "Kids Electric Car", Pprice: 10, ActualPrice: "120$", Reviews: "(29)"},
  {Discount: "", Pimg: "  /Images/EOP6.svg", Pname: "Jr. Zoom Soccer Cleats", Pprice: 10, ActualPrice: "120$", Reviews: "(29)"},
  {Discount: "New", Pimg: "  /Images/EOP7.svg", Pname: "GP11 Shooter USB Gamepad", Pprice: 10, ActualPrice: "120$", Reviews: "(29)"},
  {Discount: "", Pimg: "  /Images/BSP3.svg", Pname: "Quilted Satin Jacket", Pprice: 10, ActualPrice: "120$", Reviews: "(29)"},
];



const ExploreOurProduct = () => {
  return (
    <Container>
        <Box sx={{display:'flex', flexDirection:'column', gap:7}}>
    <SubTitle 
    title={"Our Products"}
    HeaderName={"Explore Our Product"}
    />
       
                <Box  sx={{display:{md:'flex', lg:'flex', xs:'block'}, gap:3 }}>
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
          <Box  sx={{display:{md:'flex', lg:'flex', xs:'block'}, gap:3 }}>
             {data.map((item, z) => (
            <Card
            BadgeColor={"#00FF66"}
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
