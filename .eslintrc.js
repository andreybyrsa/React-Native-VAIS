module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/prefer-default-export': [0],
    'prettier/prettier': [2, { endOfLine: 'auto' }, { usePrettierrc: true }],
    'react/jsx-uses-react': [0],
    'react/react-in-jsx-scope': [0],

    'no-console': [0],
    'no-unused-vars': [0],
    '@typescript-eslint/no-unused-vars': [2],
    '@typescript-eslint/ban-types': [2],
    '@typescript-eslint/no-explicit-any': [2],

    'no-param-reassign': ['error', { props: false }],

    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'linebreak-style': [0],
    'max-len': [2, 100],
  },
}
