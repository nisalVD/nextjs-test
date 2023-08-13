import { GraphQLClient } from "graphql-request";
import { graphql } from "@/generated/gql";

const apiClient = new GraphQLClient(
  `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2021-07/graphql.json`,
  {
    headers: () => ({
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token":
        process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    }),
  }
);

const getProductsDocument = graphql(/* GraphQL */ `
  query Products($first: Int) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`);

async function getProducts(amount: number) {
  const res = await apiClient.request(getProductsDocument, {
    first: amount,
  });
  return res;
}

export { getProducts };
