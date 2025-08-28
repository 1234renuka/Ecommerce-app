// import React from 'react'
// import {assets} from '../assets/assets'

// const Navbar = ({setToken}) => {
//   return (
//     <div className='flex items-center py-2 px-[4%] justify-between'>
//        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
//       <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm '>Logout</button>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { LogOut, Shield, User } from 'lucide-react'

const Navbar = ({ setToken }) => {
  return (
    <motion.div 
      className='relative flex items-center py-4 px-8 justify-between bg-gradient-to-r from-white via-[#fdfbf7] to-white shadow-lg border-b border-white/50 backdrop-blur-sm'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-[#F2A07B] rounded-full opacity-5 blur-2xl"></div>
        <div className="absolute bottom-0 left-1/6 w-32 h-32 bg-[#8AAAE5] rounded-full opacity-5 blur-2xl"></div>
      </div>

      {/* Logo Section */}
      <motion.div 
        className='relative z-10 flex items-center gap-4'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <img className='w-[max(12%,90px)] drop-shadow-sm' src={assets.logo} alt="Velista Logo" />
        
        {/* Admin Badge */}
        <motion.div 
          className='hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8AAAE5]/10 to-[#F2A07B]/10 border border-[#8AAAE5]/20 rounded-full'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Shield className="w-4 h-4 text-[#8AAAE5]" />
          <span className="text-sm font-medium text-[#1A202C] tracking-wider">ADMIN PANEL</span>
        </motion.div>
      </motion.div>

      {/* User Profile & Logout Section */}
      <motion.div 
        className='relative z-10 flex items-center gap-4'
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Welcome Message */}
        <div className="hidden md:block text-right">
          <p className="text-sm text-[#1A202C]/60">Welcome back,</p>
          <p className="text-sm font-medium text-[#1A202C]">Administrator</p>
        </div>

        {/* User Avatar */}
        <motion.div 
          className="w-10 h-10 bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <User className="w-5 h-5 text-white" />
        </motion.div>

        {/* Logout Button */}
        <motion.button 
          onClick={() => setToken('')} 
          className='group relative bg-gradient-to-r from-[#F2A07B] to-[#F4B692] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden'
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Button Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4B692] to-[#F2A07B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default Navbar