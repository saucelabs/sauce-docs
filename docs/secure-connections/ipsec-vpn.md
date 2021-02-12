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

<p> <Highlight color="#013a70">ENTERPRISE PLANS ONLY</Highlight> </p>

Internet Protocol Security VPN (IPSec VPN) is a technology that connects two private networks securely over the public Internet. Sauce Labs offers an IPSec VPN solution that enables secure connections between applications hosted on a private network or local machine, and the Sauce Labs cloud. Topics in this section cover architecture, setup information, and troubleshooting tips.

### What You'll Need

To get started, you'll need to contact your Sauce Labs Sales Engineer or Customer Success Manager, who will guide you through the IPSec VPN tunnel setup and configuration. Once you're up and running with your tunnel, you'll be able to connect to Sauce Labs virtual cloud devices and real cloud devices.

* Authorization to use your organization's IPSec VPN tunnel; see [Tunnel Permissions](/secure-connections/ipsec-vpn#tunnel-permissions) for more.
* If you are a user seeking IPSec VPN tunnel access, you'll need to know the name of the person in your organization who owns the tunnel. See [Organization Security Settings](https://wiki.saucelabs.com/display/DOCS/Security+Settings+for+Organizations) for more.


## High-Level Network Architecture

IPSec VPN allows virtual machines on the Sauce Labs network to access application servers on private networks.

The solution consists of a VPN connection and two IPSec tunnel gateways: one running on your network and the other on Sauce Labs. This connection allows secure communication between the gateways, which provide rules for DNS resolution, routing, and security.

!["IPSec VPN Network Architecture"](/img/ipsec-vpn/ipsec-diagram.png)

## Security

### Tunnel Gateway Security Features

If you organization has an IPSec VPN configuration, we recommend using our enterprise-grade tunnel gateways.  

Our infrastructure is configured so that while they communicate with the virtual machine (VM) or real device running a test, they are fully isolated from each other through traffic filtering.

This means that a Sauce Labs VM and/or real device being accessed through your tunnel will send only traffic owned by your organization. Your VMs cannot communicate with other VMs and real devices in the Sauce Labs cloud infrastructure. The only exception for this would be tunnel gateway VMs. While VMs and devices are allowed to connect to the internet, Sauce Labs also offers a "lockdown" feature that locks traffic down to that particular user’s tunnels only.

Additionally, Sauce Labs only permits internal services necessary for allow-listing, such as monitoring services or firewall controllers, to communicate with VMs, real devices, and control plane services running on tunnel gateways. Each tunnel gateway VM is customized at the time of provisioning per your specifications and configured to direct all traffic via IPSec VPN.

The tunnel gateway's firewall will only allow authorized test VMs to connect. Authorized test VMs include:

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
The tunnel gateway acts as a man-in-the-middle proxy, re-encrypting all SSL connections with Sauce Labs certificate by default. If your tests don't require access to servers with self-signed certificates, we strongly recommended disabling SSL re-encryption.

SSL re-encryption can be disabled for all domains or selected domains with `no-ssl-bump-domains`.

WebSocket servers with self-signed certificates are not supported.

## Bandwidth Recommendations

General guidelines for IPSec VPN tunnels described in the table below ensure that your tunnel can support your desired number of concurrent sessions.

**NOTE**: We set up all customer IPSec VPN connections as a redundant (a.k.a. High Availability) pool with two tunnel gateways.

| Number of Concurrent Sessions | Recommended Number of IPSec Tunnels | Recommended Total Bandwidth
| :-------------------------- | :--- | :---
| 20 | 1 | 50Mbps
| 100 | 1 | 250Mbps
| 500 | 2 | 750Mbps
| 1,000 | 2 | 1.5Gbps
| 2,000 | 2 | 3Gbps

Bandwidth recommendations for testing depend on the number of pages downloaded by each test, and the approximate size of each page. To estimate your requirements, we recommend running 25-40 concurrent sessions through a proxy while observing network usage patterns. You should have enough bandwidth to download a page in 3 to 5 seconds.

Multiple users can run different tests simultaneously through the same tunnel, as long as the number is within the threshold of your concurrency limits/allocations.

## Testing with IPSec VPN Tunnels

Our IPSec VPN solution provides you with a single, static tunnel, through which you can run manual and automated tests securely on all Sauce Labs virtual and real devices.

Depending on the type of test you want to run, you may need to include certain desired capabilities in your test script.

### Automated Testing
To connect to Sauce Labs real and virtual devices, assign your IPSec VPN tunnel to the appropriate [Data Center Endpoint](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068) in your test automation script.

#### Appium and Selenium

* Set the `tunnelIdentifier` desired capability to the name of your organization's IPSec VPN tunnel

* Set the `parentTunnel` capability to the username of your Organization Admin

As an example, let's say the name of your tunnel is `AwesomeTunnel` and your Organization Admin's username is `john.smith`. Here's how you'd define it in Java:

```sh
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("tunnelIdentifier", "AwesomeTunnel");
caps.setCapability("parentTunnel","johnsmith");
```

#### Espresso Tests on Emulators
Set the `tunnel-identifier` argument for Sauce-Runner-Virtual to the name of your IPSec VPN tunnel.

### Live Testing
For Cross-Browser app testing, head to **Live** > **Cross-Browser** > Click **Sauce Connect Proxy** dropdown > Select your IPSec VPN tunnel.

For mobile device testing, to **Live** > **Mobile-App** > Choose your app from the list > Click **Sauce Connect Proxy** dropdown > Select your IPSec VPN tunnel.

:::caution Note About Public Real Devices
To ensure compliance with your company's settings and network policy, we recommend checking with your organization admin before running tests on virtual and real devices over an IPSec VPN connection.

To run tests on public real devices in the Sauce Labs cloud using IPSec VPN, your organization admin must switch on **Enable Sauce Connect Proxy/IPSec VPN for Public Cloud Devices**, a [security setting](https://wiki.saucelabs.com/display/DOCS/Security+Settings+for+Organizations) that is disabled by default. The setting enables all users across your organization to run live and automated tests on public devices over IPSec VPN.

Each time you initiate a test, you'll see a temporary pop-up alert window with a reminder that the utilization of a trusted IPSec VPN connection combined with RDC public real device tests may not be compliant with your organization's network policy.
:::

## Setting IPSec VPN Tunnel Permissions

IPSec VPN tunnel sharing permissions are established by Sauce Labs on the back end during initial setup and tunnel creation on your network. During this process, your organization can select from two permissions options:

* Restrict IPSec VPN tunnel access to only the Organization Admin
* Share IPSec VPN tunnel access organization-wide with all users (if tunnel is owned by Organization Admin)
* Share IPSec VPN tunnel access with your Team (if tunnel is owned by Team Admin)

At this time, we don't support granting permissions to individual users.

To switch between the above permissions settings, your Organization Admin would need to contact Sauce Labs Support and we'll configure it for you.

To verify that you have access to your organization's IPSec VPN tunnel, head to Tunnels. If the tunnel name and details are displayed here, it means you have access.

## Monitoring and Troubleshooting
To monitor tunnel stability, we recommend pinging the tunnel gateway or checking the status of the VPN connection from the IPSec gateway itself.

## FAQs

**What's the difference between Sauce Connect Proxy and IPSec VPN?**

Sauce Connect Proxy and IPSec VPN accomplish the same thing: establishing a secure connection between applications hosted on a private network and the Sauce Labs cloud.

The main differences are:

<table>
  <tr>
   <td><strong>Sauce Connect</strong>
   </td>
   <td><strong>IPSec VPN + Proxy</strong>
   </td>
  </tr>
  <tr>
   <td>You can <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=99649442">manage the lifespan of your test tunnels</a> by spinning up either:
<ul>
<li>Ephemeral (per-build) tunnels</li>
<li>Long-running tunnels</li>
</ul>
   </td>
   <td>IPSec VPN tunnels are static and always ready for use.
   </td>
  </tr>
  <tr>
   <td><p>The Sauce Connect client, by default, starts a single tunnel.</p>
<p>Redundant pools –  a.k.a. High Availability (HA) tunnel pools – can be established by running multiple clients using special command line options. HA pools also provide improved performance.</p>
   </td>
   <td>IPSec VPN tunnels are always started in High Availability mode.
<p>When you're set up with your Sauce Labs VPN connection, you'll have two Tunnel Gateways.</p>
   </td>
  </tr>
  <tr>
   <td>You need to run Sauce Connect client (binary) within your network to establish the tunnels. Sauce Connect proxy tunnels use our proprietary protocol that runs over TLS 1.2.
   </td>
   <td>IPSec VPN tunnels use industry-standard IPSec VPN to establish the connection between your private network and the Sauce Labs data center.
   </td>
  </tr>
  <tr>
   <td>Sauce Connect is a part of the Sauce Labs offering for all accounts (no additional fees).
   </td>
   <td>IPSec VPN is a feature that requires an additional fee. See <a href="https://saucelabs.com/pricing">Sauce Labs pricing</a> or contact your CSM for more information.
   </td>
  </tr>
  <tr>
   <td>Sauce Connect is usually demonstrated and set up as part of the PoC. Minimal setup time is required.
   </td>
   <td>IPSec VPN requires tight collaboration and coordination between the customer and the Sauce Labs teams which increases the setup time.
   </td>
  </tr>
</table>


**What devices are available with IPSec VPN?**

You can access all Sauce Labs virtual devices and real devices. See [Testing with IPSec VPN Tunnels](/secure-connections/ipsec-vpn#testing-with-ipsec-vpn-tunnels).


## Additional Resources

[White Paper: Overview of Sauce Labs Security Processes](https://saucelabs.com/resources/white-papers/overview-of-sauce-labs-security-processes).

If you need help with your tunnel(s) or are interested in getting set up, please contact your CSM, SE, or Sauce Labs Support.
