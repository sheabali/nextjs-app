import ProductCard from '@/components/Products/ProductCard';
import Link from 'next/link';
import React from 'react';

const HomePage = async () => {
  const res = await fetch('http://localhost:5000/products', {
    next: {
      revalidate: 30,
    },
  });

  const products = await res.json();

  return (
    <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto">
      {products.slice(0, 3).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div className="text-center my-7">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
          <Link href="/productss">View All Products</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
