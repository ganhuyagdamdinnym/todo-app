import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8080/api/graphql",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};
export default config;
