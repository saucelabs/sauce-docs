module.exports = {
  docs: {
  	Home: [
        'overview',
        'getting-started',
        'storage',
    ],
    // Guides: [
    //     {
    //         type: 'category',
    //         label: 'Live Testing',
    //         collapsed: true,
    //         items: [
    //             'guides/live-testing/introduction',
    //             'guides/live-testing/web-apps',
    //             'guides/live-testing/mobile-apps',
    //         ],
    //     },
    //     {
    //         type: 'category',
    //         label: 'Automated Testing',
    //         collapsed: true,
    //         items: [
    //             'guides/automation/introduction',
    //             'guides/automation/web-apps',
    //             'guides/automation/mobile-apps',
    //             'guides/automation/best-practices',
    //         ],
    //     },
    // ],
    Products: [
        'products',
        {
            type: 'category',
            label: 'Testrunner Toolkit',
            collapsed: true,
            items: [
                'products/testrunner-toolkit',
                'products/testrunner-toolkit/installation',
                'products/testrunner-toolkit/preparation',
                'products/testrunner-toolkit/configuration',
                'products/testrunner-toolkit/integrations',
                'products/testrunner-toolkit/saucectl',
                'products/testrunner-toolkit/faqs',
            ],
        },
    ],
    Contributing: [
        'contributing/code-of-conduct',
    	{
    		type: 'category',
    		label: 'Style Guide',
    		items: [
    		    'contributing/style-guide/mkdwn-styles',
                'contributing/style-guide/adv-examples'
            ],
    	},
    ],
  },
};