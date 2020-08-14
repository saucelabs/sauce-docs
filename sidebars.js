module.exports = {
  docs: {
  	Home: [
        'saucelabs-overview',
        'saucelabs-getting-started',
    ],
    "Live Testing": [
        'live-testing-overview',
        'live-testing-web-apps',
        'live-testing-mobile-apps',
    ],
    "Automated Testing": [
        'automation-getting-started',
        'automation-web-app-testing',
        'automation-mobile-app-testing',
        'automation-best-practices',
    ],
    Products: [
        'products',
        {
            type: 'category',
            label: 'Testrunner Toolkit',
            items: [
                'testrunner-toolkit-overview',
                'testrunner-toolkit-installation',
                'testrunner-toolkit-test-preparation',
                'testrunner-toolkit-configuration',
                'testrunner-toolkit-cli-reference',
                'testrunner-toolkit-faqs'
            ],
        },
    ],
    Contributing: [
        'code-of-conduct',
    	{
    		type: 'category',
    		label: 'Style Guide',
    		items: ['mkdwn-styles', 'adv-examples'],
    	},
    ],
  },
};