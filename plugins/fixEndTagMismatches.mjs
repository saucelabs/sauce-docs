import { visit } from 'unist-util-visit';

function fixTagMismatches() {
    return (tree) => {
        visit(tree, ['mdxJsxTextElement', 'paragraph'], (node) => {
            // This regex matches standalone opening tags and captures the tag name
            const standaloneOpeningTagRegex = /<(\w+)(?![^<>]*>)[^<>]*?(\/?)>/g;
            let match;
            let tagsToClose = [];

            while (
                (match = standaloneOpeningTagRegex.exec(node.value)) !== null
            ) {
                if (match[2] !== '/') {
                    // Check if it's not a self-closing tag
                    tagsToClose.push(match[1]);
                }
            }

            // Reverse to close tags in correct order at the end of the node value
            tagsToClose.reverse().forEach((tag) => {
                if (!isSelfClosing(tag)) {
                    node.value += `</${tag}>`;
                }
            });

            if (tagsToClose.length > 0) {
                file.message(
                    `Added missing closing tags: </${tagsToClose.join('></')}>`,
                    node.position,
                    'fix-tag-mismatches'
                );
            }
        });
    };
}

function isSelfClosing(tagName) {
    const selfClosingTags = [
        'img',
        'br',
        'hr',
        'code',
        'input',
        'meta',
        'link',
        'base',
        'col',
        'command',
        'embed',
        'keygen',
        'p',
        'param',
        'source',
        'table',
        'track',
        'wbr',
    ];
    return selfClosingTags.includes(tagName);
}

export default fixTagMismatches;
