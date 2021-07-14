---
id: sauce-connect-proxy
title: Sauce Connect Proxy CLI Reference
sidebar_label: Sauce Connect Proxy
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Below is a list of flags to use on your Sauce Connect Proxy command line to specify parameters. See [Basic Setup for Sauce Connect Proxy](/secure-connections/sauce-connect/setup-configuration/basic-setup) for detailed setup instructions and use cases.

:::tip
View these options directly in the command line terminal by running the `--help` flag.
:::

## Main

### `--api-key` (string)

__Description__: Sets your Sauce Labs API key.

__Shorthand__: `-k`
<br/>

### `--config`

__Description__: Sets the local path to a YAML file containing a Sauce Connect Proxy configuration. Use this in conjunction with the `--config-file` option. An example YAML configuration file, `config.yaml`, is included for your reference as part of the Sauce Connect Proxy download package.

We recommend using a YAML configuration file in production environments, rather than command-line options, as it facilitates tracking configuration changes, managing tunnel-domains and direct-domains options (which can get very long), and securing Sauce Connect Proxy credentials with tighter access control over the config file.

__Shorthand__: n/a
<br/>

### `--no-remove-colliding-tunnels`

__Description__: Specifies the file where you want the Sauce Connect Proxy process ID (pid) to be written. This is useful for programmatically stopping Sauce Connect Proxy. Although Sauce Connect Proxy makes a best effort, we cannot guarantee that the `pidfile` will be removed when shutting down Sauce Connect Proxy. With that in mind, relying on the `pidfile` as a means to monitor Sauce Connect Proxy is not supported.

__Shorthand__: n/a
<br/>

### `--rest-url` (string)

__Description__: Allows you to connect to a different Sauce Labs cloud (e.g., EU Virtual Device and Desktop Cloud or US Real Device Cloud) other than the default, US-West-1. For a full list of Sauce Connect Proxy endpoints, see [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints).

__Shorthand__: `-x`
<br/>

### `--region`

__Description__: Your Sauce Labs region (for example, us-west, us-east, or eu-central).

__Shorthand__: n/a
<br/>

### `--shared-tunnel`

__Description__: Allows other users of the tunnel owner to use the tunnel. For more information, see [Sharing Sauce Connect Proxy Tunnels](/basics/acct-team-mgmt/sauce-connect-proxy-tunnels).

__Shorthand__: `-s`
<br/>

### `--tunnel-identifier`

__Description__: Assigns an ID to a Sauce Connect Proxy tunnel. While not required, this option is very strongly recommended. Future jobs will use this tunnel only when explicitly specified by the tunnelIdentifier Capability in a Selenium client.

For information on using `--tunnel-identifier` to run several Sauce Connect Proxy tunnels simultaneously, see [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability). To learn about the syntax for setting `--tunnelIdentifier` as a capability, see [Test Configuration Options](/dev/test-configuration-options).

Your ID must be ASCII.

__Shorthand__: `-i`
<br/>

### `--user` (string)

__Description__: Sets your Sauce Labs username.

__Shorthand__: `-u`
<br/>


## Tunnel Configuration

### `--custom-headers`

__Description__:

__Shorthand__: n/a
<br/>

### `--direct-domains`

__Description__: Use this option along with a comma-separated list of domains that you want to be relayed directly through the internet instead of through the Sauce Connect Proxy tunnel.

__Shorthand__: `-D`
<br/>

### `--fast-fail-regexps`

__Description__: Tests for application and site degradation based on missing assets or resources. Can be used to simulate non-loading of scripts, styles, or other resources. Use this option followed by a comma-separated list of regular expressions. Requests with URLs matching one of these will get dropped instantly and will not go through the tunnel. See the [Sauce Connect Proxy FAQ](/secure-connections/sauce-connect/faq) for an example.

:::note
`-vv` (very verbose), which outputs HTTP headers and KGP logs, is meant for troubleshooting purposes only. It is system-resource demanding and adversely affects Sauce Connect Proxy performance.
:::

__Shorthand__: `-B`
<br/>

### `--tunnel-domains`

__Description__:  Performs the inverse of `--direct-domains`; sends domains that you request through the Sauce Connect Proxy tunnel. Be sure to format your domains as a comma-separated list.

__Shorthand__: `-t`
<br/>


## External Proxy Configuration

### `--no-autodetect`

__Description__: Disables the auto-detection of proxy settings.

__Shorthand__: n/a
<br/>

### `--pac`

__Description__: Defines proxy auto-configuration (PAC) URL. You can input a http(s) or local file://URL. Absolute paths are required when specifying a local PAC file. For more information, see [Set Up with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).

__Shorthand__: n/a

__Example__:
```
--pac file:///Users/JohnSmith/Desktop/MyPac.pac
```
<br/>

### `--pac-auth`

__Description__: Supplies PAC authentication string in format `username:password@host:port`. This option can be used multiple times for each authenticated host in the PAC file. This option is compatible only with Sauce Connect Proxy versions 4.6.3 and higher.

__Shorthand__: n/a
<br/>

### `--proxy-tunnel`

__Description__: Uses the proxy configured with `-p` for the tunnel connection. For more information about the `-T` option and configuring Sauce Connect Proxy with other proxies, see Sauce Connect Proxy Set Up with Additional Proxies. / You'll need to use this option if you have a PAC file that contains Sauce Labs DNS names.

__Shorthand__: `-w`
<br/>

### `--pac [url]`

__Description__: Defines proxy auto-configuration (PAC) URL. You can input a http(s) or local file://URL. Absolute paths are required when specifying a local PAC file. For more information, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).

__Shorthand__: n/a

__Example__:
```bash
--pac file:///Users/JohnSmith/Desktop/MyPac.pac
```
<br/>

### `--pac-auth`

__Description__: Supplies PAC authentication string in format `username:password@host:port`. This option can be used multiple times for each authenticated host in the PAC file. This option is compatible only with Sauce Connect Proxy versions 4.6.3 and higher.

__Shorthand__: n/a
<br/>

### `--proxy-tunnel`

__Description__: Uses the proxy configured with `-p` for the tunnel connection. For more information about the `-T `option and configuring Sauce Connect Proxy with other proxies, see [Set Up with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).

You'll need to use this option if you have a PAC file that contains Sauce Labs DNS names.

__Shorthand__: `-T`
<br/>

### `--proxy-userpwd`

__Description__: Requires username and password to be sent via basic authentication to access the proxy configured with `-p` (`--proxy`). For more information, see [Set Up with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).

Sauce Connect Proxy versions older than 4.6.1 do not support the `-p` option combined with `--pac`. Update to the latest version [here](/secure-connections/sauce-connect/installation).

__Shorthand__: `-p`
<br/>


## Client Configuration

### `--pidfile` (string)

__Description__: Specifies the file where you want the Sauce Connect Proxy process ID (pid) to be written. This is useful for programmatically stopping Sauce Connect Proxy. Although Sauce Connect Proxy makes a best effort, we cannot guarantee that the pidfile will be removed when shutting down Sauce Connect Proxy. With that in mind, relying on the pidfile as a means to monitor Sauce Connect Proxy is not supported.

__Shorthand__: `-d`
<br/>

### `--readyfile` (string)

__Description__: Sets file that will be touched to indicate when the tunnel is ready.

__Shorthand__: `-f`
<br/>

### `--logfile`

__Description__: Captures the Sauce Connect Proxy logs in a file. If a path is not specified in file, the file location will default to the location where the Sauce Connect Proxy executable can be found on your machine.

__Shorthand__: `-l`
<br/>

### `--max-logsize [bytes]`

__Description__: After reaching the max bytes size, creates a new log and appends an order number to the previous log. Disabled by default.

__Shorthand__: n/a
<br/>

### `--scproxy-port`

__Description__: Sets port to use for the built-in HTTP proxy.

__Shorthand__: `-X`
<br/>

### `--se-port`

__Description__: Sets the port on which Sauce Connect Proxy's Selenium relay will listen for requests. Selenium commands reaching Sauce Connect Proxy on this port will be relayed to Sauce Labs securely and reliably through Sauce Connect Proxy's tunnel. This feature is disabled unless specified. For more information, see [Using the Selenium Relay](/secure-connections/sauce-connect/proxy-tunnels).

__Shorthand__: `-P`
<br/>


## Networking and Security

### `--auth` (strings)

__Description__: Performs basic authentication when a URL on `host:port` asks for a username and password. This option can be used multiple times. For examples, see [Authentication Using `--auth`](/secure-connections/sauce-connect/security-authentication).

Sauce Connect Proxy's `--auth` flag will only send the header Authorization with a type of 'Basic'. If a resource responds with the header WWW-Authenticate of a type any other than 'Basic,' your authentication will fail and return a non-200 HTTP response. HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy, which means performing basic authentication in this way is disabled for all HTTPS domains passed to `--no-ssl-bump-domains` argument.

__Shorthand__: `-a`  
<br/>

### `--cainfo`

__Description__: CA certificate bundle to use for verifying REST connections.

__Shorthand__: n/a
<br/>

### `--capath`

__Description__: Directory of CA certs to use for verifying REST connections.

__Shorthand__: n/a  
<br/>

### `--dns`

__Description__: Uses specified name server. To specify multiple servers, separate them with a comma. Use IP addresses, optionally with a port number, the two separated by a colon.

__Shorthand__: n/a  

__Example__:
```
--dns 8.8.8.8,8.8.4.4:53
```
<br/>

### `--ocsp`

__Description__: OSCP verification mode. Options are strict, attempt, log-only, and disable. The default is log-only.

__Shorthand__: n/a  
<br/>

### `--tunnel-cainfo`

__Description__: CA certificate bundle to use for verifying tunnel connections.

__Shorthand__: n/a  
<br/>

### `--tunnel-capath`

__Description__: Directory of CA certificates to use for verifying tunnel connections.

__Shorthand__: n/a  
<br/>


## Troubleshooting and Debugging

### `--doctor`

__Description__: Performs checks to detect possible misconfiguration or problems. For more information about the errors that `--doctor` will detect and how to resolve them, see [Debugging and Diagnostics with `--doctor` Flag](/secure-connections/sauce-connect/troubleshooting). Please note that when using the `--doctor` flag, place it at the end of your command for best results.

__Shorthand__: n/a  
<br/>

### `--log-stats`

__Description__: Logs statistics about HTTP traffic every seconds. Information includes bytes transmitted, requests made, and responses received.

__Shorthand__: `-z`  
<br/>


### `--metrics-address`

__Description__: Use this option to define the host:port for the internal web server used to expose client side metrics. The default is `localhost:8888`.

__Shorthand__: n/a  
<br/>

### `--verbose`

__Description__: Enables verbose debugging. Use this to output HTTP headers.

:::note
`-vv` (very verbose), which outputs HTTP headers and KGP logs, is meant for troubleshooting purposes only. It is system-resource demanding and adversely affects Sauce Connect Proxy performance.
:::

__Shorthand__: `-v`
<br/>

## Other Options

### `--scproxy-read-limit`

__Description__: Rates limit reads in scproxy to the number of bytes per second that you specify. This option can be used to adjust local network transfer rate to prevent overloading the tunnel connection.

__Shorthand__: n/a
<br/>

### `--scproxy-write-limit`

__Description__: Rates limit writes in scproxy to the number of bytes per second that you specify. This option can be used to adjust local network transfer rate to prevent overloading the tunnel connection.

__Shorthand__: n/a
<br/>


## Formatting Domains in the Command Line

Here are some guidelines to follow when formatting domains:

* Use only the domain name. Do not precede it with `http:` or `https:`
  * Example: `mydomain.com`
* Make sure your comma-separated list of domains doesn't include any spaces.
  * Example, `mydomain.com,saucelabs.com,mysite.com`
* Prefix domain names with `*.` or simply `.` to match all its subdomains.
  * Example: You could refer to `docs.saucelabs.com` and `my.saucelabs.com` as "`*.saucelabs.com"` or` ".saucelabs.com"`. Enclose the argument in quotes to prevent shell expansion of asterisk.
* If you don't want any domains to be SSL re-encrypted, you can specify `all` with the argument (i.e., `-B all` or `--no-ssl-bump-domains all`)
* WebSockets domains are not compatible with SSL bumping, so you'll need to disable SSL Bumping for them


## Data Center Endpoint

__Description__: depending on the Data Center location of the device you're testing on (US or EU), you may need to add a [Data Center Endpoint](/basics/data-center-endpoints/data-center-endpoints).

__Examples__:

<Tabs
  defaultValue="US Data Center"
  values={[
    {label: 'US Data Center', value: 'US Data Center'},
    {label: 'EU Data Center', value: 'EU Data Center'},
  ]}>

<TabItem value="US Data Center">

No endpoint needed. Connection to the US Data Center occurs by default. So your only required options would be username and access key.

```bash
$ bin/sc -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

</TabItem>
<TabItem value="EU Data Center">

To connect to the EU Data Center, add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the EU Data Center endpoint:

```bash
$ bin/sc -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx -x https://eu-central-1.saucelabs.com/rest/v1
```

</TabItem>
</Tabs>
<br/>

See the **Tunnels** page for quick start info.
