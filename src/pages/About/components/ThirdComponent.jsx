import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const data  = [
    {img: "/Images/AboutPage 2.svg", price:"45.3k",HeaderName:"Sallers active our site"},
    {img: "/Images/AboutPage 2.svg", price:"45.3k",HeaderName:"Sallers active our site"},
    {img: "/Images/AboutPage 2.svg", price:"45.3k",HeaderName:"Sallers active our site"},
    {img: "/Images/AboutPage 2.svg", price:"45.3k",HeaderName:"Sallers active our site"}
]

const ThirdComponent = () => {
  return (
    <Container>
        <Box sx={{display:'flex',gap:'30px' ,
            //    display: 'flex',
        flexWrap: {md:'nowrap',xs:'wrap'},          
        // gap: { xs: 2, md: 4 },     
        justifyContent: 'center',  
        px: { xs: 2, md: 0 }, 
        }}> 
  {data.map((item, i) => (
  <Box
    key={i}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: "270px",
      height: "230px",
      border: "1px solid #ddd",
      borderRadius: "6px",
      transition: "all 0.3s ease",
      cursor: "pointer",

      "&:hover": {
        borderColor: "#0909c7",
        bgcolor:"#DB4444",
        boxShadow: "0 4px 12px rgba(219, 68, 68, 0.25)",
        transform: "translateY(-4px)",
      },
    }}
  >
    <img src={item.img} alt="" />

    <Typography sx={{ fontSize: "32px" }}>
      <strong>{item.price}</strong>
    </Typography>

    <Typography>{item.HeaderName}</Typography>
  </Box>
))}
    </Box>
    </Container>
  )
}

export default ThirdComponent
