module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:import/recommended",
    "eslint-config-prettier",
    "airbnb"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "prettier", "babel", "import"],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./"]]
      }
    }
  },
  rules: {}
};
