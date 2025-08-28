

// import React, { useContext, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ShopContext } from "../../context/ShopContext.jsx";
// import Title from "./Title.jsx";
// import ProductItem from "./ProductItem.jsx";

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     if (products && products.length > 0) setLatestProducts(products.slice(0, 5));
//   }, [products]);

//   return (
//     <motion.section
//       className="bg-white py-12 px-6 sm:px-12 max-w-7xl mx-auto"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//     >
//      <div className="text-center mb-10">
//   <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2a44] tracking-tight mb-4">
//     Latest <span className="font-light text-[#766f62]">Collection</span>
//   </h2>
//   <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
//     Handpicked items just for you. Explore the newest styles before they run out.
//   </p>
// </div>


//       {/* Products Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//         {latestProducts.map((item) => (
//           <motion.div
//             key={item._id}
//             className="rounded-lg cursor-pointer bg-gray-50 shadow-sm"
//             whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <ProductItem
//               id={item._id}
//               image={item.image}
//               name={item.name}
//               price={item.price}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default LatestCollection;

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, Star } from "lucide-react";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) setLatestProducts(products.slice(0, 5));
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
    rotate: [0, 2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-1/4 w-64 h-64 bg-[#F2A07B] rounded-full opacity-3 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/6 w-80 h-80 bg-[#8AAAE5] rounded-full opacity-4 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.04, 0.02, 0.04]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        {/* Geometric Elements */}
        <motion.div 
          className="absolute top-1/3 left-20 w-3 h-3 bg-[#F2A07B] rounded-full"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-1/3 right-20 w-2 h-2 bg-[#8AAAE5] rounded-full"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 }
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
            <TrendingUp className="w-5 h-5 text-[#F2A07B]" />
            <div className="px-6 py-3 bg-gradient-to-r from-[#F2A07B]/10 via-[#8AAAE5]/10 to-[#F2A07B]/10 border border-[#F2A07B]/20 rounded-full">
              <span className="text-sm font-medium text-[#1A202C] tracking-[0.2em] uppercase">
                Trending Now • Fresh Arrivals
              </span>
            </div>
            <Star className="w-5 h-5 text-[#8AAAE5]" />
          </motion.div>

          {/* Main Title - Minimized */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-[#1A202C] leading-tight tracking-tight mb-4">
              LATEST
            </h2>
            <div className="relative inline-block">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#F2A07B] italic leading-tight">
                Collection
              </h3>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F2A07B] via-[#8AAAE5] to-[#F2A07B] rounded-full"></div>
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            className="max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-xl text-[#1A202C]/70 leading-relaxed mb-8">
              Discover the newest pieces in our carefully curated collection. Each item embodies timeless elegance and modern sophistication, handpicked for the discerning individual.
            </p>
            
            {/* Stats Row */}
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F2A07B] rounded-full animate-pulse"></div>
                <span className="text-[#1A202C]/60 tracking-wide">5 NEW PIECES</span>
              </div>
              <div className="h-4 w-[1px] bg-[#1A202C]/20"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8AAAE5] rounded-full animate-pulse"></div>
                <span className="text-[#1A202C]/60 tracking-wide">PREMIUM QUALITY</span>
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
          {/* Featured Product (First Item) */}
          {latestProducts.length > 0 && (
            <motion.div
              className="mb-16"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-[#F7F8F8] to-white rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Featured Product Image */}
                  <motion.div
                    className="lg:w-1/2 relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-lg"></div>
                    <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-gradient-to-r from-[#F2A07B] to-[#F4B692] text-white text-xs px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                          <Sparkles className="w-3 h-3" />
                          FEATURED
                        </div>
                      </div>
                      <ProductItem
                        id={latestProducts[0]._id}
                        image={latestProducts[0].image}
                        name={latestProducts[0].name}
                        price={latestProducts[0].price}
                      />
                    </div>
                  </motion.div>

                  {/* Featured Product Info */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="mb-6">
                      <h4 className="text-3xl font-light text-[#1A202C] mb-2">
                        Featured This Week
                      </h4>
                      <p className="text-[#1A202C]/70 leading-relaxed">
                        Our most coveted piece, chosen by our style curators for its exceptional design and quality craftsmanship.
                      </p>
                    </div>
                    
                    <motion.button
                      className="group bg-[#1A202C] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg flex items-center gap-2 mx-auto lg:mx-0"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Shop Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Remaining Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {latestProducts.slice(1).map((item, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F2A07B]/5 to-[#8AAAE5]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* New Badge */}
                  {index < 2 && (
                    <motion.div
                      className="absolute z-10 top-3 right-3 bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] text-white text-xs px-3 py-1.5 rounded-full font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      NEW
                    </motion.div>
                  )}
                  
                  <div className="relative">
                    <ProductItem
                      id={item._id}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                    />
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#F2A07B]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              Ready to Explore More?
            </h3>
            <p className="text-[#1A202C]/70 mb-8 max-w-md mx-auto">
              Dive into our complete collection of over 500+ carefully curated pieces
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
                  className="group relative px-10 py-4 bg-gradient-to-r from-[#F2A07B] to-[#F4B692] text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-xl inline-flex items-center gap-2"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#8AAAE5] to-[#A2C2E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative">View Complete Collection</span>
                  <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <button className="px-10 py-4 bg-[#F7F8F8] border-2 border-[#F7F8F8] text-[#1A202C] rounded-full font-medium transition-all duration-300 hover:border-[#F2A07B] hover:bg-white hover:shadow-lg">
                  Subscribe for Updates
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LatestCollection;