import { Box, Container } from '@mui/material'
import React, { useContext } from 'react'
import WishListCard from './Components/WishLIstCard'

import PrevCard from './Components/PrevCard';
import { CardContext } from '../../Context/Context';
import Title from './Components/Title';
// import { Title } from '@mui/icons-material';

// const data  = [
//   {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: "HElleeOAd", Pprice: 10, ActualPrice :"120$", Reviews: "(29)", icon: <DeleteOutlineIcon/>},
//   {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: "HElleeOAd", Pprice: 10, ActualPrice :"120$", Reviews: "(29)", icon: <DeleteOutlineIcon/>},
//   {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: "HElleeOAd", Pprice: 10, ActualPrice :"120$", Reviews: "(29)", icon: <DeleteOutlineIcon/>},
//   {Discount: "20%", Pimg:"  /Images/Frame 611.svg", Pname: " HAVIT HV-G92 Gamepad", Pprice: 10, ActualPrice :"120$", Reviews: "(29)", icon: <DeleteOutlineIcon/>},
// ]

const Wishlist = () => {
    const { WishCard } = useContext(CardContext);
    // console.log(SelectedCard);
    console.log(WishCard)

    
// const cardData = {
//   Pimg,
//   Pname,
//   Pprice,
//   quantity: 1
// };
  return (
    <Container>
      <Box sx={{paddingTop:'50px'}}>
      <Title/>
      </Box>
<Box
  sx={{
    paddingTop:'50px',
    display: "grid",
    gap: 2,
    gridTemplateColumns: {
      xs: "repeat(1, 1fr)", // 📱 Mobile → 1 card per row
      sm: "repeat(2, 1fr)", // 📱 Large phones / small tablets → 2 cards
      md: "repeat(3, 1fr)", // 💻 Tablets / small laptops → 3 cards
      lg: "repeat(4, 1fr)", // 🖥️ Desktop → 4 cards
    },
  }}
>
      {WishCard.map(( item ) => (
      <WishListCard
      key={item.id}
      id = {item.id}
       Pimg={item.Pimg}
       Pname={item.Pname}
       Pprice={item.Pprice}


      //  BadgeColor={item.BadgeColor}
      //  ActualPrice={item.ActualPrice}
      //  Discount={item.Discount}
      //  icon={item.icon}
      
        />
      
      ))}
        </Box>
        <PrevCard/>
      
    </Container>
  )
}

export default Wishlist
