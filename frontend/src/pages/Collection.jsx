// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../../context/ShopContext.jsx';
// import { assets } from '../assets/assets/assets.js';
// import Title from '../components/Title.jsx';
// import ProductItem from '../components/ProductItem.jsx';
// import { motion } from 'framer-motion';

// const fadeIn = (direction = 'up', delay = 0) => ({
//   hidden: { opacity: 0, y: direction === 'up' ? 40 : -40 },
//   show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: 'easeOut' } }
// });

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState('relavent');
//   const [visibleProducts, setVisibleProducts] = useState(6);

//   const toggleCategory = v =>
//     setCategory(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
//   const toggleSubCategory = v =>
//     setSubCategory(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);

//   const applyFilter = () => {
//     let list = [...products];
//     if (showSearch && search) {
//       list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
//     }
//     if (category.length) {
//       list = list.filter(p => category.includes(p.category));
//     }
//     if (subCategory.length) {
//       list = list.filter(p => subCategory.includes(p.subCategory));
//     }
//     setFilterProducts(list);
//     setVisibleProducts(6);
//   };

//   const sortProducts = () => {
//     let list = [...filterProducts];
//     if (sortType === 'low-high') list.sort((a, b) => a.price - b.price);
//     else if (sortType === 'high-low') list.sort((a, b) => b.price - a.price);
//     setFilterProducts(list);
//   };

//   useEffect(() => {
//     if (products && products.length > 0) {
//       applyFilter();
//     }
//   }, [products, search, showSearch, category, subCategory]);

//   useEffect(() => {
//     if (filterProducts.length > 0) {
//       sortProducts();
//     }
//   }, [sortType]);

//   const loadMore = () =>
//     setVisibleProducts(prev => Math.min(prev + 6, filterProducts.length));
//   const showLess = () => setVisibleProducts(6);

//   return (
//     <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t bg-[#fdfbf7] p-6">
//       {/* Filters */}
//       <motion.div
//         className="w-full sm:w-1/4"
//         variants={fadeIn('right', 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <p className="my-2 text-xl font-medium text-[#1f2a44]">FILTERS</p>
//         <div className="border border-gray-300 p-4 mb-4">
//           <p className="text-sm font-semibold mb-2">CATEGORIES</p>
//           {['Men', 'Women', 'Kids'].map(cat => (
//             <label
//               key={cat}
//               className="flex items-center gap-2 mb-1 text-gray-700 hover:text-[#1f2a44]"
//               onClick={() => toggleCategory(cat)}
//             >
//               <input type="checkbox" checked={category.includes(cat)} className="h-4 w-4" /> {cat}
//             </label>
//           ))}
//         </div>
//         <div className="border border-gray-300 p-4">
//           <p className="text-sm font-semibold mb-2">TYPE</p>
//           {['Topwear', 'Bottomwear', 'Winterwear'].map(sub => (
//             <label
//               key={sub}
//               className="flex items-center gap-2 mb-1 text-gray-700 hover:text-[#1f2a44]"
//               onClick={() => toggleSubCategory(sub)}
//             >
//               <input type="checkbox" checked={subCategory.includes(sub)} className="h-4 w-4" /> {sub}
//             </label>
//           ))}
//         </div>
//       </motion.div>

//       {/* Products */}
//       <motion.div
//         className="flex-1"
//         variants={fadeIn('left', 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <div className="relative mb-8">
//           <div className="relative inline-block px-4 bg-[#fdfbf7]">
//             <Title text1="ALL" text2="COLLECTION" />
//           </div>
//         </div>

//         <div className="flex justify-end mb-4">
//           <select
//             onChange={e => setSortType(e.target.value)}
//             className="border-2 border-gray-300 text-sm px-2 py-1 rounded"
//           >
//             <option value="relavent">Relevant</option>
//             <option value="low-high">Price: Low to High</option>
//             <option value="high-low">Price: High to Low</option>
//           </select>
//         </div>

//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 min-h-[200px]"
//           variants={fadeIn('up', 0.2)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           {products.length === 0 ? (
//             <p className="col-span-full text-center text-gray-400">Loading products...</p>
//           ) : filterProducts.length === 0 ? (
//             <p className="col-span-full text-center text-gray-400">No matching products found.</p>
//           ) : (
//             filterProducts.slice(0, visibleProducts).map(p => (
//               <ProductItem key={p._id} name={p.name} id={p._id} price={p.price} image={p.image} />
//             ))
//           )}
//         </motion.div>

//         <div className="text-center mt-6">
//           {visibleProducts < filterProducts.length ? (
//             <button
//               onClick={loadMore}
//               className="px-6 py-2 bg-[#1f2a44] text-white rounded-full"
//             >
//               Load More
//             </button>
//           ) : visibleProducts > 6 && (
//             <button
//               onClick={showLess}
//               className="px-6 py-2 border border-[#1f2a44] text-[#1f2a44] rounded-full"
//             >
//               Show Less
//             </button>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Collection;

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext.jsx';
import { assets } from '../assets/assets/assets.js';
import Title from '../components/Title.jsx';
import ProductItem from '../components/ProductItem.jsx';
import { motion } from 'framer-motion';

const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: { opacity: 0, y: direction === 'up' ? 40 : -40 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: 'easeOut' } }
});

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = v =>
    setCategory(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
  const toggleSubCategory = v =>
    setSubCategory(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);

  const applyFilter = () => {
    let list = [...products];
    if (showSearch && search) {
      list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length) {
      list = list.filter(p => category.includes(p.category));
    }
    if (subCategory.length) {
      list = list.filter(p => subCategory.includes(p.subCategory));
    }
    setFilterProducts(list);
    setVisibleProducts(6);
  };

  const sortProducts = () => {
    let list = [...filterProducts];
    if (sortType === 'low-high') list.sort((a, b) => a.price - b.price);
    else if (sortType === 'high-low') list.sort((a, b) => b.price - a.price);
    setFilterProducts(list);
  };

  useEffect(() => {
    if (products && products.length > 0) {
      applyFilter();
    }
  }, [products, search, showSearch, category, subCategory]);

  useEffect(() => {
    if (filterProducts.length > 0) {
      sortProducts();
    }
  }, [sortType]);

  const loadMore = () =>
    setVisibleProducts(prev => Math.min(prev + 6, filterProducts.length));
  const showLess = () => setVisibleProducts(6);

  const clearAllFilters = () => {
    setCategory([]);
    setSubCategory([]);
  };

  const FilterChip = ({ label, isActive, onClick, color = 'coral' }) => (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
        isActive
          ? color === 'coral' 
            ? 'bg-[#F2A07B] text-white shadow-lg' 
            : 'bg-[#8AAAE5] text-white shadow-lg'
          : 'bg-[#F7F8F8] text-[#1A202C] hover:bg-[#F2A07B] hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Floating Title */}
      <div className="relative bg-gradient-to-br from-[#F7F8F8] via-white to-[#F7F8F8] py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGN0Y4RjgiIGZpbGwtb3BhY2l0eT0iMC4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        <motion.div
          className="relative z-10 text-center"
          variants={fadeIn('up', 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-6xl md:text-8xl font-light text-[#1A202C] mb-4 tracking-wide">
            ALL
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] mx-auto mb-4"></div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-600 tracking-[0.3em]">
            COLLECTION
          </h2>
          <p className="mt-6 text-gray-500 max-w-md mx-auto leading-relaxed">
            Discover our curated selection of premium fashion pieces
          </p>
        </motion.div>
      </div>

      {/* Filter Bar - Floating */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#1A202C] text-white rounded-full text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              Filters
            </button>

            {/* Desktop Filter Chips */}
            <div className={`${showFilters ? 'flex' : 'hidden lg:flex'} flex-wrap gap-3`}>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 self-center mr-2">Categories:</span>
                {['Men', 'Women', 'Kids'].map(cat => (
                  <FilterChip
                    key={cat}
                    label={cat}
                    isActive={category.includes(cat)}
                    onClick={() => toggleCategory(cat)}
                    color="coral"
                  />
                ))}
              </div>
              
              <div className="w-px h-8 bg-gray-200 mx-2"></div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 self-center mr-2">Type:</span>
                {['Topwear', 'Bottomwear', 'Winterwear'].map(sub => (
                  <FilterChip
                    key={sub}
                    label={sub}
                    isActive={subCategory.includes(sub)}
                    onClick={() => toggleSubCategory(sub)}
                    color="blue"
                  />
                ))}
              </div>

              {(category.length > 0 || subCategory.length > 0) && (
                <>
                  <div className="w-px h-8 bg-gray-200 mx-2"></div>
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-[#F2A07B] hover:text-[#1A202C] transition-colors duration-200 underline"
                  >
                    Clear All
                  </button>
                </>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 hidden sm:block">Sort by:</span>
              <select
                onChange={e => setSortType(e.target.value)}
                className="bg-[#F7F8F8] border-0 rounded-full px-4 py-2 text-sm text-[#1A202C] focus:ring-2 focus:ring-[#F2A07B] outline-none cursor-pointer"
              >
                <option value="relavent">Most Relevant</option>
                <option value="low-high">Price: Low → High</option>
                <option value="high-low">Price: High → Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Results Info */}
        <motion.div
          className="mb-8 text-center"
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-gray-500">
            {filterProducts.length === 0 && products.length > 0
              ? "No products match your current filters"
              : `Showing ${Math.min(visibleProducts, filterProducts.length)} of ${filterProducts.length} products`
            }
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {products.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <div className="w-20 h-20 bg-[#F7F8F8] rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM10 4.236L5 8v8h10V8l-5-3.764z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-400 text-lg">Loading our collection...</p>
            </div>
          ) : filterProducts.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <div className="w-20 h-20 bg-[#F7F8F8] rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-400 text-lg mb-2">No products found</p>
              <p className="text-gray-400 text-sm">Try adjusting your filters</p>
            </div>
          ) : (
            filterProducts.slice(0, visibleProducts).map(p => (
              <motion.div
                key={p._id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <ProductItem name={p.name} id={p._id} price={p.price} image={p.image} />
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Load More Section */}
        {filterProducts.length > 0 && (
          <motion.div
            className="text-center mt-16"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {visibleProducts < filterProducts.length ? (
              <button
                onClick={loadMore}
                className="group relative px-12 py-4 bg-gradient-to-r from-[#1A202C] to-[#2D3748] text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#F2A07B] to-[#8AAAE5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Discover More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            ) : visibleProducts > 6 && (
              <button
                onClick={showLess}
                className="px-12 py-4 border-2 border-[#F7F8F8] text-[#1A202C] rounded-full font-medium hover:bg-[#F7F8F8] transition-all duration-300 transform hover:-translate-y-1"
              >
                Show Less
              </button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Collection;