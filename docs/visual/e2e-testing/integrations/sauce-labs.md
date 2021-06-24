---
id: sauce-labs
title: Sauce Labs Integration with Visual E2E Testing
sidebar_label: Sauce Labs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

For users who have a Sauce Labs account, you can use Sauce Labs browsers with Screener giving you a wider selection of operating systems and browser configurations. Once integrated with Screener you can add Sauce Labs browsers to your test groups.

## Running Screener Tests on Sauce Labs Browsers

To add Sauce Labs browsers to Screener:

1. From your project dashboard, click on **Integrations** > **Sauce Labs**.
  <img src={useBaseUrl('img/visual/e2e-saucelabs-integrations-button.png')} alt="Sauce Labs integration button" width="200px" />

2. Add your Sauce Labs Username and Access Key, then click **Save**.

  <img src={useBaseUrl('img/visual/e2e-saucelabs-integrations-settings.png')} alt="Sauce Labs integration settings" width="400px" />

This project is now integrated with Sauce Labs. When you add a browser to a test group, you will see the additional browsers from Sauce Labs.

<img src={useBaseUrl('img/visual/e2e-saucelabs-add-browser.png')} alt="Sauce Labs browser integration" width="400px" />


>**NOTE**: Screener supports only a subset of all Sauce Labs' operating systems and browsers. As new configurations are tested for compatibility with Screener, they will be added to the list of available browsers.


## Running WebDriver Tests on Sauce Labs Browsers
For users who run their own WebDriver tests, you can use Sauce Labs browsers instead of Screener's browsers. Before you begin, please refer to our [documentation on how to integrate Screener with your functional tests](/visual/e2e-testing/integrations/selenium-webdriver).


### Proxy Option

To run your WebDriver tests through Sauce Labs browsers, update your DesiredCapabilities object with the following steps:

1. Construct the Sauce Labs remote URL with your Sauce Labs credentials. __Example__:
  ```bash
  http://username:xxxxxx@ondemand.saucelabs.com/wd/hub
  ```
2. Update the screener hash in the Capabilities with a proxy option set to the Sauce Labs remote URL. __Example__:
  ```js
  var wd = require('wd-sync'),
      sync = wd.remote('https://hub.screener.io/wd/hub').sync;
   sync(function() {
     this.init({
       browserName: 'firefox',
       version: '40',
       platform: 'Windows 7',
       'screen-resolution': '1280x1024',
       screener: {
         apiKey: '<your-api-key>',
         name: 'Firefox/Test-Suite',
         group: '<your-group-id>',
         resolution: '1280x1024',
         proxy: 'http://username:xxxxxx@ondemand.saucelabs.com/wd/hub'
       }
     });
     this.get('https://screener.io');
     this.execute('/*@screener.snapshot*/', ['State Name']);
     this.quit();
   });
  ```

### Sauce Labs Capabilities Configuration
Please refer to Sauce Labs documentation on how to set up your Capabilities object. You will still need to add Screener specific information to your DesiredCapabilities object in order to trigger Screener tests.

>**NOTE**: Screener supports only a subset of all Sauce Labs' operating systems and browsers. As new configurations are tested for compatibility with Screener, they will be added to the list of available browsers.
