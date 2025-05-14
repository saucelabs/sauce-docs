---
id: security-authentication
title: Security and Authentication
sidebar_label: Security and Authentication
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Network Security

Sauce Connect Proxy establishes a secure connection between your apps hosted on an internal server and the Sauce Labs VMs or real devices used during your tests.

Data transmitted by Sauce Connect Proxy is encrypted through the TLS protocol, which uses perfect forward secrecy for maximum security.

### Running in a Demilitarized Zone (DMZ)

Within your infrastructure, Sauce Connect Proxy must be able to reach the app or server you want to test via your network, but can and should be firewalled from the rest of your internal network.

We recommend running Sauce Connect Proxy in a firewalled DMZ on a dedicated machine and setting up firewall rules to restrict access from that DMZ to your internal network. Use caution when locating and configuring Sauce Connect in a DMZ.

For more information, see [DMZ (computing)](<https://en.wikipedia.org/wiki/DMZ_(computing)>) and [Common Mistakes in Network Configurations](/secure-connections/sauce-connect-5/troubleshooting/).

## Securing Sauce Connect Proxy

There are several ways to secure Sauce Connect Proxy in your network. With our recommended configuration, firewall rules are set so that Sauce Connect Proxy has only one point of access to the customer's internal network &#8212; through a single HTTP proxy &#8212; and all inbound traffic will be relayed. You'll have a secure setup with fine-grained access control and complete logging.

### Recommended Configuration

The [sc client program](/secure-connections/sauce-connect/installation)
establishes a TLS connection (tunnel connection) to a dedicated tunnel endpoint
server hosted in the Sauce Labs cloud. During test sessions, browsers and mobile
apps use this tunnel endpoint as an HTTP proxy. HTTP requests are multiplexed
and relayed back through the tunnel connection to the sc client program, which
proxies these HTTP requests, providing access to the App Under Test within your
network.

There are two options to control and monitor the access sc has to your network: firewall rules and proxy settings. In our recommended configuration, both are used.

#### Firewall Rules

The sc client should be run on a dedicated, single-purpose machine or VM (aka the SC Host), which has access only to the systems required for testing. This can be accomplished with an external firewall.

For maximum control, we recommend the SC Host is firewalled so that its only access to the customer network is through a single HTTP proxy, where all inbound traffic will be relayed, and can be appropriately restricted and logged. Unintended access through other routes can be prevented in the event of a security vulnerability that affects Sauce Connect.

#### Proxy Settings

In its default configuration, Sauce Connect Proxy will act as an HTTP proxy itself, relaying requests received over the tunnel connection directly to hosts in the customer network.

By using the `--proxy` or `--pac` command line options, `sc` can be configured to relay all requests to another HTTP proxy or proxies, where policy can be controlled and activity can be logged and monitored. The access provided by the configured proxies is in turn the only access that inbound requests coming through `sc` will have to the customer network.

We recommend the use of an HTTP proxy that is familiar to the customer's security team. The proxy should be configured to allow access only to a allowlisted set of URL domains or URL prefixes used for testing. Access should be logged. Note that logs can be inspected by an Intrusion Detection System for malware signatures and other signs of suspicious activity.

For more information, see the [Sauce Connect Proxy CLI Reference](/dev/cli/sauce-connect-proxy) and [Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).

##### **Recommended Sauce Connect Proxy Configuration**

<img src={useBaseUrl('img/sauce-connect/recommended-sc-config.png')} alt="Recommended Sauce Connect Proxy configuration" width="650"/>

By configuring Sauce Connect Proxy following these steps, you can create a security profile with fine-grained control over access and complete logging of activity:

1. Designate a dedicated, single-purpose machine or VM as a Sauce Connect Proxy client host.
2. Configure an HTTP proxy of the customer's choice, the HTTP proxy, only allowing access to systems under test, and logging all traffic.
3. Configure any Intrusion Detection Systems to monitor the sc proxy logs.
4. Firewall the SC Host so that its customer network access is restricted to the specific host and port where the sc proxy resides.
5. Run `sc` with the `--proxy` or `--pac` command line options, configuring it to use the sc proxy for all inbound HTTP connections.

Benefits to this configuration:

- Single point of entry for requests relayed through Sauce Connect Proxy to access the customer network
- Layer 3 access restricted to a single proxy
- Fine-grained access control at the HTTP level
- Only the App Under Test is exposed to requests originating from Sauce Labs
- Complete logging of access
- Easy monitoring with Intrusion Detection Systems

### Sauce Labs Security Process

Sauce Labs provides a secure and scalable cloud computing platform for functional testing of web and mobile apps located in world-class data centers in North America and Europe.

Having our own cloud enables us to provide our services faster, and with higher security, than can be delivered on a public cloud with shared resources. Managing our own data centers also means that we are responsible for delivering a consistent experience with the utmost concern for the security of your data.

For an overview of the services offered by Sauce Labs, our methods for securing the transmission of test data and results, and our security policies and procedures, see our white paper, [Overview of Sauce Labs Security Processes](https://saucelabs.com/resources/white-papers/overview-of-sauce-labs-security-processes).

## Certificate Handling

The security of Sauce Connect Proxy communication to both the Sauce Labs API and the virtual machine hosting your tests in the Sauce Labs cloud is managed through [public key certificates](https://en.wikipedia.org/wiki/Public_key_certificate).

For connection to the API, Sauce Connect Proxy uses certificates issued by certificate authorities, which are integrated into the operating system of the machine where Sauce Connect Proxy is running.

For connection to the Sauce Labs virtual machines, the certificate presented by the tunnel endpoint is signed by public certificate authorities.

### Setting Revocation Information for SSL Certificate Verification

When securing Sauce Connect Proxy, be sure to allowlist these sites so that the Sauce Connect SSL certificates can be verified:

- http://crl1.digicert.com
- http://crl2.digicert.com
- http://crl3.digicert.com
- http://crl4.digicert.com
- http://ocsp.digicert.com
- http://status.geotrust.com
- http://\*.o.lencr.org
- http://\*.c.lencr.org
- http://gp.symcd.com

Sauce Connect Proxy will try to resolve the entire certificate chain at runtime and check if it can reach the OCSP servers in the entire chain. Because the chain is resolved during runtime and certificates change and are constantly renewed, it's possible that the OCSP sites listed in the certification check might change over time as well.

In your log, look for the entries following the `"checking OCSP entry"` line to get the list of certificate authority sites.

In addition to allowlisting these sites, consult the list of domains at the RapidSSL website and add them to your allowlist as well to make sure that Sauce Connect Proxy can connect to all appropriate certificate-issuing authorities.

#### OCSP Tunnel Certificate Validation

This feature lets the Sauce Connect client validate that the tunnel endpoint's public certificate has not been revoked. OCSP relies on Public Key Infrastructure and needs to make additional HTTP requests to OCSP servers associated with the tunnel endpoint’s certificate chain.

You can set your own parameters (e.g., logging, bypassing OCSP checks) by using OCSP command-line options (see the [Sauce Connect Proxy CLI Reference](/dev/cli/sauce-connect-proxy)). Additionally, OCSP supports the following flags: `--proxy`, `--pac`, `--no-autodetect`, `--proxy-tunnel`, `--tunnel-cainfo`, `--tunnel-capath`.

### Connecting to the Sauce Labs REST API

Connections to the Sauce Labs API go through `https://saucelabs.com`. The way in which Sauce Connect Proxy is able to access the certificates to secure the connection depends on the operating system of the machine where Sauce Connect is installed.

#### Linux

On Linux machines, Sauce Connect Proxy will look for the directory where the certificate bundle is installed, typically something like `/etc/ssl/certs`. If it can't find the directory, it will generate an error when trying to connect to the Sauce Labs API.

#### Windows

On Windows machines, certificates are managed through the Security Support Provider Interface API (see [Security Support Provider Interface](https://en.wikipedia.org/wiki/Security_Support_Provider_Interface)) over SChannel, which requires access to [OCSP](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol) URLs to verify certificates. If you have set up highly restrictive firewalls or proxies on the machine where Sauce Connect Proxy is running and it can't connect to these URLs, you'll get an error when attempting to connect to the Sauce Labs API.

#### macOS

On macOS machines, certificates are pre-installed as part of the [Trust Store](https://support.apple.com/en-us/HT204132) and are accessible through the [Keychain](<https://en.wikipedia.org/wiki/Keychain_(software)>). If Sauce Connect Proxy is installed on a macOS machine, no troubleshooting should be necessary, as long as it can access the Keychain.

### Tunnel Connection to the Sauce Labs Virtual Machine over SSL/TLS

Sauce Connect Proxy routes VM-to-test target traffic through the TLS connection between the Sauce Connect Proxy client and the Sauce Connect Server. Sauce Connect Proxy is not used with your Selenium and Appium webdriver traffic to the Sauce Labs `on-demand` endpoint, for example, `ondemand.us-west-1.saucelabs.com`.
