import { User, Search, ShoppingCart, Menu } from "lucide-react";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-8 py-8">
        <h1 className="font-bold text-xl text-[#252B42]">HarcaGitsin</h1>
        <div className="flex gap-6">
          <User />
          <Search />
          <ShoppingCart />
          <Menu />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 pt-6 pb-16">
        <h1 className="text-[#737373] text-2xl">Home</h1>
        <h1 className="text-[#737373] font-bold text-2xl">Product</h1>
        <h1 className="text-[#737373] font-bold text-2xl">Pricing</h1>
        <h1 className="text-[#737373] font-bold text-2xl">Contact</h1>
      </div>
    </>
  );
}

export default Header;
