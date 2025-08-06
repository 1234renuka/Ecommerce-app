// import React from 'react'
// import Title from '../componets/Title'
// import { assets } from '../assets/assets/assets'
// import NewsletterBox from '../componets/NewsletterBox'

// const Contact = () => {
//   return (
//     <div>
//       <div className='text-center  text-2xl pt-10 border-t'>
//         <Title text1={'CONTACT'} text2={'US'}/>
//       </div>

//     <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//       <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
//     <div className='flex flex-col justify-center items-start gap-6'>
//       <p className='font-semibold text-xl text-gray-600'>Our Store</p>
//       <p className='text-gray-500'>45/3 Freeganj near clock tower<br/>Ujjian,Madhya Pradesh</p>
//       <p className='text-gray-500'>Tel : (415) 555-0132 <br /> Email : admin@forever.com </p>
//       <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
//       <p className='text-gray-500'>Learn more about our teams and job openings.</p>
//       <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
//     </div>
//     </div>

//    <NewsletterBox/>
//     </div>
//   )
// }

// export default Contact

import React from 'react';
import Title from '../components/Title.jsx';
import { assets } from '../assets/assets/assets.js';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-[#fdfbf7] to-[#f2eee9] text-gray-800">
      {/* Heading */}
      <motion.div
        className="text-center text-3xl pt-10 pb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Title text1="CONTACT" text2="US" />
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="my-10 flex flex-col md:flex-row items-center justify-center gap-8 px-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img
          className="w-full md:max-w-[420px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
          src={assets.contact_img}
          alt="Contact"
          whileHover={{ scale: 1.05 }}
        />

        <motion.div
          className="flex flex-col justify-center gap-5 max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <h3 className="text-lg font-semibold text-[#1f2a44]">Our Store</h3>
            <p className="text-gray-600 mt-1 leading-relaxed text-sm">
              45/3 Freeganj near Clock Tower<br />
              Ujjain, Madhya Pradesh
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#1f2a44]">Contact</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Tel: (415) 555-0132<br />
              Email: admin@forever.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#1f2a44]">Careers at Forever</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Explore exciting opportunities and be a part of our journey.
            </p>
            <button className="mt-3 px-5 py-2 border-2 border-[#1f2a44] text-[#1f2a44] font-medium rounded hover:bg-[#1f2a44] hover:text-white transition-all duration-300 text-sm">
              Explore Jobs
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Newsletter Subscribe Section */}
      <motion.div
        className="bg-gradient-to-r from-[#f5ede3] to-[#fdfbf7] py-10 text-[#1f2a44] text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold mb-2">Stay in the Loop</h3>
        <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
          Join our newsletter to get updates on new arrivals, exclusive offers, and the latest fashion news.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-2 text-gray-800 rounded-full focus:outline-none border border-gray-300 text-sm"
          />
          <button className="px-5 py-2 bg-[#1f2a44] text-white font-medium rounded-full hover:bg-[#151e33] transition-all shadow-md text-sm">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
