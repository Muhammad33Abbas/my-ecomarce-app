import { Box, Container } from '@mui/material'
import React from 'react'
// import ContactFirstCard from './Componets/ContactFirstCard'
import ContactFirstC from './Componets/ContactFirstCard'
import ContactSecondC from './Componets/ContactSecondC'
import ContactForm from './Componets/ContactForm'

const ContactPage = () => {
  return (
    <Container>
    <Box>
        <ContactFirstC/>
        <Box sx={{display:'flex',gap:4, marginTop:'50px', flexWrap:{md:'nowrap', xs:'wrap'}}}>
       
        <ContactSecondC/>
        <ContactForm/>
        </Box>
      
    </Box>
    </Container>
  )
}

export default ContactPage
