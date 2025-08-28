// import React from 'react'
// import { assets } from '../assets/assets/assets.js'

// const OurPolicy = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
//       <div>
//         <img src={assets.exchange_icon}  className='w-12 m-auto mb-5' alt="" />
//       <p className=' font-semibold'>Easy Exchange Policy</p>
//       <p className='text-gray-400'>We offer hassle free exchange policy</p>
//       </div>
//       <div>
//         <img src={assets.quality_icon}  className='w-12 m-auto mb-5' alt="" />
//       <p className=' font-semibold'> 7 Days Return Policy </p>
//       <p className='text-gray-400'>We provide 7 days return policy</p>
//       </div>
//       <div>
//         <img src={assets.support_img}  className='w-12 m-auto mb-5' alt="" />
//       <p className=' font-semibold'>Best customer support</p>
//       <p className='text-gray-400'>We provide 24/7 customer support</p>
//       </div>
//     </div>
//   )
// }

// export default OurPolicy

import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Shield, Headphones, Award, CheckCircle, Clock } from 'lucide-react';

const OurPolicy = () => {
  const policies = [
    {
      icon: RefreshCw,
      title: "Easy Exchange",
      subtitle: "Policy",
      description: "Hassle-free exchanges within 30 days for perfect satisfaction",
      color: "#F2A07B"
    },
    {
      icon: Shield,
      title: "7 Days Return",
      subtitle: "Guarantee", 
      description: "Full refund policy with no questions asked returns",
      color: "#8AAAE5"
    },
    {
      icon: Headphones,
      title: "24/7 Customer",
      subtitle: "Support",
      description: "Premium support available around the clock for you",
      color: "#F2A07B"
    }
  ];

  const floatingAnimation = {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-[#F7F8F8] to-white py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#8AAAE5] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#F2A07B] rounded-full opacity-4 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.04, 0.08, 0.04]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-[1px] w-12 bg-[#8AAAE5]"></div>
            <span className="text-sm font-medium text-[#1A202C] tracking-[0.3em] uppercase">
              Our Promise to You
            </span>
            <div className="h-[1px] w-12 bg-[#8AAAE5]"></div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-[#1A202C] leading-tight tracking-tight mb-4">
           
          </h2>
          <div className="relative inline-block">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#8AAAE5] italic leading-tight">
              Service Guarantee
            </h3>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#8AAAE5] via-[#F2A07B] to-[#8AAAE5] rounded-full"></div>
          </div>

          <motion.p
            className="text-lg text-[#1A202C]/70 leading-relaxed mt-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We stand behind every purchase with industry-leading policies designed to give you complete peace of mind.
          </motion.p>
        </motion.div>

        {/* Policies Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          {policies.map((policy, index) => (
            <motion.div
              key={policy.title}
              className="group cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-white/50 group-hover:shadow-2xl transition-all duration-500 h-full">
                {/* Gradient Background on Hover */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ backgroundColor: policy.color }}
                ></div>

                {/* Floating Icon */}
                <motion.div
                  className="relative mb-6 flex justify-center"
                  animate={floatingAnimation}
                  transition={{ delay: index * 0.5 }}
                >
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    style={{ backgroundColor: `${policy.color}15` }}
                  >
                    <policy.icon 
                      className="w-10 h-10" 
                      style={{ color: policy.color }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center relative">
                  <h4 className="text-xl font-light text-[#1A202C] mb-1">
                    {policy.title}
                  </h4>
                  <h5 
                    className="text-lg font-semibold mb-4"
                    style={{ color: policy.color }}
                  >
                    {policy.subtitle}
                  </h5>
                  <p className="text-[#1A202C]/70 leading-relaxed">
                    {policy.description}
                  </p>

                  {/* Check Mark */}
                  <motion.div
                    className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                  >
                    <CheckCircle 
                      className="w-6 h-6" 
                      style={{ color: policy.color }}
                    />
                  </motion.div>
                </div>

                {/* Decorative Corner */}
                <div 
                  className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ borderColor: policy.color }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Section */}
        <motion.div
          className="text-center mt-16 pt-12 border-t border-[#8AAAE5]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#F2A07B]" />
              <div>
                <p className="text-lg font-semibold text-[#1A202C]">Premium Quality</p>
                <p className="text-sm text-[#1A202C]/60">Certified & Authentic</p>
              </div>
            </div>
            
            <div className="hidden sm:block h-8 w-[1px] bg-[#8AAAE5]/30"></div>
            
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#8AAAE5]" />
              <div>
                <p className="text-lg font-semibold text-[#1A202C]">Fast Delivery</p>
                <p className="text-sm text-[#1A202C]/60">2-3 Business Days</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurPolicy;