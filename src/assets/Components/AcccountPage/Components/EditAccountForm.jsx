import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const inputStyle = {
  bgcolor: "#F5F5F5",
  borderRadius: 1,
};

const ProfileForm = () => {
  return (
    // <Container >
      <Paper
         elevation={3}
        sx={{
          width: "870px",
          height: "630px",
          p: 4,
        }}
      >
        <Typography variant="h6" sx={{ color: "#DB4444", mb: 3 }}>
          Edit Your Profile
        </Typography>

        <Box component="form">
          {/* Name Row */}
          <Grid container spacing={3} sx={{width:{md:'710px',xs:'100%'}}}>
            <Grid size={{md:6,xs:12}}>
              <TextField
                fullWidth
                label="First Name"
                defaultValue="Md"
                variant="outlined"
                sx={inputStyle}
              />
            </Grid>
            <Grid size={{md:6,xs:12}}>
              <TextField
                fullWidth
                label="Last Name"
                defaultValue="Rimel"
                variant="outlined"
                sx={inputStyle}
              />
            </Grid>
          </Grid>

        
          <Grid container spacing={3} sx={{ mt: 1 ,width:{md:'710px',xs:'100%'},paddingTop:2}}>
            <Grid size={{md:6,xs:12}}>
              <TextField
                fullWidth
                label="Email"
                defaultValue="rimel1111@gmail.com"
                sx={inputStyle}
              />
            </Grid>
            <Grid size={{md:6,xs:12}}>
              <TextField
                fullWidth
                label="Address"
                defaultValue="Kingston, 5236, United State"
                sx={inputStyle}
              />
            </Grid>
          </Grid>

          <Typography sx={{ mt: 4, mb: 2, fontWeight: 500 }}>
            Password Changes
          </Typography>

          <Grid container spacing={3}  sx={{width:{md:'710px',xs:'100%'}}}>
            <Grid size={12}>
              <TextField
                fullWidth
                type="password"
                label="Current Password"
                sx={inputStyle}
              />
            </Grid>

            <Grid size={12}>
              <TextField
                fullWidth
                type="password"
                label="New Password"
                sx={inputStyle}
              />
            </Grid>

            {/* FULL WIDTH LAST FIELD */}
            <Grid size={12}>
              <TextField
                fullWidth
                type="password"
                label="Confirm New Password"
                sx={inputStyle}
              />
            </Grid>
          </Grid>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 6,
              width:{md:'710px',xs:'100%'}
            }}
          >
            <Button variant="text" sx={{ color: "black" }}>
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#DB4444",
                px: 4,
                "&:hover": { bgcolor: "#c53b3b" },
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Paper>
    // </Container>
  );
};

export default ProfileForm;
