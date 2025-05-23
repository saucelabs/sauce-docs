---
id: basic-setup
title: Sauce Connect Proxy Basic Setup
sidebar_label: Basic Setup
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The basic Sauce Connect Proxy setup is ideal for non-enterprise users with network configurations that require a proxy to open communication between Sauce Labs and their website or mobile app hosted locally or behind a firewall.

It is also a key step for any Sauce Connect Proxy deployment as a way to verify if you need help from network administrators to complete the configuration. For details, see [Validating Your Basic Sauce Connect Proxy Setup](/secure-connections/sauce-connect-4/system-requirements).

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- [Username and access key](https://app.saucelabs.com/user-settings) of you Sauce Labs user.
  - Only user accounts can manage tunnels. [Service accounts](/basics/acct-team-mgmt/managing-service-accounts) are not supported by Sauce Connect Proxy and cannot start or manage tunnels.
- Have Sauce Connect Proxy [installed on your local machine](/secure-connections/sauce-connect-4/installation). Make sure it's the latest version - otherwise, you may run into technical issues.
  - Review [Sauce Connect Proxy System and Network Requirements](/secure-connections/sauce-connect-4/system-requirements) to confirm that your system and network architecture will be compatible with Sauce Connect Proxy.
- Know your regional [Sauce Labs Data Center](/dev/cli/sauce-connect-proxy/#--region).
- Understand what kinds of tests you're running:
  - If you're using virtual machines or devices, see the instructions below.
  - If you're testing real devices, see [Setting Up for Real Device Cloud](/secure-connections/sauce-connect-4/setup-configuration/specialized-environments).

:::note Security Recommendation
We recommend setting your [username and api key values as environment variables](/secure-connections/sauce-connect-4/setup-configuration/environment-variables/) to protect them from exposure. They'll be reusable (you won't need to type them in every time).
:::

## Basic Setup without a Test Script

See [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect-4/quickstart/) for instructions on how to run a Live (Manual) test on a locally hosted app.

## Basic Setup with a Test Script

1. Open your terminal and navigate to the Sauce Connect Proxy client bin folder on your local machine.

<Tabs
  defaultValue="Linux"
  values={[
    {label: 'Linux', value: 'Linux'},
    {label: 'Windows', value: 'Windows'},
    {label: 'Mac', value: 'Mac'},
  ]}>

  <TabItem value="Linux">

```bash
cd sc-4.9.2-linux/bin
```

  </TabItem>
  <TabItem value="Windows">

```bash
cd sc-4.9.2-win32/bin
```

  </TabItem>
  <TabItem value="Mac">

```bash
cd sc-4.9.1-osx/bin
```

  </TabItem>
  </Tabs>

2. From your command line terminal, launch a tunnel with the below commands.

You can also find the code snippet with your credentials populated from the [**Tunnel Proxies**](https://app.saucelabs.com/tunnels) page, under **2: Authenticate & connect**.

<Tabs
defaultValue="Mac/Linux"
values={[
{label: 'Mac/Linux', value: 'Mac/Linux'},
{label: 'Windows', value: 'Windows'},
]}>

  <TabItem value="Mac/Linux">

```bash
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --region $SAUCE_DC --tunnel-name $TUNNEL_NAME
```

  </TabItem>
  <TabItem value="Windows">

```bash
.\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% --region %SAUCE_DC% --tunnel-name $TUNNEL_NAME
```

  </TabItem>
  </Tabs>

[`-u (--user)`](/dev/cli/sauce-connect-proxy/#--user) and [`-k (--api-key)`](/dev/cli/sauce-connect-proxy/#--api-key) are required. While the [`-r` (`--region`)](/dev/cli/sauce-connect-proxy/#--region) and [`--tunnel-name`](/dev/cli/sauce-connect-proxy/#--tunnel-name) flags are technically not required, we strongly recommend them for best performance.

3. Select an appropriate test script. Options might include:

- An existing test, if available.
- Create a new test using an example from [Sauce Labs Demonstration Scripts](https://github.com/saucelabs-training). Follow those instructions to configure the test before proceeding to the next step.

4. If you are using a name for your tunnel, add the [`TUNNEL_NAME`](/dev/test-configuration-options#tunnelname) to the capabilities section of your test script. Use the same name you used in Step 1.

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
caps.SetCapability("tunnelName", "TUNNEL_NAME");
```

  </TabItem>
  <TabItem value="Node.js">

```javascript
'tunnelName': 'TUNNEL_NAME'
```

  </TabItem>
  <TabItem value="C#">

```csharp
caps.SetCapability("tunnelName", "TUNNEL_NAME");
```

  </TabItem>
  <TabItem value="Python">

```py
'tunnelName': 'TUNNEL_NAME'
```

  </TabItem>
  <TabItem value="Ruby">

```rb
'tunnelName': 'TUNNEL_NAME'
```

  </TabItem>
  </Tabs>

5. When you see `connected`, [verify that your tunnel is active](/secure-connections/sauce-connect-4/quickstart/#verify-connection).

Once you've confirmed that your network is configured for Sauce Connect Proxy, you can start new tunnels as needed. As a best practice, we recommend creating a new tunnel for each test suite or build and tearing it down at the end of your test.

You can continue using this basic setup or try a more advanced configuration, which is ideal for large scale, enterprise-level testing:

- [Sauce Connect Proxy with Additional Proxies](/secure-connections/sauce-connect-4/setup-configuration/additional-proxies)
- [Sauce Connect Proxy High Availability Setup](/secure-connections/sauce-connect-4/setup-configuration/high-availability)

### Test Not Working?

If you're unable to connect, check with your network administrator about examining firewall settings for roadblocks. For more information, see [Allowlisting for Restricted Networks](/secure-connections/sauce-connect-4/system-requirements).

Another possible issue is certificate authentication. The server hosting Sauce Connect Proxy may need to connect to Online Certificate Status Protocol (OCSP). See [Certificate Handling](/secure-connections/sauce-connect-4/security-authentication) for more information.

For troubleshooting specific errors or common issues, see [Troubleshooting](/secure-connections/sauce-connect-4/troubleshooting) and [Frequently Asked Questions](/secure-connections/sauce-connect-4/faq).

## Using Tunnel Names

When launching a Sauce Connect Proxy tunnel for automated web and mobile app tests, you have two options:

- Launch a Sauce Connect tunnel as-is, without naming it. That default, unnamed tunnel will automatically be used for all automated tests. This can be useful for small organizations with a limited number of tests.
- **Recommended**: Assign a name to help distinguish tunnels in a way that is meaningful to your organization. To accomplish this:
  - Use the [ `--tunnel-name` flag](/dev/cli/sauce-connect-proxy/#--tunnel-name) when you launch a tunnel.
  - Specify the named tunnel in your automated tests by adding the [`tunnelName`](/dev/test-configuration-options#tunnelname) capability.

#### Example Configurations

The following code samples demonstrate specifying a tunnel name when launching a tunnel and then referencing that tunnel in your automated test.

Launch a new tunnel on the `SC_HOST` using the [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy) and the `--tunnel-name` flag:

<Tabs
defaultValue="macOS/Linux"
values={[
{label: 'macOS/Linux', value: 'macOS/Linux'},
{label: 'Windows', value: 'Windows'},
]}>

<TabItem value="macOS/Linux">

```bash
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -r $SAUCE_DC --tunnel-name sc-proxy-tunnel
```

</TabItem>

<TabItem value="Windows">

```bash
.\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% -r %SAUCE_DC% --tunnel-name sc-proxy-tunnel
```

</TabItem>
</Tabs>

- Ensure that your network configuration allows for communication between the `SC Host`, the Tunnel VM, and the SUT (site under test). See the basic network configuration diagram for further explanation.
- Select an example from [Sauce Labs Demonstration Scripts](https://github.com/saucelabs-training) and follow the instructions to configure the test in your dev environment.
- Navigate to the desired test script and add the [`tunnelName`](/dev/test-configuration-options#tunnelname) capability to your [`sauce:options`](/dev/w3c-webdriver-capabilities).

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
caps.SetCapability("tunnelName", "sc-proxy-tunnel");
```

</TabItem>

<TabItem value="Node.js">

```js
'tunnelName': 'sc-proxy-tunnel'
```

</TabItem>

<TabItem value="C#">

```csharp
caps.SetCapability("tunnelName", "sc-proxy-tunnel");
```

</TabItem>

<TabItem value="Python">

```py
'tunnelName': 'sc-proxy-tunnel'
```

</TabItem>

<TabItem value="Ruby">

```rb
tunnelName: 'sc-proxy-tunnel',
```

</TabItem>
</Tabs>

## Architecture

### Sauce Connect Proxy Basic Network Configuration

<img src={useBaseUrl('img/sauce-connect/scp-basic-network-config.png')} alt="Basic network configuration diagram" width="650"/>

**Diagram Legend**

| Term                               | Definition                                                                                                                              |
| :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| SC Host (Sauce Connect Host)       | The machine in your network on which the Sauce Connect Proxy app is running. In this setup, it has a direct connection to the internet. |
| SUT (Site Under Test)              | The site that you're testing. It is on the same local network as the SC Host machine.                                                   |
| Tunnel VM (Tunnel Virtual Machine) | Virtual machine that hosts Sauce Connect on the Sauce Labs side.                                                                        |

:::note
Sauce Connect Proxy must be on the same network as the website or mobile app being tested, but it is not required to set it up on the same machine.
:::

### Sauce Connect Proxy Tunnel Startup Process

Every Sauce Connect Proxy tunnel spins up a fresh virtual machine (VM) that is used only for your tests. VMs are destroyed once the tunnel is closed.

<img src={useBaseUrl('img/sauce-connect/scp-tunnel-startup.png')} alt="Tunnel startup diagram" width="650"/>

1. Sauce Connect Proxy client calls REST API to start a tunnel.
2. REST API initiates a request to system to create a new Tunnel VM.
3. REST API tells the Sauce Connect Proxy client DNS name of the Tunnel VM.
4. Sauce Connect Proxy client makes connection request to Tunnel VM using its DNS name.

The tunnel should now be established between the Sauce Connect Client and the Tunnel VM.

### Sauce Connect Proxy Communication When Test is Running

#### Network Traffic Flow through a Tunnel

<img src={useBaseUrl('img/sauce-connect/scp-network-traffic-flow.webp')} alt="Network traffic flow diagram" width="650"/>

1. Selenium/Appium test code sends an HTTPS request to the VM or Real Device that was created for this test (e.g., `GET www.saucedemo.com`).
2. Test VM or Device sends this request to Tunnel VM in order to access SUT.
   :::note
   The tunnel assignment depends on the [tunnel-name](/dev/cli/sauce-connect-proxy/#--tunnel-name) that tells Sauce Labs what tunnel to use.
   :::
3. Tunnel VM forwards this request to Sauce Connect Proxy client via the secure tunnel.
4. Sauce Connect Proxy client forwards the request to Site Under Test (SUT).
5. Site Under Test returns response to Sauce Connect Proxy client.
6. Sauce Connect Proxy client sends response to Tunnel VM via secure tunnel.
7. Tunnel VM sends response to Test VM.
8. Test VM sends results back to Selenium/Appium test cloud.

Throughout the lifetime of a tunnel, Sauce Connect Proxy client will send status information to Sauce Labs REST API.

## More Information

- [Sauce Connect Proxy Security Settings](/basics/acct-team-mgmt/org-settings/#security-settings): learn about additional security settings, such as requiring organization-wide use of Sauce Connect Proxy
- [Sauce Connect Proxy Architecture](/secure-connections/sauce-connect-4/advanced/architecture/)
- [KGP Sauce Connect Proxy Tunneling Protocol](/secure-connections/sauce-connect-4/advanced/kgp/)
