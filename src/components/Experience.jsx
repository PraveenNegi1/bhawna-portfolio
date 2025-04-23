"use client";

import Image from "next/image";
import React, { useState } from "react";

const Experiences = [
  {
    number: "01",
    description1: "Boarding Admissions",
    description2:
      " Ranked among the top search results, thanks to strategic keyword research and SEO-powered blog content that brought consistent traffic.",
  },

  {
    number: "02",
    description1: "Go Solar",
    description2:
      " Improved social media engagement by 60%, grew followers organically, and amplified brand credibility with myth-busting reels and enhanced website presence with keyword-driven content writing in Hindi and English.",
  },

  {
    number: "03",
    description1: "JSR Group Hotels",
    description2:
      " Helped shape their brand identity online by aligning each caption and post with the service essence, crafting unique strategies and content.",
  },

  {
    number: "04",
    description1: "Shaadivyah",
    description2:
      " Increased audience engagement through relatable, trend-aligned content and an emotional brand voice that resonated with the wedding audience.",
  },

  {
    number: "05",
    description1: "Go Edu",
    description2:
      " Built a voice of trust and expertise in the education sector with storytelling-led blogs and reels, driving both traffic and inquiries.",
  },
];

const Experience = () => {
  return (
    <div className="bg-[#F3EDE6]">
      <div className="flex flex-col justify-center items-center pt-16 pb-14">
        <h1 className="lg:text-[40px] text-[20px] text-[#A14622] font-tienne ">
          How My Strategies Drive Real Impact
        </h1>

        <Image
          src="/line.svg"
          className="w-[213px] h-10"
          width={1000}
          height={1000}
          alt=""
        />
      </div>

      <div className=" bg-[#F3EDE6] pb-16 ">
        {Experiences.map((Experience, index) => (
          <div
            className={`lg:flex lg:justify-between border-2 border-black group border-t border-b lg:p-20 lg:h-[340px] bg-[#F3EDE6] hover:bg-[#A14622] hover:text-white p-4  space-y-4`}
            key={index}
          >
            <h1 className="lg:text-[30px] text-[15px] ">{Experience.number}</h1>
            <p className="lg:w-[325px] w-full h-[40px] lg:h-[82px] lg:text-[25px] text-[15px] ">
              {Experience.description1}
            </p>
            <p className="text-[#A14622] lg:text-[20px] text-[15px] lg:w-[540px] lg:h-[204px]  w-full  text-left group-hover:text-white">
              {Experience.description2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
