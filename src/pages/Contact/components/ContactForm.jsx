import { Box, Button, Paper, TextField } from "@mui/material";
import React from "react";

const ContactForm = () => {
  return (
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          height: { md: "457px", xs: "100%" },
          p: {md: 4, xs: 1},
          borderRadius: 2,
        }}
        elevation={3}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            gap: 2,
          }}
        >
          <TextField placeholder="Your Name" sx={{ bgcolor: "#F5F5F5", flex: 1 }} />
          <TextField placeholder="Your Email" sx={{ bgcolor: "#F5F5F5", flex: 1 }} />
          <TextField placeholder="Your Phone" sx={{ bgcolor: "#F5F5F5", flex: 1 }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
          }}
        >
          <TextField
            sx={{ bgcolor: "#F5F5F5" }}
            multiline
            rows={12}
            placeholder="Your Message"
            fullWidth
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: {md:"flex-end", xs:"center"},
          }}
        >
          <Button
            sx={{
              bgcolor: "#DB4444",
              color: "white",
              padding: "16px 48px",
              '&:hover': { bgcolor: "#E07575" }
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
  );
};

export default ContactForm;
