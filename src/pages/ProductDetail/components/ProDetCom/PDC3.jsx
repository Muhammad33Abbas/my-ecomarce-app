import React, { useState } from "react";
import {
  Box,
  Typography,
  Rating,
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";

const PDC3 = () => {
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(2);

  const handleQty = (type) => {
    if (type === "inc") setQty((prev) => prev + 1);
    if (type === "dec" && qty > 1) setQty((prev) => prev - 1);
  };

  return (
    <Box sx={{ maxWidth: 420, fontFamily: "sans-serif" }}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold">
        Havic HV G-92 Gamepad
      </Typography>

      {/* Rating + Reviews + Stock */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
        <Rating value={4} readOnly size="small" />
        <Typography variant="body2" color="text.secondary">
          (150 Reviews)
        </Typography>
        <Typography variant="body2" color="green">
          | In Stock
        </Typography>
      </Box>

      {/* Price */}
      <Typography variant="h6" sx={{ mt: 1 }}>
        $192.00
      </Typography>

      {/* Description */}
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        PlayStation 5 Controller Skin high quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure
        sensitive.
      </Typography>

      <Box sx={{ borderBottom: "1px solid #ddd", my: 2 }} />

      {/* Colours */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography>Colours:</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box sx={{ width: 18, height: 18, bgcolor: "#A0BCE0", borderRadius: "50%", border: "2px solid black" }} />
          <Box sx={{ width: 18, height: 18, bgcolor: "#E07575", borderRadius: "50%" }} />
        </Box>
      </Box>

      {/* Sizes */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
        <Typography>Size:</Typography>
        <ToggleButtonGroup
          value={size}
          exclusive
          onChange={(e, val) => val && setSize(val)}
          size="small"
        >
          {["XS", "S", "M", "L", "XL"].map((s) => (
            <ToggleButton key={s} value={s}>
              {s}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      {/* Quantity + Buy */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
        <Box sx={{ display: "flex", border: "1px solid #ccc" }}>
          <Button onClick={() => handleQty("dec")}>−</Button>
          <Box sx={{ px: 2, display: "flex", alignItems: "center" }}>
            {qty}
          </Box>
          <Button onClick={() => handleQty("inc")}>+</Button>
        </Box>

        <Button
          variant="contained"
          sx={{ bgcolor: "#DB4444", px: 4, "&:hover": { bgcolor: "#c53737" } }}
        >
          Buy Now
        </Button>

        <IconButton sx={{ border: "1px solid #ccc" }}>
          <FavoriteBorderIcon />
        </IconButton>
      </Box>

      {/* Delivery Box */}
      <Box
        sx={{
          border: "1px solid #ddd",
          mt: 4,
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <LocalShippingOutlinedIcon />
          <Box>
            <Typography fontWeight="bold">Free Delivery</Typography>
            <Typography variant="body2" color="text.secondary">
              Enter your postal code for Delivery Availability
            </Typography>
          </Box>
        </Box>

        <Box sx={{ borderTop: "1px solid #eee", pt: 2, display: "flex", gap: 2 }}>
          <ReplayOutlinedIcon />
          <Box>
            <Typography fontWeight="bold">Return Delivery</Typography>
            <Typography variant="body2" color="text.secondary">
              Free 30 Days Delivery Returns. Details
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PDC3;
