import { Box, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const data = [
    { img: "/Images/AboutPage 3.svg", name:"Habib Ullah", profession: "Founder & Chairman" },
    { img: "/Images/AboutPage 4.svg", name:"Emma Wetson", profession: "Managing Director" },
    { img: "/Images/AboutPage 5.svg", name:"Najeeb Ullah", profession: "Web Developer" },
]

const AboutCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',          
        gap: { xs: 2, md: 4 },     
        justifyContent: 'center',  
        px: { xs: 2, md: 0 },      
      }}
    >
      {data.map(({name, profession, img}, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: { xs: '100%', sm: '300px', md: '370px' },  
            border: '1px solid black',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
        
          <Box
            sx={{
              width: '100%',
              height: { xs: '250px', md: '430px' },
              bgcolor: '#F5F5F5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={img} alt={name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
            <Typography sx={{ fontSize: '24px', fontWeight: 500 }}>{name}</Typography>
            <Typography sx={{ color: 'gray' }}>{profession}</Typography>

            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <TwitterIcon />
              <InstagramIcon />
              <img src="/Icons/Linkdin Icon.svg" alt="LinkedIn" style={{ width: 24, height: 24 }} />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default AboutCard
