---
id: environment-variables
title: Sauce Connect Proxy Environment Variables
sidebar_label: Environment Variables
hide_table_of_contents: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The standard way to launch a Sauce Connect Proxy tunnel is to run a single command line comprised of all [required flags](/dev/cli/sauce-connect-proxy/#main) and any [optional flags](/dev/cli/sauce-connect-proxy/) you want to use to customize tunnel behavior.
It's also possible to pass the same command-line arguments through a [YAML config file](/secure-connections/sauce-connect/setup-configuration/yaml-config/), and as environment variables.
If you pass the same argument through multiple methods, the order of precedence is as follows (from highest to lowest):

- command-line option
- environment variable
- YAML config file

Sauce Connect Proxy environment variables can be divided into 3 groups:

- User credentials
- All command line options as environment variables
- Proxy environment variables

## User Credentials Environment Variables

| Environment Variable                   | Description                      | Corresponding CLI Option                               |
| -------------------------------------- | -------------------------------- | ------------------------------------------------------ |
| `SAUCE_USERNAME`<br/>`SAUCE_USER`      | Sets your Sauce Labs username.   | [`--user`](/dev/cli/sauce-connect-proxy/#--user)       |
| `SAUCE_ACCESS_KEY`<br/>`SAUCE_API_KEY` | Sets your Sauce Labs access key. | [`--api-key`](/dev/cli/sauce-connect-proxy/#--api-key) |

### Use Cases

We recommend configuring credentials via environment variables in the following scenarios:

- Sauce Connect Proxy command containing credentials may be exposed via process monitoring tools such as `ps`.
- When running Sauce Connect Proxy in CI/CD environment to avoid clear-text logging your credentials.

## Command Line Options Environment Variables

You can set via environment variables almost all Sauce Connect Proxy [command-line options](/dev/cli/sauce-connect-proxy).
Each option description includes the corresponding environment variable.

### Use Cases

We recommend configuring options via environment variables in the following scenarios.

- Sauce Connect Proxy command is too long and not easily readable.
- Sauce Connect Proxy runs in a docker container, and a CI system (such as GitLab) allows a straightforward way to set environment variables.

## Proxy Environment Variables

Sauce Connect Proxy supports the following [proxy auto-configuration](/secure-connections/sauce-connect/setup-configuration/additional-proxies/#proxy-auto-configuration-automatic) environment variables, but we strongly advise using Sauce Connect Proxy specific variables, such as `SAUCE_PROXY` or `SAUCE_PROXY_TUNNEL` instead, since the auto-configuration variables listed here behave differently on different platforms.

| Environment Variable                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Platforms    |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `http_proxy`<br/>`HTTP_PROXY`<br/>`all_proxy`<br/>`ALL_PROXY` | Sets an HTTP proxy to be used by Sauce Connect Proxy. It can be formatted as `http://hostname:port` or `hostname:port`.<br/>On Linux and Mac environments, `http_proxy` variable can contain proxy credentials in the following format: `scheme://user:password@host:port`                                                                                                                                                                                                                                          | Linux, macOS |
| `no_proxy`<br/>`NO_PROXY`                                     | Sets hostnames that will not be proxied, even when Sauce Connect Proxy is configured to use a proxy. Format as a comma-separated list. Subdomain wildcarding is supported when the hostname starts with a `.` Examples:<br/><br/>`saucelabs.com,spam.net`: Only requests hitting `saucelabs.com` and `spam.net` will not be proxied. All other requests will be proxied.<br/>`.example.com`: All requests going to any subdomain of `example.com` will not be proxied (e.g., `one.example.com`, `asdf.example.com`) | Linux, macOS |

:::note
[`--no-autodetect`](/dev/cli/sauce-connect-proxy/#--no-autodetect) command-line option disables proxy auto-detection.
:::

## Running Sauce Connect Proxy With Environment Variables

<Tabs>
<TabItem value="macOS/Linux" label="macOS and Linux" default>

Follow the steps below to configure Sauce Connect Proxy using environment variables in your terminal.

1. In your terminal window, set the following environment variables
   ```bash
   export SAUCE_USERNAME="your Sauce username"
   export SAUCE_ACCESS_KEY="your Sauce access key"
   ```
2. Starting a new Sauce Connect Proxy does not require adding `--api-key` or `--user` flags.
   ```bash
   sc --region us-west
   ```

Alternatively, you can persist Sauce Connect Proxy environment variables by adding them to one of your user environment configuration files, such as `.bash_profile` or `.zshrc`.

1. Open `~/.bash_profile` or `~/.zshrc` in your preferred text editor.
2. Add the variables
   ```zsh
   export SAUCE_USERNAME="your Sauce username"
   export SAUCE_ACCESS_KEY="your Sauce access key"
   ```
3. Start a new shell or a new terminal.
4. To confirm that your environment variables are set, enter `echo $SAUCE_USERNAME` in your terminal. The expected response is your username value.
5. Just as above, starting a new Sauce Connect Proxy does not require adding `--api-key` or `--user` flags.
   ```bash
   sc --region us-west
   ```

</TabItem>
<TabItem value="Windows" label="Windows">

1. Open the Control Panel and click the System icon to open the **System Properties** dialog.
2. Click **Environment Variables** to open the **Environment Variables** dialog.
3. In the **User variables** section, click **New** to open the **New System Variable** dialog.
4. For **Variable name**, enter **SAUCE_USERNAME** and for **Variable value**, enter your Sauce username and then click **OK**.
5. Repeat 3-4 to set up the **SAUCE_ACCESS_KEY** or any other environment variable.
6. Confirm that your environment variables have been set by typing `echo %SAUCE_USERNAME%` in your terminal. The response should be your username value. Then do the same for your access key.
7. Starting a new Sauce Connect Proxy will not require adding `--api-key` or `--user` flags.
   ```bash
   sc.exe --region us-west
   ```

</TabItem>
</Tabs>

## More Information

- [Video: Setting Sauce Labs Credentials as Environment Variables](https://www.youtube.com/watch?v=3K1Eu0eTha8)
