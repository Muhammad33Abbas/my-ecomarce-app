import { Box, Button, Link, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
// import CButton from "./CButton";
import { Google } from "@mui/icons-material";
import {  Navigate, useNavigate } from 'react-router-dom'
// import {SignUpUser} from "../../../services/firebase/Auth.js"
import signUpUser from "../../services/firebase/Auth.js"








const SignUpPage2 = () => {

    const navigate = useNavigate();
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  const  HandleSignUp =  async () => {
       try  {
        await signUpUser(email,password);
        navigate("/home");

        console.log("you are succecfully sign Up");
       }
       catch(err) {
        console.log(err.message);
       }
  }
  

  

  return (
    <Box
      sx={{
        width: "371px",
        height: "530px",
        display: "flex",
        flexDirection: "column",
        textAlign:'center',  
        justifyContent:'center',
        gap: "48px",
      }}
    >
      <Box sx={{textAlign:'start' }}>
        <Typography sx={{ fontSize: "36px" }}>
          Create an Account
        </Typography>
        <Typography sx={{ fontSize: "16px", marginTop: "10px" }}>
          Enter your details below
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "40px", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <TextField fullWidth variant="standard" placeholder="Name" />
          <TextField
            fullWidth
            value={email}
            onChange={(e) => setemail(e.target.value)}
            variant="standard"
            placeholder="Email or Phone Number"
          />
          <TextField
            fullWidth
              value={password}
            onChange={(e) => setpassword(e.target.value)}
            variant="standard"
            placeholder="Password"
            type="password"
          />
        </Box>

        <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
         <Button onClick={HandleSignUp} fullWidth sx={{bgcolor:"#DB4444", color:"white",padding:'14px'}}>Create Account</Button>
         <Button startIcon={<Google/>} fullWidth sx={{ padding:'14px',color:'black',border:'1px solid black'}}>Sign Up with Google</Button>

        <Button onClick={() => navigate("/login")}
            // href="/login"
            sx={{ fontSize: "16px", marginTop: "10px", textAlign: "center", textDecoration:'none' ,color:'black'}}
          >
      Already have an account?    Log In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage2;
