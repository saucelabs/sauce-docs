import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'rehype-stringify';
import rehypeParse from 'rehype-parse';

// Function to fix end-tag mismatches in a Markdown file
function fixEndTags(filePath) {
    try {
        const markdown = fs.readFileSync(filePath, 'utf-8');
        const fixedMarkdown = unified()
            .use(remarkParse)
            .use(remarkStringify)
            .use(rehypeParse)
            .processSync(markdown)
            .toString();
        
        fs.writeFileSync(filePath, fixedMarkdown);
        console.log(`Fixed end-tag mismatches in ${filePath}`);
    } catch (error) {
        console.warn(`Error fixing end-tag mismatches in ${filePath}: ${error.message}`)
    }
}

// Function to traverse through a directory and fix end-tag mismatches in Markdown files
function fixEndTagsInDirectory(dirPath) {
    fs.readdirSync(dirPath).forEach(item => {
        const itemPath = path.join(dirPath, item);
        if (fs.statSync(itemPath).isDirectory()) {
            fixEndTagsInDirectory(itemPath); // Recursively fix end-tag mismatches in subdirectories
        } else if (itemPath.toLowerCase().endsWith('.md')) {
            fixEndTags(itemPath); // Fix end-tag mismatches in Markdown files
        }
    });
}

// Example usage: fix end-tag mismatches in a directory
const directoryPath = 'docs/';
fixEndTagsInDirectory(directoryPath);
