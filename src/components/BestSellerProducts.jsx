import BestSellerProductCard from "../components/BestSellerProductCard";
import { products } from "../data/products";

function BestSellerProducts() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mx-20 my-20 lg:my-4">
        <h2 className="text-[#737373] text-2xl">Featured Products</h2>
        <h1 className="text-[#252B42] text-2xl font-bold mt-4">
          BESTSELLER PRODUCTS
        </h1>
        <p className="text-[#737373] mt-4 font-semibold">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div>
        <BestSellerProductCard products={products.slice(0, 8)} />
      </div>
    </>
  );
}

export default BestSellerProducts;
