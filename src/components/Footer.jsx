import React, { useEffect } from "react";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const footerSection = document.getElementById("footer");

      if (footerSection) {
        const footerSectionTop = footerSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the top of the "footer" section is within the viewport
        if (footerSectionTop < windowHeight) {
          footerSection.classList.add("slide-from-bottom");
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
    <div
      id="footer"
      className="w-full bg-[#f4f1ea]  flex justify-around p-10 mt-10"
    >
      <div>
        <p className="text-2xl mb-2">Contact us</p>
        <div className="flex items-center">
          <IoMailSharp />
          <p className="text-xl ml-2">example@gmail.com</p>
        </div>
        <div className="flex items-center">
          <FaPhoneSquareAlt />
          <p className="text-xl ml-2">11-2541215</p>
        </div>
      </div>
      <div className="flex text-2xl items-center">
        <div className="mx-5">
          <FaFacebook />
        </div>
        <FaTwitter />
        <div className="mx-5">
          <AiFillInstagram />
        </div>
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Footer;
