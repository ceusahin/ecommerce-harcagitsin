import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

function Slider({ slides, slideContent }) {
  let [current, setCurrent] = useState(0);
  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <div key={index} className="relative min-w-full h-[80vh]">
            <img src={s} className="w-full h-full object-cover" />

            <div className="mx-16 absolute inset-0 flex flex-col justify-center items-center text-center text-white">
              <p className="text-xs tracking-widest mb-2 font-bold text-[1rem]">
                {slideContent?.[index]?.subtitle || "SUMMER 2020"}
              </p>
              <h1 className="text-4xl font-bold mb-4 leading-tight my-10 text-[2.2rem]">
                {slideContent?.[index]?.title || "NEW COLLECTION"}
              </h1>
              <p className="text-base max-w-sm mb-6 text-[1.2rem]">
                {slideContent?.[index]?.description ||
                  "We know how large objects will act, but things on a small scale."}
              </p>
              <button className="bg-green-500 px-8 py-3 rounded-xl hover:bg-green-600 transition font-semibold text-[1.5rem] mt-8">
                {slideContent?.[index]?.button || "SHOP NOW"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-6 text-3xl">
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

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
