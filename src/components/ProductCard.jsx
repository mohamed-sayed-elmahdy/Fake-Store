/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4"
      />
      <h3 className="font-bold mb-2">{product.title.slice(0, 50)}...</h3>
      <p className="text-lg font-semibold mb-2">${product.price}</p>

      <div className="flex flex-col gap-2 mt-auto">
        <Link
          to={`/product/${product.id}`}
          className="bg-blue-600 text-white text-center rounded py-2 hover:bg-blue-700"
        >
          View Details
        </Link>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-600 text-white rounded py-2 hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
