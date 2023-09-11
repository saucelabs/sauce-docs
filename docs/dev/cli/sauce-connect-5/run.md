---
id: run
title: sc run
sidebar_label: sc run
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `sc run` command is a main Sauce Connect Proxy 5 command that allows provisioning a Sauce Connect Proxy server and establishing a secure connection between the Sauce Connect Proxy client and the server.

## Usage

```bash
SAUCE_USER=<username> SAUCE_ACCESS_KEY=<access key> sc run --region <region> [OPTIONS]
```

## Options

### Main

---

#### `--user`

<p><small>| REQUIRED | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Sets your Sauce Labs username.<br/>
**Environment variable**: `SAUCE_USER`<br/>
**Shorthand**: `-u`

:::note
For additional security, we recommend setting this as an [environment variable](/secure-connections/sauce-connect/setup-configuration/environment-variables/).
:::

---

#### `--access-key`

<p><small>| REQUIRED | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Sets your Sauce Labs access key. This will be the same as your [Access Key](https://app.saucelabs.com/user-settings).<br/>
**Environment variable**: `SAUCE_ACCESS_KEY`<br/>
**Shorthand**: `-k`

:::note
For additional security, we recommend setting this as an [environment variable](/secure-connections/sauce-connect/setup-configuration/environment-variables/).
:::

---

#### `--region`

<p><small>| REQUIRED | STRING |  <span className="sauceGreen">stable</span> | </small></p>

**Description**: Sets your Sauce Labs [data center endpoint](/basics/data-center-endpoints/#data-center-endpoints) (for example, `us-west` or `eu-central`).<br/>
**Environment variable**: `SAUCE_REGION`<br/>
**Shorthand**: `-r`

---

#### `--tunnel-name`

<p><small>| REQUIRED | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Assigns a name to a Sauce Connect Proxy tunnel. It can also assign a name to a group of tunnels in the same [High Availability pool](/secure-connections/sauce-connect/setup-configuration/high-availability), when used with [`--tunnel-pool`](#--tunnel-pool). Must be in ASCII format.<br/>
**Environment variable**: `SAUCE_TUNNEL_NAME`<br/>
**Shorthand**: `-i`

:::note
You can run tests using this tunnel by specifying the [`tunnelName`](/dev/test-configuration-options/#tunnelname) in your test capabilities. To learn about the syntax for setting this as a capability, see [Test Configuration Options](/dev/test-configuration-options).
:::

---

#### `--config-file`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Defines the local path to a YAML file containing a Sauce Connect Proxy configuration.<br/>
**Environment variable**: n/a<br/>
**Shorthand**: `-c`

---

#### `--rest-url`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Sets the URL for the [data center endpoint](/basics/data-center-endpoints) of the location where the device you're testing on is hosted.<br/>
**Environment variable**: `SAUCE_REST_URL`<br/>
**Shorthand**: n/a

:::note
This flag is an alternative to the recommended [`--region`](/dev/cli/sauce-connect-5/run/#--region).
:::

### Tunnel Mode Configuration

---

#### `--shared-tunnel`

<p><small>| OPTIONAL | STRING | <span className="sauceRed">deprecated</span> | </small></p>

**Description**: Changes tunnel sharing permissions so that all users in an organization can use Sauce Connect Proxy tunnels, rather than just the tunnel owner. For more information, see [Sharing Sauce Connect Proxy Tunnels](/basics/acct-team-mgmt/sauce-connect-proxy-tunnels).<br/>
**Environment variable**: `SAUCE_SHARED_TUNNEL`<br/>
**Shorthand**: `-s`

:::note
This flag will change in the stable release of Sauce Connect Proxy 5.0.0.
:::

---

#### `--tunnel-pool`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Launches a high availability tunnel pool along with the [`--tunnel-name`](#--tunnel-name) flag. For more info, see [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).<br/>
**Environment variable**: n/a<br/>
**Shorthand**: n/a

### Proxy Configuration

---

#### `--pac`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Proxy Auto-Configuration file to use for upstream proxy selection. It can be a local file or a URL, you can also use '-' to read from stdin. For more information, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).<br/>
**Environment variable**: `SAUCE_PAC`<br/>
**Shorthand**: `-p`

<Tabs
defaultValue="maclinux"
values={[
{label: 'Mac or Linux', value: 'maclinux'},
{label: 'Windows', value: 'windows'},
]}>

<TabItem value="maclinux">

```bash
--pac file:///Users/JohnSmith/Desktop/MyPac.pac
```

</TabItem>

<TabItem value="windows">

```bash
--pac file:///C:/Users/JohnSmith/Desktop/MyPac.pac
```

</TabItem>
</Tabs>

---

#### `--auth`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Site or upstream proxy basic authentication credentials in the format `username:password@host:port`. The host and port can be set to "*" to match all. The flag can be specified multiple times to add multiple credentials.<br/>
**Environment variable**: `SAUCE_PAC_AUTH`<br/>
**Shorthand**: `-a`

---

#### `--header`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Add or remove HTTP request headers. Use the format "name: value" to add a header, "name;" to set the header to empty value, "-name" to remove the header, "-name*" to remove headers by prefix.
The header name will be normalized to canonical form. The header value should not contain any newlines or carriage returns. The flag can be specified multiple times.<br/>
**Environment variable**: `SAUCE_HEADER`<br/>
**Shorthand**: `-H`

```bash
-H "Host: example.com" -H "-User-Agent" -H "-X-*"
```

---

#### `--proxy`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Defines an upstream proxy [protocol://]host:port where you want to route your test session traffic. For example, the traffic from a Firefox desktop test.<br/>
The supported protocols are: http, https, socks, socks5. No protocol specified will be treated as HTTP proxy. The basic authentication username and password can be specified in the
host string e.g. user:pass@host:port. Alternatively, you can use the -a, --auth flag to specify the credentials.
**Environment variable**: `SAUCE_PROXY`<br/>
**Shorthand**: `-x`

:::note
This flag configures the proxy for SUT traffic only. Use the [`--proxy-sauce`](#--proxy-sauce) flag to configure a proxy for the Sauce Labs REST API and Sauce Connect Server traffic.
:::

---

#### `--proxy-sauce`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Defines external proxy host:port where you want to route Sauce Labs REST API and Sauce Connect Server traffic.<br/>
**Environment variable**: `SAUCE_PROXY_SAUCE`<br/>
**Shorthand**: n/a

:::note
This flag configures the proxy for the Sauce Labs REST API and Sauce Connect Server traffic only. Use the [`--proxy`](#--proxy) flag to configure a proxy for SUT traffic proxy.
:::

---

#### `--proxy-localhost`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: One of `allow`, `deny`, `direct`. Setting this to `allow` supports sending requests to `localhost` through the upstream proxy.
This includes scenarios where an [upstream proxy is hosted on localhost](/secure-connections/sauce-connect/setup-configuration/additional-proxies).
Setting this to direct sends requests to localhost directly without using the upstream proxy. By default, requests to localhost are denied.<br/>
**Environment variable**: `SAUCE_PROXY_LOCALHOST`<br/>
**Shorthand**: n/a

---

#### `--response-header`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Add or remove HTTP headers on the received response before sending it to the client. See the documentation for the -H, --header flag for more details on the format.<br/>
**Environment variable**: `SAUCE_RESPONSE_HEADER`<br/>
**Shorthand**: `-R`

### Tunnel Traffic Configuration

---

#### `--direct-domains`

<p><small>| OPTIONAL | STRING | <span className="sauceYellow">alpha</span> | </small></p>

**Description**: Sets domain(s) that are requested through the public internet instead of the Sauce Connect Proxy tunnel. Can be repeated multiple times. This is the inverse of [`--tunnel-domains`](#--tunnel-domains). See [Tuning Sauce Connect Proxy Traffic](/secure-connections/sauce-connect/proxy-tunnels/#direct-domains) for more information.<br/>
**Environment variable**: `SAUCE_DIRECT_DOMAINS`<br/>
**Shorthand**: `-D`

---

#### `--tls-passthrough-domains`

<p><small>| OPTIONAL | STRING | <span className="sauceYellow">alpha</span> | </small></p>

**Description**: Sets domain(s) that do not require TLS resigning. Matching requests will not be TLS re-encrypted. Can be repeated multiple times. See [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping) for more information about scenarios in which might want to use this command.<br/>
**Environment variable**: `SAUCE_TLS_PASSTHROUGH_DOMAINS`<br/>
**Shorthand**: `-B`

---

#### `--deny-domains`

<p><small>| OPTIONAL | STRING | <span className="sauceYellow">alpha</span> | </small></p>

**Description**: Allows you to set a deny-list of domain patterns. Matching requests will get dropped instantly and will not go through the tunnel. Tests for app and site degradation based on missing assets or resources. Can be used to simulate non-loading of scripts, styles, or other resources. Use this option followed by a comma-separated list of regular expressions. See the [Sauce Connect Proxy FAQ](/secure-connections/sauce-connect/faq) for an example.<br/>
**Environment variable**: `SAUCE_DENY_DOMAINS`<br/>
**Shorthand**: `-F`

---

#### `--tunnel-domains`

<p><small>| OPTIONAL | STRING | <span className="sauceYellow">alpha</span> | </small></p>

**Description**: Sets domain(s) that are requested through the Sauce Connect Proxy tunnel. This is the inverse of [`--direct-domains`](#--direct-domains). Can be repeated multiple times. See [Tuning Sauce Connect Proxy Traffic](/secure-connections/sauce-connect/proxy-tunnels/#tunnel-domains) for more information.<br/>
**Environment variable**: `SAUCE_TUNNEL_DOMAINS`<br/>
**Shorthand**: `-t`

### Client Configuration

---

#### `--address`

<p><small>| OPTIONAL | STRING | <span className="sauceYellow">alpha</span> | </small></p>

**Description**: Optional address for the built-in HTTP proxy.<br/>
**Environment variable**: `SAUCE_ADDRESS`<br/>
**Shorthand**: n/a

---

#### `--api-address`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Use this option to define the host:port for the internal web server used to expose the Sauce Connect Proxy runtime info. Disabled by default.<br/>
**Environment variable**: `SAUCE_API_ADDRESS`<br/>
**Shorthand**: n/a

---

#### `--api-basic-auth`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Basic authentication `username:password` credentials to protect the server. Username and password are URL decoded. This allows you to pass in special characters such as @ by using %40 or pass in a colon with %3a.<br/>
**Environment variable**: `SAUCE_API_BASIC_AUTH`<br/>
**Shorthand**: n/a


### Networking and Security

---

#### `--cacert-file`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: CA certificate bundle in PEM format to use in addition to the system root certificates.
Can be a path to a file or "data:" followed by base64 encoded certificate. Use this flag multiple times to specify multiple CA certificate files.<br/>
**Environment variable**: `SAUCE_CACERT_FILE`<br/>
**Shorthand**: n/a

---

#### `--dns-server`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: DNS server(s) to use instead of system default. There are two execution policies, when more then one server is specified.
Fallback: the first server in a list is used as primary, the rest are used as fallbacks. Round robin: the servers are used in a round-robin fashion.
The port is optional, if not specified the default port is 53.<br/>
**Environment variable**: `SAUCE_DNS`<br/>
**Shorthand**: `-n`

```bash
sc run --dns-server 8.8.8.8 --dns-server 8.8.4.4:53
```


### Logging

---

#### `--log-file`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Captures the Sauce Connect Proxy logs in a file. If a path is not specified, logs to stdout.<br/>
**Environment variable**: `SAUCE_LOG_FILE`<br/>
**Shorthand**: n/a

---

#### `--log-http`

<p><small>| OPTIONAL | STRING | <span className="sauceYellow">alpha</span> | </small></p>

**Description**: HTTP request and response logging mode, one of none, short-url, url, headers, body, errors. 
HTTP request and response logging mode. By default, request line and headers are logged if response status
code is greater than or equal to 500. Setting this to none disables logging. The short-url mode logs
[scheme://]host[/path] instead of the full URL.<br/>
**Environment variable**: `SAUCE_LOG_HTTP`<br/>
**Shorthand**: n/a

---

#### `--log-level`

<p><small>| OPTIONAL | STRING | <span className="sauceGreen">stable</span> | </small></p>

**Description**: Log level, one of error, info, debug. The default is `info`.<br/>
**Environment variable**: `SAUCE_LOG_LEVEL`<br/>
**Shorthand**: n/a

:::note
Setting the `SAUCE_LOG_LEVEL` environment variable to `1` is equivalent to `-v` and `2` is equivalent to `-vv`.
:::


### Formatting Domains

Here are some guidelines to follow when formatting domain regular expressions:

- Use only the domain name. Do not precede it with `http:` or `https:`.
  - Example: `mydomain.com`
- Make sure your comma-separated list of domains doesn't include any spaces.
  - Example, `mydomain.com,saucelabs.com,mysite.com`
- Prefix domain names with a dot `.` to match all its subdomains.
  - Example: You could refer to `docs.saucelabs.com` and `my.saucelabs.com` as `.saucelabs.com`.

### Additional Resources

- [Sauce Connect Proxy Basic Setup](/secure-connections/sauce-connect-5/installation/).
