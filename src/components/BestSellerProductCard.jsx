import PageContent from "../layouts/PageContent";

function BestSellerProductCard({ products }) {
  // console.log(products);
  return (
    <PageContent>
      <div className="lg:grid lg:grid-cols-4 lg:mx-20">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center mx-10 my-20  lg:hover:scale-105 lg:duration-200 cursor-pointer"
          >
            <img src={product.img} className="object-cover" />
            <h1 className="text-[#252B42] text-[17px] font-bold mt-4">
              {product.title}
            </h1>
            <h2 className="text-[#737373] text-[17px] mt-2">
              {product.category}
            </h2>
            <p className="mt-3 font-bold text-green-700">${product.price}</p>
            <div className="flex gap-2">
              <p className="p-2 border rounded-full mt-4 bg-[#23A6F0]"></p>
              <p className="p-2 border rounded-full mt-4 bg-[#23856D]"></p>
              <p className="p-2 border rounded-full mt-4 bg-[#E77C40]"></p>
              <p className="p-2 border rounded-full mt-4 bg-[#252B42]"></p>
            </div>
          </div>
        ))}
      </div>
    </PageContent>
  );
}

export default BestSellerProductCard;
