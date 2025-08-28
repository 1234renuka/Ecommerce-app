

// import React from 'react';
// import Title from '../components/Title.jsx';
// import { assets } from '../assets/assets/assets.js';
// import { motion } from 'framer-motion';
// import { Star, Smile, ThumbsUp } from 'lucide-react';

// const fadeIn = (direction = 'up', delay = 0) => {
//   return {
//     hidden: { opacity: 0, y: direction === 'up' ? 40 : -40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay,
//         duration: 0.6,
//         ease: 'easeOut',
//       },
//     },
//   };
// };

// const About = () => {
//   return (
//     <div className="bg-[#fdfbf7] text-gray-700">
//       <div className='text-2xl text-center pt-8 border-t border-gray-300'>
//         <Title text1={'ABOUT'} text2={'US'} />
//       </div>

//       <motion.div 
//         className='my-10 flex flex-col md:flex-row gap-16 px-6'
//         variants={fadeIn()}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <motion.img 
//           className='w-full md:max-w-[450px] rounded-xl shadow-lg transition-transform hover:scale-105 duration-300' 
//           src={assets.about_img} 
//           alt="About Velista" 
//           whileHover={{ scale: 1.02 }}
//         />

//         <motion.div 
//           className='flex flex-col justify-center gap-6 md:w-2/4'
//           variants={fadeIn('up', 0.2)}
//         >
//           <p>
//             As a <strong className='text-[#1f2a44]'>Velista Preferred Customer</strong>, you'll get <b>5% off</b> on future purchases and be part of our exclusive club of insiders.
//           </p>
//           <p>
//             The more you purchase, the more you can save! After <b>2 Case Credits</b> of purchases in 2 consecutive months, you'll be eligible for a <b>30% discount</b>. Sign up and start saving today.
//           </p>
//           <b className='text-[#1f2a44] text-lg'>Our Mission</b>
//           <p>
//             Our Mission at Velista is to empower customers with <b>choice, convenience, and confidence</b>. We're dedicated to a shopping experience that exceeds expectations—from browsing to delivery and beyond.
//           </p>
//         </motion.div>
//       </motion.div>

//       <div className='text-xl py-4 px-6'>
//         <Title text1={'WHY'} text2={'CHOOSE US'} />
//       </div>

//       <motion.div 
//         className='flex flex-col md:flex-row text-sm mb-20 px-6 gap-6'
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         variants={fadeIn()}
//       >
//         {[{
//           icon: <Star className='text-[#1f2a44]' size={28} />,
//           title: 'Quality Assurance',
//           desc: 'We are dedicated to delivering products and services that exceed expectations, ensuring reliability, performance, and customer satisfaction.'
//         },
//         {
//           icon: <ThumbsUp className='text-[#1f2a44]' size={28} />,
//           title: 'Convenience',
//           desc: 'With seamless navigation and hassle-free services, everything you need is just a click away. Your convenience is our mission!'
//         },
//         {
//           icon: <Smile className='text-[#1f2a44]' size={28} />,
//           title: 'Exceptional Customer Service',
//           desc: 'We’re here to provide support, answer your questions, and ensure your experience is exceptional. Your satisfaction is our success!'
//         }].map((item, idx) => (
//           <motion.div
//   key={idx}
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   whileHover={{ y: -10, boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.08)', backgroundColor: '#f7f7f9' }}
//   transition={{ duration: 0.5, ease: 'easeOut' }}
//   viewport={{ once: true }}
//   className='cursor-pointer border border-gray-200 bg-white px-10 py-8 sm:py-20 flex flex-col gap-5 rounded-xl'
// >
//   <div className='flex items-center gap-3'>
//     {item.icon}
//     <b className='text-[#1f2a44]'>{item.title} :</b>
//   </div>
//   <p className='text-gray-600'>{item.desc}</p>
// </motion.div>



//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import Title from '../components/Title.jsx';
import { assets } from '../assets/assets/assets.js';
import { motion } from 'framer-motion';
import { Star, Smile, ThumbsUp, Award, Users, Heart, Shield, Zap, Globe } from 'lucide-react';

const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: { opacity: 0, y: direction === 'up' ? 60 : -60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
};

const About = () => {
  const stats = [
    { number: "50K+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "99%", label: "Satisfaction Rate", icon: <Heart className="w-6 h-6" /> },
    { number: "5★", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Customer Support", icon: <Shield className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Star className='w-8 h-8' />,
      title: 'Premium Quality',
      subtitle: 'Curated Excellence',
      desc: 'Every product is carefully selected and tested to meet our rigorous quality standards. We partner with trusted brands to ensure you receive only the finest items.',
      color: 'from-[#F2A07B] to-[#F4B692]'
    },
    {
      icon: <Zap className='w-8 h-8' />,
      title: 'Lightning Fast',
      subtitle: 'Instant Gratification',
      desc: 'Experience seamless shopping with our optimized platform. From browsing to checkout, every interaction is designed for speed and efficiency.',
      color: 'from-[#8AAAE5] to-[#A2C2E8]'
    },
    {
      icon: <Heart className='w-8 h-8' />,
      title: 'Personal Touch',
      subtitle: 'Tailored Experience',
      desc: 'Our dedicated team goes above and beyond to create personalized experiences. Your satisfaction isn\'t just our goal—it\'s our promise.',
      color: 'from-[#F2A07B] to-[#8AAAE5]'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F8F8] via-white to-[#F7F8F8]">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F2A07B] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8AAAE5] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#F7F8F8] rounded-full opacity-20 blur-2xl"></div>
        </div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          variants={fadeIn('up', 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] text-white text-sm font-medium rounded-full mb-6">
              Our Story
            </span>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-extralight text-[#1A202C] mb-6 tracking-tight">
            ABOUT
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-600 tracking-[0.2em] mb-8">
            VELISTA
          </h2>
          
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Crafting extraordinary shopping experiences through innovation, quality, and unwavering commitment to our customers.
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-[#1A202C] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-light text-white mb-2">{stat.number}</h3>
                <p className="text-gray-300 text-sm tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className='flex flex-col lg:flex-row gap-16 items-center'
            variants={fadeIn()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              className="lg:w-1/2 relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img 
                className='relative w-full rounded-2xl shadow-2xl' 
                src={assets.about_img} 
                alt="About Velista" 
              />
            </motion.div>
            
            <motion.div 
              className='lg:w-1/2 space-y-8'
              variants={fadeIn('left', 0.2)}
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-[#1A202C] mb-4">
                  Join the <span className="bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] bg-clip-text text-transparent font-medium">Velista Family</span>
                </h3>
                
                <div className="bg-gradient-to-r from-[#F7F8F8] to-white p-6 rounded-xl border border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    As a <strong className='text-[#F2A07B]'>Velista Preferred Customer</strong>, unlock exclusive benefits including <span className="font-semibold">5% off</span> on all future purchases and insider access to our premium collections.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-[#F2A07B]/10 to-[#8AAAE5]/10 p-6 rounded-xl border border-[#F2A07B]/20">
                  <p className="text-gray-700 leading-relaxed">
                    Earn more, save more! Reach <span className="font-semibold text-[#8AAAE5]">2 Case Credits</span> in consecutive months and unlock an incredible <span className="font-bold text-[#F2A07B]">30% discount</span>. Start your journey today.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <h4 className='text-[#1A202C] text-xl font-medium mb-3'>Our Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    At Velista, we're passionate about empowering customers through <span className="font-medium text-[#F2A07B]">choice</span>, <span className="font-medium text-[#8AAAE5]">convenience</span>, and <span className="font-medium text-[#1A202C]">confidence</span>. Every interaction is crafted to exceed expectations—from discovery to delivery and beyond.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-white to-[#F7F8F8]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn('up', 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light text-[#1A202C] mb-6 tracking-tight">
              WHY CHOOSE
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] mx-auto mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-light text-gray-600 tracking-[0.2em]">
              VELISTA
            </h3>
          </motion.div>

          <motion.div 
            className='grid grid-cols-1 lg:grid-cols-3 gap-8'
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn()}
          >
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                className='group relative overflow-hidden'
                variants={fadeIn('up', idx * 0.2)}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon with Gradient Background */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <h4 className='text-[#1A202C] text-xl font-semibold mb-2'>{item.title}</h4>
                    <p className="text-sm text-[#F2A07B] font-medium mb-4 tracking-wide">{item.subtitle}</p>
                    <p className='text-gray-600 leading-relaxed'>{item.desc}</p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#F7F8F8] to-transparent rounded-full opacity-50"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-[#1A202C] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2A07B]/10 to-[#8AAAE5]/10"></div>
        
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
          variants={fadeIn('up', 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Experience <span className="bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] bg-clip-text text-transparent">Excellence</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Join thousands of satisfied customers who have made Velista their preferred shopping destination.
          </p>
          
          <motion.button
            className="group relative px-12 py-4 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              Start Shopping
              <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;