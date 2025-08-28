import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext.jsx";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  }

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-white/20 transition-all duration-300 shadow-sm">
      <div className="flex items-center justify-between py-4 px-6 lg:px-8 font-medium max-w-7xl mx-auto">

    
        <div className="hidden lg:flex flex-1 items-center justify-between">
          <Link to='/' className="flex items-center">
            <img src={assets.logo} className="w-32 hover:scale-105 transition-transform duration-300" alt="Velista" />
          </Link>
          <ul className="flex items-center gap-8 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) => `
                relative py-2 px-4 rounded-full transition-all duration-300 hover:bg-[#F2A07B]/10
                ${isActive ? 'text-[#1A202C] font-semibold' : 'text-[#1A202C]/70 hover:text-[#1A202C]'}
              `}
            >
              {({ isActive }) => (
                <>
                  <span>HOME</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] rounded-full"></div>
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/collection"
              className={({ isActive }) => `
                relative py-2 px-4 rounded-full transition-all duration-300 hover:bg-[#F2A07B]/10
                ${isActive ? 'text-[#1A202C] font-semibold' : 'text-[#1A202C]/70 hover:text-[#1A202C]'}
              `}
            >
              {({ isActive }) => (
                <>
                  <span>COLLECTION</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] rounded-full"></div>
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `
                relative py-2 px-4 rounded-full transition-all duration-300 hover:bg-[#F2A07B]/10
                ${isActive ? 'text-[#1A202C] font-semibold' : 'text-[#1A202C]/70 hover:text-[#1A202C]'}
              `}
            >
              {({ isActive }) => (
                <>
                  <span>ABOUT</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] rounded-full"></div>
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `
                relative py-2 px-4 rounded-full transition-all duration-300 hover:bg-[#F2A07B]/10
                ${isActive ? 'text-[#1A202C] font-semibold' : 'text-[#1A202C]/70 hover:text-[#1A202C]'}
              `}
            >
              {({ isActive }) => (
                <>
                  <span>CONTACT</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] rounded-full"></div>
                  )}
                </>
              )}
            </NavLink>
          </ul>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSearch(true)}
              className="p-2.5 rounded-full hover:bg-[#8AAAE5]/10 transition-all duration-300 hover:scale-110 group"
            >
              <img src={assets.search_icon} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" alt="Search" />
            </button>
            <div className="relative group">
              <button
                onClick={() => token ? null : navigate('/login')}
                className="p-2.5 rounded-full hover:bg-[#8AAAE5]/10 transition-all duration-300 hover:scale-110 group"
              >
                <img className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" src={assets.profile_icon} alt="Profile" />
              </button>
              {token && (
                <div className="absolute right-0 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-48 py-3 bg-white rounded-2xl shadow-xl border border-white/50 overflow-hidden backdrop-blur-sm">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-semibold text-[#1A202C]">My Account</p>
                    </div>
                    <div className="py-2">
                      <button
                        onClick={() => navigate('/orders')}
                        className="w-full px-4 py-2.5 text-left text-sm text-[#1A202C]/70 hover:bg-[#F2A07B]/5 hover:text-[#1A202C] transition-all duration-200"
                      >
                        Orders
                      </button>
                      <button
                        onClick={logout}
                        className="w-full px-4 py-2.5 text-left text-sm text-[#F2A07B] hover:bg-[#F2A07B]/5 hover:text-[#F2A07B] font-medium transition-all duration-200">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/cart" className="relative group">
              <button className="p-2.5 rounded-full hover:bg-[#8AAAE5]/10 transition-all duration-300 hover:scale-110">
                <img src={assets.cart_icon} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" alt="Cart" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#F2A07B] to-[#F4B692] text-white text-xs rounded-full flex items-center justify-center font-medium shadow-lg animate-pulse">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>

        
        <div className="flex items-center justify-between w-full lg:hidden">
          <Link to='/' className="flex items-center">
            <img src={assets.logo} className="w-24" alt="Velista" />
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSearch(true)}
              className="p-2.5 rounded-full hover:bg-[#8AAAE5]/10 transition-all duration-300 hover:scale-110"
            >
              <img src={assets.search_icon} className="w-5 h-5 opacity-70" alt="Search" />
            </button>
            <Link to="/cart" className="relative">
              <button className="p-2.5 rounded-full hover:bg-[#8AAAE5]/10 transition-all duration-300 hover:scale-110">
                <img src={assets.cart_icon} className="w-5 h-5 opacity-70" alt="Cart" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#F2A07B] to-[#F4B692] text-white text-xs rounded-full flex items-center justify-center font-medium shadow-lg animate-pulse">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </Link>
            <button
              onClick={() => setVisible(true)}
              className="p-2.5 rounded-full hover:bg-[#8AAAE5]/10 transition-all duration-300"
            >
              <img src={assets.menu_icon} className="w-5 h-5 opacity-70" alt="Menu" />
            </button>
          </div>
        </div>
      </div>

     
      {visible && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setVisible(false)}
          />
          <div
            className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
              visible ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <img src={assets.logo} className="w-28" alt="Velista" />
                <button
                  onClick={() => setVisible(false)}
                  className="p-2 rounded-full hover:bg-[#F2A07B]/10 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 opacity-70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 py-4">
                <div className="space-y-1 px-4">
                  <NavLink
                    onClick={() => setVisible(false)}
                    className={({ isActive }) => `
                      flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                      ${isActive
                        ? 'bg-gradient-to-r from-[#F2A07B]/10 to-[#8AAAE5]/10 text-[#1A202C] border border-[#F2A07B]/20'
                        : 'text-[#1A202C]/70 hover:bg-[#F2A07B]/5 hover:text-[#1A202C]'
                      }
                    `}
                    to='/'
                  >
                    HOME
                  </NavLink>
                  <NavLink
                    onClick={() => setVisible(false)}
                    className={({ isActive }) => `
                      flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                      ${isActive
                        ? 'bg-gradient-to-r from-[#F2A07B]/10 to-[#8AAAE5]/10 text-[#1A202C] border border-[#F2A07B]/20'
                        : 'text-[#1A202C]/70 hover:bg-[#F2A07B]/5 hover:text-[#1A202C]'
                      }
                    `}
                    to='/collection'
                  >
                    COLLECTION
                  </NavLink>
                  <NavLink
                    onClick={() => setVisible(false)}
                    className={({ isActive }) => `
                      flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                      ${isActive
                        ? 'bg-gradient-to-r from-[#F2A07B]/10 to-[#8AAAE5]/10 text-[#1A202C] border border-[#F2A07B]/20'
                        : 'text-[#1A202C]/70 hover:bg-[#F2A07B]/5 hover:text-[#1A202C]'
                      }
                    `}
                    to='/about'
                  >
                    ABOUT
                  </NavLink>
                  <NavLink
                    onClick={() => setVisible(false)}
                    className={({ isActive }) => `
                      flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                      ${isActive
                        ? 'bg-gradient-to-r from-[#F2A07B]/10 to-[#8AAAE5]/10 text-[#1A202C] border border-[#F2A07B]/20'
                        : 'text-[#1A202C]/70 hover:bg-[#F2A07B]/5 hover:text-[#1A202C]'
                      }
                    `}
                    to='/contact'
                  >
                    CONTACT
                  </NavLink>
                </div>
                {token && (
                  <div className="mt-6 px-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-[#1A202C] px-4 mb-3">My Account</h4>
                      <button
                        onClick={() => {
                          navigate('/orders');
                          setVisible(false);
                        }}
                        className="w-full flex items-center px-4 py-2 rounded-xl text-sm text-[#1A202C]/70 hover:bg-[#F2A07B]/5 hover:text-[#1A202C] transition-all duration-300"
                      >
                        Orders
                      </button>
                      <button
                        onClick={() => {
                          logout();
                          setVisible(false);
                        }}
                        className="w-full flex items-center px-4 py-2 rounded-xl text-sm text-[#F2A07B] hover:bg-[#F2A07B]/5 font-medium transition-all duration-300">
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="border-t border-gray-200 p-6 mt-auto">
                <p className="text-xs text-[#1A202C]/60 text-center font-medium tracking-wider">
                  © 2024 Velista. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;