module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true,
    "jest/globals": true
  },
  extends: [
    "airbnb",
    "eslint-config-prettier",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jest/all"
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
    "@typescript-eslint",
    "react",
    "react-native",
    "prettier",
    "testing-library",
    "detox",
    "babel",
    "import",
    "jest"
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
    "react/no-unused-prop-types": "off",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "jest/expect-expect": "off",
    "jest/prefer-expect-assertions": [
      "off",
      { onlyFunctionsWithAsyncKeyword: true }
    ],
    "testing-library/consistent-data-testid": [
      2,
      {
        testIdAttribute: ["testID"],
        testIdPattern: "^TestId(__[A-z]*)?$"
      }
    ],
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off",
    "no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: false }
    ],
    "no-param-reassign": [2, { props: false }]
  },
  overrides: [
    {
      files: ["*.e2e.ts"],
      env: {
        jest: true,
        "detox/detox": true,
        "jest/globals": true
      }
    }
  ]
};
