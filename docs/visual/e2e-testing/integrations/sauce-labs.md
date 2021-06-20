---
id: sauce-labs
title: Sauce Labs Integration with Visual E2E Testing
sidebar_label: Sauce Labs
---

For users who have a Sauce Labs account, you can use Sauce Labs browsers with Screener giving you a wider selection of operating systems and browser configurations. Once integrated with Screener you can add Sauce Labs browsers to your test groups.


1. Running Screener Tests on Sauce Labs Browsers
To add Sauce Labs browsers to Screener, in your project dashboard click on **Integrations** followed by **Sauce Labs**.



Add your Sauce Labs Username and Access Key, then click **Save**.



This project is now integrated with Sauce Labs. When you add a browser to a test group, you will see the additional browsers from Sauce Labs.





Note: Screener supports only a subset of all Sauce Labs' operating systems and browsers. As new configurations are tested for compatibility with Screener, they will be added to the list of available browsers.


2. Running WebDriver Tests on Sauce Labs Browsers
For users who run their own WebDriver tests, you can use Sauce Labs browsers instead of Screener's browsers. Before you begin, please refer to our documentation on how to integrate Screener with your functional tests:

See Functional Tests Integration Documentation


Proxy Option
To run your WebDriver tests through Sauce Labs browsers, update your DesiredCapabilities object with the following steps:

Construct the Sauce Labs remote URL with your Sauce Labs credentials.

Eg: http://username:xxxxxx@ondemand.saucelabs.com/wd/hub

Update the screener hash in the DesiredCapabilities with a proxy option set to the Sauce Labs remote URL (See example below). Example Code (NodeJS):

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

Sauce Labs Desired Capabilities Configuration
Please refer to Sauce Labs' documentation on how to setup your DesiredCapabilities object. You will still need to add Screener specific information to your DesiredCapabilities object in order to trigger Screener tests.

Sauce Labs Documentation

Note: Screener supports only a subset of all Sauce Labs' operating systems and browsers. As new configurations are tested for compatibility with Screener, they will be added to the list of available browsers.
