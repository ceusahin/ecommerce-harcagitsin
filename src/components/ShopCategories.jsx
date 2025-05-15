import { ChevronRight, List, LayoutGrid } from "lucide-react";
import ShopCategoriesCard from "./ShopCategoriesCard";
import Laptop from "../images/category-laptop.jpg";
import Camping from "../images/category-camping.png";
import Makeup from "../images/category-makeup.jpg";
import Phone from "../images/category-phone.jpg";
import Clothes from "../images/hero1.jpg";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { products } from "../data/products.js";

function ShopCategories() {
  const categories = [
    {
      image: Clothes,
      title: "CLOTHES",
      count: 34,
    },
    {
      image: Phone,
      title: "PHONES",
      count: 0,
    },
    {
      image: Laptop,
      title: "LAPTOPS",
      count: 0,
    },
    {
      image: Camping,
      title: "CAMPING",
      count: 0,
    },
    {
      image: Makeup,
      title: "MAKEUPS",
      count: 0,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortType, setSortType] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  function handleSortType() {
    if (sortType) {
      setSortType(false);
    } else {
      setSortType(true);
    }
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products
        .filter((p) => p.category === selectedCategory.title)
        .slice(0, selectedCategory.count)
    : [];

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const productSection = document.getElementById("product-list-start");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-[#FAFAFA]">
      <div className="flex flex-col justify-center items-center gap-4 lg:flex-row lg:w-full lg:justify-between lg:px-20 lg:mt-10">
        <div className="text-[24px] lg:text-[30px] font-bold text-[#252B42]">
          <h1>Shop</h1>
        </div>
        <div className="flex flex-row gap-2 lg:justify-center lg:items-center text-[14px] lg:text-[24px]">
          <a href="/" className="font-bold text-[#252B42]">
            Home
          </a>
          <ChevronRight />
          <h1 className="font-bold text-[#737373]">Shop</h1>
        </div>
      </div>
      <div>
        <ShopCategoriesCard
          categories={categories}
          onSelectCategory={handleCategorySelect}
        />
        {selectedCategory && (
          <div
            id="product-list-start"
            className="p-4 pb-16 mt-12 border-t-1 border-b-1 border-[#737373] flex flex-col justify-center items-center"
          >
            <h2 className="text-[16px] text-[#737373] font-bold my-6">
              Showing all {selectedCategory.count} results
            </h2>
            <div className="flex flex-row justify-center items-center gap-4 mb-4">
              <h2 className="font-semibold text-[#737373]">Views: </h2>
              <button
                onClick={handleSortType}
                className="border border-[#737373] text-[#737373] p-2 focus:text-black"
              >
                <LayoutGrid />
              </button>
              <button
                onClick={handleSortType}
                className="border border-[#737373] text-[#737373] p-2 focus:text-black"
              >
                <List />
              </button>
            </div>
            <ProductList products={paginatedProducts} />
            <div>
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-3 py-1 border rounded ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopCategories;
