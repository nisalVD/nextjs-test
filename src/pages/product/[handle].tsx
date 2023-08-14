import { Button } from "@/components/ui/Button";
import { InferGetServerSidePropsType } from "next";
import { getProductDetails } from "@/lib/api";
import ErrorPage from "next/error";
import { formatPrice } from "@/lib/utils";
import ProductCard from "@/components/ui/ProductCard";
import { useCartStore } from "@/store/cartStore";

export const getServerSideProps = async (ctx: any) => {
  const res = await getProductDetails(ctx.query.handle as string);
  return { props: { product: res } };
};

export default function Product(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  if (props.product?.product?.handle == null) {
    return <ErrorPage statusCode={404} />;
  }
  const product = props.product.product;
  const products = props.product.products.edges.filter(
    (product) => product.node.handle !== props.product.product.handle
  );

  const addCartItem = useCartStore((state) => state.addCartItem);
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.title}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                {formatPrice(product.priceRange?.minVariantPrice?.amount)}
              </p>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{product.description}</p>
            </div>

            <div className="mt-6 flex items-center">
              {product.availableForSale && (
                <>
                  <span className="text-green-600">✓</span>
                  <p className="ml-2 text-sm text-gray-500">
                    In stock and ready to ship
                  </p>
                </>
              )}
            </div>
            <div className="pt-4">
              <Button
                onClick={() => {
                  addCartItem({
                    handle: product.handle,
                    imgSrc: product.images?.edges[0]?.node?.url,
                    imgAlt: product.images?.edges[0]?.node?.altText,
                    price: product.priceRange.minVariantPrice.amount,
                    title: product.title,
                    inStock: product.availableForSale,
                  });
                }}
                size="full"
              >
                Add To Bag
              </Button>
            </div>
          </section>
        </div>

        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <img
              src={product.images?.edges[0]?.node?.url}
              alt={product.images?.edges[0]?.node?.altText}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <p className="ml-2 text-md text-gray-600 text-center">Related Items</p>
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
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
