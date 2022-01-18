---
id: environment-variables
title: Sauce Connect Proxy Environment Variables
sidebar_label: Environment Variables
hide_table_of_contents: true
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

For additional security, we recommend setting your user credentials and certain [command-line options](/dev/cli/sauce-connect-proxy) (indicated below) as [environment variables](/basics/environment-variables) to control the behavior of Sauce Connect Proxy tunnels.

:::note
It's possible to pass the same command-line arguments on the command line, through a [YAML config file](/secure-connections/sauce-connect/setup-configuration/yaml-config/), and as environment variables. When the same argument is passed through multiple methods, the order of precedence is as follows (from highest to lowest): command-line option, environment variable, YAML config file.
:::

| Environment Variable  | Description  | Platforms  | Corresponding CLI Option  |
|---|---|---|---|
| `SAUCE_USERNAME` | Sets your Sauce Labs username. | Windows, Linux, Mac | [`--user`](/dev/cli/sauce-connect-proxy/#--user) |
| `SAUCE_ACCESS_KEY` | Sets your Sauce Labs access key. | Windows, Linux, Mac | [`--api-key`](/dev/cli/sauce-connect-proxy/#--api-key) |
| `http_proxy`<br/>`HTTP_PROXY`<br/>`all_proxy`<br/>`ALL_PROXY` | Sets an HTTP proxy to be used by Sauce Connect Proxy. It can be formatted as `http://hostname:port` or `hostname:port`.<br/><br/>On Linux and Mac environments, `http_proxy` and `https_proxy` variables can contain proxy credentials in the following format: `scheme://user:password@host:port` | Windows, Linux, Mac | [`--proxy`](/dev/cli/sauce-connect-proxy/#external-proxy-configuration) |
| `no_proxy`<br/>`NO_PROXY` | Sets hostnames that will not be proxied, even when Sauce Connect Proxy is configured to use a proxy. Format as a comma-separated list. Subdomain wildcarding is supported when the hostname starts with a `.` Examples:<br/><br/>`saucelabs.com,spam.net`: Only requests hitting `saucelabs.com` and `spam.net` will not be proxied. All other requests will be proxied.<br/><br/>`.example.com`: All requests going to any subdomain of `example.com` will not be proxied (e.g., `one.example.com`, `asdf.example.com`) | Linux | n/a |
| `SAUCE_ARES_FLAGS` | Sets advanced flags for DNS library use with Sauce Connect Proxy. For more information, see the [c-ares Documentation](http://c-ares.haxx.se/ares_init.html). | Windows, Linux, Mac | n/a |

For best performance, use the [latest version of Sauce Connect Proxy](/secure-connections/sauce-connect/installation).


## More Information

* [Video: Setting Sauce Labs Credentials as Environment Variables](https://www.youtube.com/watch?v=3K1Eu0eTha8)
