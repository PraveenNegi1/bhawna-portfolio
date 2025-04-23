import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className=" ">
        <div className="flex flex-col justify-center items-center lg:space-y-6">
          <h1 className="text-[#A14622] lg:text-2xl ">ABOUT ME</h1>
          <p className="text-[#555555] font-tienne lg:w-[668px] w-[315px] h-[54px] lg:h-[54px] text-center lg:text-[36px] font-semibold">
            Some core information about me
          </p>

          <Image
            src="/line.svg"
            className="w-[213px] h-10  object-cover"
            width={1000}
            height={1000}
            alt=""
          />
        </div>

        <div className="lg:mt-16 mt-8 bg-[#A14622] py-1 ">
          <Image
            src="/video.svg"
            className="lg:w-full w-[415px] lg:h-[550px] h-[144px]"
            width={1000}
            height={1000}
            alt=""
          />
        </div>

        {/* <div className="lg:mt-16 mt-8 bg-[#A14622] py-1">
          <video
            className="lg:w-full w-[415px] lg:h-[550px] h-[144px]"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}

        <p className="text-[#5F5F5F] lg:px-40 px-8 text-left  lg:text-[24px]  lg:my-20 my-8 font-manrope ">
          After transitioning from a background in physiotherapy, I&apos;ve
          dedicated myself to helping young learners navigate the competitive
          entrance processes for renowned institutions like Welham Girls&apos;
          School, Mayo College, Scindia Kanya Vidyalaya, The Doon School, and
          others. My goal is to guide students toward academic success while
          fostering their personal growth, helping them stand out in competitive
          entrance exams, interviews, and overall school applications.
        </p>
      </div>
    </div>
  );
};

export default About;
