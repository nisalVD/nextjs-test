import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`https://${process.env.SHOPIFY_STORE_DOMAIN}/api/graphql`]: {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
      },
    },
  ],
  documents: ["src/**/*.ts?(x)"],
  generates: {
    "./src/generated/": {
      preset: "client",
    },
  },
};

export default config;
