import react from 'eslint-plugin-react';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import js from '@eslint/js';
import pluginPromise from 'eslint-plugin-promise';

export default [
    js.configs.recommended,
    pluginPromise.configs['flat/recommended'],
    prettierRecommended,
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        ...react.configs.flat.recommended,
    },
    {
        ignores: ['.docusaurus/', '**/*tests/', '**/*build/'],
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            ecmaVersion: 'latest',
            sourceType: 'module',
        },

        settings: {
            react: {
                version: 'detect',
            },
        },

        rules: {
            'react/prop-types': 'off',
            'prettier/prettier': ['error'],
        },
    },
];
