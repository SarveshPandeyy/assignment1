import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-screen w-full flex-col flex justify-start items-center tabletLg:items-start gap-10 py-32"
    >
      <h1 className="tabletLg:text-5xl text-4xl font-medium text-dark_blue underline">
        Contact WEB-X
      </h1>
      <p className="text-2xl font-medium text-dark_blue">Talk to us</p>

      <div
        className="w-full flex flex-col justify-start items-center tabletLg:items-start gap-5"
        action="form"
      >
        <div className="flex flex-col justify-start items-start gap-1 w-full">
          <label className="text-light_slate/90" htmlFor="">
            *Name
          </label>
          <input
            className="py-2 px-4 bg-transparent border-2 border-light_blue rounded-lg w-80 outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-1 w-full">
          <label className="text-light_slate/90" htmlFor="">
            *Email
          </label>
          <input
            className="py-2 px-4 bg-transparent border-2 border-light_blue rounded-lg w-80 outline-none"
            type="text"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-1 w-full">
          <label className="text-light_slate/90" htmlFor="">
            *Message
          </label>
          <textarea
            className="py-2 px-4 bg-transparent border-2 border-light_blue rounded-lg w-80 h-20 outline-none"
            rows="4"
            cols="5"
          />
        </div>
        <button className="px-10 py-3 font-medium text-lg bg-light_pink text-white hover:transparent hover:text-light_pink rounded-lg duration-300 border hover:border-light_pink mt-5">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
