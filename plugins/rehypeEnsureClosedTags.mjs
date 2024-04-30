import { visit } from 'unist-util-visit';

export default function rehypeEnsureClosedTags() {
    return (tree) => {
        visit(tree, 'element', (node, index, parent) => {
            if (!isSelfClosing(node) && !isClosed(node)) {
                throw new Error(
                    `Unclosed tag found: <${node.tagName}> at position ${node.position.start.line}:${node.position.start.column}`
                );
            }
        });
    };
}

function isSelfClosing(node) {
    const selfClosingTags = [
        'img',
        'br',
        'hr',
        'input',
        'meta',
        'li',
        'link',
        'p',
        'table',
        'td',
        'tr',
    ];
    return selfClosingTags.includes(node.tagName);
}

function isClosed(node) {
    return node.children.length > 0 || node.type === 'closing';
}
