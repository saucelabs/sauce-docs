---
id: legacy-tunnels
title: Creating Tunnels in TestObject (Legacy)
sidebar_label: TestObject (Legacy)
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestObject, our legacy real device cloud platform, allows for public and private mobile device testing. By setting up Sauce Connect Proxy, you’ll have a secure tunnel for testing apps and websites on your local machine (or behind a firewall) against devices and browsers in the TestObject Real Device Cloud. You can run a high volume of tests across a broad range of real devices without compromising performance, quality, or reliability.

Connecting to real devices in TestObject through a Sauce Connect Proxy tunnel requires endpoints and authentication methods that are different from Sauce Labs. You'll need to launch an additional tunnel – separate from the one(s) you're using in Sauce Labs – so that your test code reaches the TestObject-specific real devices.

## What You'll Need
<p><span className="sauceDBlue">ENTERPRISE ONLY</span></p>

You must know your account details, including:
  * Your TestObject username and API Key
  * The Data Center endpoint associated with your geographic location (see [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints))

We recommend setting all of the values above as environment variables (see [Using Environment Variables for Authentication Credentials](/basics/environment-variables)). This will protect your username and API key from exposure, and keep those values stored for future convenience.

### Selecting the Tunnel to Use
Sauce Connect Proxy can have multiple tunnels running simultaneously, as described in [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability). You can select which tunnel to use in a real device test in the same way as you would any other type of automated test.  

1. Start Sauce Command Proxy from the command line, providing an [`-i` (`--tunnel-identifer`)](/dev/cli/sauce-connect-proxy) to start a new tunnel with that identifier.

```
'bin/sc -u $TEST_OBJECT_USERNAME -k $TEST_OBJECT_API_KEY -x $TEST_OBJECT_DC -i $TUNNEL_ID'
```

:::note
Use the [`-B all`](/dev/cli/sauce-connect-proxy) flag to disable SSL bumping. Failing to use this flag will result in certificate issues. For more information, see [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication).
:::

where:

  a. `TEST_OBJECT_USERNAME` refers to your Test Object username.
  b. `TEST_OBJECT_API_KEY` refers to your Test Object API Key.
  c. `TEST_OBJECT_DC` refers to the Data Center API endpoint (see [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints)).
  d. `TUNNEL_ID` refers to the tunnel identifier (see [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability)).

So an example would look like this:

<Tabs
  defaultValue="us"
  values={[
    {label: 'US Data Center', value: 'us'},
    {label: 'EU Data Center', value: 'eu'},
  ]}>

<TabItem value="us">

**Mac OSX/Linux Example**

```
$ /bin/sc -u $TEST_OBJECT_USERNAME -k $TEST_OBJECT_API_KEY -x 'https://us1.api.testobject.com/sc/rest/v1' -i test-object-rdc-tunnel-us
```

**Windows Example**

```
> \bin\sc -u %TEST_OBJECT_USERNAME% -k %TEST_OBJECT_API_KEY% -x 'https://us1.api.testobject.com/sc/rest/v1' -i test-object-rdc-tunnel-us
```

</TabItem>
<TabItem value="eu">

**Mac OSX/Linux Example**

```
$ /bin/sc -u $TEST_OBJECT_USERNAME -k $TEST_OBJECT_API_KEY -x 'https://eu1.api.testobject.com/sc/rest/v1' -i test-object-rdc-tunnel-eu
```

**Windows Example**

```
> \bin\sc -u %TEST_OBJECT_USERNAME% -k %TEST_OBJECT_API_KEY% -x 'https://eu1.api.testobject.com/sc/rest/v1' -i test-object-rdc-tunnel-eu
```

</TabItem>
</Tabs>



2. In your device testing script, specify the tunnel name with `tunnelIdentifier` in your desired capabilities, as shown in this Java example:

**Example `tunnelIdentifier` Java Snippet**
```java
final DesiredCapabilities capabilities = new DesiredCapabilities();
    capabilities.setCapability("testobject_api_key", System.getenv("TEST_OBJECT_API_KEY"));
    capabilities.setCapability("platformName", "Android");
    capabilities.setCapability("platformVersion,"  "81.0");
    capabilities.setCapability("deviceName", "Samsung_Galaxy_Note_5_real"); // Will only run on the specified device
    capabilities.setCapability("tunnelIdentifier", "test-object-rdc-tunnel-us");
final AndroidDriver driver = new AndroidDriver(new URL("http://us1.appium.testobject.com/wd/hub"), capabilities);
```

### TestObject Appium Endpoints
To ensure you're testing against the correct data center, you'll need to add the correct Appium testing endpoint when you instantiate a MobileDriver in your automated test. Examples:

**Java Snippet: Driver Setup for US Data Center**

```java
final AndroidDriver driver = new AndroidDriver(new URL("https://us1.appium.testobject.com/wd/hub"), capabilities);
```

**Java Snippet: Driver Setup for EU Data Center**

```java
final AndroidDriver driver = new AndroidDriver(new URL("https://eu1.appium.testobject.com/wd/hub"), capabilities);
```

## Additional Support
If your tunnel launch fails with the message "Failed to check for existing tunnels," [contact our Support team](https://saucelabs.com/training-support) to verify that you have Sauce Connect Proxy access enabled on your account.
