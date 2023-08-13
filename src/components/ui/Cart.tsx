import Link from "next/link";

export default function Cart() {
  const cart = localStorage.getItem("cart");
  const cartCount = cart
    ? Object.values(JSON.parse(cart)).reduce((acc, next) => {
        return (acc += (next as { qty: string }).qty);
      }, 0)
    : 0;

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
