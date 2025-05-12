import AdvertBottom from "../components/AdvertBottom";
import BestSellerProducts from "../components/BestSellerProducts";
import BottomHero from "../components/BottomHero";
import EditorPicks from "../components/EditorPicks";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";

export default function MainPage() {
  return (
    <>
      <Hero />
      <EditorPicks />
      <BestSellerProducts />
      <BottomHero />
      <AdvertBottom />
      <FeaturedProducts />
    </>
  );
}
