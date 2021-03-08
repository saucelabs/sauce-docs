---
id: ipsec-vpn
title: Running Sauce Labs Tests with IPSec VPN Tunnels
sidebar_label: IPSec VPN
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

Internet Protocol Security VPN (IPSec VPN) is a technology that connects two private networks securely over the public Internet.

Sauce Labs offers an enterprise-grade IPSec VPN solution that enables a secure connection between applications hosted on a customer's private network (or local machine) and Sauce Labs cloud virtual machines and real devices. Topics in this section include architecture, setup information, and troubleshooting tips.

### What You'll Need

<p> <Highlight color="#013a70">ENTERPRISE PLANS ONLY</Highlight> </p>

* IPSec VPN is an enterprise-only feature. Contact your Sauce Labs Sales Engineer or Customer Success Manager to learn more about how this solution can meet your business needs. We'll guide you through the tunnel setup and configuration process. Once you're up and running, you'll be able to connect to Sauce Labs virtual machines and real cloud devices.
* If you're an Organization Admin, see [Organization Security Settings](https://wiki.saucelabs.com/display/DOCS/Security+Settings+for+Organizations) for information on configuring tunnel access for users.
* You'll need authorization (if you don't have it already) to use your organization's IPSec VPN tunnel. Contact your Sauce Labs account Organization Admin(s), who controls access.

#### Verifying Access

To verify that you have access to your organization's IPSec VPN tunnel, head to the **Tunnels** menu. If the tunnel name and details are displayed here, this means you have access.


## High-Level Network Architecture

Our IPSec VPN solution consists of a VPN connection and two IPSec tunnel gateways: one running on your network, and the other on Sauce Labs.

This connection allows secure communication between the gateways, which provide rules for DNS resolution, routing, and security.

!["IPSec VPN Network Architecture"](/img/ipsec-vpn/ipsec-diagram.png)

## Bandwidth Recommendations

General guidelines for IPSec VPN tunnels described in the table below ensure that your tunnel can support your desired number of concurrent sessions.

**NOTE**: We set up all IPSec VPN customers with a redundant, High Availability (HA) tunnel pool with two tunnel gateways.

| Number of Concurrent Sessions | Recommended Number of IPSec Tunnels | Recommended Total Bandwidth
| :-------------------------- | :--- | :---
| 20 | 1 | 50Mbps
| 100 | 1 | 250Mbps
| 500 | 2 | 750Mbps
| 1,000 | 2 | 1.5Gbps
| 2,000 | 2 | 3Gbps

Bandwidth recommendations for testing depend on the number of pages downloaded by each test, and the approximate size of each page. To estimate your requirements, we recommend running 25-40 concurrent sessions through a proxy while observing network usage patterns. You should have enough bandwidth to download a page in 3 to 5 seconds.

Multiple users can run different tests simultaneously through the same tunnel, as long as the number is within the threshold of your concurrency limits/allocations.

## Security

### Tunnel Gateway Security Features

The Sauce Labs infrastructure is configured so that our virtual machines and real devices running tests are fully, securely isolated from each other through traffic filtering. They are prohibited from cross-communicating. This means that a Sauce Labs VM and/or real device being accessed through your tunnel will send only traffic owned by your organization.

The only exception for this rule is tunnel gateway VMs. While VMs and devices are allowed to connect to the internet, Sauce Labs also offers a "lockdown" feature that locks traffic down to that particular user’s tunnels only.

Additionally, Sauce Labs only permits internal services necessary for allowlisting, such as monitoring services or firewall controllers, to communicate with VMs, real devices, and control plane services running on tunnel gateways. Each tunnel gateway VM is customized at the time of provisioning per your specifications and configured to direct all traffic via IPSec VPN.

Tunnel gateway firewalls restrict access so that only your pre-authorized test VMs can connect. Authorized test VMs include:

* Test VMs that run jobs started by IPSec VPN tunnel owner
* Test VMs that run jobs started by accounts with which the tunnel is shared

### Firewall Ports and Protocols

The firewall allows the following ports and protocols through the IPSec VPN connection:

| Directions | Protocols |
| :-------------------------- | :---
| Inbound from customer network | BGP (TCP/179)
| Inbound and Outbound | ICMP
| Outbound from Sauce | HTTP (TCP/80, TCP/8080), HTTPS (TCP/443, TCP/8443)
| Outbound from Sauce | DNS (UDP/53, TCP/53, TCP/853)

To request additional ports and protocols to be opened, contact [Sauce Labs Support](https://saucelabs.com/training-support).

### Self-Signed Certificates

The tunnel gateway acts as a man-in-the-middle proxy, re-encrypting all SSL connections with Sauce Labs certificate by default. If your tests don't require access to servers with self-signed certificates, we strongly recommend disabling SSL re-encryption.

SSL re-encryption can be disabled for all domains or selected domains with `no-ssl-bump-domains`.

WebSocket servers with self-signed certificates are not supported.

## Testing with IPSec VPN Tunnels

Our IPSec VPN solution provides you with a static, secure connection, through which you can run live and automated tests on all Sauce Labs virtual machines and real devices.

Depending on the type of test you want to run, you may need to include certain desired capabilities in your test script. See below for use case examples.

### Automated Testing
To connect to Sauce Labs real and virtual devices, assign your IPSec VPN tunnel to the appropriate [Data Center Endpoint](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068) in your test automation script.

#### Appium and Selenium

* Set the `tunnelIdentifier` desired capability to the name of your organization's IPSec VPN tunnel

* Set the `parentTunnel` capability to the username of your Organization Admin

As an example, let's say the name of your organization's tunnel is `awesometunnel` and your Organization Admin's username is `john.smith`. Here's how you'd set it up in Java:

```sh
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("tunnelIdentifier", "awesometunnel");
caps.setCapability("parentTunnel","johnsmith");
```

#### Espresso Tests on Emulators
* Set the `tunnel-identifier` argument for Sauce-Runner-Virtual to the name of your IPSec VPN tunnel.

### Live Testing
For Cross-Browser app testing, head to **Live** > **Cross-Browser** > Click **Sauce Connect Proxy** dropdown > Select your IPSec VPN tunnel.

For mobile device testing, to **Live** > **Mobile-App** > Choose your app from the list > Click **Sauce Connect Proxy** dropdown > Select your IPSec VPN tunnel.

:::note Note About Public Real Devices
To ensure compliance with your company's settings and network policy, we recommend checking with your organization admin before running tests on virtual and real devices over an IPSec VPN connection.

To run tests on public real devices in the Sauce Labs cloud using IPSec VPN, your organization admin must switch on **Enable Sauce Connect Proxy/IPSec VPN for Public Cloud Devices**, a [security setting](https://wiki.saucelabs.com/display/DOCS/Security+Settings+for+Organizations) that is disabled by default. The setting enables all users across your organization to run live and automated tests on public devices over IPSec VPN.

Each time you initiate a test, you'll see a temporary pop-up alert window with a reminder that the utilization of a trusted IPSec VPN connection combined with RDC public real device tests may not be compliant with your organization's network policy.
:::

## Setting IPSec VPN Tunnel Permissions

As part of our initial IPSec VPN tunnel setup and configuration on your network, we'll ask your organization to choose from two sharing settings:

* **Restricted**: only Organization Admins can access IPSec VPN tunnels
* **Organization-Wide**: all users in your organization can utilize IPSec VPN tunnels

At this time, we don't support granting permissions to individual users.

If you're an Organization Admin who would like to change your sharing settings, please reach out to our Support Team.

## Monitoring and Troubleshooting
To monitor tunnel stability, we recommend pinging the tunnel gateway or checking the status of the VPN connection from the IPSec gateway itself.

## Additional Resources

* [White Paper: Overview of Sauce Labs Security Processes](https://saucelabs.com/resources/white-papers/overview-of-sauce-labs-security-processes)
* [Sauce Connect Proxy™ Security Overview](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview)

If you need help with your tunnel(s) or are interested in getting set up, please contact your CSM, SE, or Sauce Labs Support.
