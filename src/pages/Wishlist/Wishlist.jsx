import { Box, Button, Container } from '@mui/material'
import React, { useContext } from 'react'
import WishListCard from './components/WishListCard'

import PrevCard from './components/PrevCard';
import { CardContext } from '../../context/Context';
import Title from './components/Title';
import MainLayout from '../../layout/MainLayout';


const Wishlist = () => {
    const { WishCard } = useContext(CardContext);

    console.log(WishCard)

    

  return (
    <MainLayout>
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


     
      
        />
      
      ))}
        </Box>
        <PrevCard/>
      
    </Container>
    </MainLayout>
  )
}

export default Wishlist
