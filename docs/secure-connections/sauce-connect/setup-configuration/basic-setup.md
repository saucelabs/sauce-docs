---
id: basic-setup
title: Basic Setup
sidebar_label: Basic Setup
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The basic Sauce Connect Proxy setup is ideal for non-enterprise users with network configurations that require a proxy to open up communication between Sauce Labs and their web or mobile app.

It is also a key step for any Sauce Connect Proxy deployment as a way to verify if you need help from network administrators to complete the configuration. For details, see [Validating Your Basic Sauce Connect Proxy Setup](/secure-connections/sauce-connect/system-requirements).

For information about user configuration settings, see [Organization Settings](/basics/acct-team-mgmt/org-settings).

## What You'll Need
* Review [Sauce Connect Proxy System and Network Requirements](/secure-connections/sauce-connect/system-requirements) to confirm that your system and network architecture will be compatible with Sauce Connect Proxy.
* Download the appropriate version of Sauce Connect Proxy for your operating system, if you haven't yet. For more information, see [Downloading Sauce Connect Proxy](/secure-connections/sauce-connect/installation).
* Understand what kinds of tests you're running:
  * If you're using virtual machines or devices, see the instructions below.
  * If you're testing real devices, see [Setting Up for Real Device Cloud](/secure-connections/sauce-connect/setup-configuration/specialized-environments).
* Know your account details including:
  * The url of the datacenter you need to use. For more information, see [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints).
  * Your Sauce Labs username and access key, which you can find in Sauce Labs under **ACCOUNT > User settings**.

:::note
Sauce Labs recommends setting all of the values above as environment variables to protect your username and api key from exposure, and also for future convenience.
:::

## Validating Your Basic Setup
Once you've downloaded Sauce Connect Proxy, you can validate that it works on your network by completing the following steps:
1. Launch a tunnel with the following flags, per the [Sauce Connect Proxy Command Line Reference](/dev/cli/sauce-connect-proxy):

```bash
$ bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --region $SAUCE_DC -i TUNNEL_ID
```

where:

* `SAUCE_USERNAME` is the username assigned to your Sauce Labs account.
* `SAUCE_ACCESS_KEY` is the access key associated with that account.
* `SAUCE_DC` is the regional datacenter you need to use. By default, the `-r` option is not required if you're using the default US West data center. If you're using [any other region](/dev/cli/sauce-connect-proxy/#data-center-endpoints), `-r SAUCE_DC` is required.
* `TUNNEL_ID` is the identifier or name of the tunnel; for more information, see Using Tunnel Identifiers below.

2. Select an appropriate test script. Options might include:
  * One of your existing tests, if available.
  * An example from [Sauce Labs Demonstration Scripts](https://github.com/saucelabs-training). Follow the instructions to configure the test before proceeding to step 3 below.
3. If you are using an tunnel identifier, add the following to the capabilities of  the test:

<Tabs
  defaultValue="Java"
  values={[
    {label: 'Java', value: 'Java'},
    {label: 'Node.js', value: 'Node.js'},
    {label: 'C#', value: 'C#'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
  ]}>

<TabItem value="Java">

```java
caps.SetCapability("tunnelIdentifier", "TUNNEL_ID");
```

</TabItem>

<TabItem value="Node.js">

```javascript
'tunnelIdentifier': 'TUNNEL_ID'
```

</TabItem>

<TabItem value="C#">

```csharp
caps.SetCapability("tunnelIdentifier", "TUNNEL_ID");
```

</TabItem>

<TabItem value="Python">

```py
'tunnelIdentifier': 'TUNNEL_ID'
```

</TabItem>

<TabItem value="Ruby">

```rb
'tunnelIdentifier': 'TUNNEL_ID'
```

</TabItem>
</Tabs>

Where `TUNNEL_ID` is the identifier or name of the tunnel from step 1.

3. When you see `connected`, log in to Sauce Labs and, in the left navigation panel, click **TUNNELS**. Under **Active Tunnels**, you should see the tunnel you've just started.

4. Your next step depends on the outcome of the test:
* If the test isn't working, see **Test Not Working** below.
* If the test succeeds, there will be a Sauce Connect Proxy icon next to your test.

<img src={useBaseUrl('img/sauce-connect/scp-test-success.png')} alt="Successful test icon" width="750"/>


### Test Not Working?
If you're unable to connect, check with your network administrator about examining firewall settings for roadblocks. For more information, see [Allowlisting for Restricted Networks](/secure-connections/sauce-connect/system-requirements).

Another possible issue is certificate  authentication. The server hosting Sauce Connect Proxy may need to connect to Online Certificate Status Protocol (OCSP). See [Certificate Handling](/secure-connections/sauce-connect/security-authentication) for more information.

For troubleshooting specific errors or common issues, see [Troubleshooting](/secure-connections/sauce-connect/troubleshooting) and [Frequently Asked Questions](/secure-connections/sauce-connect/faq).

## Starting Tunnels as Needed
Once you've confirmed that your network is configured for Sauce Connect Proxy, you can start new tunnels as needed.

It is important to be aware of the various options you have for configuring tunnels:

* To use the basic tunnel configuration, you can use the same steps described in VALIDATING to start all subsequent tunnels.
* To use a more advanced or complex configuration, you can use:
  * Sauce Connect Proxy with additional proxies (see [Additional Proxy Setup](/secure-connections/sauce-connect/setup-configuration/additional-proxies))
  * [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability)

As a best practice, Sauce Labs recommends creating a new tunnel for each test suite or build and tearing it down at the end of the test.

### Basic Network Configuration Diagram

<img src={useBaseUrl('img/sauce-connect/scp-basic-network-config.png')} alt="Basic network configuration diagram" width="650"/>

**Diagram Legend**

| Term | Definition |
| :--- | :--- |
| SC Host (Sauce Connect Host) | The machine in your network on which the Sauce Connect Proxy application is running. In this setup, it has a direct connection to the internet. |
| SUT (Site Under Test) | The site that you're testing. It is on the same local network as the SC Host machine. |
| Tunnel VM (Tunnel Virtual Machine) | Virtual machine that hosts Sauce Connect on the Sauce Labs side. |

:::note
Sauce Connect Proxy must be on the same network as the website or mobile app being tested, but it is not required to set it up on the same machine.
:::

## Using Tunnel Identifiers
When launching a Sauce Connect Proxy tunnel for automated web and mobile app tests, you have two options:
* Launch a Sauce Connect tunnel as-is, without identifying it. That default, unnamed tunnel will automatically be used for all automated tests. This can be useful for small organizations with a limited number of tests.
* Assign a name known as a tunnel identifier. To accomplish this, you'll need to launch a tunnel with the
  `-i` (["--tunnel-name" or "--tunnel-identifier"](https://docs.saucelabs.com/dev/cli/sauce-connect-proxy#--tunnel-name-or---tunnel-identifier)) command to assign the tunnel identifier(s) when starting up Sauce Connect Proxy.
  Then, you'll need to use the `tunnelIdentifier` option in the capabilities of your automated tests.
  This will trigger your tests to request a specific tunnel to run your tests through that tunnel.

### Example: Automated Test with Sauce Connect Proxy Tunnel Identifiers
Below is an example of how to designate tunnels based on the `tunnelIdentifier` option so that it works properly with an automated test.

Launch a new tunnel on the `SC_HOST` with the following flags, per the [Sauce Connect Proxy Command Line Reference](/dev/cli/sauce-connect-proxy):

<Tabs
  defaultValue="MacOS/Linux Example"
  values={[
    {label: 'MacOS/Linux Example', value: 'MacOS/Linux Example'},
    {label: 'Windows Example', value: 'Windows Example'},
  ]}>

<TabItem value="MacOS/Linux Example">

```bash
$ ./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -r $SAUCE_DC -i sc-proxy-tunnel
```

</TabItem>

<TabItem value="Windows Example">

```bash
> sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% -r %SAUCE_DC% -i sc-proxy-tunnel
```

</TabItem>

</Tabs>

* Ensure that your network configuration allows for communication between the `SC Host`, the Tunnel VM, and the SUT (site under test). See the basic network configuration diagram for further explanation.
* Select an example from [Sauce Labs Demonstration Scripts](https://github.com/saucelabs-training) and follow the instructions to configure the test in your dev environment.
* Navigate to the desired test script and add the following [Test Configuration Option](/dev/test-configuration-options) in the [`sauce:options`](/dev/w3c-webdriver-capabilities) capability:

<Tabs
  defaultValue="Java"
  values={[
    {label: 'Java', value: 'Java'},
    {label: 'Node.js', value: 'Node.js'},
    {label: 'C#', value: 'C#'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
  ]}>

<TabItem value="Java">

```java
caps.SetCapability("tunnelIdentifier", "sc-proxy-tunnel");
```

</TabItem>

<TabItem value="Node.js">

```js
'tunnelIdentifier': 'sc-proxy-tunnel'
```

</TabItem>

<TabItem value="C#">

```csharp
caps.SetCapability("tunnelIdentifier", "sc-proxy-tunnel");
```

</TabItem>

<TabItem value="Python">

```py
'tunnelIdentifier': 'sc-proxy-tunnel'
```

</TabItem>

<TabItem value="Ruby">

```rb
tunnelIdentifier: 'sc-proxy-tunnel',
```

</TabItem>

</Tabs>

## Sauce Connect Proxy Tunnel Startup Process
Every Sauce Connect Proxy tunnel spins up a fresh virtual machine (VM) that is used only for your tests; VMs are destroyed once the tunnel is closed. A recommended Sauce Connect Proxy best practice is to create a new tunnel for each test suite or build and tear it down at the end of your test.

### Sauce Connect Proxy Tunnel Startup Diagram

<img src={useBaseUrl('img/sauce-connect/scp-tunnel-startup.png')} alt="Tunnel startup diagram" width="650"/>

1. Sauce Connect Proxy client calls REST API to start a tunnel.

2. REST API initiates a request to system to create a new Tunnel VM.

3. REST API tells the Sauce Connect Proxy client DNS name of the Tunnel VM.

4. Sauce Connect Proxy client makes connection request to Tunnel VM using its DNS name.

At this point, the tunnel is established between the Sauce Connect Client and the Tunnel VM.

## Sauce Connect Communication When Test is Running

### Network Traffic Flow through a Tunnel Diagram

<img src={useBaseUrl('img/sauce-connect/scp-network-traffic-flow.png')} alt="Network traffic flow diagram" width="650"/>

1. Selenium/Appium test code sends an HTTPS request to the VM or Real Device that was created for this test (for example, `GET www.saucedemo.com`).

2. Test VM or Device sends this request to Tunnel VM in order to access SUT.

3. Tunnel VM forwards this request to Sauce Connect Proxy client via the secure tunnel.

4. Sauce Connect Proxy client forwards the request to Site Under Test (SUT).

5. Site Under Test returns response to Sauce Connect Proxy client.

6. Sauce Connect Proxy client sends response to Tunnel VM via secure tunnel.

7. Tunnel VM sends response to Test VM.

8. Test VM sends results back to Selenium/Appium Test cloud.

Throughout the lifetime of a tunnel, Sauce Connect Proxy client sends status information to Sauce Labs REST API.
