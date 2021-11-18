---
id: sauce-connect-proxy
title: Sauce Connect Proxy CLI Reference
sidebar_label: Sauce Connect Proxy CLI
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Below is a list of flags to use on your Sauce Connect Proxy command line to specify parameters.


## What You'll Need
* Make sure you're using the latest [Sauce Connect Proxy version](secure-connections/sauce-connect/installation/). Otherwise, some flags may not work.
* See [Sauce Connect Quickstart](/secure-connections/sauce-connect/quickstart/) and [Basic Setup for Sauce Connect Proxy](/secure-connections/sauce-connect/setup-configuration/basic-setup) for setup instructions and use cases.

:::tip
You can view the entire list of CLI options by running the `--help` flag.
:::

<br/>


## Usage

`./sc -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY} [OPTION]`


## Required

---
### `--user`
<p><small>| REQUIRED | STRING |</small></p>

__Description__: Sets your Sauce Labs username.<br/>
__Shorthand__: `-u`


---
### `--api-key`
<p><small>| REQUIRED | STRING |</small></p>

__Description__: Sets your Sauce Labs API key. This will be the same as your [Access Key](https://app.saucelabs.com/user-settings).<br/>
__Shorthand__: `-k`


---
### `--config-file`
<p><small>| REQUIRED | STRING |</small></p>

:::caution For YAML Configuration Files ONLY
This is required _only_ if you're using a YAML configuration file to start your tunnel(s), in addition to the above required flags. We recommend using a YAML config file in production environments, rather than command-line options, as it facilitates tracking configuration changes, managing tunnel-domains and direct-domains options (which can get very long), and securing Sauce Connect Proxy credentials with tighter access control. You can find a template config file, `config.yaml`, as part of the SC Proxy download package.
:::

__Description__: defines the local path to a YAML file containing a Sauce Connect Proxy configuration. <br/>
__Shorthand__: `-c`



## Strongly Recommended

---
### `--region`
<p><small>| OPTIONAL | STRING |</small></p>

:::caution
We recommend using this flags over its predecessor, `--rest-url`, which will eventually be deprecated. Not compatible with versions below 4.7.0.
:::

__Description__: sets your [regional Sauce Labs data center]((/dev/cli/sauce-connect-proxy/#data-center-endpoints). Possible values are `us-west`, `eu-central`, `us-east`, `apac-southeast`. If you omit this flag, it will default to `us-west`. For all other regions, this flag is required. <br/>
__Default__: `us-west`<br/>
__Shorthand__: `-r`

<Tabs
  defaultValue="US-West"
  values={[
    {label: 'US-West', value: 'US-West'},
    {label: 'US-East', value: 'US-East'},
    {label: 'EU-Central', value: 'EU-Central'},
    {label: 'APAC-Southeast', value: 'APAC-Southeast'},
  ]}>

<TabItem value="US-West">

**For Sauce Connect Proxy version 4.7.0**:

To connect to the US-West Data Center, add the region name and place an `-r` immediately before it. Here's a full example that includes all required options, plus the US-West Data Center:

```java
$ sc -r us-west -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY}
```
<br/>

**For Sauce Connect Proxy versions below 4.7.0**:

Add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the US-West Data Center endpoint:

```java
$ sc -x https://api.us-west-1.saucelabs.com/rest/v1 -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY}
```

</TabItem>
<TabItem value="US-East">

**For Sauce Connect Proxy version 4.7.0**:

To connect to the US-East Data Center, add the region name and place an `-r` immediately before it. Here's a full example that includes all required options, plus the US-East Data Center:

```java
$ sc -r us-east -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY}
```
<br/>

**For Sauce Connect Proxy versions below 4.7.0**:

Add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the US-East Data Center endpoint:

```java
$ sc -x https://us-east-1.saucelabs.com/rest/v1 -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY}
```

</TabItem>
<TabItem value="EU-Central">

**For Sauce Connect Proxy version 4.7.0**:

To connect to the EU-Central Data Center, add the region name and place an `-r` immediately before it. Here's a full example that includes all required options, plus the EU-Central Data Center:

```java
$ sc -r eu-central -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY}
```
<br/>

**For Sauce Connect Proxy versions below 4.7.0**:

Add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the EU-Central Data Center endpoint:

```java
$ sc -x https://eu-central-1.saucelabs.com/rest/v1 -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY}
```

</TabItem>
<TabItem value="APAC-Southeast">

**For Sauce Connect Proxy versions 4.7.0+**:

To connect to the [APAC-Southeast-1 Data Center](/basics/data-center-endpoints/aust-early-access), add the region name and place an `-r` immediately before it. Here's a full example that includes all required options, plus the APAC-Southeast Data Center:

```java
$ sc -r apac-southeast -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY}
```
<br/>

**For Sauce Connect Proxy versions below 4.7.0**:

Add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the APAC-Southeast Data Center endpoint:

```java
$ sc -x https://api.apac-southeast-1.saucelabs.com/rest/v1 -u {SAUCE_USERNAME} -k {SAUCE_ACCESS_KEY}
```

</TabItem>
</Tabs>

---
### `--tunnel-name`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Assigns an ID to a Sauce Connect Proxy tunnel. Future jobs will use this tunnel only when explicitly specified by the [`tunnelName`](/dev/test-configuration-options/#tunnelname) in your test capabilities. To learn about the syntax for setting this as a capability, see [Test Configuration Options](/dev/test-configuration-options). For information on using this option in the tunnel pool, see [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).<br/>
__Shorthand__: n/a

:::note
Your ID must be ASCII.
:::


## Tunnel Configuration

---
### `--tunnel-pool`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Launches a high availability tunnel pool along with the [`--tunnel-name`](#--tunnel-name) flag. For more info, see [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).<br/>
__Shorthand__: n/a

---
### `--shared-tunnel`
<p><small>| OPTIONAL |</small></p>

__Description__: Allows users other than the tunnel owner to use the tunnel. For more information, see [Sharing Sauce Connect Proxy Tunnels](/basics/acct-team-mgmt/sauce-connect-proxy-tunnels).<br/>
__Shorthand__: `-s`


---
### `--rest-url`
<p><small>| OPTIONAL | STRING |</small></p>

:::caution
Effective with Sauce Connect Proxy version 4.7.0, we recommend using `--region` over `--rest-url`, which will eventually be deprecated.
:::

__Description__: Sets your Sauce Labs regional data center REST API URL (e.g., EU-Central, US-West). For a full list, see [Data Center Endpoints](#data-center-endpoints).<br/>
__Default__: `https://saucelabs.com/rest/v1`<br/>
__Shorthand__: `-x`

---
### `--no-remove-colliding-tunnels`
<p><small><span className="sauceGold">DEPRECATED</span></small></p>

__Description__: Effective with Sauce Connect Proxy version 4.7.0, this flag was deprecated and replaced by [`--tunnel-pool`](#--tunnel-pool). Upgrade to the latest version [here](/secure-connections/sauce-connect/installation/).


---
### `--tunnel-identifier`
<p><small><span className="sauceGold">DEPRECATED</span></small></p>

__Description__: Effective with version 4.7.0, this flag was deprecated and replaced by [`--tunnel-name`](#--tunnel-name). Upgrade to the latest version [here](/secure-connections/sauce-connect/installation/).
__Shorthand__: `-i` for `--tunnel-identifier`

---
### `--direct-domains`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Comma-separated list of domains (see [Formatting Domains guidelines](#formatting-domains-in-the-command-line)) that you want to be relayed directly through the internet instead of through the Sauce Connect Proxy tunnel.<br/>
__Shorthand__: `-D`


---
### `--fast-fail-regexps`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Tests for application and site degradation based on missing assets or resources. Can be used to simulate non-loading of scripts, styles, or other resources. Use this option followed by a comma-separated list of regular expressions. Requests with URLs matching one of these will get dropped instantly and will not go through the tunnel. See the [Sauce Connect Proxy FAQ](/secure-connections/sauce-connect/faq) for an example.<br/>
__Shorthand__: `-F`


---
### `--tunnel-domains`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Performs the inverse of `--direct-domains`; sends domains that you request through the Sauce Connect Proxy tunnel. Be sure to format your domains as a comma-separated list (see [Formatting Domains guidelines](#formatting-domains-in-the-command-line)).<br/>
__Shorthand__: `-t`


---
### `--no-ssl-bump-domains`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Comma-separated list of domains (see [Formatting Domains guidelines](#formatting-domains-in-the-command-line)). Requests that include hosts matching one of these domains, will not be SSL re-encrypted. See [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping) for more information about scenarios in which you would want to use this command.<br/>
__Shorthand__: `-B`

:::note
HTTP Header Injection is disabled for all HTTPS domains passed to `--no-ssl-bump-domains` argument.
:::


## External Proxy Configuration

---
### `--no-autodetect`
__Description__: Disables the auto-detection of proxy settings. See also [Automatic Proxy Auto-Configuration](/secure-connections/sauce-connect/setup-configuration/additional-proxies#proxy-auto-configuration-automatic).<br/>
__Shorthand__: n/a


---
### `--pac`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Defines proxy auto-configuration (PAC) URL. You can input a http(s) or local file://URL. Absolute paths are required when specifying a local PAC file. For more information, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).<br/>
__Shorthand__: n/a<br/>

```java
--pac file:///Users/JohnSmith/Desktop/MyPac.pac
```

---
### `--pac-auth`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Supplies PAC authentication string in format `username:password@host:port`. This option can be used multiple times for each authenticated host in the PAC file. Not compatible with Sauce Connect Proxy versions below 4.6.3.<br/>
__Shorthand__: n/a


---
### `--proxy`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Proxy host and port that Sauce Connect should use to connect to the Sauce Labs REST API.<br/>
__Shorthand__: `-p`


---
### `--proxy-localhost`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

__Description__: set this to `true` to support proxying upstream requests to localhost. By default, it is `false`. <br/>
__Shorthand__: n/a


---
### `--proxy-tunnel`
__Description__: Uses the proxy configured with `--proxy` or `--pac` for the tunnel connection. For more information about the `-T `option and configuring Sauce Connect Proxy with other proxies, see [Set Up with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies). You'll need to use this option if you have a PAC file that contains Sauce Labs DNS names.<br/>
__Shorthand__: `-T`


---
### `--proxy-userpwd`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Requires username and password to be sent via basic authentication to access the proxy configured with `-p` (`--proxy`). For more information, see [Set Up with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).

Sauce Connect Proxy versions older than 4.6.1 do not support the `-p` option combined with `--pac`. Update to the latest version [here](/secure-connections/sauce-connect/installation).<br/>
__Shorthand__: `-w`



## Client Configuration

---
### `--pidfile`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Specifies the file where you want the Sauce Connect Proxy process ID (pid) to be written. This is useful for programmatically stopping Sauce Connect Proxy. Although Sauce Connect Proxy makes a best effort, we cannot guarantee that the pidfile will be removed when shutting down Sauce Connect Proxy. With that in mind, relying on the pidfile as a means to monitor Sauce Connect Proxy is not supported.<br/>
__Shorthand__: `-d`


---
### `--readyfile`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Sets file that will be touched to indicate when the tunnel is ready.<br/>
__Shorthand__: `-f`


---
### `--logfile`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Captures the Sauce Connect Proxy logs in a file. If a path is not specified in file, the file location will default to the location where the Sauce Connect Proxy executable can be found on your machine.<br/>
__Shorthand__: `-l`


---
### `--max-logsize`
<p><small>| OPTIONAL | NUMBER |</small></p>

__Description__: After reaching the max bytes size, creates a new log and appends an order number to the previous log. Disabled by default.<br/>
__Shorthand__: n/a


---
### `--scproxy-port`
<p><small>| OPTIONAL | NUMBER |</small></p>

__Description__: Sets port to use for the built-in HTTP proxy.<br/>
__Shorthand__: `-X`


---
### `--se-port`
<p><small>| OPTIONAL | NUMBER |</small></p>

__Description__: Sets the port on which Sauce Connect Proxy's Selenium relay will listen for requests. Selenium commands reaching Sauce Connect Proxy on this port will be relayed to Sauce Labs securely and reliably through Sauce Connect Proxy's tunnel. This feature is disabled unless specified. For more information, see [Using the Selenium Relay](/secure-connections/sauce-connect/proxy-tunnels).<br/>
__Shorthand__: `-P`


## Networking and Security

---
### `--auth`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Performs basic authentication when a URL on `host:port` asks for a username and password. This option can be used multiple times. For examples, see [Authentication Using `--auth`](/secure-connections/sauce-connect/security-authentication).

Sauce Connect Proxy's `--auth` flag will only send the header Authorization with a type of 'Basic'. If a resource responds with the header WWW-Authenticate of a type any other than 'Basic,' your authentication will fail and return a non-200 HTTP response. HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy, which means performing basic authentication in this way is disabled for all HTTPS domains passed to `--no-ssl-bump-domains` argument.<br/>
__Shorthand__: `-a` <br/>

```java
--auth mysite.com:80:awesometester:supersekrit
```

---
### `--cainfo`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: CA certificate bundle to use for verifying connections to Sauce Labs REST API.<br/>
__Shorthand__: n/a


---
### `--capath`
<p><small><span className="sauceGold">DEPRECATED</span></small></p>

__Description__: Defines a directory of CA certs to use for verifying connections to Sauce Labs REST API. Effective with Sauce Connect Proxy version 4.7.0, `--capath` was deprecated. Upgrade to the latest version [here](/secure-connections/sauce-connect/installation/).<br/>

---
### `--dns`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Uses specified name server. To specify multiple servers, separate them with a comma. Use IP addresses, optionally with a port number, the two separated by a colon.<br/>
__Shorthand__: n/a

```java
--dns 8.8.8.8,8.8.4.4:53
```

---
### `--ocsp`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: OSCP verification mode. Options are strict, attempt, log-only, and disable. The default is log-only.

:::note
`--ocsp strict` may fail if a certificate in the chain does not support OCSP. It's recommended to leave it to the default "log-only" mode.
:::

__Shorthand__: n/a  


---
### `--tunnel-cainfo`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: CA certificate bundle to use for verifying tunnel connections.<br/>
__Shorthand__: n/a  


---
### `--tunnel-capath`
<p><small><span className="sauceGold">DEPRECATED</span></small></p>

__Description__: Directory of CA certificates to use for verifying tunnel connections. Effective with Sauce Connect Proxy version 4.7.0, `--tunnel-capath` was deprecated. Upgrade to the latest version [here](/secure-connections/sauce-connect/installation/).<br/>



## Troubleshooting and Debugging

---
### `--log-stats`
__Description__: Logs statistics about HTTP traffic every seconds. Information includes bytes transmitted, requests made, and responses received.<br/>
__Shorthand__: `-z`  


---
### `--metrics-address`
<p><small>| OPTIONAL | STRING |</small></p>

:::caution
Effective with Sauce Connect Proxy version 4.7.0, the metrics server is disabled by default.
:::

__Description__: Use this option to define the host:port for the internal web server used to expose client side metrics. The default is `localhost:8888` for versions prior to 4.7.0.<br/>
__Shorthand__: n/a  


---
### `--verbose`
__Description__: Enables verbose debugging. Use this to log HTTP headers or debug Sauce Connect connection.<br/>
__Shorthand__: `-v`

:::note
You can also use `-vv` (very verbose), which outputs HTTP headers and KGP logs, although it's recommended for troubleshooting purposes only because it's system-resource demanding and can adversely affect Sauce Connect Proxy performance.
:::


## Other Options

---
### `--scproxy-read-limit`
<p><small>| OPTIONAL | NUMBER |</small></p>

__Description__: Rates limit reads in scproxy to the number of bytes per second that you specify. This option can be used to adjust local network transfer rate to prevent overloading the tunnel connection.<br/>
__Shorthand__: n/a


---
### `--scproxy-write-limit`
<p><small>| OPTIONAL | NUMBER |</small></p>

__Description__: Rates limit writes in scproxy to the number of bytes per second that you specify. This option can be used to adjust local network transfer rate to prevent overloading the tunnel connection.<br/>
__Shorthand__: n/a


---
### `--extra-info`

__Description__: JSON string that contains an advanced tunnel configuration.<br/>

|Option|Description|Example|
|---|---|---|
|`inject-forwarded-for`| Do not remove X-FORWARDED-FOR header from the proxied HTTP requests.|```--extra-info '{"inject-forwarded-for": true}'```|
|`reply_body_max_size`| Set limit to the reply body size (unlimited by default).|```--extra-info '{"reply_body_max_size": "30 MB"}'```|

You can specify a combination of several options. For example:

```bash
--extra-info '{"inject-forwarded-for": true, "reply_body_max_size": "300 MB"}'
```
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
* WebSockets domains are not compatible with SSL bumping, so you'll need to [disable SSL Bumping](#--no-ssl-bump-domains) for those.


## Additional Resources

For quickstart info, see the [**Tunnels** page](https://app.saucelabs.com/tunnels) and [Sauce Connect Proxy Basic Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup).
