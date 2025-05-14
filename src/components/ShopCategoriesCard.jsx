function ShopCategoriesCard({ categories, onSelectCategory }) {
  return (
    <div className="grid gap-10 mx-8 pt-4 lg:grid-cols-5 lg:px-10">
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => onSelectCategory(category)}
          className="relative overflow-hidden rounded-xl lg:h-[20rem] h-[14rem] md:h-[25rem] hover:scale-105 duration-200 cursor-pointer"
        >
          <img src={category.image} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
            <h1 className="text-[16px] md:text-[24px] font-bold">
              {category.title}
            </h1>
            <h2 className="text-[14px] md:text-[22px] mt-2">
              {category.count} Items
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopCategoriesCard;
