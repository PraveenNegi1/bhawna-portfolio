"use client"

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const SkillItem = ({ children, icon, delay }) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
    >
      <span className="text-lg mr-2">{icon}</span>
      <span className="text-gray-700">{children}</span>
    </motion.li>
  );
};

const SkillCard = ({ title, skills, iconType, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.6, delay: delay * 0.2 } 
        }
      }}
      className="bg-gray-50 shadow-xl rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
    >
      <div className="bg-gradient-to-r from-[#A44924] to-[#c85e36] p-4 text-white">
        <h3 className="text-[20px] ">{title}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {skills.map((skill, index) => (
            <SkillItem key={index} icon={iconType} delay={index + delay}>
              {skill}
            </SkillItem>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const About = () => {
  const titleControls = useAnimation();
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      titleControls.start("visible");
    }
  }, [titleControls, isInView]);
  
  const hardSkills = [
    "SEO & SMO Strategy",
    "Copywriting & Creative Content Writing",
    "Website Content & Blogs",
    "YouTube Content Strategy",
    "Market & Keyword Research",
    "Proofreading & Content Editing",
    "Advanced Excel"
  ];
  
  const softSkills = [
    "Influential & Confident Communicator",
    "Public Speaking & Storytelling",
    "Calm Under Pressure",
    "Convincing & Strategic Thinker",
    "Team Leadership & Editorial Direction"
  ];

  return (
    <section className="bg-gradient-to-b from-[#A44924] to-[#873d1e] py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" } 
            }
          }}
          className="mb-16 text-center"
        >
          <h2 className="lg:text-[40px] text-[20px] text-3xl font-bold text-white mb-4">
            What I Do Best
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 md:text-[20px] text-[15px]">
          <SkillCard 
            title="Hard Skills" 
            skills={hardSkills} 
            delay={0} 
          />
          <SkillCard 
            title="Soft Skills" 
            skills={softSkills} 
            delay={1} 
          />
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-40 right-10 w-40 h-40 rounded-full bg-white hidden lg:block "
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-white hidden lg:block"
      ></motion.div>
    </section>
  );
};

export default About;