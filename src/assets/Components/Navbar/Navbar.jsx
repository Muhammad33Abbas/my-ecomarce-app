import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { CardContext } from "../../Context/Context";
import { useContext } from "react";
import { useState } from "react";

const pages = [
  { name: "Home", path: "/home" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Signup", path: "/signup" },
];
const settings = [
  { name: "Manage My Account", path: "/accountpage" },
  { name: "My Order", path: "/cart" },
  { name: "My Cancellation", path: "/account/cancellations" },
  { name: "My Reviews", path: "/account/reviews" },
  { name: "Logout", path: "/logout" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const [showvalue, setshowvalue] = useState(10);


  const { WishCard ,SelectedCard } = useContext(CardContext);
  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT: Mobile Menu + Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={(e) => setAnchorElNav(e.currentTarget)}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>

            <Typography
              variant="h6"
              sx={{
                textAlign: { sm: "center", md: "normal" },
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "black",
              }}
            >
              Exclusive
            </Typography>
          </Box>

          {/* CENTER: Desktop Pages */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{ color: "black", textTransform: "none" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* RIGHT: Search + Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Search (Desktop only) */}
            <TextField
              size="small"
              placeholder="Search..."
              sx={{
                display: { xs: "none", md: "block" },
                width: 220,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

         
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <IconButton onClick={() => navigate("/wishlist")}>
                <Badge badgeContent={WishCard.length} color="error">
                  <FavoriteBorderIcon
                    sx={{ fontSize: 28, cursor: "pointer" }}
                  />
                </Badge>
              </IconButton>
              {/* <IconButton>
  <Badge badgeContent={wishCount} color="secondary">
    <FavoriteBorderIcon />
  </Badge>
</IconButton> */}

              <IconButton onClick={() => navigate("/cart")} >
                <Badge badgeContent={SelectedCard.length}  color="error">
                  <AddShoppingCartIcon
                
                    sx={{ cursor: "pointer", color: "black" 
                      , 
                    }}
                    
                  />
                </Badge>
              </IconButton>
            </Box>

            {/* Avatar */}
            <Tooltip title="Account">
              <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)}>
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.name}
                  to={setting.path}
                  component={Link}
                  onClick={() => setAnchorElUser(null)}
                >
                  {setting.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>

        {/* MOBILE MENU */}
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={() => setAnchorElNav(null)}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.name}
              component={Link}
              to={page.path}
              onClick={() => setAnchorElNav(null)}
            >
              {page.name}
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
