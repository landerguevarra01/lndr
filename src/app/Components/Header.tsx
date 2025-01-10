"use client";

import { Kufam, Monoton } from "@next/font/google";
import React from "react";

const kufam = Kufam({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
});

const handleClick = () => {
  handleScrollToTop(); // Scroll to the top first
  setTimeout(() => {
    window.location.reload(); // Reload after smooth scroll
  }, 400); // Adjust timeout for the scroll duration (300ms)
};

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Navbar() {
  return (
    <>
      <div
        className={`${kufam.className} bg-[#181818] flex justify-between items-center px-[2%] py-4 text-[40px] w-full fixed top-0 left-0 z-50`}
      >
        <div className="cursor-pointer" onClick={handleClick}>
          L <span className={`${monoton.className}`}>/</span>
        </div>
        <div className="cursor-pointer">menu</div>
      </div>
    </>
  );
}
