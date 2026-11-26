import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '@scalar/api-reference-react/style.css';

/**
 * The Real Devices API (v1 /v1/rdc endpoints) reference, rendered by Scalar
 * from static/oas/rdc_read_device_api_v1_endpoints.yaml.
 *
 * Same setup as realDeviceAccessApiReference.jsx, with a single OpenAPI source.
 */
export default function RealDevicesApiReference() {
    // useBaseUrl prefixes the site baseUrl so the spec resolves correctly under
    // PR-preview deploys (where BASE_URL is set) as well as locally/production.
    const specUrl = useBaseUrl('/oas/rdc_read_device_api_v1_endpoints.yaml');

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
                                    title: 'Real Devices API',
                                    url: specUrl,
                                    default: true,
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
