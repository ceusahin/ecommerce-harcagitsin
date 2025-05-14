import { AlarmClock, MessageSquareText, ChevronRight } from "lucide-react";

function FeaturedProductCard({ products }) {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg m-4 w-80 lg:h-[33rem] lg:flex lg:flex-col lg:justify-between lg:hover:scale-105 lg:duration-200"
          >
            <div className="lg:flex lg:flex-col">
              <img
                src={product.image}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              <div className="flex justify-left items-center mt-4 gap-4 text-sm ml-6 lg:ml-10 text-[#737373]">
                {product.tags.map((tag, index) => (
                  <div
                    key={index}
                    className={index == 0 ? "text-[#8EC2F2]" : ""}
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold m-4 text-[#252B42]">
                {product.title}
              </h3>
              <p className="text-[#737373] px-6">{product.description}</p>
            </div>
            <div className="lg:flex lg:flex-col">
              <div className="flex justify-between items-center p-6">
                <span className="flex items-center text-sm text-gray-500">
                  <span className="text-[#23A6F0] mr-1">
                    <AlarmClock />
                  </span>
                  <p>{product.date}</p>
                </span>
                <span className="flex items-center text-sm text-gray-500">
                  <span className="text-[#23A6F0] mr-1">
                    <MessageSquareText />
                  </span>
                  {product.comments} comments
                </span>
              </div>
              <div className="flex cursor-pointer pb-6 font-bold text-left px-6 text-[#737373]">
                <button className="cursor-pointer">Learn More</button>
                <span className="text-[#23A6F0] cursor-pointer">
                  <ChevronRight />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturedProductCard;
