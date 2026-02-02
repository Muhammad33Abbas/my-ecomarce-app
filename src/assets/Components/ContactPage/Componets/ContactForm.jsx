import { Box, Button, Container, Paper, TextField } from "@mui/material";
import React from "react";

const ContactForm = () => {
  return (
    <Container>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: { md: "nowrap", xs: "wrap" },
          gap: { md: 0, xs: 4 },
          width: { md: "800px", xs: "100%" },
          height: { md: "457px", xs: "100%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, md: 2 },
            marginTop:{md:3, xs:10}
          }}
        >
          <TextField placeholder="Your Name" sx={{ bgcolor: "#F5F5F5" }} />
          <TextField placeholder="Your Email" sx={{ bgcolor: "#F5F5F5" }} />
          <TextField placeholder="Your Phone" sx={{ bgcolor: "#F5F5F5" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ margin: "38px", bgcolor: "#F5F5F5" }}
            multiline
            rows={8}
            placeholder="Your Message"
            fullWidth
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: { md: 0, xs: 10 },
            marginRight: { md: "30px", xs: "25%" },
          }}
        >
          <Button
            sx={{
              bgcolor: "#DB4444",
              color: "white",
              padding: { md: "14px 20px", xs: "5px" },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactForm;
