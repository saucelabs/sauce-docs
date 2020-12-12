---
id: environment-variables
title: Sauce Connect Proxy Environment Variables
sidebar_label: Environment Variables
---

These environment variables can be used in addition to command-line flags to control the behavior of Sauce Connect. Please note that not all environment variables are supported on all platforms.

When an environment variable is used, it can still be overridden by the command-line. Command-line options – when available – always take precedence. Effective with Sauce Connect Proxy version 4.5.0, some command-line arguments can be passed through a config file or an environment variable. When the same argument is passed through multiple methods, the order of precedence is as follows: **Command Line Argument** > **Config File** > **Environment Variable**.

 some command-line arguments can be passed through a config file or an environment variable. When the same argument is passed through multiple methods, the order of precedence is as follows: **Command Line Argument** > **Config File** > **Environment Variable**.


<table>
  <tr>
   <td><strong>Environment Variable</strong></td>
   <td><strong>Description</strong></td>
   <td><strong>Platforms</strong></td>
   <td><strong>Command-Line Option</strong></td>
  </tr>
  <tr>
   <td><code>SAUCE_USERNAME</code></td>
   <td>Sauce Labs username.</td>
   <td>Windows, Linux, Mac OS X</td>
   <td><a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365781"><code>--user</code></a></td>
  </tr>
  <tr>
   <td><code>SAUCE_ACCESS_KEY</code></td>
   <td>Sauce Labs access key.</td>
   <td>Windows, Linux, Mac OS X</td>
   <td><a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365781"><code>--api-key</code></a></td>
  </tr>
  <tr>
   <td><code>http_proxy</code>
   </td>
   <td rowspan="4" >
   <p>An HTTP proxy that will be used by Sauce Connect Proxy.</p>
   <p> It can be in the format of <code>http://hostname:port</code> or just <code>hostname:port</code>.</p>
   <p> Sauce Connect Proxy Version 4.5.0 and above.</p>
   <p> On Linux and Mac environments, <code>http_proxy</code> and <code>https_proxy</code> variables can contain proxy credentials in the following format <code>scheme://user:password@host:port</code></p>
   </td>
   <td rowspan="4" >Windows, Linux, Mac OS X</td>
   <td rowspan="4" ><a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365781"><code>--proxy</code></a></td>
  </tr>
  <tr><td><code>HTTP_PROXY</code></td></tr>
  <tr><td><code>all_proxy</code></td></tr>
  <tr><td><code>ALL_PROXY</code></td></tr>
  <tr><td><code>no_proxy</code></td>
  <td rowspan="2" >
  <p>A comma-separated list of hostnames that will not be proxied, even when Sauce Connect is configured to use a proxy. Subdomain wildcarding is supported when the hostname starts with a ".".</p>
   <p><strong>Examples</strong></p>
   <ul>
   <li><code>saucelabs.com,foobar.net</code>: Only requests hitting <code>saucelabs.com</code> and <code>foobar.net</code> will not be proxied. All other requests will be proxied.</li>
   <li><code>.example.com</code>: All requests going to any subdomain of <code>example.com</code> will not be proxied (e.g., <code>one.example.com</code>, <code>asdf.example.com</code>)</li>
   </ul>
   </td>
   <td rowspan="2" >Linux</td>
   <td rowspan="2" ></td>
  </tr>
  <tr><td><code>NO_PROXY</code></td></tr>
  <tr><td><code>SAUCE_ARES_FLAGS</code></td>
   <td> <p> Advanced flags for the DNS library Sauce Connect use integer. For more information, see <a href="http://c-ares.haxx.se/ares_init.html">http://c-ares.haxx.se/ares_init.html</a>.</p>
   </td>
   <td>Windows, Linux, Mac OS X
   </td>
   <td>
   </td>
  </tr>
</table>

## Additional Resources

[Sauce Connect Proxy Command-Line Reference Guide](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365781)
