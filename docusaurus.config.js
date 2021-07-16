const docusaurusConfig = {
  title: 'Sauce Labs Documentation',
  tagline: 'Find everything you need to know about manual and automated cross-browser and mobile app testing in the Sauce Labs Continuous Testing Cloud.',
  url: 'https://docs.saucelabs.com',
  noIndex: true,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'saucelabs',
  projectName: 'sauce-docs',
  scripts: [],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-6735579-1',
    },
    hideableSidebar: true,
    prism: {
      additionalLanguages: ['java', 'ruby', 'csharp', 'bash', 'powershell', 'python'],
    },
    /* Dark and Light Mode Config */
    colorMode: {
      defaultMode: 'light',
      // Hides the switch in the navbar
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',
        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '🌞',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: null,
      hideOnScroll: false,
      logo: {
        alt: 'Sauce Labs logo',
        src: 'img/logo-saucelabs.png',
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
          label: 'Try it Free',
          position: 'right',
          href: 'https://saucelabs.com/sign-up',
        },
        {
          label: 'Sign In',
          position: 'right',
          href: 'https://accounts.saucelabs.com/',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'Sauce Logo',
        src: 'img/logo-saucelabs-inverted.png',
        href: 'https://saucelabs.com',
      },
      style: 'light',
      links: [
        {
          title: 'Partners',
          items: []
        },
        {
          title: 'About Us',
          items: []
        },
        {
          title: 'Careers',
          items: []
        },
        {
          title: 'Security',
          items: []
        },
        {
          title: 'News',
          items: []
        },
        {
          title: 'Contact',
          items: []
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sauce Labs, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl:
              'https://github.com/saucelabs/sauce-docs/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      },
    ],
  ],
  themes: [
    '@saucelabs/theme-github-codeblock',
  ],
  plugins: [
      [
          "docusaurus2-dotenv",
        {
          systemvars: true,
        },
      ],
//       [
//         '@docusaurus/plugin-client-redirects',
//         {
//           fromExtensions: ['html'],
//         },
//       ],
  ],
}

if (!process.env.SAUCE_DOCS_DEV) {
  docusaurusConfig.themeConfig.algolia = {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_KEY || 'demo-key',
    indexName: 'saucelabs',
  }
}

module.exports = docusaurusConfig;
