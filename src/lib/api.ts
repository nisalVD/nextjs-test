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
  query Products($first: Int!, $after: String) {
    products(first: $first, after: $after) {
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
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
`);

export async function getProducts(first: number, after: string = null) {
  const res = await apiClient.request(getProductsDocument, {
    first,
    after,
  });
  return res;
}

const getProductDetailDocument = graphql(/* GraphQL */ `
  query Product($handle: String) {
    product(handle: $handle) {
      id
      title
      description
      handle
      productType
      availableForSale
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
    products(first: 4) {
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

export async function getProductDetails(handle: string) {
  const res = await apiClient.request(getProductDetailDocument, {
    handle,
  });
  return res;
}
