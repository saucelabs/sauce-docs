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
          'configuration',
          'platform-support',
          'account-and-team-management',
          'data-centers',
        ],
      },
    ],
    "Secure Connections": [
          'secure-connections',
          'ipsec-vpn',
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
                'mobile-apps/live-testing/real-devices',
                'mobile-apps/live-testing/virtual-devices',
            ],
        },
        {
            type: 'category',
            label: 'Automated Testing',
            collapsed: true,
            items: [
                'mobile-apps/automated-testing',
                'mobile-apps/automated-testing/appium',
                'mobile-apps/automated-testing/robotium',
                'mobile-apps/automated-testing/wdio',

                {
                    type: 'category',
                    label: 'Espresso and XCUITest',
                    collapsed: true,
                    items: [
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
          'web-apps/live-testing/desktop-browsers',
          'web-apps/live-testing/mobile-browsers',
          'web-apps/live-testing/troubleshooting',
        ],
      },
      {
        type: 'category',
        label: 'Automated Testing',
        collapsed: true,
        items: [
          'web-apps/automated-testing',
          'web-apps/automated-testing/selenium',
          'web-apps/automated-testing/wdio',
          'web-apps/automated-testing/js',
        ],
      },
    ],
    "CI/CD": [
        'ci',
        'ci/jenkins',
        'ci/bamboo',
        'ci/azure',
        'ci/github',
        'ci/gitlab',
    ],
    "Insights": [
        'insights',
        'insights/basics',
        'insights/history',
        'insights/trends',
        'insights/efficiency',
        'insights/failure-analysis',
        'insights/debugging',
    ],
    "Performance": [
      'performance',
      'performance/load',
      'performance/speedo',
      'performance/jankiness',
      'performance/troubleshooting',
    ],
    "Headless": [
      'headless',
    ],
    "Visual": [
      'visual',
    ],
    "Developer Resources": [
      'dev',
      {
        type: 'category',
        label: 'API Reference',
        collapsed: true,
        items: [
          'dev/api',
          'dev/api/access-key',
          'dev/api/account',
          'dev/api/activity',
          'dev/api/analytics',
          'dev/api/devices',
          'dev/api/info',
          'dev/api/jobs',
          'dev/api/js-tests',
          'dev/api/performance',
          'dev/api/sauce-storage',
          'dev/api/storage',
          'dev/api/tunnels',
          'dev/api/user',
        ],
      },
      {
        type: 'category',
        label: 'CLI Reference',
        collapsed: true,
        items: [
          'dev/cli',
          'dev/cli/espresso-xcuitest-cli',
          'dev/cli/sc-cli',
          'dev/cli/ipsec-cli',
          'dev/cli/saucectl',
        ]
      },
      {
        type: 'category',
        label: 'Sauce Bindings',
        collapsed: true,
        items: [
          'dev/sauce-bindings',
          'dev/sauce-bindings/configuration',
          'dev/sauce-bindings/integration',
          'dev/sauce-bindings/support',
        ],
      },
      {
        type: 'category',
        label: 'Testrunner Toolkit',
        collapsed: true,
        items: [
          'dev/testrunner-toolkit',
          'dev/testrunner-toolkit/installation',
          'dev/testrunner-toolkit/configuration',
          'dev/testrunner-toolkit/running-tests',
          'dev/testrunner-toolkit/integrations',
          'dev/testrunner-toolkit/typescript',
          'dev/testrunner-toolkit/faqs',
          'dev/testrunner-toolkit/support',
        ],
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
