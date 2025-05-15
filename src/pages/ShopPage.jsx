import ShopCategories from "../components/ShopCategories";
import ShopPageAdvert from "../components/ShopPageAdvert";
import PageContent from "../layouts/PageContent";

function ShopPage() {
  return (
    <PageContent>
      <ShopCategories />
      <ShopPageAdvert />
    </PageContent>
  );
}

export default ShopPage;
