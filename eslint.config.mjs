import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    plugins: {
      '@next/next': nextPlugin,
      prettier,
    },
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
      'prettier/prettier': 'warn',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
    },
  },
];
