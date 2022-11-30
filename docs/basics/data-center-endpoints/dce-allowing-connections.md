---
id: dce-allowing-connections
title: Allowing Connections Between Your Network And Sauce Labs
sidebar_label: Allowing Connections
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


If you have an unrestricted connection to the internet, you will be able to reach Sauce Labs and run tests without the need for any special configuration. However, if you are in a restricted network, you may need to configure access to Sauce Labs from your network in order to be able to run tests, use our REST API, etc.

In addition, if you need to test apps or sites that are behind a firewall or have restricted access, you will need to configure access to those servers from Sauce Labs.

This document covers the different ways you can achieve both of the above, with their pros and cons.

Configuring access to Sauce Labs from your network
If you cannot access Sauce Labs from your network, you will need to work with your IT/Network team to set this up. There are a couple of ways to do this:

Allowing outgoing connections to Sauce Labs by hostname
Allowing outgoing connections to Sauce Labs by IP range or IP addresses

Allowing outgoing connections to Sauce Labs by hostname
This is the preferred and the simplest way to allow outgoing connections to Sauce Labs from your network. If you are able to configure outgoing connections by hostname, there are different ways to do this:

If you are able to configure outgoing connections using a top level domain name, just allowing connections to *.saucelabs.com will take care of everything.


If you need to allow outgoing connections only to specific Sauce Labs data centers, or to specific Sauce Labs services, see the Data Center Endpoints page in our documentation for the hostnames to allow access to. Again, this will require the use of wildcards, e.g. maki*.miso.saucelabs.com:443 for Sauce Connect tunnel servers for our US-West data center.

Allowing outgoing connections to Sauce Labs by IP range or IP addresses
If you are unable to configure outgoing connections to Sauce Labs by hostname, the other option is to use IP ranges or IP addresses. Again, there are different ways to do this:


The simplest way to set this up is to allow outgoing connections to our IP ranges. See the Data Center Endpoints page in our documentation for the IP ranges to allow access to.


If you are unable to allow outgoing connections to IP ranges and you have to list individual IP addresses, you should really talk to your firewall provider! Our IP ranges contain thousands of individual IP addresses, and allowing access to each one will be a lot of work. For example, our 162.222.72.0/21 range contains 2048 IP addresses.

Responses to outgoing requests
A common misconception is that if you need to configure access for outgoing connections to Sauce Labs from your network, you also need to configure incoming connections so that you can get the responses back successfully. This is not necessary. All connections to Sauce Labs are made using TCP based connections, and a response to an outgoing connection will be allowed by a firewall if the outgoing connection is successful.


Configuring access into your network from Sauce Labs
If you need to test apps or sites that are behind a firewall or have restricted access, you will need to configure access to those servers from Sauce Labs. Again, there are a few different ways to achieve this:

Using a Sauce Trusted Connection.
Configuring an allowlist of IP ranges for incoming connections.

Using a Sauce Trusted Connection
We offer two types of trusted connections into your network. The main advantages of using a trusted connection is that you can control which traffic can utilize the connections, and which users and teams within your Sauce Labs account are able to use the connections.
Sauce Connect Proxy
Sauce Connect is a proxy server that opens a secure connection between a Sauce Labs virtual machine, emulator, simulator or real device running your browser or native app tests, and an app or website you want to test that is on your local machine or behind a corporate firewall.

See our documentation for more details on using Sauce Connect Proxy.
Sauce IPSec Proxy
Sauce IPSec Proxy is an enterprise-grade IPSec VPN solution that provides a secure, static connection between apps hosted on your private network (or local machine) and devices on the Sauce Labs cloud.

See our documentation for more details on using Sauce IPSec Proxy.

Configuring an allowlist of IP ranges for incoming connections
If you are unable to use a Sauce Trusted Connection, the only other option is to set up an allowlist of IP ranges for connections from Sauce Labs into your network. To do this, you would need to configure your firewall or the system you are using to restrict access to your servers to allow incoming connections from Sauce Labs IP ranges. See the Data Center Endpoints page in our documentation for the IP ranges to allow connections from.

The drawbacks of using this approach are that you cannot restrict or control the requests or traffic coming from Sauce Labs that are allowed to access your network.
