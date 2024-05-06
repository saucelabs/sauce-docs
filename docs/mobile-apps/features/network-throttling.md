---
id: network-throttling
title: Network Throttling
sidebar_label: Network Throttling
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><small><span className="sauceGreen">Real Devices Only</span></small></p>

With Sauce Labs Network Throttling, you can apply network conditions to do fancy network stuff during live and automated testing.

## What You'll Need

- A Sauce Labs paid account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/))
- A native Android, iOS, or iPadOS mobile app.

## Supported Network Conditions

Table with conditions and allowed range.

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

## Predefined Network Profiles

Funky list of predefined profiles with their specific network conditions in a table.

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

## Appium Capability for entire session
[Appium Capability networkProfile](https://docs.saucelabs.com/dev/test-configuration-options/#network-profile)

## Mid-Session Appium


## Live Testing


## Native Testing Frameworks


## More Information

Something about network capture

- [Network Capture](https://docs.saucelabs.com/mobile-apps/features/network-capture/)
