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
     'secure-connections/ipsec-vpn',
     {
        type: 'category',
        label: 'Sauce Connect Proxy',
        collapsed: true,
        items: [
          'secure-connections/sauce-connect',
          'secure-connections/sauce-connect/environment-variables',
          ],
        },
      ],
   "Mobile Apps": [
        'mobile-apps',
        {
          type: 'category',
          label: 'Live Testing',
          collapsed: true,
          items: [
            'mobile-apps/live-testing',
            'mobile-apps/live-testing/application-storage',
            ],
        },
        {
          type: 'category',
          label: 'Automated Testing',
          collapsed: true,
          items: [
            'mobile-apps/automated-testing',
                {
                  type: 'category',
                  label: 'Appium',
                  collapsed: true,
                  items: [
                     'mobile-apps/automated-testing/appium',
                     'mobile-apps/automated-testing/appium/real-device-testing',
                     'mobile-apps/automated-testing/appium/virtual-device-testing',
                     'mobile-apps/automated-testing/appium/example-scripts',
                    ],
                },
                {
                  type: 'category',
                  label: 'Espresso and XCUITest',
                  collapsed: true,
                  items: [
                    'mobile-apps/automated-testing/espresso-xcuitest',
                    'mobile-apps/automated-testing/espresso-xcuitest/real-device-testing',
                    'mobile-apps/automated-testing/espresso-xcuitest/virtual-device-testing',
                    'mobile-apps/automated-testing/espresso-xcuitest/example-configurations',
                    'mobile-apps/automated-testing/espresso-xcuitest/change-logs',

                     ],
                   },

                 ],
              },
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
        "CI/CD": [
            'ci',
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
                    'dev/cli/saucectl',
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
