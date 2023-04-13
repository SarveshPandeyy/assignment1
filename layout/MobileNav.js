import React from "react";

const MobileNav = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`z-20 ${
          isOpen ? "w-[17rem]" : "w-0"
        } transition-all duration-300 bg-logo_color/60 `}
      ></div>
    </>
  );
};

export default MobileNav;
