"use client";
import Image from "next/image";
import React from "react";

const qualifactions = [
  {
    image: "/frame1.svg",
    description: "Online Teaching & Instructional Design",
  },

  {
    image: "/frame1.svg",
    description: "Competitive Exam Preparation Techniques",
  },

  {
    image: "/frame1.svg",
    description: "Psychometric Testing & Interview Coaching",
  },

  {
    image: "/frame1.svg",
    description: "Advanced Study Skills for High Achievers",
  },

  {
    image: "/frame1.svg",
    description: "Communication & Soft Skills Development for Students",
  },
];
const Certifications = () => {
  return (
    <>
      <div>
        <div className="bg-[#A44924] text-[#FFFFFF]">
          <div className="hidden lg:block">
            <div className="flex justify-end pr-20  ">
              <div
                style={{
                  fontFamily: "Satisfy",
                  boxShadow: "0px 40px 10px 0px #00000026",
                }}
                className="text-[50px] w-[413px] h-[310px] bg-[#FFFFFF] space-x-14 space-y-6 pt-10 "
              >
                <i className="text-[#000000] pl-10">Qualification</i>
                <p className="text-[#A44924] text-[24px]">
                  Bachelor of Science in Physiotherapy
                  <span className="font-bold text-[26px]">(BPT)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex lg:space-x-6 space-x-4 pt-6 lg:pt-0 lg:px-24 px-12 items-center">
            <div
              style={{ fontFamily: "Times New Roman" }}
              className="lg:text-[50px] text-[24px]"
            >
              <i>Certifications</i>
            </div>

            <div className="lg:pt-4  ">
              <Image
                src="/frame.svg"
                className="lg:w-[60px] w-[30px] h-[25px] lg:h-[51px]"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
          </div>

          <div className="lg:pt-4 pt-3 lg:px-28 px-14">
            <Image
              src="/line1.svg"
              className="w-[213px] h-[30px]"
              width={1000}
              height={1000}
              alt=""
            />
          </div>

          <div className="hidden lg:flex flex-wrap justify-evenly pb-28">
            {qualifactions.map((qualifaction, index) => (
              <div
                key={index}
                className="bg-no-repeat w-[242px]  h-[220px]  lg:mt-10  lg:mx-32  "
                style={{
                  backgroundImage: `url(${qualifaction.image})`,
                }}
              >
                <p className="lg:w-[150px] w-[86px] lg:h-[100px] h-[64px] text-center mx-10 pt-12 text-[18px] ">
                  {qualifaction.description}
                </p>
              </div>
            ))}
          </div>
          <div className=" lg:hidden gap-y-6 gap-x-6 grid grid-cols-2 px-7 py-8">
            {qualifactions.map((qualifaction, index) => (
              <div key={index} className="object-cover w-[160px]  h-[150px]">
                <div className="relative">
                  <img src={qualifaction.image} alt="" />
                  <div className="absolute inset-0 top-[15%]">
                    <p className="text-[12px] font-semibold text-center px-8">
                      {qualifaction.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden flex justify-evenly items-center h-[140px]  bg-[#F3EDE6]">
          <div>
            <i className="text-[25px] font-medium">Qualification</i>
          </div>
          <div className="w-[126px] text-[12px] text-[#A44924]">
            <p>
              Bachelor of Science in Physiotherapy <strong>(BPT)</strong>
            </p>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="bg-[#F3EDE6] flex justify-between group ">
            <p className="text-[#A14622] text-[40px] mx-36 p-10 cursor-pointer">
              Additional Training
            </p>
            <div className="-mt-20 flex justify-end pr-12 gap-10 transition-transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-1000 ease-in-out">
              <div className="bg-[#C0542A] w-[364px] px-7 py-10 text-[#FFFFFF] text-[20px] border-2 border-white">
                <p>
                  Study Strategy <br /> & <br />
                  Time Management for Board Exams
                </p>
              </div>
              <div className="bg-[#C0542A] w-[364px] px-7 py-10 text-[#FFFFFF] text-[20px] border-2 border-white">
                <p>
                  Behavioral Psychology <br />& <br />
                  Student Motivation Techniques
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex-col space-y-6  py-16 bg-[#A44924]">
          <div>
            <p className="text-white text-[25px]">Additional Training</p>
          </div>
          <div className="border-t-4 border-r-4 border-b-4 bg-[#C0542A] border-white w-full text-white p-6">
            <p>Study Strategy </p>
            <p>&</p>
            <p>Time Management for Board Exams</p>
          </div>
            <div className="flex justify-end">
          <div className="border-t-4 border-l-4 border-b-4 bg-[#C0542A] border-white w-full text-white p-6">
            <p>Behavioral Psychology </p>
            <p>&</p>
            <p>Student Motivation Techniques</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
