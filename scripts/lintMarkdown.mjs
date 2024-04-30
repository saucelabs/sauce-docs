import fg from 'fast-glob';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import { read, write } from 'to-vfile';
import { reporter } from 'vfile-reporter';

import fixAcorn from '../plugins/fixAcorn.mjs';
import fixEndTagMismatches from '../plugins/fixEndTagMismatches.mjs';
import rehypeEnsureClosedTags from '../plugins/rehypeEnsureClosedTags.mjs';

async function processMarkdownFile(filePath) {
    let file;
    try {
        file = await read(filePath);
        const processedFile = await unified()
            .use(remarkParse)
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeRaw)
            .use(fixAcorn) // Custom plugin
            .use(fixEndTagMismatches) // Custom plugin
            .use(rehypeEnsureClosedTags) // Custom plugin
            .use(rehypeFormat)
            .use(rehypeStringify)
            .process(file);

        console.log(`Processed: ${filePath}`);
        await write(processedFile);
    } catch (error) {
        if (file) {
            console.error(reporter(file));
        } else {
            console.error('Failed to process file, could not create VFile.');
        }
    }
}

async function processAllMarkdownFiles() {
    try {
        const files = await fg('docs/**/*.md');
        for (const filePath of files) {
            await processMarkdownFile(filePath);
        }
    } catch (err) {
        console.error('Failed to find Markdown files:', err);
    }
}

processAllMarkdownFiles();
