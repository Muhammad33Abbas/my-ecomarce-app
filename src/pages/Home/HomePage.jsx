import { Container } from "@mui/material";
import FlashSale from "./components/FlashSale";
import HeroSection from "./components/HeroSection";
import BrowseByCategories from "./components/BrowseByCategories";
import BestSellingProduct from "./components/BestSellingProduct";
import ExploreOurProduct from "./components/ExploreOurProduct";
import NewArrival from "./components/NewArrival";
import Features from "../../components/common/Features";
import CategoriesBanner from "../../components/common/CategoriesBanner";
import MainLayout from "../../layout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <Container>
        <HeroSection />
        <FlashSale />

        <BrowseByCategories />
        <BestSellingProduct />
        <CategoriesBanner />
        <ExploreOurProduct />
        <NewArrival />
        <Features />
      </Container>
    </MainLayout>
  );
};

export default HomePage;
