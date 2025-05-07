

// import React from 'react';
// import Title from '../componets/Title';
// import { assets } from '../assets/assets/assets';
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
//     <div>
//       <div className='text-2xl text-center pt-8 border-t'>
//         <Title text1={'ABOUT'} text2={'US'} />
//       </div>

//       <motion.div 
//         className='my-10 flex flex-col md:flex-row gap-16'
//         variants={fadeIn()}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <motion.img 
//           className='w-full md:max-w-[450px] rounded-2xl shadow-lg' 
//           src={assets.about_img} 
//           alt="About Velista" 
//           whileHover={{ scale: 1.02 }}
//         />
        
//         <motion.div 
//           className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'
//           variants={fadeIn('up', 0.2)}
//         >
//           <p>
//             As a <strong className='text-gray-800'>Velista Preferred Customer</strong>, you'll get 5% off on future purchases and be part of our exclusive club of insiders.
//           </p>
//           <p>
//             The more you purchase, the more you can save! After <b>2 Case Credits</b> of purchases in 2 consecutive months, you'll be eligible for <b>30% discount</b>. Sign up and start saving today.
//           </p>
//           <b className='text-gray-800 text-lg'>Our Mission</b>
//           <p>
//             Our Mission at Velista is to empower customers with <b>choice, convenience, and confidence</b>. We aim to deliver a shopping experience that exceeds expectations—from browsing to delivery and beyond.
//           </p>
//         </motion.div>
//       </motion.div>

//       <div className='text-xl py-4'>
//         <Title text1={'WHY'} text2={'CHOOSE US'} />
//       </div>

//       <motion.div 
//         className='flex flex-col md:flex-row text-sm mb-20 gap-6'
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         variants={fadeIn()}
//       >
//         {[{
//           icon: <Star className='text-gray-800' size={28} />,
//           title: 'Quality Assurance',
//           desc: 'We are dedicated to delivering products and services that exceed expectations, ensuring reliability, performance, and customer satisfaction.'
//         },
//         {
//           icon: <ThumbsUp className='text-gray-800' size={28} />,
//           title: 'Convenience',
//           desc: 'With seamless navigation and hassle-free services, everything you need is just a click away. Your convenience is our mission!'
//         },
//         {
//           icon: <Smile className='text-gray-800' size={28} />,
//           title: 'Exceptional Customer Service',
//           desc: 'We’re here to provide support, answer your questions, and ensure your experience is exceptional. Your satisfaction is our success!'
//         }].map((item, idx) => (
//           <motion.div 
//             key={idx} 
//             className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'
//             variants={fadeIn('up', idx * 0.2)}
//           >
//             <div className='flex items-center gap-3'>
//               {item.icon}
//               <b>{item.title} :</b>
//             </div>
//             <p className='text-gray-600'>{item.desc}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import Title from '../componets/Title';
import { assets } from '../assets/assets/assets';
import { motion } from 'framer-motion';
import { Star, Smile, ThumbsUp } from 'lucide-react';

const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: { opacity: 0, y: direction === 'up' ? 40 : -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
};

const About = () => {
  return (
    <div className="bg-[#fdfbf7] text-gray-700">
      <div className='text-2xl text-center pt-8 border-t border-gray-300'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <motion.div 
        className='my-10 flex flex-col md:flex-row gap-16 px-6'
        variants={fadeIn()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.img 
          className='w-full md:max-w-[450px] rounded-xl shadow-lg transition-transform hover:scale-105 duration-300' 
          src={assets.about_img} 
          alt="About Velista" 
          whileHover={{ scale: 1.02 }}
        />

        <motion.div 
          className='flex flex-col justify-center gap-6 md:w-2/4'
          variants={fadeIn('up', 0.2)}
        >
          <p>
            As a <strong className='text-[#1f2a44]'>Velista Preferred Customer</strong>, you'll get <b>5% off</b> on future purchases and be part of our exclusive club of insiders.
          </p>
          <p>
            The more you purchase, the more you can save! After <b>2 Case Credits</b> of purchases in 2 consecutive months, you'll be eligible for a <b>30% discount</b>. Sign up and start saving today.
          </p>
          <b className='text-[#1f2a44] text-lg'>Our Mission</b>
          <p>
            Our Mission at Velista is to empower customers with <b>choice, convenience, and confidence</b>. We're dedicated to a shopping experience that exceeds expectations—from browsing to delivery and beyond.
          </p>
        </motion.div>
      </motion.div>

      <div className='text-xl py-4 px-6'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <motion.div 
        className='flex flex-col md:flex-row text-sm mb-20 px-6 gap-6'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn()}
      >
        {[{
          icon: <Star className='text-[#1f2a44]' size={28} />,
          title: 'Quality Assurance',
          desc: 'We are dedicated to delivering products and services that exceed expectations, ensuring reliability, performance, and customer satisfaction.'
        },
        {
          icon: <ThumbsUp className='text-[#1f2a44]' size={28} />,
          title: 'Convenience',
          desc: 'With seamless navigation and hassle-free services, everything you need is just a click away. Your convenience is our mission!'
        },
        {
          icon: <Smile className='text-[#1f2a44]' size={28} />,
          title: 'Exceptional Customer Service',
          desc: 'We’re here to provide support, answer your questions, and ensure your experience is exceptional. Your satisfaction is our success!'
        }].map((item, idx) => (
          <motion.div
  key={idx}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -10, boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.08)', backgroundColor: '#f7f7f9' }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  viewport={{ once: true }}
  className='cursor-pointer border border-gray-200 bg-white px-10 py-8 sm:py-20 flex flex-col gap-5 rounded-xl'
>
  <div className='flex items-center gap-3'>
    {item.icon}
    <b className='text-[#1f2a44]'>{item.title} :</b>
  </div>
  <p className='text-gray-600'>{item.desc}</p>
</motion.div>



        ))}
      </motion.div>
    </div>
  );
};

export default About;
