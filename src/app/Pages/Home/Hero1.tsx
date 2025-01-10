"use client";

import { Kufam, Monoton } from "@next/font/google";
import React, { useState, useEffect } from "react";
import About from "../About";
import Works from "../Project/Creative";
import Contact from "../Contact";
// import Cone from "../../Components/Shapes3d/Cone";
import Torus from "../../Components/ThreeJs/Torus";

const kufam = Kufam({
  subsets: ["latin"],
  weight: ["700"],
});

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const works = [
    {
      title: "About",
      page: <About />,
    },
    {
      title: "Featured Projects",
      page: <Works />,
    },
    {
      title: (
        <>
          Let<span className={`${monoton.className}`}>&apos;</span>s Talk
        </>
      ),
      page: <Contact />,
    },
  ];

  // Scroll effect logic
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${kufam.className} px-[2%] py-[2%] mt-[80px] flex flex-col relative overflow-x-hidden`}
      >
        <div className="text-[96px]">
          Lander Guevarra<span className={`${monoton.className}`}>,</span>
          <br />
          Front<span className={`${monoton.className}`}>-</span>End Developer
        </div>
        {works.map((work, index) => (
          <div key={index} className="mt-6">
            <div
              className="flex items-center gap-12 cursor-pointer hover:scale-[101%] transform transition-all duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <div className="text-[96px]">{work.title}</div>
            </div>
            {openIndex === index && (
              <div className="mt-4 text-gray-600 transform transition-transform ease-in-out duration-500 overflow-x-hidden w-full">
                {work.page}
              </div>
            )}
            <div className="border-b border-gray-300 mt-4" />
          </div>
        ))}
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full z-[-1] overflow-x-hidden"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`, // Adjust the multiplier for the parallax effect
          transition: "transform 0.1s ease-out", // Smooth transition
        }}
      >
        {/* <Cone /> */}
        <Torus />
      </div>
    </>
  );
}
