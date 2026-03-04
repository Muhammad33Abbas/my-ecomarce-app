import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "#888",
  fontSize: "15px",
  marginTop: "8px",
  display: "block",
};

const activeStyle = {
  color: "#DB4444",
  fontWeight: 500,
};

const AccountSidebar = () => {
  return (
    <Box sx={{ width: "250px" }}>
      {/* Manage Account */}
      <Typography sx={{ fontWeight: 600, mb: 1 }}>
        Manage My Account
      </Typography>

      <Stack sx={{ mb: 3 }}>
        <NavLink
          to="/account/profile"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeStyle : {}),
          })}
        >
          My Profile
        </NavLink>

        <NavLink
          to="/account/address"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeStyle : {}),
          })}
        >
          Address Book
        </NavLink>

        <NavLink
          to="/account/payments"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeStyle : {}),
          })}
        >
          My Payment Options
        </NavLink>
      </Stack>

      {/* Orders */}
      <Typography sx={{ fontWeight: 600, mb: 1 }}>
        My Orders
      </Typography>

      <Stack sx={{ mb: 3 }}>
        <NavLink
          to="/account/returns"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeStyle : {}),
          })}
        >
          My Returns
        </NavLink>

        <NavLink
          to="/account/cancellations"
          style={({ isActive }) => ({
            ...linkStyle,
            ...(isActive ? activeStyle : {}),
          })}
        >
          My Cancellations
        </NavLink>
      </Stack>

      {/* Wishlist */}
      <Typography sx={{ fontWeight: 600, mb: 1 }}>
        My Wishlist
      </Typography>

      <NavLink
        to="/account/wishlist"
        style={({ isActive }) => ({
          ...linkStyle,
          ...(isActive ? activeStyle : {}),
        })}
      >
        View Wishlist
      </NavLink>
    </Box>
  );
};

export default AccountSidebar;
