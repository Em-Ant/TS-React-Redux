module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  parserOptions:  {
    project: './tsconfig.json'
  },
  rules:  {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 1,
    'semi': 2,
    '@typescript-eslint/indent': [2, 2],
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always']
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
};