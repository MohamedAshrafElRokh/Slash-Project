import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaSearch } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import Items from "./Items"; // Make sure to import your Items component

const Content = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the top of the "about" section is within the viewport
        if (aboutSectionTop < windowHeight) {
          aboutSection.classList.add("slide-from-left");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about">
      <div className="w-full">
        <div className="w-1/2 flex flex-col justify-center mt-20 ml-10">
          <div className="bg-[#f4f1ea] text-xl py-2 text-center rounded-full text-[#2f1c01] w-80 flex">
            <p className="rounded-full w-3 h-3 bg-[#463610] ml-4 mr-2 mt-2 "></p>
            <p className="">Why choose BookRent</p>
          </div>

          <p className="text-6xl mt-5">
            Best way to manage your <br /> reading life
          </p>
          <p className="text-lg mt-5 opacity-75">
            keep track of what you're reading, set reading goals, and <br />{" "}
            connect with friends to share your book reviews.
          </p>
        </div>
      </div>
      <div className="flex mt-20 justify-around">
        <Items icon={FaSearch} label={"Book Biscovery"} />
        <Items icon={BsFillPeopleFill} label={"Friends and Community"} />
        <Items icon={GoStarFill} label={"Book Reviews"} />
      </div>
    </div>
  );
};

export default Content;
