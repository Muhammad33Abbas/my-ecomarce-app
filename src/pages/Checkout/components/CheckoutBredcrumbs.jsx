import { Box, Breadcrumbs, Container, Typography, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const CheckoutBredcrumbs = () => {
  return (
    <Container>
      <Box sx={{ height: "100px", pt: "50px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          
          <Link
            component={RouterLink}
            to="/home"
            underline="hover"
            color="inherit"
          >
            Account
          </Link>

          <Link
            component={RouterLink}
            to="/cart"
            underline="hover"
            color="inherit"
          >
            My Account
          </Link>

          {/* Current page (no link) */}
          
           <Link
            component={RouterLink}
            to="/cart"
            underline="hover"
            color="inherit"
          >
            Product
          </Link>

           <Link
            component={RouterLink}
            to="/cart"
            underline="hover"
            color="inherit"
          >
            View Cart
          </Link>

           <Link
            component={RouterLink}
            to="/CheckOutPage"
            underline="hover"
            color="inherit"
          >
            CheckOut
          </Link>

        </Breadcrumbs>
      </Box>
    </Container>
  );
};

export default CheckoutBredcrumbs;
