
"use client";

import Image from "next/image";
import React, { useState } from "react";

const Experiences = [
  {
    number: "01",
    description1: "Tailored Study Plans for Academic Excellence and Balanced Growth",
    description2:
       " Developed personalized study schedules and strategies for students, focusing on enhancing academic skills while maintaining a balanced lifestyle",
},

  {
    number: "02",
    description1: "Holistic Preparation for Boarding School Admissions: Collaborating with Families",
    description2:
     "Worked with families to prepare their children for entrance exams and school - specific criteria, ensuring they are well - rounded applicants",
},

  {
    number: "03",
    description1: "Holistic Preparation for Boarding School Admissions: Collaborating with Families",
    description2:
      "Coordinated group study sessions and workshops that addressed common academic challenges in competitive exams and boarding school interviews",
},

];

const Experience2 = () => {

  return (
    <div className="bg-[#F3EDE6]">

      <div className="flex flex-row items-center pb-20">
        <div className="bg-[#A14622] lg:w-[260px] w-[100px] lg:h-[200px] h-[81px] lg:p-16 p-6">
          <Image
            src="/Literature.svg"
            className="lg:w-[83px] lg:h-[83px] w-[38px] h-[38px]"
            width={1000}
            height={1000}
            alt=""
          />
        </div>

        <div className="lg:w-[1000px] w-[215px] lg:pl-20 pl-10">
          <h1 className="lg:text-[40px] text-[20px] text-[#000000] font-bold">
          Academic Coach  &  Study Mentor
          </h1>
          
        </div>
      </div>

      <div className=" bg-[#F3EDE6] pb-16 ">
        {Experiences.map((Experience, index) => (
          <div
            className={`lg:flex lg:justify-between border-2 border-black group border-t border-b lg:p-20 lg:h-[340px] bg-[#F3EDE6] hover:bg-[#A14622] hover:text-white p-4 space-y-4`}
            key={index}
            
          >
            <h1 className="lg:text-[30px] text-[15px] font-bold">{Experience.number}</h1>
            <p className="lg:w-[325px] w-full  lg:h-[82px] lg:text-[25px] text-[15px] font-semibold">
              {Experience.description1}
            </p>
            <p className="text-[#A14622] lg:text-[25px] text-[12px] lg:w-[540px] lg:h-[204px]  w-full  text-left group-hover:text-white">
              {Experience.description2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience2;
