---
id: environment-variables
title: Environment Variables
sidebar_label: Environment Variables
hide_table_of_contents: true
---

These environment variables can be used in addition to [command-line options](/dev/cli/sauce-connect-proxy) to control the behavior of Sauce Connect Proxy. To learn how to set up environment variables, see [Using Environment Variables for Authentication Credentials](/basics/environment-variables).

When an environment variable is used, it can still be overridden by the command-line. Command-line options--when available--always take precedence.

Some command-line arguments can be passed through a config file or an environment variable. When the same argument is passed through multiple methods, the order of precedence is as follows:

1. Command Line Argument
1. Config File
1. Environment Variable

<table>

  <tr>
   <td><strong>Environment Variable</strong></td>
   <td><strong>Description</strong></td>
   <td><strong>Platforms</strong></td>
   <td><strong>Corresponding CLI Option</strong></td>
  </tr>
  <tr>
   <td><sub><code>
   SAUCE_USERNAME
   </code></sub></td>
   <td>Sets your Sauce Labs username.</td>
   <td>Windows, Linux, Mac OS X</td>
   <td><a href="/dev/cli/sauce-connect-proxy"><sub><code>--user</code></sub></a></td>
  </tr>
  <tr>
   <td><sub><code>
   SAUCE_ACCESS_KEY
   </code></sub></td>
   <td>Sets your Sauce Labs access key.</td>
   <td>Windows, Linux, Mac OS X</td>
   <td><a href="/dev/cli/sauce-connect-proxy"><sub><code>--api-key</code></sub></a></td>
  </tr>
  <tr>
  <td><sub><code>
   http_proxy
   </code></sub></td>
   <td rowspan="4" >
   <p>Sets an HTTP proxy to be used by Sauce Connect Proxy. It can be formatted as <code>http://hostname:port</code> or <code>hostname:port</code>.</p>

   <p>On Linux and Mac environments, <code>http_proxy</code> and <code>https_proxy</code> variables can contain proxy credentials in the following format: <code>scheme://user:password@host:port</code></p>
   </td>

   <td rowspan="4" >Windows, Linux, Mac OS X</td>

   <td rowspan="4" ><a href="/dev/cli/sauce-connect-proxy"><sub><code>--proxy</code></sub></a></td>
  </tr>

  <tr><td><sub><code>
  HTTP_PROXY
  </code></sub></td></tr>

  <tr><td><sub><code>
  all_proxy
  </code></sub></td></tr>

  <tr><td><sub><code>
  ALL_PROXY
  </code></sub></td></tr>

  <tr><td><sub><code>
  no_proxy
  </code></sub></td>
  <td rowspan="2" >
   Sets hostnames that will not be proxied, even when Sauce Connect is configured to use a proxy. Format as a comma-separated list. Subdomain wildcarding is supported when the hostname starts with a <code>.</code>. Examples:
   <ul>
   <li><code>saucelabs.com,foobar.net</code>: Only requests hitting <code>saucelabs.com</code> and <code>foobar.net</code> will not be proxied. All other requests will be proxied.</li>
   <li><code>.example.com</code>: All requests going to any subdomain of <code>example.com</code> will not be proxied (e.g., <code>one.example.com</code>, <code>asdf.example.com</code>)</li>
   </ul></td>
   <td rowspan="2" > Linux </td>
   <td rowspan="2" > </td>
  </tr>

  <tr><td><sub><code>
  NO_PROXY
  </code></sub></td></tr>

  <tr>
  <td><sub><code>
  SAUCE_ARES_FLAGS
  </code></sub></td>

   <td>
   Sets advanced flags for DNS library use with Sauce Connect. For more information, see <a href="http://c-ares.haxx.se/ares_init.html">c-ares Documentation</a>.
   </td>

   <td>Windows, Linux, Mac OS X</td>

   <td></td>

   </tr>
   </table>

:::note
Not all environment variables are supported on all platforms. For best performance, make sure that you're using the [latest version of Sauce Connect Proxy](/secure-connections/sauce-connect/installation).
:::

## Additional Resources

* [Sauce Connect Proxy Command-Line Reference](/dev/cli/sauce-connect-proxy)
