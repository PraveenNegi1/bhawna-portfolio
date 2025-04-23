import React from "react";

const Mymantra = () => {
  return (
    <>
      <div className="bg-[#A44924] px-8  py-16  lg:p-24">
        <div className="text-[32px] lg:text-7xl flex gap-2 items-center">
          <h1 className="text-[#F8F9FA] font-playfair lg:text-[40px] text-[20px]">
            My <span className="text-[#F8F9FA]">Mantra</span>
          </h1>
          <hr className="h-1 w-[100px] lg:w-[872px]" />
        </div>

        <div>
          <div className="border-2 border-white bg-[#A44924] rounded-lg mt-5 lg:mt-20 p-8">
            <p className="text-white text-[20px]  font-bricolage">
              <span className="md:text-[24px]">
                Bringing ideas to life with words that work and strategies that
                spark results..
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mymantra;
