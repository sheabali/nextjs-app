import Image from "next/image";

export default function ProductCard({product}) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
      <Image
        src={product.image}
        alt="Smartphone X"
        width={300}
        height={200}
        className="w-full mx-auto rounded-lg"
      />
      <div className="px-2 py-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg font-bold mt-2">{product.price}</p>
        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
