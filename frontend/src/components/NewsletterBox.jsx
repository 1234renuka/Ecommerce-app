// import React from 'react'

// const NewsletterBox = () => {

//     const onSubmitHandler = (event) =>{
//       event.preventDefault();
//     } 
//   return (
//     <div className='text-center'>
//       <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
//       <p className='text-gray-400 mt-3'>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        
//       </p>
//       <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2  flex items-center gap-3 mx-auto my-6 border pl-3'>
//         <input className='w-full  sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
//         <button type='submit' className='bg-black  text-white text-xs px-10 py-4'>SUBSCRIBE</button>
//       </form>
//     </div>
//   )
// }

// export default NewsletterBox
// NewsletterBox.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Gift, Sparkles, ArrowRight, Heart, Users } from 'lucide-react';

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const floatingAnimation = {
    y: [0, -6, 0],
    rotate: [0, 3, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-[80vh] bg-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-1/4 w-80 h-80 bg-[#F2A07B] rounded-full opacity-3 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/5 w-96 h-96 bg-[#8AAAE5] rounded-full opacity-4 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.04, 0.02, 0.04]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        {/* Floating Icons */}
        <motion.div 
          className="absolute top-1/3 right-20 text-[#F2A07B] opacity-20"
          animate={floatingAnimation}
        >
          <Mail className="w-8 h-8" />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-16 text-[#8AAAE5] opacity-20"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 }
          }}
        >
          <Gift className="w-6 h-6" />
        </motion.div>
        <motion.div 
          className="absolute top-2/3 left-1/3 text-[#F2A07B] opacity-15"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 }
          }}
        >
          <Heart className="w-5 h-5" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-16 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Premium Badge */}
          <motion.div
            className="inline-flex items-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5 text-[#F2A07B]" />
            <div className="px-6 py-3 bg-gradient-to-r from-[#F2A07B]/10 via-[#8AAAE5]/10 to-[#F2A07B]/10 border border-[#F2A07B]/20 rounded-full">
              <span className="text-sm font-medium text-[#1A202C] tracking-[0.2em] uppercase">
                Exclusive Benefits • VIP Access
              </span>
            </div>
            <Users className="w-5 h-5 text-[#8AAAE5]" />
          </motion.div>

          {/* Main Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-[#1A202C] leading-tight tracking-tight mb-4">
              JOIN OUR
            </h2>
            <div className="relative inline-block">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#F2A07B] italic leading-tight">
                Style Circle
              </h3>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F2A07B] via-[#8AAAE5] to-[#F2A07B] rounded-full"></div>
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            className="text-xl text-[#1A202C]/70 leading-relaxed mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Be the first to discover new arrivals, receive exclusive styling tips, and enjoy special member perks including <span className="font-semibold text-[#F2A07B]">20% off</span> your next purchase.
          </motion.p>

          {/* Newsletter Form */}
          <motion.form
            onSubmit={onSubmitHandler}
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-[#F7F8F8] to-white rounded-2xl p-2 shadow-xl border border-white/50">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1A202C]/40" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-transparent pl-12 pr-6 py-4 text-[#1A202C] placeholder-[#1A202C]/50 outline-none text-base"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="group bg-gradient-to-r from-[#F2A07B] to-[#F4B692] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </div>
            
            <p className="text-sm text-[#1A202C]/50 mt-4">
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </p>
          </motion.form>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Gift, title: "Exclusive Offers", desc: "Member-only deals & early access" },
              { icon: Sparkles, title: "Style Insights", desc: "Personalized fashion tips & trends" },
              { icon: Heart, title: "VIP Treatment", desc: "Priority customer service & support" }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <benefit.icon className="w-8 h-8 text-[#F2A07B] mx-auto mb-3" />
                <h4 className="font-semibold text-[#1A202C] mb-2">{benefit.title}</h4>
                <p className="text-sm text-[#1A202C]/60">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex justify-center items-center gap-6">
              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#F2A07B]/30"></div>
              <div className="text-center">
                <p className="text-2xl font-light text-[#F2A07B]">50K+</p>
                <p className="text-xs text-[#1A202C]/60 tracking-wider">HAPPY SUBSCRIBERS</p>
              </div>
              <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#F2A07B]/30"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsletterBox;