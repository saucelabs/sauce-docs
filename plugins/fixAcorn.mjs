import { visit } from 'unist-util-visit';
import { parse } from 'acorn';

function fixAcorn() {
    return (tree, file) => {
        visit(tree, 'mdxJsxTextElement', (node) => {
            try {
                parse(node.value, { ecmaVersion: 'latest' });
            } catch (error) {
                file.message(
                    `Could not parse expression: ${error.message}`,
                    node.position,
                    'acorn-js-expression-error'
                );
                // Optionally, modify the node or replace the value with a placeholder
                node.value = `<!-- Error in expression: ${error.message} -->`;
            }
        });
    };
}

export default fixAcorn;
