import { Box, Container } from '@mui/material'
import React from 'react'
// import EditAccountForm from './Components/EditAccountForm'
import ProfileForm from './Components/EditAccountForm'
import AccountBredcrumbs from './Components/AccountBredcrumbs'
import AccountSidebar from './Components/AccountSidebar'

const AccountPage = () => {
  return (
    <Container>
        <AccountBredcrumbs/>
        <Box sx={{paddingTop:'30px',display:'flex', alignItems:'start',justifyContent:'space-between',gap:10 }}>
              <AccountSidebar/>
        <ProfileForm/>
      
        </Box>
    </Container>
   
  )
}

export default AccountPage
