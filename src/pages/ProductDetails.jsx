import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../services/FakeStoreAPI";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProductById(id)
      .then((data) => setProduct(data))
      .catch(() => setError("Failed to load product details"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-4 text-center">⏳ Loading details...</p>;
  if (error) return <p className="p-4 text-center text-red-500">{error}</p>;
  if (!product) return null;

  return (
    <div className="p-4 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-1/2 object-contain"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-xl font-bold text-green-700">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-700 text-white py-2 rounded hover:bg-green-800"
        >
          + Add to Cart
        </button>
      </div>
    </div>
  );
}