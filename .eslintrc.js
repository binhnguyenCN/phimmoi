module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "eslint-config-prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-native",
    "@typescript-eslint",
    "prettier",
    "babel",
    "import"
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      },
      alias: {
        map: [["@", "./"]]
      }
    }
  },
  rules: {
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "import/no-unresolved": 2,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "prettier/prettier": ["error"],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": 0,
    "react/function-component-definition": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".tsx", ".ts"]
      }
    ],
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react/require-default-props": "off",
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: false }
    ],
    "no-param-reassign": [2, { props: false }]
  }
};
