module.exports = {
  title: 'Sauce Labs Documentation',
  tagline: 'Documentation for the Sauce Labs Platform',
  url: 'https://saucelabs.com/docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'saucelabs', // Usually your GitHub org/user name.
  projectName: 'sauce-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['java', 'ruby', 'csharp', 'bash', 'powershell', 'python'],
    },
    algolia: {
      appId: 'ZETDNHTKFC',
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
    navbar: {
      title: null,
      hideOnScroll: false,
      logo: {
        alt: 'Sauce Labs logo',
        src: 'img/logo-saucelabs.png',
      },
      items: [
        {
          label: 'Solutions',
          position: 'right',
          items: [
            {
              label: 'Enterprise',
              href: 'https://saucelabs.com/solutions/enterprise',
            },
            {
              label: 'Start Ups & SMB Teams',
              href: 'https://saucelabs.com/solutions/startup-medium-teams',
            },
            {
              label: 'Open Source Projects',
              href: 'https://saucelabs.com/solutions/open-source',
            },
            {
              label: 'Continuous Testing',
              href: 'https://saucelabs.com/solutions/continuous-testing',
            },
            {
              label: 'Automated Testing',
              href: 'https://saucelabs.com/solutions/automated-testing',
            },
            {
              label: 'Live Testing',
              href: 'https://saucelabs.com/solutions/live-testing',
            },
          ],
        },
        {
          label: 'Platform',
          position: 'right',
          items: [
            {
              label: 'Real Device Cloud',
              href: 'https://saucelabs.com/platform/real-device-cloud',
            },
            {
              label: 'Cross-Browser Testing',
              href: 'https://saucelabs.com/platform/cross-browser-testing',
            },
            {
              label: 'Emulators & Simulators',
              href: 'https://saucelabs.com/platform/mobile-emulators-and-simulators',
            },
            {
              label: 'Sauce Headless',
              href: 'https://saucelabs.com/platform/sauce-headless',
            },
            {
              label: 'Visual Testing',
              href: 'https://saucelabs.com/platform/visual-testing',
            },
            {
              label: 'Sauce Performance',
              href: 'https://saucelabs.com/platform/analytics-performance/sauce-performance',
            },
            {
              label: 'Sauce Insights',
              href: 'https://saucelabs.com/platform/analytics-performance/sauce-insights',
            },
            {
              label: 'Extended Debugging',
              href: 'https://saucelabs.com/platform/analytics-performance/advanced-debugging-tools',
            },
            {
              label: 'Supported Integrations',
              href: 'https://saucelabs.com/platform/integrations-plugins',
            },
            {
              label: 'Supported Browsers & Devices',
              href: 'https://saucelabs.com/platform/supported-browsers-devices',
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
              href: 'https://saucelabs.com/blog',
            },
            {
              label: 'Resource Center',
              href: 'https://saucelabs.com/resources',
            },
            {
              label: 'Training',
              href: 'https://saucelabs.com/training-support',
            },
            {
              label: 'Community',
              href: 'https://saucelabs.com/community',
            },
          ]
        },
        {
          label: 'Contact',
          position: 'right',
          items: [
            {
              label: 'About Us',
              href: 'https://saucelabs.com/company',
            },
            {
              label: 'Careers',
              href: 'https://saucelabs.com/company/careers',
            },
            {
              label: 'Security',
              href: 'https://saucelabs.com/security',
            },
            {
              label: 'News',
              href: 'https://saucelabs.com/news',
            },
            {
              label: 'Partners',
              href: 'https://saucelabs.com/company/partners',
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl:
            'https://github.com/saucelabs/sauce-docs/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
