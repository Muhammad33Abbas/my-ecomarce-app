import { Box, Container } from '@mui/material'
import React from 'react'
import SubTitle from '../../../components/common/SubTitle'
import CButton from '../../../components/common/CButton'
import WishListCard from './WishLIstCard'
import VisibilityIcon from '@mui/icons-material/Visibility';


const data  = [
  {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: "HElleeOAd", Pprice: 10, ActualPrice :"120$", Reviews: "(29)", icon: <VisibilityIcon/>},
  {Discount: "", Pimg:"  /Images/Frame 611.svg", Pname: "HElleeOAd", Pprice: 10, ActualPrice :"120$", Reviews: "(29)", icon: <VisibilityIcon/>},
  {Discount: "New", Pimg:"  /Images/Frame 611.svg", Pname: "HElleeOAd", Pprice: 10, ActualPrice :"120$", Reviews: "(29)", icon: <VisibilityIcon/>},
  {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: " HAVIT HV-G92 Gamepad", Pprice: 10, ActualPrice :"120$", Reviews: "(29)", icon: <VisibilityIcon/>},
]

const PrevCard = () => {
  return (
    <>

    <Box sx={{display:'flex', justifyContent:'space-between'}}>
      
      <SubTitle
      title={"just for you"}
    />
    <CButton
    Bname={"see all"}/>
   
    </Box>

      <Box  sx={{paddingTop:"100px",display:{md:'flex', lg:'flex', xs:'block'}, gap:3 }}>
      {data.map(( item , i) => (
      <WishListCard
      key={i}
       Pimg={item.Pimg}
       Pname={item.Pname}
       Pprice={item.Pprice}
       BadgeColor={item.BadgeColor}
       ActualPrice={item.ActualPrice}
       Discount={item.Discount}
       icon={item.icon}
       
      
        />
      
      ))}
        </Box>
     </>
  )
}

export default PrevCard
