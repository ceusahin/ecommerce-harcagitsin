import { Search, ShoppingCart, Menu, User } from "lucide-react";
import { useState } from "react";
import HeaderContact from "../components/HeaderContact";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  function handleMenuClick() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsCartOpen(false);
      setIsProfileOpen(false);
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
      setIsProfileOpen(false);
      setIsSearchBarOpen(true);
    }
  }

  function handleCartClick() {
    if (isCartOpen) {
      setIsCartOpen(false);
    } else {
      setIsProfileOpen(false);
      setIsMenuOpen(false);
      setIsSearchBarOpen(false);
      setIsCartOpen(true);
    }
  }

  function handleProfileClick() {
    if (isProfileOpen) {
      setIsProfileOpen(false);
    } else {
      setIsCartOpen(false);
      setIsMenuOpen(false);
      setIsSearchBarOpen(false);
      setIsProfileOpen(true);
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
        <div className="flex justify-between items-center px-8 py-8 lg:justify-between flex-col gap-7 lg:flex-row">
          <h1 className="font-bold text-[24px] text-[#252B42]">
            <a href="/" className="cursor-pointer">
              HarcaGitsin
            </a>
          </h1>
          <div className="lg:flex lg:gap-14 hidden">
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
              Shop
            </a>
            <a
              href="/team"
              className="font-bold text-xl text-[#737373] hover:text-black"
            >
              Team
            </a>
            <a
              href="/contact"
              className="font-bold text-xl text-[#737373] hover:text-black"
            >
              Contact
            </a>
            <a
              href="/about"
              className="font-bold text-xl text-[#737373] hover:text-black"
            >
              About
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
              Pages
            </a>
          </div>
          <div className="flex gap-6">
            <button
              onClick={handleProfileClick}
              className="border rounded-full p-2 cursor-pointer"
            >
              <User />
            </button>
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
              className="border rounded-full p-2 cursor-pointer flex lg:hidden"
            >
              <Menu />
            </button>
          </div>
        </div>

        {isSearchBarOpen && (
          <div className="absolute right-10 lg:right-6 top-26.6 z-50 bg-white rounded-2xl shadow-lg w-80 flex flex-col gap-4 border border-[#737373] lg:w-80">
            <input
              type="text"
              placeholder="Search..."
              className="border border-[#737373] rounded-2xl mx-4 my-4 text-left pl-4 py-2"
            />
            <button
              className="absolute right-6 cursor-pointer top-6 text-[#737373] hover:text-black"
              onClick={handleSearch}
            >
              <Search />
            </button>
          </div>
        )}

        {isMenuOpen && (
          <div className="flex absolute right-2 lg:right-102 top-26.6 z-50 bg-white rounded-2xl shadow-lg p-6 w-46 lg:hidden flex-col gap-4 border">
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
              Shop
            </a>
            <a
              href="/team"
              className="font-bold text-xl text-[#737373] hover:text-black"
            >
              Team
            </a>
            <a
              href="/contact"
              className="font-bold text-xl text-[#737373] hover:text-black"
            >
              Contact
            </a>
            <a
              href="/about"
              className="font-bold text-xl text-[#737373] hover:text-black"
            >
              About
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
              Pages
            </a>
          </div>
        )}
        {isCartOpen && (
          <div className="absolute right-18 lg:right-6 top-26.6 z-50 bg-white rounded-2xl shadow-lg p-6 w-46 flex flex-col gap-4 border border-[#737373]">
            <h1 className="text-[#737373] text-xl font-bold hover:text-black cursor-pointer">
              Cart
            </h1>
            <h1 className="text-[#737373] text-xl font-bold hover:text-black cursor-pointer">
              Checkout
            </h1>
          </div>
        )}
        {isProfileOpen && (
          <div className="absolute right-50 lg:right-6 top-26.6 z-50 bg-white rounded-2xl shadow-lg p-6 w-46 flex flex-col gap-4 border border-[#737373]">
            <h1 className="text-[#737373] text-xl font-bold hover:text-black cursor-pointer">
              Log in
            </h1>
            <h1 className="text-[#737373] text-xl font-bold hover:text-black cursor-pointer">
              Register
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
