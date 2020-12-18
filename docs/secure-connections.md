---
id: secure-connections
title: Overview of Sauce Labs Secure Connection Options
sidebar_label: Getting Started
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

We offer two options to provide an extra layer of security to protect test data in flight between the Sauce Labs cloud and your app or site under test on your network. Both of these solutions, Sauce Connect (SSL Proxy) solution and IPSec VPN, support secure connectivity using TLS 1.2 or above. To determine which solution is best for you, see [Overview of Sauce Labs Security Processes](https://saucelabs.com/resources/white-papers/overview-of-sauce-labs-security-processes).

## Sauce Connect Proxy™

For more information about Sauce Labs architecture, security requirements/protocols, and optimizing your network for the best Sauce Connect Proxy performance within your development environment, see [White Paper: Sauce Connect Proxy Security Overview](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview).

<div class="box-wrapper" markdown="1">
  <div class="box box1 card">
    <div class="container">
    <h3><a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365718">Using Sauce Connect Proxy</a></h3>
    <p>Review Sauce Connect system and network requirements then install the Sauce Connect Proxy client.</p>
    </div>
  </div>
  <div class="box box2 card">
    <div class="container">
    <h3><a href="https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Setup+and+Configuration">Setup and Configuration</a></h3>
    <p>Find the right Sauce Connect Proxy tunnel configuration for you and your organization. Once you’re connected, use our code samples to run your first test.</p>
    </div>
  </div>
  <div class="box box3 card">
    <div class="container">
    <h3><a href="https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Command-Line+Quick+Reference+Guide">Command Reference</a></h3>
    <p>Browse the security documentation to learn how to communicate with Sauce Labs Cloud from your private network.</p>
    </div>
  </div>
  <div class="box box4 card">
    <div class="container">
    <h3><a href="https://wiki.saucelabs.com/display/DOCS/Setting+Up+CI+Platform+Integrations+with+Sauce+Plugins">Plugins for CI/CD Pipeline Integration</a></h3>
    <p>Streamline your Sauce Connect Proxy automated functional testing by integrating your preferred build provider with Sauce Labs.</p>
    </div>
  </div>
  <div class="box box5 card">
    <div class="container">
    <h3><a href="https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Tunnel+Management">Sauce Connect Tunnel Management</a></h3>
    <p>Best practices for managing tunnels.</p>
    </div>
  </div>
  <div class="box box6 card">
    <div class="container">
    <h3><a href="https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+and+Network+Security">Network Security and Authentication</a></h3>
    <p>Settings and tips for configuring Sauce Connect Proxy with your network.</p>
    </div>
  </div>
</div>

## IPSec VPN

<p> <Highlight color="#013a70">ENTERPRISE PLANS ONLY</Highlight> </p>

Our IPSec VPN solution establishes a VPN connection between two IPSec gateways, and a tunnel gateway that allows only your authorized test VMs to connect. Contact your Sauce Labs Sales Engineer or Customer Success Manager for more information.

<div class="box-wrapper" markdown="1">
  <div class="box box1 card">
    <div class="container">
    <h3><a href="https://wiki.saucelabs.com/display/DOCS/Using+an+IPSec+VPN+Tunnel">Using IPSec Tunnels</a></h3>
    <p>The tunnel gateway is always on for the lifetime of the secure IPSec VPN connection, allowing you to run secure and encrypted tests anytime in the Sauce Labs cloud.</p>
    </div>
  </div>
  
  <div class="box box2 card">
    <div class="container">
    <h3><a href="https://wiki.saucelabs.com/display/DOCS/IPSec+VPN+Network+Requirements">IPSec VPN Network Requirements</a></h3>
    <p>Our minimum bandwidth requirements differ, depending on the number of tests you’re running.</p>
    </div>
  </div>
  </div>
  
  <div class="box boxwidebottom card">
    <div class="container">
    <h3><a href="https://wiki.saucelabs.com/display/DOCS/Sharing+IPSec+VPN+Tunnels">Sharing IPSec VPN Tunnels</a></h3>
    <p>IPSec tunnel permission settings allow you to share with your entire organization or restrict access to admins only.</p>
    </div>
  </div>
