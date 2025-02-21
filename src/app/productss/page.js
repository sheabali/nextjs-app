import ProductCard from '@/components/Products/ProductCard';
import React from 'react';

const AllProductPage = async () => {
  const res = await fetch('http://localhost:5000/products', {
    cache: 'no-store',
  });
  const products = await res.json();

  return (
    <div>
      <div className="text-center my-7">
        <h1 className="text-3xl">Products</h1>
        <p>Here are all the products we have in stock.</p>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductPage;
