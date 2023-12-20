---
id: configuration
title: Sauce Connect Proxy Configuration
sidebar_label: Configuration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The explicit way to launch a Sauce Connect Proxy tunnel is to run a single command line comprised of all [flags](/dev/cli/sauce-connect-5/run/) and any optional [flags](/dev/cli/sauce-connect-5/run/) you want to use to customize tunnel behavior.
It's also possible to pass the same command-line arguments through a config file, and as environment variables.
If you pass the same argument through multiple methods, the order of precedence is as follows (from highest to lowest):

- command-line option
- environment variable
- YAML config file

## Config File

The Sauce Connect Proxy [config file](/dev/cli/sauce-connect-5/run/#--config-file) may contain any CLI flag. It may also contain comments that could help make its content more readable, for example:

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

### Use Cases

We recommend using a configuration file in production environments.

- Facilitates tracking tunnel configuration changes because they're all included in a single file.
- Facilitates management of potentially long CLI options such as tunnel-domains and direct-domains.
- Secures Sauce Connect Proxy credentials with tighter access control.

### Using the Config File

To launch a tunnel using a **config.yml** file option.

1. Create Sauce Connect Proxy config file in any location, for example: `$HOME/sc/config.yml` (`%HOMEPATH%\sc\config.yml` for Windows).
2. Enter values for the properties you'd like to use.
3. Use the [--config-file](/dev/cli/sauce-connect-5/run/#--config-file) flag to run Sauce Connect Proxy with your configuration file.

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
sc.exe run -c %HOMEPATH%\sc\config.yml
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

- [`--username`](/dev/cli/sauce-connect-5/run/#--username)
- [`--access-key`](/dev/cli/sauce-connect-5/run/#--access-key)
- [`--auth`](/dev/cli/sauce-connect-5/run/#--auth)
- [`--proxy`](/dev/cli/sauce-connect-5/run/#--proxy)
- [`--proxy-sauce`](/dev/cli/sauce-connect-5/run/#--proxy-sauce)
- [`--header`](/dev/cli/sauce-connect-5/run/#--header)
- [`--api-basic-auth`](/dev/cli/sauce-connect-5/run/#--api-basic-auth)

We recommend using environment variables for these flags.

| Environment Variable   | Description                                                                                                   | Corresponding CLI Option                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `SAUCE_USERNAME`           | Sets your Sauce Labs username.                                                                                | [`--username`](/dev/cli/sauce-connect-5/run/#--username)                     |
| `SAUCE_ACCESS_KEY`     | Sets your Sauce Labs access key.                                                                              | [`--access-key`](/dev/cli/sauce-connect-5/run/#--access-key)         |
| `SAUCE_AUTH`           | Sets site or upstream proxy basic authentication credentials.                                                 | [`--auth`](/dev/cli/sauce-connect-5/run/#--auth)                     |
| `SAUCE_PROXY`          | The basic authentication username and password can be specified in the host string, e.g. user:pass@host:port. | [`--proxy`](/dev/cli/sauce-connect-5/run/#--proxy)                   |
| `SAUCE_PROXY_SAUCE`    | The basic authentication username and password can be specified in the host string, e.g. user:pass@host:port. | [`--proxy-sauce`](/dev/cli/sauce-connect-5/run/#--proxy-sauce)       |
| `SAUCE_HEADER`         | May contain headers with sensitive information.                                                               | [`--header`](/dev/cli/sauce-connect-5/run/#--header)                 |
| `SAUCE_API_BASIC_AUTH` | Contains an optional internal API server authentication.                                                      | [`--api-basic-auth`](/dev/cli/sauce-connect-5/run/#--api-basic-auth) |

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
   sc.exe
   ```

</TabItem>
</Tabs>

## More Information

- [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect-5/quickstart)
- [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-5/)
