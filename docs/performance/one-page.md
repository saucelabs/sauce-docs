---
id: one-page
title: Collecting Single URL Performance Statistics
sidebar_label: Single Page Statistics
description: Use Sauce Labs Performance Testing to establish a performance baseline for a particular URL or to analyze performance of a previously run test.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs Performance Testing allows you to measure the performance of your web application and validate any 
regressions based on previously executed tests. Performance testing integrates seamlessly with your existing 
Selenium/WebDriver tests and CI systems, allowing you to capture performance metrics within your test pipeline.

## What You'll Learn

- How to enable performance testing in your Sauce Labs tests
- What's required to use performance testing
- How to capture and analyze performance metrics
- How to interpret the performance results

### What You'll Need

- Google Chrome (no older than 3 versions from latest) as the test browser
- A Selenium/WebDriver test framework (e.g., WebdriverIO, Selenium)
- SAUCE_USERNAME and SAUCE_ACCESS_KEY defined for your environment
- The `extendedDebugging` and `capturePerformance` capabilities enabled in your test configuration

:::caution WebDriver BiDi Not Supported
Performance testing is not compatible with WebDriver BiDi at this time. If you are using Selenium, avoid 
setting `webSocketUrl: true` in your capabilities. For recent versions of WebdriverIO, you must force WebDriver Classic 
by setting `'wdio:enforceWebDriverClassic': true` in your top-level capabilities.
:::

## Enabling Performance Testing

To capture performance metrics in your Sauce Labs tests, you need to enable the `extendedDebugging` and 
`capturePerformance` capabilities in your test configuration.

<Tabs
defaultValue="webdriverio"
values={[
{label: 'WebdriverIO', value: 'webdriverio'},
{label: 'Selenium', value: 'selenium'},
]}>

<TabItem value="webdriverio">

Add the capabilities to your WebdriverIO configuration:

```javascript
capabilities: [{
    browserName: 'chrome',
    platformName: 'Windows 11',
    browserVersion: 'latest',
    'sauce:options': {
        extendedDebugging: true,
        capturePerformance: true,
        name: 'My Performance Test'
    }
}]
```

</TabItem>
<TabItem value="selenium">

Add the capabilities to your Selenium desired capabilities:

```java
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("extendedDebugging", true);
sauceOptions.setCapability("capturePerformance", true);
sauceOptions.setCapability("name", "My Performance Test");

ChromeOptions options = new ChromeOptions();
options.setCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

## Using Performance Custom Commands

Sauce Labs Performance Testing supports the following custom commands that you can execute within your tests:

- `sauce:log` with type `sauce:performance` - Retrieve the captured performance metrics
- `sauce:log` with type `sauce:network` - Retrieve network request logs
- `sauce:performanceDisable` - Disable performance capture for subsequent page loads
- `sauce:performanceEnable` - Re-enable performance capture after disabling

:::note
Performance testing requires your SAUCE_USERNAME and SAUCE_ACCESS_KEY. Export the values into your environment to 
authenticate with Sauce Labs:
```bash
export SAUCE_USERNAME=your_username
export SAUCE_ACCESS_KEY=XXXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```
:::

### Retrieving Performance Metrics

After navigating to a page in your test, you can retrieve the performance metrics using the custom command. The 
platform automatically:

- Captures performance metrics for each page load
- Captures performance logs as test artifacts
- Provides access to detailed Lighthouse-based metrics

#### WebdriverIO Example

```javascript
describe('Performance Test', () => {
    it('should capture performance metrics', async () => {
        await browser.url('https://www.saucedemo.com');
        
        // Get performance metrics
        const perfData = await browser.execute('sauce:log', { type: 'sauce:performance' });
        
        // perfData contains metrics like load, speedIndex, firstContentfulPaint, etc.
        console.log('Performance data:', perfData);
        
        // Example: Assert on specific metrics
        expect(perfData.load).toBeLessThan(5000);
        expect(perfData.firstContentfulPaint).toBeLessThan(2000);
    });
});
```

#### Retrieving Network Logs

You can also retrieve the network request logs for analysis:

```javascript
// Get the network log data
const networkLogs = await browser.execute('sauce:log', { type: 'sauce:network' });
console.log('Network logs:', networkLogs);

// Each request contains url, method, statusCode, headers, timing, etc.
```

The output includes comprehensive metrics such as load time, speed index, first contentful paint, and more.

### Controlling Performance Capture

You can disable and re-enable performance capture during your test:

```javascript
describe('Selective Performance Test', () => {
    it('should only capture performance for specific pages', async () => {
        // Performance is captured for this page
        await browser.url('https://www.saucedemo.com');
        const perfData1 = await browser.execute('sauce:log', { type: 'sauce:performance' });
        
        // Disable performance capture
        await browser.execute('sauce:performanceDisable');
        
        // Performance is NOT captured for this navigation
        await browser.url('https://www.saucedemo.com/inventory.html');
        
        // Re-enable performance capture
        await browser.execute('sauce:performanceEnable');
        
        // Performance is captured again
        await browser.url('https://www.saucedemo.com/cart.html');
        const perfData2 = await browser.execute('sauce:log', { type: 'sauce:performance' });
    });
});
```

## Accessing Performance Data

Performance logs are automatically captured when the `extendedDebugging` and `capturePerformance` capabilities are 
enabled. You can retrieve the performance data within your test using the `sauce:log` custom command:

```javascript
// Get performance metrics
const perfData = await browser.execute('sauce:log', { type: 'sauce:performance' });

// The response contains metrics like:
// - load
// - speedIndex
// - firstPaint
// - firstContentfulPaint
// - largestContentfulPaint
// - firstInteractive
// - domContentLoaded
// - totalBlockingTime
// - cumulativeLayoutShift
// - score (Lighthouse performance score)
// and more...
```

You can also access performance data through the Sauce Labs UI after your test completes.

## Configuration Options

Sauce Labs Performance Testing can be configured through capabilities to ensure you capture the data most relevant 
to your organization.

### Capabilities

Configure performance testing through the `sauce:options` capability:

| Capability | Description | Example |
| ---------- | ----------- | ------- |
| `extendedDebugging` | Enable extended debugging features. Required for performance testing. | `true` |
| `capturePerformance` | Enable performance metrics capture. Required for all performance testing. | `true` |
| `name` | Identify your test with a name. | `"My Performance Test"` |

### Network Throttling

You can simulate various network conditions using the `sauce:throttle` custom command:

```javascript
// Use a predefined network profile
await browser.execute('sauce:throttle', { condition: 'Good 3G' });

// Use custom network settings (download bytes/s, upload bytes/s, latency ms)
await browser.execute('sauce:throttle', { 
    condition: { download: 100000, upload: 50000, latency: 40 } 
});
```

### CPU Throttling

Simulate slower CPU conditions using the `sauce:throttleCpu` custom command:

```javascript
// Apply 4x CPU throttling (emulates mobile performance)
await browser.execute('sauce:throttleCpu', { rate: 4 });
```

| Setting | Description |
| ------- | ----------- |
| 1 | No throttling |
| 2 | 2x CPU throttling |
| 3 | 3x CPU throttling |
| 4 | 4x CPU throttling (emulates mobile performance) |

### Available Metrics

The following metrics are returned when calling `browser.execute('sauce:log', { type: 'sauce:performance' })`:

| Metric                   | Description                                                                                                                                                                                                                                                | Unit         |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `cumulativeLayoutShift`  | An aggregate of unexpected movement of content as a page loads. The score is calculated as the percentage of space impacted by the movement times the percentage of distance the content moved on the screen.                                              | percentage   |
| `domContentLoaded`       | The point at which visual content is fully rendered and backend scripts begin to execute.                                                                                                                                                                  | seconds      |
| `estimatedInputLatency`  | The amount of time the page takes to respond to user input.                                                                                                                                                                                                | milliseconds |
| `firstContentfulPaint`   | The time from when the page starts loading to when any part of the page's content is rendered on the screen. In this context, "content" can be text, images, elements, or canvas (non-white) elements. This does not mean that the page is fully rendered. | seconds      |
| `firstMeaningfulPaint`   | <span className="sauceRed">DEPRECATED</span> The amount of time it takes for a page's primary body of content to render. This metric is replaced by `largestContentfulPaint`.                                                                              | seconds      |
| `firstPaint`             | The time it takes to render the first pixel on the page once the URL has been called.                                                                                                                                                                      | seconds      |
| `firstVisualChange`      | The time it takes for anything to be visually painted in the viewport. Calculated by video analysis, this is an alternative metric to `firstPaint` that is browser agnostic.                                                                               | seconds      |
| `largestContentfulPaint` | The amount of time it takes for the page's largest visual element to display. This metric is considered a more accurate reflection of when the main content of a page has loaded.                                                                          | seconds      |
| `lastVisualChange`       | The amount of time it takes for the final visual element to display.                                                                                                                                                                                       | seconds      |
| `load`                   | The amount of time it takes for all page objects and dependent resources to be loaded.                                                                                                                                                                     | seconds      |
| `serverResponseTime`     | Formerly `timeToFirstByte`, this is the amount of time it takes to receive the first data response from the server.                                                                                                                                        | milliseconds |
| `speedIndex`             | The average time is takes the contents of a page to fully render.                                                                                                                                                                                          | seconds      |
| `timeToFirstInteractive` | The amount of time it takes for a page to be able to reliably respond to user input.                                                                                                                                                                       | seconds      |
| `totalBlockingTime`      | The amount of time that elapses between `firstContentfulPaint` and `timeToFirstInteractive`, which is a key indicator of lag.                                                                                                                              | seconds      |

#### Detailed Metric Values

Detailed metric values can be found in the performance logs when using `fullReport: true`.
The full report includes the following additional metrics:

| Metric                             | Description                                                                                                                                                                                                                                                | Unit         |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `rrt`                              | The time it takes for any redirects to happen.                                                                                                                                                                                                             | milliseconds |
| `load`                             | The amount of time it takes for all page objects and dependent resources to be loaded.                                                                                                                                                                     | milliseconds |
| `score`                            | The overall Lighthouse performance score.                                                                                                                                                                                                                  | percentage   |
| `maxRtt`                           | The maximum amount of time it takes for any redirects to happen.                                                                                                                                                                                           | milliseconds |
| `numFonts` / `fontCount`           | The number of fonts for the webpage to render.                                                                                                                                                                                                             | number       |
| `numTasks`                         | Total number of tasks run by a browser during a request.                                                                                                                                                                                                   | number       |
| `numTasksOverXms`                  | Total number of tasks run by a browser during a request that took more than X milliseconds.                                                                                                                                                                | milliseconds |
| `fontSize`                         | Size of the rendered fonts.                                                                                                                                                                                                                                | bytes        |
| `firstPaint`                       | The time it takes to render the first pixel on the page once the URL has been called.                                                                                                                                                                      | milliseconds |
| `imageSize`                        | Size of all loaded images.                                                                                                                                                                                                                                 | bytes        |
| `numScripts`                       | Number of external scripts found while rendering page.                                                                                                                                                                                                     | number       |
| `speedIndex`                       | The average time is takes the contents of a page to fully render.                                                                                                                                                                                          | milliseconds |
| `throughput`                       | Network throughput measured during the test run.                                                                                                                                                                                                           | bytes        |
| `imageCount`                       | Number of rendered images.                                                                                                                                                                                                                                 | number       |
| `numRequests` / `requestsCount`    | Number of requests to the server.                                                                                                                                                                                                                          | number       |
| `requestsSize`                     | The overall request size.                                                                                                                                                                                                                                  | bytes        |
| `documentSize` / `totalByteWeight` | Overall document size.                                                                                                                                                                                                                                     | bytes        |
| `totalTaskTime`                    | The amount of time it takes to fulfill all the scheduled tasks.                                                                                                                                                                                            | milliseconds |
| `numStylesheets`                   | Number of stylesheets rendered.                                                                                                                                                                                                                            | number       |
| `domContentLoaded`                 | The point at which visual content is fully rendered and backend scripts begin to execute.                                                                                                                                                                  | milliseconds |
| `firstInteractive`                 | The amount of time it takes for a page to be able to reliably respond to user input.                                                                                                                                                                       | milliseconds |
| `lastVisualChange`                 | The amount of time it takes for the final visual element to display.                                                                                                                                                                                       | milliseconds |
| `maxServerLatency`                 | The maximum amount of time it takes for the server to respond.                                                                                                                                                                                             | milliseconds |
| `firstVisualChange`                | The time it takes for anything to be visually painted in the viewport. Calculated by video analysis, this is an alternative metric to `firstPaint` that is browser agnostic.                                                                               | milliseconds |
| `totalBlockingTime`                | The amount of time that elapses between `firstContentfulPaint` and `timeToFirstInteractive`, which is a key indicator of lag.                                                                                                                              | milliseconds |
| `serverResponseTime`               | Formerly `timeToFirstByte`, this is the amount of time it takes to receive the first data response from the server.                                                                                                                                        | milliseconds |
| `firstContentfulPaint`             | The time from when the page starts loading to when any part of the page's content is rendered on the screen. In this context, `content` can be text, images, elements, or canvas (non-white) elements. This does not mean that the page is fully rendered. | milliseconds |
| `firstMeaningfulPaint`             | <span className="sauceRed">DEPRECATED</span> The amount of time it takes for a page's primary body of content to render. This metric is replaced by `largestContentfulPaint`.                                                                              | milliseconds |
| `cumulativeLayoutShift`            | An aggregate of unexpected movement of content as a page loads. The score is calculated as the percentage of space impacted by the movement times the percentage of distance the content moved on the screen.                                              | percentage   |
| `largestContentfulPaint`           | The amount of time it takes for the page's largest visual element to display. This metric is considered a more accurate reflection of when the main content of a page has loaded.                                                                          | milliseconds |
| `mainDocumentTransferSize`         | The transfer size of the main HTML document.                                                                                                                                                                                                               | bytes        |

### Network Conditions Settings

The following profiles can be used with the `sauce:throttle` custom command to simulate various network conditions for 
your test.

| Profile               | Latency | Downstream  | Upstream    |
| --------------------- | ------- | ----------- | ----------- |
| `Regular 2G`          | 300ms   | 31.25 KB/s  | 6.25 KB/s   |
| `Regular 3G`          | 100ms   | 93.75 KB/s  | 31.25 KB/s  |
| `Good 2G`             | 150ms   | 56.25 KB/s  | 18.75 KB/s  |
| `Good 3G`             | 40ms    | 192.00 KB/s | 93.75 KB/s  |
| `Regular 4G`(default) | 20ms    | 512.00 KB/s | 384.00 KB/s |
| `DSL`                 | 5ms     | 256.00 KB/s | 128.00 KB/s |
| `WiFi`                | 2ms     | 3.75 MB/s   | 1.88 MB/s   |
| `online`              | N/A     | N/A         | N/A         |
| `offline`             | 0       | 0           | 0           |

#### Network Throttling Examples

You can configure your test to run under the network condition of a predefined profile from the table:

```javascript
// Using a predefined profile
await browser.execute('sauce:throttle', { condition: 'online' });
```

Alternatively, you can specify custom values with download, upload (in bytes/second), and latency (in ms):

```javascript
// Using custom network settings
await browser.execute('sauce:throttle', { 
    condition: { download: 1000 * 1024, upload: 500 * 1024, latency: 40 } 
});
```

### CPU Settings

The following profiles can be used with the `sauce:throttleCpu` custom command to simulate various load conditions 
for your test.

| Setting | CPU Condition                                                 |
| ------- | ------------------------------------------------------------- |
| 1       | No throttling                                                 |
| 2       | 2x CPU throttling                                             |
| 3       | 3x CPU throttling                                             |
| 4       | 4x CPU throttling (default)<br/>_Emulates mobile performance_ |

#### CPU Throttling Example

```javascript
// Apply 2x CPU throttling
await browser.execute('sauce:throttleCpu', { rate: 2 });
```
