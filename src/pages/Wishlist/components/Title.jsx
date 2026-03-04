import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const Title = () => {
  return (
    <Container>
    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Typography> WishList</Typography>
        <Button>Move All to Tag</Button>
      
    </Box>
    </Container>
  )
}

export default Title
