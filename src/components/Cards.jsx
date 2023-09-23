import React from "react";
import Single from "../assests/single.png";
import Double from "../assests/double.png";
import Triple from "../assests/triple.png";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            className="mx-auto w-20 mt-[-3rem] bg-white"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-6 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-6 ">1 Granted User</p>
            <p className="py-2 border-b mx-6 ">Send upto 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-gray-100">
          <img
            src={Double}
            className="mx-auto w-20 mt-[-3rem] bg-transparent"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Group</h2>
          <p className="text-center text-4xl font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-6 mt-8">1.5TB Storage</p>
            <p className="py-2 border-b mx-6 ">1 Granted User</p>
            <p className="py-2 border-b mx-6 ">Send upto 2GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-[#00df9a]">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            className="mx-auto w-20 mt-[-3rem] bg-white"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Group</h2>
          <p className="text-center text-4xl font-bold">$699</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-6 mt-8">Unlimited Storage</p>
            <p className="py-2 border-b mx-6 ">1 Granted User</p>
            <p className="py-2 border-b mx-6 ">Send upto 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
