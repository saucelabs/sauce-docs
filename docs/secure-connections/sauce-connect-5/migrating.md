---
id: migrating
title: Migrating from Sauce Connect Proxy 4
sidebar_label: Migrating
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ScTable from '../../../src/components/scTable.jsx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This topic describes how to migrate to the new Sauce Connect Proxy version 5 from a previous install of Sauce Connect Proxy version 4.

## Installing and Upgrading Sauce Connect 5

You can now install or upgrade Sauce Connect version 5 with a package manager system such as Homebrew, Debian or RPM, and upgrading to the latest release is now much easier. If you prefer, there is still the option to download binary files as before. See [Sauce Connect 5 Install](/secure-connections/sauce-connect-5/installation/) for more details.

## Major Differences

* `sc run` is now used to start a tunnel, as there are now other subcommands that can be used.
* `--tunnel-name` is now required.
* `--region` is now required.
* [SSL Certificate Bumping](/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping) is now called TLS Resigning. SC 5.2 or newer defaults to **ON**, SC 5.1 or older defaults to **OFF**. Sauce Connect 4 defaulted to **ON**.
* Domain matching for deny/direct/tunnel domains now uses the standard regex format.

## Unsupported Features

* Selenium Relay has been removed.
* PID file has been removed.
* Readyfile has been removed.
* Log rotation has been removed.
* Proxy autodetection is not supported.

## Quick Start using `sc legacy`

The [`sc legacy`](/dev/cli/sauce-connect-5/legacy/) command is used to translate SC4 configuration to SC5.

For a quick sanity check, you can start Sauce Connect with the legacy command:

```
$ sc5 legacy -c orig.yaml
2024/01/31 21:57:42.194037 [control] [INFO] Sauce Connect Proxy version=5.0.0
2024/01/31 21:57:42.194381 [control] [INFO] please wait for 'you may start your tests' to start your tests
2024/01/31 21:57:42.194387 [control] [INFO] provisioning Sauce Connect region=us-west name=v4-tunnel
2024/01/31 21:57:49.183799 [control] [INFO] Sauce Connect running id=b45cb99acace494eb7f5ea0de5384b78
2024/01/31 21:57:49.183896 [tunnel] [INFO] waiting for Sauce Connect server to be reachable
2024/01/31 21:57:49.394606 [tunnel] [INFO] connecting to address=maki1641.miso.saucelabs.com:443
2024/01/31 21:57:50.027660 [tunnel] [INFO] connecting to address=maki1641.miso.saucelabs.com:443
2024/01/31 21:57:50.027703 [tunnel] [INFO] established connection to Sauce Connect server active=1/2
2024/01/31 21:57:50.396688 [control] [INFO] Sauce Connect is up, you may start your tests
2024/01/31 21:57:50.500205 [tunnel] [INFO] established connection to Sauce Connect server active=2/2
```

However, the legacy option will be removed in later versions of Sauce Connect, so we recommend using the legacy command to translate the config file to the new version. You can then use the new config file with the sc run command:


```
$ cat orig.yaml
api-key: xxxx
region: us-west
tunnel-name: v4-tunnel
user: saucebot
$ sc5 legacy -c orig.yaml --output-config-file new.yaml
$ cat new.yaml
access-key: xxxx
region: us-west
tunnel-name: v4-tunnel
username: saucebot
$ sc run -c new.yaml
2024/01/31 21:57:42.194037 [control] [INFO] Sauce Connect Proxy version=5.0.0
...
```

Note that there are some options that are removed in SC5, and will be dropped from the new config file.

If there are any options that require manual intervention, the command will fail with an error message.

**NOTE**: The legacy command will use the config file, environment variables, and CLI flags to generate the SC5 configuration file. If you're using environment variables and CLI flags to dynamically generate Sauce Connect configuration, you should review the configuration file that is generated. Options that should be in environment variables or CLI flags should be extracted from the config file.

## CLI Changes in Sauce Connect 5

The following flags have changed or been removed with Sauce Connect 5. In addition, to start a tunnel, you'll need to use `sc run` (previously just `sc` in version 4). Refer to the [Sauce Connect CLI](/dev/cli/sauce-connect-proxy) for more details.

### Changed Flags

| Version 4.x | Version 5.x |
| ----------- | ----------- |
| `--user` | `--username` |
| `--api-key` | `--access-key` |
| `--logfile` | `--log-file` |
| `--shared-tunnel` | `--shared` (accepts values: all) |
| `--dns` | `--dns-server` |
| `--cainfo` | `--cacert-file` |
| `--verbose` | `--log-level`, `--log-http` |
| `--fast-fail-regexps` (URL regex) | `--deny-domains` (list of domain regexps) |
| `--no-remove-colliding-tunnels` | `--tunnel-pool` |
| `--no-ssl-bump-domains` (list of domain globs) | `--tls-passthrough-domains` (list of domain regexps) |
| `--tunnel-domains` (list of domain globs) | `--tunnel-domains` (list of domain regexps) |
| `--direct-domains` (list of domain globs) | `--direct-domains` (list of domain regexps) |
| `--pac-auth`, `--proxy-userpwd` | `--auth` |
| `--proxy-localhost` (flag, send localhost through proxy) | `--proxy-localhost` (configure localhost access: allow, direct, deny) |
| `--proxy-tunnel` (proxy saucelabs tunnel connection) | `--proxy-sauce` (proxy any saucelabs.com connection) |
| `--status-address` (status info only) | `--api-address` (several endpoints, including metrics) |

### Removed Flags

| Version 4.x | Version 5.x                                                                          |
| ----------- |--------------------------------------------------------------------------------------|
| `--autodetect` | removed                                                                              |
| `--doctor` | removed                                                                              |
| `--experimental` | removed                                                                              |
| `--extra-info` | removed                                                                              |
| `--log-stats` | removed                                                                              |
| `--max-logsize` | removed                                                                              |
| `--no-autodetect` | removed                                                                              |
| `--ocsp` | removed                                                                              |
| `--output-format` | removed                                                                              |
| `--pidfile` | removed                                                                              |
| `--readyfile` | see [Readiness Checks](/secure-connections/sauce-connect-5/guides/readiness-checks/) |
| `--se-port` | removed                                                                              |
| `--tunnel-cainfo` | removed                                                                              |
| `--vm-version` | removed                                                                              |

## New Behavior in Sauce Connect 5

### Authorization

Any credentials (proxy, sites under test) to be used have been consolidated into the `--auth` flag which is in the `<username[:password]@host:port>` format.

For example, if you have a parent proxy with authorization, but also have a SUT with authorization, you would use:

```
--proxy 1.2.3.4:3128 --auth foo:bar@1.2.3.4:3128 --auth test:testpass@10.0.0.100:8080
```

### Domain Regexes

The following options now use standard regexes to control SC5 behavior:

* deny-domains
* direct-domains
* tls-passthrough-domains
* tls-resign-domains
* tunnel-domains

For example, to deny access to any google.com domain, you would use:

```
--deny-domains '^.*\.google\.com$'
```

You can also prefix the option with a `-` character to remove it from the list, so to deny access to any google.com domain, but allow mail.google.com, you could use:

```
--deny-domains '^.*\.google\.com$'  --deny-domains '-^mail\.google\.com$'
```

[Regex 101](https://regex101.com/) is an excellent site to troubleshoot regexes.

**NOTE**: Pay attention to shell wildcard rules if you're using CLI flags for these settings. The options should be wrapped with quotation marks to avoid issues. Using config files is recommended to avoid shell wildcard expansion issues.

**NOTE**: `.` is a wildcard, so if you're matching domains separated by periods, they should be escaped with backslashes.

**NOTE**: To ensure you're not matching any extra domains, use the `^` and `$` characters to mark the start and end of the domain to be matched.

## Alternatives to Deprecated Features

### Readiness Checks

SC5 has been designed to integrate with Kubernetes and other container management systems. The `readyfile` and `status-address` options have been replaced by the `api-address` option. See [Readiness Checks](https://docs.saucelabs.com/secure-connections/sauce-connect-5/guides/readiness-checks/) for more details.

### PID Files

Tracking process state through a PID file is error-prone and no longer recommended, and the PID file option has been removed. If you need to track process health, we recommend running it as a system service (ie SystemD) or as a Docker container.

### Log Rotation

SC5 leaves log management to third party tools such as journald. It can log to stdout or a single file.

### Selenium Relay

Selenium Relay was introduced as a reverse proxy for development environments. Over time, enterprise customers adopted it for production scenarios where more robust communication channels with the Sauce Labs WebDriver endpoint were needed.

With established alternatives like Envoy, Nginx, and HAProxy offering better security, performance, and support, we have deprecated Selenium Relay. We recommend adopting one of these solutions for a more robust and maintainable setup.

## Proxy Updates

Sauce Connect 5 no longer uses the `HTTP(S)_PROXY` and `NO_PROXY` environment variables.

To send REST API (ie, starting or stopping a tunnel) traffic through the proxy,
use the [--proxy-sauce](/dev/cli/sauce-connect-5/run/#proxy-sauce) option.

To send tunnel (site under test) traffic through a proxy, use the [--proxy](/dev/cli/sauce-connect-5/run/#proxy)
option.

Most proxy combinations can be controlled with these two options.
However, if you were using the `NO_PROXY` option to exclude various sites under
test from using a parent proxy, you will likely need to use a [PAC file](/dev/cli/sauce-connect-5/run/#pac)
instead. The endpoints listed in the `NO_PROXY` option would use a 'DIRECT' mode
in the PAC, and the default would be the proxy.

For example, if you wanted [https://example.com](https://example.com) to skip the proxy, and everything else to go through the proxy, you would use the following PAC file:

```javascript
function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, "example.com"))
    return "DIRECT";


  return "PROXY localhost:3128";
}
```

## Transition Timeline

Sauce Connect version 5 was released January 16, 2024 and Sauce Connect version 4 is now in maintenance mode until its scheduled End of Life on December 31, 2024. During this period, other than security patches and bug fixes, all new features for Sauce Connect will be released on version 5 only.
