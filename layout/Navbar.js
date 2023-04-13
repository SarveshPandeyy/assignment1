import Link from "next/link";
import React from "react";
import { SiCodingninjas } from "react-icons/si";
import ScrollIntoView from "react-scroll-into-view";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiXSquare } from "react-icons/fi";
const Navbar = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="h-24 fixed w-full z-10 ">
        <div className="flex justify-between items-center h-full px-6 bg-white w-full relative">
          <Link href={`/`}>
            <div className="flex justify-start gap-[1px] items-center">
              <SiCodingninjas className="text-3xl text-[#712AFB]" />
              <h1 className="text-2xl text-dark_blue pl-1">WEB-X</h1>
            </div>
          </Link>

          <div className="tabletLg:block hidden ">
            <div className="flex justify-start gap-1 items-center">
              <div className="flex justify-start items-center gap-10 mx-0 text-xl font-semibold">
                <ScrollIntoView selector="#hero">
                  <div className=" text-light_slate font-semiBold hover:bg-logo_color duration-300 rounded-lg hover:text-white py-2 px-3 cursor-pointer">
                    Home
                  </div>
                </ScrollIntoView>
                <ScrollIntoView selector="#about">
                  <div className=" text-light_slate font-semiBold hover:bg-logo_color duration-300 rounded-lg hover:text-white py-2 px-3 cursor-pointer">
                    About Us
                  </div>
                </ScrollIntoView>
                <ScrollIntoView selector="#services">
                  <div className=" text-light_slate font-semiBold hover:bg-logo_color duration-300 rounded-lg hover:text-white py-2 px-3 cursor-pointer">
                    Services
                  </div>
                </ScrollIntoView>
                <ScrollIntoView selector="#team">
                  <div className=" text-light_slate font-semiBold hover:bg-logo_color duration-300 rounded-lg hover:text-white py-2 px-3 cursor-pointer">
                    Team
                  </div>
                </ScrollIntoView>
                <ScrollIntoView selector="#testimonial">
                  <div className=" text-light_slate font-semiBold hover:bg-logo_color duration-300 rounded-lg hover:text-white py-2 px-3 cursor-pointer">
                    Testimonial
                  </div>
                </ScrollIntoView>
                <ScrollIntoView selector="#contact">
                  <div className=" text-light_slate font-semiBold hover:bg-logo_color duration-300 rounded-lg hover:text-white py-2 px-3 cursor-pointer">
                    Contact
                  </div>
                </ScrollIntoView>
              </div>
            </div>
          </div>
          <GiHamburgerMenu
            onClick={handleClick}
            className="text-xl text-logo_color tabletLg:hidden block cursor-pointer"
          />
        </div>
        <div
          className={` z-50 bg-white min-h-screen absolute top-0 right-[-8px] bottom-0  ${
            isOpen
              ? "w-[14rem] transition-all ease-in duration-300"
              : "w-0 transition-all ease-in duration-300"
          }`}
        >
          <div className="w-full h-full fixed">
            <div
              className={`w-full
        duration-300  min-h-screen bg-white flex flex-col justify-start items-start gap-6 pl-5`}
            >
              <div className="flex justify-between gap-5 items-end">
                <FiXSquare
                  className={` right-1 cursor-pointer top-5 text-3xl text-logo_color ${
                    isOpen ? "block" : "hidden"
                  }`}
                  onClick={() => setIsOpen(false)}
                />
                <h1
                  className={` mobileLg:text-3xl text-2xl   pt-6 text-logo_color w-4/5 `}
                >
                  WEB-X
                </h1>
              </div>

              <hr className="border border-light_slate w-11/12" />

              <div
                className={`flex justify-start gap-4 items-center text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-light_blue cursor-pointer `}
                onClick={() => setIsOpen(false)}
              >
                <ScrollIntoView selector="#hero">
                  <div className="flex justify-start gap-4 items-center w-full">
                    <h1 className={``}>Home</h1>
                  </div>
                </ScrollIntoView>
              </div>

              <div
                className={`text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-light_blue cursor-pointer `}
                onClick={() => setIsOpen(false)}
              >
                <ScrollIntoView selector="#about">
                  <div className="flex justify-start gap-4 items-center w-full">
                    <h1 className={``}>About</h1>
                  </div>
                </ScrollIntoView>
              </div>

              {/* </Link> */}
              <div
                className="flex justify-start gap-4 items-center text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-light_blue cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <ScrollIntoView selector="#services">
                  <div className="flex justify-start gap-4 items-center w-full">
                    <h1 className={``}>Services</h1>
                  </div>
                </ScrollIntoView>
              </div>
              <div
                className="flex justify-start gap-4 items-center text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-light_blue cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <ScrollIntoView selector="#team">
                  <div className="flex justify-start gap-4 items-center w-full">
                    <h1 className={``}>Team</h1>
                  </div>
                </ScrollIntoView>
              </div>
              <div
                className="flex justify-start gap-4 items-center text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-light_blue cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <ScrollIntoView selector="#testimonial">
                  <div className="flex justify-start gap-4 items-center w-full">
                    <h1 className={``}>Testimonial</h1>
                  </div>
                </ScrollIntoView>
              </div>
              <div
                className="flex justify-start gap-4 items-center text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-light_blue cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <ScrollIntoView selector="#contact">
                  <div className="flex justify-start gap-4 items-center w-full">
                    <h1 className={``}>Contact</h1>
                  </div>
                </ScrollIntoView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
