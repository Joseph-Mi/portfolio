module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import', // Add the import plugin
  ],
  rules: {
    // Your custom rules
    'import/no-cycle': [2, { maxDepth: 1 }], // Add the rule to detect circular dependencies
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  ignorePatterns: ["dist/"], // Ignore the dist directory
  overrides: [
    {
      files: ["webpack.config.js"],
      env: {
        node: true, // Add this to enable Node.js global variables
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'no-undef': 'off',
      },
    },
  ],
};