---
id: network-throttling
title: Network Throttling
sidebar_label: Network Throttling
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><small><span className="sauceGreen">Real Devices Only</span></small></p>
<p><small><span className="sauceGreen">iOS BETA</span></small></p>

With Sauce Labs Network Throttling, you can simulate and reproduce different network scenarios, ensuring that your mobile application performs optimally under 
a huge variety of network conditions. From replicating slow network speeds to mimicking offline states, high latency, or connection disruptions,
this feature allows you to identify network-related performance issues early in your pipeline.

In combination with our [Network Traffic Capture](https://docs.saucelabs.com/mobile-apps/features/network-capture/) functionality to record network traffic,
you have the tools to replicate and troubleshoot any performance concerns stemming from network operations.

## What You'll Need

- A Sauce Labs paid account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/))
- A native Android, iOS, or iPadOS mobile app.

## Supported Network Conditions

The following table shows the allowed range of supported network condition parameters:

<table>
  <thead>
    <tr>
      <th>Network Condition</th>
      <th>Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Download speed</td>
      <td>0 - 50000 kbps</td>
    </tr>
    <tr>
      <td>Upload speed</td>
      <td>0 - 50000 kbps</td>
    </tr>
    <tr>
      <td>Latency</td>
      <td>0 - 3000 ms</td>
    </tr>
    <tr>
      <td>Packet loss</td>
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
      <th>Download Speed (kbps)</th>
      <th>Upload Speed (kbps)</th>
      <th>Latency (ms)</th>
      <th>Packet Loss (%)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>no-throttling</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>no-network</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>100</td>
    </tr>
    <tr>
      <td>2G-packet-loss</td>
      <td>100</td>
      <td>50</td>
      <td>500</td>
      <td>10</td>
    </tr>
    <tr>
      <td>2G</td>
      <td>200</td>
      <td>100</td>
      <td>300</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3G-slow</td>
      <td>500</td>
      <td>250</td>
      <td>200</td>
      <td>1</td>
    </tr>
    <tr>
      <td>3G-fast</td>
      <td>7000</td>
      <td>2500</td>
      <td>100</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4G-slow</td>
      <td>8000</td>
      <td>4000</td>
      <td>100</td>
      <td>-</td>
    </tr>
    <tr>
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
[networkConditions](https://docs.saucelabs.com/dev/test-configuration-options/#network-conditions) to provide custom network conditions for
the entire session.
Alternatively, you can use the sauce-specific capability [networkProfile](https://docs.saucelabs.com/dev/test-configuration-options/#network-profile)
to apply one of the predefined network profiles to your session.

## Upcoming

* Change your desired network conditions dynamically any time during your automated Appium test
* Apply network throttling to your manual Live tests
* Apply network throttling to your Espresso and XCUITest tests

## Limitations
:::note Limitations

- iOS network throttling is supported on iOS/iPadOS 14.0 and above.

:::


## More Information

- [Network Capture](https://docs.saucelabs.com/mobile-apps/features/network-capture/)
