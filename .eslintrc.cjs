module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ['xo', 'xo-typescript/space'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/dist/**/*.js'],
  parserOptions: {
    ecmaVersion: 'es2021',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['Error', 2],
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'capitalized-comments': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
  },
};
