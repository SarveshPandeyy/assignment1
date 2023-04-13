import React from "react";
import { FaReact } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { MdContentPaste } from "react-icons/md";

const Services = () => {
  return (
    <div
      id="services"
      className="min-h-screen w-full flex flex-col justify-start items-center gap-12 py-32"
    >
      <h1 className="text-dark_blue tabletLg:text-7xl mobileLg:text-5xl text-4xl font-medium">
        Services We Offer
      </h1>
      <p className="text-center font-base tabletLg:w-1/2 w-full text-base">
        We help ambitious businesses like you generate more profits by building
        awareness, driving web traffic, connecting with customers and growing
        overall sales
      </p>
      <div className="flex flex-wrap justify-evenly gap-10 mobileLg:gap-16 laptopMd:gap-1 items-center w-full ">
        <div className="flex flex-col justify-start items-start gap-3 bg-navy_blue w-[23rem] h-[25rem] rounded-lg py-5 px-5">
          <AiFillAndroid className="text-4xl font-medium text-white " />
          <h1 className="text-2xl text-white ">Android Development</h1>
          <p className="text-white">
            We will be more than happy to work with you on creating your dream
            website. Our team will customize your website depending on your
            needs, requirements and wishes.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 bg-navy_blue w-[23rem] h-[25rem] rounded-lg py-5 px-5">
          <MdContentPaste className="text-4xl font-medium text-white " />
          <h1 className="text-2xl text-white ">Content Writing</h1>
          <p className="text-white">
            We will be more than happy to work with you on creating your dream
            website. Our team will customize your website depending on your
            needs, requirements and wishes.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 bg-navy_blue w-[23rem] h-[25rem] rounded-lg py-5 px-5">
          <FaReact className="text-4xl font-bold text-white " />
          <h1 className="text-2xl text-white ">Web Development</h1>
          <p className="text-white">
            We will be more than happy to work with you on creating your dream
            website. Our team will customize your website depending on your
            needs, requirements and wishes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
