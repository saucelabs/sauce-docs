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
| `--no-ssl-bump-domains` (list of domain globs) | `--tls-passthrough-domains` (list of domain regexps) |
| `--tunnel-domains` (list of domain globs) | `--tunnel-domains` (list of domain regexps) |
| `--direct-domains` (list of domain globs) | `--direct-domains` (list of domain regexps) |
| `--pac-auth`, `--proxy-userpwd` | `--auth` |
| `--proxy-localhost` (flag, send localhost through proxy) | `--proxy-localhost` (configure localhost access: allow, direct, deny) |
| `--proxy-tunnel` (proxy saucelabs tunnel connection) | `--proxy-sauce` (proxy any saucelabs.com connection) |
| `--status-address` (status info only) | `--api-address` (several endpoints, including metrics) |

### Removed Flags

| Version 4.x | Version 5.x |
| ----------- | ----------- |
| `--autodetect` | removed |
| `--doctor` | removed |
| `--experimental` | removed |
| `--extra-info` | removed |
| `--log-stats` | removed |
| `--max-logsize` | removed |
| `--no-autodetect` | removed |
| `--no-remove-colliding-tunnels` | removed |
| `--ocsp` | removed |
| `--output-format` | removed |
| `--pidfile` | removed |
| `--readyfile` | see [Readiness Checks](/secure-connections/sauce-connect-5/operation/readiness-checks/) |
| `--se-port` | removed |
| `--tunnel-cainfo` | removed |
| `--vm-version` | removed |

## Unsupported Features

Sauce Connect version 5 does not support Selenium Relay.

## Transition Timeline

Sauce Connect version 5 was released January 16, 2024 and Sauce Connect version 4 is now in maintenance mode until its scheduled End of Life on December 31, 2024. During this period, other than security patches and bug fixes, all new features for Sauce Connect will be released on version 5 only.
