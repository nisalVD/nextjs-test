import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export default function ProductCard({
  href,
  src,
  alt,
  name,
  description,
  price,
}: {
  href: string;
  src: string;
  alt: string;
  name: string;
  description: string;
  price: string;
}) {
  return (
    <Link href={href}>
      <a className="group text-sm">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
          <img
            src={src}
            alt={alt}
            width={200}
            height={200}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3 className="mt-4 font-medium text-gray-900">{name}</h3>
        <p className="italic text-gray-500">{description}</p>
        <p className="mt-2 font-medium text-gray-900">{formatPrice(price)}</p>
      </a>
    </Link>
  );
}
