---
id: sauce-connect
title: Sauce Connect Proxy
sidebar_label: Using Sauce Connect
---

[Sauce Connect Proxy&trade;](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365718) is a proxy server that opens a secure connection between a Sauce Labs virtual machine, emulator, simulator or real device running your browser or native app tests, and an application or website you want to test that is on your local machine or behind a corporate firewall.

## Getting Started

Prior getting started, you'll need to validate that your local machine meets our system requirements and confirm that your firewall rules allow for outbound traffic.

From there, install the Sauce Connect Proxy client on your local network. Should you encounter issues when starting or using the client, we recommend consulting your network administrator. They may need to update firewall rules or help configure Sauce Connect Proxy to use a network proxy.

## Choose Sauce Connect Proxy over Whitelisting IP Addresses

Testing your internal systems with Sauce Labs requires that our service is able to establish a secure connection.

Rather than whitelisting our external IP addresses, we strongly recommend using our [Sauce Connect Proxy](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy) tool, which will provide the following benefits:


### Configurability

Sauce Connect Proxy provides many tools designed to improve the testing experience, from selective traffic routing to bandwidth restriction.

Each Sauce Connect Proxy instance can be assigned different network proxies, run on different hosts, allocated to different users and allowed access to different systems under test. This allows infrastructure teams great control and flexibility over system access.

Whitelisting provides no controls over which systems can be accessed by which users; anyone with the correct URL can access any service.

### Portability

Sauce Connect Proxy can be used in any part of your corporate infrastructure, with relatively minimal setup. It allows you to test systems in different environments, different locations, and different physical hosts. With a flexible Sauce Connect setup, a developer can run tests on their local machine, their staging service, their build server, and anywhere else required.

Whitelisting, in comparison, requires different routes and URLs for each environment under test. This places a maintenance burden on the networking team and leads to configuration problems for testers.

### Reliability and Ease of Maintenance

Once you're up and running with Sauce Connect Proxy, no maintenance is required – you'll only need to update to the new versions of our software, upon release.

Sauce Connect Proxy can be set up for multiple corporate users and multiple systems under test, at the same time.

With Sauce Connect Proxy, our support team can provide greater assistance debugging connectivity and reliability problems, thanks to improved logging and network tracking. Additionally, Sauce Connect Proxy's underlying network tools improve reliability over bad network connections.

### Security

Sauce Labs operates from a wide range of IP addresses, which you could allocate to any test environment at any time. By whitelisting these IP addresses, any Sauce Labs customer could conceivably send requests to your system under test – and your network infrastructure would allow it. Additionally, whitelisting does not provide tools for time-based access controls or easy disconnection.

By using Sauce Connect Proxy instead of whitelisting, your network will be secure. At the end of every Sauce Connect Proxy session, upon terminating the client, the connection between our service and your infrastructure is severed, allowing you fine-grained access control.
