
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext.jsx';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';
import { motion } from 'framer-motion';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="bg-[#ebe6df] py-16 px-6 sm:px-16 max-w-7xl mx-auto rounded-lg my-16">
      {/* Header */}
      <motion.div
  className="text-center mb-10"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-4xl sm:text-5xl font-bold text-[#1f2a44] tracking-tight mb-4">
    Best <span className="font-light text-[#766f62]">Sellers</span>
  </h2>
  <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
    Discover our top-rated picks loved by customers. These bestsellers combine quality, style, and value — handpicked just for you.
  </p>
</motion.div>

      {/* Products Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {bestSeller.map((item) => (
          <motion.div
            key={item._id}
            className="rounded-lg bg-white shadow-sm cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(31, 42, 68, 0.2)" }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BestSeller;
