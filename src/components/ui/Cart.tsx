import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

export default function Cart() {
  const cartCount = useCartStore((state) => state.cartItems.length);

  return (
    <Link href="/cart">
      <a className="group -m-2 flex items-center p-2">
        🛒
        <span className="ml-2 text-sm font-medium text-gray-700">
          {cartCount}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </Link>
  );
}
