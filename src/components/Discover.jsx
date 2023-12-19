import React, { useEffect } from "react";

const Discover = () => {
  useEffect(() => {
    const handleScroll = () => {
      const discoverSection = document.getElementById("discover");

      if (discoverSection) {
        const discoverSectionTop = discoverSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the top of the "discover" section is within the viewport
        if (discoverSectionTop < windowHeight) {
          discoverSection.classList.add("slide-from-right");
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
    <div id="discover" className=" flex mt-20 mx-20">
      <div className="w-[50%] mt-32">
        <img className="rounded-xl" src="./../public/image2.jpeg" alt="" />
      </div>

      <div className=" flex flex-col ml-20 mt-10">
        <div className="bg-[#f4f1ea] text-xl py-2 text-center rounded-full text-[#2f1c01] w-80 flex">
          <p className="rounded-full w-3 h-3 bg-[#463610] ml-4 mr-2 mt-2 "></p>
          <p className="">Nothing else comes close</p>
        </div>
        <div className="mt-10">
          <p className="text-5xl">
            The best way to discover, track, and <br />
            share your readinf life
          </p>
          <p className="text-2xl opacity-50 mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus minus quos saepe? Odio ut inventore labore consequuntur,
            reiciendis totam non dicta, fugit, doloribus voluptatem nesciunt
            ipsam ex nam esse! Illo!
          </p>

          <button className="bg-[#463610] text-2xl py-3 px-5 rounded-full hover:opacity-75  text-white duration-300 ease-out text-center ml-2 mt-5">
            Join for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
