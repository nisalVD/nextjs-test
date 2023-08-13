import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <Link href="#">
          <a className="m-1.5 p-1.5">
            <span className="sr-only">Pokemon Cards</span>
            <Image
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="tailwind logo"
              width={40}
              height={40}
            />
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
