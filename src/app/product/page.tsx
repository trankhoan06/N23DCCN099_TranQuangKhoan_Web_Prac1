"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Product = { id: number; title: string; price: number; description: string; category: string; image: string; rating?: { rate:number; count:number }};

export default function ProductDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      <div className="border rounded-xl p-6 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="h-80 object-contain" />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-500 mb-2 capitalize">{product.category}</p>
        <p className="text-3xl font-bold text-green-600 mb-4">${product.price}</p>
        {product.rating && (
          <p className="text-sm text-yellow-600 mb-4">
            {product.rating.rate} ({product.rating.count} reviews)
          </p>
        )}
        <p className="text-gray-700 mb-6">{product.description}</p>
        <button className="bg-black text-white cursor-pointer px-6 py-2 rounded-md hover:opacity-80">
          Add to cart
        </button>
      </div>
    </div>
  );
}