// src/Layout.jsx
import React from "react";
import Navbar from "./assets/Components/Navbar/Navbar";
import Footer from "./assets/Components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
