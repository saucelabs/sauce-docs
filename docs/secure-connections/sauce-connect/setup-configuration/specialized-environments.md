---
id: specialized-environments
title: Specialized Environment Setups
sidebar_label: Specialized Environment Setups
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
  - We recommend setting these values as [environment variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/) to protect your username and api key from exposure, and also for future convenience.
- The name of your closest regional Sauce Labs Data Center (see the [SC CLI](/dev/cli/sauce-connect-proxy/#--region) and [Data Center Endpoints](/basics/data-center-endpoints/).
- For the Docker Setup, you'll need to have [Docker installed and configured](https://docs.docker.com/get-docker/).

## Real Device Cloud Setup

Real Device Cloud on Sauce Labs offers public and private mobile devices for users looking to expedite automated and live testing for their mobile apps. You can run a high volume of tests across a broad range of real devices without compromising performance, quality, or reliability.

With Sauce Connect Proxy, you’ll have a secure tunnel for testing apps and websites on your local machine (or behind a firewall) against devices and browsers in the Sauce Labs Real Device Cloud.

### Security Considerations

#### Restricting Tunnel Deployment to Organization Admins

If you'd like to restrict Sauce Connect Proxy tunnel deployment to organization admins only, follow the steps in [Security Settings](/basics/acct-team-mgmt/org-settings) to only allow organization admins to start Sauce Connect Proxy tunnels.

#### Testing with Public Devices

In order to begin running tests on public devices using Sauce Connect Proxy or IPSec VPN, your organization admin must enable this option in their settings. Follow the steps in [Security Settings](/basics/acct-team-mgmt/org-settings) to enable Sauce Connect Proxy/VPN for public cloud devices.

Once the setting is enabled, all users across your organization can run live and automated tests on public devices over Sauce Connect Proxy or IPSec VPN. Each time you initiate a test, you'll see a temporary pop-up alert window with a reminder that the utilization of a trusted Sauce Connect Proxy or IPSec VPN connection combined with RDC public real device tests may not be compliant with your organization's network policy.

#### Testing Mobile Devices Against `localhost`

Testing with the address `localhost` (or the IP address `127.0.0.1`) is not supported with iOS or Android real devices in Sauce Connect Proxy.

To work around this, you'll need to edit your `hosts` file on the machine on which you are running Sauce Connect Proxy. Add an entry for a placeholder hostname (such as `localtestsite`) and the IP address `127.0.0.1`. Requests for `localtestsite` in your tests will then be sent through your Sauce Connect Proxy tunnel to `localhost`, which is the machine on which you are running Sauce Connect Proxy.

For example, adding `127.0.0.1   mockserver` to your `/etc/hosts` file, then starting a server on `localhost:3333` will route mockserver:3333 HTTP calls to your local server. Mobile tests using Sauce Connect will then be able to find your local server regardless of the nature of your test.

For tips on how to edit your `hosts` file, see [How to Edit Hosts File in Linux, Windows, or Mac](https://phoenixnap.com/kb/how-to-edit-hosts-file-in-windows-mac-or-linux).

#### SSL Bumping

While rare, there are some test cases that will require you to disable SSL Bumping when using Sauce Connect Proxy to avoid certificate issues. For more information, see [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication).

### Selecting the Tunnel to Use

Sauce Connect Proxy can have multiple tunnels running simultaneously, as described in [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability). You can select which tunnel to use in a real device test in the same way as you would any other type of automated test.

1. Start Sauce Command Proxy from the command line, using the [`-u (--user)`](/dev/cli/sauce-connect-proxy/#--user), [`-k (--api-key)`](/dev/cli/sauce-connect-proxy/#--api-key), [`-r (--region`)](/dev/cli/sauce-connect-proxy/#--region), and [`--tunnel-name`](/dev/cli/sauce-connect-proxy/#--tunnel-name) flags.

```bash
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -r $SAUCE_DATA_CENTER --tunnel-name $TUNNEL_NAME
```

In this example, we'll [set our credentials (username/access key) as environment variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/), start a tunnel in US West Data Center and name the tunnel `rdc-on-sauce-tunnel-us`.

```bash
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -r us-west --tunnel-name rdc-on-sauce-tunnel-us
```

:::note Note for Android Devices
If you set up the tunnel for Android Devices, you must start Sauce Connect Proxy with the `-B all` flag:

```bash
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -r $SAUCE_DATA_CENTER --tunnel-name $TUNNEL_NAME -B all
```

You need to include the -B all flag because, by default, traffic on Sauce Connect is re-encrypted using Sauce Labs' self-signed certificates. While this can be trusted on Sauce Labs Virtual Cloud and Sauce Labs iOS devices, due to security specifications by Google, the same can't be done on Android.

If you add `-B`, Sauce Labs uses your server certificates, and if the certificate is self-signed, you face the same issue again. For native applications, the workaround is injecting your self-signed certificate into the app. You can learn more on [Network Security Configuration in the Android Developers documentation](https://developer.android.com/training/articles/security-config).
:::

2. In your device testing script, specify the tunnel name with `tunnelName` in your capabilities, as shown in this Java example:

```java
final DesiredCapabilities capabilities = new DesiredCapabilities();
    capabilities.setCapability("username", System.getenv("SAUCE_USERNAME"));
    capabilities.setCapability("accessKey", System.getenv("SAUCE_ACCESS_KEY"));
    capabilities.setCapability("platformName", "Android");
    capabilities.setCapability("platformVersion,"  "81.0");
    capabilities.setCapability("deviceName", "Samsung_Galaxy_Note_5_real"); // Will only run on the specified device
    capabilities.setCapability("tunnelName", "rdc-on-sauce-tunnel-us");
final AndroidDriver driver = new AndroidDriver(new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);
```

### Selecting the Right Data Center Endpoint

By default, Sauce Labs will automatically connect you to the main US-West-1 Data
Center. For information on Sauce Connect Proxy endpoints, see the
[Sauce Connect Proxy CLI documentation](/dev/cli/sauce-connect-proxy/#--region)
and [Data Center Endpoints](/basics/data-center-endpoints).

At present, real device testing is supported in the following data centers:

- US West Data Center (`us-west`)
- EU Central Data Center (`eu-central`)

:::note
Once you establish a Sauce Connect Proxy tunnel for real device testing, you can also use it for virtual devices (and vice versa).
:::

#### OnDemand Endpoint Examples for Driver Setup

To ensure you're testing against the correct data center, you'll need to add the correct OnDemand endpoint when you instantiate a MobileDriver in your automated test:

<Tabs
defaultValue="US Data Center"
values={[
{label: 'US Data Center', value: 'US Data Center'},
{label: 'EU Data Center', value: 'EU Data Center'},
]}>

<TabItem value="US Data Center">

Driver Setup for US Data Center (Java)

```java
final AndroidDriver driver = new AndroidDriver(new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);
```

</TabItem>

<TabItem value="EU Data Center">

Driver Setup for EU Data Center (Java)

```java
final AndroidDriver driver = new AndroidDriver(new URL("https://ondemand.eu-central-1.saucelabs.com/wd/hub"), capabilities);
```

</TabItem>
</Tabs>

## API Testing Setup

See [API Testing with Sauce Connect Proxy](/api-testing/sauce-connect/) to learn how to start a tunnel for API Testing.
