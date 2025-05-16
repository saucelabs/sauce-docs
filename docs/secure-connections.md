---
id: secure-connections
title: Sauce Trusted Connection
sidebar_label: Getting Started
---

If firewall restrictions at your company limit your ability to run tests on Sauce Labs, our Secure Connection solutions enable you to safely connect to the Sauce Labs cloud without exposing your internal IT infrastructure.

We offer two secure connectivity options - Sauce Connect and Sauce IPSec Proxy - both of which encrypt test data in transit using TLS 1.2 or higher, providing an additional layer of security between the Sauce Labs cloud and your application or website.

To select the best solution for your needs, review our [Overview of Sauce Labs Security Processes](https://saucelabs.com/resources/white-papers/overview-of-sauce-labs-security-processes).

## Sauce Connect

For guidance on optimizing your network and development environment for Sauce Connect performance, see our [Sauce Connect Security Overview](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview) white paper.

<div className="box-wrapper" markdown="1">
    <div className="box box1 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect-5">Sauce Connect Overview</a></h3>
      <p>Learn about Sauce Connect and why we recommend it over allowlisting individual IP addresses.</p>
      </div>
    </div>
    <div className="box box2 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect-5/quickstart/">Quickstart</a></h3>
      <p>Follow our step-by-step instructions to quickly set up and launch Sauce Connect.</p>
      </div>
    </div>
    <div className="box box3 card">
      <div className="container">
      <h3><a href="/dev/cli/sauce-connect-5">CLI Reference</a></h3>
      <p>Learn how to use CLI flags to configure Sauce Connect.</p>
      </div>
    </div>
    <div className="box box4 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect-5/guides/ci-cd-integration">CI/CD Integration</a></h3>
      <p>Integrate Sauce Connect with your CI/CD pipeline to enable seamless, automated functional testing behind your firewall.</p>
      </div>
    </div>
    <div className="box box5 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect-5/system-requirements">System Requirements</a></h3>
      <p>Learn about Sauce Connect System Requirements.</p>
      </div>
    </div>
    <div className="box box6 card">
      <div className="container">
      <h3><a href="/secure-connections/sauce-connect-5/guides/tunnel-pool/">Tunnel Pool Setup</a></h3>
      <p>Run high volumes of parallel tests efficiently by configuring multiple Sauce Connect tunnels in a pool.</p>
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

Sauce Connect and Sauce IPSec Proxy accomplish the same thing: establish a secure connection between apps hosted on your private network and Sauce Labs cloud virtual machines and real devices. The main differences are:

<table>
  <tr>
   <td><strong>Sauce Connect</strong></td>
   <td><strong>Sauce IPSec Proxy</strong></td>
  </tr>
  <tr>
   <td>By default, the Sauce Connect client starts a single tunnel. For high-volume testing, we recommend tunnel pools, which you can launch using designated <a href="/secure-connections/sauce-connect-5/guides/tunnel-pool/">Sauce Connect options</a>.</td>
   <td>Sauce IPSec Proxy is a static setup with two tunnel gateways that are pre-configured in pool mode.</td>
  </tr>
  <tr>
   <td>You can manage tunnel lifespan by launching different types of tunnels: ephemeral (per-build) tunnels or long-running tunnels.</td>
   <td>Sauce IPSec Proxy tunnels are long-running, by default.</td>
  </tr>
  <tr>
   <td>Sauce Connect client (binary) runs within your network to establish the tunnels, which use proprietary protocol over TLS 1.2.</td>
   <td>Sauce IPSec Proxy tunnels use industry standards to establish connection and offer two options for routing traffic to sites and apps under test.</td>
  </tr>
  <tr>
   <td>Available to all Sauce Labs accountholders at no additional cost.</td>
   <td><a href="https://saucelabs.com/pricing">Enterprise Plans</a> only.</td>
  </tr>
  <tr>
   <td>Regardless of your license type (free-trial, self-serve, enterprise), you can download and use Sauce Connect.</td>
   <td>Requires a custom setup between your network and the Sauce Labs cloud prior to use.</td>
  </tr>
  <tr>
   <td>Minimal setup time required; as little as 5-10 minutes.</td>
   <td>Setup time is appropriately four weeks; involves close collaboration and coordination between your organization and Sauce Labs.</td>
  </tr>
</table>
