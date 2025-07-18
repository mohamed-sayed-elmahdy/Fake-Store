import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">🛒 Your Cart is Empty</h1>
        <Link to="/" className="text-blue-700 underline">Back to Shopping</Link>
      </div>
    );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛒 Cart</h1>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-4 p-4 border rounded-lg"
        >
          <div>
            <h2 className="font-bold">{item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <h2 className="text-2xl font-bold mb-4">Total: ${totalPrice.toFixed(2)}</h2>
      <button
        onClick={clearCart}
        className="bg-black text-white px-6 py-3 rounded"
      >
        🧹 Clear Cart
      </button>
    </div>
  );
}