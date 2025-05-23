---
id: configuration
title: Sauce Connect 5 Configuration
sidebar_label: Configuration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The explicit way to launch a Sauce Connect tunnel is to run a single command line comprised of all [flags](/dev/cli/sauce-connect-5/run/) and any optional [flags](/dev/cli/sauce-connect-5/run/) you want to use to customize tunnel behavior.
It's also possible to pass the same command-line arguments through a config file, and as environment variables.
If you pass the same argument through multiple methods, the order of precedence is as follows (from highest to lowest):

- command-line option
- environment variable
- YAML config file

## Config File

The Sauce Connect config file may contain any CLI flag. It may also
contain comments that could help make its content more readable, for example:

```yaml
---
region: 'us-west'
username: 'janedoe-sauce'
access-key: 'xxxx-xxx-xxx'
# this is my log file for SC I use for Mac OS tests.
log-file: '/tmp/sc-mac.log'
# this is the tunnel I use for Mac OS tests
tunnel-name: 'my-macos'
```

### Config File Reference

`sc run config-file` command's output below contains all the available options
and their usage.


<details>
<summary>`sc run config-file` output</summary>

#### Reference

```bash
# --- Required ---

# access-key <UUID>
#
# Sauce Labs Access Key, you can get it from the User Settings page:
# https://app.saucelabs.com/user-settings. For additional security, we recommend
# setting this as an environment variable.
#access-key: 

# region <data center>
#
# Sauce Labs region name, ex. us-west, us-east, or eu-central. More details
# here: https://docs.saucelabs.com/basics/data-center-endpoints.
#region: 

# tunnel-name <name>
#
# Name of the tunnel or tunnel pool. You can run tests using this tunnel by
# specifying the tunnelName value in your test capabilities, see here:
# https://docs.saucelabs.com/dev/test-configuration-options/. It can also assign
# a name to a group of tunnels in the same high availability pool, see here:
# https://docs.saucelabs.com/secure-connections/sauce-connect-5/guides/tunnel-pool/.
#tunnel-name: 

# username <username>
#
# Sauce Labs username. For additional security, we recommend setting this as an
# environment variable.
#username: 

# --- Options ---

# metadata <key=value>,...
#
# Custom metadata key-value pairs. This flag is, primarily, used by Sauce Labs
# to assign custom properties to the tunnel for reporting purposes.
#metadata: 

# shared <all>
#
# Share the tunnel within the same org unit. Only the 'all' option is currently
# supported. See here:
# https://docs.saucelabs.com/basics/acct-team-mgmt/sauce-connect-proxy-tunnels/.
#shared: 

# tunnel-pool <value>
#
# Denotes a tunnel as part of a high availability tunnel pool. See here:
# https://docs.saucelabs.com/secure-connections/sauce-connect-5/guides/tunnel-pool/.
#tunnel-pool: false

# --- Tunnel traffic ---

# deny-domains [-]<regexp>,...
#
# Deny requests to the matching domains. Prefix domains with '-' to exclude
# requests from being denied. Special keyword 'all' matches all domains. 
# 
# The following example denies requests to *.example.com and *.google.com.
# 
# --deny-domains .*\.example\.com,.*\.google\.com
#deny-domains: 

# direct-domains [-]<regexp>,...
#
# Forward matching requests to their origin server over the public internet.
# Requests that don't match "direct domains" will be forwarded to customer-side
# over the Sauce Connect Proxy connection. You can specify --direct-domains or
# --tunnel-domains, but not both. Prefix domains with '-' to exclude requests
# from being forwarded directly. Note that direct domains are automatically
# excluded from being resigned. Special keyword 'all' matches all domains. 
# 
# The following example sends requests to *.example.com and *.google.com
# directly. It would tunnel all other domains.
# 
# --direct-domains .*\.example\.com,.*\.google\.com
#direct-domains: 

# tls-passthrough-domains [-]<regexp>,...
#
# Pass matching requests to their origin server without SSL/TLS re-encryption.
# Requests that don't match will be re-encrypted. You can specify
# --tls-passthrough-domains or --tls-resign-domains, but not both. Prefix
# domains with '-' to exclude requests from being passed through. Note that
# direct domains will always be passed through. Special keyword 'all' matches
# all domains. 
# 
# The following example passes requests to *.example.com and *.google.com
# through without SSL/TLS re-encryption.
# 
# --tls-passthrough-domains .*\.example\.com,.*\.google\.com
#tls-passthrough-domains: 

# tls-resign-domains [-]<regexp>,...
#
# Resign SSL/TLS certificates for matching requests. You can specify
# --tls-resign-domains or --tls-passthrough-domains, but not both. Prefix
# domains with '-' to exclude requests from being resigned. Note that direct
# domains will never be resigned. Special keyword 'all' matches all domains. 
# 
# The following example resigns SSL/TLS certificates for all requests to
# *.myorg.dev, except abc.myorg.dev.
# 
# --tls-resign-domains .*\.myorg\.dev,-abc\.myorg\.dev
#tls-resign-domains: [.*]

# tunnel-domains [-]<regexp>,...
#
# Forward matching requests over the Sauce Connect Proxy connection. Requests
# not matching "tunnel domains" will be forwarded to their origin server over
# the public internet. This is the recommended option for the best performance
# since it minimizes the expensive tunnelled traffic and uses it only for
# internal domains that are not publicly available. You can specify
# --tunnel-domains or --direct-domains, but not both. Prefix domains with '-' to
# exclude requests from being forwarded over the SC Proxy connection. Special
# keyword 'all' matches all domains. 
# 
# The following example tunnels all requests to *.myorg.dev, except
# abc.myorg.com.
# 
# --tunnel-domains .*\.myorg\.dev,-abc\.myorg\.com
#tunnel-domains: 

# --- Tunnel capacity ---

# tunnel-connections <count>
#
# Number of connections to the Sauce Connect server. By default it is set to the
# number of CPUs on the machine. Total number of concurrent requests that can be
# handled is limited by the number of connections multiplied by the number of
# streams, see --tunnel-max-concurrent-streams flag. For example with 4
# connections and 256 streams, the total number of concurrent requests is 1024.
#tunnel-connections: 16

# tunnel-max-concurrent-streams <count>
#
# Maximal number of concurrent HTTP/2 streams per TCP connection.
#tunnel-max-concurrent-streams: 256

# --- Proxy ---

# auth <username[:password]@host:port,...>
#
# Site or upstream proxy basic authentication credentials. The host and port can
# be set to "*" to match all hosts and ports respectively. The flag can be
# specified multiple times to add multiple credentials. Note that all the hosts
# are automatically resigned as if they were passed to --tls-resign-domains
# flag. 
# 
# Example:
# 
# --proxy myproxy.org:3128 --proxy-sauce https://external.com:443 --auth
# user1:pass1@myproxy.org:3128,user2:pass2@external.com:*
#auth: 

# header <header>
#
# Add or remove HTTP request headers. 
# 
# Use the format:
# - name:value to add a header
# - name; to set the header to empty value
# - -name to remove the header
# - -name* to remove headers by prefix
# 
# The header name will be normalized to canonical form. The header value should
# not contain any newlines or carriage returns. The flag can be specified
# multiple times. The following example removes the User-Agent header and all
# headers starting with X-. 
# 
# -H "-User-Agent" -H "-X-*"
#header: 

# pac <path or URL>
#
# Proxy Auto-Configuration file to use for upstream proxy selection. 
# 
# Syntax:
# - File: /path/to/file.pac
# - URL: http://example.com/proxy.pac
# - Embed: data:base64,<base64 encoded data>
# - Stdin: -
#pac: 

# proxy <[protocol://]host:port>
#
# Upstream proxy for test sessions. It is used for requests received from the
# Sauce Connect Server only. The supported protocols are: http, https, socks5.
# No protocol specified will be interpreted as an HTTP proxy. The basic
# authentication username and password can be specified in the host string, e.g.
# user:pass@host:port. Alternatively, you can specify the credentials using the
# -a, --auth flag.
#proxy: 

# proxy-localhost <allow|deny|direct>
#
# Setting this to allow enables sending requests to localhost through the
# upstream proxy. Setting this to direct sends requests to localhost directly
# without using the upstream proxy. By default, requests to localhost are
# denied.
#proxy-localhost: deny

# proxy-sauce <[protocol://]host:port>
#
# Establish a tunnel through an upstream proxy. Proxy for requests to Sauce Labs
# REST API and Sauce Connect servers only. See the -x, --proxy flag for more
# details on the format.
#proxy-sauce: 

# --- DNS ---

# dns-round-robin <value>
#
# If more than one DNS server is specified with the --dns-server flag, passing
# this flag will enable round-robin selection.
#dns-round-robin: false

# dns-server <ip>[:<port>]
#
# DNS server(s) to use instead of system default. There are two execution
# policies, when more then one server is specified. Fallback: the first server
# in a list is used as primary, the rest are used as fallbacks. Round robin: the
# servers are used in a round-robin fashion. The port is optional, if not
# specified the default port is 53.
#dns-server: 

# dns-timeout <duration>
#
# Timeout for dialing DNS servers. Only used if DNS servers are specified.
#dns-timeout: 5s

# --- HTTP client ---

# cacert-file <path or base64>
#
# Add your own CA certificates to verify against. The system root certificates
# will be used in addition to any certificates in this list. Use this flag
# multiple times to specify multiple CA certificate files.
# 
# Syntax:
# - File: /path/to/file.pac
# - Embed: data:base64,<base64 encoded data>
#cacert-file: 

# http-dial-timeout <duration>
#
# The maximum amount of time a dial will wait for a connect to complete. With or
# without a timeout, the operating system may impose its own earlier timeout.
# For instance, TCP timeouts are often around 3 minutes.
#http-dial-timeout: 25s

# http-idle-conn-timeout <duration>
#
# The maximum amount of time an idle (keep-alive) connection will remain idle
# before closing itself. Zero means no limit.
#http-idle-conn-timeout: 1m30s

# http-response-header-timeout <duration>
#
# The amount of time to wait for a server's response headers after fully writing
# the request (including its body, if any).This time does not include the time
# to read the response body. Zero means no limit.
#http-response-header-timeout: 0s

# http-tls-handshake-timeout <duration>
#
# The maximum amount of time waiting to wait for a TLS handshake. Zero means no
# limit.
#http-tls-handshake-timeout: 10s

# http-tls-keylog-file <path>
#
# File to log TLS master secrets in NSS key log format. By default, the value is
# taken from the SSLKEYLOGFILE environment variable. It can be used to allow
# external programs such as Wireshark to decrypt TLS connections.
#http-tls-keylog-file: 

# --- API server ---

# api-address <host:port>
#
# The server address to listen on. If the host is empty, the server will listen
# on all available interfaces.
#api-address: 

# api-basic-auth <username[:password]>
#
# Basic authentication credentials to protect the server.
#api-basic-auth: 

# api-idle-timeout <duration>
#
# The maximum amount of time to wait for the next request before closing
# connection.
#api-idle-timeout: 1h0m0s

# --- Logging ---

# log-file <path>
#
# Path to the log file, if empty, logs to stdout. The file is reopened on SIGHUP
# to allow log rotation using external tools.
#log-file: 

# log-http [api|proxy|control:]<none|short-url|url|headers|body|errors>,... 
#
# HTTP request and response logging mode. 
# 
# Modes: 
# - none: no logging
# - short-url: logs [scheme://]host[/path] instead of the full URL
# - url: logs the full URL including query parameters
# - headers: logs request line and headers
# - body: logs request line, headers, and body
# - errors: logs request line and headers if status code is greater than or
# equal to 500
# 
# Modes for different modules can be specified separated by commas. The
# following example specifies that the API module logs errors, the proxy module
# logs headers, and anything else logs full URL. 
# 
# --log-http=api:errors,proxy:headers,url
#log-http: none

# log-level <error|info|debug>
#
# Log level.
#log-level: info
```

</details>

### Use Cases

We recommend using a configuration file in production environments.

- Facilitates tracking tunnel configuration changes because they're all included in a single file.
- Facilitates management of potentially long CLI options such as tunnel-domains and direct-domains.
- Secures Sauce Connect Proxy credentials with tighter access control.

### Using the Config File

To launch a tunnel using a **config.yml** file option.

1. Create Sauce Connect Proxy config file in any location, for example: `$HOME/sc/config.yml` (`%HOMEPATH%\sc\config.yml` for Windows).
2. Enter values for the properties you'd like to use.
3. Use the `--config-file` flag to run Sauce Connect Proxy with your configuration file.

<Tabs
    defaultValue="Mac/Linux"
    values={[
      {label: 'Mac/Linux', value: 'Mac/Linux'},
      {label: 'Windows', value: 'Windows'},
    ]}>

  <TabItem value="Mac/Linux">

```bash
./sc run -c ~/sc/config.yml
```

  </TabItem>
  <TabItem value="Windows">

```bash
sauce-connect.exe run -c %HOMEPATH%\sc\config.yml
```

  </TabItem>
  </Tabs>

## Environment Variables

You can set via environment variables all Sauce Connect Proxy [command-line options](/dev/cli/sauce-connect-5/).
Each option description includes the corresponding environment variable.

### Use Cases

We recommend configuring options via environment variables in the following scenarios.

- Sauce Connect Proxy command containing credentials may be exposed via process monitoring tools such as `ps`.
- When running Sauce Connect Proxy in CI/CD environment to avoid clear-text logging your credentials.
- Sauce Connect Proxy runs in a docker container, and a CI system (such as GitLab) supports secure environment variables.

### Environment Variables For Security

The following flags may contain sensitive information:

- [`--username`](/dev/cli/sauce-connect-5/run/#username)
- [`--access-key`](/dev/cli/sauce-connect-5/run/#access-key)
- [`--auth`](/dev/cli/sauce-connect-5/run/#auth)
- [`--proxy`](/dev/cli/sauce-connect-5/run/#proxy)
- [`--proxy-sauce`](/dev/cli/sauce-connect-5/run/#proxy-sauce)
- [`--header`](/dev/cli/sauce-connect-5/run/#header)
- [`--api-basic-auth`](/dev/cli/sauce-connect-5/run/#api-basic-auth)

We recommend using environment variables for these flags.

| Environment Variable   | Description                                                                                                   | Corresponding CLI Option                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `SAUCE_USERNAME`           | Sets your Sauce Labs username.                                                                                | [`--username`](/dev/cli/sauce-connect-5/run/#username)           |
| `SAUCE_ACCESS_KEY`     | Sets your Sauce Labs access key.                                                                              | [`--access-key`](/dev/cli/sauce-connect-5/run/#access-key) |
| `SAUCE_AUTH`           | Sets site or upstream proxy basic authentication credentials.                                                 | [`--auth`](/dev/cli/sauce-connect-5/run/#auth)             |
| `SAUCE_PROXY`          | The basic authentication username and password can be specified in the host string, e.g. user:pass@host:port. | [`--proxy`](/dev/cli/sauce-connect-5/run/#proxy)           |
| `SAUCE_PROXY_SAUCE`    | The basic authentication username and password can be specified in the host string, e.g. user:pass@host:port. | [`--proxy-sauce`](/dev/cli/sauce-connect-5/run/#proxy-sauce) |
| `SAUCE_HEADER`         | May contain headers with sensitive information.                                                               | [`--header`](/dev/cli/sauce-connect-5/run/#header)         |
| `SAUCE_API_BASIC_AUTH` | Contains an optional internal API server authentication.                                                      | [`--api-basic-auth`](/dev/cli/sauce-connect-5/run/#api-basic-auth) |

### Running Sauce Connect Proxy With Environment Variables

<Tabs>
<TabItem value="macOS/Linux" label="macOS and Linux" default>

Follow the steps below to configure Sauce Connect Proxy using environment variables in your terminal.

1. In your terminal window, set the following environment variables
   ```bash
   export SAUCE_USERNAME="your Sauce username"
   export SAUCE_ACCESS_KEY="your Sauce access key"
   export SAUCE_REGION="<us-west|eu-central>"
   export SAUCE_TUNNEL_NAME="your tunnel name"
   ```
2. Starting a new Sauce Connect Proxy does not require adding required flags.
   ```bash
   sc
   ```

:::note
You can persist Sauce Connect Proxy environment variables by adding them to one of your user environment configuration files, such as `.bash_profile` or `.zshrc`.
:::

</TabItem>
<TabItem value="Windows" label="Windows">

1. Open the Control Panel and click the System icon to open the **System Properties** dialog.
2. Click **Environment Variables** to open the **Environment Variables** dialog.
3. In the **User variables** section, click **New** to open the **New System Variable** dialog.
4. For **Variable name**, enter **SAUCE_USERNAME** and for **Variable value**, enter your Sauce username and then click **OK**.
5. Repeat 3-4 to set up the **SAUCE_ACCESS_KEY**, **SAUCE_REGION**, **SAUCE_TUNNEL_NAME** or any other environment variable.
6. Confirm that your environment variables have been set by typing `echo %SAUCE_USERNAME%` in your terminal. The response should be your username value. Then do the same for your access key.
7. Starting a new Sauce Connect Proxy will not require adding required flags.
   ```bash
   sauce-connect.exe
   ```

</TabItem>
</Tabs>

## More Information

- [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect-5/quickstart)
- [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-5/)
