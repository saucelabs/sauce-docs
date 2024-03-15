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
SAUCE_USERNAME=<username> SAUCE_ACCESS_KEY=<access key> sc run --region <region> --tunnel-name my-tunnel [OPTIONS]
```

## Options

### Main

---

#### `--username`

<p><small>| REQUIRED | STRING | </small></p>

**Description**: Sets your Sauce Labs username.<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_USERNAME`<br/>
**Shorthand**: `-u`

:::note
For additional security, we recommend setting this as an [environment variable](/secure-connections/sauce-connect-5/operation/configuration/#environment-variables).
:::

---

#### `--access-key`

<p><small>| REQUIRED | STRING | </small></p>

**Description**: Sets your Sauce Labs access key. This will be the same as your [Access Key](https://app.saucelabs.com/user-settings).<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_ACCESS_KEY`<br/>
**Shorthand**: `-k`

:::note
For additional security, we recommend setting this as an [environment variable](/secure-connections/sauce-connect/setup-configuration/environment-variables/).
:::

---

#### `--region`

<p><small>| REQUIRED | STRING |  </small></p>

**Description**: Sets your Sauce Labs [data center endpoint](/basics/data-center-endpoints/#data-center-endpoints) (for example, `us-west` or `eu-central`).<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_REGION`<br/>
**Shorthand**: `-r`

---

#### `--tunnel-name`

<p><small>| REQUIRED | STRING | </small></p>

**Description**: Assigns a name to a Sauce Connect Proxy tunnel. It can also assign a name to a group of tunnels in the same [High Availability pool](/secure-connections/sauce-connect/setup-configuration/high-availability), when used with [`--tunnel-pool`](#--tunnel-pool). Must be in ASCII format.<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_TUNNEL_NAME`<br/>
**Shorthand**: `-i`

:::note
You can run tests using this tunnel by specifying the [`tunnelName`](/dev/test-configuration-options/#tunnelname) in your test capabilities. To learn about the syntax for setting this as a capability, see [Test Configuration Options](/dev/test-configuration-options).
:::

---

#### `--config-file`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Defines the local path to a YAML file containing a Sauce Connect Proxy configuration.<br/>
**Default**: n/a<br/>
**Environment variable**: n/a<br/>
**Shorthand**: `-c`

:::note
The following precedence order of configuration sources is used: command flags, environment variables, config file, default values.
:::

:::note
An additional command [`sc run config-file`](/dev/cli/sauce-connect-5/run/#configuration-file) outputs all configuration file options and their usage.
:::

---

#### `--rest-url`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Sets the URL for the [data center endpoint](/basics/data-center-endpoints) of the location where the device you're testing on is hosted.<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_REST_URL`<br/>
**Shorthand**: n/a

:::note
This flag is an alternative to the recommended [`--region`](/dev/cli/sauce-connect-5/run/#--region). It's not shown in the CLI usage message.
:::

---

#### `--metadata`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Sets custom metadata, expects `key=value` pairs. Can be repeated multiple times.<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_METADATA`<br/>
**Shorthand**: `-M`

:::note
This flag is, primarily, used by Sauce Labs to assign custom properties to the tunnel info for reporting purposes.
:::

```bash
--metadata "runner=jenkins" --metadata "group=qa"
```

### Tunnel Mode Configuration

---

#### `--shared`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Sharing mode. One of: `all` (more options will be added in the future). `--shared all` changes tunnel sharing permissions so that all users in an organization can use Sauce Connect Proxy tunnels (if the tunnel owner is an org admin), rather than just the tunnel owner. For more information, see [Sharing Sauce Connect Proxy Tunnels](/basics/acct-team-mgmt/sauce-connect-proxy-tunnels).<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_SHARED`<br/>
**Shorthand**: `-s`

:::note
Additional values for this flag are planned to be added in the future.
:::

---

#### `--tunnel-pool`

<p><small>| OPTIONAL | BOOL | </small></p>

**Description**: Launches a high availability tunnel pool along with the [`--tunnel-name`](#--tunnel-name) flag. For more info, see [High Availability Setup](/secure-connections/sauce-connect/setup-configuration/high-availability).<br/>
**Default**: `false`<br/>
**Environment variable**: SAUCE_TUNNEL_POOL<br/>
**Shorthand**: n/a

### Proxy Configuration

---

#### `--pac`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Proxy Auto-Configuration file to use for upstream proxy selection. It can be a local file or a URL, you can also use '-' to read from stdin. For more information, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect-5/operation/proxies).<br/>
**Default**: n/a<br/>
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

:::note
This flag configures the proxy for SUT traffic only. Use the [`--proxy-sauce`](#--proxy-sauce) flag to configure a proxy for the Sauce Labs REST API and Sauce Connect Server traffic.
:::

---

#### `--auth`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Site or upstream proxy basic authentication credentials in the format `username:password@host:port`. The host and port can be set to "*" to match all. The flag can be specified multiple times to add multiple credentials.<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_PAC_AUTH`<br/>
**Shorthand**: `-a`

```bash
--proxy myproxy.org:3128 --proxy-sauce https://external.com:443 --auth user1:pass1@myproxy.org:3128,user2:pass2@external.com:*
```

---

#### `--header`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Add or remove HTTP request headers. Use the format "name: value" to add a header, "name;" to set the header to empty value, "-name" to remove the header, "-name*" to remove headers by prefix.
The header name will be normalized to canonical form. The header value should not contain any newlines or carriage returns. The flag can be specified multiple times.<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_HEADER`<br/>
**Shorthand**: `-H`

```bash
-H "Host: example.com" -H "-User-Agent" -H "-X-*"
```

---

#### `--proxy`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Defines an upstream proxy to route test session traffic.
Supported protocols are: http, https, socks, socks5. If not specified, the default protocol is http. Format: `[protocol://][user:pass@]host:port`.<br/>
For more information, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect-5/operation/proxies).<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_PROXY`<br/>
**Shorthand**: `-x`

```bash
--proxy http://local.dev:8080
--proxy https://user:auth@local.dev:443
```

:::note
This flag configures the proxy for SUT traffic only. Use the [`--proxy-sauce`](#--proxy-sauce) flag to configure a proxy for the Sauce Labs REST API and Sauce Connect Server traffic.
:::

:::note
Proxy basic authentication, username and password, can be specified in the proxy URL, or with the -a, --auth flag.
:::

---

#### `--proxy-sauce`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Defines external proxy you want to route Sauce Labs REST API and Sauce Connect Server traffic.
For more information, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect-5/operation/proxies).<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_PROXY_SAUCE`<br/>
**Shorthand**: n/a

:::note
This flag configures the proxy for the Sauce Labs REST API and Sauce Connect Server traffic only. Use the [`--proxy`](#--proxy) flag to configure a proxy for SUT traffic proxy.
:::

---

#### `--proxy-localhost`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: One of `allow`, `deny`, `direct`. Setting this to `allow` supports sending requests to `localhost` through the upstream proxy.
This includes scenarios where an [upstream proxy is hosted on localhost](/secure-connections/sauce-connect/setup-configuration/additional-proxies).
Setting this to `direct` sends requests to `localhost` directly without using the upstream proxy. By default, requests to `localhost` are denied.<br/>
**Default**: `deny`<br/>
**Environment variable**: `SAUCE_PROXY_LOCALHOST`<br/>
**Shorthand**: n/a

### Tunnel Traffic Configuration

---

#### `--direct-domains`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Sets domain(s) that are requested through the public internet instead of the Sauce Connect Proxy tunnel. Can be repeated multiple times. This is the inverse of [`--tunnel-domains`](#--tunnel-domains). See [Tuning Sauce Connect Proxy Traffic](/secure-connections/sauce-connect/proxy-tunnels/#direct-domains) for more information. See also [formatting domains](#formatting-domains).<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_DIRECT_DOMAINS`<br/>
**Shorthand**: `-D`

```bash
--direct-domains .*\.example\.com,.*google\.com,mycompany\.com
```

---

#### `--tls-passthrough-domains`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Sets domain(s) that do not require TLS resigning. Matching requests will not be TLS re-encrypted. Can be repeated multiple times. See [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping) for more information about scenarios in which might want to use this command. See also [formatting domains](#formatting-domains).<br/>
**Default**: `all`<br/>
**Environment variable**: `SAUCE_TLS_PASSTHROUGH_DOMAINS`<br/>
**Shorthand**: `-B`

```bash
--tls-passthrough-domains .*\.example\.com,.*google\.com,mycompany\.com
```

---

#### `--tls-resign-domains`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Sets domain(s) that require TLS resigning (the inverse of [`--tls-passthrough-domains`](#--tls-passthrough-domains)). Matching requests will be TLS re-encrypted. Can be repeated multiple times. See also [formatting domains](#formatting-domains).<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_TLS_RESIGN_DOMAINS`<br/>
**Shorthand**: `-b`

```bash
--tls-resign-domains .*\.myorg\.dev
```

---

#### `--deny-domains`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Sets a deny-list of domains. Matching requests will get dropped instantly and will not go through the tunnel. Tests for app and site degradation based on missing assets or resources. Can be used to simulate non-loading of scripts, styles, or other resources. Use this option followed by a comma-separated list of regular expressions. See the [Sauce Connect Proxy FAQ](/secure-connections/sauce-connect/faq) for an example. See also [formatting domains](#formatting-domains).<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_DENY_DOMAINS`<br/>
**Shorthand**: `-F`

---

#### `--tunnel-domains`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Sets domain(s) that are requested through the Sauce Connect Proxy tunnel. This is the inverse of [`--direct-domains`](#--direct-domains). Can be repeated multiple times. See [Tuning Sauce Connect Proxy Traffic](/secure-connections/sauce-connect/proxy-tunnels/#tunnel-domains) for more information. See also [formatting domains](#formatting-domains).<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_TUNNEL_DOMAINS`<br/>
**Shorthand**: `-t`

### Client Configuration

---

#### `--api-address`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Use this option to define the host:port for the internal web server used to expose the Sauce Connect Proxy runtime info. Disabled by default.<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_API_ADDRESS`<br/>
**Shorthand**: n/a

---

#### `--api-basic-auth`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Basic authentication `username:password` credentials to protect the server.<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_API_BASIC_AUTH`<br/>
**Shorthand**: n/a

---

#### `--cacert-file`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: CA certificate bundle in PEM format to use in addition to the system root certificates.
Can be a path to a file or "data:" followed by a base64-encoded certificate. Use this flag multiple times to specify multiple CA certificate files.<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_CACERT_FILE`<br/>
**Shorthand**: n/a

### DNS

---

#### `--dns-server`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: DNS server(s) to use instead of system default. There are two execution policies, when more then one server is specified.
Fallback: the first server in a list is used as primary, the rest are used as fallbacks. Round robin: the servers are used in a round-robin fashion.
The port is optional, if not specified the default port is 53.<br/>
**Default**: n/a<br/>
**Environment variable**: `SAUCE_DNS`<br/>
**Shorthand**: `-n`

```bash
sc run --dns-server 8.8.8.8 --dns-server 8.8.4.4:53
```

---

#### `--dns-server-timeout`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Timeout for connecting to DNS servers. Only used if DNS servers are specified.<br/>
**Default**: `5s`<br/>
**Environment variable**: `SAUCE_DNS_TIMEOUT`<br/>
**Shorthand**: n/a

---

#### `--dns-round-robin`

<p><small>| OPTIONAL | BOOL | </small></p>

**Description**: If more than one DNS server is specified with the --dns-server flag, passing this flag will enable round-robin selection.<br/>
**Default**: `false`<br/>
**Environment variable**: `SAUCE_DNS_ROUND_ROBIN`<br/>
**Shorthand**: n/a

### Logging

---

#### `--log-file`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Captures the Sauce Connect Proxy logs in a file. If a path is not specified, logs to stdout.<br/>
**Default**: console<br/>
**Environment variable**: `SAUCE_LOG_FILE`<br/>
**Shorthand**: n/a

---

#### `--log-http`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: HTTP request and response logging mode, one of none, short-url, url, headers, body, errors.
HTTP request and response logging mode. By default, request line and headers are logged if response status
code is greater than or equal to 500. Setting this to none disables logging. The short-url mode logs
[scheme://]host[/path] instead of the full URL.<br/>
**Default**: `none`<br/>
**Environment variable**: `SAUCE_LOG_HTTP`<br/>
**Shorthand**: n/a

---

#### `--log-level`

<p><small>| OPTIONAL | STRING | </small></p>

**Description**: Log level, one of error, info, debug.<br/>
**Default**: `info`<br/>
**Environment variable**: `SAUCE_LOG_LEVEL`<br/>
**Shorthand**: n/a

### Formatting Domains

Here are some guidelines to follow when formatting domain regular expressions:

- Use only the domain name. Do not precede it with `http:` or `https:`.
  - Example: `mydomain\.com`
- Make sure your comma-separated list of domains doesn't include any spaces.
  - Example, `mydomain\.com,saucelabs.com,mysite\.com`
- Domains flags can be repeated multiple times
  - Example, `--direct-domains mydomain\.com,saucelabs\.com --direct-domains mysite\.com`
- Prefix domain names with `.*` to match all its subdomains.
  - Example: You could refer to `docs\.saucelabs\.com` and `my\.saucelabs\.com` as `.*saucelabs\.com`.
- Escape special characters, such as `.` to ensure they are not parsed
  - Not escaping dot character doesn't result in error, dot matches every single character except a newline. For example, `example.com` will match `example.com` and also `examplescom`, while `example\.com` will match `example.com` only.

### Configuration File

Subcommand `sc run config-file` provides reference for a configuration file used with `sc run --config-file <path to your file>`.
The command's [output](/secure-connections/sauce-connect-5/operation/configuration/#config-file-reference) is a convenient starting point for generating your configuration file.

### Additional Resources

- [Sauce Connect Proxy Installation](/secure-connections/sauce-connect-5/installation/).
