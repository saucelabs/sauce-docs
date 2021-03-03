module.exports = {
  title: 'Sauce Labs Documentation',
  tagline: 'Find everything you need to know about manual and automated cross-browser and mobile app testing in the Sauce Labs Continuous Testing Cloud.',
  url: 'https://docs.saucelabs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'saucelabs',
  projectName: 'sauce-docs',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-6735579-1',
    },
    hideableSidebar: true,
    prism: {
      additionalLanguages: ['java', 'ruby', 'csharp', 'bash', 'powershell', 'python'],
    },
    /*algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_KEY,
      indexName: 'saucelabs',
    },*/
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
              label: 'Testrunner ToolKit BETA',
              href: 'https://saucelabs.com/platform/sauce-testrunner-toolkit',
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
              label: 'Selenium',
              href: 'https://saucelabs.com/platform/automation-tools/selenium',
            },
            {
              label: 'Espresso',
              href: 'https://saucelabs.com/platform/automation-tools/espresso',
            },
            {
              label: 'Appium',
              href: 'https://saucelabs.com/platform/automation-tools/appium',
            },
            {
              label: 'XCUI Test',
              href: 'https://saucelabs.com/platform/automation-tools/xcuitest',
            },
            {
              label: 'View All',
              href: 'https://saucelabs.com/platform/automation-tools',
            }
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
              label: 'Articles',
              href: 'https://saucelabs.com/resources/articles',
            },
            {
              label: 'Videos',
              href: 'https://saucelabs.com/resources/videos',
            },
            {
              label: 'Webinars',
              href: 'https://saucelabs.com/resources/webinars',
            },
            {
              label: 'Case Studies',
              href: 'https://saucelabs.com/resources/case-studies',
            },
            {
              label: 'White Papers',
              href: 'https://saucelabs.com/resources/white-papers',
            },
            {
              label: 'Data Sheets',
              href: 'https://saucelabs.com/resources/data-sheets',
            },
            {
              label: 'Training & Support',
              href: 'https://saucelabs.com/training-support',
            },
            {
              label: 'Knowledge Base',
              href: 'https://support.saucelabs.com/',
            },
            {
              label: 'Documentation',
              href: 'https://wiki.saucelabs.com/',
            },
            {
              label: 'Our Experts',
              href: 'https://saucelabs.com/our-experts',
            },
            {
              label: 'Community',
              href: 'https://saucelabs.com/community',
            },
            {
              label: 'Join Secret Sauce',
              href: 'https://saucelabs.com/community/join-secret-sauce',
            },
            {
              label: 'Events',
              href: 'https://saucelabs.com/community/events',
            },
            {
              label: 'Selenium',
              href: 'https://www.seleniumhq.org/',
            },
            {
              label: 'Appium',
              href: 'http://appium.io/',
            },
          ]
        },
        {
          label: 'Company',
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
            {
              label: 'Technology Alliance',
              href: 'https://saucelabs.com/company/partners/tap',
            },
            {
              label: 'Go-To-Market',
              href: 'https://saucelabs.com/company/partners/go-to-market',
            },
          ]
        },
        {
          label: 'Contact',
          position: 'right',
          items: [
            {
              label: 'Contact Sales',
              href: 'https://saucelabs.com/sales',
            },
            {
              label: 'General Inquiries',
              href: 'https://saucelabs.com/contact',
            },
            {
              label: 'Contact Support',
              href: 'https://saucelabs.com/training-support',
            },
            {
              label: 'Sauce Community',
              href: 'https://saucelabs.com/community',
            }
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
  ],
};