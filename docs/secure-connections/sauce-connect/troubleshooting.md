---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How to Generate Tunnel Logs to Help with Troubleshooting
To generate a tunnel log file, which is a great tool to troubleshoot Sauce Connect Proxy, use the `–l (--logfile <file>)` command line option. The log provides details on network transactions and Sauce Connect Proxy activity.

The file will be named "sauce_connect.log." By default, Sauce Connect Proxy generates log messages to your local operating system's temporary folder. On Linux / Mac OS X, this is usually `/tmp`. On Windows, it varies by individual release. You can also specify a specific location for the output in the `<file>` of the command-line  `–l (--logfile <file>)`.

You can enable verbose logging, which increases the logging level of Sauce Connect Proxy, but does not alter where it is sent. Just use the with the `--verbose` command-line. Verbose output will be sent to the Sauce Connect Proxy log file, rather than standard out. To send all logging to stdout, set a value of `-` for the `--logfile` command (i.e., `--logfile -`) when starting Sauce Connect Proxy.

## Network Configuration with Firewalls and Proxies
Is there a firewall or proxy server in place between your machine running Sauce Connect Proxy and Sauce Labs (`*.saucelabs.com:443`)? You may need to allow access in your firewall rules or configure Sauce Connect Proxy to use an additional proxy. See [Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies)
Sauce Connect Proxy needs to establish outbound connections to both saucelabs.com (`162.222.73.28`) on `port 443` and to a tunnel VM with an IP in the Sauce Labs ranges (`162.222.72.0/21`, `66.85.48.0/21`, `185.94.24.0/22`).

For information on setting up Sauce Connect Proxy within various network environments, see [Security and Authentication](/secure-connections/sauce-connect/security-authentication).

## Checking Network Connectivity to Sauce Labs
Make sure that saucelabs.com is accessible from the machine running Sauce Connect Proxy. This can be tested by issuing a ping, telnet or cURL command to saucelabs.com from the machine's command line interface.

If any of these commands fail, you should work with your internal network team to resolve them.

<Tabs
  defaultValue="ping"
  values={[
    {label: 'ping', value: 'ping'},
    {label: 'telnet', value: 'telnet'},
    {label: 'cURL', value: 'curl'},  ]}>

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
curl -v https://</span>saucelabs.com/
```

This command should return the status message connected to `saucelabs.com`.

</TabItem>
</Tabs>

## SSL Bumping
To combat test failures caused by websites without valid SSL certificates, Sauce Connect Proxy has a security feature called SSL Bumping that automatically re-signs certificates in the course of testing.

SSL Bumping is enabled by default when you download Sauce Connect Proxy. However, depending on your test scenario, SSL Bumping may occasionally cause problems for some sites. You can disable SSL Bumping for some or all domains by adding the `-B all` flag to your Sauce Connect Proxy startup commands. For more information on SSL Bumping and scenarios that would warrant disabling it, see SSL Certificate Bumping.

## Errors Running Tests on CORS-Enabled Sites
Cross-Origin Resource Sharing (CORS) errors could be caused by a variety of reasons. We recommend the following solutions:

* Make sure that the ulimit/open file limit of your machine is at least 8000, which is the recommend value for Sauce Connect Proxy use.
* Start a Sauce Connect Proxy instance using the `-B` all and `-N` flags. For more information about what these flags do for your tunnel, see the [Sauce Connect Proxy CLI Reference](/dev/cli/sauce-connect-proxy).

## Additional Support
If you're still experiencing Sauce Connect Proxy test failures, try the diagnostic steps under Sauce Connect Proxy Debugging and Diagnostics with `--doctor` flag.

## Debugging and Diagnostics with `--doctor` Flag
When running Sauce Labs tests with Sauce Connect Proxy, there may be situations in which Sauce Connect Proxy doesn't perform as expected. To make sure everything is in working order, you can run Sauce Connect diagnostic tests by appending the `--doctor` flag to your command line.

:::note
While the `--doctor` flag can facilitate debugging, you'll find most valuable troubleshooting information in your verbose logs (which you'd need to enable).
:::

## Running Tests Using the `--doctor` Flag
To use the `--doctor` flag, you would run the same command for starting the Sauce Connect Proxy, including any additional flags related to your specific tunnel (e.g., `--tunnelidentifier` or `-x` to specify a data center).

:::note
When adding the `--doctor` flag to your code, placement matters. Here's the correct order of flags:

```bash
`c -u [Your Sauce Username] -k [Your Sauce Access Key] --doctors`
```
:::

### Diagnostics Performed
`--doctor` will run a series of diagnostic operations to verify the following:

* Which DNS servers and SSL certificates can be found in your network when Sauce Connect Proxy boots up
* Sauce Connect Proxy outbound connections to:
  * saucelabs.com on port 443 for the REST API and the primary tunnel connection to the Sauce Labs cloud
  * gv.symcd.com and g.symd.com on port 443 using the SSL certificates found in your network
  * https://google.com
* Connectivity to these Sauce Labs REST API calls:
  * https://saucelabs.com/version.json
  * https://saucelabs.com/rest/v1/[Your Sauce Username]/tunnels

:::note
Sauce Connect Proxy will exit after these checks are performed. A tunnel will not be started.
:::

## Identifying and Resolving Common Errors with the `--doctor` Flag
In the table below, you'll find descriptions of the errors that `--doctor` will detect and how to resolve them.

| Error                                                                                                                    | Resolution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|--------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| failed to fetch PAC file `<file>`                                                                                 | Indicates the specified PAC file couldn't be downloaded. This may be caused by an incorrect URL, or a network mis-configuration. To troubleshoot this type of issue, try to download the PAC file manually from the machine running Sauce Connect Proxy with cURL or another HTTP client. To debug the PAC file you can create one locally and pass it to Sauce Connect Proxy using the  `--pac` option like this:  ``` sc --pac file:///</span>path/to/pacfile.js ```  In Windows, remember to add the drive to the path like this:  ``` sc --pac file://C:/</span>path/to/pacfile.js ``` |
| failed to fetch or empty PAC file                                                                                        | Connection to the remote server was successful, but the PAC file was empty or missing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| both `--proxy` and `--pac` are used                                                                                      | Using both may work, but this is unsupported by Sauce Labs and should only be used if directed by the Sauce Labs support.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| invalid REST URL                                                                                                         | URL specified in the `-x` option is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| failed to find proxy via PAC for `<host>`                                                                         | PAC file was downloaded successfully, but no proxy was found for this host. This may be the result of an incorrect PAC file: make sure a proxy is specified for all the hosts.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| can't resolve `saucelabs.com`/... tunnel hostname(s) via any DNS server                                                  | Please check your firewall and DNS settings. To troubleshoot this issue, use `dig` or `host` to resolve the domain and verify it is correct:  ``` dig saucelabs.com ```                                                                                                                                                                                                                                                                                                                                                                                                                                |
| your hosts file contains an entry for `<host>`                                                                     | If this error occurred, it is likely that your DNS server couldn't resolve saucelabs.com correctly.   As a result, Sauce Labs Support might have directed someone at your organization to add the host to `/etc/hosts`. This is most likely because the DNS system has a special configuration for some hosts.  Please remove this entry from the host file: it's usually `/etc/hosts` on Unix-like systems. With Linux/Mac OS X systems, you can check the hosts file with this command:  ``` grep 'saucelabs.com' /etc/hosts ```                                                                     |
| connecting via `<proxy>` to `http://<url>:<error>`   or   connecting to `http://<url>:<error>` | URL isn't accessible. If you see this error after other errors in the logs, try to fix the previous errors first.  Please refer to [libcurl error codes](https://curl.se/libcurl/c/libcurl-errors.html) to troubleshoot this issue.                                                                                                                                                                                                                                                                                                                                                                    |
| SSL connect failed, socket: `<code_number>` code: `%d`                                                                | Secure connection couldn't be established. Please refer to the [OpenSSL manual](https://www.openssl.org/docs/manpages.html) to get more information about the error.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| failed to retrieve certificate chain                                                                                     | Some X509 certificates couldn't be imported into the SSL library. This may indicate an issue with DNS, or public CAs being unreachable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| failed to reach `https?://google.com`                                                                                     | Sauce Connect Proxy client can't reach google.com. This indicates that the client doesn't have full Internet connectivity. It may not be an issue; Sauce Connect Proxy only needs access to saucelabs.com and its tunnels.                                                                                                                                                                                                                                                                                                                                                                             |

## Additional Support
If you need more help, please get in touch with our support team at help@saucelabs.com.

To better assist you, when creating your support ticket, please include the following information with your request:

* `--doctor` flag
* Link to your Sauce Labs test from the Test Results page in Sauce Labs, showing reproduction of the problem
* Your Sauce Connect Proxy verbose log, which you can get by adding the `-v` and `-l sc.log` options to your Sauce Connect Proxy command line:

  ```bash
  sc -u [Your Sauce Username] -k [Your Sauce Access Key] -v -l sc.log
  ```

Then, attach the resulting `sc.log` file to your support request.

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
