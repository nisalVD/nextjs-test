/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Products($first: Int!, $after: String) {\n    products(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          title\n          handle\n          description\n          priceRange {\n            minVariantPrice {\n              amount\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n": types.ProductsDocument,
    "\n  query Product($handle: String) {\n    product(handle: $handle) {\n      id\n      title\n      description\n      handle\n      productType\n      availableForSale\n      priceRange {\n        minVariantPrice {\n          amount\n        }\n      }\n      images(first: 1) {\n        edges {\n          node {\n            url\n            altText\n          }\n        }\n      }\n    }\n    products(first: 4) {\n      edges {\n        node {\n          id\n          title\n          handle\n          description\n          priceRange {\n            minVariantPrice {\n              amount\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ProductDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Products($first: Int!, $after: String) {\n    products(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          title\n          handle\n          description\n          priceRange {\n            minVariantPrice {\n              amount\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query Products($first: Int!, $after: String) {\n    products(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          title\n          handle\n          description\n          priceRange {\n            minVariantPrice {\n              amount\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Product($handle: String) {\n    product(handle: $handle) {\n      id\n      title\n      description\n      handle\n      productType\n      availableForSale\n      priceRange {\n        minVariantPrice {\n          amount\n        }\n      }\n      images(first: 1) {\n        edges {\n          node {\n            url\n            altText\n          }\n        }\n      }\n    }\n    products(first: 4) {\n      edges {\n        node {\n          id\n          title\n          handle\n          description\n          priceRange {\n            minVariantPrice {\n              amount\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Product($handle: String) {\n    product(handle: $handle) {\n      id\n      title\n      description\n      handle\n      productType\n      availableForSale\n      priceRange {\n        minVariantPrice {\n          amount\n        }\n      }\n      images(first: 1) {\n        edges {\n          node {\n            url\n            altText\n          }\n        }\n      }\n    }\n    products(first: 4) {\n      edges {\n        node {\n          id\n          title\n          handle\n          description\n          priceRange {\n            minVariantPrice {\n              amount\n            }\n          }\n          images(first: 1) {\n            edges {\n              node {\n                url\n                altText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;