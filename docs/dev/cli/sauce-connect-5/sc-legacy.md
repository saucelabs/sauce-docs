---
id: sc-legacy
title: sc legacy
---

# Sc Legacy

Usage: `sc legacy [flags]`

Run Sauce Connect Proxy in compatibility mode with Sauce Connect 4.9.X

**Note:** You can also specify the options as YAML, JSON or TOML file using `--config-file` flag.
You can generate a config file by running `sc legacy config-file` command.


## Required

### `-r, --region` {#region}

* Environment variable: `SAUCE_REGION`
* Value Format: `<value>`

Sauce Labs datacenter region.
Default: us-west.

### `-i, --tunnel-name` {#tunnel-name}

* Environment variable: `SAUCE_TUNNEL_NAME`
* Value Format: `<value>`

Tunnel name used for this tunnel or the tunnels in the same HA pool.

### `-u, --user` {#user}

* Environment variable: `SAUCE_USER`
* Value Format: `<value>`

Sauce Labs username.

## Options

### `-s, --shared-tunnel` {#shared-tunnel}

* Environment variable: `SAUCE_SHARED_TUNNEL`
* Value Format: `<value>`
* Default value: `false`

Share the tunnels within the same organization.

### `--tunnel-pool` {#tunnel-pool}

* Environment variable: `SAUCE_TUNNEL_POOL`
* Value Format: `<value>`
* Default value: `false`

Denotes a tunnel as part of a high availability tunnel pool.

## Tunnel traffic

### `-D, --direct-domains` {#direct-domains}

* Environment variable: `SAUCE_DIRECT_DOMAINS`
* Value Format: `<strings>`

Domains that do not require tunneling.

### `-t, --tunnel-domains` {#tunnel-domains}

* Environment variable: `SAUCE_TUNNEL_DOMAINS`
* Value Format: `<strings>`

Domains that require tunneling.
Inverse of '--direct-domains'.

## Proxy

### `-a, --auth` {#auth}

* Environment variable: `SAUCE_AUTH`
* Value Format: `<strings>`

Basic authentication for URL in host:port:username:password format.

### `-T, --proxy-tunnel` {#proxy-tunnel}

* Environment variable: `SAUCE_PROXY_TUNNEL`
* Value Format: `<value>`
* Default value: `false`

Route all tunnel traffic through the external proxy specified in --proxy.

## DNS

### `--dns` {#dns}

* Environment variable: `SAUCE_DNS`
* Value Format: `<strings>`

Use the specified name server.
Example: --dns 8.8.8.8,8.8.4.4:53

## API server

### `-k, --api-key` {#api-key}

* Environment variable: `SAUCE_API_KEY`
* Value Format: `<value>`

Sauce Labs API Access Key.

## Logging

### `-z, --log-stats` {#log-stats}

* Environment variable: `SAUCE_LOG_STATS`
* Value Format: `<seconds>`
* Default value: `0`

seconds Log statistics about HTTP traffic every `<seconds>`.

## Other

### `--autodetect` {#autodetect}

* Environment variable: `SAUCE_AUTODETECT`
* Value Format: `<value>`
* Default value: `true`

Detect the system proxy settings.
Inverse of '--no-autodetect'.
Default: true.

### `--cainfo` {#cainfo}

* Environment variable: `SAUCE_CAINFO`
* Value Format: `<value>`
* Default value: `/etc/ssl/certs/ca-certificates.crt`

CA certificate for verifying REST API.

### `-c, --config-file` {#config-file}

* Environment variable: `SAUCE_CONFIG_FILE`
* Value Format: `<value>`

Path to YAML config file.

### `--experimental` {#experimental}

* Environment variable: `SAUCE_EXPERIMENTAL`
* Value Format: `<strings>`

Enable or disable experimental features.

### `--extra-info` {#extra-info}

* Environment variable: `SAUCE_EXTRA_INFO`
* Value Format: `<value>`
* Default value: `{}`

JSON string that contains an advanced tunnel configuration.

### `-F, --fast-fail-regexps` {#fast-fail-regexps}

* Environment variable: `SAUCE_FAST_FAIL_REGEXPS`
* Value Format: `<strings>`

Deny-list URL patterns.

### `--no-autodetect` {#no-autodetect}

* Environment variable: `SAUCE_NO_AUTODETECT`
* Value Format: `<value>`
* Default value: `false`

Disable detection of the system proxy settings.
Default: false.

### `-B, --no-ssl-bump-domains` {#no-ssl-bump-domains}

* Environment variable: `SAUCE_NO_SSL_BUMP_DOMAINS`
* Value Format: `<strings>`

Domains that do not require SSL resigning.

### `--ocsp` {#ocsp}

* Environment variable: `SAUCE_OCSP`
* Value Format: `<value>`
* Default value: `log-only`

Cert revocation check.
One of: strict, log-only, disable.
Default: log-only.

### `--output-config-file` {#output-config-file}

* Environment variable: `SAUCE_OUTPUT_CONFIG_FILE`
* Value Format: `<value>`

Write the new Sauce Connect 5 run command configuration to the specified file.

	If set the run command will not be executed.


### `-d, --pidfile` {#pidfile}

* Environment variable: `SAUCE_PIDFILE`
* Value Format: `<value>`

File containing the process ID (PID).
Default: temp file.

### `-f, --readyfile` {#readyfile}

* Environment variable: `SAUCE_READYFILE`
* Value Format: `<value>`

File containing JSON formatted metadata.
Created when the tunnel is ready.

### `-x, --rest-url` {#rest-url}

* Environment variable: `SAUCE_REST_URL`
* Value Format: `<value>`

Sauce REST API URL.
An alternative to the recommended flag '--region'.

### `-P, --se-port` {#se-port}

* Environment variable: `SAUCE_SE_PORT`
* Value Format: `<int>`
* Default value: `-1`

Port on which Sauce Connect's Selenium relay will listen for requests.

### `--status-address` {#status-address}

* Environment variable: `SAUCE_STATUS_ADDRESS`
* Value Format: `<value>`

Status server address in host:port format.
Default: disabled.

### `--tunnel-cainfo` {#tunnel-cainfo}

* Environment variable: `SAUCE_TUNNEL_CAINFO`
* Value Format: `<value>`
* Default value: `/etc/ssl/certs/ca-certificates.crt`

CA certificate bundle to use for verifying tunnel connections.

## Additional Resources

- [Sauce Connect Proxy Basic Setup](/secure-connections/sauce-connect-5/installation/).
- [Sauce Connect Proxy 5 Migration Guide](/secure-connections/sauce-connect-5/migrating/).
- [Sauce Connect Proxy 4 CLI Reference](/dev/cli/sauce-connect-proxy).
