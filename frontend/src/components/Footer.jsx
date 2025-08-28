// import React from 'react'
// import { assets } from '../assets/assets/assets.js'
 

// const Footer = () => {
//   return (
//     <div>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//         <div>
//             <img src={assets.logo} className='mb-5 w-32' alt="Velista Logo" />
//             <p className='w-full md:w-2/3 text-gray-600'>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                  Totam, adipisci eos repellat nisi magnam dignissimos libero facilis incidunt consequuntur enim veritatis,
//                  voluptates deserunt id animi quod aliquid laborum? Labore, sit.
//             </p>
//         </div>
         
//          <div>
//             <p className='text-xl font-medium mb-5'>COMPANY</p>
//             <ul className='flex flex-col gap-1 text-gray-600'>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Delivery</li>
//                 <li>Privacy Policy</li>
//             </ul>
//          </div>
//          <div>
//             <p className='text-xl font-medium mb-5'>Get in Touch</p>
//             <ul className='flex flex-col gap-1 text-gray-600'>
//                <li>+1-212-456-7890</li>
//                <li>contact@velistayou.com
//                </li>
//             </ul>
//          </div>
//       </div>
//       <div>
//         <hr />
//         <p className='py-5 text-sm text-center '>Copyright 2024 @ velista.com - All Rights Reserved
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import { assets } from '../assets/assets/assets.js'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-[#F7F8F8] to-white border-t border-white/20 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <img src={assets.logo} className="w-28 hover:scale-105 transition-transform duration-300" alt="Velista Logo" />
            </div>
            <p className="text-[#1A202C]/70 text-sm leading-relaxed mb-6 max-w-sm">
              Discover premium fashion curated just for you. Velista brings you quality, 
              style, and exceptional shopping experience.
            </p>
            
            {/* Newsletter Signup */}
            <div className="max-w-sm">
              <h4 className="text-sm font-semibold text-[#1A202C] mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2A07B]/50 focus:border-transparent transition-all duration-300 text-[#1A202C] placeholder-[#1A202C]/50"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#F2A07B] to-[#F4B692] text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-base font-semibold text-[#1A202C] mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#1A202C]/70 hover:text-[#F2A07B] transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#1A202C]/70 hover:text-[#F2A07B] transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-[#1A202C]/70 hover:text-[#F2A07B] transition-colors duration-300 text-sm">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#1A202C]/70 hover:text-[#F2A07B] transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-[#1A202C]/70 hover:text-[#F2A07B] transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-[#1A202C] mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#F2A07B]">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#1A202C]/70 text-sm">(415) 555-0132</p>
                  <p className="text-xs text-[#1A202C]/50">Mon-Sat 9AM-7PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#F2A07B]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <a href="mailto:admin@velista.com" className="text-[#1A202C]/70 hover:text-[#F2A07B] transition-colors duration-300 text-sm">
                    admin@velista.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#F2A07B]">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#1A202C]/70 text-sm">45/3 Freeganj near Clock Tower</p>
                  <p className="text-xs text-[#1A202C]/50">Ujjain, Madhya Pradesh</p>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="pt-3">
                <p className="text-sm font-medium text-[#1A202C] mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#F2A07B] hover:text-white transition-all duration-300 hover:scale-110 text-[#1A202C]/70 shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#8AAAE5] hover:text-white transition-all duration-300 hover:scale-110 text-[#1A202C]/70 shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#F2A07B] hover:text-white transition-all duration-300 hover:scale-110 text-[#1A202C]/70 shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
            <p className="text-[#1A202C]/70">
              © 2024 <span className="font-semibold text-[#1A202C]">Velista Fashion</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-[#1A202C]/70">
              <a href="#" className="hover:text-[#F2A07B] transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="hover:text-[#F2A07B] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;