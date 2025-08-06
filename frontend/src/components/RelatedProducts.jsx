import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext.jsx';
import Title from '../components/Title.jsx';
import ProductItem from './ProductItem.jsx';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!category || !products || products.length === 0) {
      setRelated([]);
      return;
    }

    let filteredProducts = products.filter((item) => item.category === category);

    // Apply subCategory filter only if subCategory exists
    if (subCategory) {
      filteredProducts = filteredProducts.filter((item) => item.subCategory === subCategory);
    }

    setRelated(filteredProducts.slice(0, 5));
  }, [category, subCategory, products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      {/* Debugging: Check if related products are being filtered correctly */}
      {console.log('Category:', category, 'SubCategory:', subCategory)}
      {console.log('Filtered Related Products:', related)}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item, index) => (
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
          ))
        ) : (
          <p className="text-center col-span-5 text-gray-500">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
