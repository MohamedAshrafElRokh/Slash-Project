import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full">
      <img
        className="w-full h-[100vh] object-cover"
        src="./../public/image.jpg"
        alt="Hero Background"
      />
      <div className="absolute top-1/3 lg:top-1/2 left-1/2 transform -translate-x-1/2 z-10 text-white text-center font-serif">
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Find your new <br className="lg:hidden" /> book with the{" "}
          <br className="lg:hidden" /> best price
        </p>
        <button className="bg-[#463610] text-2xl py-4 px-6 rounded-lg hover:bg-white hover:text-black duration-300 ease-out mt-5">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
