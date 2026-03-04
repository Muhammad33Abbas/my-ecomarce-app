import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
// import Navbar from './assets/Components/Navbar/Navbar'
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const MainLayout = ({children}) => {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
