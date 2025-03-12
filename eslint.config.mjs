import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^(_|ignore)',
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@payloadcms/db-postgres/drizzle/pg-core',
              message: 'Please import from "@/db/pg" instead to use our abstraction layer.',
            },
            {
              name: '@payloadcms/db-postgres/drizzle',
              message: 'Please import from "@/db/orm" instead to use our abstraction layer.',
            },
          ],
        },
      ],
    },
  },
  eslintConfigPrettier,
];

export default eslintConfig;
