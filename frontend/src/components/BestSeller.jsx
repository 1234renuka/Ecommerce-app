
// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../../context/ShopContext.jsx';
// import Title from './Title.jsx';
// import ProductItem from './ProductItem.jsx';
// import { motion } from 'framer-motion';

// const BestSeller = () => {
//   const { products } = useContext(ShopContext);
//   const [bestSeller, setBestSeller] = useState([]);

//   useEffect(() => {
//     const bestProduct = products.filter(item => item.bestseller);
//     setBestSeller(bestProduct.slice(0, 5));
//   }, [products]);

//   return (
//     <div className="bg-[#ebe6df] py-16 px-6 sm:px-16 max-w-7xl mx-auto rounded-lg my-16">
//       {/* Header */}
//       <motion.div
//   className="text-center mb-10"
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.8 }}
// >
//   <h2 className="text-4xl sm:text-5xl font-bold text-[#1f2a44] tracking-tight mb-4">
//     Best <span className="font-light text-[#766f62]">Sellers</span>
//   </h2>
//   <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
//     Discover our top-rated picks loved by customers. These bestsellers combine quality, style, and value — handpicked just for you.
//   </p>
// </motion.div>

//       {/* Products Grid */}
//       <motion.div
//         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={{
//           hidden: {},
//           visible: {
//             transition: {
//               staggerChildren: 0.12,
//             },
//           },
//         }}
//       >
//         {bestSeller.map((item) => (
//           <motion.div
//             key={item._id}
//             className="rounded-lg bg-white shadow-sm cursor-pointer"
//             whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(31, 42, 68, 0.2)" }}
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <ProductItem
//               id={item._id}
//               name={item.name}
//               image={item.image}
//               price={item.price}
//             />
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default BestSeller;

import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShopContext } from '../../context/ShopContext.jsx';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, TrendingUp, Award, Sparkles, Star } from 'lucide-react';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingAnimation = {
    y: [0, -8, 0],
    rotate: [0, -2, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-32 left-1/4 w-72 h-72 bg-[#8AAAE5] rounded-full opacity-4 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.04, 0.09, 0.04]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 right-1/5 w-64 h-64 bg-[#F2A07B] rounded-full opacity-3 blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.03, 0.07, 0.03]
          }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        
        {/* Geometric Crown Elements */}
        <motion.div 
          className="absolute top-1/4 right-16 w-4 h-4 bg-[#F2A07B] rounded-full"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-1/4 left-16 w-3 h-3 bg-[#8AAAE5] rounded-full"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 3 }
          }}
        />
        <motion.div 
          className="absolute top-2/3 right-1/3 w-2 h-2 bg-[#F2A07B] rounded-full"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1.5 }
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 py-20">
        {/* Hero Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Premium Badge */}
          <motion.div
            className="inline-flex items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <Crown className="w-5 h-5 text-[#F2A07B]" />
            <div className="px-6 py-3 bg-gradient-to-r from-[#8AAAE5]/10 via-[#F2A07B]/10 to-[#8AAAE5]/10 border border-[#8AAAE5]/20 rounded-full">
              <span className="text-sm font-medium text-[#1A202C] tracking-[0.2em] uppercase">
                Customer Champions • Top Rated
              </span>
            </div>
            <Award className="w-5 h-5 text-[#8AAAE5]" />
          </motion.div>

          {/* Main Title */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-[#1A202C] leading-tight tracking-tight mb-4">
              BEST
            </h2>
            <div className="relative inline-block">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#8AAAE5] italic leading-tight">
                Sellers
              </h3>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#8AAAE5] via-[#F2A07B] to-[#8AAAE5] rounded-full"></div>
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            className="max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-xl text-[#1A202C]/70 leading-relaxed mb-8">
              These are the crown jewels of our collection. Loved, reviewed, and repurchased by thousands of customers who can't get enough of these exceptional pieces.
            </p>
            
            {/* Stats Row */}
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8AAAE5] rounded-full animate-pulse"></div>
                <span className="text-[#1A202C]/60 tracking-wide">4.9★ RATED</span>
              </div>
              <div className="h-4 w-[1px] bg-[#1A202C]/20"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F2A07B] rounded-full animate-pulse"></div>
                <span className="text-[#1A202C]/60 tracking-wide">95% REPURCHASE</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Products Showcase */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {/* Champion Product (First Item) */}
          {bestSeller.length > 0 && (
            <motion.div
              className="mb-16"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-[#F7F8F8] to-white rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Champion Product Image */}
                  <motion.div
                    className="lg:w-1/2 relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#8AAAE5] to-[#F2A07B] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-lg"></div>
                    <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] text-white text-xs px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                          <Crown className="w-3 h-3" />
                          #1 BESTSELLER
                        </div>
                      </div>
                      
                      {/* Sales Count Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-[#F2A07B] text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                          {Math.floor(Math.random() * 500) + 300}+ sold
                        </div>
                      </div>
                      
                      <ProductItem
                        id={bestSeller[0]._id}
                        image={bestSeller[0].image}
                        name={bestSeller[0].name}
                        price={bestSeller[0].price}
                      />
                    </div>
                  </motion.div>

                  {/* Champion Product Info */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="mb-6">
                      <h4 className="text-3xl font-light text-[#1A202C] mb-2">
                        Customer Champion
                      </h4>
                      <p className="text-[#1A202C]/70 leading-relaxed mb-4">
                        Our absolute bestseller with over 1,000 five-star reviews. This piece has become a wardrobe staple for customers worldwide.
                      </p>
                      
                      {/* Rating Stars */}
                      <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#F2A07B] fill-current" />
                          ))}
                        </div>
                        <span className="text-[#1A202C]/60 text-sm">(1,247 reviews)</span>
                      </div>
                    </div>
                    
                    <motion.button
                      className="group bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg flex items-center gap-2 mx-auto lg:mx-0"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Shop Champion</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Remaining Bestsellers Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSeller.slice(1).map((item, index) => (
              <motion.div
                key={item._id}
                className="group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4 }}
              >
                {/* Glass Morphism Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 group-hover:shadow-2xl transition-all duration-500">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8AAAE5]/5 to-[#F2A07B]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Bestseller Badge */}
                  <motion.div
                    className="absolute z-10 top-3 right-3 bg-gradient-to-r from-[#F2A07B] to-[#E08A63] text-white text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Crown className="w-2.5 h-2.5" />
                    TOP
                  </motion.div>
                  
                  {/* Sales Counter */}
                  <div className="absolute z-10 top-3 left-3 bg-[#1A202C]/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                    {Math.floor(Math.random() * 200) + 150}+ sold
                  </div>
                  
                  <div className="relative mt-8">
                    <ProductItem
                      id={item._id}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                    />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mt-3 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-[#F2A07B] fill-current" />
                    ))}
                  </div>

                  {/* Rank Badge for top sellers */}
                  {index < 2 && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] text-white text-xs px-3 py-1 rounded-full font-semibold">
                      #{index + 2} BESTSELLER
                    </div>
                  )}

                  {/* Decorative Corner */}
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#8AAAE5]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-[#F7F8F8] via-white to-[#F7F8F8] rounded-3xl p-12 shadow-xl border border-white/50">
            <h3 className="text-3xl font-light text-[#1A202C] mb-4">
              Join the Champions Club
            </h3>
            <p className="text-[#1A202C]/70 mb-8 max-w-md mx-auto">
              Discover why thousands of customers keep coming back for these exceptional bestsellers
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/collection"
                  className="group relative px-10 py-4 bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-xl inline-flex items-center gap-2"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#F2A07B] to-[#F4B692] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative">Shop All Bestsellers</span>
                  <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <button className="px-10 py-4 bg-[#F7F8F8] border-2 border-[#F7F8F8] text-[#1A202C] rounded-full font-medium transition-all duration-300 hover:border-[#8AAAE5] hover:bg-white hover:shadow-lg">
                  Read Reviews
                </button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 mt-8 pt-6 border-t border-[#8AAAE5]/20">
              <div className="flex items-center gap-2 text-[#1A202C]/60">
                <div className="w-2 h-2 bg-[#8AAAE5] rounded-full animate-pulse"></div>
                <span className="text-xs tracking-wide">FREE RETURNS</span>
              </div>
              <div className="flex items-center gap-2 text-[#1A202C]/60">
                <div className="w-2 h-2 bg-[#F2A07B] rounded-full animate-pulse"></div>
                <span className="text-xs tracking-wide">QUALITY GUARANTEE</span>
              </div>
              <div className="flex items-center gap-2 text-[#1A202C]/60">
                <div className="w-2 h-2 bg-[#8AAAE5] rounded-full animate-pulse"></div>
                <span className="text-xs tracking-wide">SECURE CHECKOUT</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BestSeller;