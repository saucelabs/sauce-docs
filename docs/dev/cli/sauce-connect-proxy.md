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
View the below options directly in the command line terminal by running the `--help` flag.
:::


## Main

---
### `--api-key`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Sets your Sauce Labs API key.<br/>
__Shorthand__: `-k`


---
### `--config-file`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Sets the local path to a YAML file containing a Sauce Connect Proxy configuration. An example YAML configuration file, `config.yaml`, is included for your reference as part of the Sauce Connect Proxy download package. We recommend using a YAML configuration file in production environments, rather than command-line options, as it facilitates tracking configuration changes, managing tunnel-domains and direct-domains options (which can get very long), and securing Sauce Connect Proxy credentials with tighter access control over the config file.<br/>
__Shorthand__: `-c`


---
### `--tunnel-pool` or `--no-remove-colliding-tunnels`
<p><small>| OPTIONAL | STRING |</small></p>

:::caution
Effective with Sauce Connect Proxy version 4.7.0, `--no-remove-colliding-tunnels` has been deprecated and replaced by `--tunnel-pool`.
:::
__Description__: The tunnel is a part of the High Availability Sauce Connect Proxy Tunnel Pool. For more info, see [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).<br/>
__Shorthand__: n/a


---
### `--region`
<p><small>| OPTIONAL | STRING |</small></p>

:::caution
Effective with Sauce Connect Proxy version 4.7.0, we recommend using `--region` over `--rest-url`.
:::

__Description__: Sauce Labs data center region (e.g., EU-Central, US-West). For a full list, see [Data Center Endpoints](#data-center-endpoints). Not compatible with Sauce Connect Proxy versions below 4.7.0.<br/>
__Default__: `us-west`<br/>
__Shorthand__: `-r`


---
### `--rest-url`
<p><small>| OPTIONAL | STRING |</small></p>

:::caution
Effective with Sauce Connect Proxy version 4.7.0, we recommend using `--region` over `--rest-url`.
:::

__Description__: Sauce Labs regional data center REST API URL (e.g., EU-Central, US-West). For a full list, see [Data Center Endpoints](#data-center-endpoints).<br/>
__Default__: `https://saucelabs.com/rest/v1`<br/>
__Shorthand__: `-x`


---
### `--shared-tunnel`
__Description__: Allows other users of the tunnel owner to use the tunnel. For more information, see [Sharing Sauce Connect Proxy Tunnels](/basics/acct-team-mgmt/sauce-connect-proxy-tunnels).<br/>
__Shorthand__: `-s`


---
### `--tunnel-name` or `--tunnel-identifier`
<p><small>| OPTIONAL | STRING |</small></p>

:::caution
Effective with version 4.7.0, `--tunnel-identifier` has been deprecated and replaced by `--tunnel-name`.
:::

__Description__: Assigns an ID to a Sauce Connect Proxy tunnel. While not required, this option is strongly recommended. Future jobs will use this tunnel only when explicitly specified by the [tunnelIdentifier](/dev/test-configuration-options#tunnelidentifier) in the desired capabilities of your automated tests.

To learn about the syntax for setting this as a capability, see [Test Configuration Options](/dev/test-configuration-options). For information on using this option in the tunnel pool, see [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).

:::note
Your ID must be ASCII.
:::

__Shorthand__: `-i` for `--tunnel-identifier`; n/a for `--tunnel-name`


---
### `--user`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Sets your Sauce Labs username.<br/>
__Shorthand__: `-u`



## Tunnel Configuration


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

__Description__:  Performs the inverse of `--direct-domains`; sends domains that you request through the Sauce Connect Proxy tunnel. Be sure to format your domains as a comma-separated list (see [Formatting Domains guidelines](#formatting-domains-in-the-command-line)).<br/>
__Shorthand__: `-t`


---
### `--no-ssl-bump-domains`
<p><small>| OPTIONAL | STRING |</small></p>

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
<p><small>| OPTIONAL | STRING |</small></p>

:::caution
Effective with Sauce Connect Proxy version 4.7.0, `--capath` has been deprecated.
:::
__Description__: Directory of CA certs to use for verifying connections to Sauce Labs REST API.<br/>
__Shorthand__: n/a  


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
<p><small>| OPTIONAL | STRING |</small></p>

:::caution
Effective with Sauce Connect Proxy version 4.7.0, `--tunnel-capath` has been deprecated.
:::
__Description__: Directory of CA certificates to use for verifying tunnel connections.<br/>
__Shorthand__: n/a  



## Troubleshooting and Debugging

---
### `--log-stats`
__Description__: Logs statistics about HTTP traffic every seconds. Information includes bytes transmitted, requests made, and responses received.<br/>
__Shorthand__: `-z`  


---
### `--metrics-address`
<p><small>| OPTIONAL | STRING |</small></p>

:::caution
Effective with Sauce Connect Proxy version 4.7.0, the metrics server is disabled, by default.
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

You can specify a combination of several options, for example:

```bash
--extra-info '{"inject-forwarded-for": true, "reply_body_max_size": "300 MB"}'
```
__Shorthand__: n/a


## Data Center Endpoints

__Description__: depending on the Data Center location of the device you're testing on (US or EU), you may need to add a [Data Center endpoint](/basics/data-center-endpoints/data-center-endpoints).

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
$ sc -r us-west -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```
<br/>

**For Sauce Connect Proxy versions below 4.7.0**:

Add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the US-West Data Center endpoint:

```java
$ sc -x https://api.us-west-1.saucelabs.com/rest/v1 -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

</TabItem>
<TabItem value="US-East">

**For Sauce Connect Proxy version 4.7.0**:

To connect to the US-East Data Center, add the region name and place an `-r` immediately before it. Here's a full example that includes all required options, plus the US-East Data Center:

```java
$ sc -r us-east -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```
<br/>

**For Sauce Connect Proxy versions below 4.7.0**:

Add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the US-East Data Center endpoint:

```java
$ sc -x https://us-east-1.saucelabs.com/rest/v1 -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

</TabItem>
<TabItem value="EU-Central">

**For Sauce Connect Proxy version 4.7.0**:

To connect to the EU-Central Data Center, add the region name and place an `-r` immediately before it. Here's a full example that includes all required options, plus the EU-Central Data Center:

```java
$ sc -r eu-central -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```
<br/>

**For Sauce Connect Proxy versions below 4.7.0**:

Add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the EU-Central Data Center endpoint:

```java
$ sc -x https://eu-central-1.saucelabs.com/rest/v1 -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

</TabItem>
<TabItem value="APAC-Southeast">

**For Sauce Connect Proxy version 4.7.0**:

To connect to the [APAC-Southeast-1 Data Center](/basics/data-center-endpoints/aust-early-access), add the region name and place an `-r` immediately before it. Here's a full example that includes all required options, plus the APAC-Southeast Data Center:

```java
$ sc -r apac-southeast -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```
<br/>

**For Sauce Connect Proxy versions below 4.7.0**:

Add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the APAC-Southeast Data Center endpoint:

```java
$ sc -x https://api.apac-southeast-1.saucelabs.com/rest/v1 -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

</TabItem>

</Tabs>
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
* WebSockets domains are not compatible with SSL bumping, so you'll need to disable SSL Bumping for those.


## Additional Resources

For quickstart info, see the [**Tunnels** page](https://app.saucelabs.com/tunnels) and [Sauce Connect Proxy Basic Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup).
