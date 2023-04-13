import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonial = () => {
  return (
    <div
      id="testimonial"
      className="w-full min-h-screen flex flex-col justify-start items-center py-32 gap-12"
    >
      <h1 className="tabletLg:text-7xl mobileLg:text-5xl text-4xl text-center  font-medium text-dark_blue">
        Testimonial
      </h1>
      <div className="flex flex-wrap justify-evenly items-center tabletLg:gap-4 gap-6 w-full">
        <div className="flex flex-col justify-start items-start py-5 px-4 gap-5 w-[22rem] h-[24rem] rounded-lg  border-2 border-light_blue">
          <RiDoubleQuotesR className="text-light_gray text-3xl" />
          <p>
            I don't have words to thank this man, I'm really grateful to have
            this channel and website in my daily routine. If you're a mere
            beginner, then you can trust this guy and can put your time into his
            content. I can assure you that it'll be worth it.
          </p>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <h1 className="text-lg font-medium text-dark_blue">Mohit Kumar</h1>
            <p className="text-sm font-medium italic">Web Developer</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start py-5 px-4 gap-5 w-[22rem] h-[24rem] rounded-lg  border-2 border-light_blue">
          <RiDoubleQuotesR className="text-light_gray text-3xl" />
          <p>
            I don't have words to thank this man, I'm really grateful to have
            this channel and website in my daily routine. If you're a mere
            beginner, then you can trust this guy and can put your time into his
            content. I can assure you that it'll be worth it.
          </p>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <h1 className="text-lg font-medium text-dark_blue">
              Utkarsh Tiwari
            </h1>
            <p className="text-sm font-medium italic">Android Developer</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start py-5 px-4 gap-5 w-[22rem] h-[24rem] rounded-lg  border-2 border-light_blue">
          <RiDoubleQuotesR className="text-light_gray text-3xl" />
          <p>
            I don't have words to thank this man, I'm really grateful to have
            this channel and website in my daily routine. If you're a mere
            beginner, then you can trust this guy and can put your time into his
            content. I can assure you that it'll be worth it.
          </p>
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <h1 className="text-lg font-medium text-dark_blue">
              Sarvesh Kumar Pandey
            </h1>
            <p className="text-sm font-medium italic">Data Scientist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
