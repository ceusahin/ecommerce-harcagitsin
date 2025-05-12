import FeaturedProductCard from "./FeaturedProductCard";
import Featured1 from "../images/featured-1.jpg";
import Featured2 from "../images/featured-2.jpg";
import Featured3 from "../images/featured-3.jpg";

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: "Deep Dive into UX Patterns",
      tags: ["Design", "Popular"],
      description:
        "Explore modern UX principles that drive conversion and user satisfaction.",
      date: "15 March 2022",
      comments: 23,
      image: Featured1,
      isNew: true,
      link: "/posts/ux-patterns",
    },
    {
      id: 2,
      title: "Boost Productivity with AI Tools",
      tags: ["AI", "Tools", "Productivity"],
      description:
        "Discover how AI can help streamline your workflow and boost efficiency in everyday tasks.",
      date: "10 January 2023",
      comments: 15,
      image: Featured2,
      isNew: false,
      link: "/posts/ai-productivity",
    },
    {
      id: 3,
      title: "Design Systems that Scale",
      tags: ["UI", "Systems"],
      description:
        "Learn how to create robust and scalable design systems for teams of any size.",
      date: "05 July 2022",
      comments: 8,
      image: Featured3,
      isNew: false,
      link: "/posts/design-systems",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center text-center pt-20 pb-10 mx-22">
        <h2 className="text-base text-[#23A6F0] font-semibold">
          Practice Advice
        </h2>
        <h1 className="text-[40px] text-[#252B42] mt-4 font-bold">
          Featured Products
        </h1>
        <p className="text-[#737373] text-[14px] mt-4 font-semibold">
          Problems trying to resolve the conflict between the two major
        </p>
      </div>
      <div>
        <FeaturedProductCard products={products} />
      </div>
    </div>
  );
}

export default FeaturedProducts;
