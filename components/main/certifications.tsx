"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { CERTIFICATIONS_DATA, EDUCATION_DATA } from "@/constants";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const Certifications = () => {
  return (
    <section
      id="certifications"
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
          Academic & Professional Credentials
        </h1>
      </motion.div>

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12 text-center">
        Education & Certifications
      </h1>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Education Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.3)}
          className="lg:col-span-1 p-8 rounded-2xl bg-[#0300147a] backdrop-blur-md border border-[#7042f861] shadow-2xl shadow-[#2A0E61]/40 flex flex-col justify-between relative overflow-hidden group hover:border-[#7042f8c5] transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-[#7042f829] border border-[#7042f880]">
                <AcademicCapIcon className="h-7 w-7 text-cyan-400" />
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                Education
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">
              {EDUCATION_DATA.degree}
            </h2>
            <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3">
              {EDUCATION_DATA.institution}
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {EDUCATION_DATA.details}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-300 bg-[#7042f81f] px-3 py-2 rounded-lg border border-[#7042f845] w-fit">
            <ClockIcon className="h-4 w-4 text-[#b49bff]" />
            <span>{EDUCATION_DATA.duration}</span>
          </div>
        </motion.div>

        {/* Certifications Cards */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromRight(0.2 * (index + 1))}
              className="p-6 md:p-8 rounded-2xl bg-[#0300147a] backdrop-blur-md border border-[#7042f861] shadow-2xl shadow-[#2A0E61]/40 flex flex-col justify-between relative overflow-hidden group hover:border-[#7042f8c5] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#7042f829] border border-[#7042f880]">
                    <CheckBadgeIcon className="h-6 w-6 text-[#b49bff]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-purple-300">{cert.issuer}</p>
                  </div>
                </div>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 w-fit">
                  {cert.status}
                </span>
              </div>

              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
