---
id: network-capture
title: Network Traffic Capture
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><small><span className="sauceGreen">Real Devices Only</span></small></p>

Network Traffic Capture is a feature that allows you to record and analyze HTTP/HTTPS network traffic, during mobile app tests on real Android and iOS/iPadOS devices.
This functionality provides detailed insights into how an app interacts with network services, making it an essential tool for debugging,
performance optimization, and identifying issues in the app's data exchange processes. By capturing network traffic, users can pinpoint
the exact moment and nature of a failure, such as identifying requests that time out, pinpointing requests that slow down the loading process,
or locating faulty API calls. This enables quicker resolution and ensures a more precise assignment of responsibility when passed on to developers.

The captured traffic is presented in the [HTTP Archive (HAR) file format](<https://en.wikipedia.org/wiki/HAR_(file_format)>), which offers a
comprehensive view of the request and response cycles, including headers, payloads, and timings, enabling in-depth troubleshooting and performance analysis.

In combination with our [Network Throttle](/mobile-apps/features/network-throttling/) functionality to simulate various network scenarios,
you have the tools to replicate and troubleshoot any performance concerns stemming from network operations.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- A native Android, iOS, or iPadOS mobile app that makes HTTP/HTTPS requests.

## System-wide Network Capture

Our system-wide network capture feature enhances network monitoring by capturing all HTTP/HTTPS requests made from the device, offering
visibility beyond just a single app or service. It works seamlessly regardless of the app’s framework or if it’s a hybrid application.
This comprehensive approach provides a holistic view of network activity, giving you deeper insights into how various components of the
device interact with external services. To ensure the captured data remains relevant and manageable, our system filters out some OS-specific
services that can otherwise create unnecessary noise.

On iOS/iPadOS devices, this feature works seamlessly without requiring any [resigning](/mobile-apps/automated-testing/ipa-files/#sauce-labs-resigning-enablements)
or changes to the app, making it simple and efficient to use.

For Android devices, a minor modification in the manifest is necessary, but all required changes will be handled by us. This means no
complete resigning or additional instrumentation is needed, ensuring a smooth feature enablement.


### Accessing Network Traffic in real-time (Live Testing)

To be able to observe network traffic in real-time:

1. Navigate to **Live** -> **Mobile App**/**Cross Browser**
2. Choose device and start a session
3. In the live test window, in the left toolbar, open the **Developer Options** and select the **Network tab**.

<img src={useBaseUrl('img/mobile-apps/network-capture-1.png')} alt="Select Developer Options" width="700"/>

4. Start the network capture.
   
<img src={useBaseUrl('img/mobile-apps/network-capture-2.png')} alt="Start capture" width="700"/>

5. Inspect network logs as they arrive.
 
<img src={useBaseUrl('img/mobile-apps/network-capture-3.png')} alt="Inspect network logs" width="700"/>

### Sauce Labs Network Viewer
The [Sauce Labs Network Viewer](https://github.com/saucelabs/network-viewer) is a visualization tool for HAR files that presents requests
in a table view with a range of advanced filtering options.

#### Pause / Resume
Pause and resume the display of new network traffic without affecting the **network.har** test asset.
The final **network.har** file contains all network traffic from the moment the network capture was initiated and will be available after the
session is closed.
<img src={useBaseUrl('img/mobile-apps/network-capture-pause-resume.png')} alt="Inspect network logs" width="700"/>

#### Reset
Clear the current state of network logs from the inspector. This does not affect the final **network.har** test asset.
<img src={useBaseUrl('img/mobile-apps/network-capture-reset.png')} alt="Inspect network logs" width="700"/>

#### Export HAR file
Download the current state of network logs from the inspector in HAR format. This is helpful for capturing a specific part of the test flow
with a network issue, making it easier to share with developers for debugging.
<img src={useBaseUrl('img/mobile-apps/network-capture-export.png')} alt="Inspect network logs" width="700"/>

#### Filter by status
Use the status filter dropdown list to filter network logs based on their status code.
<img src={useBaseUrl('img/mobile-apps/network-capture-status-filter.png')} alt="Inspect network logs" width="700"/>

#### Search by URL
Search for specific network logs using the request URL.
<img src={useBaseUrl('img/mobile-apps/network-capture-search.png')} alt="Inspect network logs" width="700"/>

#### Filter by content type
Filter requests by their content type by selecting the desired category from the options available.
<img src={useBaseUrl('img/mobile-apps/network-capture-type-filter.png')} alt="Inspect network logs" width="700"/>

#### Requests table
The main table displays all captured requests with the following columns:
* Path: The name of the request. Hover over it to view the full resource, including the domain name.
* Domain: The domain of the request.
* Status: The HTTP/HTTPS status code.
* Method: The HTTP/HTTPS method used.
* Type: The MIME type of the requested resource.
* Size: The total size of the response headers plus the response body, as delivered by the server.
* Time: The total duration from the start of the request to the receipt of the final byte in the response.
* Waterfall: A visual representation of the timeline for all network requests.

Each request is color-coded based on their state. Red entries indicate errors with status codes of 400 or higher, while light grey entries
represent still pending requests.
<img src={useBaseUrl('img/mobile-apps/network-capture-request-table.png')} alt="Inspect network logs" width="700"/>

#### Waterfall chart
The Waterfall chart shows the request lifecycle, with detailed timing information when hovering over the chart.
This helps to gain a deeper understanding of the request's timeline.
<img src={useBaseUrl('img/mobile-apps/network-capture-waterfall.png')} alt="Inspect network logs" width="700"/>

#### Request details
Clicking on a specific request opens the Request Details view, which includes general information about the request, along with the request and
response headers, and the request and response payloads.
<img src={useBaseUrl('img/mobile-apps/network-capture-request-details.png')} alt="Inspect network logs" width="700"/>

#### Stats Row
The Stats row in the footer provides details on the number of requests, transferred data size, resource sizes, and time metrics such as
Page Load, DOMContentLoaded, and Finished time.
<img src={useBaseUrl('img/mobile-apps/network-capture-stats-row.png')} alt="Inspect network logs" width="700"/>

### Limitations
:::note Limitations

- iOS network capture is supported on iOS/iPadOS 14.0 and above.
- Android network capture is supported on Android 10 and above.
- Only HTTP/HTTPS network traffic is captured.

:::

## Accessing HAR Files (Live and Automated Testing)

To download HAR files from Sauce Labs:

1. Navigate to **Test Results**.
2. Select the applicable test.
3. Click the **Network** tab on the right panel to preview all captured network requests.

You can also download a HAR file programmatically using the following API request:

<Tabs
groupId="dc-url"
defaultValue="us"
values={[
{label: 'United States', value: 'us'},
{label: 'Europe', value: 'eu'},
]}>

<TabItem value="us">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/v1/rdc/jobs/{JOB_ID}/network.har'
```

</TabItem>

<TabItem value="eu">

```jsx title="Sample Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.eu-central-1.saucelabs.com/v1/rdc/jobs/{JOB_ID}/network.har'
```

</TabItem>
</Tabs>

## Instrumented Network Traffic Capture

:::note Android Only

For Android applications, a minor modification in the manifest is necessary to disable SSL pinning and accept our own certificate by your application.
In addition, we require the debug version of the application. If your application includes SecureSDK, please ensure the repackaging prevention feature is disabled.

:::

To enable network traffic capturing in your tests:

1. On Sauce Labs, click **Live** > **Mobile App**.
2. Upload your mobile app to Sauce Labs [through our UI](/mobile-apps/app-storage/#uploading-apps-via-ui) or [our REST API](/mobile-apps/app-storage/#uploading-apps-via-rest-api).
3. After you’ve uploaded your app, return to the **Live** > **Mobile App** page, hover your mouse over your app, then select **Settings**.<br/><img src={useBaseUrl('img/mobile-apps/networkcapturescr.png')} alt="Mobile app settings navigation" width="600"/>
4. Under **Default Settings**, toggle Instrumentation and Network Capture to enable the feature.<br/><img src={useBaseUrl('img/mobile-apps/networkcapturescr2.png')} alt="Mobile app settings navigation" width="800"/>
5. For Automated Testing only: add the networkCapture capability to your test script. Click the link below corresponding to your framework:

    - [Appium](/dev/test-configuration-options/#networkcapture)
    - [Espresso via saucectl](/mobile-apps/automated-testing/espresso-xcuitest/espresso/#networkcapture)
    - [XCUITest via saucectl](/mobile-apps/automated-testing/espresso-xcuitest/xcuitest/#networkcapture)

:::note Coming soon

System-wide network capture for Automated Testing will be available soon.

:::

Now you can start your live or automated testing session. Your network logs will be captured and displayed in the test results page as well as during a Live Testing session with the Developer Options window.

### Limitations

<!-- prettier-ignore -->
:::note Not Supported

- Android Emulators
- iOS Simulators
- Android Chrome Browser in automated tests
- iOS Safari Browser in automated tests

:::

#### Android

Our network capture feature depends on the fact that these classes are not obfuscated:

[OkHTTP](https://square.github.io/okhttp/)

- okhttp3.Interceptor
- okhttp3.OkHttpClient
- okhttp3.Request
- okhttp3.Response
- okhttp3.ResponseBody
- okio.Buffer

[Volley](https://github.com/google/volley)

- com.android.volley.AuthFailureError
- com.android.volley.NetworkResponse
- com.android.volley.Request
- com.android.volley.RequestQueue
- com.android.volley.Response

#### iOS

- Network capture works if the app uses [NSURLSession](https://developer.apple.com/documentation/foundation/nsurlsession) or a library (like [Alamofire](https://github.com/Alamofire/Alamofire) or [AFNetworking](https://github.com/AFNetworking/AFNetworking)) that uses NSURLSession inside.
- Calls made by [NSURLConnection](https://developer.apple.com/documentation/foundation/nsurlconnection) (deprecated by Apple), will not be captured.


## More Information

- [Network Throttling](/mobile-apps/features/network-throttling)
- [Sauce Labs Test Results](/test-results)
- [Sauce Labs Insights](/insights)
- [Visualize HAR Files With The New React Network Viewer Component](https://opensource.saucelabs.com/blog/react_network_viewer)

### Viewing HAR Files

You need a HAR viewer to read HAR files. Sauce Labs provides a [React Network Viewer](https://opensource.saucelabs.com/network-viewer/) HAR
viewer for your convenience.

Alternatively, some other commonly used HAR viewers include:

- [Charles Proxy](https://www.charlesproxy.com/)
- [Telerik Fiddler](https://www.telerik.com/fiddler)
- Chrome DevTools builtin [HAR imports](https://developer.chrome.com/blog/new-in-devtools-62/#har-imports)
- Google Admin Toolbox [HAR Analyzer](https://toolbox.googleapps.com/apps/har_analyzer/)
- Software is Hard blog [HTTP Archive Viewer](http://www.softwareishard.com/har/viewer/)
- Firefox network monitoring builtin [HAR imports](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html)
