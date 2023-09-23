import React from "react";
import {
  FaDribbble,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1250px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-3 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          corporis tempore architecto laborum eius aut fugit vitae maiores
          itaque omnis. Repellendus eligendi nisi dicta recusandae vitae
          temporibus ducimus voluptas quia?
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbble size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 mx-6">
        <div className="font-medium text-gray-400 ">
          <h6 className="border-b-2 border-gray-500">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marcketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div className="font-medium text-gray-400 ">
          <h6 className="border-b-2 border-gray-500">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API status</li>
          </ul>
        </div>
        <div className="font-medium text-gray-400 ">
          <h6 className="border-b-2 border-gray-500">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div className="font-medium text-gray-400 ">
          <h6 className="border-b-2 border-gray-500">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
