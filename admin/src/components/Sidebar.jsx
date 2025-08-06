import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets' // Adjust path as needed
import { MessageSquare } from 'lucide-react'

const Sidebar = () => {

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

  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/add">
          <img className='w-5 h-5' src={assets.add_icon} alt="" />
          <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/list">
          <img className='w-5 h-5' src={assets.order_icon} alt="" />
          <p className='hidden md:block'>List Items</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l' to="/orders">
          <img className='w-5 h-5' src={assets.order_icon} alt="" />
          <p className='hidden md:block'>Orders</p>
        </NavLink>

        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l relative' to="/chats">
          <MessageSquare className='w-5 h-5' />
          <p className='hidden md:block'>Chat Management</p>
          {unreadCount > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
              {unreadCount > 99 ? '99+' : unreadCount}
            </span>
          )}
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar