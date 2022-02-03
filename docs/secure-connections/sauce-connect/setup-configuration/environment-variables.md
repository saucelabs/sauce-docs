---
id: environment-variables
title: Sauce Connect Proxy Environment Variables
sidebar_label: Environment Variables
hide_table_of_contents: true
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


The standard way to launch a Sauce Connect Proxy tunnel is to execute a single command line comprised of all [required flags](/dev/cli/sauce-connect-proxy/#main) and any [optional flags](/dev/cli/sauce-connect-proxy/) you want to use to customize tunnel behavior.

For additional security, we recommend setting your user credentials as [environment variables](/basics/environment-variables).

You can also set most [command-line options](/dev/cli/sauce-connect-proxy) to configure the Sauce Connect Proxy. [Command-line option](/dev/cli/sauce-connect-proxy) documentation contains enviroment variables for all the options.

:::note
It's possible to pass the same command-line arguments on the command line, through a [YAML config file](/secure-connections/sauce-connect/setup-configuration/yaml-config/), and as environment variables. When the same argument is passed through multiple methods, the order of precedence is as follows (from highest to lowest): command-line option, environment variable, YAML config file.
:::


| Environment Variable  | Description  | Platforms  | Corresponding CLI Option  |
|---|---|---|---|
| `SAUCE_USERNAME` | Sets your Sauce Labs username. | Windows, Linux, Mac | [`--user`](/dev/cli/sauce-connect-proxy/#--user) |
| `SAUCE_ACCESS_KEY` | Sets your Sauce Labs access key. | Windows, Linux, Mac | [`--api-key`](/dev/cli/sauce-connect-proxy/#--api-key) |
| `http_proxy`<br/>`HTTP_PROXY`<br/>`all_proxy`<br/>`ALL_PROXY` | Sets an HTTP proxy to be used by Sauce Connect Proxy. It can be formatted as `http://hostname:port` or `hostname:port`.<br/><br/>On Linux and Mac environments, `http_proxy` and `https_proxy` variables can contain proxy credentials in the following format: `scheme://user:password@host:port` | Windows, Linux, Mac | [`--proxy`](/dev/cli/sauce-connect-proxy/#external-proxy-configuration) |
| `no_proxy`<br/>`NO_PROXY` | Sets hostnames that will not be proxied, even when Sauce Connect Proxy is configured to use a proxy. Format as a comma-separated list. Subdomain wildcarding is supported when the hostname starts with a `.` Examples:<br/><br/>`saucelabs.com,spam.net`: Only requests hitting `saucelabs.com` and `spam.net` will not be proxied. All other requests will be proxied.<br/><br/>`.example.com`: All requests going to any subdomain of `example.com` will not be proxied (e.g., `one.example.com`, `asdf.example.com`) | Linux | n/a |


## Use Cases

We recommend using enviroment variables in the following scenarios.
* Sauce Connect Proxy command containing credentials may be exposed via process monitoring tools such as `ps`.
* Sauce Connect Proxy command is too long and not easily readable.
* Sauce Connect Proxy runs in docker container and CI system (such as Gitlab) allows setting enviroment variables.


## What You'll Need
* See [Sauce Connect Proxy Basic Setup requirements](/secure-connections/sauce-connect/setup-configuration/basic-setup/#what-youll-need).


## Running Sauce Connect Proxy with enviroment variables

  <Tabs
      defaultValue="Mac/Linux"
      values={[
        {label: 'Mac/Linux', value: 'Mac/Linux'},
        {label: 'Windows', value: 'Windows'},
      ]}>

<TabItem value="Mac/Linux">

1. In your terminal window, set the following enviroment variables
  ```bash
  export SAUCE_USERNAME="your Sauce username"
  export SAUCE_ACCESS_KEY="your Sauce access key"
  ```
2. Starting a new Sauce Connect Proxy will not require adding `--api-key` or `--user` flags.
  ```bash
  sc --region us-west
  ```
3. To make enviroment variables always available, open `~/.bash_profile` in your prefered text editor.
4. Add the variables, for example:
 ```bash
 export SAUCE_USERNAME="your Sauce username"
 export SAUCE_ACCESS_KEY="your Sauce access key"
 ```
4. Start a new shell or a new terminal to have the shell read your `~/.bash_profile` file.
5. Confirm that your environment variables have been set by typing `echo $SAUCE_USERNAME` in your terminal. The response should be your username value.
6. Just as above, starting a new Sauce Connect Proxy will not require adding `--api-key` or `--user` keys.
 ```bash
 sc --region us-west
 ```

</TabItem>
<TabItem value="Windows">

1. Click **Start** on the task bar.
2. In the Search programs and fields box, enter **Environment Variables**.
3. Click **Edit the environment variables**. This will open the **System Properties** dialog.
4. Click **Environment Variables**. This will open the **Environment Variables** dialog.
5. In the **User variables** section, click **New**. This will open the **New System Variable** dialog.
6. For **Variable name**, enter **SAUCE_USERNAME**.
7. For **Variable value**, enter your Sauce username.
8. Click **OK**.
9. Repeat 4 - 8 to set up the **SAUCE_ACCESS_KEY**.
10. Confirm that your environment variables have been set by typing `echo %SAUCE_USERNAME%` in your terminal. The response should be your username value. Then do the same for your access key.
11. Starting a new Sauce Connect Proxy will not require adding `--api-key` or `--user` keys.
 ```bash
 sc --region us-west
 ```

</TabItem>
</Tabs>


## More Information

* [Video: Setting Sauce Labs Credentials as Environment Variables](https://www.youtube.com/watch?v=3K1Eu0eTha8)
