import React from "react";
import Lottie from "lottie-react";
import lightAnimationData from "../public/banner.json";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="tabletLg:h-[35rem] min-h-screen w-full  flex tabletLg:flex-row flex-col  tabletLg:justify-between justify-start items-center tabletLg:items-start px-5 tabletMd:gap-0 gap-[-40px] "
      >
        <div className="laptopMd:w-2/5 laptopMd:py-16 tabletLg:w-1/2 w-full flex flex-col justify-center tabletLg:items-start items-center h-[29rem] gap-8 pb-[-40px]">
          <h1 className="tabletMd:text-7xl text-5xl font-medium underline text-light_black tabletLg:text-left text-center">
            Quality Web Services
          </h1>
          <h1 className="tabletLg:text-left text-center">
            Web Solutions with solid design and development expertise.
          </h1>
          <div className="flex justify-start gap-8 items-center ">
            <button className="tabletMd:px-10 px-5 py-3 font-medium tabletMd:text-lg text-sm bg-light_blue text-white hover:bg-background hover:text-light_blue rounded-lg duration-300 border hover:border-light_blue">
              Explore
            </button>
            <button className="tabletMd:px-10 mobileMd:px-5 px-3 py-3 font-medium tabletMd:text-lg text-sm bg-light_pink text-white hover:bg-background hover:text-light_pink rounded-lg duration-300 border hover:border-light_pink">
              Google WorkShop
            </button>
          </div>
        </div>
        <div className=" tabletLg:w-[35rem] w-[22rem] ">
          <Lottie animationData={lightAnimationData} loop={true} />
        </div>
      </div>
      <ScrollIntoView selector="#about">
        <div className="py-6 sm:py-28 mt-4 lg-mt-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-light_blue cursor-pointer mt-5" />
        </div>
      </ScrollIntoView>
    </>
  );
};

export default Hero;
