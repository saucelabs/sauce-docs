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
    navbar: {
      title: 'Sauce Labs Docs',
      logo: {
        alt: 'Sauce Bot',
        src: 'img/sauce-bot.png',
      },
      items: [
        {
          to: '/',
          activeBasePath: '/',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/saucelabs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'Sauce Logo',
        src: 'img/sauce-logo.png',
        href: 'https://opensource.saucelabs.com',
      },
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/saucelabs-getting-started',
            },
            {
              label: 'Products',
              to: '/products',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/saucelabs',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/saucelabs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/saucelabs',
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
