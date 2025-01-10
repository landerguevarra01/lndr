"use client";

import { Kufam, Monoton } from "@next/font/google";
import React, { useState } from "react";
import About from "../About";
import Works from "../Project/Creative";
import Contact from "../Contact";
// import Cone from "../../Components/Shapes3d/Cone";
import Torus from "../../Components/ThreeJs/Torus";

const kufam = Kufam({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  return (
    <>
      <div className={`${kufam.className} px-[2%] py-[2%] mt-[80px] flex flex-col`}>
        <div className="text-[96px]">
          Lander Guevarra<span className={`${monoton.className}`}>,</span>
          <br />
          Front<span className={`${monoton.className}`}>-</span>End Developer
        </div>
        {/* <div className="cursor-pointer hover:scale-[102%] transform transition-all duration-300">
        About
        </div>
        <div className="cursor-pointer hover:scale-[102%] transform transition-all duration-300">
        Featured Projects
        </div>
        <div className="cursor-pointer hover:scale-[102%] transform transition-all duration-300">
        Let<span className={`${monoton.className}`}>&apos;</span>s Talk
        </div> */}
        {works.map((work, index) => (
          <div key={index} className="mt-6">
            <div
              className="flex items-center gap-12 cursor-pointer hover:scale-[101%] transform transition-all duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <div className="text-[96px]">{work.title}</div>
              {/* <div className="hidden md:flex absolute right-0">
              <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
                }`}
                >
                <path
                d="M6 36.0001L38 4.00012M38 4.00012H6M38 4.00012V36.0001"
                stroke={openIndex === index ? "#DB0102" : "#F3F3F3"}
                strokeWidth="8"
                strokeLinecap="square"
                />
                </svg>
                </div> */}
            </div>
            {openIndex === index && (
              <div className="mt-4 text-gray-600 transform transition-transform ease-in-out duration-500">
                {work.page}
              </div>
            )}
            <div className="border-b border-gray-300 mt-4" />
          </div>
        ))}
      </div>
      <div>
        {/* <Cone /> */}
        <Torus />
      </div>
    </>
  );
}
