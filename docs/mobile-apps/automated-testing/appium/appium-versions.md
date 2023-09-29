---
id: appium-versions
title: Appium Versions
sidebar_label: Appium Versions
description: Appium Versions and EOL strategy.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning Appium 1 End-of-life
The Appium core team does not maintain Appium 1.x anymore since the [1st of January 2022](https://github.com/appium/appium). Recent versions of all officially supported platform drivers are no longer compatible with Appium 1.x, and require Appium 2 to run.

Sauce Labs still supports Appium 1.x (check our [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) to see which Appium 1 versions are available), but we recommend migrating to Appium 2.
:::

## Real Devices

## Appium 2.x

<table>
    <thead>
        <tr>
            <th>Appium Version</th>
            <th>EOL Date</th>
            <th>Notes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>latest</code></td>
            <td>-</td>
            <td>
                This will hold a collection of drivers that are compatible with the latest Appium server and driver versions that are installed in our cloud. We try to keep versions up to date every two weeks. You can find the exact versions in the first 20 log lines of the Appium logs of your executed test by going to <code>Test Details page > Logs > Appium Logs</code>
            </td>
        </tr>
        <tr>
            <td><code>2.0.0</code></td>
            <td><strong>January 30th, 2024</strong></td>
            <td>
                This was the "old" alias for getting the latest Appium 2 drivers that were installed in the Sauce Labs Real Device Cloud. This alias is deprecated due to being unclear and is replaced by <code>latest</code>.<br />
                The alias <code>2.0.0</code> is a collection of the following drivers<br/>
                <ul>
                    <li><a href="https://github.com/appium/appium/releases/tag/appium%402.0.1" target="_blank"><code>appium</code>: 2.0.1</a></li>
                    <li><a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.20.2" target="_blank"><code>appium-flutter-driver</code>: 1.20.2</a></li>
                    <li><a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.29.4" target="_blank"><code>appium-uiautomator2-driver</code>: 2.29.4</a></li>
                    <li><a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.33.2" target="_blank"><code>appium-xcuitest-driver</code>: 4.33.2</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>appium2-20231001</code></td>
            <td><strong>September 30th, 2024</strong></td>
            <td>
                This is a collection of drivers that were released in October 1st 2023<br/>
                <ul>
                    <li><a href="https://github.com/appium/appium/releases/tag/appium%402.1.3" target="_blank"><code>appium</code>: 2.1.3</a></li>
                    <li><a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.21.1" target="_blank"><code>appium-flutter-driver</code>: 1.21.1</a></li>
                    <li><a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.29.5" target="_blank"><code>appium-uiautomator2-driver</code>: 2.29.5</a></li>
                    <li><a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.35.0" target="_blank"><code>appium-xcuitest-driver</code>: 4.35.0</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>appium2-20230901</code></td>
            <td><strong>August 31st, 2024</strong></td>
            <td>
                This is a collection of drivers that were released in September 1st 2023<br/>
                <ul>
                    <li><a href="https://github.com/appium/appium/releases/tag/appium%402.1.3" target="_blank"><code>appium</code>: 2.1.3</a></li>
                    <li><a href="https://github.com/appium/appium-flutter-driver/releases/tag/v1.21.1" target="_blank"><code>appium-flutter-driver</code>: 1.21.1</a></li>
                    <li><a href="https://github.com/appium/appium-uiautomator2-driver/releases/tag/v2.29.5" target="_blank"><code>appium-uiautomator2-driver</code>: 2.29.5</a></li>
                    <li><a href="https://github.com/appium/appium-xcuitest-driver/releases/tag/v4.35.0" target="_blank"><code>appium-xcuitest-driver</code>: 4.35.0</a></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

### Appium 1.x

| Appium Version                                                    | EOL Date                | Notes                                                              |
| ----------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------ |
| [`1.22.2`](https://github.com/appium/appium/releases/tag/v1.22.2) |                         |                                                                    |
| [`1.22.1`](https://github.com/appium/appium/releases/tag/v1.22.1) | **December 31st, 2023** | Update to 1.22.2 or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.22.0`](https://github.com/appium/appium/releases/tag/v1.22.0) | **December 31st, 2023** | Update to 1.22.2 or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.21.0`](https://github.com/appium/appium/releases/tag/v1.21.0) | **December 31st, 2023** | Update to 1.22.2 or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.20.1`](https://github.com/appium/appium/releases/tag/v1.20.1) | **December 31st, 2023** | Update to 1.22.2 or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.19.0`](https://github.com/appium/appium/releases/tag/v1.19.0) | **December 31st, 2023** | Update to 1.22.2 or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.18.1`](https://github.com/appium/appium/releases/tag/v1.18.1) | **December 31st, 2023** | Update to 1.22.2 or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.17.1`](https://github.com/appium/appium/releases/tag/v1.17.1) | **December 31st, 2023** | Update to 1.22.2 or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.17.0`](https://github.com/appium/appium/releases/tag/v1.17.0) | **December 31st, 2023** | Update to 1.22.2 or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.16.0`](https://github.com/appium/appium/releases/tag/v1.16.0) | **December 31st, 2023** | Update to 1.22.2 or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.15.1`](https://github.com/appium/appium/releases/tag/v1.15.1) | **December 31st, 2023** | Update to 1.22.2 or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.15.0`](https://github.com/appium/appium/releases/tag/v1.15.0) | **December 31st, 2023** | Update to 1.22.2 or [migrate to Appium 2](./appium-2-migration.md) |
| [`1.14.0`](https://github.com/appium/appium/releases/tag/v1.14.0) | **December 31st, 2023** | Update to 1.22.2 or [migrate to Appium 2](./appium-2-migration.md) |

## Android Emulators

## iOS Simulators
