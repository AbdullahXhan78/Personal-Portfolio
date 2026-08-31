"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon, BriefcaseIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { EXPERIENCES } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 relative z-[20] px-5 md:px-20 max-w-[1250px] m-auto"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] mb-4"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Professional Career
        </h1>
      </motion.div>

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12 text-center">
        Work Experience
      </h1>

      <div className="w-full flex flex-col gap-8">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={index % 2 === 0 ? slideInFromLeft(0.3) : slideInFromRight(0.3)}
            className="p-8 rounded-2xl bg-[#0300147a] backdrop-blur-md border border-[#7042f861] shadow-2xl shadow-[#2A0E61]/40 hover:border-[#7042f8c5] transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#7042f838] pb-6 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 rounded-lg bg-[#7042f829] border border-[#7042f880]">
                    <BriefcaseIcon className="h-6 w-6 text-[#b49bff]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {exp.role}
                  </h2>
                </div>
                <h3 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {exp.company}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-300">
                <div className="flex items-center gap-1.5 bg-[#7042f81f] px-3 py-1.5 rounded-full border border-[#7042f845]">
                  <CalendarIcon className="h-4 w-4 text-[#b49bff]" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#7042f81f] px-3 py-1.5 rounded-full border border-[#7042f845]">
                  <MapPinIcon className="h-4 w-4 text-cyan-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <ul className="list-disc list-inside space-y-3 text-gray-300 text-[16px] leading-relaxed mb-6">
              {exp.description.map((item, idx) => (
                <li key={idx} className="marker:text-purple-400">
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-semibold px-3 py-1 rounded-md bg-[#2a0e6166] text-[#b49bff] border border-[#7042f854]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
