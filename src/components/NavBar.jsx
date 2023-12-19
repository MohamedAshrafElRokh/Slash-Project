import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white w-full text-black p-4 font-serif shadow-md flex justify-between fixed z-20">
      <div className="text-3xl text-[#463610]">
        <p>BookRent</p>
      </div>

      {/* Responsive Navigation Links */}
      <div className="hidden md:flex items-center text-2xl text-[#463610]">
        <a href="/">
          <p className="px-3 hover:opacity-75">Home</p>
        </a>
        <a href="/product">
          <p className="px-3 hover:opacity-75">Products</p>
        </a>
        <a href="#about">
          <p className="mx-3">About</p>
        </a>
      </div>

      {/* Responsive Buttons */}
      <div className="flex text-xl">
        <button className="mx-3 text-[#463610]">LogIn</button>
        <button className="bg-[#463610] py-3 px-6 rounded-full text-white hover:opacity-75">
          SignUP
        </button>
      </div>
    </div>
  );
};

export default NavBar;
