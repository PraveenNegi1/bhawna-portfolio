"use client";

import { CheckCircle, Award, ScrollText } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const certifications = [
  "Copywriting Course – Gaurav Madaan",
  "Effective Writing Course – SWAYAM",
  "Human Resource Training – Tareeqa Global Solutions",
];

const achievements = [
  "Self-published 8+ books",
  "Written over 1000+ poems",
  "Worked in short films and documentaries",
];

const images = [
  "/certifecate/certificate01.jpg",
  "/certifecate/certificate2.jpg",
  "/certifecate/certificate3.jpg",
  "/certifecate/certificate4.jpg",
  "/certifecate/certificate5.jpg",
  "/certifecate/certificate6.jpg",
  "/certifecate/certificate7.jpg",
  "/certifecate/certificate8.jpg",
  "/certifecate/certificate9.jpg",
  "/certifecate/certificate12.jpg",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CertificationsAchievements() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h1 className="lg:text-[40px] text-[20px]  text-[#A44924] mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A44924] to-amber-600">
              Credentials & Accomplishments
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto md:text-[20px]">
            A collection of my professional certifications and personal
            achievements that showcase my commitment to growth and excellence.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6 md:space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <ScrollText className="text-[#A44924]" size={24} />
            <h2 className="lg:text-[40px] text-[20px] text-[#A44924]">
              My Certificates
            </h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-gray-600 max-w-3xl mx-auto mb-6 md:text-[20px]"
          >
            Professional certifications that have enriched my knowledge and
            expertise in various domains.
          </motion.p>
          <div className="mt-6">
            <Swiper
              modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 15,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop
              spaceBetween={10}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 1.2, spaceBetween: 15 },
                640: { slidesPerView: 1.5, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2.5, spaceBetween: 20 },
                1280: { slidesPerView: 3, spaceBetween: 25 },
              }}
              className="pb-14 max-w-full"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx} className="py-4 px-2 sm:px-3 md:px-4">
                  <motion.div
                    custom={idx}
                    variants={fadeInUp}
                    className="overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative group aspect-[4/3] w-full">
                      <img
                        src={src}
                        alt="Certificate"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0  p-3 sm:p-4 ">
                        <p className="text-white text-xs sm:text-sm md:text-base font-medium"></p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-2"
            >
              <CheckCircle className="text-[#A44924]" size={24} />
              <h2 className="lg:text-[40px] text-[24px] text-[#A44924]">
                Certifications
              </h2>
            </motion.div>

            <motion.ul variants={staggerContainer} className="space-y-4">
              {certifications.map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3 bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#A44924]/20"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#A44924]/10 flex items-center justify-center mt-0.5">
                    <CheckCircle className="text-[#A44924]" size={16} />
                  </div>
                  <div>
                    <span className="md:text-[20px]  font-medium">{item}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-2"
            >
              <Award className="text-yellow-500" size={24} />
              <h2 className="lg:text-[40px] text-[24px]   text-[#A44924]">
                Achievements
              </h2>
            </motion.div>

            <motion.ul variants={staggerContainer} className="space-y-4">
              {achievements.map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3 bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-yellow-400/30"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5">
                    <Award className="text-yellow-500" size={16} />
                  </div>
                  <div>
                    <span className="md:text-[20px]  font-medium">{item}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
