---
id: secure-connections
title: Sauce Trusted Connection
sidebar_label: Getting Started
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

We offer two options to provide an extra layer of security to protect test data in flight between the Sauce Labs cloud and your app or site under test on your network. Both of these solutions, Sauce IPSec Proxy and Sauce Connect Proxy, support secure connectivity using TLS 1.2 or above.

To determine which solution is best for you, see [Overview of Sauce Labs Security Processes](https://saucelabs.com/resources/white-papers/overview-of-sauce-labs-security-processes).

## Sauce IPSec Proxy

<p> <Highlight color="#013a70">ENTERPRISE PLANS ONLY</Highlight> </p>

Sauce IPSec Proxy establishes a VPN connection between two IPSec gateways, and a tunnel gateway that allows only your authorized test VMs to connect. Contact your Sauce Labs Sales Engineer or Customer Success Manager for more information.

<div className="box-wrapper" markdown="1">

  <div className="box box1 card">
    <div className="container">
    <h3><a href="/secure-connections/ipsec-vpn">Using IPSec Tunnels</a></h3>
    <p>The tunnel gateway is always on for the lifetime of the secure Sauce IPSec Proxy connection, allowing you to run secure and encrypted tests anytime in the Sauce Labs cloud.</p>
    </div>
  </div>

  <div className="box box2 card">
    <div className="container">
    <h3><a href="/secure-connections/ipsec-vpn#bandwidth-recommendations">Sauce IPSec Proxy Tunnel Network Recommendations</a></h3>
    <p>Depending on the number of tests you’re running, you'll need to utilize either one or two Sauce IPSec Proxy tunnels for best performance.</p>
    </div>
  </div>

</div>

  <div className="box boxwidebottom card">
    <div className="container">
    <h3><a href="/secure-connections/ipsec-vpn">Sharing Sauce IPSec Proxy Tunnels</a></h3>
    <p>You can share Sauce IPSec Proxy tunnel access with your entire organization or restrict access to admins only.</p>
    </div>
  </div>

## Sauce Connect Proxy™

  See [White Paper: Sauce Connect Proxy Security Overview](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview) for information about optimizing your network and development environment for the best Sauce Connect Proxy performance.

  <div className="box-wrapper" markdown="1">
    <div className="box box1 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect">Using Sauce Connect Proxy</a></h3>
      <p>Review the Sauce Connect Proxy system and network requirements, and then install the Sauce Connect Proxy client.</p>
      </div>
    </div>
    <div className="box box2 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect/setup-configuration/setup-configuration">Setup and Configuration</a></h3>
      <p>Find the right Sauce Connect Proxy tunnel configuration for you and your organization. Once you’re connected, use our code samples to run your first test.</p>
      </div>
    </div>
    <div className="box box3 card">
      <div className="container">
      <h3><a href="/dev/cli/sauce-connect-proxy">Command Line Reference</a></h3>
      <p>Browse the security documentation to learn how to communicate with the Sauce Labs cloud from your private network.</p>
      </div>
    </div>
    <div className="box box4 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect/setup-configuration/ci-cd-environments">CI/CD Environments</a></h3>
      <p>Streamline your Sauce Connect Proxy automated functional testing by integrating your preferred build provider with Sauce Labs.</p>
      </div>
    </div>
    <div className="box box5 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect/proxy-tunnels">Using Tunnels</a></h3>
      <p>Best practices for managing tunnels.</p>
      </div>
    </div>
    <div className="box box6 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect/security-authentication">Security and Authentication</a></h3>
      <p>Settings and tips for configuring Sauce Connect Proxy with your network.</p>
      </div>
    </div>
  </div>


## Choosing the Right Solution

Sauce Connect Proxy and Sauce IPSec Proxy accomplish the same thing: establishing a secure connection between applications hosted on a customer's private network and Sauce Labs cloud virtual machines and real devices. The main differences are:

<table>
  <tr>
   <td><strong>Sauce Connect Proxy</strong>
   </td>
   <td><strong>Sauce IPSec Proxy</strong>
   </td>
  </tr>
  <tr>
   <td>By default, the Sauce Connect Proxy client starts a single tunnel. For high-volume testing, we recommend High Availability tunnel pools, which you can launch using designated <a href="/dev/cli/sauce-connect-proxy">Sauce Connect Proxy command-line options</a>).
   </td>
   <td>Sauce IPSec Proxy is a static setup with two tunnel gateways that are pre-configured in High Availability mode.
   </td>
  </tr>
  <tr>
   <td>Customers can manage tunnel lifespan by launching different types of tunnels: ephemeral (per-build) tunnels or long-running tunnels.
   </td>
   <td>Sauce IPSec Proxy tunnels are long-running, by default.
   </td>
  </tr>
  <tr>
   <td>Sauce Connect Proxy client (binary) runs within the customer's network to establish the tunnels, which use proprietary protocol over TLS 1.2.
   </td>
   <td>Sauce IPSec Proxy tunnels use industry standards to establish connection and offer two options for routing traffic to sites and applications under test.
   </td>
  </tr>
  <tr>
   <td>Available to all Sauce Labs accountholders at no additional cost.
   </td>
   <td><a href="https://saucelabs.com/pricing">Enterprise Plans</a> only.
   </td>
  </tr>
  <tr>
   <td>All customers can download and launch Sauce Connect Proxy tunnels on their own local machine. For help, please contact our Support Team.
   </td>
   <td>Requires a custom setup between your network and the Sauce Labs cloud prior to use.
   </td>
  </tr>
  <tr>
   <td>Minimal setup time required; as little as 5-10 minutes.
   </td>
   <td>Setup time is appropriately 4 weeks; involves close collaboration and coordination between your organization and Sauce Labs.
   </td>
  </tr>
</table>
