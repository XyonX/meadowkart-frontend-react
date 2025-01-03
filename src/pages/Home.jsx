import BannerDouble from "@/components/BannerDouble";
import CategryList from "@/components/CategoryList";
import FeaturedProducts from "@/components/FeaturedProducts";
import Slider from "@/components/Slider";
import SpecialDiscountArea from "@/components/SpecialDiscountArea";
import React from "react";

const Home = () => {
  return (
    <div>
      <Slider />
      <CategryList />
      <FeaturedProducts />

      <BannerDouble />
      <SpecialDiscountArea />
    </div>
  );
};

export default Home;
