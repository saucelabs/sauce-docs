module.exports = {
  title: 'Sauce Labs Documentation',
  tagline: 'Documentation for the Sauce Labs Platform',
  url: 'https://saucelabs.com/docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'saucelabs', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  stylesheets: [
    // String format.
    'https://use.typekit.net/zmt8tam.css'
    // Object format.
  ],
  themeConfig: {
    /* Search Bar Config */
    algolia: {
      apiKey: '8442c4c56cae89e0f1a1b7c9a8fd8f9c',
      indexName: 'sauce-docs-staging',
      searchParameters: {}, // Optional (if provided by Algolia)
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
        // {
        //   to: '/',
        //   activeBasePath: '/',
        //   label: 'Social Media',
        //   position: 'right',
        //   items: [
        //     {
        //       label: 'Facebook',
        //       href: 'https://www.facebook.com/saucelabs/',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/saucelabs',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/saucelabs',
        //     },
        //     {
        //       label: 'LinkedIn',
        //       href: 'https://www.linkedin.com/company/sauce-labs',
        //     },
        //   ]
        // },
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
        href: 'https://opensource.saucelabs.com',
      },
      style: 'light',
      links: [
        {
          title: 'Solutions',
          items: [
            {
              label: 'Enterprise',
              href: 'https://saucelabs.com/solutions/enterprise',
            },
            {
              label: 'Start-ups & SMB Teams',
              href: 'https://saucelabs.com/solutions/startup-medium-teams',
            },
            {
              label: 'Open Source',
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
          title: 'Platform',
          items: [
            {
              label: 'Overview',
              href: 'https://saucelabs.com/platform',
            },
            {
              label: 'Real Device Cloud',
              href: 'https://saucelabs.com/platform/real-device-cloud',
            },
            {
              label: 'Emulators & Simulators',
              href: 'https://saucelabs.com/platform/mobile-emulators-and-simulators',
            },
            {
              label: 'Cross-browser Testing',
              href: 'https://saucelabs.com/platform/cross-browser-testing',
            },
            {
              label: 'Sauce Headless',
              href: 'https://saucelabs.com/platform/sauce-headless',
            },
            {
              label: 'Sauce Performance',
              href: 'https://saucelabs.com/platform/analytics-performance/sauce-performance',
            },
            {
              label: 'Visual Testing',
              href: 'https://saucelabs.com/platform/visual-testing',
            },
            {
              label: 'Supported Integrations',
              href: 'https://saucelabs.com/platform/integrations-plugins',
            },
            {
              label: 'Supported Browsers & Devices',
              href: 'https://saucelabs.com/platform/supported-browsers-devices',
            },
            {
              label: 'Debugging',
              href: 'https://saucelabs.com/platform/analytics-performance/advanced-debugging-tools',
            },
            {
              label: 'Sauce Insights',
              href: 'https://saucelabs.com/platform/analytics-performance/sauce-insights',
            },
            {
              label: 'Automation Tools',
              href: 'https://saucelabs.com/platform/automation-tools',
            },
            {
              label: 'Pricing',
              href: 'https://saucelabs.com/pricing',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Community',
              href: 'https://saucelabs.com/community',
            },
            {
              label: 'Sauce Labs Blog',
              href: 'https://saucelabs.com/blog',
            },
            {
              label: 'Training & Support',
              href: 'https://saucelabs.com/training-support',
            },
            {
              label: 'Resource Center',
              href: 'https://saucelabs.com/resources',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Partners',
              href: 'https://saucelabs.com/company/partners',
            },
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
              label: 'Contact',
              href: 'https://saucelabs.com/contact',
            },
          ],
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
          homePageId: 'saucelabs-overview',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/saucelabs/sauce-docs/edit/master/',
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
