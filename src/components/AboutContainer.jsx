import aboutImg from "../images/about-image.png";
import aboutVideo from "../videos/about-video.mp4";
import { members } from "../data/members";
import TeamMemberCard from "./TeamMemberCard";
import ShopPageAdvert from "./ShopPageAdvert";

function AboutContainer() {
  return (
    <>
      <div className="lg:flex lg:flex-row lg:justify-around lg:mb-10">
        <div className="flex flex-col justify-center items-center gap-6 lg:gap-14 mx-10 my-10 text-center lg:items-start">
          <h1 className="text-[40px] lg:text-[58px] text-[#252B42] font-bold">
            ABOUT US
          </h1>
          <p className="text-[#737373] lg:text-[20px] font-semibold mx-6 lg:mx-0 mb-3">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <button className="border font-semibold px-8 py-3 lg:px-16 lg:py-6 rounded-xl text-white bg-[#23A6F0]">
            Get Quote Now
          </button>
        </div>
        <div className="border my-20 border-[#FFE9EA] bg-[#FFE9EA] p-40 mx-10 rounded-full lg:p-100">
          <img
            src={aboutImg}
            className="absolute right-5 top-105 object-cover h-[30rem] lg:h-[60rem] lg:w-[60rem] lg:left-230 lg:top-20"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left mx-10 gap-8 lg:gap-40">
        <div className="lg:flex lg:flex-col lg:ml-50 lg:gap-6">
          <h2 className="text-[#E74040] text-[14px] font-semibold">
            Problems Trying
          </h2>
          <h1 className="text-[#252B42] text-[24px] font-bold">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h1>
        </div>
        <p className="text-[#737373] font-semibold lg:mr-50">
          Problems trying to resolve the conflict bet the two major realms of
          Classical physics: Newtonian Mechanics
        </p>
      </div>
      <div className="flex flex-col gap-20 mx-10 my-20 text-center lg:flex-row lg:justify-center lg:my-40">
        <section>
          <h1 className="text-[58px] text-[#252B42] font-bold">15K</h1>
          <p className="text-[#737373] font-semibold text-[16px]">
            Happy Customers
          </p>
        </section>
        <section>
          <h1 className="text-[58px] text-[#252B42] font-bold">150K</h1>
          <p className="text-[#737373] font-semibold text-[16px]">
            Monthly Visitors
          </p>
        </section>
        <section>
          <h1 className="text-[58px] text-[#252B42] font-bold">15</h1>
          <p className="text-[#737373] font-semibold text-[16px]">
            Countries Worldwide
          </p>
        </section>
        <section>
          <h1 className="text-[58px] text-[#252B42] font-bold">100+</h1>
          <p className="text-[#737373] font-semibold text-[16px]">
            Top Partners
          </p>
        </section>
      </div>
      <div className="mx-10 lg:flex lg:justify-center">
        <video width="1280" height="720" controls className="rounded-3xl">
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col justify-center items-center mx-10 my-20 text-center gap-6">
        <h1 className="text-[#252B42] font-bold text-[40px] mx-10">
          Meet Our Team
        </h1>
        <p className="text-[#737373] ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian Mechanics
        </p>
        <TeamMemberCard members={members} />
      </div>
      <div className="flex flex-col text-center justify-center mx-10 my-20 items-center gap-10">
        <h1 className="text-[#252B42] font-bold text-[40px] mx-10">
          Big Companies Are Here
        </h1>
        <p className="text-[#737373] ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian Mechanics
        </p>
      </div>
      <ShopPageAdvert />
    </>
  );
}

export default AboutContainer;
