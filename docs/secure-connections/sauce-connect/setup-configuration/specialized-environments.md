---
id: specialized-environments
title: Specialized Environment Setup
sidebar_label: Specialized Environment Setup
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Real Device Cloud Setup

:::note
The content on this page applies to RDC on Sauce. For instructions on running Sauce Connect Proxy on our Legacy RDC platform (TestObject), see [Creating Tunnels in TestObject (Legacy)](/secure-connections/sauce-connect/setup-configuration/legacy-tunnels).
:::

Real Device Cloud on Sauce Labs (RDC on Sauce) offers public and private mobile devices for users looking to expedite automated and live testing for their mobile apps. You can run a high volume of tests across a broad range of real devices without compromising performance, quality, or reliability.

With Sauce Connect Proxy, you’ll have a secure tunnel for testing applications and websites on your local machine (or behind a firewall) against devices and browsers in the Sauce Labs Real Device Cloud.  

## What You'll Need
You must know your account details, including:

* Your Sauce Labs username and access key. On Sauce Labs, click **Account** and then click **User settings**.
* The Data Center endpoint associated with your geographic location

:::note
We recommend setting all of the values above as environment variables to protect your username and api key from exposure, and also for future convenience. See [Using Environment Variables for Authentication Credentials](/basics/environment-variables) for more information.
:::

## Security Considerations
### Restricting Tunnel Deployment to Organization Admins

If you'd like to restrict Sauce Connect Proxy tunnel deployment to organization admins only, follow the steps in [Security Settings](/basics/acct-team-mgmt/org-settings) to only allow organization admins to start Sauce Connect Proxy tunnels.

### Testing with Public Devices
In order to begin running tests on public devices using Sauce Connect Proxy or IPSec VPN, your organization admin must enable this option in their settings. Follow the steps in [Security Settings](/basics/acct-team-mgmt/org-settings) to enable Sauce Connect Proxy/VPN for public cloud devices.

Once the setting is enabled, all users across your organization can run live and automated tests on public devices over Sauce Connect Proxy or IPSec VPN. Each time you initiate a test, you'll see a temporary pop-up alert window with a reminder that the utilization of a trusted Sauce Connect Proxy or IPSec VPN connection combined with RDC public real device tests may not be compliant with your organization's network policy.

### Testing Mobile Devices Against `localhost`
Testing with the address `localhost` (or the IP address `127.0.0.1`) is not supported with iOS or Android real devices in Sauce Connect Proxy.

To work around this, you'll need to edit your hosts file on the machine on which you are running Sauce Connect Proxy. Add an entry for a dummy hostname (such as `localtestsite`) and the IP address `127.0.0.1`. Requests for `localtestsite` in your tests will then be sent through your Sauce Connect Proxy tunnel to `localhost`, which is the machine on which you are running Sauce Connect Proxy.

For tips on editing your hosts file, see [How To Edit Hosts File In Linux, Windows, or Mac](https://phoenixnap.com/kb/how-to-edit-hosts-file-in-windows-mac-or-linux)

### SSL Bumping
While rare, there are some test cases that will require you to disable SSL Bumping when using Sauce Connect Proxy in order to avoid certificate issues. For more information, see [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication).

## Selecting the Tunnel to Use
Sauce Connect Proxy can have multiple tunnels running simultaneously, as described in [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability). You can select which tunnel to use in a real device test in the same way as you would any other type of automated test.

1. Start Sauce Command Proxy from the command line, providing an `-i (--tunnel-identifer)` to start a new tunnel with that identifier (see [Sauce Connect Proxy CLI Reference](/dev/cli/sauce-connect-proxy.md) for more information).

```bash
bin/sc -u $SAUCE_RDC_USERNAME -k $SAUCE_RDC_ACCESS_KEY -x $SAUCE_DC_ENDPOINT -i $TUNNEL_ID
```

`SAUCE_RDC_USERNAME` refers to your Sauce Labs username, where:

* `SAUCE_RDC_ACCESS_KEY` refers to your Sauce Labs access key
* `SAUCE_DC` refers to the data center API endpoint
* `TUNNEL_ID` refers to the tunnel identifier

So an example would look like this:

```bash
$ /bin/sc -u $SAUCE_RDC_USERNAME -k $SAUCE_RDC_ACCESS_KEY -x 'https://us-west-1.saucelabs.com/rest/v1' -i rdc-on-sauce-tunnel-us
```

2. In your device testing script, specify the tunnel name with `tunnelIdentifier` in your desired capabilities, as shown in this Java example:

```js
final DesiredCapabilities capabilities = new DesiredCapabilities();
    capabilities.setCapability("username", System.getenv("SAUCE_RDC_USERNAME"));
    capabilities.setCapability("accessKey", System.getenv("SAUCE_RDC_ACCESS_KEY"));
    capabilities.setCapability("platformName", "Android");
    capabilities.setCapability("platformVersion,"  "81.0");
    capabilities.setCapability("deviceName", "Samsung_Galaxy_Note_5_real"); // Will only run on the specified device
    capabilities.setCapability("tunnelIdentifier", "rdc-on-sauce-tunnel-us");
final AndroidDriver driver = new AndroidDriver(new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);
```


## Selecting the Right Data Center Endpoint
By default, Sauce Labs will automatically connect you to the main US-West-1 Data Center. For Sauce Connect, you'll need to instead connect to a Sauce Labs REST API Endpoint (US, EU, or Headless) by adding it to your command line and placing an `-x` flag before it. For a list of these Sauce Connect-specific endpoints, see [Sauce Connect Proxy System and Network Requirements](/secure-connections/sauce-connect/system-requirements).

In the Sauce Connect Proxy code snippet below, you'll see '-x' followed by the the US Sauce Labs REST API endpoint, `https://saucelabs.com/rest/v1`.

<Tabs
  defaultValue="US Data Center"
  values={[
    {label: 'US Data Center', value: 'US Data Center'},
    {label: 'EU Data Center', value: 'EU Data Center'},
  ]}>

<TabItem value="US Data Center">

**Mac OSX / Linux Example**

```bash
$ /bin/sc -u $SAUCE_RDC_USERNAME -k $SAUCE_RDC_ACCESS_KEY -x 'https://saucelabs.com/rest/v1' -i rdc-on-sauce-tunnel-us
```

**Windows Example**

```bash
> \bin\sc -u %SAUCE_RDC_USERNAME% -k %SAUCE_RDC_ACCESS_KEY% -x 'https://saucelabs.com/rest/v1' -i rdc-on-sauce-tunnel-us
```

</TabItem>
<TabItem value="EU Data Center">

**Mac OSX / Linux Example**

```bash
$ /bin/sc -u $SAUCE_RDC_USERNAME -k $SAUCE_RDC_ACCESS_KEY -x 'https://eu-central-1.saucelabs.com/rest/v1' -i rdc-on-sauce-tunnel-eu
```

**Windows Example**

```bash
> \bin\sc -u %SAUCE_RDC_USERNAME% -k %SAUCE_RDC_ACCESS_KEY% -x 'https://eu-central-1.saucelabs.com/rest/v1' -i rdc-on-sauce-tunnel-eu
```
</TabItem>
</Tabs>

:::note
Once you establish a Sauce Connect Proxy tunnel for real device testing, you can also use it for virtual devices (and vice versa) since they share the same endpoint.
:::

### OnDemand Endpoint Examples for Driver Setup

To ensure you're testing against the correct data center, you'll need to add the correct OnDemand endpoint when you instantiate a MobileDriver in your automated test:

<Tabs
  defaultValue="US Data Center"
  values={[
    {label: 'Java Snippet: Driver Setup for US Data Center', value: 'US Data Center'},
    {label: 'Java Snippet: Driver Setup for EU Data Center', value: 'EU Data Center'},
  ]}>

<TabItem value="US Data Center">

```bash
final AndroidDriver driver = new AndroidDriver(new URL("https://ondemand.us-west-1.saucelabs.com/wd/hub"), capabilities);
```

</TabItem>

<TabItem value="EU Data Center">

```bash
final AndroidDriver driver = new AndroidDriver(new URL("https://ondemand.eu-central-1.saucelabs.com/wd/hub"), capabilities);
```

</TabItem>
</Tabs>

### Additional Support
If your tunnel launch fails with message "Failed to check for existing tunnels," contact [Sauce Labs Support and Services](https://saucelabs.com/training-support) to verify that you have Sauce Connect Proxy access enabled on your account.

## Headless Sauce Connect Proxy Setup
Sauce Headless is a lightweight infrastructure that allows developers to run early pipeline component tests and sanity checks at scale. It is a container-based architecture for the Virtual Machines that host our headless browsers.

For instructions on how to set up Sauce Connect Proxy tunnels with your Sauce Headless tests, see [Getting Started With Sauce Headless](/headless).

## Legacy RDC (TestObject)
For instructions on how to run Sauce Connect Proxy on our Legacy RDC platform (TestObject), see [Creating a Sauce Connect Tunnel for Legacy Real Device Cloud](/secure-connections/sauce-connect/setup-configuration/legacy-tunnels/).
