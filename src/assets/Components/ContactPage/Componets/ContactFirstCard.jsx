import { Box, Breadcrumbs, Container, Typography, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const ContactFirstC = () => {
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
            Home
          </Link>

          <Link
            component={RouterLink}
            to="/contact"
            underline="hover"
            color="inherit"
          >
            Contact
          </Link>

          {/* Current page (no link) */}
          

        </Breadcrumbs>
      </Box>
    </Container>
  );
};

export default ContactFirstC;
