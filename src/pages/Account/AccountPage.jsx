import { Box, Container } from '@mui/material'
import React from 'react'
// import EditAccountForm from './components/EditAccountForm'
import ProfileForm from './components/EditAccountForm'
import AccountBredcrumbs from './components/AccountBredcrumbs'
import AccountSidebar from './components/AccountSidebar'
import MainLayout from '../../layout/MainLayout'

const AccountPage = () => {
  return (
  <MainLayout>
      <Container>
        <AccountBredcrumbs/>
        <Box sx={{paddingTop:'30px',display:'flex', alignItems:'start',justifyContent:'space-between',gap:10 }}>
              <AccountSidebar/>
        <ProfileForm/>
      
        </Box>
    </Container>
  </MainLayout>

   
  )
}

export default AccountPage
