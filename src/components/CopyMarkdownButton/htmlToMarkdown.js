// Converts the rendered body of a doc page into clean Markdown for AI tools.
// Works on a clone of the DOM so the page itself is never modified.

// Page chrome that can appear inside the article body.
const REMOVE_SELECTORS = [
    '.hash-link',
    'button',
    'script',
    'style',
    'noscript',
    'svg',
    '.theme-edit-this-page',
    '.theme-last-updated',
    '[class*="buttonGroup"]',
];

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function boldParagraph(doc, text) {
    const p = doc.createElement('p');
    const strong = doc.createElement('strong');
    strong.textContent = text;
    p.appendChild(strong);
    return p;
}

function moveChildren(from, to) {
    while (from.firstChild) {
        to.appendChild(from.firstChild);
    }
}

// Docusaurus renders each code line as a .token-line span, with a <br> for
// empty lines, so textContent alone would drop line breaks.
function normalizeCodeBlocks(root, doc) {
    root.querySelectorAll('.theme-code-block').forEach((block) => {
        const pre = block.querySelector('pre');
        if (!pre) {
            return;
        }
        const langClass = [
            ...block.classList,
            ...pre.classList,
            ...(pre.querySelector('code')?.classList ?? []),
        ].find((c) => c.startsWith('language-'));
        const lines = pre.querySelectorAll('.token-line');
        const text = lines.length
            ? [...lines]
                  .map((line) => line.textContent.replace(/\n$/, ''))
                  .join('\n')
            : pre.textContent;

        const fragment = doc.createDocumentFragment();
        const title = block.querySelector('[class*="codeBlockTitle"]');
        if (title && title.textContent.trim()) {
            fragment.appendChild(boldParagraph(doc, title.textContent.trim()));
        }
        const newPre = doc.createElement('pre');
        const code = doc.createElement('code');
        if (langClass && langClass !== 'language-text') {
            code.className = langClass;
        }
        code.textContent = text.replace(/\n+$/, '');
        newPre.appendChild(code);
        fragment.appendChild(newPre);
        block.replaceWith(fragment);
    });
}

// Includes every tab panel (not only the active one), labeled by tab name.
// Processed innermost-first so nested tabs are handled correctly.
function expandTabs(root, doc) {
    [...root.querySelectorAll('.tabs-container')].reverse().forEach((tabs) => {
        const labels = [...tabs.querySelectorAll('[role="tab"]')].filter(
            (tab) => tab.closest('.tabs-container') === tabs
        );
        const panels = [...tabs.querySelectorAll('[role="tabpanel"]')].filter(
            (panel) => panel.closest('.tabs-container') === tabs
        );
        const fragment = doc.createDocumentFragment();
        panels.forEach((panel, i) => {
            const label = labels[i]?.textContent.trim() || `Tab ${i + 1}`;
            fragment.appendChild(boldParagraph(doc, `Tab: ${label}`));
            const wrapper = doc.createElement('div');
            moveChildren(panel, wrapper);
            fragment.appendChild(wrapper);
        });
        tabs.replaceWith(fragment);
    });
}

// Notes, tips, warnings etc. become blockquotes: "> **Note:** ...".
function convertAdmonitions(root, doc) {
    [...root.querySelectorAll('.theme-admonition')].reverse().forEach((adm) => {
        const [heading, content] = adm.children;
        const typeClass = [...adm.classList].find(
            (c) => c.startsWith('theme-admonition-') && c !== 'theme-admonition'
        );
        const title =
            heading?.textContent.trim() ||
            (typeClass ? typeClass.replace('theme-admonition-', '') : 'Note');
        const quote = doc.createElement('blockquote');
        quote.appendChild(boldParagraph(doc, `${capitalize(title)}:`));
        moveChildren(content ?? adm, quote);
        adm.replaceWith(quote);
    });
}

// Collapsible sections are rendered even when closed; keep the summary as a
// bold label followed by the content.
function expandDetails(root, doc) {
    [...root.querySelectorAll('details')].reverse().forEach((details) => {
        const summary = details.querySelector(':scope > summary');
        const fragment = doc.createDocumentFragment();
        if (summary) {
            fragment.appendChild(
                boldParagraph(doc, summary.textContent.trim())
            );
            summary.remove();
        }
        const wrapper = doc.createElement('div');
        moveChildren(details, wrapper);
        fragment.appendChild(wrapper);
        details.replaceWith(fragment);
    });
}

function absolutizeUrls(root, baseUrl) {
    const resolve = (value) => {
        try {
            return new URL(value, baseUrl).href;
        } catch {
            return value;
        }
    };
    root.querySelectorAll('a[href]').forEach((a) => {
        a.setAttribute('href', resolve(a.getAttribute('href')));
    });
    root.querySelectorAll('img[src]').forEach((img) => {
        img.setAttribute('src', resolve(img.getAttribute('src')));
    });
}

// GFM tables need a header row, but many doc tables (e.g. API parameters) have
// none; give those an empty header instead of falling back to raw HTML. Tables
// with code blocks or nested tables in cells can't be expressed in GFM, so
// they are kept as HTML.
function tableToMarkdown(table, turndown) {
    if (table.querySelector('pre, table')) {
        return `\n\n${table.outerHTML}\n\n`;
    }
    const rows = [...table.rows];
    const toCells = (row) =>
        [...row.cells].flatMap((cell) => [
            turndown
                .turndown(cell.innerHTML)
                .replace(/\s*\n+\s*/g, ' ')
                .replace(/\|/g, '\\|')
                .trim(),
            ...Array(Math.max(0, cell.colSpan - 1)).fill(''),
        ]);
    const cells = rows.map(toCells);
    const hasHeader =
        rows.length > 0 &&
        [...rows[0].cells].every((cell) => cell.nodeName === 'TH');
    const header = hasHeader ? cells.shift() : [];
    const width = Math.max(header.length, ...cells.map((row) => row.length));
    if (!width) {
        return '';
    }
    const line = (row) =>
        `| ${[...row, ...Array(width - row.length).fill('')].join(' | ')} |`;
    return `\n\n${[
        line(header),
        line(Array(width).fill('---')),
        ...cells.map(line),
    ].join('\n')}\n\n`;
}

export default async function htmlToMarkdown(element, { title, url }) {
    const [{ default: TurndownService }, { strikethrough, taskListItems }] =
        await Promise.all([import('turndown'), import('turndown-plugin-gfm')]);

    const doc = element.ownerDocument;
    const root = element.cloneNode(true);

    root.querySelectorAll(REMOVE_SELECTORS.join(',')).forEach((el) =>
        el.remove()
    );
    // The page title is added separately below.
    root.querySelector('h1')?.remove();

    normalizeCodeBlocks(root, doc);
    expandTabs(root, doc);
    convertAdmonitions(root, doc);
    expandDetails(root, doc);
    absolutizeUrls(root, url);

    const turndown = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced',
        bulletListMarker: '-',
        emDelimiter: '_',
    });
    turndown.use([strikethrough, taskListItems]);
    turndown.addRule('table', {
        filter: 'table',
        replacement: (content, node) => tableToMarkdown(node, turndown),
    });
    // Drop the anchor wrapper that links an image to itself, to avoid
    // "[![alt](src)](src)" noise.
    turndown.addRule('imageLink', {
        filter: (node) =>
            node.nodeName === 'A' &&
            node.childNodes.length === 1 &&
            node.firstChild.nodeName === 'IMG' &&
            node.getAttribute('href') === node.firstChild.getAttribute('src'),
        replacement: (content) => content,
    });

    const body = turndown
        .turndown(root)
        .replace(/\n{3,}/g, '\n\n')
        .trim();

    return `# ${title}\n\nSource: ${url}\n\n${body}\n`;
}
