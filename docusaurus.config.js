const docusaurusConfig = {
  title: 'Resources & Community',
  tagline:
    'Accelerating your ability to ship code while maintaining high quality experiences is hard. We are here to help.',
  url: 'https://docs.saucelabs.com',
  noIndex: false,
  trailingSlash: true,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'saucelabs',
  projectName: 'sauce-docs',
  scripts: [
      "/scripts/hide.js",
    {
      src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
      type: 'text/javascript',
      charset: 'UTF-8',
      'data-domain-script': '9e4c4ce3-8349-4030-9de7-0b1d368edfce',
    },
    {
      src: "https://solve-widget.forethought.ai/embed.js",
      type: "application/javascript",
      'data-api-key': "1f0243be-fd74-4205-bbff-cf72bc3c96b3",
      'data-ft-location': "docs",
    },
  ],
  themeConfig: {
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
        darkIcon: '💡',
        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '🌙',
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
        src: 'img/logo-saucelabs.svg',
        srcDark: 'img/logo-saucelabs-white.svg',
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
          label: 'Low Code',
          position: 'left',
          to: '/dev/low-code',
        },
        // {
        //   label: 'Try it Free',
        //   position: 'right',
        //   href: 'https://saucelabs.com/sign-up',
        // },
        // {
        //   label: 'Sign In',
        //   position: 'right',
        //   href: 'https://accounts.saucelabs.com/',
        // },
      ],
    },
    footer: {
      logo: {
        alt: 'Sauce Logo',
        src: 'img/logo-saucelabs-inverted.png',
        href: 'https://saucelabs.com',
      },
      style: 'light',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Sauce Labs, Inc. Built with Docusaurus.`,
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
          routeBasePath: '/',
          editUrl: 'https://github.com/saucelabs/sauce-docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: ['@saucelabs/theme-github-codeblock'],
  plugins: [],
};

if (!process.env.SAUCE_DOCS_DEV) {
  docusaurusConfig.themeConfig.algolia = {
    appId: process.env.ALGOLIA_APP_ID || 'RO95H65NEO',
    apiKey: process.env.ALGOLIA_KEY || 'demo-key' || 'bad6042c91ae4419a94229edf20bc8ea',
    indexName: 'crawler_federate_research',
  };
}

module.exports = docusaurusConfig;
