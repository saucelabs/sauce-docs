---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note --doctor flag deprecated

Effective with Sauce Connect Proxy version 4.7.0, we've [deprecated the `--doctor` flag](https://changelog.saucelabs.com/en/sauce-connect-proxy-version-30JTvzO0F). Diagnostics are now automatically triggered.
:::


## Generating Tunnel Logs to Help with Troubleshooting

To generate a tunnel log file, which is a great tool to troubleshoot Sauce Connect Proxy, use the `–l (--logfile <file>)` command line option. The log provides details on network transactions and Sauce Connect Proxy activity.

By default, Sauce Connect Proxy names the log file `sc.log`, and writes to your local operating system's temporary folder. On Linux / Mac OS X, this is usually `/tmp`. On Windows, it varies by individual release. You can also specify a specific location for the output in the `<file>` of the command-line  `–l (--logfile <file>)`.

You can enable verbose logging, which increases the logging level of Sauce Connect Proxy, with the `--verbose` command-line. Verbose output will be sent to the Sauce Connect Proxy log file, rather than standard out. To send all logging to stdout, set a value of `-` for the `--logfile` command (i.e., `--logfile -`) when starting Sauce Connect Proxy.


## Network Configuration with Firewalls and Proxies

Is there a firewall or proxy server in place between your machine running Sauce Connect Proxy and Sauce Labs (`*.saucelabs.com:443`)? You may need to allow access in your firewall rules or configure Sauce Connect Proxy to use an additional proxy. See [Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies)
Sauce Connect Proxy needs to establish outbound connections to both saucelabs.com (`162.222.73.28`) on `port 443` and to a tunnel VM with an IP in the Sauce Labs ranges (`162.222.72.0/21`, `66.85.48.0/21`, `185.94.24.0/22`).

For information on setting up Sauce Connect Proxy within various network environments, see [Security and Authentication](/secure-connections/sauce-connect/security-authentication).


## Checking Network Connectivity to Sauce Labs

Make sure that saucelabs.com is accessible from the machine running Sauce Connect Proxy. This can be tested by issuing a ping, telnet, or cURL command to saucelabs.com from the machine's command line interface.

If any of these commands fail, you should work with your internal network team to resolve them.

<Tabs
  defaultValue="ping"
  values={[
    {label: 'ping', value: 'ping'},
    {label: 'telnet', value: 'telnet'},
    {label: 'cURL', value: 'curl'},
    {label: 'Sauce Connect Proxy', value: 'sc'},  ]}>

<TabItem value="ping">

```bash
ping saucelabs.com
```

</TabItem>

<TabItem value="telnet">

```bash
telnet saucelabs.com 443
```

This command should return an IP address of 162.222.73.2.

</TabItem>

<TabItem value="curl">

```curl
curl -v https://saucelabs.com/
```

This command should return the status message connected to `saucelabs.com`.

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

SSL Bumping is enabled by default when you download Sauce Connect Proxy. However, depending on your test scenario, SSL Bumping may occasionally cause problems for some sites. You can disable SSL Bumping for some or all domains by adding the `-B all` flag to your Sauce Connect Proxy startup commands. For more information on SSL Bumping and scenarios that would warrant disabling it, see SSL Certificate Bumping.

## Errors Running Tests on CORS-Enabled Sites
Cross-Origin Resource Sharing (CORS) errors could be caused by a variety of reasons. We recommend the following solutions:

* Make sure that the ulimit/open file limit of your machine is at least 8000, which is the recommend value for Sauce Connect Proxy use.
* Start a Sauce Connect Proxy instance using the `-B` all and `-N` flags. For more information about what these flags do for your tunnel, see the [Sauce Connect Proxy CLI Reference](/dev/cli/sauce-connect-proxy).


## Common Mistakes in Network Configurations

As a primer, the diagram below is the ideal network configuration with regards to Sauce Connect Proxy. Your firewall only needs to allow for outbound connections to Sauce Labs. Sauce Connect Proxy establishes a TLS connection (tunnel) to a dedicated tunnel endpoint server hosted in the Sauce Labs cloud. For best performance, Sauce Connect Proxy should be running close to the Site Under Test or Application Under Test.

<img src={useBaseUrl('img/sauce-connect/correct-network-config.png')} alt="Correct network configuration" width="400"/>

The diagrams below illustrate common configuration mistakes that result in dysfunctional setups.


### Dysfunctional Geographic Domain Configuration

The problem with this network configuration is that the SC Host is in the same VPN--and the same internal network--as the Site Under Test (SUT), but they live in separate geographic locations.

For example, if an SC Host is in Berlin and the SUT is located in a data center in Chicago, the connection would require a number of network hops, which would delay communication with the test virtual machine at Sauce Labs. This means that requests from Sauce Connect Proxy to the SUT would need to reach back through the internet to be completed, rather than over the same internal network.

The way to prevent this is to ensure the SC Host is placed in the same geographic domain as the SUT.

<img src={useBaseUrl('img/sauce-connect/dys-geo-config.png')} alt="Dysfunctional geographic domain configuration" width="400"/>

**Diagram Legend**

| Term | Definition |
| :--- | :--- |
| SC Host (Sauce Connect Host) | Machine in your network on which the Sauce Connect Proxy application is running. |
| SUT (Site Under Test) | The site that you're testing. |
| Tunnel VM (Tunnel Virtual Machine) | Virtual machine that hosts Sauce Connect Proxy on the Sauce Labs side. |

### Dysfunctional DMZ + SUT Network Configuration
Another common mistake is placing the SUT in the same network as the [Demilitarized Zone (DMZ)](https://en.wikipedia.org/wiki/DMZ_(computing)). It's exposed to the internet, but isolated from the internal network.

<img src={useBaseUrl('img/sauce-connect/dys-dmz-config.png')} alt="Dysfunctional DMZ + SUT network configuration" width="400"/>

**Diagram Legend**

| Term | Definition |
| :--- | :--- |
| SC Host (Sauce Connect Host) | Machine in your network on which the Sauce Connect Proxy application is running. |
| SUT (Site Under Test) | The site that you're testing. |
| Tunnel VM (Tunnel Virtual Machine) | Virtual machine that hosts Sauce Connect Proxy on the Sauce Labs side. |


## Additional Support

For additional help, please reach out to our Support Team. To better assist you, include the following information with your request:

* Link to your Sauce Labs test from the Test Results page on Sauce Labs, showing reproduction of the problem
* Your Sauce Connect Proxy verbose log, which you can get by adding the `-v` and `-l sc.log` options to your Sauce Connect Proxy command line:

  ```bash
  sc -u [Your Sauce Username] -k [Your Sauce Access Key] -v -l sc.log
  ```

Then, attach the resulting `sc.log` file to your support request.
