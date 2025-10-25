import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  {
    extends: ["next/core-web-vitals"],
  },
]);

export default eslintConfig;
