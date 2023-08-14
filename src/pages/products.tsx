import { Button } from "@/components/ui/Button";
import { ProductQuery } from "@/generated/graphql";
import { getProducts } from "@/lib/api";
import { formatPrice } from "@/lib/utils";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export const getServerSideProps = async (ctx) => {
  let products: ProductQuery;

  if (ctx.query.after) {
    products = await getProducts(6, ctx.query.after);
  } else {
    products = await getProducts(6);
  }

  return { props: { products } };
};

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const products = props.products.products.edges;
  return (
    <div>
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <a
              key={product.node.id}
              href={`/product/${product.node.handle}`}
              className="group text-sm"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src={product.node?.images?.edges[0]?.node?.url}
                  alt={product.node?.images?.edges[0]?.node?.altText}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">
                {product.node.title}
              </h3>
              <p className="mt-2 font-medium text-gray-900">
                {formatPrice(product.node.priceRange.minVariantPrice.amount)}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className="justify-end gap-4 flex mr-4 mb-10">
        {props.products.products.pageInfo.hasNextPage && (
          <Button
            onClick={() => {
              console.log(props.products.products.pageInfo.endCursor);
              router.push({
                pathname: router.pathname,
                query: { after: props.products.products.pageInfo.endCursor },
              });
            }}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
