

import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets/assets.js";

const Hero = () => {
  return (
  <div className="bg-[#ebe6df]">

      <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-16 py-20">
        {/* Hero Text */}
        <motion.div
          className="w-full sm:w-1/2 text-center sm:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold text-[#1f2a44] tracking-widest uppercase mb-4">
            Our Bestsellers
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1f2a44] leading-tight">
            Discover the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f2a44] to-[#766f62]">
              Latest Arrivals
            </span>
          </h1>
          <p className="mt-4 text-md text-[#444] max-w-md">
            Handpicked fashion. Made for style. Shop exclusive pieces before they sell out.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-[#1f2a44] text-white font-medium rounded-full shadow hover:bg-[#0f172a] transition-all"
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="w-full sm:w-1/2 mt-10 sm:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={assets.hero_img}
            alt="Hero"
            className="w-full h-auto object-cover rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

