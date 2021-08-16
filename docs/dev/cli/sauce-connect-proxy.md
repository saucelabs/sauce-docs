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

---
### `--api-key` (string)
__Description__: Sets your Sauce Labs API key.<br/>
__Shorthand__: `-k`<br/>


---
### `--config-file` (string)
__Description__: Sets the local path to a YAML file containing a Sauce Connect Proxy configuration. An example YAML configuration file, `config.yaml`, is included for your reference as part of the Sauce Connect Proxy download package. We recommend using a YAML configuration file in production environments, rather than command-line options, as it facilitates tracking configuration changes, managing tunnel-domains and direct-domains options (which can get very long), and securing Sauce Connect Proxy credentials with tighter access control over the config file.<br/>
__Shorthand__: `-c`

---
### `--no-remove-colliding-tunnels`
__Description__: Make this tunnel a part of the High Availability Sauce Connect Proxy Tunnel Pool. For more info, see [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability). <br/>
__Shorthand__: n/a


---
### `--rest-url` (string)
__Description__: Sauce Labs regional data center REST API URL (e.g., EU-CENTRAL, US-WEST, etc...). For a full list, see [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints).<br/>
__Default__: `https://saucelabs.com/rest/v1`<br/>
__Shorthand__: `-x`


---
### `--shared-tunnel`
__Description__: Allows other users of the tunnel owner to use the tunnel. For more information, see [Sharing Sauce Connect Proxy Tunnels](/basics/acct-team-mgmt/sauce-connect-proxy-tunnels).<br/>
__Shorthand__: `-s`


---
### `--tunnel-identifier` (string)
__Description__: Assigns an ID to a Sauce Connect Proxy tunnel. While not required, this option is strongly recommended. Future jobs will use this tunnel only when explicitly specified by the [tunnelIdentifier](/dev/test-configuration-options#tunnelidentifier) in the desired capabilities of your automated tests.

To learn about the syntax for setting `--tunnel-identifier` as a capability, see [Test Configuration Options](/dev/test-configuration-options).

For information on using `--tunnel-identifier` in the tunnel pool, see [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).

:::note
Your ID must be ASCII.
:::

__Shorthand__: `-i`


---
### `--user` (string)
__Description__: Sets your Sauce Labs username.<br/>
__Shorthand__: `-u`


## Tunnel Configuration


---
### `--direct-domains` (string)
__Description__: Comma-separated list of domains (see [Formatting Domains guidelines](#formatting-domains-in-the-command-line)) that you want to be relayed directly through the internet instead of through the Sauce Connect Proxy tunnel.<br/>
__Shorthand__: `-D`


---
### `--fast-fail-regexps` (string)
__Description__: Tests for application and site degradation based on missing assets or resources. Can be used to simulate non-loading of scripts, styles, or other resources. Use this option followed by a comma-separated list of regular expressions. Requests with URLs matching one of these will get dropped instantly and will not go through the tunnel. See the [Sauce Connect Proxy FAQ](/secure-connections/sauce-connect/faq) for an example.<br/>
__Shorthand__: `-F`


---
### `--tunnel-domains` (string)
__Description__:  Performs the inverse of `--direct-domains`; sends domains that you request through the Sauce Connect Proxy tunnel. Be sure to format your domains as a comma-separated list (see [Formatting Domains guidelines](#formatting-domains-in-the-command-line)).<br/>
__Shorthand__: `-t`


---
### `--no-ssl-bump-domains` (string)
__Description__: Comma-separated list of domains (see [Formatting Domains guidelines](#formatting-domains-in-the-command-line)). Requests that include hosts matching one of these domains, will not be SSL re-encrypted. See [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping) for more information about scenarios in which you would want to use this command.<br/>

:::note
HTTP Header Injection is disabled for all HTTPS domains passed to --no-ssl-bump-domains argument.
:::

__Shorthand__: `-B`


## External Proxy Configuration

---
### `--no-autodetect`
__Description__: Disables the auto-detection of proxy settings. See also [Automatic Proxy Auto-Configuration](/secure-connections/sauce-connect/setup-configuration/additional-proxies#proxy-auto-configuration-automatic).<br/>
__Shorthand__: n/a


---
### `--pac` (string)
__Description__: Defines proxy auto-configuration (PAC) URL. You can input a http(s) or local file://URL. Absolute paths are required when specifying a local PAC file. For more information, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).<br/>
__Shorthand__: n/a<br/>
__Example__:
```java
--pac file:///Users/JohnSmith/Desktop/MyPac.pac
```

---
### `--pac-auth` (string)
__Description__: Supplies PAC authentication string in format `username:password@host:port`. This option can be used multiple times for each authenticated host in the PAC file. This option is compatible only with Sauce Connect Proxy versions 4.6.3 and higher.<br/>
__Shorthand__: n/a


---
### `--proxy` (string)
__Description__: Proxy host and port that Sauce Connect should use to connect to the Sauce Labs REST API.<br/>
__Shorthand__: `-p`


---
### `--proxy-tunnel`
__Description__: Uses the proxy configured with `--proxy` or `--pac` for the tunnel connection. For more information about the `-T `option and configuring Sauce Connect Proxy with other proxies, see [Set Up with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies). You'll need to use this option if you have a PAC file that contains Sauce Labs DNS names.<br/>
__Shorthand__: `-T`


---
### `--proxy-userpwd` (string)
__Description__: Requires username and password to be sent via basic authentication to access the proxy configured with `-p` (`--proxy`). For more information, see [Set Up with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).

Sauce Connect Proxy versions older than 4.6.1 do not support the `-p` option combined with `--pac`. Update to the latest version [here](/secure-connections/sauce-connect/installation).<br/>
__Shorthand__: `-w`



## Client Configuration

---
### `--pidfile` (string)
__Description__: Specifies the file where you want the Sauce Connect Proxy process ID (pid) to be written. This is useful for programmatically stopping Sauce Connect Proxy. Although Sauce Connect Proxy makes a best effort, we cannot guarantee that the pidfile will be removed when shutting down Sauce Connect Proxy. With that in mind, relying on the pidfile as a means to monitor Sauce Connect Proxy is not supported.<br/>
__Shorthand__: `-d`


---
### `--readyfile` (string)
__Description__: Sets file that will be touched to indicate when the tunnel is ready.<br/>
__Shorthand__: `-f`


---
### `--logfile` (string)
__Description__: Captures the Sauce Connect Proxy logs in a file. If a path is not specified in file, the file location will default to the location where the Sauce Connect Proxy executable can be found on your machine.<br/>
__Shorthand__: `-l`


---
### `--max-logsize` (number)
__Description__: After reaching the max bytes size, creates a new log and appends an order number to the previous log. Disabled by default.<br/>
__Shorthand__: n/a


---
### `--scproxy-port` (number)
__Description__: Sets port to use for the built-in HTTP proxy.<br/>
__Shorthand__: `-X`


---
### `--se-port` (number)
__Description__: Sets the port on which Sauce Connect Proxy's Selenium relay will listen for requests. Selenium commands reaching Sauce Connect Proxy on this port will be relayed to Sauce Labs securely and reliably through Sauce Connect Proxy's tunnel. This feature is disabled unless specified. For more information, see [Using the Selenium Relay](/secure-connections/sauce-connect/proxy-tunnels).<br/>
__Shorthand__: `-P`


## Networking and Security

---
### `--auth` (string)<br/>
__Description__: Performs basic authentication when a URL on `host:port` asks for a username and password. This option can be used multiple times. For examples, see [Authentication Using `--auth`](/secure-connections/sauce-connect/security-authentication).

Sauce Connect Proxy's `--auth` flag will only send the header Authorization with a type of 'Basic'. If a resource responds with the header WWW-Authenticate of a type any other than 'Basic,' your authentication will fail and return a non-200 HTTP response. HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy, which means performing basic authentication in this way is disabled for all HTTPS domains passed to `--no-ssl-bump-domains` argument.<br/>
__Shorthand__: `-a` <br/>
__Example__:
```java
--auth mysite.com:80:awesometester:supersekrit
```

---
### `--cainfo` (string)
__Description__: CA certificate bundle to use for verifying connections to Sauce Labs REST API.<br/>
__Shorthand__: n/a


---
### `--capath` (string)
__Description__: Directory of CA certs to use for verifying connections to Sauce Labs REST API.<br/>
__Shorthand__: n/a  


---
### `--dns` (string)
__Description__: Uses specified name server. To specify multiple servers, separate them with a comma. Use IP addresses, optionally with a port number, the two separated by a colon.<br/>
__Shorthand__: n/a  <br/>
__Example__:
```java
--dns 8.8.8.8,8.8.4.4:53
```

---
### `--ocsp` (string)
__Description__: OSCP verification mode. Options are strict, attempt, log-only, and disable. The default is log-only.

:::note
`--ocsp strict` may fail if a certificate in the chain does not support OCSP. It's recommended to leave it to the default "log-only" mode.
:::

__Shorthand__: n/a  


---
### `--tunnel-cainfo` (string)
__Description__: CA certificate bundle to use for verifying tunnel connections.<br/>
__Shorthand__: n/a  


---
### `--tunnel-capath` (string)
__Description__: Directory of CA certificates to use for verifying tunnel connections.<br/>
__Shorthand__: n/a  



## Troubleshooting and Debugging

---
### `--log-stats`
__Description__: Logs statistics about HTTP traffic every seconds. Information includes bytes transmitted, requests made, and responses received.<br/>
__Shorthand__: `-z`  


---
### `--metrics-address` (string)
__Description__: Use this option to define the host:port for the internal web server used to expose client side metrics. The default is `localhost:8888`.<br/>
__Shorthand__: n/a  


---
### `--verbose`
__Description__: Enables verbose debugging. Use this to log HTTP headers or debug SauceConnect connection.

:::note
`-vv` (very verbose), which outputs HTTP headers and KGP logs, is meant for troubleshooting purposes only. It is system-resource demanding and adversely affects Sauce Connect Proxy performance.
:::

__Shorthand__: `-v`


## Other Options

---
### `--scproxy-read-limit` (number)
__Description__: Rates limit reads in scproxy to the number of bytes per second that you specify. This option can be used to adjust local network transfer rate to prevent overloading the tunnel connection.<br/>
__Shorthand__: n/a


---
### `--scproxy-write-limit` (number)
__Description__: Rates limit writes in scproxy to the number of bytes per second that you specify. This option can be used to adjust local network transfer rate to prevent overloading the tunnel connection.<br/>
__Shorthand__: n/a



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
  defaultValue="US-West"
  values={[
    {label: 'US-West', value: 'US-West'},
    {label: 'US-East', value: 'US-East'},
    {label: 'EU-Central', value: 'EU-Central'},
    {label: 'APAC-SOUTHEAST', value: 'APAC-SOUTHEAST'},
  ]}>

<TabItem value="US-West">

To connect to the US-West Data Center, add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the US-West Data Center endpoint:

```java
$ sc -x https://api.us-west-1.saucelabs.com/rest/v1 -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

</TabItem>
<TabItem value="US-East">

To connect to the US-East Data Center, add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the US-East Data Center endpoint:

```java
$ sc -x https://us-east-1.saucelabs.com/rest/v1 -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

</TabItem>
<TabItem value="EU-Central">

To connect to the EU-Central Data Center, add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the EU-Central Data Center endpoint:

```java
$ sc -x https://eu-central-1.saucelabs.com/rest/v1 -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

</TabItem>
<TabItem value="APAC-SOUTHEAST">

To connect to the [APAC-SOUTHEAST-1 Data Center](/basics/data-center-endpoints/aust-early-access), add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the APAC-SOUTHEAST Data Center endpoint:

```java
$ sc -x https://api.apac-southeast-1.saucelabs.com/rest/v1 -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

</TabItem>

</Tabs>
<br/>

See the **Tunnels** page for quickstart info.
