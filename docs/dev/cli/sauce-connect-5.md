---
id: sauce-connect-5
title: Sauce Connect Proxy 5 CLI Reference
sidebar_label: sc
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Below is a list of commands available with your Sauce Connect Proxy application.

## What You'll Need

- Make sure you're using the latest [Sauce Connect Proxy version](/secure-connections/sauce-connect-5/installation/). Otherwise, some commands may not work.
- See [Sauce Connect Quickstart](/secure-connections/sauce-connect-5/quickstart/) for setup instructions and use cases.

<br/>

## Commands

- [sc run](/dev/cli/sauce-connect-5/run/)
- `sc legacy`
- [sc completion](/dev/cli/sauce-connect-5/completion/)
- `sc version`
- `sc help`

### `sc run`

The [sc run](/dev/cli/sauce-connect-5/run/) command is a main Sauce Connect Proxy 5 command that allows provisioning a Sauce Connect Proxy server and establishing a secure connection between the Sauce Connect Proxy client and the server.

### `sc legacy`

The command runs Sauce Connect Proxy in compatibility mode with Sauce Connect Proxy 4.9.x. See [Sauce Connect Proxy 4.x.x CLI Reference](/dev/cli/sauce-connect-proxy). The command is intended to simplify the transition to Sauce Connect Proxy 5.x.x and will be removed in the future.

Unsupported Sauce Connect Proxy 4.9.x flags:

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

### `sc completion`

The [sc completion](/dev/cli/sauce-connect-5/completion/) command generates an autocompletion script for `bash`, `zsh`, `fish` and `powershell` shells. See each sub-command's help for details on how to use the generated script.

### `sc version`

The `sc version` command output detailed version info.

```bash
sc version
  Version:	 5.0.0
  Build time:	 2023-10-31T21:11:37Z
  Git commit:	 9eb9a377aaa791765f74aace37e83d8ac1d000e2
  Go Arch:	 arm64
  Go OS:		 darwin
  Go Version:	 go1.21.3
```

### `sc help`

The `sc help` command allows getting usage for other commands

```bash
sc help
Sauce Connect Proxy CLI opens a secure connection between Sauce Labs and a locally hosted applications. You can learn
more at https://docs.saucelabs.com/secure-connections/sauce-connect-5/.

Commands:
  run           Run Sauce Connect Proxy

Other Commands:
  completion    Generate the autocompletion script for the specified shell
  version       Print version information

The following options can be passed to any subcommand:

Other:
    -c, --config-file <path> (env SAUCE_CONFIG_FILE)
        Configuration file to load options from. The supported formats are: JSON, YAML, TOML, HCL, and Java
        properties. The file format is determined by the file extension, if not specified the default format is YAML.
        The following precedence order of configuration sources is used: command flags, environment variables, config
        file, default values.

Use "sc <command> --help" for more information about a given command.
```

## Additional Resources

- [Sauce Connect Proxy Basic Setup](/secure-connections/sauce-connect-5/installation/).
- [Sauce Connect Proxy Environment Variables](/secure-connections/sauce-connect-5/operation/configuration/#environment-variables/).
