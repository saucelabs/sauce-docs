// Load default export (must be a function)
const unwrapJsx = require('./src/plugins/unwrap-jsx').default;

if (typeof unwrapJsx !== 'function') {
    throw new Error('unwrapJsx plugin is not a function');
}
// Enabling PR previews
// Docusaurus will read the BASE_URL env var set in the CI.
// We fall back to '/' for local development.
let siteBaseUrl = process.env.BASE_URL || '/';

// Product areas that get their own /<dir>/llms.txt and /<dir>/llms-full.txt.
const llmsSections = [
    {
        dir: 'mobile-apps',
        title: 'Mobile App Testing',
        patterns: ['docs/mobile-apps.md', 'docs/mobile-apps/**'],
    },
    {
        dir: 'web-apps',
        title: 'Web App Testing',
        patterns: ['docs/web-apps.md', 'docs/web-apps/**'],
    },
    {
        dir: 'live-testing',
        title: 'Live Testing',
        patterns: [
            'docs/mobile-apps/live-testing/**',
            'docs/web-apps/live-testing/**',
        ],
    },
    {
        dir: 'secure-connections',
        title: 'Sauce Connect and Secure Connections',
        patterns: ['docs/secure-connections.md', 'docs/secure-connections/**'],
    },
    {
        dir: 'dev',
        title: 'APIs, CLI and Developer Reference',
        patterns: ['docs/dev.md', 'docs/dev/**'],
    },
    {
        dir: 'error-reporting',
        title: 'Error Reporting',
        patterns: ['docs/error-reporting/**'],
    },
    {
        dir: 'testfairy',
        title: 'App Distribution',
        patterns: ['docs/testfairy/**'],
    },
    {
        dir: 'visual-testing',
        title: 'Visual Testing',
        patterns: ['docs/visual-testing.md', 'docs/visual-testing/**'],
    },
    {
        dir: 'sauce-ai',
        title: 'Sauce AI',
        patterns: ['docs/sauce-ai.md', 'docs/sauce-ai/**'],
    },
];

const docusaurusConfig = {
    title: 'Sauce Labs Documentation',
    tagline: 'Test all the things.',
    url: 'https://docs.saucelabs.com',
    noIndex: process.env.NO_INDEX,
    trailingSlash: true,
    baseUrl: siteBaseUrl,
    onBrokenAnchors: 'throw',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    organizationName: 'saucelabs',
    projectName: 'sauce-docs',
    // TODO: I don't think google-site-verification is working at all, confirm with P.O.
    customFields: {
        headTags: [
            {
                tagName: 'meta',
                attributes: {
                    name: 'google-site-verification',
                    content: 'googlee2afebcc27f8c950.html',
                },
            },
        ],
    },
    headTags: [
        {
            tagName: 'link',
            attributes: {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/img/favicon-16x16.png?v=2',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/img/favicon-32x32.png?v=2',
            },
        },
    ],
    scripts: [
        '/scripts/hide.js',
        // Need Help? button
        {
            src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
            type: 'text/javascript',
            charset: 'UTF-8',
            'data-domain-script': '9e4c4ce3-8349-4030-9de7-0b1d368edfce',
        },
        {
            src: 'https://solve-widget.forethought.ai/embed.js',
            type: 'application/javascript',
            'data-api-key': '1f0243be-fd74-4205-bbff-cf72bc3c96b3',
            'data-ft-location': 'docs',
        },
    ],
    themeConfig: {
        prism: {
            additionalLanguages: [
                'java',
                'ruby',
                'csharp',
                'bash',
                'powershell',
                'python',
            ],
        },
        /* Dark and Light Mode Config */
        colorMode: {
            defaultMode: 'light',
            // Hides the switch in the navbar
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: null,
            hideOnScroll: false,
            logo: {
                alt: 'Sauce Labs logo',
                src: '/img/sl-logo-horizontal-color-dark.svg',
                srcDark: '/img/sl-logo-horizontal-color-neutral.svg',
            },
            items: [
                {
                    label: 'Docs',
                    position: 'left',
                    to: '/overview',
                },
                {
                    label: 'Sauce AI',
                    position: 'left',
                    to: '/sauce-ai',
                },
                {
                    label: 'API',
                    position: 'left',
                    to: '/dev/api',
                },
                {
                    label: 'CLI',
                    position: 'left',
                    to: '/dev/cli',
                },
                {
                    label: 'Visual',
                    position: 'left',
                    to: '/visual-testing',
                },
                {
                    label: 'App Distribution',
                    position: 'left',
                    to: '/testfairy',
                },
                {
                    label: 'Error Reporting',
                    position: 'left',
                    to: '/error-reporting/getting-started',
                },
                {
                    label: 'Real Device Access API',
                    position: 'left',
                    to: '/dev/api/real-device-access',
                },
            ],
        },
        /* this is a swizzled component, see inside theme folder */
        footer: {
            logo: {
                alt: 'Sauce Logo',
                src: '/img/sl-logo-horizontal-color-neutral.svg',
                href: 'https://saucelabs.com',
            },
            style: 'light',
            links: [],
            copyright: `© ${new Date().getFullYear()} Sauce Labs, Inc. SAUCE and SAUCE LABS are registered trademarks owned by Sauce Labs Inc. in the United States, EU, and may be registered in other jurisdictions.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                blog: false,
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    path: 'docs',
                    breadcrumbs: true,
                    routeBasePath: '/',
                    editUrl:
                        'https://github.com/saucelabs/sauce-docs/edit/main/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    remarkPlugins: [unwrapJsx],
                },
                googleAnalytics: {
                    trackingID: 'UA-6735579-1',
                },
                // announcementBar: {
                //   id: 'site_announcement', // Any value that will identify this message.
                //   content:
                //   '<button class="announcementBarBadge">NEW</button> Our improved documentation is here! <a target="_blank" rel="noopener noreferrer" href="mailto:docsfeedback@saucelabs.com"><button class="announcementBar">Tell us what you think</button></a>',
                //   backgroundColor: '#0D65BE', // Defaults to `#fff`.
                //   textColor: '#F0F0F0', // Defaults to `#000`.
                //   isCloseable: true, // Defaults to `true`.
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    themes: ['docusaurus-theme-github-codeblock'],
    plugins: [
        [
            // Generates /llms.txt, /llms-full.txt, per-page .md files and
            // per-product-area files for AI tools at build time.
            'docusaurus-plugin-llms',
            {
                title: 'Sauce Labs Documentation',
                description:
                    'Sauce Labs is a cloud-based continuous testing platform for web and mobile apps, offering automated and live testing on real devices, emulators, simulators and desktop browsers, plus visual testing, error reporting and app distribution.',
                docsDir: [{ path: 'docs', routeBasePath: '/' }],
                ignoreFiles: [
                    'docs/contributing.md',
                    'docs/contributing/**',
                    'docs/templates/**',
                    'docs/assets/**',
                    '**/*.jsx',
                ],
                // Mirrors the top-level sidebar order.
                includeOrder: [
                    'docs/overview.md',
                    'docs/sauce-basics.md',
                    'docs/basics/**',
                    'docs/secure-connections.md',
                    'docs/secure-connections/**',
                    'docs/testfairy/**',
                    'docs/mobile-apps.md',
                    'docs/mobile-apps/**',
                    'docs/web-apps.md',
                    'docs/web-apps/**',
                    'docs/ci.md',
                    'docs/ci/**',
                    'docs/test-results.md',
                    'docs/test-results/**',
                    'docs/insights.md',
                    'docs/insights/**',
                    'docs/sauce-ai.md',
                    'docs/sauce-ai/**',
                    'docs/ide-plugins.md',
                    'docs/ide-plugins/**',
                    'docs/performance.md',
                    'docs/performance/**',
                    'docs/visual-testing.md',
                    'docs/visual-testing/**',
                    'docs/dev.md',
                    'docs/dev/**',
                    'docs/error-reporting/**',
                ],
                generateMarkdownFiles: true,
                excludeImports: true,
                removeDuplicateHeadings: true,
                customLLMFiles: llmsSections.flatMap(
                    ({ dir, title, patterns }) => [
                        {
                            filename: `${dir}/llms.txt`,
                            includePatterns: patterns,
                            fullContent: false,
                            title: `Sauce Labs Documentation: ${title}`,
                        },
                        {
                            filename: `${dir}/llms-full.txt`,
                            includePatterns: patterns,
                            fullContent: true,
                            title: `Sauce Labs Documentation: ${title}`,
                        },
                    ]
                ),
            },
        ],
        [
            '@scalar/docusaurus',
            {
                id: 'real-device-access-api',
                label: 'Real Device Access API',
                route: '/real-device-access-api',
                // Nav link is provided manually in `navbar.items` above so it
                // points at the embedded Scalar page (/dev/api/real-device-access).
                showNavLink: false,
                configuration: {
                    hideClientButton: true,
                    hideTestRequestButton: true,
                    hideSearch: true,
                    defaultOpenAllTags: true,
                    layout: 'classic',
                    sources: [
                        {
                            // This title will appear in the top left dropdown within Scalar API doc.
                            title: 'Real Device Access API',
                            url: `${siteBaseUrl}oas/real-device-access-api-spec.yaml`,
                        },
                    ],
                },
            },
        ],
    ],
};

if (!process.env.SAUCE_DOCS_DEV) {
    docusaurusConfig.themeConfig.algolia = {
        appId: 'RO95H65NEO',
        apiKey: '3a5924ec9fa1457b4999d8dcfc382c2d',
        indexName: 'Sauce Docs Crawler',
        contextualSearch: false,
    };
}

module.exports = docusaurusConfig;
