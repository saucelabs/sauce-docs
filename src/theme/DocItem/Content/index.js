import React, { useCallback, useRef } from 'react';
import Content from '@theme-original/DocItem/Content';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ThemeClassNames } from '@docusaurus/theme-common';

import CopyMarkdownButton from '@site/src/components/CopyMarkdownButton';

// Wraps (does not eject) the doc content to add a "Copy as Markdown" button.
export default function ContentWrapper(props) {
    const { metadata } = useDoc();
    const { siteConfig } = useDocusaurusContext();
    const ref = useRef(null);
    const permalink =
        siteConfig.trailingSlash && !metadata.permalink.endsWith('/')
            ? `${metadata.permalink}/`
            : metadata.permalink;
    const getContent = useCallback(
        () =>
            ref.current?.querySelector(`.${ThemeClassNames.docs.docMarkdown}`),
        []
    );

    return (
        <div ref={ref}>
            <CopyMarkdownButton
                getContent={getContent}
                title={metadata.title}
                url={`${siteConfig.url}${permalink}`}
            />
            <Content {...props} />
        </div>
    );
}
