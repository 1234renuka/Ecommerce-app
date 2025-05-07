

// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../../context/ShopContext';
// import { assets } from '../assets/assets/assets';
// import Title from '../componets/Title';
// import ProductItem from '../componets/ProductItem';
// import { motion } from 'framer-motion';

// const fadeIn = (direction = 'up', delay = 0) => {
//   return {
//     hidden: { opacity: 0, y: direction === 'up' ? 40 : -40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay,
//         duration: 0.6,
//         ease: 'easeOut',
//       },
//     },
//   };
// };

// const Collection = () => {

//   const { products, search, showSearch } = useContext(ShopContext); 
//   const [showFilter, setShowFilter] = useState(false); 
//   const [filterProducts, setFilterProducts] = useState([]); 
//   const [category, setCategory] = useState([]); 
//   const [subCategory, setSubCategory] = useState([]); 
//   const [sortType, setSortType] = useState('relavent'); 

//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory(prev => prev.filter(item => item !== e.target.value));
//     } else {
//       setCategory(prev => [...prev, e.target.value]);
//     }
//   };

//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev => prev.filter(item => item !== e.target.value));
//     } else {
//       setSubCategory(prev => [...prev, e.target.value]);
//     }
//   };

//   const applyFilter = () => {
//     let productsCopy = products.slice();
    
//     if (showSearch && search) {
//       productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
//     }
//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item => category.includes(item.category));
//     }
//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
//     }
//     setFilterProducts(productsCopy);
//   };

//   const sortProduct = () => {
//     let fpCopy = filterProducts.slice();

//     switch (sortType) {
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
//         break;
//       case 'high-low':
//         setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
//         break;
//       default:
//         applyFilter();
//         break;
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, search, showSearch, products]);

//   useEffect(() => {
//     sortProduct();
//   }, [sortType]);

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
//       {/* Filter Options */}
//       <motion.div 
//         className='min-w-60'
//         variants={fadeIn('right', 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <p 
//           onClick={() => setShowFilter(!showFilter)} 
//           className='my-2 text-xl flex items-center cursor-pointer gap-2'
//         >
//           FILTERS
//         </p>
//         <img 
//           className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} 
//           src={assets.dropdown_icon} alt="" 
//         />
        
//         {/* Category Filter */}
//         <motion.div 
//           className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
//           variants={fadeIn('up', 0.1)}
//         >
//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Kids'}  onChange={toggleCategory} /> Kids
//             </p>
//           </div>
//         </motion.div>

//         {/* Subcategory Filter */}
//         <motion.div 
//           className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}
//           variants={fadeIn('up', 0.2)}
//         >
//           <p className='mb-3 text-sm font-medium'>TYPE</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value={'Winterwear'}  onChange={toggleSubCategory} /> Winterwear
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Right Side */}
//       <motion.div 
//         className='flex-1'
//         variants={fadeIn('left', 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTION'} />
          
//           {/* Product Sort */}
//           <select 
//             onChange={(e) => setSortType(e.target.value)} 
//             className='border-2 border-gray-300 text-sm px-2'
//           >
//             <option value="relavent">Sort by: Relavent</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {/* Product List */}
//         <motion.div 
//           className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'
//           variants={fadeIn('up', 0.3)}
//         >
//           {filterProducts.map((item, index) => (
//             <ProductItem 
//               key={index} 
//               name={item.name} 
//               id={item._id} 
//               price={item.price} 
//               image={item.image} 
//             />
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Collection;

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { assets } from '../assets/assets/assets';
import Title from '../componets/Title';
import ProductItem from '../componets/ProductItem';
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

  // Toggle filter
  const toggleCategory = v => setCategory(prev => prev.includes(v) ? prev.filter(x=>x!==v) : [...prev,v]);
  const toggleSubCategory = v => setSubCategory(prev => prev.includes(v) ? prev.filter(x=>x!==v) : [...prev,v]);

  // Filter logic
  const applyFilter = () => {
    let list = [...products];
    if (showSearch && search) list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    if (category.length) list = list.filter(p => category.includes(p.category));
    if (subCategory.length) list = list.filter(p => subCategory.includes(p.subCategory));
    setFilterProducts(list);
    setVisibleProducts(6);
  };

  // Sort logic
  const sortProducts = () => {
    let list = [...filterProducts];
    if (sortType === 'low-high') list.sort((a,b) => a.price - b.price);
    else if (sortType === 'high-low') list.sort((a,b) => b.price - a.price);
    setFilterProducts(list);
  };

  // Effects
  useEffect(() => applyFilter(), [products, search, showSearch, category, subCategory]);
  useEffect(() => sortProducts(), [sortType]);

  const loadMore = () => setVisibleProducts(prev => Math.min(prev + 6, filterProducts.length));
  const showLess = () => setVisibleProducts(6);

  return (
    <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t bg-[#fdfbf7] p-6">
      {/* Filters */}
      <motion.div className="w-full sm:w-1/4" variants={fadeIn('right',0)} initial="hidden" whileInView="show" viewport={{once:true}}>
        <p className="my-2 text-xl font-medium text-[#1f2a44]">FILTERS</p>
        <div className="border border-gray-300 p-4 mb-4">
          <p className="text-sm font-semibold mb-2">CATEGORIES</p>
          {['Men','Women','Kids'].map(cat=> (
            <label key={cat} className="flex items-center gap-2 mb-1 text-gray-700 hover:text-[#1f2a44]" onClick={() => toggleCategory(cat)}>
              <input type="checkbox" checked={category.includes(cat)} className="h-4 w-4" /> {cat}
            </label>
          ))}
        </div>
        <div className="border border-gray-300 p-4">
          <p className="text-sm font-semibold mb-2">TYPE</p>
          {['Topwear','Bottomwear','Winterwear'].map(sub=> (
            <label key={sub} className="flex items-center gap-2 mb-1 text-gray-700 hover:text-[#1f2a44]" onClick={() => toggleSubCategory(sub)}>
              <input type="checkbox" checked={subCategory.includes(sub)} className="h-4 w-4" /> {sub}
            </label>
          ))}
        </div>
      </motion.div>

      {/* Products */}
      <motion.div className="flex-1" variants={fadeIn('left',0)} initial="hidden" whileInView="show" viewport={{once:true}}>
        {/* Title with navy accent bar like About section */}
        <div className="relative mb-8">
         
          <div className="relative inline-block px-4 bg-[#fdfbf7]">
            <Title text1="ALL" text2="COLLECTION" />
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <select onChange={e=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2 py-1 rounded">
            <option value="relavent">Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" variants={fadeIn('up',0.2)} initial="hidden" whileInView="show" viewport={{once:true}}>
          {filterProducts.slice(0, visibleProducts).map(p=>(
            <ProductItem key={p._id} name={p.name} id={p._id} price={p.price} image={p.image} />
          ))}
        </motion.div>

        <div className="text-center mt-6">
          {visibleProducts < filterProducts.length ? (
            <button onClick={loadMore} className="px-6 py-2 bg-[#1f2a44] text-white rounded-full">Load More</button>
          ) : visibleProducts > 6 && (
            <button onClick={showLess} className="px-6 py-2 border border-[#1f2a44] text-[#1f2a44] rounded-full">Show Less</button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Collection;
