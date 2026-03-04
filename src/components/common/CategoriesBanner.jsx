import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const CategoriesBanner = () => {
  return (
    <Container sx={{ py: { xs: 4, md: 8 } }}>
      <Box
        sx={{
          color: "white",
          bgcolor: "black",
          border: "1px solid black",
          borderRadius: 2,
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 5, md: 2 },
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography sx={{ fontSize: "16px", color: "#00FF66" }}>
              Categories
            </Typography>

            <Typography sx={{ fontSize: { xs: "32px", md: "48px" }, fontWeight: 600 }}>
              Enhance Your
            </Typography>
            <Typography sx={{ fontSize: { xs: "32px", md: "48px" }, fontWeight: 600 }}>
              Music Experience
            </Typography>

            {/* TIMER */}
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: { xs: 1.5, sm: 2 },
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Days", value: "23" },
                { label: "Hours", value: "23" },
                { label: "Minutes", value: "05" },
                { label: "Seconds", value: "69" },
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    width: { xs: 55, sm: 62 },
                    height: { xs: 55, sm: 62 },
                    borderRadius: "50%",
                    bgcolor: "white",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ fontWeight: 600 }}>{item.value}</Typography>
                  <Typography sx={{ fontSize: "10px" }}>{item.label}</Typography>
                </Box>
              ))}
            </Box>

            <Button
              sx={{
                mt: 4,
                px: 4,
                py: 1.5,
                bgcolor: "#00FF66",
                color: "white",
                fontWeight: 600,
                "&:hover": { bgcolor: "#00cc52" },
              }}
            >
              Buy Now
            </Button>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", sm: "80%", md: "50%" },
              maxWidth: "600px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Glow Effect */}
            <Box
              sx={{
                position: "absolute",
                width: { xs: 250, sm: 350, md: 500 },
                height: { xs: 250, sm: 350, md: 500 },
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0) 70%)",
                filter: "blur(50px)",
                zIndex: 1,
              }}
            />

            <Box sx={{ position: "relative", zIndex: 2 }}>
              <img
                src="/Images/Radio img.svg"
                alt="Radio"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CategoriesBanner;
