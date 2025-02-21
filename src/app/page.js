import ProductCard from '@/components/Products/ProductCard';
import React from 'react';

const HomePage = async () => {
  const res = await fetch('http://localhost:5000/products', {
    cache: 'force-cache',
  });

  const products = await res.json();
  console.log(products);

  return (
    <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
