---
id: debug
title: Using Extended Debugging
sidebar_label: Debugging
description: Collect extended debugging data to help audit flaky test results.
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Enable Extended Debugging in your Selenium test script to collect console logs and HTTP Archive (HAR) files generated during testing for use in diagnosing flaky tests or performance degradation.

:::note
Extended Debugging generates additional assets that impact test performance and is not intended for everyday testing.
:::

## What You'll Need

* Google Chrome (no older than 3 versions from latest) as the test browser
or
* Firefox browser (versions 53 and above)

:::note
Extended Debugging is not supported with Headless.
:::

## Enabling Extended Debugging

To generate the JS console logs and HAR files, add the `extendedDebugging` capability to the desired capabilities of your test and set it to true. Here are some example scripts in both W3C WebDriver Protocol and legacy JSON Wire Protocol that show Extended Debugging enabled.

<Tabs
  defaultValue="w3c"
  values={[
    {label: 'W3C', value: 'w3c'},
    {label: 'JSONWP', value: 'jsonwp'},
  ]}>

<TabItem value="w3c">

```
const capabilities: {
  browserName: 'chrome',
  browserVersion: 'latest',
  platformName: 'Windows 10',
  'sauce:options': {
        extendedDebugging: true,
  }
}
```
</TabItem>
<TabItem value="jsonwp">

```
const capabilities = {
  browserName: 'chrome',
  version: 'latest',
  platform: 'Windows 10',
  extendedDebugging: true,
}
```
</TabItem>
</Tabs>

For more information and additional examples, see our [Extended Debugging Example GitHub repo](https://github.com/saucelabs-training/demo-js/tree/master/webdriverio/webdriver/examples/extended-debugging).

When a test with extended debugging enabled completes, you can access the logs and files through the Sauce Labs application or with the REST API.

### Edit Your Firefox Profile

If you're testing on a Firefox browser, edit the Firefox `about:config` file to configure your profile as follows to allow Extended Debugging:

```
about:config Settings
'mozz:firefoxOptions': {
    'profile': '<CUSTOM_PROFILE_ID>',
    'args': [
        '-start-debugger-server',
        '9222'
    ],
    prefs: {
        'devtools.debugger.remote-enabled': true,
        'devtools.debugger.prompt-connection': false,
        'devtools.chrome.enabled': true
    }
},
```

## JavaScript (JS) Console Logs

The JS console collects security errors, warnings, and messages that are explicitly logged by the browser. You can use these logs to find out which components of your web application failed to load or ran into an error, what warnings were logged by the browser, and get more information about application performance. The console log information is associated with the URL where it occurred, and is composed of four types of information: **Log**, **Info**, **Warning**, and **Error**. In this example, you can see how an error was generated for the URL  `https://pbs.twimg.com/profile_images/477099293250052097/fMFjb8gu_400x400.jpeg` when a resource failed to load:

```
{
   "http://webdriver.io/api/action/click.html":[
      {
         "level":"error",
         "column":0,
         "text":"Failed to load resource: the server responded with a status of 404 (OK)",
         "source":"network",
         "networkRequestId":"1543.182",
         "url":"https://pbs.twimg.com/profile_images/477099293250052097/fMFjb8gu_400x400.jpeg",
         "timestamp":1501197041.22091,
         "line":0,
         "type":"log"
      }
   ]
}
```

### Accessing Console Logs

Access the JS Console logs (`console.json`) under the **Logs** tab of the **Test Details** page in the Sauce Labs application, or through the REST API by calling the assets endpoint:

```
curl https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/eds/JOB_ID/console.json
```

## Using HAR Files for Debugging

HTTP Archive Format (HAR) files collect all network requests and responses made and received by the browser during testing. HAR files offer useful debugging information, such as:

* Identifying browser requests that time out
* Pinpointing requests slowing down the loading process
* Locating faulty API calls

### Viewing HAR Files

You a HAR viewer to read HAR files. Sauce Labs provides a [React Network Viewer](https://opensource.saucelabs.com/network-viewer/) HAR viewer for your convenience. For step-by-step usage instructions, see our [Visualize HAR Files with the New React Network Viewer](https://opensource.saucelabs.com/blog/react_network_viewer/) blog article.

Alternatively, some other commonly used HAR viewers include:

* [HTTP Archive Viewer](http://www.softwareishard.com/har/viewer/) (*Software is Hard* blog)
* [Chrome HAR Viewer](https://ericduran.github.io/chromeHAR/) (*Google, by Eric Duran*)

### Accessing HAR Files

To download HAR files from the Sauce Labs application:

1. From your Sauce Labs dashboard, navigate to **Live > Test Results**.
1. Select the applicable test.
1. Click the **Metadata** tab.

You can also download a HAR file programmatically using the following API request:

```
curl --compressed -O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/eds/JOB_ID/network.har
```
