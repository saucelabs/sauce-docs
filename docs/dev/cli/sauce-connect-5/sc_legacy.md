---
id: legacy
title: sc legacy
sidebar_label: sc legacy
---

The compatibility mode with Sauce Connect Proxy 4. The command is intended to simplify the transition to Sauce Connect Proxy 5.0.x and will be removed in the future.
See [Sauce Connect Proxy 5 Migration Guide](/secure-connections/sauce-connect-5/migrating/) for more details.

## Usage

```bash
$ sc legacy [OPTIONS]
```

The command supports the majority of Sauce Connect Proxy 4 options, see [Sauce Connect Proxy 4 CLI Reference](/dev/cli/sauce-connect-proxy).

Unsupported Sauce Connect Proxy 4 options:

- [`--autodetect`](/dev/cli/sauce-connect-proxy/#--autodetect)
- [`--doctor`](/dev/cli/sauce-connect-proxy/#--doctor)
- [`--experimental`](/dev/cli/sauce-connect-proxy/#--experimental)
- [`--extra-info`](/dev/cli/sauce-connect-proxy/#--extra-info)
- [`--log-stats`](/dev/cli/sauce-connect-proxy/#--log-stats)
- [`--max-logsize`](/dev/cli/sauce-connect-proxy/#--max-logsize)
- [`--metadata`](/dev/cli/sauce-connect-proxy/#--metadata)
- [`--no-autodetect`](/dev/cli/sauce-connect-proxy/#--no-autodetect)
- [`--no-remove-colliding-tunnels`](/dev/cli/sauce-connect-proxy/#--no-remove-colliding-tunnels)
- [`--ocsp`](/dev/cli/sauce-connect-proxy/#--ocsp)
- [`--output-format`](/dev/cli/sauce-connect-proxy/#--output-format)
- [`--pidfile`](/dev/cli/sauce-connect-proxy/#--pidfile)
- [`--readyfile`](/dev/cli/sauce-connect-proxy/#--readyfile)
- [`--tunnel-cainfo`](/dev/cli/sauce-connect-proxy/#--tunnel-cainfo)
- [`--readyfile`](/dev/cli/sauce-connect-proxy/#--readyfile)
- `--vm-version`

## Additional Resources

- [Sauce Connect Proxy Basic Setup](/secure-connections/sauce-connect-5/installation/).
- [Sauce Connect Proxy 5 Migration Guide](/secure-connections/sauce-connect-5/migrating/).
- [Sauce Connect Proxy 4 CLI Reference](/dev/cli/sauce-connect-proxy).
