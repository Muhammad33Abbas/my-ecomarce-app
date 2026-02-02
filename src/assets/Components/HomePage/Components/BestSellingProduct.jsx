import React from 'react'
import SubTitle from '../../Common Components/SubTitle'
import { Box, Container } from '@mui/material'
import CButton from '../../Common Components/CButton'
import Card from '../../Common Components/Card'



const data  = [
  {Discount: "", Pimg:"  /Images/BSP1.svg", Pname: "The north coat",Pprice:10,ActualPrice :"120$", Reviews: "(29)"},
  {Discount: "", Pimg:"  /Images/BSP2.svg", Pname: "Gucci duffle bag",Pprice:10,ActualPrice :"120$", Reviews: "(9)"},
  {Discount: "", Pimg:"  /Images/BSP3.svg", Pname: "RGB liquid CPU Cooler",Pprice:19,ActualPrice :"120$", Reviews: "(29)"},
  {Discount: "", Pimg:"  /Images/BSP4.svg", Pname: " Small BookSelf",Pprice:10,ActualPrice :"120$", Reviews: "(29)"},


]

const BestSellingProduct = () => {
  return (
    <Container>
        <Box sx={{paddingTop:'100px', display:'flex',flexDirection:'column', gap:5}}>
    <Box sx={{display:'flex', justifyContent:'space-between', }}>
        <Box>
        <SubTitle
        title={"This Month"}
        HeaderName={"Best Selling Product"}
        />
        </Box>
        <Box paddingTop={"50px"}>
            <CButton
            // bgcolor,color, Bname, width, height
            color={"white"}
            bgcolor={"#DB4444"}
            width={"159px"}
            Bname={"View All"}
            height={"56px"}/>
        </Box>
      
    </Box>
    <Box  sx={{display:{md:'flex', lg:'flex', xs:'block'}, gap:3 }}>
        {data.map((item , a) => (
            <Card
              BadgeColor={"#00FF66"}
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

    </Box>
    </Container>
  )
}

export default BestSellingProduct
