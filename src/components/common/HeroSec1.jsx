import { Box, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
const data = [
  { id: 1, title: "Women's Fashion", icon: "/Icons/Vector.svg" },
  { id: 2, title: "Men's Fashion", icon: "/Icons/Vector.svg" },
  { id: 3, title: "Electronics Fashion" },
  { id: 4, title: "Medicine" },
  { id: 5, title: "Sports & Outdoor" },
  { id: 6, title: "Baby's and Toys" },
  { id: 7, title: "Groceries & Pets" },
  { id: 8, title: "Health & Beauty" }
];


const HeroSec1 = () => {
  return (
    <Box sx={{ width: '217px', height: '344px' }}>
      {data.map(({ id, title, icon }) => (
        <ListItemButton
          key={id}
          component="a"
          href="#simple-list"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <ListItemText
            primary={title}
            sx={{ fontSize: '16px', width:'217px' }}
          />

          {icon && <img src={icon} alt="" />}
        </ListItemButton>
      ))}
    </Box>
  );
};


export default HeroSec1;
