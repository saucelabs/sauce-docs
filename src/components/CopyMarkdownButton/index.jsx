import React, { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import htmlToMarkdown from './htmlToMarkdown';
import styles from './styles.module.css';

const RESET_DELAY_MS = 2000;

const LABELS = {
    idle: 'Copy as Markdown',
    copying: 'Copying…',
    copied: 'Copied',
    error: 'Copy failed',
};

// Fallback for browsers or contexts where the async Clipboard API is
// unavailable (e.g. non-secure origins).
function legacyCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        return document.execCommand('copy');
    } finally {
        textarea.remove();
    }
}

async function copyText(text) {
    if (navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return;
        } catch {
            // Fall through to the legacy method.
        }
    }
    if (!legacyCopy(text)) {
        throw new Error('Clipboard is unavailable');
    }
}

export default function CopyMarkdownButton({ getContent, title, url }) {
    const [status, setStatus] = useState('idle');
    const timeoutRef = useRef();

    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    const handleClick = useCallback(async () => {
        const content = getContent();
        if (!content) {
            return;
        }
        clearTimeout(timeoutRef.current);
        setStatus('copying');
        try {
            const markdown = await htmlToMarkdown(content, { title, url });
            await copyText(markdown);
            setStatus('copied');
        } catch (error) {
            console.error('Copy as Markdown failed:', error);
            setStatus('error');
        }
        timeoutRef.current = setTimeout(
            () => setStatus('idle'),
            RESET_DELAY_MS
        );
    }, [getContent, title, url]);

    return (
        <div className={styles.container}>
            <button
                type='button'
                className={clsx(
                    'button button--sm button--outline',
                    status === 'error'
                        ? 'button--danger'
                        : status === 'copied'
                          ? 'button--success'
                          : 'button--secondary'
                )}
                onClick={handleClick}
                disabled={status === 'copying'}
                title='Copy this page as Markdown for use with AI tools'
                aria-live='polite'
            >
                {LABELS[status]}
            </button>
        </div>
    );
}
