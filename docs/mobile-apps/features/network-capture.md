---
id: network-capture
title: Network Traffic Capture
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Network Traffic Capture is a functionality that gives you the ability to record network traffic for HTTP/HTTPS requests during Android and iOS/iPadOS mobile app tests on real devices. This provides granular insight into your app’s behavior, facilitates debugging, and helps you determine which development team is responsible for application failure.

With this feature, traffic is recorded on our side and exposes the HAR file through your test’s endpoint, producing HTTP traffic information to help you troubleshoot.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- A native Android, iOS, or iPadOS mobile app that makes HTTP/HTTPS requests. We currently support the following:
  - Android 6.0 and higher
  - For Swift: iOS 11.0 and higher
  - For Objective-C: iOS (all)

## Using Network Traffic Capture

To enable network traffic capturing in your tests:

1. On Sauce Labs, click **Live** > **Mobile App**.
2. Upload your mobile app to Sauce Labs [through our UI](/mobile-apps/app-storage/#uploading-apps-via-ui) or [our REST API](/mobile-apps/app-storage/#uploading-apps-via-rest-api).
3. After you’ve uploaded your app, return to the **Live** > **Mobile App** page, hover your mouse over your app, then select **Settings**.<br/><img src={useBaseUrl('img/mobile-apps/networkcapturescr.png')} alt="Mobile app settings navigation" width="600"/>
4. Under **Default Settings**, toggle Instrumentation and Network Capture to enable the feature.<br/><img src={useBaseUrl('img/mobile-apps/networkcapturescr2.png')} alt="Mobile app settings navigation" width="800"/>
5. For Automated Testing only: add the networkCapture capability to your test script. Click the link below corresponding to your framework:

   - [Appium](/dev/test-configuration-options/#saucelabsnetworkcaptureenabled)
   - [Espresso via saucectl](/mobile-apps/automated-testing/espresso-xcuitest/espresso/#networkcapture)
   - [XCUITest via saucectl](/mobile-apps/automated-testing/espresso-xcuitest/xcuitest/#networkcapture)

Now you can start your live or automated testing session. Your network logs will be captured and displayed in the test results page as well as inside the live testing window.

## Accessing Network Traffic in Realtime (Live Testing)

To be able to observe network traffic in realtime:

1. Enable network capture for your app like described above. You can skip this step for cross browser testing.
2. Navigate to **Live** -> **Mobile App**/**Cross Browser**
3. Choose device and start a session.
4. Launch the network inspector

<img src={useBaseUrl('img/mobile-apps/network-capture-1.png')} alt="Select Developer Options" width="650"/>
<img src={useBaseUrl('img/mobile-apps/network-capture-2.png')} alt="Start capture" width="650"/>
<img src={useBaseUrl('img/mobile-apps/network-capture-3.png')} alt="Inspect network logs" width="650"/>

A copy of what you see in the inspector can be downloaded in HAR format with the following button.

<img src={useBaseUrl('img/mobile-apps/network-capture-4.png')} alt="Inspect network logs" width="650"/>

## Accessing HAR Files (Live and Automated Testing)

To download HAR files from Sauce Labs:

1. Navigate to **Test Results**.
2. Select the applicable test.
3. Click the **Network** tab in the bottom to preview network calls.
4. Click the **Logs** tab on the right panel and select **network.har** from the dropdown menu to download the report.

You can also download a HAR file programmatically using the following API request:

```curl
curl --compressed \
-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/network.har
```

### Viewing HAR Files

You'll need a HAR viewer to read HAR files. Sauce Labs provides a [React Network Viewer](https://opensource.saucelabs.com/network-viewer/) HAR viewer for your convenience. For step-by-step usage instructions, see our [Visualize HAR Files with the New React Network Viewer](https://opensource.saucelabs.com/blog/react_network_viewer/) blog article.

Alternatively, some other commonly used HAR viewers include:

- Chrome devtools builtin [HAR imports](https://developer.chrome.com/blog/new-in-devtools-62/#har-imports)
- Google Admin Toolbox [HAR Analyzer](https://toolbox.googleapps.com/apps/har_analyzer/)
- Software is Hard blog [HTTP Archive Viewer](http://www.softwareishard.com/har/viewer/)
- Firefox network monitoring builtin [HAR imports](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/toolbar/index.html)

## HAR Files

[HTTP Archive Format (HAR) files](<https://en.wikipedia.org/wiki/HAR_(file_format)>) collect all network requests and responses made and received by the browser during testing. HAR files offer useful debugging information, such as:

- Identifying browser requests that time out
- Pinpointing requests slowing down the loading process
- Locating faulty API calls

## Limitations

<!-- prettier-ignore -->
:::note Not Supported

- Android Emulators
- iOS Simulators
- Hybrid Applications in automated tests (React Native, Cordova, Flutter)
- Android Chrome Browser in automated tests
- iOS Safari Browser in automated tests

:::

### Android

Our network capture code depends on the fact that these classes are not obfuscated:

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

### iOS

- Network capture works if the app uses [NSURLSession](https://developer.apple.com/documentation/foundation/nsurlsession) or a library (like [Alamofire](https://github.com/Alamofire/Alamofire) or [AFNetworking](https://github.com/AFNetworking/AFNetworking)) that uses NSURLSession inside.
- Calls made by [NSURLConnection](https://developer.apple.com/documentation/foundation/nsurlconnection) (deprecated by Apple), will not be captured.

## More Information

- [Sauce Labs Test Results](/test-results)
- [Sauce Labs Insights](/insights)
