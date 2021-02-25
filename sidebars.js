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
          'secure-connections/sauce-connect/installation',
          'secure-connections/sauce-connect/setup-configuration',
          'secure-connections/sauce-connect/environment-variables',
          'secure-connections/sauce-connect/proxy-tunnels',
          'secure-connections/sauce-connect/security',
          'secure-connections/sauce-connect/troubleshooting',
          'secure-connections/sauce-connect/faq',
          ],
        },
      ],
  "Mobile Apps": [
    'mobile-apps',
    'mobile-apps/features',
    'mobile-apps/devices',
    'mobile-apps/admin-guide',
    'mobile-apps/app-storage',
    'mobile-apps/virtual-usb',
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
            'mobile-apps/automated-testing/microsoft-app-center',
            'mobile-apps/automated-testing/troubleshooting',
            'mobile-apps/automated-testing/faq',
                {
                  type: 'category',
                  label: 'Appium',
                  collapsed: true,
                  items: [
                     'mobile-apps/automated-testing/appium',
                     'mobile-apps/automated-testing/appium/rdc',
                     'mobile-apps/automated-testing/appium/rdc-capabilities',
                     'mobile-apps/automated-testing/appium/rdc-performance',
                     'mobile-apps/automated-testing/appium/vdc',
                     'mobile-apps/automated-testing/appium/vdc-capabilities',
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
      },
      {
        type: 'category',
        label: 'Automated Testing',
        collapsed: true,
        items: [
          'web-apps/automated-testing',
          'web-apps/automated-testing/cypress'
        ],
      },
    ],
    "API Testing": [
      'api-testing',
      {
        type: 'category',
        label: 'Quick Start',
        collapsed: true,
        items: [
            'api-testing/quick-start',
            'api-testing/quick-start/composer',
            'api-testing/quick-start/build-from-spec',
            'api-testing/quick-start/test-reports',
            'api-testing/quick-start/schedule-a-test',
            'api-testing/quick-start/dashboard',
            'api-testing/quick-start/integrate-with-your-cicd',
            'api-testing/quick-start/introduction-to-integration-testing',
            'api-testing/quick-start/adding-a-user',
            'api-testing/quick-start/flexible-variables-for-flexible-environments',
            'api-testing/quick-start/environments-vault-and-overrides-magic',
            'api-testing/quick-start/setup-connectors',
            'api-testing/quick-start/the-vault',
            'api-testing/quick-start/importing-postman-collections',
            'api-testing/quick-start/load-testing',
            'api-testing/quick-start/mocking-services',
            'api-testing/quick-start/easy-monitoring',
            'api-testing/quick-start/forge',
        ],
      },
      {
        type: 'category',
        label: 'APIs and Webhooks',
        collapsed: true,
        items: [
            'api-testing/api/v3',
            'api-testing/api/using-the-api',
        ],
      },
      {
        type: 'category',
        label: 'Assertion Components',
        collapsed: true,
        items: [
            'api-testing/assertion-components/assert-compares',
            'api-testing/assertion-components/assert-contains',
            'api-testing/assertion-components/assert-equals',
            'api-testing/assertion-components/assert-exists',
            'api-testing/assertion-components/assert-greater',
            'api-testing/assertion-components/assert-in',
            'api-testing/assertion-components/assert-is',
            'api-testing/assertion-components/assert-less',
            'api-testing/assertion-components/assert-matches',
            'api-testing/assertion-components/assert-valid-json-schema',
        ],
      },
      {
        type: 'category',
        label: 'Bloodhound',
        collapsed: true,
        items: [
            'api-testing/bloodhound',
            'api-testing/bloodhound/basic-configuration',
            'api-testing/bloodhound/flows',
            'api-testing/bloodhound/base-actors',
            'api-testing/bloodhound/load-balancing',
            'api-testing/bloodhound/fine-tuning',
            'api-testing/bloodhound/advanced-actors',
            {
                type: 'category',
                label: 'Module Actors',
                collapsed: true,
                items: [
                    'api-testing/bloodhound/module-actors',
                    'api-testing/bloodhound/module-actors/jdbc',
                    'api-testing/bloodhound/module-actors/mongodb',
                    'api-testing/bloodhound/module-actors/rabbitmq',
                    'api-testing/bloodhound/module-actors/fortress-forwarder',
                ],
            },
            'api-testing/bloodhound/expressions',
            'api-testing/bloodhound/forward-calls-to-apif-logger',
            'api-testing/bloodhound/using-databases',
        ],
      },
        {
            type: 'category',
            label: 'CI/CD',
            collapsed: true,
            items: [
                'api-testing/ci/apif-auto',
                'api-testing/ci/azure-devops',
                'api-testing/ci/connecting-with-bamboo',
                'api-testing/ci/bitbucket',
                'api-testing/ci/gitlab',
                {
                    type: 'category',
                    label: 'Jenkins',
                    collapsed: true,
                    items: [
                        'api-testing/ci/jenkins/using-the-api',
                        'api-testing/ci/jenkins/apif-auto',
                        'api-testing/ci/jenkins/apif-auto-and-github',
                        'api-testing/ci/jenkins/zephyr-enterprise-integration',
                    ],
                },
                'api-testing/ci/micro-focus-alm-integration',
            ],
        },
        {
            type: 'category',
            label: 'How To Guides',
            collapsed: true,
            items: [
                'api-testing/how-to/assertions-for-metrics-performance',
                'api-testing/how-to/3-leg-oauth',
                'api-testing/how-to/integration-testing',
            ],
        }
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
