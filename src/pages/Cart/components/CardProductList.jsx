import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import CButton from "../../../components/common/CButton";
import { CardContext } from "../../../context/Context";
import { useNavigate } from "react-router-dom";



const CardProductList = () => {


  const navigate = useNavigate();
  const [qty, setQty] = useState({});
  const { SelectedCard } = useContext(CardContext);

    const cartSubtotal = SelectedCard.reduce((total, item, index) => {
  const quantity = qty[index] || 1;
  return total + item.Pprice * quantity;
}, 0);


  const increase = (index) => {
    setQty((prev) => ({
      ...prev,
      [index]: (prev[index] || 1) + 1,
    }));
  };

  const decrease = (index) => {
    setQty((prev) => ({
      ...prev,
      [index]: Math.max((prev[index] || 1) - 1, 1),
    }));
  };

  const handleChange = (e, index) => {
    const value = Math.max(Number(e.target.value), 1);
    setQty((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  return (
    // <Container maxWidth="lg">
      <Box sx={{ width: "100%", mt: 4 }}>
       
        <Box
          sx={{
            display:{md:'flex', xs:'none'},
            justifyContent: "space-between",
            fontWeight: "bold",
            mb: 2,
           
          }}
        >
          <Typography>Product</Typography>
          <Typography>Price</Typography>
          <Typography>Quantity</Typography>
          <Typography>SubTotal</Typography>
        </Box>

       
        {SelectedCard.map((item, index) => {
        
          const quantity = qty[index] || 1;
          const subtotal = item.Pprice * quantity;

          return (
              // <Paper>
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                mb: 3,
                p: 2,
                border: "1px solid #ddd",
                borderRadius: 2,
                gap: { xs: 1, sm: 2 },
              }}
            >
           
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: { xs: "100%", sm: "30%" },
                }}
              >
                <img
                  src={item.Pimg}
                  width="50"
                  height="50"
                  style={{ objectFit: "contain" }}
                />
                <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
                  {item.Pname}
                </Typography>
              </Box>

              
              <Typography sx={{ width: { xs: "100%", sm: "15%" }, fontSize: { xs: 14, sm: 16 } }}>
                {item.Pprice}$
              </Typography>

           
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: { xs: "100%", sm: "20%" },
                }}
              >
                <button onClick={() => decrease(index)}>-</button>
                <TextField
                  type="number"
                  value={quantity}
                  size="small"
                  onChange={(e) => handleChange(e, index)}
                  inputProps={{
                    min: 1,
                    style: { textAlign: "center", width: "50px" },
                  }}
                />
                <button onClick={() => increase(index)}>+</button>
              </Box>

          
              <Typography sx={{ width: { xs: "100%", sm: "15%" }, fontSize: { xs: 14, sm: 16 } }}>
                {subtotal}$
              </Typography>
            </Box>
          
          );
          
        })}

      
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            mt: 3,
            gap: 2,
          }}
        >
          <CButton
            bgcolor="white"
            width="100%"
            sm={{ width: "218px" }}
            height="56px"
            color="black"
            Bname="Return To Shop"
          />
          <CButton
            bgcolor="white"
            width="100%"
            sm={{ width: "195px" }}
            height="56px"
            color="black"
            Bname="Update Cart"
          />
        </Box>

        


{/* 2nd Part */}
<Box sx={{paddingTop:'70px', display:'flex', justifyContent:'space-between', }}>
        <Box sx={{width:'427px', height:'56px', display:{md:"flex", xs:'none'}, justifyContent:'space-between'}}>
          <TextField
          placeholder="Coupon Code"></TextField>
          <Button variant="contained" sx={{bgcolor:'#DB4444'}}>Apply Coupon</Button>
        </Box>
        <Box sx={{width:'470px', height:'324px',border:'2px solid black',

        }}>
          <Container spacing={3}
          sx={{display:'flex', flexDirection:'column', gap:2, paddingTop:'20px'}}>
          <Typography sx={{fontSize:'20px'}}><strong>Cart Total</strong></Typography>
          <Box sx={{display:'flex', justifyContent:'space-between', paddingTop:'20PX'}}>
            <Typography>Sub Total : </Typography>
            <Typography> {cartSubtotal}$</Typography>
          </Box>
          <hr />
           <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography>Shiping </Typography>
            <Typography> free</Typography>
          </Box>
          <hr />
           <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography>Total Amount </Typography>
            <Typography> {cartSubtotal}$</Typography>
          </Box>
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <Button onClick={() => navigate('/CheckOutPage')}
           variant="contained" sx={{bgcolor:'#DB4444', width:"260px",height:'56px'}}>process to checkout</Button>
          </Box>
           </Container>
        </Box>
   



        </Box>




      </Box>
    // </Container>
  );
};

export default CardProductList;
