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

const getFirst6ProductsDocument = graphql(/* GraphQL */ `
  query Products {
    products(first: 6) {
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

async function getFirst6Products() {
  const res = await apiClient.request(getFirst6ProductsDocument);
  return res;
}

export { getFirst6Products };
