import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, TextField } from '@mui/material';

const Footer = () => {

  return (
    
    <Box sx={{ marginTop:'100px', display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap' ,padding:4, color:'white', bgcolor:'black' }}>
      <Grid container spacing={2} sx={{padding:'10px',}}>
        <Grid size={{md:2, xs : 12}} border={"1px solid black"}>
         <Link sx={{cursor:'pointer', listStyle:'none', fontSize:'21px'}}>Exclusive</Link>
         <Typography sx={{paddingTop:'10px', paddingBottom:'10px'}}>Subscribe</Typography>
         <Typography sx={{paddingTop:'25px', paddingBottom:'2px', fontSize:'12px'}}>Get 10% off Your first order</Typography>
         <TextField sx={{
          border:'1px solid black',
          paddingTop:'5px',
        '& .MuiInputBase-input::placeholder': { // Target the input base's placeholder
          color: 'gray',
          opacity: 1, // Ensures full color visibility in Firefox
          // border:'1px solid white'
        },
      }}  placeholder="Enter your email" variant="outlined" size="small"   />
        </Grid>

        <Grid size={{md:2, xs : 12}} border={"1px solid black"}>
          <Typography sx={{fontSize:'21px'}}>Support</Typography>
          <Typography sx={{paddingTop:'10px'}}>111 Bioey Sarani, Dhaka,</Typography>
          <Typography>DH 1515, Pakistan</Typography>
          <Typography sx={{paddingTop:'10px', paddingBottom:'10px'}}>exclusive@gmail.com</Typography>
          <Typography >+88015-55555-999</Typography>
        </Grid>
        <Grid size={{md:2, xs : 12}} border={"1px solid black"}>
          <Typography sx={{fontSize:'21px'}}>Account</Typography>
        <Box sx={{paddingTop:'10px', paddingBottom:'5px'}}> <a >My Account</a></Box> 
        <Box sx={{ paddingBottom:'5px'}}> <a>Login / Register</a></Box> 
         <Box sx={{ paddingBottom:'5px'}}> <a>Cart</a> </Box>
          <Box sx={{ paddingBottom:'5px'}}><a>WishList</a> </Box>
         <Box > <a>Shop</a> </Box>
        </Grid>
        <Grid size={{md:2, xs : 12}}   border={"1px solid black"}>
          <Typography sx={{fontSize:'25px'}}>Quick Link</Typography>
          <Typography sx={{paddingTop:'10px'}}>Privacy policy</Typography>
          <Typography>Terms Of Use</Typography>
          <Typography>FAQ</Typography>
          <Typography>Contact</Typography>
        </Grid>

         <Grid size={{md:3, xs : 12}}   border={"1px solid black"}>
          <Typography sx={{fontSize:'21px'}}>Download App</Typography>
       
            <Grid container> 
                <Grid  size={{md:12, xs:12}}>
                <Typography sx={{fontSize:'12px', paddingTop:'10px', color:'gray'}}>save 3$ with App New User Only</Typography>
                </Grid>
                <Grid size= {{md:4, xs:6}}>
                     <Box sx={{paddingLeft:'5px'}} component={'img'} src='/Icons/Qrcode 1.svg'></Box>
                     </Grid>
                <Grid size={{md:7, xs:6}} >
                    <Box component={'img'} src = '/Icons/AppStore.svg'></Box>
                    <Box component={'img'} src = '/Icons/GooglePlay.svg'></Box>
                  
                </Grid>

            </Grid>
          
          
        </Grid>
      </Grid>
    </Box>
  );
}

  

export default Footer;
