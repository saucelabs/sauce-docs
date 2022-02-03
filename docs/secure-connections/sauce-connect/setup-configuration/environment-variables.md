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
It's also possible to pass the same command-line arguments through a [YAML config file](/secure-connections/sauce-connect/setup-configuration/yaml-config/), and as environment variables.
When the same argument is passed through multiple methods, the order of precedence is as follows (from highest to lowest):
* command-line option
* environment variable
* YAML config file.

Sauce Connect Proxy environment variables can be divided into 3 groups:

* User credentials
* All command line options as envirment variables
* System proxy environment variables


## User credentials environment variables


| Environment Variable                   | Description                      | Corresponding CLI Option                               |
|----------------------------------------|----------------------------------|--------------------------------------------------------|
| `SAUCE_USERNAME`<br/>`SAUCE_USER`      | Sets your Sauce Labs username.   | [`--user`](/dev/cli/sauce-connect-proxy/#--user)       |
| `SAUCE_ACCESS_KEY`<br/>`SAUCE_API_KEY` | Sets your Sauce Labs access key. | [`--api-key`](/dev/cli/sauce-connect-proxy/#--api-key) |

### Use Cases

We recommend configuring credentials via enviroment variables in the following scenarios.

* Sauce Connect Proxy command containing credentials may be exposed via process monitoring tools such as `ps`.


## Command line options environment variables

Almost all Sauce Connect Proxy [command-line options](/dev/cli/sauce-connect-proxy) can be set via environment variables.
Each option description includes the corresponding environment variable.

### Use Cases

We recommend configuring options via enviroment variables in the following scenarios.

* Sauce Connect Proxy command is too long and not easily readable.
* Sauce Connect Proxy runs in docker container and CI system (such as Gitlab) allows a simple way to set enviroment variables.


## System proxy environment variables

See the [proxy auto-configuration](/secure-connections/sauce-connect/setup-configuration/additional-proxies/#proxy-auto-configuration-automatic) documentation.

| Environment Variable                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Platforms           |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| `http_proxy`<br/>`https_proxy`<br/>`HTTP_PROXY`<br/>`HTTPS_PROXY`<br/>`all_proxy`<br/>`ALL_PROXY` | Sets an HTTP proxy to be used by Sauce Connect Proxy. It can be formatted as `http://hostname:port` or `hostname:port`.<br/><br/>On Linux and Mac environments, `http_proxy` and `https_proxy` variables can contain proxy credentials in the following format: `scheme://user:password@host:port`                                                                                                                                                                                                                       | Windows, Linux, Mac |
| `no_proxy`<br/>`NO_PROXY`                                                                         | Sets hostnames that will not be proxied, even when Sauce Connect Proxy is configured to use a proxy. Format as a comma-separated list. Subdomain wildcarding is supported when the hostname starts with a `.` Examples:<br/><br/>`saucelabs.com,spam.net`: Only requests hitting `saucelabs.com` and `spam.net` will not be proxied. All other requests will be proxied.<br/><br/>`.example.com`: All requests going to any subdomain of `example.com` will not be proxied (e.g., `one.example.com`, `asdf.example.com`) | Linux               |


We don't recommend configuring proxy via these enviroment variables since these variables behave differently on different platforms.
We recommend using Sauce Connect Proxy specific variables, such as `SAUCE_PROXY` or `SAUCE_PROXY_TUNNEL` instead.

:::note
[`--no-autodetect`](/dev/cli/sauce-connect-proxy/#--no-autodetect) command-line option disables system proxy detection.
:::


## Running Sauce Connect Proxy with enviroment variables

  <Tabs
      defaultValue="Mac/Linux"
      values={[
        {label: 'Mac/Linux', value: 'Mac/Linux'},
        {label: 'Windows', value: 'Windows'},
      ]}>

<TabItem value="Mac/Linux">

Follow the steps below to configure Sauce Connect Proxy using enviroment variables in the current terminal.

1. In your terminal window, set the following enviroment variables
  ```bash
  export SAUCE_USERNAME="your Sauce username"
  export SAUCE_ACCESS_KEY="your Sauce access key"
  ```
2. Starting a new Sauce Connect Proxy will not require adding `--api-key` or `--user` keys.
  ```bash
  sc --region us-west
  ```

Alternatively, Sauce Connect Proxy enviroment variables may be added to one of the user environment configuration files, such as `~/.bash_profile`.

1. To make enviroment variables always available, open `~/.bash_profile` in your prefered text editor.
2. Add the variables, for example:
 ```bash
 export SAUCE_USERNAME="your Sauce username"
 export SAUCE_ACCESS_KEY="your Sauce access key"
 ```
3. Start a new shell or a new terminal.
4. Confirm that your environment variables have been set by typing `echo $SAUCE_USERNAME` in your terminal. The response should be your username value.
5. Just as above, starting a new Sauce Connect Proxy will not require adding `--api-key` or `--user` keys.
 ```bash
 sc --region us-west
 ```

</TabItem>
<TabItem value="Windows">

1. Open the Control Panel and click the System icon to open the **System Properties** dialog.
2. Click **Environment Variables** to open the **Environment Variables** dialog.
3. In the **User variables** section, click **New** to open the **New System Variable** dialog.
4. For **Variable name**, enter **SAUCE_USERNAME** and for **Variable value**, enter your Sauce username and then click **OK**.
5. Repeat 3-4 to set up the **SAUCE_ACCESS_KEY** or any other environment variable.
6. Confirm that your environment variables have been set by typing `echo %SAUCE_USERNAME%` in your terminal. The response should be your username value. Then do the same for your access key.
7. Starting a new Sauce Connect Proxy will not require adding `--api-key` or `--user` keys.
 ```bash
 sc --region us-west
 ```

</TabItem>
</Tabs>


## More Information

* [Video: Setting Sauce Labs Credentials as Environment Variables](https://www.youtube.com/watch?v=3K1Eu0eTha8)
