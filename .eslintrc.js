module.exports = {
  env: { browser: true, es2021: true, jest: true },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next',
    'standard-with-typescript',
    'prettier',
  ],
  settings: { react: { version: 'detect' } },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js', 'next-env.d.ts'],
  plugins: ['react', '@typescript-eslint', 'sort-exports'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    '@typescript-eslint/no-extraneous-class': [
      'error',
      { allowStaticOnly: true },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      { allowNullableObject: true },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '~**',
            group: 'external',
            position: 'after',
            patternOptions: { nocomment: true },
          },
        ],
      },
    ],
    'no-console': 'error',
    'no-extra-boolean-cast': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message:
              "There is no need to import 'React' as it's now globally available with 'jsxRuntime' option and use our custom components.",
          },
        ],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'sort-exports/sort-exports': [
      'error',
      { sortDir: 'asc', ignoreCase: true },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'sort-keys': ['error', 'asc', { natural: true }],
    'sort-vars': 'error',
  },
}
