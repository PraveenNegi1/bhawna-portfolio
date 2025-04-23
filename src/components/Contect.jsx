"use client";

import Image from "next/image";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await emailjs.send(
        "service_403m16w",
        "template_57edpli",
        formData,
        "_gcViyaYmp8cIM5j_"
      );
      console.log("SUCCESS!", response);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        topic: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <div className="lg:flex justify-center lg:bg-white bg-[#F3F3F3] items-center lg:m-20 px-6 lg:px-32 pt-16 pb-16 lg:pb-0 gap-32 ">
       

        <div className="text-[#5F5F5F]  bg-[#F3F3F3] font-tienne ">
         <div className="text-[44px] bg-[#A14622] text-[#F3F3F3] p-2 text-center">
          Contact Information
          </div>

          <div className=" border border-[#A14622] px-6 lg:px-20 py-10 space-y-6 ">
          
            <p className="font-bold text-[20px] lg:text-[25px] ">Email</p>
            <a href="mailto:Noshinaslam2211@gmail.com"
            className="text-[20px]">
              noshinaslam2211@gmail.com
            </a>

            <p className="font-bold text-[20px] lg:text-[25px]">LinkedIn</p>
            <a href="linkedin.com/in/noshin-aslam-94637b1a4"
               className="text-[20px]">
              linkedin.com/in/noshin-aslam-94637b1a4
            </a>

            <div className="flex flex-wrap gap-3">
              <p className="font-bold text-[20px] lg:text-[25px]">Website</p>
              <a
                href="https://www.boardingadmissions.com/"
                className="break-words w-full text-[20px] "
              >
                https://www.boardingadmissions.com
              </a>
            </div>

            <p className="font-bold text-[20px] lg:text-[25px]">
              Social Media Links
            </p>

            <div className="flex flex-wrap gap-3">
              <Image
                src="/insta.svg"
                className="w-[30px] h-[30px]    "
                width={1000}
                height={1000}
                alt=""
              />
              <p className="font-bold text-[20px] lg:text-[25px]">Instagram:</p>
              <a href="dr.noshin_aslam" className="break-words w-full text-[20px]">
                dr.noshin_aslam
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <Image
                src="/facebook.svg"
                className="w-[30px] h-[30px]"
                width={1000}
                height={1000}
                alt=""
              />
              <p className="font-bold text-[20px] lg:text-[25px]">Facebook :</p>
              <a
                href="https://www.facebook.com/noshin.aslam.1"
                className="break-words w-full text-[20px] "
              >
                https://www.facebook.com/noshin.aslam.1
              </a>
            </div>
          </div>
        </div>
        <div className=" md:w-auto p-8 md:p-24 lg:p-12">
          <div className="text-[#A14622] md:text-[56px]  text-[30px]">
            Contact me
          </div>
          <div className="text-[#A14622] md:text-[32px] text-[20px]">
            Let&apos;s get in Touch
          </div>

          <div className="">
            <div className="grid grid-cols-2 py-12">
              <div className="">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 text-white md:w-auto w-[320px]"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border bg-transparent border-[#A1462299] outline-none  text-black placeholder-[#A1462299] w-[320px] md:w-[520px] h-[45px] text-[20px] rounded-lg p-3"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border bg-transparent border-[#A1462299] outline-none  text-[#000000] placeholder-[#A1462299] rounded-lg w-[320px] md:w-[520px] h-[45px] text-[20px] p-3"
                    required
                  />
                  <input
                    type="text"
                    name="topic"
                    placeholder="Topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="border bg-transparent border-[#A1462299] outline-none  text-[#000000] placeholder-[#A1462299] md:w-[520px] w-[320px] rounded-lg h-[45px] text-[20px] p-3"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border bg-transparent resize-none outline-none border-[#A1462299] text-[#000000] placeholder-[#A1462299] md:w-[520px] w-[320px] h-[125px] rounded-lg text-[20px] p-3"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className={`border bg-[#A14622] w-[320px] md:w-[520px] h-[56px] text-[24px] rounded-lg text-[#F3EFE5]
                      ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#a14622d6]"}
                      `}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-center items-center lg:p-20 bg-[#F3EDE6] px-6 lg:px-0 pb-12  ">
        <div className="pt-10">
          <div className="border-[6px] border-[#000000] text-[#000000] w-full p-6 bg-[#F3F3F3] lg:hidden ">
            <p className="lg:text-[40px] text-[20px] font-bold font-tienne pl-8">
              Future Projects & Plans
            </p>
          </div>
          <div className="-mb-16 -ml-10 hidden lg:block">
            <Image
              src="/cir.svg"
              className="w-[115px] h-[118px]    "
              width={1000}
              height={1000}
              alt=""
            />
          </div>
          <div className="bg-[#A14622] text-[#FFFFFF] lg:text-[25px] txt-[16px] w-full p-8  lg:w-[1032px] py-16 lg:py-16 lg:p-20">
            <p className="font-tienne">
              I am working on expanding my online platform to offer video
              courses and workshops that can guide students across various
              aspects of the boarding school admission process — from exam
              preparation to emotional intelligence training. I aim to reach
              more students across India and provide them with the tools they
              need to succeed in this competitive landscape.
            </p>
          </div>
        </div>

        <div className="border-[6px] border-[#000000] text-[#000000] w-[320px] px-8 mt-10 z-10 -ml-10 bg-[#F3F3F3] hidden lg:block">
          <p className="text-[40px] font-bold font-tienne">
            Future Projects & Plans
          </p>
        </div>
      </div>
    </>
  );
};

export default Contect;
