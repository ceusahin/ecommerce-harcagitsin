import best1 from "../images/best-1.jpg";
import best2 from "../images/best-2.jpg";
import best3 from "../images/best-3.jpg";
import best4 from "../images/best-4.jpg";
import best5 from "../images/best-5.jpg";
import best6 from "../images/best-6.jpg";
import best8 from "../images/best-8.jpg";
import BestSellerProductCard from "../components/BestSellerProductCard";

function BestSellerProducts() {
  const products = [
    {
      title: "Purple Shirt",
      img: best1,
      category: "Shirt",
      price: 7.89,
    },
    {
      title: "White Label T-Shirt",
      img: best2,
      category: "T-Shirt",
      price: 4.89,
    },
    {
      title: "White Pants",
      img: best3,
      category: "Pants",
      price: 9.99,
    },
    {
      title: "Brown Leather Jacket",
      img: best4,
      category: "Jacket",
      price: 19.99,
    },
    {
      title: "Brown Cotton Pants",
      img: best5,
      category: "Pants",
      price: 9.99,
    },
    {
      title: "Black Sport Crop",
      img: best6,
      category: "Sport",
      price: 4.99,
    },
    {
      title: "Yellow Cardigan",
      img: best6,
      category: "Cardigan",
      price: 6.48,
    },
    {
      title: "Brown Jacket",
      img: best8,
      category: "Jacket",
      price: 16.99,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mx-20 my-20">
        <h2 className="text-[#737373] text-2xl">Featured Products</h2>
        <h1 className="text-[#252B42] text-2xl font-bold mt-4">
          BESTSELLER PRODUCTS
        </h1>
        <p className="text-[#737373] mt-4 font-semibold">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div>
        <BestSellerProductCard products={products} />
      </div>
    </>
  );
}

export default BestSellerProducts;
