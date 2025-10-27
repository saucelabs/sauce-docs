---
id: ipsec-vpn
title: Using Sauce IPSec Proxy
sidebar_label: Sauce IPSec Proxy
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<p><span className="sauceGreen">Enterprise Only</span></p>

import useBaseUrl from '@docusaurus/useBaseUrl';

Internet Protocol Security VPN (IPSec VPN) is a technology that connects two private networks securely over the public internet. If your organization has firewall rules that limit your ability to run tests on Sauce Labs, you can use Sauce IPSec Proxy to connect to Sauce Labs without exposing your organization's IT infrastructure to security risks.

Sauce IPSec Proxy is an enterprise-grade IPSec VPN solution that provides a secure, static connection between apps hosted on your private network (or local machine) and devices on the Sauce Labs cloud.

:::note Add-on feature
Sauce IPSec Proxy is available as an add-on for Enterprise plans only. If you want to upgrade your Enterprise plan to use Sauce IPSec Proxy, contact your Sauce Labs account executive.
:::

## What You'll Learn

- How to get up and running with Sauce IPSec Proxy
- Overview of Sauce IPSec Proxy network architecture
- How to run tests using Sauce IPSec Proxy

## What You'll Need

- Sauce IPSec Proxy is an enterprise-only feature that must be configured by our Support Team prior to use. Contact your Sauce Labs Sales Engineer or Customer Success Manager to learn more about how this solution can meet your business needs.
- Authorization to use your organization's Sauce IPSec Proxy tunnel. You can verify this by going to the **Tunnels** page, where you should see the tunnel name displayed. If you don't see it, contact the organization admin for your Sauce Labs account to request access.

## Sauce IPSec Proxy Setup

As part of our initial Sauce IPSec Proxy tunnel setup and configuration on your network, we'll ask your organization to choose from two sharing settings:

- **Restricted**: Only organization admins can utilize Sauce IPSec Proxy tunnels
- **Organization-wide**: All users in your organization can utilize Sauce IPSec Proxy tunnels
- **Team-wide**: All users in a specific team can utilize Sauce IPSec Proxy tunnels

If you're an organization admin who would like to change your sharing settings, please reach out to our Support Team.

### Public Real Devices

To run tests on public real devices in the Sauce Labs cloud using Sauce IPSec Proxy, organization admins must set the **Enable Sauce Connect Proxy/IPSec VPN for Public Cloud Devices** option to **Enabled**. See [Security Settings](/basics/acct-team-mgmt/org-settings) for more information.

The organization admin will see a pop-up modal asking them to read and agree to our Risk Advisory regarding the use of public real devices on a trusted Sauce IPSec Proxy connection.

## Network and Security

The Sauce IPSec Proxy solution consists of a VPN connection and two IPSec tunnel gateways: one running on your network, and the other on Sauce Labs.

This connection allows secure communication between the gateways, which provide rules for DNS resolution, routing, and security.

<img src={useBaseUrl('img/ipsec-vpn/ipsec-vpn-architecture.png')} alt="Sauce IPSec Proxy Network Architecture"/>

### Bandwidth Recommendations

Below are some general guidelines to ensure that your Sauce IPSec Proxy tunnels can support your desired number of concurrent sessions.

:::note
We set up all Sauce IPSec Proxy customers with a redundant, High Availability (HA) tunnel pool with two tunnel gateways.
:::

| Number of Concurrent Sessions | Recommended Number of IPSec Tunnels | Recommended Total Bandwidth |
| :---------------------------- | :---------------------------------- | :-------------------------- |
| 20                            | 1                                   | 50Mbps                      |
| 100                           | 1                                   | 250Mbps                     |
| 500                           | 2                                   | 750Mbps                     |
| 1,000                         | 2                                   | 1.5Gbps                     |
| 2,000                         | 2                                   | 3Gbps                       |

Bandwidth recommendations for testing depend on the number of pages downloaded by each test, and the approximate size of each page. To estimate your requirements, we recommend running 25-40 concurrent sessions through a proxy while observing network usage patterns. You should have enough bandwidth to download a page in 3-5 seconds.

Multiple users can run different tests simultaneously through the same tunnel, as long as the number is within the threshold of your concurrency limits/allocations.

### Tunnel Gateway Security Features

The Sauce Labs infrastructure is configured so that our virtual machines (VMs) and real devices running tests are fully, securely isolated from each other through traffic filtering. They are prohibited from cross-communicating. Sauce Labs VMs and real devices that are being accessed through your tunnel will only send traffic owned by your organization.

The only exception for this rule is tunnel gateway VMs. While VMs and devices are allowed to connect to the internet, we also offer a "lockdown" feature that locks traffic down to that particular user’s tunnels only.

Additionally, Sauce Labs only permits internal services necessary for allowlisting, such as monitoring services or firewall controllers, to communicate with VMs, real devices, and control plane services running on tunnel gateways. Each tunnel gateway VM is customized at the time of provisioning per your specifications and configured to direct all traffic via Sauce IPSec Proxy.

Tunnel gateway firewalls restrict access so that only your pre-authorized test VMs can connect. Authorized test VMs include:

- Test VMs that run jobs started by the Sauce IPSec Proxy tunnel owner
- Test VMs that run jobs started by accounts with which the tunnel is shared

### Firewall Ports and Protocols

The firewall allows the following ports and protocols through the Sauce IPSec Proxy connection:

| Directions                    | Protocols                                          |
| :---------------------------- | :------------------------------------------------- |
| Inbound from customer network | BGP (TCP/179)                                      |
| Inbound and Outbound          | ICMP                                               |
| Outbound from Sauce           | HTTP (TCP/80, TCP/8080), HTTPS (TCP/443, TCP/8443) |
| Outbound from Sauce           | DNS (UDP/53, TCP/53, TCP/853)                      |

To request additional ports and protocols to be opened, contact [Sauce Labs Support](https://saucelabs.com/training-support).

### Self-Signed Certificates

The tunnel gateway acts as a man-in-the-middle proxy, re-encrypting all SSL connections with Sauce Labs certificate by default. If your tests don't require access to servers with self-signed certificates, we strongly recommend disabling SSL re-encryption.

SSL re-encryption can be disabled for all domains or selected domains with `no-ssl-bump-domains`.

WebSocket servers with self-signed certificates are not supported.

## Testing with Sauce IPSec Proxy Tunnels

### Automated Testing

Depending on the type of framework you're using and the device you're testing on, you'll need to include test script capabilities and/or CLI flags that point to your Sauce IPSec Proxy tunnel.

#### Appium and Selenium Frameworks

In your test script, you'll need to:

1. Specify the [data center endpoint](/basics/data-center-endpoints) location of the device you're testing on. See the [Sauce Labs Training Repo](https://github.com/saucelabs-training) for examples in JavaScript, Java, Python, Ruby, and C#.
2. Use the [`tunnelName`](/dev/test-configuration-options#tunnelname) capability to specify the name of your organization's Sauce IPSec Proxy tunnel, and then set the [`tunnelOwner`](/dev/test-configuration-options#tunnelowner) capability to the Sauce Labs username of your organization admin.

```java title="Java example"
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("tunnelName", "$TUNNEL_NAME");
caps.setCapability("tunnelOwner","$SAUCE_USERNAME");
```

#### Espresso and XCUITest Frameworks

If you're working in Espresso or XCUITest, you'll need to use [`saucectl`](/dev/cli/saucectl/) to run all tests on Sauce Labs.

1. Specify the [data center](/basics/data-center-endpoints) location of the device you're testing on. There are two ways to do this:
   - Specify the `region` in your YAML configuration file (see [Espresso config > `region`](/mobile-apps/automated-testing/espresso-xcuitest/espresso/#region) or [XCUITest config > `region`](/mobile-apps/automated-testing/espresso-xcuitest/xcuitest/#region)); or
   - Use the [`--region`](/dev/cli/saucectl/run/#--region) flag in conjunction with the `saucectl` run command at test runtime.
     ```bash
     saucectl run --region eu-central-1
     ```
2. Next, you'll need to assign your Sauce IPSec Proxy tunnel to your job. There are two ways to do this:
   - Specify the applicable [`tunnel`](/mobile-apps/automated-testing/espresso-xcuitest/espresso/#tunnel) settings in your YAML configuration file; or
   - Use the [`--tunnel-name`](/dev/cli/saucectl/run/#--tunnel-name) and [`--tunnel-owner`](/dev/cli/saucectl/run/#--tunnel-owner) flags in conjunction with the `saucectl` run command at test runtime.
     ```bash
     saucectl run --tunnel-name not-my-tunnel --tunnel-owner another.sauce.username
     ```

### Live Testing

#### Cross Browser

1. Click **Live** > **Cross Browser**.
2. In the **Sauce Connect Proxy** dropdown, select the name of your Sauce IPSec Proxy tunnel.

#### Mobile App

1. Click **Live** > **Mobile App**.
2. From the app selection page, hover your mouse over your app and click **Choose Device**.
3. In the **Sauce Connect Proxy** dropdown, select the name of your Sauce IPSec Proxy tunnel.

:::note
To ensure compliance with your company's settings and network policy, we recommend checking with your organization admin before running any mobile app tests over a Sauce IPSec Proxy connection.
:::

## Monitoring and Troubleshooting

To monitor tunnel stability, we recommend pinging the tunnel gateway or checking the status of the VPN connection from the IPSec gateway itself.

## Additional Resources

- [Overview of Sauce Labs Security Processes](https://saucelabs.com/resources/white-papers/overview-of-sauce-labs-security-processes)
- [Sauce Connect Proxy Security Overview](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview)
