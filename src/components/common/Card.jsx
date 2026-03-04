import React, { useContext, useState } from "react";
import { Button, IconButton, Rating, Typography , Container} from "@mui/material";
import { Box } from "@mui/material";
import { CardContext } from "../../context/Context";
// import data from '../HomePage/Components/FlashSale'e
// import FavoriteIcon from '@mui/icons-material/Favorite';
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';




const Card = ({Discount,Pimg,Pname,Pprice,ActualPrice,Reviews=0,BadgeColor}) => {

const cardData = {
  Pimg,
  Pname,
  Pprice,
  quantity: 1
};


  const { HandleCard, number, HandleWishCard } = useContext(CardContext);
   const [value, setValue] = useState(0);
   const [CountReviews, setCountReviews] = useState(Reviews);
     const [LoveIconClick, setLoveIconClick] = useState(false)


  // const [hover, setHover] = useState(-1);
  return (
    <>
    {/* <Box sx={{fontSize:'40px'}}>{number}</Box> */}
    <Box sx={{ width:'270px', height:'350px' ,"&:hover .addToCart": { display: "block" } }}>
      <Box
        sx={{
          bgcolor: "#F5F5F5",
          width: "270px",
          height: "250px",
          display: "flex",
          alignContent: "center",
          position: "relative",
        }}
      >
        <img  src={Pimg} alt="" style={{ width: "100%" }} />

        <Box
          sx={{
            paddingTop: "10px",
            width: "260px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
             {Discount ?(
            <Box
              sx={{
                width: "55px",
                height: "max-content",
                bgcolor: BadgeColor,
                color: "white",
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
              }}
            >
             
              <Typography>{Discount}</Typography>
            
            
            </Box>
              ) : ( <Box sx={{width:'55px'}}/>)  }
           
          
            <Box sx={{ display: "flex", gap: 0, flexDirection: "column" }}>
              <IconButton>
              <img src="/Icons/Quick View.svg" alt="" />
              </IconButton>
              
              <IconButton   onClick={() => {
              
                HandleWishCard(cardData)
                  setLoveIconClick((prev) => !prev);
                }}>
             <FavoriteBorderIcon  sx={{color: LoveIconClick ? "red": "black"   }}/>
             </IconButton>

           
            </Box>
          </Box>
          
        </Box>
        <Button
          className="addToCart"
          sx={{
            display: "none",
            bgcolor: "black",
            width: "270px",
            padding: "10px",
            color: "white",
            position: "absolute",
            bottom: 0,
          }}
          onClick={() => HandleCard(cardData)}
        >
          Add To Cart
        </Button>
      </Box>
      <Typography sx={{ fontSize: "16px", paddingTop: "5px" }}>
       {Pname}
      </Typography>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Typography
          sx={{ fontSize: "16px", color: "red", paddingTop: "7px" }}
        >
          {Pprice}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            paddingTop: "7px",
            color: "gray",
            textDecoration: "line-through",
          }}
        >
      {ActualPrice}
        </Typography>
      </Box>
      <Box
        sx={{
          "& > legend": { mt: 2 },
          display: "flex",
          gap: 2,
          paddingTop: "5px",
        }}
      >
        <Rating
          name="simple-controlled"
          value={value}
           onChange={(e) =>  setValue(e.target.value)  } 
          
          
            // setValue((prev) => prev + 10); // Increase reviews on click
         
        />
        <Typography color="gray">({value})</Typography>
      </Box>
    </Box>
    </>
  );
};

export default Card;
