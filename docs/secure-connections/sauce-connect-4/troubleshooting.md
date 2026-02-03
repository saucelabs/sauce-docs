---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Below are some tips to help troubleshoot Sauce Connect Proxy.

:::caution Important
Make sure you're using the latest version of Sauce Connect Proxy, which you can download [here](/secure-connections/sauce-connect-5/installation/). Using older versions may cause technical issues. If you run into an error trying to launch a tunnel, this should be your first step.
:::

## Generating Tunnel Logs to Help with Troubleshooting

To generate a tunnel log file, which is a great tool to troubleshoot Sauce Connect Proxy, use the `–l (--logfile <file>)` command line option. The log provides details on network transactions and Sauce Connect Proxy activity.

By default, Sauce Connect Proxy names the log file `sc.log`, and writes to your local operating system's temporary folder. On Linux / Mac OS X, this is usually `/tmp`. On Windows, it varies by individual release. You can also specify a specific location for the output in the `<file>` of the command-line `–l (--logfile <file>)`.

You can enable verbose logging, which increases the logging level of Sauce Connect Proxy, with the `--verbose` command-line. Verbose output will be sent to the Sauce Connect Proxy log file, rather than standard out. To send all logging to stdout, set a value of `-` for the `--logfile` command (i.e., `--logfile -`) when starting Sauce Connect Proxy.

## Network Configuration with Firewalls and Proxies

Is there a firewall or proxy server in place between your machine running Sauce Connect Proxy and Sauce Labs (`*.saucelabs.com:443`)? You may need to allow access in your firewall rules or configure Sauce Connect Proxy to use an additional proxy. For more information, see [Setup with Additional Proxies](/secure-connections/sauce-connect-4/setup-configuration/additional-proxies).

Sauce Connect Proxy needs to establish outbound connections to both \*.saucelabs.com (or a [specific data center](/basics/data-center-endpoints)) on `port 443` and to a tunnel VM with an IP in the [Sauce Labs ranges](/basics/data-center-endpoints).

For information on setting up Sauce Connect Proxy within various network environments, see [Security and Authentication](/secure-connections/sauce-connect-4/security-authentication).

## Checking Network Connectivity to Sauce Labs

It is essential to make sure that the Sauce Labs REST API is accessible from the machine running Sauce Connect Proxy.

A typical error message that the Sauce Connect Proxy prints when it fails to connect to Sauce Labs would say something like this:

```bash
Sauce Connect failed to start - Failed to reach https://saucelabs.com/rest/v1/USERNAME/tunnels/info/updates.
Please visit https://docs.saucelabs.com/secure-connections/sauce-connect-4/troubleshooting
```

The Sauce Labs connectivity can be tested by issuing a telnet, or cURL command to saucelabs.com and/or to a [specific data center](/basics/data-center-endpoints) endpoint from the machine's command line interface.

If any of these commands fail, you should work with your internal network team to resolve them.

<Tabs
defaultValue="curl"
values={[
{label: 'cURL', value: 'curl'},
{label: 'telnet', value: 'telnet'},
{label: 'Sauce Connect Proxy', value: 'sc'}, ]}>

<TabItem value="curl">

```curl
curl -v https://api.us-west-1.saucelabs.com/rest/v1/public/tunnels/info/versions
```

This command should return 200 and a text containing Sauce Connect versions.

</TabItem>

<TabItem value="telnet">

```bash
telnet saucelabs.com 443
```

This command should return an IP address of 34.96.70.78 and "Connected to saucelabs.com".

</TabItem>

<TabItem value="sc">

```bash
sc -c /path/to/your/config.yaml
```

This command should return the error message "Failed to reach https://saucelabs.com/rest/v1/USERNAME/tunnels/info/updates" if Sauce Connect Proxy fails to connect to `saucelabs.com`.

</TabItem>
</Tabs>

## SSL Bumping

To combat test failures caused by websites without valid SSL certificates, Sauce Connect Proxy has a security feature called SSL Bumping that automatically re-signs certificates in the course of testing.

SSL Bumping is enabled by default when you download Sauce Connect Proxy. However, depending on your test scenario, SSL Bumping may occasionally cause problems for some sites. You can disable SSL Bumping for some or all domains by adding the `-B all` flag to your Sauce Connect Proxy startup commands. For more information on SSL Bumping and scenarios that would warrant disabling it, see [SSL Certificate Bumping](/secure-connections/sauce-connect-4/security-authentication).

### Long Common Names in Bumped Certificates

There is a limit of 64 characters in Common Names in certificates according to RFC 5280. SSL Bumping will fail if a certificate's Common Name (CN) is longer than 64 characters.

## Errors Running Tests on CORS-Enabled Sites

Cross-Origin Resource Sharing (CORS) errors could be caused by a variety of reasons. We recommend the following solutions:

- Make sure that the [open file limit](https://www.tecmint.com/increase-set-open-file-limits-in-linux/) of your machine is at least 64000, which is the recommend value for Sauce Connect Proxy use.
- Start a Sauce Connect Proxy instance using the `-B` all and `-N` flags. For more information about what these flags do for your tunnel, see the [Sauce Connect Proxy CLI Reference](/dev/cli/sauce-connect-proxy).

## Common Mistakes in Network Configurations

As a primer, the diagram below is the ideal network configuration with regards to Sauce Connect Proxy. Your firewall only needs to allow for outbound connections to Sauce Labs. Sauce Connect Proxy establishes a TLS connection (tunnel) to a dedicated tunnel endpoint server hosted in the Sauce Labs cloud. For best performance, Sauce Connect Proxy should be running close to the Site Under Test or App Under Test.

<img src={useBaseUrl('img/sauce-connect/correct-network-config.webp')} alt="Correct network configuration" width="400"/>

The diagrams below illustrate common configuration mistakes that result in dysfunctional setups.

### Dysfunctional Geographic Domain Configuration

The problem with this network configuration is that the SC Host is in the same VPN--and the same internal network--as the Site Under Test (SUT), but they live in separate geographic locations.

For example, if an SC Host is in Berlin and the SUT is located in a data center in Chicago, the connection would require a number of network hops, which would delay communication with the test virtual machine at Sauce Labs. This means that requests from Sauce Connect Proxy to the SUT would need to reach back through the internet to be completed, rather than over the same internal network.

The way to prevent this is to ensure the SC Host is placed in the same geographic domain as the SUT.

<img src={useBaseUrl('img/sauce-connect/dys-geo-config.webp')} alt="Dysfunctional geographic domain configuration" width="400"/>

**Diagram Legend**

| Term                               | Definition                                                               |
| :--------------------------------- | :----------------------------------------------------------------------- |
| SC Host (Sauce Connect Host)       | Machine in your network on which the Sauce Connect Proxy app is running. |
| SUT (Site Under Test)              | The site that you're testing.                                            |
| Tunnel VM (Tunnel Virtual Machine) | Virtual machine that hosts Sauce Connect Proxy on the Sauce Labs side.   |

### Dysfunctional DMZ + SUT Network Configuration

Another common mistake is placing the SUT in the same network as the [Demilitarized Zone (DMZ)](<https://en.wikipedia.org/wiki/DMZ_(computing)>). It's exposed to the internet, but isolated from the internal network.

<img src={useBaseUrl('img/sauce-connect/dys-dmz-config.webp')} alt="Dysfunctional DMZ + SUT network configuration" width="400"/>

**Diagram Legend**

| Term                               | Definition                                                               |
| :--------------------------------- | :----------------------------------------------------------------------- |
| SC Host (Sauce Connect Host)       | Machine in your network on which the Sauce Connect Proxy app is running. |
| SUT (Site Under Test)              | The site that you're testing.                                            |
| Tunnel VM (Tunnel Virtual Machine) | Virtual machine that hosts Sauce Connect Proxy on the Sauce Labs side.   |

## Known Issues and Workarounds

### HTTP and Chrome 120 and newer

Chrome 120 automatically attempts to upgrade connections from HTTP to HTTPS, and the error detection fails when using a proxy. In this case, the Sauce Connect architecture uses a proxy to route traffic from the browser through the secure tunnel. The HTTP proxy returns HTTP error codes (500) which Chrome interprets as a response from the non-existent HTTPS server.

In an interactive session with a keyboard, a second attempt falls back to HTTP, however there is no workaround when controlling the browser through an automated test.

If you encounter errors when using HTTP URLs with Chrome 120, the only solution is to update your endpoint to HTTPS.

## Additional Support

For additional help, please reach out to the Sauce Labs Support Team. To better assist you, include the following information with your request:

- Link to your Sauce Labs test from the Test Results page on Sauce Labs, showing reproduction of the problem
- Your Sauce Connect Proxy verbose log, which you can get by adding the `-v` and `-l sc.log` options to your Sauce Connect Proxy command line:

  ```bash
  ./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -v -l sc.log
  ```

Then, attach the resulting `sc.log` file to your support request.
