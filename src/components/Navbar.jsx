import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-700 text-white">
      <Link to="/" className="text-2xl font-bold">FakeStore</Link>
      <div className="flex gap-4 text-lg">
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
}