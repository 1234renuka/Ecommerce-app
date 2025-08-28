
// import React from 'react';
// import Title from '../components/Title.jsx';
// import { assets } from '../assets/assets/assets.js';
// import { motion } from 'framer-motion';

// const Contact = () => {
//   return (
//     <div className="bg-gradient-to-b from-[#fdfbf7] to-[#f2eee9] text-gray-800">
//       {/* Heading */}
//       <motion.div
//         className="text-center text-3xl pt-10 pb-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <Title text1="CONTACT" text2="US" />
//       </motion.div>

//       {/* Contact Info */}
//       <motion.div
//         className="my-10 flex flex-col md:flex-row items-center justify-center gap-8 px-6"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <motion.img
//           className="w-full md:max-w-[420px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
//           src={assets.contact_img}
//           alt="Contact"
//           whileHover={{ scale: 1.05 }}
//         />

//         <motion.div
//           className="flex flex-col justify-center gap-5 max-w-lg"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           <div>
//             <h3 className="text-lg font-semibold text-[#1f2a44]">Our Store</h3>
//             <p className="text-gray-600 mt-1 leading-relaxed text-sm">
//               45/3 Freeganj near Clock Tower<br />
//               Ujjain, Madhya Pradesh
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-[#1f2a44]">Contact</h3>
//             <p className="text-gray-600 mt-1 text-sm">
//               Tel: (415) 555-0132<br />
//               Email: admin@forever.com
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold text-[#1f2a44]">Careers at Forever</h3>
//             <p className="text-gray-600 mt-1 text-sm">
//               Explore exciting opportunities and be a part of our journey.
//             </p>
//             <button className="mt-3 px-5 py-2 border-2 border-[#1f2a44] text-[#1f2a44] font-medium rounded hover:bg-[#1f2a44] hover:text-white transition-all duration-300 text-sm">
//               Explore Jobs
//             </button>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Newsletter Subscribe Section */}
//       <motion.div
//         className="bg-gradient-to-r from-[#f5ede3] to-[#fdfbf7] py-10 text-[#1f2a44] text-center px-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.4 }}
//       >
//         <h3 className="text-2xl font-bold mb-2">Stay in the Loop</h3>
//         <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
//           Join our newsletter to get updates on new arrivals, exclusive offers, and the latest fashion news.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full sm:w-2/3 px-4 py-2 text-gray-800 rounded-full focus:outline-none border border-gray-300 text-sm"
//           />
//           <button className="px-5 py-2 bg-[#1f2a44] text-white font-medium rounded-full hover:bg-[#151e33] transition-all shadow-md text-sm">
//             Subscribe
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import Title from '../components/Title.jsx';
import { assets } from '../assets/assets/assets.js';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  ArrowRight, 
  MessageCircle, 
  Star,
  Heart,
  Sparkles
} from 'lucide-react';

const Contact = () => {
  const floatingAnimation = {
    y: [0, -8, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: ["45/3 Freeganj near Clock Tower", "Ujjain, Madhya Pradesh"],
      color: "#F2A07B"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(415) 555-0132", "Mon-Sat 9AM-7PM"],
      color: "#8AAAE5"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["admin@forever.com", "We reply within 24 hours"],
      color: "#F2A07B"
    }
  ];

  const handleJoinTeam = () => {
    window.location.href = "mailto:admin@forever.com?subject=Join Our Team - Career Inquiry&body=Hello Forever Fashion Team,%0D%0A%0D%0AI am interested in joining your team. Please find my details below:%0D%0A%0D%0AName: %0D%0APhone: %0D%0APosition Interested In: %0D%0AExperience: %0D%0A%0D%0AThank you for your time.%0D%0A%0D%0ABest regards,";
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-32 right-1/4 w-80 h-80 bg-[#F2A07B] rounded-full opacity-3 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/6 w-96 h-96 bg-[#8AAAE5] rounded-full opacity-4 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.04, 0.02, 0.04]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        {/* Floating Icons */}
        <motion.div 
          className="absolute top-1/4 left-20 text-[#F2A07B] opacity-20"
          animate={floatingAnimation}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-16 text-[#8AAAE5] opacity-20"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 }
          }}
        >
          <Heart className="w-5 h-5" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 py-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
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
            <MessageCircle className="w-5 h-5 text-[#F2A07B]" />
            <div className="px-6 py-3 bg-gradient-to-r from-[#F2A07B]/10 via-[#8AAAE5]/10 to-[#F2A07B]/10 border border-[#F2A07B]/20 rounded-full">
              <span className="text-sm font-medium text-[#1A202C] tracking-[0.2em] uppercase">
                Get In Touch • We're Here to Help
              </span>
            </div>
            <Sparkles className="w-5 h-5 text-[#8AAAE5]" />
          </motion.div>

          {/* Main Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-[#1A202C] leading-tight tracking-tight mb-4">
              CONTACT
            </h2>
            <div className="relative inline-block">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#F2A07B] italic leading-tight">
                Us Today
              </h3>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F2A07B] via-[#8AAAE5] to-[#F2A07B] rounded-full"></div>
            </div>
          </motion.div>

          <motion.p
            className="text-lg text-[#1A202C]/70 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We'd love to hear from you. Whether you have questions about our products, need styling advice, or want to share feedback, we're here to help.
          </motion.p>
        </motion.div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Image */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-lg"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-xl">
              <img
                className="w-full rounded-xl"
                src={assets.contact_img}
                alt="Contact Us"
              />
              
              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-white/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#F2A07B] to-[#F4B692] rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#1A202C]">24/7</p>
                    <p className="text-xs text-[#1A202C]/60">Support Available</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    style={{ backgroundColor: `${info.color}15` }}
                  >
                    <info.icon 
                      className="w-6 h-6" 
                      style={{ color: info.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#1A202C] mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-[#1A202C]/70 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Business Hours */}
            <motion.div
              className="bg-gradient-to-br from-[#F7F8F8] to-white rounded-2xl p-6 shadow-xl border border-white/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#1A202C]">Business Hours</h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-[#1A202C]/70">Monday - Friday</p>
                  <p className="font-medium text-[#1A202C]">9:00 AM - 7:00 PM</p>
                </div>
                <div>
                  <p className="text-[#1A202C]/70">Saturday - Sunday</p>
                  <p className="font-medium text-[#1A202C]">10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Join Our Team Section */}
        <motion.div
          className="bg-gradient-to-br from-[#F7F8F8] to-white rounded-3xl p-12 shadow-xl border border-white/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="h-[1px] w-12 bg-[#8AAAE5]"></div>
              <span className="text-sm font-medium text-[#1A202C] tracking-[0.3em] uppercase">
                Join Our Team
              </span>
              <div className="h-[1px] w-12 bg-[#8AAAE5]"></div>
            </motion.div>

            <h3 className="text-2xl sm:text-3xl font-light text-[#1A202C] mb-4">
              Work with 
              <span className="font-medium text-[#8AAAE5] italic ml-2">Velista</span>
            </h3>
            
            <p className="text-[#1A202C]/70 leading-relaxed mb-8">
              Join our passionate team of fashion enthusiasts and help us create exceptional experiences for our customers. We're always looking for talented individuals who share our vision.
            </p>
            
            <motion.button
              onClick={handleJoinTeam}
              className="group bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] text-white px-10 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Our Team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </div>
        </motion.div>

        {/* Quick Contact Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "<2hrs", label: "Average Response Time", icon: Clock },
            { number: "98%", label: "Customer Satisfaction", icon: Star },
            { number: "24/7", label: "Support Available", icon: MessageCircle }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-[#F2A07B] mx-auto mb-3" />
              <p className="text-2xl font-light text-[#1A202C] mb-1">{stat.number}</p>
              <p className="text-sm text-[#1A202C]/60 tracking-wider">{stat.label.toUpperCase()}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;