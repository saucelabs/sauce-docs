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
* Make sure you're using the latest [Sauce Connect Proxy version](/secure-connections/sauce-connect/installation/). Otherwise, some flags may not work.
* See [Sauce Connect Quickstart](/secure-connections/sauce-connect/quickstart/) and [Basic Setup for Sauce Connect Proxy](/secure-connections/sauce-connect/setup-configuration/basic-setup) for setup instructions and use cases.

:::tip
You can view the entire list of CLI options by running the `--help` flag.
:::

<br/>


## Main

---
### `--user`
<p><small>| REQUIRED | STRING |</small></p>

__Description__: Sets your Sauce Labs username. For additional security, you can set this as an [environment variable](/secure-connections/sauce-connect/setup-configuration/environment-variables/).<br/>
__Enviroment variable__: `SAUCE_USERNAME` or `SAUCE_USER`<br/>
__Shorthand__: `-u`

---
### `--api-key`
<p><small>| REQUIRED | STRING |</small></p>

__Description__: Sets your Sauce Labs API key. This will be the same as your [Access Key](https://app.saucelabs.com/user-settings). For additional security, you can set this as an [environment variable](/secure-connections/sauce-connect/setup-configuration/environment-variables/).<br/>
__Enviroment variable__: `SAUCE_ACCESS_KEY` or `SAUCE_API_KEY`<br/>
__Shorthand__: `-k`

---
### `--config-file`
<p><small>| REQUIRED | STRING |</small></p>

__Description__: Defines the local path to a YAML file containing a Sauce Connect Proxy configuration. For instructions, [Configuring Tunnels with a YAML File](/secure-connections/sauce-connect/setup-configuration/yaml-config/).<br/>
__Enviroment variable__: n/a<br/>
__Shorthand__: `-c`

:::caution
This is required only if you're using a YAML file to configure your tunnels.
:::

---
### `--region`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Sets your Sauce Labs [data center region](#data-center-endpoints) (e.g., `us-west`, `eu-central`, `apac-southeast`).<br/>
__Default__: If you don't specify a Data Center, Sauce Connect will default to `us-west`. <br/>
__Enviroment variable__: `SAUCE_REGION`<br/>
__Shorthand__: `-r`


:::caution
Not compatible with versions below 4.7.0, which use [`rest-url`](#rest-url) to define the region. We recommend using `--region` over `--rest-url` to keep your CLI options more readable.
:::


---
### `--shared-tunnel`
<p><small>| OPTIONAL |</small></p>

__Description__: changes tunnel sharing permissions so that all users in an organization can use Sauce Connect Proxy tunnels, rather than just the tunnel owner (admin). For more information, see [Sharing Sauce Connect Proxy Tunnels](/basics/acct-team-mgmt/sauce-connect-proxy-tunnels).<br/>
__Enviroment variable__: `SAUCE_SHARED_TUNNEL`<br/>
__Shorthand__: `-s`

---
### `--tunnel-identifier`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Assigns a name to a Sauce Connect Proxy tunnel. It can also assign a name to a group of tunnels in the same [High Availability pool](/secure-connections/sauce-connect/setup-configuration/high-availability), when used with [`--tunnel-pool`](#--tunnel-pool). Must be in ASCII format.

You can run tests using this tunnel by specifying the [`tunnelIdentifier`](/dev/test-configuration-options/#tunnelidentifier) in your test capabilities. To learn about the syntax for setting this as a capability, see [Test Configuration Options](/dev/test-configuration-options).<br/>
__Enviroment variable__: `SAUCE_TUNNEL_IDENTIFIER`<br/>
__Shorthand__: `-i`

:::note Tunnel Identifier = Tunnel Name
This value populates the **Tunnel Name** field on the Sauce Labs Tunnels page, _not_ the **Tunnel ID** (which is an auto-generated tunnel UUID). In Sauce Connect v4.7.0 and later, you can use the flags `tunnel-identifier` or `--tunnel-name` interchangeably.
:::

---
### `--tunnel-pool`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Launches a high availability tunnel pool along with the [`--tunnel-identifier`](#--tunnel-identifier) flag. For more info, see [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).<br/>
__Enviroment variable__: n/a<br/>
__Shorthand__: n/a

:::caution
Not compatible with Sauce Connect versions below 4.7.0. Download the latest version [here](/secure-connections/sauce-connect/installation/).
:::



## Tunnel Configuration

---
### `--direct-domains`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Sets domain(s) that you want to relay directly through the internet instead of through the Sauce Connect Proxy tunnel. When adding multiple domains, [format as a comma-separated list](#formatting-domains-in-the-command-line).<br/>
__Enviroment variable__: `SAUCE_DIRECT_DOMAINS`<br/>
__Shorthand__: `-D`


---
### `--no-ssl-bump-domains`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Sets domain(s) that do not require SSL resigning. Requests that include hosts matching one of these domains will not be SSL re-encrypted. When adding multiple domains, [format as a comma-separated list](#formatting-domains-in-the-command-line). See [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping) for more information about scenarios in which might want to use this command.<br/>
__Enviroment variable__: `SAUCE_NO_SSL_BUMP_DOMAINS`<br/>
__Shorthand__: `-B`

:::note
HTTP Header Injection is disabled for all HTTPS domains passed to `--no-ssl-bump-domains` argument.
:::


---
### `--fast-fail-regexps`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Allows you to set a deny-list of URL patterns. Requests with URLs matching one of these will get dropped instantly and will not go through the tunnel. Tests for app and site degradation based on missing assets or resources. Can be used to simulate non-loading of scripts, styles, or other resources. Use this option followed by a comma-separated list of regular expressions. See the [Sauce Connect Proxy FAQ](/secure-connections/sauce-connect/faq) for an example.<br/>
__Enviroment variable__: `SAUCE_FAST_FAIL_REGEXPS`<br/>
__Shorthand__: `-F`


---
### `--tunnel-domains`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Sets domain(s) that need to be sent through the Sauce Connect Proxy tunnel. This is the inverse of `--direct-domains`.  When adding multiple domains, [format them as a comma-separated list](#formatting-domains-in-the-command-line).<br/>
__Enviroment variable__: `SAUCE_TUNNEL_DOMAINS`<br/>
__Shorthand__: `-t`


---
### `--rest-url`
<p><small>| OPTIONAL | STRING |</small></p>

:::caution
As this option will soon be deprecated, we recommend using the [`--region`](/dev/cli/sauce-connect-proxy/#--region) flag, compatible with Sauce Connect versions 4.7.0 and above.
:::

__Description__: Sets the [Sauce Labs data center endpoint URL](/basics/data-center-endpoints) of the location where the device you're testing on is hosted.<br/>
__Enviroment variable__: `SAUCE_REST_URL`<br/>
__Shorthand__: `-x`

```bash
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -x https://eu-central-1.saucelabs.com/rest/v1
```

```bash
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -x https://eu-central-1.saucelabs.com/rest/v1
```

```bash
./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -x https://api.apac-southeast-1.saucelabs.com/rest/v1
```

---
### `--no-remove-colliding-tunnels`
<p><small><span className="sauceGold">DEPRECATED</span></small></p>

__Description__: Prevents the removal of colliding tunnels (i.e., tunnels with the same name). <br/>
__Enviroment variable__: n/a<br/>

:::caution
Effective with Sauce Connect Proxy version 4.7.0, this flag has been deprecated and replaced by [`--tunnel-pool`](#--tunnel-pool). Download the latest version [here](/secure-connections/sauce-connect/installation/).
:::



## External Proxy Configuration

---
### `--no-autodetect`
__Description__: Disables the auto-detection of system proxy settings. See also [Automatic Proxy Auto-Configuration](/secure-connections/sauce-connect/setup-configuration/additional-proxies#proxy-auto-configuration-automatic).<br/>
__Enviroment variable__: `SAUCE_NO_AUTODETECT`<br/>
__Shorthand__: n/a


---
### `--pac`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Defines external proxy auto-configuration (PAC) URI. You can input `http(s)` or `local file://URL`. Absolute paths are required when specifying a local PAC file. For more information, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).<br/>
__Enviroment variable__: `SAUCE_PAC`<br/>
__Shorthand__: n/a

```java
--pac file:///Users/JohnSmith/Desktop/MyPac.pac
```

---
### `--pac-auth`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Supplies PAC authentication in the format `username:password@host:port`. This option can be used multiple times for each authenticated host in the PAC file.<br/>
__Enviroment variable__: `SAUCE_PAC_AUTH`<br/>
__Shorthand__: n/a


---
### `--proxy`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Defines external proxy host:port where you want to route Sauce Labs REST API bound traffic.<br/>
__Enviroment variable__: `SAUCE_PROXY`<br/>
__Shorthand__: `-p`


---
### `--proxy-localhost`
<p><small>| OPTIONAL | BOOLEAN |</small></p>

__Description__: Setting this to `true` supports proxying upstream requests to localhost. This includes scenarios where an [upstream proxy is hosted on localhost](/secure-connections/sauce-connect/setup-configuration/additional-proxies). By default, it is `false`. <br/>
__Enviroment variable__: `SAUCE_PROXY_LOCALHOST`<br/>
__Shorthand__: n/a

:::caution
Not compatible with Sauce Connect versions below 4.7.0. Download the latest version [here](/secure-connections/sauce-connect/installation/).
:::


---
### `--proxy-tunnel`
__Description__: Routes all tunnel traffic through the external proxy specified by [`--proxy`](#--proxy). Uses the proxy configured with `--proxy` or `--pac` for the tunnel connection. For more information about the `-T` option and configuring Sauce Connect Proxy with other proxies, see [Set Up with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies). You'll need to use this option if you have a PAC file that contains Sauce Labs DNS names.<br/>
__Enviroment variable__: `SAUCE_PROXY_TUNNEL`<br/>
__Shorthand__: `-T`


---
### `--proxy-userpwd`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Sets username and password (sent via basic authentication) to access the proxy configured with [`--proxy`](#--proxy). For more information, see [Set Up with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).<br/>
__Enviroment variable__: `SAUCE_PROXY_USERPWD`<br/>
__Shorthand__: `-w`



## Client Configuration

---
### `--logfile`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Captures the Sauce Connect Proxy logs in a file. If a path is not specified, the file location will default to the location where the Sauce Connect Proxy executable can be found on your machine.<br/>
__Enviroment variable__: `SAUCE_LOGFILE`<br/>
__Shorthand__: `-l`

:::note
Use `--logfile -` to print your log to the console window (stdout) instead of the physical log file.
:::


---
### `--max-logsize`
<p><small>| OPTIONAL | NUMBER |</small></p>

__Description__: Rotates logfile after reaching the max bytes size. It creates a new log and appends an order number to the previous log. Disabled by default.<br/>
__Enviroment variable__: `SAUCE_MAX_LOGSIZE`<br/>
__Shorthand__: n/a


---
### `--pidfile`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Specifies the file where you want the Sauce Connect Proxy process ID (pid) to be written. This is useful for programmatically stopping Sauce Connect Proxy. Although Sauce Connect Proxy makes a best effort, we cannot guarantee that the pidfile will be removed when shutting down Sauce Connect Proxy. With that in mind, relying on the pidfile as a means to monitor Sauce Connect Proxy is not supported.<br/>
__Enviroment variable__: `SAUCE_PIDFILE`<br/>
__Shorthand__: `-d`


---
### `--readyfile`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Sets file that will be touched to indicate when the tunnel is ready.<br/>
__Enviroment variable__: `SAUCE_READYFILE`<br/>
__Shorthand__: `-f`


---
### `--scproxy-port`
<p><small>| OPTIONAL | NUMBER |</small></p>

__Description__: Sets port to use for the built-in HTTP proxy.<br/>
__Enviroment variable__: `SAUCE_SCPROXY_PORT`<br/>
__Shorthand__: `-X`


---
### `--se-port`
<p><small>| OPTIONAL | NUMBER |</small></p>

__Description__: Sets the port on which Sauce Connect Proxy's Selenium relay will listen for requests. Selenium commands reaching Sauce Connect Proxy on this port will be relayed to Sauce Labs securely and reliably through Sauce Connect Proxy's tunnel. This feature is disabled unless specified. For more information, see [Using the Selenium Relay](/secure-connections/sauce-connect/proxy-tunnels).<br/>
__Enviroment variable__: `SAUCE_SE_PORT`<br/>
__Shorthand__: `-P`


## Networking and Security

---
### `--auth`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Performs basic authentication when a URL on `host:port` asks for a username and password (`host:port:username:password` format). This option can be used multiple times. For examples, see [Authentication Using `--auth`](/secure-connections/sauce-connect/security-authentication).

This flag will only send the header Authorization with a type of "Basic". If a resource responds with the header WWW-Authenticate of a type any other than "Basic," your authentication will fail and return a non-200 HTTP response. HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy, which means performing basic authentication in this way is disabled for all HTTPS domains passed to `--no-ssl-bump-domains` argument.<br/>
__Enviroment variable__: `SAUCE_AUTH`<br/>
__Shorthand__: `-a`

```java
--auth mysite.com:80:awesometester:supersekrit
```

---
### `--cainfo`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: CA certificate bundle to use for verifying connections to Sauce Labs REST API. Default: `/private/etc/ssl/cert.pem`.<br/>
__Enviroment variable__: `SAUCE_CAINFO`<br/>
__Shorthand__: n/a

---
### `--dns`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: Uses specified name server. To specify multiple servers, separate them with a comma. Use IP addresses, optionally with a port number, the two separated by a colon.<br/>
__Enviroment variable__: `SAUCE_DNS`<br/>
__Shorthand__: n/a

```java
--dns 8.8.8.8,8.8.4.4:53
```

---
### `--tunnel-cainfo`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: CA certificate bundle to use for verifying tunnel connections.<br/>
__Enviroment variable__: `SAUCE_TUNNEL_CAINFO`<br/>
__Shorthand__: n/a  


---
### `--ocsp`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: OCSP verification mode. Options are: strict, log-only, and disable. The default is log-only.<br/>
__Enviroment variable__: `SAUCE_OCSP`<br/>
__Shorthand__: n/a  

:::note
`--ocsp strict` may fail if a certificate in the chain does not support OCSP. We recommend leaving it as the default "log-only" mode.
:::

---
### `--tunnel-capath`
<p><small><span className="sauceGold">DEPRECATED</span></small></p>

__Description__: Directory of CA certificates to use for verifying tunnel connections.<br/>
__Enviroment variable__: n/a <br/>
__Shorthand__: n/a  

:::caution
Effective with Sauce Connect Proxy version 4.7.0, `--tunnel-capath` was deprecated. Download the latest version [here](/secure-connections/sauce-connect/installation/).
:::

---
### `--capath`
<p><small><span className="sauceGold">DEPRECATED</span></small></p>

__Description__: Defines a directory of CA certs to use for verifying connections to Sauce Labs REST API.<br/>
__Enviroment variable__: n/a <br/>
__Shorthand__: n/a  

:::caution
Effective with Sauce Connect Proxy version 4.7.0, `--capath` was deprecated. Download the latest version [here](/secure-connections/sauce-connect/installation/).
:::



## Troubleshooting and Debugging

---
### `--log-stats`
__Description__: Logs statistics about HTTP traffic every &#60;seconds&#62;. Information includes bytes transmitted, requests made, and responses received.<br/>
__Enviroment variable__: `SAUCE_LOG_STATS`<br/>
__Shorthand__: `-z`  


---
### `--metrics-address`
<p><small>| OPTIONAL | STRING |</small></p>

:::caution
Effective with Sauce Connect Proxy version 4.7.0, the metrics server is disabled by default.
:::

__Description__: Use this option to define the host:port for the internal web server used to expose client-side metrics. The default is `localhost:8888` for versions prior to 4.7.0.<br/>
__Enviroment variable__: `SAUCE_METRICS_ADDRESS`<br/>
__Shorthand__: n/a  


---
### `--verbose`
<p><small>| OPTIONAL |</small></p>

__Description__: Enables verbose debugging. Use this to log HTTP headers or debug Sauce Connect connection. You can also use `-vv` (very verbose), which outputs HTTP headers and KGP logs, although it's recommended for troubleshooting purposes only because it's system-resource demanding and can adversely affect Sauce Connect Proxy performance.<br/>
__Enviroment variable__: `SAUCE_VERBOSE`<br/>
__Shorthand__: `-v`


## Other Options

---
### `--scproxy-read-limit`
<p><small>| OPTIONAL | NUMBER |</small></p>

__Description__: Rates limit reads in scproxy to the number of bytes per second that you specify. This option can be used to adjust local network transfer rate to prevent overloading the tunnel connection.<br/>
__Enviroment variable__: `SAUCE_SCPROXY_READ_LIMIT`<br/>
__Shorthand__: n/a


---
### `--scproxy-write-limit`
<p><small>| OPTIONAL | NUMBER |</small></p>

__Description__: Rates limit writes in scproxy to the number of bytes per second that you specify. This option can be used to adjust local network transfer rate to prevent overloading the tunnel connection.<br/>
__Enviroment variable__: `SAUCE_SCPROXY_WRITE_LIMIT`<br/>
__Shorthand__: n/a


---
### `--extra-info`
<p><small>| OPTIONAL | STRING |</small></p>

__Description__: JSON string that contains an advanced tunnel configuration.<br/>

|Option|Description|Example|
|---|---|---|
|`inject-forwarded-for`| Do not remove X-FORWARDED-FOR header from the proxied HTTP requests.|```--extra-info '{"inject-forwarded-for": true}'```|
|`reply_body_max_size`| Set limit to the reply body size (the default is 500 MB).|```--extra-info '{"reply_body_max_size": "30 MB"}'```|

You can specify a combination of several options. For example:

```bash
--extra-info '{"inject-forwarded-for": true, "reply_body_max_size": "300 MB"}'
```
__Enviroment variable__: `SAUCE_EXTRA_INFO`<br/>
__Shorthand__: n/a


## Formatting Domains in the Command Line

Here are some guidelines to follow when formatting domains:

* Use only the domain name. Do not precede it with `http:` or `https:`.
  * Example: `mydomain.com`
* Make sure your comma-separated list of domains doesn't include any spaces.
  * Example, `mydomain.com,saucelabs.com,mysite.com`
* Prefix domain names with `*.` or simply `.` to match all its subdomains.
  * Example: You could refer to `docs.saucelabs.com` and `my.saucelabs.com` as "`*.saucelabs.com"` or` ".saucelabs.com"`. Enclose the argument in quotes to prevent shell expansion of asterisk.
* If you don't want any domains to be SSL re-encrypted, you can specify `all` with the argument (i.e., `-B all` or `--no-ssl-bump-domains all`)
* WebSockets domains are not compatible with SSL bumping, so you'll need to [disable SSL Bumping](#--no-ssl-bump-domains) for those.


## Additional Resources

* [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart/)
* [Using Sauce Connect Proxy Environment Variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/)
* [Sauce Connect Proxy Basic Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup).
