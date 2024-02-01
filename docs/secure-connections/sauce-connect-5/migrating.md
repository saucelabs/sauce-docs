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
<table>
  <tr>
    <td><strong>Version 4.x</strong></td>
    <td><strong>Version 5.x</strong></td>
  </tr>
  <tr>
    <td>`--user`</td>
    <td>`--username`</td>
  </tr>
  <tr>
    <td>`--api-key`</td>
    <td>`--access-key`</td>
  </tr>
  <tr>
    <td>`--logfile`</td><td>`--log-file`</td></tr>
  <tr>
    <td>`--shared-tunnel`</td>
    <td>`--shared` (accepts values: all)</td>
  </tr>
  <tr>
    <td>`--dns`</td>
    <td>`--dns-server`</td>
  </tr>
  <tr>
    <td>`--cainfo`</td>
    <td>`--cacert-file`</td>
  </tr>
  <tr>
    <td>`--verbose`</td>
    <td>`--log-level`, `--log-http`</td>
  </tr>
  <tr>
    <td>`--fast-fail-regexps` (URL regex)</td>
    <td>`--deny-domains` (list of domain regexps)</td>
  </tr>
  <tr>
    <td>`--no-ssl-bump-domains` (list of domain globs)</td>
    <td>`--tls-passthrough-domains` (list of domain regexps)</td>
  </tr>
  <tr>
    <td>`--tunnel-domains` (list of domain globs)</td>
    <td>`--tunnel-domains` (list of domain regexps)</td>
  </tr>
  <tr>
    <td>`--direct-domains` (list of domain globs)</td>
    <td>`--direct-domains` (list of domain regexps)</td>
  </tr>
  <tr>
    <td>`--pac-auth`, `--proxy-userpwd`</td>
    <td>`--auth`</td>
  </tr>
  <tr>
    <td>`--proxy-localhost` (flag, send localhost through proxy)</td>
    <td>`--proxy-localhost` (configure localhost access: allow, direct, deny)`</td></tr>
  <tr>
    <td>`--proxy-tunnel` (proxy saucelabs tunnel connection)</td>
    <td>`--proxy-sauce` (proxy any saucelabs.com connection)</td>
  </tr>
  <tr>
    <td>`--scproxy-port`</td>
    <td>`--address` (hidden flag, not part of CLI)</td>
  </tr>
  <tr>
    <td>`--status-address` (status info only)</td>
    <td>`--api-address` (several endpoints, including metrics)</td>
  </tr>
</table>

### Removed Flags
<table>
  <tr>
    <td><strong>Version 4.x</strong></td>
    <td><strong>Version 5.x</strong></td>
  </tr>
  <tr>
    <td>`--autodetect`</td>
    <td rowspan=11>[ removed ]</td>
  </tr>
  <tr>
    <td>`--doctor`</td>
  </tr>
  <tr>
    <td>`--experimental`</td>
  </tr>
  <tr>
    <td>`--extra-info`</td>
  </tr>
  <tr>
    <td>`--log-stats`</td>
  </tr>
  <tr>
    <td>`--max-logsize`</td>
  </tr>
  <tr>
    <td>`--no-autodetect`</td>
  </tr>
  <tr>
    <td>`--no-remove-colliding-tunnels`</td>
  </tr>
  <tr>
    <td>`--ocsp`</td>
  </tr>
  <tr>
    <td>`--output-format`</td>
  </tr>
  <tr>
    <td>`--pidfile`</td>
  </tr>
  <tr>
    <td>`--readyfile`</td>
    <td>see [Readiness Checks](/secure-connections/sauce-connect-5/operation/readiness-checks/)</td>
  </tr>
  <tr>
    <td>`--se-port`</td>
    <td rowspan=3>[ removed ]</td>
  </tr>
  <tr>
    <td>`--tunnel-cainfo`</td>
  </tr>
  <tr>
    <td>`--vm-version`</td>
  </tr>
</table>

## Unsupported Features

Sauce Connect version 5 does not support Selenium Relay.

## Transition Timeline

Sauce Connect version 5 was released January 16, 2024 and Sauce Connect version 4 is now in maintenance mode until its scheduled End of Life on December 31, 2024. During this period, other than security patches and bug fixes, all new features for Sauce Connect will be released on version 5 only.
