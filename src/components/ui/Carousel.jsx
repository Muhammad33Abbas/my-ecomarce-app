import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const cards = [
  "Card 1",
  "Card 2",
  "Card 3",
  "Card 4",
  "Card 5",
];

const CardCarousel = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 2; // how many cards visible
  const cardWidth = 260;

  const handleNext = () => {
    if (index < cards.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Left Arrow */}
      <IconButton
        onClick={handlePrev}
        sx={{ position: "absolute", left: 0, zIndex: 1 }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Cards Wrapper */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          transform: `translateX(-${index * (cardWidth + 16)}px)`,
          transition: "0.4s ease",
          ml: "50px",
        }}
      >
        {cards.map((card, i) => (
          <Box
            key={i}
            sx={{
              minWidth: cardWidth,
              height: 180,
              bgcolor: "#F5F5F5",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 1,
            }}
          >
            <Typography>{card}</Typography>
          </Box>
        ))}
      </Box>

      {/* Right Arrow */}
      <IconButton
        onClick={handleNext}
        sx={{ position: "absolute", right: 0, zIndex: 1 }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default CardCarousel;
