---
id: environment-variables
title: Environment Variables
sidebar_label: Environment Variables
hide_table_of_contents: true
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These environment variables can be used in addition to [command-line options](/dev/cli/sauce-connect-proxy) to control the behavior of Sauce Connect Proxy. To learn how to set up environment variables, see [Using Environment Variables for Authentication Credentials](/basics/environment-variables).

When an environment variable is used, it can still be overridden by the command line. Command-line options--when available--always take precedence.

Some command-line arguments can be passed through a config file or an environment variable. When the same argument is passed through multiple methods, the order of precedence is as follows:

1. Command-line argument
1. Config file
1. Environment variable

| Environment Variable  | Description  | Platforms  | Corresponding CLI Option  |
|---|---|---|---|
| `SAUCE_USERNAME` | Sets your Sauce Labs username. | Windows, Linux, Mac OS X | [`--user`](https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/index.html#--user-string) |
| `SAUCE_ACCESS_KEY` | Sets your Sauce Labs access key. | Windows, Linux, Mac OS X | [`--api-key`](https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/index.html#--api-key-string) |
| `http_proxy`<br/>`HTTP_PROXY`<br/>`all_proxy`<br/>`ALL_PROXY` | Sets an HTTP proxy to be used by Sauce Connect Proxy. It can be formatted as `http://hostname:port` or `hostname:port`.<br/>On Linux and Mac environments, `http_proxy` and `https_proxy` variables can contain proxy credentials in the following format: `scheme://user:password@host:port` | Windows, Linux, Mac OS X | [`--proxy`](https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/index.html#external-proxy-configuration) |
| `no_proxy`<br/>`NO_PROXY` | Sets hostnames that will not be proxied, even when Sauce Connect is configured to use a proxy. Format as a comma-separated list. Subdomain wildcarding is supported when the hostname starts with a `.` Examples:<br/><ul>
<li>`saucelabs.com,spam.net`: Only requests hitting `saucelabs.com` and `spam.net` will not be proxied. All other requests will be proxied.</li>
<li>`.example.com`: All requests going to any subdomain of `example.com` will not be proxied (e.g., `one.example.com`, `asdf.example.com`)</li>
</ul> | Linux | |
| `SAUCE_ARES_FLAGS` | Sets advanced flags for DNS library use with Sauce Connect Proxy. For more information, see [c-ares Documentation](http://c-ares.haxx.se/ares_init.html). | Windows, Linux, Mac OS X | |
| | | | |
| | | | |

:::note
Not all environment variables are supported on all platforms. For best performance, make sure that you're using the [latest version of Sauce Connect Proxy](/secure-connections/sauce-connect/installation).
:::

## Additional Resources

* [Sauce Connect Proxy Command-Line Reference](/dev/cli/sauce-connect-proxy)
