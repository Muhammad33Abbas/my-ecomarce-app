import { Box, Container } from '@mui/material'
import React from 'react'
import ContactFirstC from './components/ContactFirstCard'
import ContactSecondC from './components/ContactSecondC'
import ContactForm from './components/ContactForm'
import MainLayout from '../../layout/MainLayout'

const ContactPage = () => {
  return (
    <MainLayout>
      <Container maxWidth="lg">
        <Box sx={{ pb: 10 }}>
          <ContactFirstC />
          <Box sx={{ 
            display: 'flex', 
            gap: 4, 
            marginTop: '50px', 
            flexDirection: { md: 'row', xs: 'column' },
            alignItems: 'stretch'
          }}>
            <Box sx={{ flexShrink: 0 }}>
              <ContactSecondC />
            </Box>
            <Box sx={{ flexGrow: 1, maxWidth: { md: "800px", xs: "100%" } }}>
              <ContactForm />
            </Box>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  )
}

export default ContactPage
