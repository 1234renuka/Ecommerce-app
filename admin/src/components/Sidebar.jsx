// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { assets } from '../assets/assets' // Adjust path as needed
// import { MessageSquare } from 'lucide-react'

// const Sidebar = () => {

//   // Get unread chat count from localStorage
//   const getUnreadChatCount = () => {
//     try {
//       const chatSessions = JSON.parse(localStorage.getItem('adminChatSessions') || '[]');
//       return chatSessions.reduce((total, chat) => total + (chat.unreadCount || 0), 0);
//     } catch {
//       return 0;
//     }
//   };

//   const unreadCount = getUnreadChatCount();

//   return (
//     <div className='w-[18%] min-h-screen border-r-2'>
//       <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        
//         <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/add">
//           <img className='w-5 h-5' src={assets.add_icon} alt="" />
//           <p className='hidden md:block'>Add Items</p>
//         </NavLink>

//         <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/list">
//           <img className='w-5 h-5' src={assets.order_icon} alt="" />
//           <p className='hidden md:block'>List Items</p>
//         </NavLink>

//         <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/orders">
//           <img className='w-5 h-5' src={assets.order_icon} alt="" />
//           <p className='hidden md:block'>Orders</p>
//         </NavLink>

//         <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l relative' to="/chats">
//           <MessageSquare className='w-5 h-5' />
//           <p className='hidden md:block'>Chat Management</p>
//           {unreadCount > 0 && (
//             <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
//               {unreadCount > 99 ? '99+' : unreadCount}
//             </span>
//           )}
//         </NavLink>

//       </div>
//     </div>
//   )
// }

// export default Sidebar

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Package, 
  ShoppingBag, 
  MessageSquare, 
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Home,
  BarChart3
} from 'lucide-react'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Get unread chat count from localStorage
  const getUnreadChatCount = () => {
    try {
      const chatSessions = JSON.parse(localStorage.getItem('adminChatSessions') || '[]');
      return chatSessions.reduce((total, chat) => total + (chat.unreadCount || 0), 0);
    } catch {
      return 0;
    }
  };

  const unreadCount = getUnreadChatCount();

  const menuItems = [
    {
      path: '/add',
      icon: Plus,
      label: 'Add Items',
      color: '#F2A07B',
      bgGradient: 'from-[#F2A07B]/10 to-[#F4B692]/10',
      borderColor: '[#F2A07B]/30',
      hoverBg: '[#F2A07B]/5'
    },
    {
      path: '/list',
      icon: Package,
      label: 'List Items',
      color: '#8AAAE5',
      bgGradient: 'from-[#8AAAE5]/10 to-[#A2C2E8]/10',
      borderColor: '[#8AAAE5]/30',
      hoverBg: '[#8AAAE5]/5'
    },
    {
      path: '/orders',
      icon: ShoppingBag,
      label: 'Orders',
      color: '#F2A07B',
      bgGradient: 'from-[#F2A07B]/10 to-[#F4B692]/10',
      borderColor: '[#F2A07B]/30',
      hoverBg: '[#F2A07B]/5'
    },
    {
      path: '/chats',
      icon: MessageSquare,
      label: 'Chat Management',
      color: '#8AAAE5',
      bgGradient: 'from-[#8AAAE5]/10 to-[#A2C2E8]/10',
      borderColor: '[#8AAAE5]/30',
      hoverBg: '[#8AAAE5]/5',
      badge: unreadCount
    }
  ];

  return (
    <motion.div 
      className={`${isCollapsed ? 'w-20' : 'w-80'} min-h-screen bg-gradient-to-b from-white via-[#fdfbf7] to-[#f7f3ee] border-r border-white/50 shadow-xl transition-all duration-300 relative z-20`}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 -right-10 w-32 h-32 bg-[#F2A07B] rounded-full opacity-5 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 -left-10 w-40 h-40 bg-[#8AAAE5] rounded-full opacity-5 blur-2xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.03, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div 
          className="p-6 border-b border-white/50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] rounded-xl flex items-center justify-center">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A202C]">Dashboard</h3>
                    <p className="text-xs text-[#1A202C]/60">Admin Panel</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-8 h-8 bg-white/80 backdrop-blur-sm border border-white/50 rounded-lg flex items-center justify-center hover:bg-white/90 transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4 text-[#1A202C]/70" />
              ) : (
                <ChevronLeft className="w-4 h-4 text-[#1A202C]/70" />
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Navigation Menu */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#F2A07B]" />
                  <span className="text-sm font-medium text-[#1A202C]/80 tracking-wider uppercase">
                    Navigation
                  </span>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-[#F2A07B]/30 to-transparent"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 overflow-hidden ${
                      isActive
                        ? `bg-gradient-to-r ${item.bgGradient} border border-${item.borderColor} shadow-lg`
                        : `hover:bg-${item.hoverBg} border border-transparent hover:border-white/30`
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Background Glow Effect */}
                      {isActive && (
                        <div 
                          className="absolute inset-0 opacity-20 blur-xl"
                          style={{ backgroundColor: item.color }}
                        />
                      )}
                      
                      {/* Icon Container */}
                      <div 
                        className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? 'shadow-lg' 
                            : 'group-hover:scale-105'
                        }`}
                        style={{ 
                          backgroundColor: isActive ? `${item.color}15` : 'transparent',
                          border: isActive ? `2px solid ${item.color}30` : '2px solid transparent'
                        }}
                      >
                        <item.icon 
                          className={`w-5 h-5 transition-all duration-300 ${
                            isActive ? 'scale-110' : 'group-hover:scale-110'
                          }`}
                          style={{ color: isActive ? item.color : '#1A202C80' }}
                        />
                      </div>

                      {/* Label and Badge */}
                      <AnimatePresence mode="wait">
                        {!isCollapsed && (
                          <motion.div
                            className="relative z-10 flex items-center justify-between flex-1"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span 
                              className={`font-medium transition-all duration-300 ${
                                isActive ? 'text-[#1A202C]' : 'text-[#1A202C]/70 group-hover:text-[#1A202C]'
                              }`}
                            >
                              {item.label}
                            </span>
                            
                            {/* Badge for Chat Management */}
                            {item.badge && item.badge > 0 && (
                              <motion.div
                                className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-semibold shadow-lg"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              >
                                {item.badge > 99 ? '99+' : item.badge}
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Collapsed Badge */}
                      {isCollapsed && item.badge && item.badge > 0 && (
                        <motion.div
                          className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          {item.badge > 9 ? '9+' : item.badge}
                        </motion.div>
                      )}

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute right-0 top-1/2 w-1 h-8 rounded-l-full"
                          style={{ backgroundColor: item.color }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats Section */}
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div
                className="mt-12 p-4 bg-gradient-to-br from-[#F7F8F8] to-white rounded-2xl border border-white/50 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#1A202C]">Quick Stats</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#1A202C]/60">Active Products</span>
                    <span className="text-xs font-medium text-[#1A202C]">127</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#1A202C]/60">Pending Orders</span>
                    <span className="text-xs font-medium text-[#1A202C]">23</span>
                  </div>
                  {unreadCount > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#1A202C]/60">Unread Messages</span>
                      <span className="text-xs font-medium text-red-500">{unreadCount}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default Sidebar;