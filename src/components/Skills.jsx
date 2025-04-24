"use client"

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ProjectItem = ({ company, description, delay }) => {
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
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, delay: delay * 0.15 } 
        }
      }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#A44924] mb-6"
    >
      <h3 className="text-[#A44924] text-xl lg:text-2xl font-medium mb-3">{company}</h3>
      <p className="text-gray-700 text-base lg:text-lg">{description}</p>
    </motion.div>
  );
};

const Projects = () => {
  const titleControls = useAnimation();
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.1 });
  
  const introControls = useAnimation();
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
    if (introInView) {
      introControls.start("visible");
    }
  }, [titleControls, titleInView, introControls, introInView]);

  const projects = [
    {
      company: "Mobility Foresights",
      description: "I authored 100+ articles, conducted market research, and handled both on-page and off-page SEO, along with publishing on LinkedIn, Medium, Reddit, and niche communities."
    },
    {
      company: "Shaadivyah",
      description: "I shaped the brand voice, curated wedding-specific content, and managed their entire social media presence with engagement-focused strategies."
    },
    {
      company: "Boarding Admissions, Edu123, and Go Edu",
      description: "My work involved website content writing, keyword-driven blogging, and full-scale social media management for education-centric platforms."
    },
    {
      company: "Go Solar",
      description: "I created impactful YouTube scripts and posts, led social media optimization, and launched awareness campaigns that boosted their visibility."
    },
    {
      company: "Thrillozeal",
      description: "I focused purely on social media—building a travel-loving audience through compelling visuals and captions."
    },
    {
      company: "JSR Group Hotels",
      description: "I took charge of social media content, curating posts for their stay, café, and salon verticals, reflecting a consistent tone and aesthetic across platforms."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" } 
            }
          }}
        >
          <h2 className="lg:text-[40px] text-[20px] text-center text-[#A44924] mb-3">
            Projects I've Worked On
          </h2>
          <div className="w-24 h-1 bg-[#A44924] mx-auto mb-10 rounded-full"></div>
        </motion.div>

        <motion.div
          ref={introRef}
          initial="hidden"
          animate={introControls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.2 } 
            }
          }}
          className="mb-12"
        >
          <p className="text-[15px] md:text-[20px] text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Over the past <span className="text-[#A44924] font-semibold">3+ years</span>,
            I&apos;ve worked across diverse industries, creating strategic,
            SEO-optimized content and managing digital platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectItem 
              key={index}
              company={project.company}
              description={project.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;