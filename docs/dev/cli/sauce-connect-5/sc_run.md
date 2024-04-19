---
id: run
title: sc run
---

# Sc Run

Usage: `sc run --username <username> --access-key <UUID> --region <data center> --tunnel-name <value> [flags]`

Run Sauce Connect Proxy

**Note:** You can also specify the options as YAML, JSON or TOML file using `--config-file` flag.
You can generate a config file by running `sc run config-file` command.

## Required

### `-k, --access-key` {#access-key}

- Environment variable: `SAUCE_ACCESS_KEY`
- Value Format: `<UUID>`

Sauce Labs Access Key, you can get it from the [User Settings page](https://app.saucelabs.com/user-settings).
For additional security, we recommend setting this as an environment variable.

### `-r, --region` {#region}

- Environment variable: `SAUCE_REGION`
- Value Format: `<data center>`

Sauce Labs region name, ex.
us-west or eu-central.
More details [here](/basics/data-center-endpoints).

### `-i, --tunnel-name` {#tunnel-name}

- Environment variable: `SAUCE_TUNNEL_NAME`
- Value Format: `<name>`

Name of the tunnel or tunnel pool.
You can run tests using this tunnel by specifying the tunnelName value in your test capabilities, see [here](/dev/test-configuration-options/).
It can also assign a name to a group of tunnels in the same high availability pool, see [here](/secure-connections/sauce-connect/setup-configuration/high-availability/).

### `-u, --username` {#username}

- Environment variable: `SAUCE_USERNAME`
- Value Format: `<username>`

Sauce Labs username.
For additional security, we recommend setting this as an environment variable.

## Options

### `-M, --metadata` {#metadata}

- Environment variable: `SAUCE_METADATA`
- Value Format: `<key=value>,...`

Custom metadata key-value pairs.
This flag is, primarily, used by Sauce Labs to assign custom properties to the tunnel for reporting purposes.

### `-s, --shared` {#shared}

- Environment variable: `SAUCE_SHARED`
- Value Format: `<all>`

Share the tunnel within the same org unit.
Only the 'all' option is currently supported.
See [here](/basics/acct-team-mgmt/sauce-connect-proxy-tunnels/).

### `-t, --tunnel-pool` {#tunnel-pool}

- Environment variable: `SAUCE_TUNNEL_POOL`
- Value Format: `<value>`
- Default value: `false`

Denotes a tunnel as part of a high availability tunnel pool.
See [here](/secure-connections/sauce-connect/setup-configuration/high-availability/).

## Tunnel traffic

### `-F, --deny-domains` {#deny-domains}

- Environment variable: `SAUCE_DENY_DOMAINS`
- Value Format: `[-]<regexp>,...`

Deny requests to the matching domains.
Prefix domains with '-' to exclude requests from being denied.

The following example denies requests to _.example.com and _.google.com.

```
--deny-domains .*\.example\.com,.*\.google\.com
```

### `-D, --direct-domains` {#direct-domains}

- Environment variable: `SAUCE_DIRECT_DOMAINS`
- Value Format: `[-]<regexp>,...`

Forward matching requests to their origin server over the public internet.
Requests that don't match "direct domains" will be forwarded to customer-side over the Sauce Connect Proxy connection.
You can specify --direct-domains or --tunnel-domains, but not both.
Prefix domains with '-' to exclude requests from being forwarded directly.
Note that direct domains are automatically excluded from being resigned.

The following example sends requests to _.example.com and _.google.com directly.
It would tunnel all other domains.

```
--direct-domains .*\.example\.com,.*\.google\.com
```

### `-B, --tls-passthrough-domains` {#tls-passthrough-domains}

- Environment variable: `SAUCE_TLS_PASSTHROUGH_DOMAINS`
- Value Format: `[-]<regexp>,...`

Pass matching requests to their origin server without SSL/TLS re-encryption.
You can specify --tls-passthrough-domains or --tls-resign-domains, but not both.
Prefix domains with '-' to exclude requests from being passed through.
Note that direct domains will always be passed through.

The following example passes requests to _.example.com and _.google.com through without SSL/TLS re-encryption.

```
--tls-passthrough-domains .*\.example\.com,.*\.google\.com
```

### `-b, --tls-resign-domains` {#tls-resign-domains}

- Environment variable: `SAUCE_TLS_RESIGN_DOMAINS`
- Value Format: `[-]<regexp>,...`

Resign SSL/TLS certificates for matching requests.
You can specify --tls-resign-domains or --tls-passthrough-domains, but not both.
Prefix domains with '-' to exclude requests from being resigned.
Note that direct domains will never be resigned.

The following example resigns SSL/TLS certificates for all requests to \*.myorg.dev, except abc.myorg.dev.

```
--tls-resign-domains .*\.myorg\.dev,-abc\.myorg\.dev
```

### `-T, --tunnel-domains` {#tunnel-domains}

- Environment variable: `SAUCE_TUNNEL_DOMAINS`
- Value Format: `[-]<regexp>,...`

Forward matching requests over the Sauce Connect Proxy connection.
Requests not matching "tunnel domains" will be forwarded to their origin server over the public internet.
This is the recommended option for the best performance since it minimizes the expensive tunnelled traffic and uses it only for internal domains that are not publicly available.
You can specify --tunnel-domains or --direct-domains, but not both.
Prefix domains with '-' to exclude requests from being forwarded over the SC Proxy connection.

The following example tunnels all requests to \*.myorg.dev, except abc.myorg.com.

```
--tunnel-domains .*\.myorg\.dev,-abc\.myorg\.com
```

## Proxy

### `-a, --auth` {#auth}

- Environment variable: `SAUCE_AUTH`
- Value Format: `<username[:password]@host:port,...>`

Site or upstream proxy basic authentication credentials.
The host and port can be set to "\*" to match all hosts and ports respectively.
The flag can be specified multiple times to add multiple credentials.
Note: Requests to these hosts will be automatically resigned as if there were specified in --tls-resign-domains flag.
Example:

```
--proxy myproxy.org:3128 --proxy-sauce https://external.com:443 --auth user1:pass1@myproxy.org:3128,user2:pass2@external.com:*
```

### `-H, --header` {#header}

- Environment variable: `SAUCE_HEADER`
- Value Format: `<header>`

Add or remove HTTP request headers.
Use the format "name: value" to add a header, "name;" to set the header to empty value, "-name" to remove the header, "-name*" to remove headers by prefix.
The header name will be normalized to canonical form.
The header value should not contain any newlines or carriage returns.
The flag can be specified multiple times.
Example: -H "Host: example.com" -H "-User-Agent" -H "-X-*".

### `-p, --pac` {#pac}

- Environment variable: `SAUCE_PAC`
- Value Format: `<path or URL>`

Proxy Auto-Configuration file to use for upstream proxy selection.
It can be a local file or a URL, you can also use '-' to read from stdin.
The data URI scheme is supported, the format is `data:base64,<encoded data>`.

### `-x, --proxy` {#proxy}

- Environment variable: `SAUCE_PROXY`
- Value Format: `[protocol://]host[:port]`

Upstream proxy to use for requests received from the Sauce Connect Server only.
The supported protocols are: http, https, socks, socks5.
No protocol specified will be interpreted as an HTTP proxy.
If the port number is not specified, it is assumed to be 1080.
The basic authentication username and password can be specified in the host string, e.g.
user:pass@host:port.
Alternatively, you can specify the credentials using the -a, --auth flag.

### `--proxy-localhost` {#proxy-localhost}

- Environment variable: `SAUCE_PROXY_LOCALHOST`
- Value Format: `<allow|deny|direct>`
- Default value: `deny`

Setting this to allow enables sending requests to localhost through the upstream proxy.
Setting this to direct sends requests to localhost directly without using the upstream proxy.
By default, requests to localhost are denied.

### `--proxy-sauce` {#proxy-sauce}

- Environment variable: `SAUCE_PROXY_SAUCE`
- Value Format: `[protocol://]host[:port]`

Proxy for requests to Sauce Labs REST API and Sauce Connect servers only.
See the -x, --proxy flag for more details on the format.

## DNS

### `--dns-round-robin` {#dns-round-robin}

- Environment variable: `SAUCE_DNS_ROUND_ROBIN`
- Value Format: `<value>`
- Default value: `false`

If more than one DNS server is specified with the --dns-server flag, passing this flag will enable round-robin selection.

### `-n, --dns-server` {#dns-server}

- Environment variable: `SAUCE_DNS_SERVER`
- Value Format: `<ip>[:<port>]`

DNS server(s) to use instead of system default.
There are two execution policies, when more then one server is specified.
Fallback: the first server in a list is used as primary, the rest are used as fallbacks.
Round robin: the servers are used in a round-robin fashion.
The port is optional, if not specified the default port is 53.

### `--dns-timeout` {#dns-timeout}

- Environment variable: `SAUCE_DNS_TIMEOUT`
- Value Format: `<duration>`
- Default value: `5s`

Timeout for dialing DNS servers.
Only used if DNS servers are specified.

## HTTP client

### `--cacert-file` {#cacert-file}

- Environment variable: `SAUCE_CACERT_FILE`
- Value Format: `<path or base64>`

Add your own CA certificates to verify against.
The system root certificates will be used in addition to any certificates in this list.
Can be a path to a file or "data:" followed by base64 encoded certificate.
Use this flag multiple times to specify multiple CA certificate files.

### `--http-dial-timeout` {#http-dial-timeout}

- Environment variable: `SAUCE_HTTP_DIAL_TIMEOUT`
- Value Format: `<duration>`
- Default value: `30s`

The maximum amount of time a dial will wait for a connect to complete.
With or without a timeout, the operating system may impose its own earlier timeout.
For instance, TCP timeouts are often around 3 minutes.

### `--http-idle-conn-timeout` {#http-idle-conn-timeout}

- Environment variable: `SAUCE_HTTP_IDLE_CONN_TIMEOUT`
- Value Format: `<duration>`
- Default value: `1m30s`

The maximum amount of time an idle (keep-alive) connection will remain idle before closing itself.
Zero means no limit.

### `--http-response-header-timeout` {#http-response-header-timeout}

- Environment variable: `SAUCE_HTTP_RESPONSE_HEADER_TIMEOUT`
- Value Format: `<duration>`
- Default value: `0s`

The amount of time to wait for a server's response headers after fully writing the request (including its body, if any).This time does not include the time to read the response body.
Zero means no limit.

### `--http-tls-handshake-timeout` {#http-tls-handshake-timeout}

- Environment variable: `SAUCE_HTTP_TLS_HANDSHAKE_TIMEOUT`
- Value Format: `<duration>`
- Default value: `10s`

The maximum amount of time waiting to wait for a TLS handshake.
Zero means no limit.

## API server

### `--api-address` {#api-address}

- Environment variable: `SAUCE_API_ADDRESS`
- Value Format: `<host:port>`

The server address to listen on.
If the host is empty, the server will listen on all available interfaces.

### `--api-basic-auth` {#api-basic-auth}

- Environment variable: `SAUCE_API_BASIC_AUTH`
- Value Format: `<username[:password]>`

Basic authentication credentials to protect the server.

### `--api-idle-timeout` {#api-idle-timeout}

- Environment variable: `SAUCE_API_IDLE_TIMEOUT`
- Value Format: `<duration>`
- Default value: `1h0m0s`

The maximum amount of time to wait for the next request before closing connection.

## Logging

### `--log-file` {#log-file}

- Environment variable: `SAUCE_LOG_FILE`
- Value Format: `<path>`

Path to the log file, if empty, logs to stdout.

### `--log-http` {#log-http}

- Environment variable: `SAUCE_LOG_HTTP`
- Value Format: `[api|proxy|control:]<none|short-url|url|headers|body|errors>,...`

HTTP request and response logging mode.
Setting this to none disables logging.
The short-url mode logs [scheme://]host[/path] instead of the full URL.
The error mode logs request line and headers if status code is greater than or equal to 500.

### `--log-level` {#log-level}

- Environment variable: `SAUCE_LOG_LEVEL`
- Value Format: `<error|info|debug>`
- Default value: `info`

Log level.

## Formatting Domains

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

## Additional Resources

- [Sauce Connect Proxy Installation](/secure-connections/sauce-connect-5/installation/).
