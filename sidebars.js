module.exports = {
  someSidebar: {
    "Home": [
     'overview',
     {
       type: 'category',
       label: 'Sauce Labs Basics',
       collapsed: true,
       items: [
         'sauce-basics',
         {
           type: 'category',
           label: 'Account and Team Management',
           collapsed: true,
           items: [
             'basics/acct-team-mgmt-hub',
             'basics/acct-team-mgmt/org-settings',
             'basics/acct-team-mgmt/real-devices',

               {
                 type: 'category',
                 label: 'Managing Users and Accounts',
                 collapsed: true,
                 items: [
                   'basics/acct-team-mgmt/concurrency-limits',
                   'basics/acct-team-mgmt/adding-deactivating-users',
                   'basics/acct-team-mgmt/managing-user-info',
                   'basics/acct-team-mgmt/viewing-exporting-usage-data',
                 ],
               },
               {
                 type: 'category',
                 label: 'Managing Teams',
                 collapsed: true,
                 items: [
                   'basics/acct-team-mgmt/adding-deleting-teams',
                   'basics/acct-team-mgmt/assigning-removing-users-teams',
                   'basics/acct-team-mgmt/sauce-connect-proxy-tunnels',
                ],
              },
              {
                type: 'category',
                label: 'Billing and Subscriptions',
                collapsed: true,
                items: [
                  'basics/acct-team-mgmt/managing-subscription',
                  'basics/acct-team-mgmt/updating-billing',
                  'basics/acct-team-mgmt/plan-details',
                ],
              },
            ],
          },

       {
         type: 'category',
         label: 'Single Sign-On',
         collapsed: true,
         items: [
           'basics/sso-hub',
           'basics/sso/setting-up-single-sign-on',
           'basics/sso/config-adfs',
           'basics/sso/config-okta',

         ],
       },

     ],
  },
],
  "Secure Connections": [
     'secure-connections',
     {
        type: 'category',
        label: 'Sauce Connect Proxy',
        collapsed: true,
        items: [
          'secure-connections/sauce-connect',
          'secure-connections/sauce-connect/system-requirements',
          'secure-connections/sauce-connect/installation',
          'secure-connections/sauce-connect/setup-configuration',
          'secure-connections/sauce-connect/environment-variables',
          'secure-connections/sauce-connect/proxy-tunnels',
          'secure-connections/sauce-connect/security',
          'secure-connections/sauce-connect/troubleshooting',
          'secure-connections/sauce-connect/faq',
          'secure-connections/sauce-connect/changelog',
          ],
        },
      'secure-connections/ipsec-vpn',  
      ],
  "Mobile Apps": [
    'mobile-apps',
     {
        type: 'category',
        label: 'Live Testing',
        collapsed: true,
        items: [
          'mobile-apps/live-testing',
            ],
        },
        {
          type: 'category',
          label: 'Automated Testing',
          collapsed: true,
          items: [
            'mobile-apps/automated-testing',
            'mobile-apps/automated-testing/devices',
                {
                  type: 'category',
                  label: 'Appium',
                  collapsed: true,
                  items: [
                     'mobile-apps/automated-testing/appium',
                     'mobile-apps/automated-testing/appium/real-devices',
                     'mobile-apps/automated-testing/appium/virtual-devices',
                    ],
                },
                {
                  type: 'category',
                  label: 'Espresso and XCUITest',
                  collapsed: true,
                  items: [
                    'mobile-apps/automated-testing/espresso-xcuitest',
                    'mobile-apps/automated-testing/espresso-xcuitest/real-devices',
                    'mobile-apps/automated-testing/espresso-xcuitest/virtual-devices',
                  ],
                },
                'mobile-apps/automated-testing/microsoft-app-center',
                'mobile-apps/automated-testing/troubleshooting',
              ],
           },
     'mobile-apps/app-storage',
     'mobile-apps/features',
     'mobile-apps/virtual-usb',
     'mobile-apps/faq',
         ],
    "Web Apps": [
      'web-apps',
      {
        type: 'category',
        label: 'Live Testing',
        collapsed: true,
        items: [
          'web-apps/live-testing',
        ],
      },
      {
        type: 'category',
        label: 'Automated Testing',
        collapsed: true,
        items: [
          'web-apps/automated-testing/cypress'
        ],
      },
    ],
    "CI/CD": [
        'ci',
        'ci/bamboo',
        'ci/bitbucket',
        'ci/jenkins',
        'ci/teamcity',
        'ci/visual-studio',
    ],
    "Insights": [
        'insights',
        'insights/scope',
        'insights/history',
        'insights/trends',
        'insights/failure-analysis',
    ],
    "Performance": [
      'performance',
      'performance/about',
      'performance/one-page',
      'performance/transitions',
      'performance/motion',
      'performance/analyze',
    ],
    "Headless": [
      'headless',
    ],
      "Testrunner Toolkit": [
          'testrunner-toolkit',
          'testrunner-toolkit/installation',
          {
              type: 'category',
              label: 'Configuration',
              collapsed: true,
              items: [
                  'testrunner-toolkit/configuration',
                  'testrunner-toolkit/configuration/cypress',
                  'testrunner-toolkit/configuration/playwright',
                  'testrunner-toolkit/configuration/testcafe',
              ],
          },
          'testrunner-toolkit/running-tests',
          {
              type: 'category',
              label: 'CI Integrations',
              collapsed: true,
              items: [
                  'testrunner-toolkit/integrations',
                  'testrunner-toolkit/integrations/jenkins',
                  'testrunner-toolkit/integrations/github-actions',

              ],
          },
          'testrunner-toolkit/typescript',
          'testrunner-toolkit/saucectl',
          'testrunner-toolkit/faqs',
          'testrunner-toolkit/support',
      ],
    "Visual": [
      'visual',
    ],
    "Reference": [
      'dev',
      {
        type: 'category',
        label: 'API Reference',
        collapsed: true,
        items: [
          'dev/api',
          'dev/api/accounts',
          'dev/api/connect',
          'dev/api/insights',
          'dev/api/jobs',
          'dev/api/performance',
          'dev/api/platform',
          'dev/api/rdc',
          'dev/api/storage',
        ],
      },
      {
        type: 'category',
        label: 'CLI Reference',
        collapsed: true,
        items: [
          'dev/cli',
          'dev/cli/espresso-xcuitest',
          'dev/cli/sauce-connect-proxy',
        ]
      },
    ],
    Contributing: [
      'contributing',
      'contributing/code-of-conduct',
      {
        type: 'category',
        label: 'Style Guide',
        items: [
          'contributing/style-guide',
          'contributing/style-guide/mkdwn-styles',
          'contributing/style-guide/adv-examples'
        ],
      },
    ],
  },
};
