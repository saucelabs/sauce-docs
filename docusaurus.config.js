// Load default export (must be a function)
const unwrapJsx = require('./src/plugins/unwrap-jsx').default;

if (typeof unwrapJsx !== 'function') {
    throw new Error('unwrapJsx plugin is not a function');
}
// Enabling PR previews
let siteBaseUrl = '/';
if (process.env.PREVIEW_PATH) siteBaseUrl += process.env.PREVIEW_PATH;

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
                href: '/img/favicon-16x16.png',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/img/favicon-32x32.png',
            },
        },
    ],
    scripts: [
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
