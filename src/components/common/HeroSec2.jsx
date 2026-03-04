import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const HeroSec2 = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          bgcolor: "black",
          px: { xs: 2, sm: 4, md: 0 },
          py: { xs: 3, md: 4 },
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "8px",
          gap: { xs: 3, md: 0 },
        }}
      >
        {/* LEFT CONTENT */}
        <Box
          sx={{
            color: "white",
            textAlign: { xs: "center", md: "left" },
            maxWidth: "420px",
             px: { xs: 2, sm: 4, md: 2 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 1,
              mb: 1,
            }}
          >
            <img
              src="/Icons/AppleLogo.svg"
              alt="Apple"
              style={{ width: 32, height: 38 }}
            />
            <Typography sx={{ fontSize: 14, color: "gray" }}>
              iPhone 14 Series
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "32px", md: "48px" },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Up to 10% off Voucher
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 1,
              px: 4,
              py: 1.2,
              fontSize: "14px",
              textTransform: "none",
            }}
          >
            Shop Now
          </Button>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            width: { xs: "100%", md: "100%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/Images/Iphone Img.svg"
            alt="iPhone"
            style={{
              width: "100%",
              maxWidth: "380px",
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSec2;
