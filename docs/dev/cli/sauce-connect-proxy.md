---
id: sauce-connect-proxy
title: Sauce Connect Proxy 4 CLI Reference
sidebar_label: Sauce Connect Proxy 4 CLI
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Below is a list of flags to use on your Sauce Connect Proxy v4.x.x command line to specify parameters. Supported versions are indicated in the headers.

:::note
This is Sauce Connect Version 4 CLI documentation.
The Sauce Connect Proxy version 5 major release introduced breaking CLI changes. Please refer to [Sauce Connect Proxy 5 CLI Reference](/secure-connections/sauce-connect-5/cli/sc/) for details.
:::

## What You'll Need

- Make sure you're using the latest [Sauce Connect Proxy version](/secure-connections/sauce-connect/installation/). Otherwise, some flags may not work.
- See [Sauce Connect Quickstart](/secure-connections/sauce-connect/quickstart/) and [Basic Setup for Sauce Connect Proxy](/secure-connections/sauce-connect/setup-configuration/basic-setup) for setup instructions and use cases.

:::tip
You can view the entire list of CLI options by running the `--help` flag.
:::

<br/>

## Main

---

### `--user`

<p><small>| REQUIRED | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Sets your Sauce Labs username. For additional security, you can set this as an [environment variable](/secure-connections/sauce-connect/setup-configuration/environment-variables/).<br/>
**Environment variable**: `SAUCE_USERNAME` or `SAUCE_USER`<br/>
**Shorthand**: `-u`

---

### `--api-key`

<p><small>| REQUIRED | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Sets your Sauce Labs API key. This will be the same as your [Access Key](https://app.saucelabs.com/user-settings). For additional security, you can set this as an [environment variable](/secure-connections/sauce-connect/setup-configuration/environment-variables/).<br/>
**Environment variable**: `SAUCE_ACCESS_KEY` or `SAUCE_API_KEY`<br/>
**Shorthand**: `-k`

---

### `--config-file`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Defines the local path to a YAML file containing a Sauce Connect Proxy configuration. For instructions, [Configuring Tunnels with a YAML File](/secure-connections/sauce-connect/setup-configuration/yaml-config/).<br/>
**Environment variable**: `SAUCE_CONFIG_FILE`<br/>
**Shorthand**: `-c`

:::caution
`--config-file` is required if you're using a YAML file to configure Sauce Connect Proxy.
:::

---

### `--region`

<p><small>| OPTIONAL | STRING |  <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Sets your Sauce Labs [data center endpoint](/basics/data-center-endpoints/#data-center-endpoints) (for example, `us-west` or `eu-central`). Default: If you don't specify a data center, the default value is `us-west`.<br/>
**Environment variable**: `SAUCE_REGION`<br/>
**Shorthand**: `-r`

---

### `--rest-url`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Sets the URL for the [data center endpoint](/basics/data-center-endpoints) of the location where the device you're testing on is hosted.<br/>
**Environment variable**: `SAUCE_REST_URL`<br/>
**Shorthand**: `-x`

```bash
#US-West-1 ("-r us-west" can be used instead)
-x https://api.us-west-1.saucelabs.com/rest/v1

#EU-Central-1 ("-r eu-central" can be used instead)
-x https://api.eu-central-1.saucelabs.com/rest/v1

```

---

### `--shared-tunnel`

<p><small>| OPTIONAL | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Changes tunnel sharing permissions so that all users in an organization can use Sauce Connect Proxy tunnels, rather than just the tunnel owner (admin). For more information, see [Sharing Sauce Connect Proxy Tunnels](/basics/acct-team-mgmt/sauce-connect-proxy-tunnels).<br/>
**Environment variable**: `SAUCE_SHARED_TUNNEL`<br/>
**Shorthand**: `-s`

---

### `--tunnel-identifier`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> | </small></p>

**Description**: Assigns a name to a Sauce Connect Proxy tunnel. It can also assign a name to a group of tunnels in the same [High Availability pool](/secure-connections/sauce-connect/setup-configuration/high-availability), when used with [`--tunnel-pool`](#--tunnel-pool). Must be in ASCII format.

You can run tests using this tunnel by specifying the [`tunnelName`](/dev/test-configuration-options/#tunnelname) in your test capabilities. To learn about the syntax for setting this as a capability, see [Test Configuration Options](/dev/test-configuration-options).<br/>
**Environment variable**: `SAUCE_TUNNEL_IDENTIFIER`<br/>
**Shorthand**: `-i`

:::info Tunnel Identifier = Tunnel Name
This value populates the **Tunnel Name** field on the Sauce Labs Tunnels page, _not_ the **Tunnel ID** (which is an auto-generated tunnel UUID). You can use the `--tunnel-identifier` or [`--tunnel-name`](#--tunnel-name) flags interchangeably.
:::

:::caution
This flag is deprecated and will be removed in future versions. It is replaced by [--tunnel-name](#--tunnel-name).
:::

---

### `--tunnel-name`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Assigns a name to a Sauce Connect Proxy tunnel. It can also assign a name to a group of tunnels in the same [High Availability pool](/secure-connections/sauce-connect/setup-configuration/high-availability), when used with [`--tunnel-pool`](#--tunnel-pool). Must be in ASCII format.

You can run tests using this tunnel by specifying the [`tunnelName`](/dev/test-configuration-options/#tunnelname) in your test capabilities. To learn about the syntax for setting this as a capability, see [Test Configuration Options](/dev/test-configuration-options).<br/>
**Environment variable**: `SAUCE_TUNNEL_NAME`<br/>
**Shorthand**: `-i`

---

### `--tunnel-pool`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Launches a high availability tunnel pool along with the [`--tunnel-name`](#--tunnel-name) flag. For more info, see [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).<br/>
**Environment variable**: n/a<br/>
**Shorthand**: n/a

## Tunnel Configuration

---

### `--direct-domains`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Sets domain(s) that are requested through the public internet instead of the Sauce Connect Proxy tunnel. This is the inverse of [`--tunnel-domains`](#--tunnel-domains). When adding multiple domains, [format as a comma-separated list](#formatting-domains). See [Tuning Sauce Connect Proxy Traffic](/secure-connections/sauce-connect/proxy-tunnels/#direct-domains) for more information.<br/>
**Environment variable**: `SAUCE_DIRECT_DOMAINS`<br/>
**Shorthand**: `-D`

---

### `--no-ssl-bump-domains`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Sets domain(s) that do not require SSL resigning. Requests that include hosts matching one of these domains will not be SSL re-encrypted. When adding multiple domains, [format as a comma-separated list](#formatting-domains). See [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping) for more information about scenarios in which might want to use this command.<br/>
**Environment variable**: `SAUCE_NO_SSL_BUMP_DOMAINS`<br/>
**Shorthand**: `-B`

---

### `--fast-fail-regexps`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Allows you to set a deny-list of URL patterns. Requests with URLs matching one of these will get dropped instantly and will not go through the tunnel. Tests for app and site degradation based on missing assets or resources. Can be used to simulate non-loading of scripts, styles, or other resources. Use this option followed by a comma-separated list of regular expressions. See the [Sauce Connect Proxy FAQ](/secure-connections/sauce-connect/faq) for an example.<br/>
**Environment variable**: `SAUCE_FAST_FAIL_REGEXPS`<br/>
**Shorthand**: `-F`

---

### `--tunnel-domains`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Sets domain(s) that are requested through the Sauce Connect Proxy tunnel. This is the inverse of [`--direct-domains`](#--direct-domains). When adding multiple domains, [format them as a comma-separated list](#formatting-domains). See [Tuning Sauce Connect Proxy Traffic](/secure-connections/sauce-connect/proxy-tunnels/#tunnel-domains) for more information.<br/>
**Environment variable**: `SAUCE_TUNNEL_DOMAINS`<br/>
**Shorthand**: `-t`

---

### `--extra-info`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: JSON string that contains an advanced tunnel configuration.<br/>

| Option                 | Description                                                          | Example                                           |
| ---------------------- | -------------------------------------------------------------------- | ------------------------------------------------- |
| `inject-forwarded-for` | Do not remove X-FORWARDED-FOR header from the proxied HTTP requests. | `--extra-info '{"inject-forwarded-for": true}'`   |
| `reply_body_max_size`  | Set limit to the reply body size (the default is 500 MB).            | `--extra-info '{"reply_body_max_size": "30 MB"}'` |

You can specify a combination of several options. For example:

```bash
--extra-info '{"inject-forwarded-for": true, "reply_body_max_size": "300 MB"}'
```

**Environment variable**: `SAUCE_EXTRA_INFO`<br/>
**Shorthand**: n/a

## External Proxy Configuration

---

### `--autodetect`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Enables the auto-detection of system proxy settings. Inverse of [`--no-autodetect`](#--no-autodetect). Default: `true`. See also [Automatic Proxy Auto-Configuration](/secure-connections/sauce-connect/setup-configuration/additional-proxies#proxy-auto-configuration-automatic).<br/>
**Environment variable**: `SAUCE_AUTODETECT`<br/>
**Shorthand**: n/a

---

### `--no-autodetect`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Disables the auto-detection of system proxy settings. See [Automatic Proxy Auto-Configuration](/secure-connections/sauce-connect/setup-configuration/additional-proxies#proxy-auto-configuration-automatic) for more information.<br/>
**Environment variable**: `SAUCE_NO_AUTODETECT`<br/>
**Shorthand**: n/a

---

### `--pac`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Defines external proxy auto-configuration (PAC) URI. You can input `http(s)` or `local file://URL`. Absolute paths are required when specifying a local PAC file. `--pac` supports the standard file URL format (that is, file://auth-path/local-path). On Windows, the format looks like `file:///C:/path/to/file`. For more information, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).<br/>
**Environment variable**: `SAUCE_PAC`<br/>
**Shorthand**: n/a

<Tabs
defaultValue="maclinux"
values={[
{label: 'Mac or Linux', value: 'maclinux'},
{label: 'Windows', value: 'windows'},
]}>

<TabItem value="maclinux">

```bash
--pac file://Users/JohnSmith/Desktop/MyPac.pac
```

</TabItem>

<TabItem value="windows">

```bash
--pac file:///C:/Users/JohnSmith/Desktop/MyPac.pac
```

</TabItem>
</Tabs>

---

### `--pac-auth`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Supplies PAC authentication in the format `username:password@host:port`. This option can be used multiple times for each authenticated host in the PAC file.<br/>
**Environment variable**: `SAUCE_PAC_AUTH`<br/>
**Shorthand**: n/a

:::note
Use a comma separated list when using multiple PAC settings via environment variable. Do not include spaces in this list. For example: `SAUCE_PAC_AUTH=username:password@host:port,username2:password@host2:port`
:::

---

### `--proxy`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Defines external proxy host:port where you want to route Sauce Labs test traffic. For example, the traffic from a Firefox desktop test.<br/>
**Environment variable**: `SAUCE_PROXY`<br/>
**Shorthand**: `-p`

---

### `--proxy-localhost`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Setting this to `true` supports sending requests to `localhost` through the upstream proxy. This includes scenarios where an [upstream proxy is hosted on localhost](/secure-connections/sauce-connect/setup-configuration/additional-proxies). By default, it is `false`, and requests to `localhost` are not sent through the upstream proxy.<br/>
**Environment variable**: `SAUCE_PROXY_LOCALHOST`<br/>
**Shorthand**: n/a

---

### `--proxy-tunnel`

<p><small>| OPTIONAL | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Routes all tunnel traffic through the external proxy specified by [`--proxy`](#--proxy). Uses the proxy configured with `--proxy` or `--pac` for the tunnel connection. For more information about the `-T` option and configuring Sauce Connect Proxy with other proxies, see [Set Up with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies). You'll need to use this option if you have a PAC file that contains Sauce Labs DNS names.<br/>
**Environment variable**: `SAUCE_PROXY_TUNNEL`<br/>
**Shorthand**: `-T`

---

### `--proxy-userpwd`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Sets username and password (sent via basic authentication) to access the proxy configured with [`--proxy`](#--proxy). For more information, see [Set Up with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).<br/>
**Environment variable**: `SAUCE_PROXY_USERPWD`<br/>
**Shorthand**: `-w`

## Client Configuration

---

### `--logfile`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Captures the Sauce Connect Proxy logs in a file. If a path is not specified, the file location will default to the location where the Sauce Connect Proxy executable can be found on your machine.<br/>
**Environment variable**: `SAUCE_LOGFILE`<br/>
**Shorthand**: `-l`

:::note
Use `--logfile -` to print your log to the console window (stdout) instead of the physical log file.
:::

---

### `--max-logsize`

<p><small>| OPTIONAL | NUMBER | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Rotates logfile after reaching the max bytes size. It creates a new log and appends an order number to the previous log. Disabled by default.<br/>
**Environment variable**: `SAUCE_MAX_LOGSIZE`<br/>
**Shorthand**: n/a

---

### `--output-format`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Specifies console output format. You can configure either `pretty` output, which will display various fonts and graphics, or `text` (text only). Default: `pretty`.<br/>
**Environment variable**: `SAUCE_OUTPUT_FORMAT`<br/>
**Shorthand**: n/a

---

### `--pidfile`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Specifies the file where you want the Sauce Connect Proxy process ID (pid) to be written. This is useful for programmatically stopping Sauce Connect Proxy. Although Sauce Connect Proxy makes a best effort, we cannot guarantee that the pidfile will be removed when shutting down Sauce Connect Proxy. With that in mind, relying on the pidfile as a means to monitor Sauce Connect Proxy is not supported.<br/>
**Environment variable**: `SAUCE_PIDFILE`<br/>
**Shorthand**: `-d`

---

### `--readyfile`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Sets file that is updated when the tunnel is ready. See also [Using ready file with Docker](/secure-connections/sauce-connect/setup-configuration/docker#ready-file).<br/>
**Environment variable**: `SAUCE_READYFILE`<br/>
**Shorthand**: `-f`

---

### `--scproxy-port`

<p><small>| OPTIONAL | NUMBER | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Sets port to use for the built-in HTTP proxy.<br/>
**Environment variable**: `SAUCE_SCPROXY_PORT`<br/>
**Shorthand**: `-X`

---

### `--status-address`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Use this option to define the host:port for the internal web server used to expose the Sauce Connect Proxy runtime info. See the [Sauce Connect Proxy Monitoring](/secure-connections/sauce-connect/proxy-tunnels/#sauce-connect-proxy-monitoring) for more info. Disabled by default.<br/>
**Environment variable**: `SAUCE_STATUS_ADDRESS`<br/>
**Shorthand**: n/a

---

### `--se-port`

<p><small>| OPTIONAL | NUMBER | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Sets the port on which Sauce Connect Proxy's Selenium relay will listen for requests. Selenium commands reaching Sauce Connect Proxy on this port will be relayed to Sauce Labs securely and reliably through Sauce Connect Proxy's tunnel. This feature is disabled unless specified. For more information, see [Using the Selenium Relay](/secure-connections/sauce-connect/proxy-tunnels).<br/>
**Environment variable**: `SAUCE_SE_PORT`<br/>
**Shorthand**: `-P`

## Networking and Security

---

### `--auth`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Performs basic authentication when a URL on `host:port` asks for a username and password (`host:port:username:password` format). This option can be used multiple times. For examples, see [Authentication Using `--auth`](/secure-connections/sauce-connect/security-authentication).

This flag will only send the header Authorization with a type of "Basic." If a resource responds with the header WWW-Authenticate of a type any other than "Basic," your authentication will fail and return a non-200 HTTP response. HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy, which means performing basic authentication in this way is disabled for all HTTPS domains passed to `--no-ssl-bump-domains` argument.<br/>
**Environment variable**: `SAUCE_AUTH`<br/>
**Shorthand**: `-a`

```bash
--auth mysite.com:80:awesometester:supersekrit
```

---

### `--cainfo`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: CA certificate bundle in PEM format to use for verifying connections to Sauce Labs REST API. Default: `/private/etc/ssl/cert.pem`. This is normally used when a proxy is needed to access the REST API, and the proxy's certificate isn't available in the system certificate store. This does <b>not</b> affect test traffic through Sauce Connect.<br/>
**Environment variable**: `SAUCE_CAINFO`<br/>
**Shorthand**: n/a

---

### `--dns`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Uses specified name server. To specify multiple servers, separate them with a comma. Use IP addresses, optionally with a port number, the two separated by a colon.<br/>
**Environment variable**: `SAUCE_DNS`<br/>
**Shorthand**: n/a

```bash
--dns 8.8.8.8,8.8.4.4:53
```

---

### `--tunnel-cainfo`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: CA certificate bundle in PEM format to use for verifying tunnel connections. This is normally used when a proxy is needed to access the tunnel endpoint, and the proxy's certificate isn't available in the system certificate store. This does <b>not</b> affect test traffic through Sauce Connect.<br/>
**Environment variable**: `SAUCE_TUNNEL_CAINFO`<br/>
**Shorthand**: n/a

---

### `--ocsp`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: OCSP verification mode. Options are: strict, log-only, and disable. The default is log-only.<br/>
**Environment variable**: `SAUCE_OCSP`<br/>
**Shorthand**: n/a

:::note
`--ocsp strict` may fail if a certificate in the chain does not support OCSP. We recommend leaving it as the default "log-only" mode.
:::

## Troubleshooting and Debugging

---

### `--log-stats`

<p><small>| OPTIONAL | BOOLEAN | <span className="sauceGreen">4.8.x</span> | </small></p>

**Description**: Logs statistics about HTTP traffic every &#60;seconds&#62;. Information includes bytes transmitted, requests made, and responses received.<br/>
**Environment variable**: `SAUCE_LOG_STATS`<br/>
**Shorthand**: `-z`

---

### `--verbose`

<p><small>| OPTIONAL | NUMBER | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Enables verbose debugging. Use this to log HTTP headers or debug Sauce Connect connection. You can also use `-vv` (very verbose), which outputs HTTP headers and KGP logs, although it's recommended for troubleshooting purposes only because it's system-resource demanding and can adversely affect Sauce Connect Proxy performance.<br/>
**Environment variable**: `SAUCE_VERBOSE`<br/>
**Shorthand**: `-v`

:::note
Setting the `SAUCE_VERBOSE` environment variable to `1` is equivalent to `-v` and `2` is equivalent to `-vv`.
:::

## Other Options

---

### `--experimental`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">4.8.x</span> <span className="sauceGreen">4.9.x</span> | </small></p>

**Description**: Enable or disable experimental features. This flag allows controlled replacement of the components. It should only be used if the default feature configuration exhibits undesired behavior.<br/>

| Option     | Description                                   | Example                   | Available in Versions                     |
| ---------- | --------------------------------------------- | ------------------------- | ----------------------------------------- |
| `proxy`    | Use the new scproxy implementation (default). | `--experimental proxy`    | <span className="sauceGreen">4.8.x</span> |
| `no-proxy` | Use the previous generation scproxy.          | `--experimental no-proxy` | <span className="sauceGreen">4.8.x</span> |

**Environment variable**: `SAUCE_EXPERIMENTAL`<br/>
**Shorthand**: n/a

## Formatting Domains

Here are some guidelines to follow when formatting domains:

- Use only the domain name. Do not precede it with `http:` or `https:`.
  - Example: `mydomain.com`
- Make sure your comma-separated list of domains doesn't include any spaces.
  - Example, `mydomain.com,saucelabs.com,mysite.com`
- Prefix domain names with a dot `.` to match all its subdomains.
  - Example: You could refer to `docs.saucelabs.com` and `my.saucelabs.com` as "`*.saucelabs.com"` or` ".saucelabs.com"`. Enclose the argument in quotes to prevent shell expansion of asterisk.
- If you don't want any domains to be SSL re-encrypted, you can specify `all` with the argument (that is, `-B all` or `--no-ssl-bump-domains all`)
- WebSockets domains are not compatible with SSL bumping, so you'll need to [disable SSL Bumping](#--no-ssl-bump-domains) for those.

## Additional Resources

- [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart/)
- [Sauce Connect Proxy Environment Variables](/secure-connections/sauce-connect/setup-configuration/environment-variables/)
- [Sauce Connect Proxy Basic Setup](/secure-connections/sauce-connect/setup-configuration/basic-setup).
