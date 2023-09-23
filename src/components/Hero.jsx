import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALAYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ease-in-out duration-500">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center py-5">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
            strings={["BTB", "BTC", "SAAS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mx-4 ">
          Monitor your data analytics to increase revenue
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
