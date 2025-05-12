import PageContent from "../layouts/PageContent";

function BestSellerProductCard({ products }) {
  // console.log(products);
  return (
    <PageContent>
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center mx-10 my-20"
        >
          <img src={product.img} className="object-cover" />
          <h1 className="text-[#252B42] text-[17px] font-bold mt-4">
            {product.title}
          </h1>
          <h2 className="text-[#737373] text-[17px] mt-2">
            {product.category}
          </h2>
          <p className="mt-3 font-bold text-green-700">${product.price}</p>
        </div>
      ))}
    </PageContent>
  );
}

export default BestSellerProductCard;
