import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="lg:w-full lg:h-screen h-[917px] lg:bg-no-repeat bg-cover bg-bottom lg:flex lg:justify-evenly mb-28 pt-16 justify-center items-center"
        style={{ backgroundImage: 'url("/Desktopicon.svg")' }}
      >
        <div className="lg:w-[570px]  font-tienne lg:pt-0 pt-20 px-14  lg:px-0 py-5 lg:py-0">
          <span className="text-[#FFFFFF] uppercase lg:text-[48px] text-[30px]">
          Hello, I'm
          </span>
          <br />
          <span className="text-[#FFFFFF] capitalize lg:text-[48px] text-[30px] py-5 lg:py-0 ">
             Bhavna Ojha
          </span>

          <p className="lg:text-[20px] text-[15px] text-[#FFFFFF] py-5 lg:py-0">
            A passionate storyteller and digital wordsmith with 3+ years of
            experience in content writing, SEO, social media strategy, and
            digital branding. I blend creativity with market insights to craft
            content that connects, ranks, and converts. With a background in
            Mass Communication and Journalism, I understand the art of
            communication and the science behind digital visibility. I&apos;ve
            worked across industries from education, travel, and hospitality to
            renewable energy, helping brands build presence, purpose, and
            performance online.
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          {/* <div className="pt-8">
            <div className="lg:w-[200px] lg:h-[200px] px-3 py-3 w-[115px] h-[115px] bg-[#FFFFFF] lg:rounded-[40px] rounded-[15px] lg:px-7 lg:py-4 absolute lg:left-[-70px] left-[30px] lg:leading-tight">
              <p className="lg:text-[67px] text-[32px] font-bold ">3+</p>
              <span className="lg:text-[22px] text-[10px] font-bold  lg:mt-2 lg:leading-7 leading-3">
                years of Guidance & Consultation
              </span>
            </div>
          </div> */}

          <Image
            src="/certifecate/certificate1.jpg"
            className="lg:h-[600px] lg:w-[580px] w-[276px] h-[295px] rounded-full object-cover mt-8"
            alt="Bhavna Ojha"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
