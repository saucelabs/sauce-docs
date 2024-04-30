const { mdxExpression, mdxJsx } = require('micromark-extension-mdx');

module.exports = {
    settings: {
        // If these extensions supported 'ignore' settings, which they do not out of the box:
        mdxExpression: {
            ignoreRules: ['acorn'],
        },
        mdxJsx: {
            ignoreRules: ['unexpected-character'],
        },
    },
    plugins: [
        'remark-mdx',
        [
            'remark-html',
            {
                sanitize: false,
            },
        ],
        'remark-lint',
        [
            mdxExpression,
            {
                // Options specific to handling or modifying expression parsing behavior
                // There isn't a built-in way to ignore specific errors like 'acorn'
            },
        ],
        [
            mdxJsx,
            {
                // Options specific to handling or modifying JSX parsing behavior
                // There isn't a built-in way to ignore specific errors like 'unexpected-character'
            },
        ],
    ],
};
