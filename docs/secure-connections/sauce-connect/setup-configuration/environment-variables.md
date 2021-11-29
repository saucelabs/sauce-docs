---
id: environment-variables
title: Sauce Connect Proxy Environment Variables
sidebar_label: Environment Variables
hide_table_of_contents: true
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

For additional security, you can set your credentials and other [command-line options](/dev/cli/sauce-connect-proxy) (indicated below) as [environment variables](/basics/environment-variables) to control the behavior of Sauce Connect Proxy.

When an environment variable is used, it can still be overridden by the command line. Command-line options &#8212; when available &#8212; always take precedence. Some command-line arguments can be passed through a [YAML config file](/secure-connections/sauce-connect/setup-configuration/yaml-config/) or an environment variable. When the same argument is passed through multiple methods, the order of precedence is as follows:

1. Command-line option
1. Environment variable
1. YAML config file

| Environment Variable  | Description  | Platforms  | Corresponding CLI Option  |
|---|---|---|---|
| `SAUCE_USERNAME` | Sets your Sauce Labs username. | Windows, Linux, Mac | [`--user`](/dev/cli/sauce-connect-proxy/#--user) |
| `SAUCE_ACCESS_KEY` | Sets your Sauce Labs access key. | Windows, Linux, Mac | [`--api-key`](/dev/cli/sauce-connect-proxy/#--api-key) |
| `http_proxy`<br/>`HTTP_PROXY`<br/>`all_proxy`<br/>`ALL_PROXY` | Sets an HTTP proxy to be used by Sauce Connect Proxy. It can be formatted as `http://hostname:port` or `hostname:port`.<br/><br/>On Linux and Mac environments, `http_proxy` and `https_proxy` variables can contain proxy credentials in the following format: `scheme://user:password@host:port` | Windows, Linux, Mac | [`--proxy`](/dev/cli/sauce-connect-proxy/#external-proxy-configuration) |
| `no_proxy`<br/>`NO_PROXY` | Sets hostnames that will not be proxied, even when Sauce Connect Proxy is configured to use a proxy. Format as a comma-separated list. Subdomain wildcarding is supported when the hostname starts with a `.` Examples:<br/><br/>`saucelabs.com,spam.net`: Only requests hitting `saucelabs.com` and `spam.net` will not be proxied. All other requests will be proxied.<br/><br/>`.example.com`: All requests going to any subdomain of `example.com` will not be proxied (e.g., `one.example.com`, `asdf.example.com`) | Linux | |
| `SAUCE_ARES_FLAGS` | Sets advanced flags for DNS library use with Sauce Connect Proxy. For more information, see [c-ares Documentation](http://c-ares.haxx.se/ares_init.html). | Windows, Linux, Mac | |

:::note
Not all environment variables are supported on all platforms. For best performance, make sure that you're using the [latest version of Sauce Connect Proxy](/secure-connections/sauce-connect/installation).
:::

## More Information

* [Sauce Connect Proxy CLI](/dev/cli/sauce-connect-proxy)
* [Video: Setting Sauce Labs Credentials as Environment Variables](https://www.youtube.com/watch?v=3K1Eu0eTha8)
