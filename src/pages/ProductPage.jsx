import BestSellerProducts from "../components/BestSellerProducts";
import ProductContainer from "../components/ProductContainer";
import ShopPageAdvert from "../components/ShopPageAdvert";
import PageContent from "../layouts/PageContent";

function ProductPage() {
  return (
    <PageContent>
      <ProductContainer />
      <BestSellerProducts />
      <ShopPageAdvert />
    </PageContent>
  );
}

export default ProductPage;
