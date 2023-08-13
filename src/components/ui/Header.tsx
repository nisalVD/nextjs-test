import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Cart = dynamic(() => import("@/components/ui/Cart"), {
  ssr: false,
});

function Header() {
  return (
    <header className="p-6 lg:px-8 flex">
      <div className="flex lg:flex-1 w-full">
        <Link href="/">
          <a className="m-1.5 p-1.5">
            <span className="sr-only">Snowboards</span>
            <Image
              src="/images/logo.jpg"
              alt="tailwind logo"
              width={40}
              height={40}
            />
          </a>
        </Link>
      </div>
      <div className="justify-end flex items-center">
        <Cart />
      </div>
    </header>
  );
}

export default Header;
