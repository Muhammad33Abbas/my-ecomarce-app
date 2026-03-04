import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const SecondComponent = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
     
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
             
              width: { xs: "100%", md: "525px" },
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "32px", md: "54px" }, fontWeight: "bold" }}
            >
              Our Story
            </Typography>

            <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, color: "text.secondary" }}>
              Launched in 2015, Exclusive is South Asia’s premier online shopping
              marketplace with an active presence in Bangladesh. Supported by
              a wide range of tailored marketing, data, and service solutions,
              Exclusive has 10,500 sellers and 300 brands and serves 3 million
              customers across the region.
            </Typography>

            <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, color: "text.secondary" }}>
              Exclusive has more than 1 million products to offer, growing very fast.
              Exclusive offers a diverse assortment in categories ranging from consumer products to electronics.
            </Typography>
          </Box>
        </Grid>

       
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/Images/AboutPage 1.svg"
            alt="Our Story Image"
            sx={{
              width: { xs: "100%", md: "525px" },
              height: "auto",
              display: "block",
              mx: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecondComponent;
