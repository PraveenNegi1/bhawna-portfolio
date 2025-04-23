import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#F3F3F3] pb-6">
      <div className="">
        <div className="flex flex-col justify-center items-center lg:space-y-6 space-y-3">
          <h1 className="text-[#A14622] lg:text-2xl">TESTIMONIALS & REVIEWS</h1>
          <p className="text-[#555555] font-tienne lg:w-[668px] w-[315px] h-[30px] lg:h-[54px] text-center lg:text-[36px] font-semibold">
          My Impressions..
          </p>

          <Image
            src="/line.svg"
            className="w-[213px] h-10 object-cover"
            width={1000}
            height={1000}
            alt=""
          />
        </div>

        <div className="mt-16 bg-[#A14622] py-1 ">
          <Image
            src="/video.svg"
            className="lg:w-full lg:h-[500px] w-[414px] h-[144px]"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
      </div>

      <div className="lg:flex justify-center items-center gap-10 lg:m-20 space-y-8 lg:space-y-0 px-6 lg:px-0 pt-5 lg:pt-0">
        <div className="bg-[#A14622]  lg:w-[520px] lg:h-[520px]">
          <Image
            src="/ticon.svg"
            className="w-[100px] h-[100px] p-4"
            width={1000}
            height={1000}
            alt=""
          />

          <p className="text-[#FFFFFF] text-[12px] lg:text-[25px] p-4">
            Dr. Noshin&apos;s coaching truly helped me during my admission process!
            Her interview tips were so valuable, and I felt much more confident
            when facing the panel. I&apos;m now a proud student of Mayo College!
          </p>
          <p className="text-[#FFFFFF] text-[16px] lg:text-[25px] p-4">
            <span className="font-bold text-[20px] lg:text-[30px]">Vasunndhra Goel </span>
            (Student)
          </p>
          <p className="text-[#FFFFFF] text-[12px] lg:text-[20px] p-4">6th, Welham Girls&apos;s School</p>
        </div>

        <div className="bg-[#A14622] lg:w-[520px] lg:h-[520px] ">
          <Image
            src="/ticon.svg"
            className="w-[100px] h-[100px] p-4"
            width={1000}
            height={1000}
            alt=""
          />

          <p className="text-[#FFFFFF] text-[12px]  lg:text-[25px] p-4">
            We struggled to navigate the boarding school admission process until
            we found Dr. Noshin. Her personalized approach helped our daughter
            prepare academically and emotionally, and she received offers from
            multiple top schools!
          </p>
          <p className="text-[#FFFFFF] text-[16px] lg:text-[25px] p-4">
            <span className="font-bold text-[20px] lg:text-[30px]">Princy Gupta</span>
            (Parent)
          </p>
          <p className="text-[#FFFFFF] text-[12px] lg:text-[20px] p-4">Amish Gupta (Daughter), 7th, Welham Girls&apos;s School</p>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
