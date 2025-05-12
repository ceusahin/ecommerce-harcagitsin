import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import greenBgMan from "../images/green-bg-man.png";
import PageContent from "../layouts/PageContent";

function Slider({ slides, slideContent, greenBg }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <PageContent>
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
                    greenBg ? "h-[140vh]" : "h-[80vh]"
                  } w-full object-cover`}
                />
                {greenBg && (
                  <img
                    src={greenBgMan}
                    className="absolute bottom-0 w-full object-contain"
                  />
                )}

                <div className="mx-16 absolute inset-0 flex flex-col justify-start items-center text-center text-white pt-36">
                  <p className="text-xs tracking-widest mb-2 font-bold text-[1rem]">
                    {content.subtitle || "SUMMER 2020"}
                  </p>
                  <h1 className="text-4xl font-bold mb-4 leading-tight my-10 text-[2.2rem]">
                    {content.title || "NEW COLLECTION"}
                  </h1>
                  <p className="text-base max-w-sm mb-6 text-[1.2rem]">
                    {content.description ||
                      "We know how large objects will act, but things on a small scale."}
                  </p>
                  <button className="bg-green-500 px-8 py-3 rounded-xl hover:bg-green-600 transition font-semibold text-[1.5rem] mt-8">
                    {content.button || "SHOP NOW"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-start flex text-white px-6 text-3xl pt-66">
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
          {slides.map((_, i) => (
            <div
              key={`circle${i}`}
              onClick={() => setCurrent(i)}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </PageContent>
  );
}

export default Slider;
