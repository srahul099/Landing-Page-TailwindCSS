import React from "react";
import Laptop from "../assests/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-500 mx-auto my-4 p-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl py-2 font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga
            dignissimos nemo ratione quam doloremque assumenda eveniet,
            excepturi eos inventore consequuntur iure. Recusandae dolorum
            molestias unde expedita distinctio temporibus dolor.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
