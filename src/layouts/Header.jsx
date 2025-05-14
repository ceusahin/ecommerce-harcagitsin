import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import HeaderContact from "../components/HeaderContact";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleMenuClick() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsCartOpen(false);
      setIsSearchBarOpen(false);
      setIsMenuOpen(true);
    }
  }

  function handleSearchClick() {
    if (isSearchBarOpen) {
      setIsSearchBarOpen(false);
    } else {
      setIsMenuOpen(false);
      setIsCartOpen(false);
      setIsSearchBarOpen(true);
    }
  }

  function handleCartClick() {
    if (isCartOpen) {
      setIsCartOpen(false);
    } else {
      setIsMenuOpen(false);
      setIsSearchBarOpen(false);
      setIsCartOpen(true);
    }
  }

  // DONT FORGET TO DO SEARCH ACTION
  function handleSearch() {
    return;
  }

  return (
    <>
      <div className="hidden lg:inline">
        <HeaderContact />
      </div>
      <div>
        <div className="flex justify-between items-center px-8 py-8 lg:justify-around">
          <h1 className="font-bold text-[24px] text-[#252B42]">
            <a href="/" className="cursor-pointer">
              HarcaGitsin
            </a>
          </h1>
          <div className="flex gap-6">
            <button
              onClick={handleSearchClick}
              className="border rounded-full p-2 cursor-pointer"
            >
              <Search />
            </button>
            <button
              onClick={handleCartClick}
              className="border rounded-full p-2 cursor-pointer"
            >
              <ShoppingCart />
            </button>
            <button
              onClick={handleMenuClick}
              className="border rounded-full p-2 cursor-pointer"
            >
              <Menu />
            </button>
          </div>
        </div>

        {isSearchBarOpen && (
          <div className="absolute right-8 lg:right-102 top-26.6 z-50 bg-white rounded-2xl shadow-lg w-46 flex flex-col gap-4 border">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-2xl mx-4 my-4 text-left pl-4 py-2"
            />
            <button
              className="absolute right-6 cursor-pointer top-6"
              onClick={handleSearch}
            >
              <Search />
            </button>
          </div>
        )}

        {isMenuOpen && (
          <div className="absolute right-8 lg:right-102 top-26.6 z-50 bg-white rounded-2xl shadow-lg p-6 w-46 flex flex-col gap-4 border">
            <a
              href="/"
              className="text-[#737373] hover:text-black font-bold text-xl"
            >
              Home
            </a>
            <a
              href="/shop"
              className="font-bold text-xl text-[#737373] hover:text-black"
            >
              Products
            </a>
            <a
              href="#"
              className="font-bold text-xl text-[#737373] hover:text-black"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-bold text-xl text-[#737373] hover:text-black"
            >
              Contact
            </a>
          </div>
        )}
        {isCartOpen && (
          <div className="absolute right-8 lg:right-102 top-26.6 z-50 bg-white rounded-2xl shadow-lg p-6 w-46 flex flex-col gap-4 border">
            <h1 className="text-[#737373] text-xl font-bold hover:text-black cursor-pointer">
              Cart
            </h1>
            <h1 className="text-[#737373] text-xl font-bold hover:text-black cursor-pointer">
              Checkout
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
