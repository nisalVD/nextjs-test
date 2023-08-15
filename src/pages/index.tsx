import { Button } from "@/components/ui/Button";
import ProductCard from "@/components/ui/ProductCard";
import { getProducts } from "@/lib/api";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Link from "next/link";

export const getServerSideProps = async () => {
  const products = await getProducts(3);
  return { props: { products } };
};

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div>
      <div className="mx-auto max-w-2xl pt-8 pb-4 sm:pt-40 sm:pb-20 lg:pt-40 lg:pb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Clothique: Elevate Your Style with Trendsetting Threads
          </h1>
          <p className="mx-4 mt-6 text-lg leading-8 text-gray-600">
            Unveiling the Art of Dressing: Your Source for Fashion Expression
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/products">
              <Button>Browse</Button>
            </Link>
          </div>
        </div>

        <div></div>
      </div>
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {props.products.products.edges.map((product) => (
            <ProductCard
              key={product.node.id}
              href={`/product/${product.node.handle}`}
              src={product.node?.images?.edges[0]?.node?.url}
              alt={product.node?.images?.edges[0]?.node?.altText}
              name={product?.node?.title}
              description={product?.node?.description}
              price={product?.node?.priceRange?.minVariantPrice?.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
