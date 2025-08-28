

// import React from "react";
// import { motion } from "framer-motion";
// import { assets } from "../assets/assets/assets.js";

// const Hero = () => {
//   return (
//   <div className="bg-[#ebe6df]">

//       <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-16 py-20">
//         {/* Hero Text */}
//         <motion.div
//           className="w-full sm:w-1/2 text-center sm:text-left"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <p className="text-sm font-semibold text-[#1f2a44] tracking-widest uppercase mb-4">
//             Our Bestsellers
//           </p>
//           <h1 className="text-4xl md:text-6xl font-bold text-[#1f2a44] leading-tight">
//             Discover the{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f2a44] to-[#766f62]">
//               Latest Arrivals
//             </span>
//           </h1>
//           <p className="mt-4 text-md text-[#444] max-w-md">
//             Handpicked fashion. Made for style. Shop exclusive pieces before they sell out.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-8 px-6 py-3 bg-[#1f2a44] text-white font-medium rounded-full shadow hover:bg-[#0f172a] transition-all"
//           >
//             Shop Now
//           </motion.button>
//         </motion.div>

//         {/* Hero Image */}
//         <motion.div
//           className="w-full sm:w-1/2 mt-10 sm:mt-0"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <img
//             src={assets.hero_img}
//             alt="Hero"
//             className="w-full h-auto object-cover rounded-xl shadow-xl"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets/assets.js";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Star, Sparkles, ArrowRight, Shield, Zap } from "lucide-react";

const Hero = () => {
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  });

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Orbs */}
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#F2A07B] rounded-full opacity-5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#8AAAE5] rounded-full opacity-8 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.03, 0.08]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#F7F8F8] rounded-full opacity-20 blur-2xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* Geometric Shapes */}
        <motion.div 
          className="absolute top-20 right-1/4 w-4 h-4 bg-[#F2A07B] rounded-full"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-40 left-1/3 w-3 h-3 bg-[#8AAAE5] rounded-full"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 }
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-12 w-2 h-2 bg-[#F2A07B] rounded-full"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 }
          }}
        />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwMCAwIEwgMCAwIDAgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNGN0Y4RjgiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 py-20 min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {/* Premium Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8"
                variants={fadeInUp(0)}
              >
                <Sparkles className="w-4 h-4 text-[#F2A07B]" />
                <span className="px-4 py-2 bg-gradient-to-r from-[#F2A07B]/10 to-[#8AAAE5]/10 border border-[#F2A07B]/20 rounded-full text-xs font-medium text-[#1A202C] tracking-[0.15em] uppercase">
                  Premium Collection 
                </span>
                <Sparkles className="w-4 h-4 text-[#8AAAE5]" />
              </motion.div>

              {/* Main Headline */}
              <motion.div
                variants={fadeInUp(0.1)}
                className="mb-8"
              >
                <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extralight text-[#1A202C] leading-[0.9] tracking-tight mb-4">
                  STYLE
                </h1>
                <div className="relative inline-block">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-[#F2A07B] italic leading-[0.9] mb-2">
                    Redefined
                  </h1>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] rounded-full"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1A202C]/60 mt-4 tracking-wide">
                  Where Luxury Meets Soul
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-lg text-[#1A202C]/70 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
                variants={fadeInUp(0.2)}
              >
                Discover handpicked pieces that transcend trends. Each item tells a story of craftsmanship, authenticity, and timeless elegance.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
                variants={fadeInUp(0.3)}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to="/collection" 
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#1A202C] to-[#2D3748] text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl inline-flex items-center gap-2"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">Explore Collection</span>
                    <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <HashLink 
                    smooth 
                    to="/#bestsellers" 
                    className="group px-8 py-4 bg-[#F7F8F8] border-2 border-[#F7F8F8] text-[#1A202C] rounded-full font-medium transition-all duration-300 hover:border-[#F2A07B] hover:bg-white hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span>View Bestsellers</span>
                    <Star className="w-4 h-4 group-hover:text-[#F2A07B] transition-colors duration-200" />
                  </HashLink>
                </motion.div>
              </motion.div>

              {/* Enhanced Social Proof */}
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-8"
                variants={fadeInUp(0.4)}
              >
                <div className="text-center">
                  <p className="text-3xl font-light text-[#F2A07B] mb-1">50K+</p>
                  <p className="text-xs text-[#1A202C]/60 tracking-[0.1em] uppercase">Happy Customers</p>
                </div>
                <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-[#F2A07B]/30 to-transparent"></div>
                <div className="text-center">
                  <p className="text-3xl font-light text-[#8AAAE5] mb-1">1K+</p>
                  <p className="text-xs text-[#1A202C]/60 tracking-[0.1em] uppercase">Premium Pieces</p>
                </div>
                <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-[#8AAAE5]/30 to-transparent"></div>
                <div className="text-center">
                  <p className="text-3xl font-light text-[#1A202C] mb-1">5★</p>
                  <p className="text-xs text-[#1A202C]/60 tracking-[0.1em] uppercase">Rated Excellence</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Enhanced Image Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Main Image Container with Glass Effect */}
              <div className="relative">
                {/* Glass Morphism Background */}
                <div className="absolute inset-4 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm rounded-3xl border border-white/20"></div>
                
                {/* Image Wrapper */}
                <motion.div
                  className="relative bg-gradient-to-br from-[#F7F8F8] to-white rounded-3xl p-6 shadow-2xl"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.6 }}
                  style={{ perspective: "1000px" }}
                >
                  <img
                    src={assets.hero_img}
                    alt="Luxury Fashion Collection"
                    className="w-full h-auto object-cover rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Premium Badge */}
                  <motion.div
                    className="absolute top-10 left-10 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#F2A07B] rounded-full animate-pulse"></div>
                      <p className="text-xs font-semibold text-[#1A202C] tracking-wide">EXCLUSIVE</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating Feature Cards */}
              <motion.div
                className="absolute -left-6 top-1/4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                initial={{ opacity: 0, x: -30 }}
                animate={{ ...floatingAnimation, opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#F2A07B] to-[#F4B692] rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A202C]">Premium Quality</p>
                    <p className="text-xs text-[#1A202C]/60">Guaranteed</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-1/3 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                initial={{ opacity: 0, x: 30 }}
                animate={{ 
                  ...floatingAnimation, 
                  opacity: 1, 
                  x: 0, 
                  transition: { ...floatingAnimation.transition, delay: 1.5 } 
                }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A202C]">Fast Delivery</p>
                    <p className="text-xs text-[#1A202C]/60">Worldwide</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#F7F8F8] to-transparent rounded-full opacity-60"></div>
              <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-gradient-to-tr from-[#F2A07B]/10 to-transparent rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#F2A07B]/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-[#F2A07B] rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;