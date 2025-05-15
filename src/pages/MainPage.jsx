import AdvertBottom from "../components/AdvertBottom";
import BestSellerProducts from "../components/BestSellerProducts";
import BottomHero from "../components/BottomHero";
import EditorPicks from "../components/EditorPicks";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import PageContent from "../layouts/PageContent";

export default function MainPage() {
  return (
    <PageContent>
      <Hero />
      <EditorPicks />
      <BestSellerProducts />
      <BottomHero />
      <AdvertBottom />
      <FeaturedProducts />
    </PageContent>
  );
}
