import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import greenBgMan from "../images/green-bg-man.png";
import { useNavigate } from "react-router-dom";

function Slider({ slides, slideContent, greenBg }) {
  const [current, setCurrent] = useState(0);
  let navigate = useNavigate();

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-800"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => {
          const content = slideContent?.[index] || {};

          return (
            <div key={index} className={`relative min-w-full`}>
              <img
                src={s}
                className={`${
                  greenBg
                    ? "h-[140vh] lg:h-[120vh]"
                    : "h-[80vh] lg:h-[120vh] lg:object-top"
                } w-full object-cover`}
              />
              {greenBg && (
                <img
                  src={greenBgMan}
                  className="absolute bottom-0 w-full object-contain lg:w-auto lg:object-right lg:right-0"
                />
              )}

              <div className="mx-16 absolute inset-0 flex flex-col justify-start items-center text-center text-white pt-36 lg:pt-66 lg:mr-[50rem]">
                <p className="text-xs tracking-widest mb-2 font-bold text-[1rem] lg:text-5xl">
                  {content.subtitle || "SUMMER 2020"}
                </p>
                <h1 className="text-4xl font-bold mb-4 leading-tight my-10 text-[2.2rem] lg:text-7xl lg:mb-12">
                  {content.title || "NEW COLLECTION"}
                </h1>
                <p className="text-base max-w-sm mb-6 text-[1.2rem] lg:text-4xl lg:w-[70rem]">
                  {content.description ||
                    "We know how large objects will act, but things on a small scale."}
                </p>
                <button
                  onClick={() => {
                    console.log("Navigating to shop");
                    navigate("/shop");
                  }}
                  className="bg-green-500 px-8 py-3 rounded-xl hover:bg-green-600 transition font-semibold text-[1.5rem] mt-8 cursor-pointer"
                >
                  {content.button || "SHOP NOW"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-0 w-full justify-between items-start flex text-white px-6 text-3xl pt-66 lg:top-50">
        <button
          onClick={previousSlide}
          className="border border-white rounded-full p-1 hover:bg-white hover:text-black transition cursor-pointer"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="border border-white rounded-full p-1 hover:bg-white hover:text-black transition cursor-pointer"
        >
          <ArrowRight />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full lg:gap-1 ">
        {slides.map((_, i) => (
          <div
            key={`circle${i}`}
            onClick={() => setCurrent(i)}
            className={`rounded-full w-5 h-5 cursor-pointer lg:border-2 lg:rounded-none lg:w-20 lg:border-none lg:opacity-70 ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
