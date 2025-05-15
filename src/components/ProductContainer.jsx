import { ChevronRight, Heart, ShoppingCart, Eye } from "lucide-react";
import { useParams } from "react-router";
import { products } from "../data/products.js";
import RatingStars from "./RatingStars.jsx";
import { useState } from "react";
import descriptionImg from "../images/description.jpg";

function ProductContainer() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  //   console.log(product);

  const [isDescription, setIsDescription] = useState(true);
  const [isInfo, setIsInfo] = useState(false);
  const [isReview, setIsReview] = useState(false);

  function handleDescription() {
    if (!isDescription) {
      setIsDescription(true);
      setIsReview(false);
      setIsInfo(false);
    }
  }
  function handleInfo() {
    if (!isInfo) {
      setIsDescription(false);
      setIsReview(false);
      setIsInfo(true);
    }
  }
  function handleReview() {
    if (!isReview) {
      setIsDescription(false);
      setIsReview(true);
      setIsInfo(false);
    }
  }

  return (
    <>
      <div>
        <div className="bg-[#FAFAFA] flex flex-row gap-2 justify-center text lg:justify-start lg:mx-10 lg:items-center text-[14px] lg:text-[24px] pt-10">
          <a href="/" className="font-bold text-[#252B42]">
            Home
          </a>
          <ChevronRight />
          <a href="/shop" className="font-bold text-[#737373]">
            Shop
          </a>
          <ChevronRight />
          <h1 className="font-bold text-[#737373]">Product</h1>
        </div>
        <div className="bg-[#FAFAFA] p-10 flex flex-col items-left lg:flex-row lg:gap-14">
          <img src={product.image} />
          <div>
            <h1 className="text-2xl font-bold my-4 text-[#252B42]">
              {product.name}
            </h1>
            <div className="flex flex-row items-center gap-6 mb-2">
              <RatingStars rating={product.rating} />
              <p className="font-semibold text-[#737373]">
                ({product.reviews} Reviews)
              </p>
            </div>
            <p className="font-bold text-xl my-2 text-[#252B42]">
              {product.price}
            </p>
            <p className="text-[#737373]">
              Availability :{" "}
              <span className="font-bold text-[#23A6F0]">{product.stock}</span>
            </p>
            <p className="text-[#858585] py-10 border-b-2 border-[#BDBDBD]">
              {product.description}
            </p>
            <div className="flex gap-6 mt-8">
              <p className="p-4 rounded-full mt-4 bg-[#23A6F0]"></p>
              <p className="p-4 rounded-full mt-4 bg-[#23856D]"></p>
              <p className="p-4 rounded-full mt-4 bg-[#E77C40]"></p>
              <p className="p-4 rounded-full mt-4 bg-[#252B42]"></p>
            </div>
            <section className="flex flex-row justify-center items-center mt-10 gap-4 lg:justify-start">
              <button className="border text-white bg-[#23A6F0] px-6 py-4 rounded-4xl">
                Add to Cart
              </button>
              <button className="border rounded-full p-2">
                <Heart />
              </button>
              <button className="border rounded-full p-2">
                <ShoppingCart />
              </button>
              <button className="border rounded-full p-2">
                <Eye />
              </button>
            </section>
          </div>
        </div>
        <div className="flex flex-col bg-[#FAFAFA] lg:mb-10 text-[18px]">
          <div className="flex flex-row justify-between lg:justify-around lg:mx-80 mx-10 gap-4 text-[#737373] font-bold">
            <button
              onClick={handleDescription}
              className={isDescription ? `border-b-2` : ""}
            >
              Description
            </button>
            <button onClick={handleInfo} className={isInfo ? `border-b-2` : ""}>
              Info
            </button>
            <button
              onClick={handleReview}
              className={isReview ? `border-b-2` : ""}
            >
              Reviews
            </button>
          </div>
          <div className="mx-10 mt-6">
            {isDescription && (
              <div className="flex flex-col lg:flex-row lg:gap-14 gap-10 text-[#737373] font-semibold mt-10 mb-20">
                <img
                  src={descriptionImg}
                  className="rounded-2xl shadow-[6px_6px_15px_rgba(0,0,0,0.65)] border lg:h-[40rem] lg:w-[40em] lg:object-cover"
                />
                <div className="flex flex-col gap-10">
                  <h1 className="font-bold text-2xl text-[#252B42]">
                    the quick fox jumps over
                  </h1>
                  <p>{product.description}</p>
                  <p>{product.description}</p>
                  <p>{product.description}</p>
                </div>
              </div>
            )}
          </div>
          <div className="mx-10">
            {isInfo && (
              <div className="mt-10 mb-20 text-[#252B42] font-semibold text-center">
                <h1>There is no info about product.</h1>
                <h1>(infos will be added soon)</h1>
              </div>
            )}
          </div>
          <div className="mx-10 border-b-2">
            {isReview && (
              <div className="mt-10 mb-20 text-[#252B42] font-semibold text-center">
                <h1>There is no review about product.</h1>
                <h1>(reviews will be added soon)</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductContainer;
