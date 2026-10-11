import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '@scalar/api-reference-react/style.css';

/**
 * The Real Device Access API reference, rendered by Scalar.
 *
 * Two documents describe this API: the OpenAPI contract, and an AsyncAPI
 * description of its two WebSockets. Both are loaded on both pages so Scalar's
 * document selector can switch between them; `defaultSource` decides which one
 * a given page opens on.
 *
 * Each source has an explicit `slug`, which is what the selector puts in the
 * URL and what `?api=<slug>` deep links point at — so the slugs are stable even
 * if the titles change.
 */
export default function RealDeviceAccessApiReference({
    defaultSource = 'rest',
}) {
    // useBaseUrl prefixes the site baseUrl so the specs resolve correctly under
    // PR-preview deploys (where BASE_URL is set) as well as locally/production.
    const restUrl = useBaseUrl('/oas/real-device-access-api-spec.yaml');
    const websocketsUrl = useBaseUrl(
        '/oas/real-device-access-api-websockets.yaml'
    );

    return (
        <BrowserOnly fallback={<div>Loading API reference…</div>}>
            {() => {
                const {
                    ApiReferenceReact,
                } = require('@scalar/api-reference-react');
                return (
                    <ApiReferenceReact
                        configuration={{
                            sources: [
                                {
                                    slug: 'rest',
                                    title: 'Real Device Access API',
                                    url: restUrl,
                                    default: defaultSource === 'rest',
                                },
                                {
                                    slug: 'websockets',
                                    title: 'Real Device Access API — WebSockets',
                                    url: websocketsUrl,
                                    default: defaultSource === 'websockets',
                                },
                            ],
                            layout: 'classic',
                            showSidebar: true,
                            defaultOpenAllTags: true,
                            hideClientButton: true,
                            hideTestRequestButton: true,
                            hideSearch: true,
                            hideDarkModeToggle: true,
                        }}
                    />
                );
            }}
        </BrowserOnly>
    );
}
