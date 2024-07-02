---
id: network-throttling
title: Network Throttling
sidebar_label: Network Throttling
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><small><span className="sauceGreen">Real Devices Only</span></small></p>

With Sauce Labs Network Throttling, you can simulate and reproduce different network scenarios on iOS and Android, ensuring that your mobile application performs optimally under 
a huge variety of network conditions. From replicating slow network speeds to mimicking offline states, high latency, or connection disruptions,
this feature allows you to identify network-related performance issues early in your pipeline.

In combination with our [Network Traffic Capture](https://docs.saucelabs.com/mobile-apps/features/network-capture/) functionality to record network traffic,
you have the tools to replicate and troubleshoot any performance concerns stemming from network operations.

## What You'll Need

- A Sauce Labs paid account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/))
- Access to our Real Devices (iOS/Android)

## Supported Network Conditions

The following table shows the allowed range of supported network condition parameters:

<table>
  <thead>
    <tr>
      <th>Network Condition</th>
      <th>Parameter</th>
      <th>Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Download speed</td>
      <td>downloadSpeed</td>
      <td>0 - 50000 kbps</td>
    </tr>
    <tr>
      <td>Upload speed</td>
      <td>uploadSpeed</td>
      <td>0 - 50000 kbps</td>
    </tr>
    <tr>
      <td>Latency</td>
      <td>latency</td>
      <td>0 - 3000 ms</td>
    </tr>
    <tr>
      <td>Packet loss</td>
      <td>loss</td>
      <td>0 - 100 %</td>
    </tr>
  </tbody>
</table>

Only specified parameters will undergo conditioning, allowing for flexibility in customizing network simulations to your precise testing needs.

## Predefined Network Profiles

The following table shows the predefined network profiles along with their corresponding parameter values supported on Sauce Labs:

<table>
  <thead>
    <tr>
      <th>Network Profile</th>
      <th>ID</th>
      <th>Download Speed (kbps)</th>
      <th>Upload Speed (kbps)</th>
      <th>Latency (ms)</th>
      <th>Packet Loss (%)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>No Throttling</td>
      <td>no-throttling</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>No Network</td>
      <td>no-network</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>100</td>
    </tr>
    <tr>
      <td>2G Packet Loss</td>
      <td>2G-packet-loss</td>
      <td>100</td>
      <td>50</td>
      <td>500</td>
      <td>10</td>
    </tr>
    <tr>
      <td>2G</td>
      <td>2G</td>
      <td>200</td>
      <td>100</td>
      <td>300</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3G Slow</td>
      <td>3G-slow</td>
      <td>500</td>
      <td>250</td>
      <td>200</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3G Fast</td>
      <td>3G-fast</td>
      <td>7000</td>
      <td>2500</td>
      <td>100</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4G Slow</td>
      <td>4G-slow</td>
      <td>8000</td>
      <td>4000</td>
      <td>100</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4G Fast</td>
      <td>4G-fast</td>
      <td>25000</td>
      <td>15000</td>
      <td>30</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

## Automated Testing

### Appium
To use the Sauce Labs Network Throttling feature in your automated Appium test, you can add the sauce-specific capability
[networkConditions](https://docs.saucelabs.com/dev/test-configuration-options/#networkconditions) to provide custom network conditions for
the entire session.
Alternatively, you can use the sauce-specific capability [networkProfile](https://docs.saucelabs.com/dev/test-configuration-options/#networkprofile)
to apply one of the predefined network profiles to your session.

```java
MutableCapabilities capabilities = new MutableCapabilities();
//...
MutableCapabilities sauceOptions = new MutableCapabilities();

// network conditions
sauceOptions.setCapability("networkConditions", ImmutableMap.of(
    "downloadSpeed", 5000,
    "uploadSpeed", 3000,
    "latency", 200,
    "loss", 2,
));

// OR

// network profile
sauceOptions.setCapability("networkProfile", "2G");
        
capabilities.setCapability("sauce:options", sauceOptions);
```

To change your desired network conditions dynamically any time during your automated Appium test, use our sauce-specific scripts for `((JavascriptExecutor)driver).executeScript`.

```java title="Network Condition
driver.executeScript("sauce:network-conditions", ImmutableMap.of(
    "downloadSpeed", 5000,
    "uploadSpeed", 3000,
    "latency", 200,
    "loss", 2,
));
```

```java title="Network Profile
driver.executeScript("sauce:network-profile", "4G-fast");
```

## Live Testing
Apply network throttling dynamically to your manual Live tests by selecting a predefined profile or by providing network conditions. 

1. In the live test window, in the left toolbar, click **Throttle Network** to open the network throttling tool.

<img src={useBaseUrl('img/mobile-apps/throttle-network-1.png')} alt="Throttle Network tool" width="650"/>

2. Select a predefined profile from the dropdown to start the network throttling.

<img src={useBaseUrl('img/mobile-apps/throttle-network-2.png')} alt="Throttle Network profile selection" width="650"/>

An active network throttling is indicated by the **pulsing red dot** on the top left of the **Throttle Network** tool.

<img src={useBaseUrl('img/mobile-apps/throttle-network-3.png')} alt="Throttle Network profile selection" width="650"/>

3. Click on the **pulsing red dot** to **pause** the network throttling. A paused throttling is indicated by the **pause icon**.

<img src={useBaseUrl('img/mobile-apps/throttle-network-4.png')} alt="Throttle Network profile selection" width="650"/>

## Upcoming

* Apply network throttling to your native Espresso and XCUITest tests


## Limitations
:::note Limitations

- iOS network throttling is supported on iOS/iPadOS 14.0 and above.
- Android network throttling is supported on Android 10 and above.

:::


## More Information

- Use [Network Capture](https://docs.saucelabs.com/mobile-apps/features/network-capture/) to debug the failures in the app.
- Check out the [Java Appium examples](https://github.com/saucelabs-training/demo-java/tree/main/appium/appium-app/appium-app-examples/src/test/java/com/examples/network_throttling) for iOS and Android.
