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

* Environment variable: `SAUCE_ACCESS_KEY`
* Value Format: `<UUID>`

Sauce Labs Access Key, you can get it from the [User Settings page](https://app.saucelabs.com/user-settings).
For additional security, we recommend setting this as an environment variable.

### `-r, --region` {#region}

* Environment variable: `SAUCE_REGION`
* Value Format: `<data center>`

Sauce Labs region name, ex.
us-west, us-east, or eu-central.
More details [here](/basics/data-center-endpoints).

### `-i, --tunnel-name` {#tunnel-name}

* Environment variable: `SAUCE_TUNNEL_NAME`
* Value Format: `<name>`

Name of the tunnel or tunnel pool.
You can run tests using this tunnel by specifying the tunnelName value in your test capabilities, see [here](/dev/test-configuration-options/).
It can also assign a name to a group of tunnels in the same tunnel pool, see [here](/secure-connections/sauce-connect-5/guides/tunnel-pool/).

### `-u, --username` {#username}

* Environment variable: `SAUCE_USERNAME`
* Value Format: `<username>`

Sauce Labs username.
For additional security, we recommend setting this as an environment variable.

## Options

### `-M, --metadata` {#metadata}

* Environment variable: `SAUCE_METADATA`
* Value Format: `<key=value>,...`

Custom metadata key-value pairs.
This flag is, primarily, used by Sauce Labs to assign custom properties to the tunnel for reporting purposes.

### `-s, --shared` {#shared}

* Environment variable: `SAUCE_SHARED`
* Value Format: `<all>`

Share the tunnel within the same org unit.
Only the 'all' option is currently supported.
See [here](/secure-connections/sauce-connect-5/guides/sharing-tunnel/).

### `-t, --tunnel-pool` {#tunnel-pool}

* Environment variable: `SAUCE_TUNNEL_POOL`
* Value Format: `<value>`
* Default value: `false`

Denotes a tunnel as part of a tunnel pool.
See [here](/secure-connections/sauce-connect-5/guides/tunnel-pool/).

## Tunnel traffic

### `-F, --deny-domains` {#deny-domains}

* Environment variable: `SAUCE_DENY_DOMAINS`
* Value Format: `[-]<regexp>,...`

Deny requests to the matching domains.
Prefix domains with '-' to exclude requests from being denied.
Special keyword 'all' matches all domains.

The following example denies requests to *.example.com and *.google.com.

```
--deny-domains .*\.example\.com,.*\.google\.com
```

### `-D, --direct-domains` {#direct-domains}

* Environment variable: `SAUCE_DIRECT_DOMAINS`
* Value Format: `[-]<regexp>,...`

Forward matching requests to their origin server over the public internet.
Requests that don't match "direct domains" will be forwarded to customer-side over the Sauce Connect Proxy connection.
You can specify --direct-domains or --tunnel-domains, but not both.
Prefix domains with '-' to exclude requests from being forwarded directly.
Note that direct domains are automatically excluded from being resigned.
Special keyword 'all' matches all domains.

The following example sends requests to *.example.com and *.google.com directly.
It would tunnel all other domains.

```
--direct-domains .*\.example\.com,.*\.google\.com
```

### `-B, --tls-passthrough-domains` {#tls-passthrough-domains}

* Environment variable: `SAUCE_TLS_PASSTHROUGH_DOMAINS`
* Value Format: `[-]<regexp>,...`

Pass matching requests to their origin server without SSL/TLS re-encryption.
Requests that don't match will be re-encrypted.
You can specify --tls-passthrough-domains or --tls-resign-domains, but not both.
Prefix domains with '-' to exclude requests from being passed through.
Note that direct domains will always be passed through.
Special keyword 'all' matches all domains.

The following example passes requests to *.example.com and *.google.com through without SSL/TLS re-encryption.

```
--tls-passthrough-domains .*\.example\.com,.*\.google\.com
```

### `-b, --tls-resign-domains` {#tls-resign-domains}

* Environment variable: `SAUCE_TLS_RESIGN_DOMAINS`
* Value Format: `[-]<regexp>,...`
* Default value: `[.*]`

Resign SSL/TLS certificates for matching requests.
You can specify --tls-resign-domains or --tls-passthrough-domains, but not both.
Prefix domains with '-' to exclude requests from being resigned.
Note that direct domains will never be resigned.
Special keyword 'all' matches all domains.

The following example resigns SSL/TLS certificates for all requests to *.myorg.dev, except abc.myorg.dev.

```
--tls-resign-domains .*\.myorg\.dev,-abc\.myorg\.dev
```

### `-T, --tunnel-domains` {#tunnel-domains}

* Environment variable: `SAUCE_TUNNEL_DOMAINS`
* Value Format: `[-]<regexp>,...`

Forward matching requests over the Sauce Connect Proxy connection.
Requests not matching "tunnel domains" will be forwarded to their origin server over the public internet.
This is the recommended option for the best performance since it minimizes the expensive tunnelled traffic and uses it only for internal domains that are not publicly available.
You can specify --tunnel-domains or --direct-domains, but not both.
Prefix domains with '-' to exclude requests from being forwarded over the SC Proxy connection.
Special keyword 'all' matches all domains.

The following example tunnels all requests to *.myorg.dev, except abc.myorg.com.

```
--tunnel-domains .*\.myorg\.dev,-abc\.myorg\.com
```

## Tunnel capacity

### `--tunnel-connections` {#tunnel-connections}

* Environment variable: `SAUCE_TUNNEL_CONNECTIONS`
* Value Format: `<count>`
* Default value: `16`

Number of connections to the Sauce Connect server.
By default it is set to the number of CPUs on the machine.
Total number of concurrent requests that can be handled is limited by the number of connections multiplied by the number of streams, see --tunnel-max-concurrent-streams flag.
For example with 4 connections and 256 streams, the total number of concurrent requests is 1024.

### `--tunnel-max-concurrent-streams` {#tunnel-max-concurrent-streams}

* Environment variable: `SAUCE_TUNNEL_MAX_CONCURRENT_STREAMS`
* Value Format: `<count>`
* Default value: `256`

Maximal number of concurrent HTTP/2 streams per TCP connection.

## Proxy

### `-a, --auth` {#auth}

* Environment variable: `SAUCE_AUTH`
* Value Format: `<username[:password]@host:port,...>`

Site or upstream proxy basic authentication credentials.
The host and port can be set to "*" to match all hosts and ports respectively.
The flag can be specified multiple times to add multiple credentials.
Note that all the hosts are automatically resigned as if they were passed to --tls-resign-domains flag.

Example:

```
--proxy myproxy.org:3128 --proxy-sauce https://external.com:443 --auth user1:pass1@myproxy.org:3128,user2:pass2@external.com:*
```


### `--debug-address` {#debug-address}

* Environment variable: `SAUCE_DEBUG_ADDRESS`
* Value Format: `<host:port>`

Address for the built-in HTTP proxy to listen on.
Allows exposing the proxy port for connectivity debugging.

### `-H, --header` {#header}

* Environment variable: `SAUCE_HEADER`
* Value Format: `<header>`

Add or remove HTTP request headers.

Use the format:

- name:value to add a header
- name; to set the header to empty value
- -name to remove the header
- -name* to remove headers by prefix

The header name will be normalized to canonical form.
The header value should not contain any newlines or carriage returns.
The flag can be specified multiple times.
The following example removes the User-Agent header and all headers starting with X-.

```
-H "-User-Agent" -H "-X-*"
```

### `-p, --pac` {#pac}

* Environment variable: `SAUCE_PAC`
* Value Format: `<path or URL>`

Proxy Auto-Configuration file to use for upstream proxy selection.

Syntax:

- File: `/path/to/file.pac`
- URL: `http://example.com/proxy.pac`
- Embed: `data:base64,<base64 encoded data>`
- Stdin: `-`

### `-x, --proxy` {#proxy}

* Environment variable: `SAUCE_PROXY`
* Value Format: `<[protocol://]host:port>`

Upstream proxy for test sessions.
It is used for requests received from the Sauce Connect Server only.
The supported protocols are: http, https, socks5.
No protocol specified will be interpreted as an HTTP proxy.
The basic authentication username and password can be specified in the host string, e.g.
user:pass@host:port.
Alternatively, you can specify the credentials using the -a, --auth flag.

### `--proxy-localhost` {#proxy-localhost}

* Environment variable: `SAUCE_PROXY_LOCALHOST`
* Value Format: `<allow|deny|direct>`
* Default value: `deny`

Setting this to allow enables sending requests to localhost through the upstream proxy.
Setting this to direct sends requests to localhost directly without using the upstream proxy.
By default, requests to localhost are denied.

### `--proxy-sauce` {#proxy-sauce}

* Environment variable: `SAUCE_PROXY_SAUCE`
* Value Format: `<[protocol://]host:port>`

Establish a tunnel through an upstream proxy.
Proxy for requests to Sauce Labs REST API and Sauce Connect servers only.
See the -x, --proxy flag for more details on the format.

### --proxy-sauce-enable-kerberos-auth {#proxy-sauce-enable-kerberos-auth}

* Environment variable: `SAUCE_PROXY_SAUCE_ENABLE_KERBEROS_AUTH`
* Value Format: `<value>` (you can use empty command line switch to enable)
* Default Value: `false`

Authenticate to proxy specified in `--proxy-sauce` using Kerberos. Kerberos authentication must be enabled and configured for `sc`.

## DNS

### `--dns-round-robin` {#dns-round-robin}

* Environment variable: `SAUCE_DNS_ROUND_ROBIN`
* Value Format: `<value>`
* Default value: `false`

If more than one DNS server is specified with the --dns-server flag, passing this flag will enable round-robin selection.

### `-n, --dns-server` {#dns-server}

* Environment variable: `SAUCE_DNS_SERVER`
* Value Format: `<ip>[:<port>]`

DNS server(s) to use instead of system default.
There are two execution policies, when more then one server is specified.
Fallback: the first server in a list is used as primary, the rest are used as fallbacks.
Round robin: the servers are used in a round-robin fashion.
The port is optional, if not specified the default port is 53.

### `--dns-timeout` {#dns-timeout}

* Environment variable: `SAUCE_DNS_TIMEOUT`
* Value Format: `<duration>`
* Default value: `5s`

Timeout for dialing DNS servers.
Only used if DNS servers are specified.

## HTTP client

### `--cacert-file` {#cacert-file}

* Environment variable: `SAUCE_CACERT_FILE`
* Value Format: `<path or base64>`

Add your own CA certificates to verify against.
The system root certificates will be used in addition to any certificates in this list.
Use this flag multiple times to specify multiple CA certificate files.

Syntax:

- File: `/path/to/file.pac`
- Embed: `data:base64,<base64 encoded data>`

### `--http-dial-attempts` {#http-dial-attempts}

* Environment variable: `SAUCE_HTTP_DIAL_ATTEMPTS`
* Value Format: `<int>`
* Default value: `3`

The number of attempts to dial the network address.

### `--http-dial-backoff` {#http-dial-backoff}

* Environment variable: `SAUCE_HTTP_DIAL_BACKOFF`
* Value Format: `<duration>`
* Default value: `1s`

The amount of time to wait between dial attempts.

### `--http-dial-timeout` {#http-dial-timeout}

* Environment variable: `SAUCE_HTTP_DIAL_TIMEOUT`
* Value Format: `<duration>`
* Default value: `25s`

The maximum amount of time a dial will wait for a connect to complete.
With or without a timeout, the operating system may impose its own earlier timeout.
For instance, TCP timeouts are often around 3 minutes.

### `--http-idle-conn-timeout` {#http-idle-conn-timeout}

* Environment variable: `SAUCE_HTTP_IDLE_CONN_TIMEOUT`
* Value Format: `<duration>`
* Default value: `1m30s`

The maximum amount of time an idle (keep-alive) connection will remain idle before closing itself.
Zero means no limit.

### `--http-response-header-timeout` {#http-response-header-timeout}

* Environment variable: `SAUCE_HTTP_RESPONSE_HEADER_TIMEOUT`
* Value Format: `<duration>`
* Default value: `0s`

The amount of time to wait for a server's response headers after fully writing the request (including its body, if any).This time does not include the time to read the response body.
Zero means no limit.

### `--http-tls-handshake-timeout` {#http-tls-handshake-timeout}

* Environment variable: `SAUCE_HTTP_TLS_HANDSHAKE_TIMEOUT`
* Value Format: `<duration>`
* Default value: `10s`

The maximum amount of time waiting to wait for a TLS handshake.
Zero means no limit.

### `--http-tls-keylog-file` {#http-tls-keylog-file}

* Environment variable: `SAUCE_HTTP_TLS_KEYLOG_FILE`
* Value Format: `<path>`

File to log TLS master secrets in NSS key log format.
By default, the value is taken from the SSLKEYLOGFILE environment variable.
It can be used to allow external programs such as Wireshark to decrypt TLS connections.

## API server

### `--api-address` {#api-address}

* Environment variable: `SAUCE_API_ADDRESS`
* Value Format: `<host:port>`

The server address to listen on.
If the host is empty, the server will listen on all available interfaces.

### `--api-basic-auth` {#api-basic-auth}

* Environment variable: `SAUCE_API_BASIC_AUTH`
* Value Format: `<username[:password]>`

Basic authentication credentials to protect the server.

### `--api-idle-timeout` {#api-idle-timeout}

* Environment variable: `SAUCE_API_IDLE_TIMEOUT`
* Value Format: `<duration>`
* Default value: `1h0m0s`

The maximum amount of time to wait for the next request before closing connection.

## Logging

### `--log-file` {#log-file}

* Environment variable: `SAUCE_LOG_FILE`
* Value Format: `<path>`

Path to the log file, if empty, logs to stdout.
The file is reopened on SIGHUP to allow log rotation using external tools.

### `--log-format` {#log-format}

* Environment variable: `SAUCE_LOG_FORMAT`
* Value Format: `<text, json>`
* Default value: `text`

Use json for production workload logs and text for more human-readable output.

### `--log-http` {#log-http}

* Environment variable: `SAUCE_LOG_HTTP`
* Value Format: `[api|proxy|control:]<none|short-url|url|headers|body|errors>,...`
* Default value: `none`

HTTP request and response logging mode.

Modes: 

- none: no logging
- short-url: logs [scheme://]host[/path] instead of the full URL
- url: logs the full URL including query parameters
- headers: logs request line and headers
- body: logs request line, headers, and body
- errors: logs request line and headers if status code is greater than or equal to 500

Modes for different modules can be specified separated by commas.
The following example specifies that the API module logs errors, the proxy module logs headers, and anything else logs full URL.

```
--log-http=api:errors,proxy:headers,url
```

### `--log-level` {#log-level}

* Environment variable: `SAUCE_LOG_LEVEL`
* Value Format: `<error|info|debug>`
* Default value: `info`

Log level.

## Kerberos authentication

### Introduction

Sauce Connect 5 supports Kerberos authentication both to the upstream proxy and tested applications.

 `sc` client process connects to your Kerberos KDC server, authenticates as configured account ("principal name") and retrieves relevant Kerberos service tickets. Kerberos connection and authentication is only local to your `sc` client - Sauce Labs servers do not participate in it. 

It is also fully transparent to your tests as `sc` injects relevant HTTP headers with Kerberos authentication tokens automatically for all needed requests forwarded through the tunnel.

Supported modes:

* Kerberos authentication to the upstream proxy defined in `--proxy-sauce` - using `Proxy-Authorization` HTTP header
* Kerberos authentication to the upstream proxy defined in `--proxy` - using `Proxy-Authorization` HTTP header
* Kerberos authentication to tested web applications by injecting `Authorization` header to forwarded HTTP requests

It is possible to have combination of settings - for example when both upstream proxy and tested application require Kerberos authentication

Sauce Connect 5 generates SPNEGO tokens from relevant Kerberos tickets to pass in HTTP headers which is the most popular and standardized way of handling Kerberos HTTP authentication.

Implemented method is called "opportunistic authentication", it means `sc` does not try to detect `401` or `407` HTTP error codes and negotiate Kerberos authentication - it uses predefined host names needing Kerberos authentication and it's up to the user to know those hosts in advance. This greately improves performance and does not interfere with your tests which may require detection and custom handling of `401` and other error codes.

Current implementation uses HTTP request host (or configured proxy hostname) as SPN (Service Principal Name) used to request tickets from Kerberos KDC server. For example `app.example.com` is converted to SPN `HTTP/app.example.com` and such SPN is expected to be present in Kerberos KDC server.

To use Kerberos authentication mechanism you need to have both `krb5.conf` file which points to proper realms and Kerberos servers and keytab file accessible to `sc` client. Those are standardized format files used in most Kerberos related software suites and are not specific to Sauce Connect 5 client.

### --kerberos-cfg-file {#kerberos-cfg-file}

* Environment variable: `SAUCE_KERBEROS_CFG_FILE`
* Value Format: `<path>`

Path to krb5.conf configuration file with kerberos connection settings. 
File format reference:

https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html


### --kerberos-keytab-file {#kerberos-cfg-file}

* Environment variable: `SAUCE_KERBEROS_KEYTAB_FILE`
* Value Format: `<path>`

Path to keytab file holding credentials to an account as which `sc` authenticates to a Kerberos KDC server.

Keytab files are in binary format and can be created and managed for example using `ktutil` tool distributed with MIT Kerberos software:
https://web.mit.edu/kerberos/krb5-latest/doc/admin/admin_commands/ktutil.html#ktutil-1


### --kerberos-user-name {#kerberos-user-name}

* Environment variable: `SAUCE_KERBEROS_USER_NAME`
* Value Format: `<username>`

Name of the account username (principal name using Kerberos nomenclature) as which `sc` will authenticate to a Kerberos KDC server. User and its password (hashed) must be present in keytab file specified in `--kerberos-keytab-file`

### --kerberos-user-realm {#kerberos-user-realm}

* Environment variable: `SAUCE_KERBEROS_USER_REALM`
* Value Format: `<domain name>`

Kerberos realm of the user specified in `--kerberos-user-name`. It depends on Kerberos settings in organisation but in most cases it's the company domain name.


### --kerberos-enabled-hosts {#kerberos-enabled-hosts}

* Environment variable: `SAUCE_KERBEROS_ENABLED_HOSTS`
* Value Format: `host1,host2,host3....`

List of hosts for which Kerberos (SPNEGO) authorization tokens will be injected as `Authorization` header. If a forwarded HTTP request already has such header (or header is added by `sc` by means of other settings, like custom headers or credentials) - this header value will be overwritten by SPNEGO token.

Please note that this host list do not support wildcards.


### --kerberos-auth-upstream-proxy {#kerberos-auth-upstream-proxy}

* Environment variable: `SAUCE_KERBEROS_AUTH_UPSTREAM_PROXY`
* Value Format: `<value>` (you can use empty command line switch to enable)
* Default Value: `false`

Authenticate to a configured upstream proxy with Kerberos (using `Proxy-Authorization` HTTP header). Please note that if `sc` configuration results in multiple proxies available (like PAC for example), `sc` will try to authenticate with Kerberos to each one of them.

To enable Kerberos authentication for `--proxy-sauce` specified proxy server, see:  [--proxy-sauce-enable-kerberos-auth](#proxy-sauce-enable-kerberos-auth)


### --kerberos-run-diagnostics {#kerberos-run-diagnostics}

* Environment variable: `SAUCE_KERBEROS_RUN_DIAGNOSTICS`
* Value Format: `<value>` (you can use empty commant switch to enable)
* Default Value: `false`


Running `sc` with `--kerberos-run-diagnostics` switch will run basic Kerberos diagnostics and exit the process.

Diagnostics will print debugging information about Kerberos connection or known configuration errors - for example an error when there are discrepancies between supported encryption types and keytab entry:

```
 msg="fatal error exiting" error="kerberos configuration potential problems: default_tkt_enctypes specifies 17 but this enctype is not available in the client's keytab\ndefault_tkt_enctypes specifies 23 but this enctype is not available in the client's keytab\npreferred_preauth_types specifies 17 but this enctype is not available in the client's keytab\npreferred_preauth_types specifies 15 but this enctype is not available in the client's keytab\npreferred_preauth_types specifies 14 but this enctype is not available in the client's keytab"
```

Diagnostics printout will allow you to match enctype number to string:

```
"DefaultTGSEnctypes": [
	  "aes256-cts-hmac-sha1-96",
	  "aes128-cts-hmac-sha1-96",
	  "des3-cbc-sha1",
	  "arcfour-hmac-md5",
	  "camellia256-cts-cmac",
	  "camellia128-cts-cmac",
	  "des-cbc-crc",
	  "des-cbc-md5",
	  "des-cbc-md4"
	],
	"DefaultTGSEnctypeIDs": [
	  18,
	  17,
	  23
	],

```

(17 is aes128-cts-hmac-sha1-96, etc)

Often having only one enctype in user configuration will work but can break at any time if hosts decide to negotiate something different than usual. For simplification you can restrict supported encryption types to 1-2 entries in krb5.conf file. Enctypes listed in diagnostics mode are sorted from most secure to least secure so in most cases first 1-2 positions are good enough to choose from and check if KDC server supports them. When in doubt - contact your ActiveDirectory/Kerberos administrator.


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
