import AdvertBottomImage from "../images/advert-bottom.png";

function AdvertBottom() {
  return (
    <div className="lg:flex lg:flex-row-reverse lg:justify-around lg:mx-30 lg:h-[40rem]">
      <div className="flex flex-col justify-center items-center text-center pt-20 mx-22 lg:items-start">
        <h2 className="text-base text-[#BDBDBD] font-semibold">SUMMER 2020</h2>
        <h1 className="text-[40px] text-[#252B42] mt-4 font-bold">
          Part of the Neural Universe
        </h1>
        <p className="text-[#737373] text-[20px] mt-4 font-semibold">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="font-semibold border rounded bg-[#23A6F0] lg:bg-[#2DC071] text-white px-10 py-2.5 mt-6">
          BUY NOW
        </button>
        <button className="font-semibold mt-6 text-[#23A6F0] lg:text-[#2DC071] border-2 rounded border-[#23A6F0] px-10 py-2.5 lg:border-[#2DC071]">
          Learn More
        </button>
      </div>
      <div className="h-[25rem] lg:h-auto">
        <img src={AdvertBottomImage} className="object-cover h-full" />
      </div>
    </div>
  );
}

export default AdvertBottom;
