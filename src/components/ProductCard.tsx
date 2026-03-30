import Link from "next/link";
import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
     href={"/product?id=" +product.id} // dynamic route
    >
    <a  className="border p-4 rounded-xl shadow-sm hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />
      <h2 className="font-semibold text-lg line-clamp-1">
        {product.title}
      </h2>
      <p className="text-gray-500 text-sm mb-2">
        {product.category}
      </p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-green-600">
          ${product.price}
        </span>
        <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
          Add +
        </button>
      </div>
    </a>
    </Link>
  );
};

export default ProductCard;