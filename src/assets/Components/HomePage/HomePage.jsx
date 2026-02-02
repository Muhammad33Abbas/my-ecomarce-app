import { Container } from "@mui/material"
import FlashSale from "./Components/FlashSale"
import HeroSection from "./Components/HeroSection"
import BrowseByCatigories from "./Components/BrowseByCatigories"
import BestSellingProduct from "./Components/BestSellingProduct"
import ExploreOurProduct from "./Components/ExploreOurProduct"
import NewArrival from "./Components/NewArrival"
import Features from "../Common Components/Features"
import CategoriesBanner from "../Common Components/CategoriesBanner"



const HomePage = () => {
  return (
    <Container>
      <HeroSection/>
      <FlashSale/>
    
      <BrowseByCatigories/>
        <BestSellingProduct/>
        <CategoriesBanner/>
        <ExploreOurProduct/>
        <NewArrival/>
        <Features/>
      
    </Container>
  )
}

export default HomePage
