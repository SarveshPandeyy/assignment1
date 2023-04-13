import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const index = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen  bg-white">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        {children}
      </div>
    </>
  );
};

export default index;
