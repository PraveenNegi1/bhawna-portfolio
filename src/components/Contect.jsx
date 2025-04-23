"use client";

import { Instagram, Linkedin, Facebook, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bhavna-ojha-50a5b7232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: Linkedin,
    color: "text-blue-600",
    bg: "hover:bg-blue-50",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bhavyy_writes?igsh=MTYxdzBpZDJ0OWZneA==",
    icon: Instagram,
    color: "text-pink-500",
    bg: "hover:bg-pink-50",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/18okCsmD7w/",
    icon: Facebook,
    color: "text-blue-800",
    bg: "hover:bg-blue-100",
  },
  {
    name: "Ink and Rhymes",
    url: "https://notionpress.com/in/read/ink-and-rhymes",
    icon: BookOpen,
    color: "text-emerald-600",
    bg: "hover:bg-emerald-50",
  },
];

export default function DigitalPresence() {
  return (
    <div className="px-4 py-16 md:px-24 bg-gradient-to-b from-[#A44924] to-[#873d1e] text-[#A44924]">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="lg:text-[40px] text-[24px] text-white font-bold">
            🌐 Digital Presence
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
            Connect with me on social platforms and explore my published work online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {socialLinks.map(({ name, url, icon: Icon, color, bg }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl border transition shadow-md bg-white ${bg}`}
            >
              <div className={`p-3 rounded-full ${color.replace('text-', 'bg-').replace('-600', '-100').replace('-500', '-100').replace('-800', '-100')}`}>
                <Icon className={`${color}`} size={24} />
              </div>
              <span className="md:text-[18px] text-[15px] font-medium">{name}</span>
              {name === "Ink and Rhymes" && (
                <span className="text-xs text-gray-500">Published Book</span>
              )}
            </motion.a>
          ))}
        </div>
       
      </div>
    </div>
  );
}