// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LastestCollection = () => {
     
//     const {products} = useContext(ShopContext);
//     const [latestProducts,setLatestProducts] =useState([]);

//     useEffect(()=>{
//       if(products && products.length > 0)
//         setLatestProducts(products.slice(0,5));
//     },[products])
    
//   return (
//     <div className='my-10'>
//         <div className='text-center py-8 text-3xl'>
//         <Title text1={'Latest'} text2={'Collection'}/>
//         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus esse necessitatibus magni! Quasi voluptas quia omnis ex quam, iusto repudiandae sint ipsam incidunt commodi iure! Nam illo possimus eum nemo.</p>
//         </div>
//         {/*Rendering Products*/ }
//         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//         {
//         latestProducts.map((item,index)=>(
//             <ProductItem key={index} id ={item._id} image={item.image} name={item.name} price={item.price}/>
//         ))
//        }
//         </div>
      
        
//     </div>

//   )
// }

// export default LastestCollection

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShopContext } from "../../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) setLatestProducts(products.slice(0, 5));
  }, [products]);

  return (
    <motion.section
      className="bg-white py-12 px-6 sm:px-12 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
     <div className="text-center mb-10">
  <h2 className="text-3xl sm:text-4xl font-bold text-[#1f2a44] tracking-tight mb-4">
    Latest <span className="font-light text-[#766f62]">Collection</span>
  </h2>
  <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
    Handpicked items just for you. Explore the newest styles before they run out.
  </p>
</div>


      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {latestProducts.map((item) => (
          <motion.div
            key={item._id}
            className="rounded-lg cursor-pointer bg-gray-50 shadow-sm"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LatestCollection;
