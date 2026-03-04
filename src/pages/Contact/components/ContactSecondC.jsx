import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactSecondC = () => {
  return (
      <Paper
        elevation={3}
        sx={{
          width: {md:340, xs:'100%'},
          height: 457,
          p: {md:3, xs:1},
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 2,
        }}
      >
        
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                width: 40,
                height: 40,
                color: "white",
                bgcolor: "#DB4444",
              }}
            >
              <PhoneIcon />
            </Box>
            <Typography fontWeight={600}>Call To Us</Typography>
          </Box>

          <Typography fontSize={14}>
            We are available 24/7, 7 days a week.
          </Typography>
          <Typography fontSize={14}>Phone: +8801611112222</Typography>
        </Box>

      
        <Box sx={{ borderBottom: "1px solid #ddd", my: 2 }} />

      
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                width: 40,
                height: 40,
                color: "white",
                bgcolor: "#DB4444",
              }}
            >
              <EmailIcon />
            </Box>
            <Typography fontWeight={600}>Write To Us</Typography>
          </Box>

          <Typography fontSize={14}>
            Fill out our form and we will contact you within 24 hours.
          </Typography>
          <Typography fontSize={14}>
            Emails: customer@exclusive.com
          </Typography>
          <Typography fontSize={14}>
            Emails: support@exclusive.com
          </Typography>
        </Box>
      </Paper>
  );
};

export default ContactSecondC;
