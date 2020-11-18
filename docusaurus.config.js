module.exports = {
  title: 'Sauce Labs Documentation',
  tagline: 'Documentation for the Sauce Labs Platform',
  url: 'https://saucelabs.com/docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'saucelabs', // Usually your GitHub org/user name.
  projectName: 'sauce-docs', // Usually your repo name.
  stylesheets: [
    'https://use.typekit.net/zmt8tam.css'
  ],
  themeConfig: {
    prism: {
      additionalLanguages: ['java', 'ruby', 'csharp', 'bash', 'powershell', 'python'],
    },
    /* Search Bar Config */
    algolia: {
      //appId: 'ZETDNHTKFC',
      apiKey: '8442c4c56cae89e0f1a1b7c9a8fd8f9c',
      indexName: 'sauce-docs.com',
    },
    /* Dark and Light Mode Config */
    colorMode: {
      defaultMode: 'light',
      // Hides the switch in the navbar
      disableSwitch: true,
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
        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        //lightIcon: '\u{1F602}',
        lightIcon: '🌞',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    /* Navbar Config */
    navbar: {
      title: null,
      hideOnScroll: false,
      logo: {
        alt: 'Sauce Labs',
        src: 'img/logo-saucelabs.png',
      },
      items: [
        {
          label: 'Solutions',
          position: 'right',
          items: [
            {
              label: 'Enterprise',
              to: 'https://saucelabs.com/solutions/enterprise',
            },
            {
              label: 'Start Ups & SMB Teams',
              to: 'https://saucelabs.com/solutions/startup-medium-teams',
            },
            {
              label: 'Open Source Projects',
              to: 'https://saucelabs.com/solutions/open-source',
            },
            {
              label: 'Continuous Testing',
              to: 'https://saucelabs.com/solutions/continuous-testing',
            },
            {
              label: 'Automated Testing',
              to: 'https://saucelabs.com/solutions/automated-testing',
            },
            {
              label: 'Live Testing',
              to: 'https://saucelabs.com/solutions/live-testing',
            },
          ],
        },
        {
          label: 'Platform',
          position: 'right',
          items: [
            {
              label: 'Real Device Cloud',
              to: 'https://saucelabs.com/platform/real-device-cloud',
            },
            {
              label: 'Cross-Browser Testing',
              to: 'https://saucelabs.com/platform/cross-browser-testing',
            },
            {
              label: 'Emulators & Simulators',
              to: 'https://saucelabs.com/platform/mobile-emulators-and-simulators',
            },
            {
              label: 'Sauce Headless',
              to: 'https://saucelabs.com/platform/sauce-headless',
            },
            {
              label: 'Visual Testing',
              to: 'https://saucelabs.com/platform/visual-testing',
            },
            {
              label: 'Sauce Performance',
              to: 'https://saucelabs.com/platform/analytics-performance/sauce-performance',
            },
            {
              label: 'Sauce Insights',
              to: 'https://saucelabs.com/platform/analytics-performance/sauce-insights',
            },
            {
              label: 'Extended Debugging',
              to: 'https://saucelabs.com/platform/analytics-performance/advanced-debugging-tools',
            },
            {
              label: 'Supported Integrations',
              to: 'https://saucelabs.com/platform/integrations-plugins',
            },
            {
              label: 'Supported Browsers & Devices',
              to: 'https://saucelabs.com/platform/supported-browsers-devices',
            },
          ]
        },
        {
          label: 'Pricing',
          position: 'right',
          href: 'https://saucelabs.com/pricing',
        },
        {
          label: 'Resources',
          position: 'right',
          items: [
            {
              label: 'Sauce Labs Blog',
              to: 'https://saucelabs.com/blog',
            },
            {
              label: 'Resource Center',
              to: 'https://saucelabs.com/resources',
            },
            {
              label: 'Training',
              to: 'https://saucelabs.com/training-support',
            },
            {
              label: 'Community',
              to: 'https://saucelabs.com/community',
            },
          ]
        },
        {
          label: 'Contact',
          position: 'right',
          items: [
            {
              label: 'About Us',
              to: 'https://saucelabs.com/company',
            },
            {
              label: 'Careers',
              to: 'https://saucelabs.com/company/careers',
            },
            {
              label: 'Security',
              to: 'https://saucelabs.com/security',
            },
            {
              label: 'News',
              to: 'https://saucelabs.com/news',
            },
            {
              label: 'Partners',
              to: 'https://saucelabs.com/company/partners',
            },
          ]
        },
        {
          label: 'Try it Free',
          position: 'right',
          href: 'https://saucelabs.com/sign-up'
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
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: '/',
          //homePageId: '',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/saucelabs/sauce-docs/edit/master/',
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
          // disableVersioning: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    '@saucelabs/theme-github-codeblock',
  ],
};
