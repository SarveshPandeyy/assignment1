import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen w-full flex flex-col justify-start items-center gap-20 py-36 bg-white rounded-lg"
    >
      <h1 className="tabletLg:text-8xl mobileLg:text-6xl text-4xl text-light_black font-semibold">
        Welcome to Web-X
      </h1>
      <div className="w-full laptopMd:px-10 px-4 flex flex-wrap gap-10 justify-evenly items-center ">
        <div className="w-[22rem] h-[24rem] rounded-lg flex flex-col gap-3 justify-start items-center bg-navy_blue py-5">
          <h1 className="text-white font-base text-2xl  pb-1">Our Story</h1>
          <p className="px-5 py-2 text-left text-white">
            Welcome to Web-X, where we offer a wide range of web services to
            businesses and individuals looking to improve their online presence.
            Our team of experienced developers, designers, and marketing experts
            work together to create custom solutions that meet your unique
            needs. From website design and development to social media
            management and online advertising, we provide everything you need to
            succeed online
          </p>
        </div>
        <div className="w-[22rem] h-[24rem] rounded-lg flex flex-col gap-3 justify-start items-center bg-navy_blue py-5">
          <h1 className="text-white font-base text-2xl">Our Mission</h1>
          <p className="px-5 py-2 text-left text-white">
            Our mission statement is simple: to help our clients achieve their
            goals by providing innovative web services and exceptional customer
            service. We believe that by putting our clients first, we can build
            lasting relationships that allow us to grow and improve together.
          </p>
        </div>
        <div className="w-[22rem] h-[24rem] rounded-lg flex flex-col gap-3 justify-start items-center bg-navy_blue py-5">
          <h1 className="text-white font-base text-2xl">Our Values</h1>
          <p className="px-5 py-2 text-left text-white">
            Our values are the foundation of everything we do. We believe in:
            Excellence - We strive for excellence in everything we do, from the
            quality of our work to the level of customer service we provide.
            Innovation - We are constantly exploring new technologies and
            approaches to provide our clients with the most innovative
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
