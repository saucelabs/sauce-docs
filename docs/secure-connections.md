---
id: secure-connections
title: Sauce Trusted Connection
sidebar_label: Getting Started
---

If your company has firewall rules that limit your ability to run tests on Sauce Labs, you can use our Secure Connection features to connect to Sauce Labs in the cloud without exposing your company's IT infrastructure to security risks.

We offer two options to provide an extra layer of security to protect test data in flight between the Sauce Labs cloud and your app or site under test on your network. Both of these solutions, Sauce Connect Proxy and Sauce IPSec Proxy, support secure connectivity using TLS 1.2 or above.

To determine which solution is best for you, see [Overview of Sauce Labs Security Processes](https://saucelabs.com/resources/white-papers/overview-of-sauce-labs-security-processes).

## Sauce Connect Proxy

See our [Sauce Connect Proxy Security Overview](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview) white paper for information about optimizing your network and development environment for Sauce Connect Proxy performance.

<div className="box-wrapper" markdown="1">
<div className="box box1 card">
  <div className="container">
  <h3><a href="/secure-connections/sauce-connect-5">Sauce Connect Proxy Overview</a></h3>
  <p>Learn about Sauce Connect Proxy and why we recommend it over allowlisting individual IP addresses.</p>
  </div>
</div>
<div className="box box2 card">
  <div className="container">
  <h3><a href="/secure-connections/sauce-connect-5/quickstart/">Quickstart</a></h3>
  <p>Get up and running with Sauce Connect Proxy in minutes.</p>
  </div>
</div>
    <div className="box box3 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect-5/operation/overview">Setup and Configuration</a></h3>
      <p>Learn how to launch a basic Sauce Connect Proxy tunnel configuration. Once you’re connected, use our code samples to run your first test.</p>
      </div>
    </div>
    <div className="box box4 card">
      <div className="container">
      <h3><a href="/dev/cli/sauce-connect-5">CLI Reference</a></h3>
      <p>Learn how to use our CLI flags to communicate with the Sauce Labs cloud from your private network.</p>
      </div>
    </div>
    <div className="box box5 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect-5/operation/ci-cd-integration">CI/CD Integration</a></h3>
      <p>Streamline your Sauce Connect Proxy automated functional testing by integrating your preferred build provider with Sauce Labs.</p>
      </div>
    </div>
    <div className="box box6 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect/proxy-tunnels">Using Tunnels</a></h3>
      <p>Best practices for starting, stopping, and monitoring tunnels.</p>
      </div>
    </div>
    <div className="box box7 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect/security-authentication">Security and Authentication</a></h3>
      <p>Settings and tips for configuring Sauce Connect Proxy with your network.</p>
      </div>
    </div>
    <div className="box box8 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect-5/operation/tunnel-pool/">Tunnel Pool Setup</a></h3>
      <p>Set up a high volume of tests to run parallel through multiple Sauce Connect Proxy tunnels to save time.</p>
      </div>
    </div>
  </div>

## Sauce IPSec Proxy

<p><small><span className="sauceGreen">Enterprise Plans only</span></small></p>

Sauce IPSec Proxy establishes a VPN connection between two IPSec gateways, and a tunnel gateway that allows only your authorized test VMs to connect. For more information, see our [Sauce IPSec Proxy Overview](https://saucelabs.com/resources/white-papers/sauce-ipsec-proxy-overview) white paper or contact your Customer Success Manager or Sauce Labs Sales Engineer.

<div className="box-wrapper" markdown="1">

  <div className="box box1 card">
    <div className="container">
    <h3><a href="/secure-connections/ipsec-vpn">Using Sauce IPSec Tunnels</a></h3>
    <p>The tunnel gateway is always on for the lifetime of the secure Sauce IPSec Proxy connection, allowing you to run secure and encrypted tests any time in the Sauce Labs cloud.</p>
    </div>
  </div>

  <div className="box box2 card">
    <div className="container">
    <h3><a href="/secure-connections/ipsec-vpn#bandwidth-recommendations">Network Recommendations</a></h3>
    <p>Depending on the number of tests you’re running, you'll need to utilize either one or two Sauce IPSec Proxy tunnels for best performance.</p>
    </div>
  </div>

</div>

<div className="box boxwidebottom card">
  <div className="container">
  <h3><a href="/secure-connections/ipsec-vpn">Sharing Tunnels</a></h3>
  <p>You can share Sauce IPSec Proxy tunnel access with your entire organization or restrict access to admins only.</p>
  </div>
</div>

## Choosing the Right Solution

Sauce Connect Proxy and Sauce IPSec Proxy accomplish the same thing: establish a secure connection between apps hosted on your private network and Sauce Labs cloud virtual machines and real devices. The main differences are:

<table>
  <tr>
   <td><strong>Sauce Connect Proxy</strong></td>
   <td><strong>Sauce IPSec Proxy</strong></td>
  </tr>
  <tr>
   <td>By default, the Sauce Connect Proxy client starts a single tunnel. For high-volume testing, we recommend High Availability tunnel pools, which you can launch using designated <a href="/dev/cli/sauce-connect-proxy">Sauce Connect Proxy command-line options</a>.</td>
   <td>Sauce IPSec Proxy is a static setup with two tunnel gateways that are pre-configured in High Availability mode.</td>
  </tr>
  <tr>
   <td>You can manage tunnel lifespan by launching different types of tunnels: ephemeral (per-build) tunnels or long-running tunnels.</td>
   <td>Sauce IPSec Proxy tunnels are long-running, by default.</td>
  </tr>
  <tr>
   <td>Sauce Connect Proxy client (binary) runs within your network to establish the tunnels, which use proprietary protocol over TLS 1.2.</td>
   <td>Sauce IPSec Proxy tunnels use industry standards to establish connection and offer two options for routing traffic to sites and apps under test.</td>
  </tr>
  <tr>
   <td>Available to all Sauce Labs accountholders at no additional cost.</td>
   <td><a href="https://saucelabs.com/pricing">Enterprise Plans</a> only.</td>
  </tr>
  <tr>
   <td>Regardless of your license type (free-trial, self-serve, enterprise), you can download and use Sauce Connect Proxy.</td>
   <td>Requires a custom setup between your network and the Sauce Labs cloud prior to use.</td>
  </tr>
  <tr>
   <td>Minimal setup time required; as little as 5-10 minutes.</td>
   <td>Setup time is appropriately four weeks; involves close collaboration and coordination between your organization and Sauce Labs.</td>
  </tr>
</table>
