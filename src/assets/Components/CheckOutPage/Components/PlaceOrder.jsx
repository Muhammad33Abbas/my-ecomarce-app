import { Box, Button, Container, FormControlLabel, Radio, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { CardContext } from "../../../Context/Context";

const PlaceOrder = () => {
  const { SelectedCard } = useContext(CardContext);
   const [qty, setQty] = useState({});
  const cartSubtotal = SelectedCard.reduce((total, item, index) => {
  const quantity = qty[index] || 1;
  return total + item.Pprice * quantity;
}, 0);


  return (
    <Container>
      
        <Box  sx={{ paddingTop:{md:0,xs:10},width: {md:"527px",xs:"100%"}, height: {md:"600px",xs:"100%"} }}>
            {SelectedCard.map((item, index) => (
          <Box
          key={index}
            sx={{
              width: "425px",
              height: "54px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <img src={item.Pimg} alt="" width={"54px"} height={"54px"} />
              <Typography>{item.Pname}</Typography>
            </Box>
            <Typography>{item.Pprice}$</Typography>
          </Box>
              ))}


          <Box sx={{paddingTop:2, marginTop:3,display:"flex", justifyContent:'space-between',  width: {md:"425px", xs:"100%"},
              height: {md:"54px",xs:"100%"}}}>
            <Typography>SubTotal</Typography>
            <Typography>{cartSubtotal}$</Typography>
          </Box>
          {/* <hr /> */}
          
          <Box sx={{paddingTop:2,marginTop:3,display:"flex", justifyContent:'space-between', width: {md:"425px", xs:"100%"},
              height: {md:"54px",xs:"100%"}}}>
            <Typography>Shipping</Typography>
            <Typography>Free</Typography>
          </Box>
          {/* <hr /> */}
          
          <Box sx={{paddingTop:2,marginTop:3,display:"flex", justifyContent:'space-between',  width: {md:"425px", xs:"100%"},
              height: {md:"54px",xs:"100%"},}}>
            <Typography>Total</Typography>
            <Typography>{cartSubtotal}$</Typography>
          </Box>

          <Box sx={{paddingTop:2,marginTop:3,display:'flex', justifyContent:'space-between',width: {md:"425px", xs:"100%"},
              height: {md:"54px",xs:"100%"},}}> 
              <FormControlLabel value="Bank" control={<Radio />} label="Bank" />
              <Box> 
                <img src="/Icons/Payment1.svg" alt="" />
                <img src="/Icons/Payment2.svg" alt="" />
                <img src="/Icons/Payment3.svg" alt="" />
                <img src="/Icons/Payment4.svg" alt="" />
              </Box>
          </Box>

          <FormControlLabel value="Cash On Delivery" control={<Radio />} label="Cash On delivery" />

           <Box sx={{marginTop:'10px',width:'427px', height:'56px', display:{md:"flex", xs:'none'}, justifyContent:'space-between'}}>
          <TextField
          placeholder="Coupon Code"></TextField>
          <Button variant="contained" sx={{bgcolor:'#DB4444'}}>Apply Coupon</Button>
        </Box>

        <Box sx={{marginTop:'15px'}}></Box>
         <Button variant="contained" sx={{bgcolor:'#DB4444', width:"190px", height:'56px', }}>Place Order</Button>

        </Box>
  
      
    </Container>
  );
};

export default PlaceOrder;
