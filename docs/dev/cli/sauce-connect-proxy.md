---
id: sauce-connect-proxy
title: Sauce Connect Proxy CLI Reference
sidebar_label: Sauce Connect Proxy
hide_table_of_contents: true
---

The table below outlines all command-line options that you can use to specify Sauce Connect Proxy parameters.


## Sauce Connect Proxy Command-Line Options

<table>
  <tr>
   <td><strong>Flag (Short)</strong>
   </td>
   <td><strong>Flag (Long)</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><sub><code>-u</code></sub>
   </td>
   <td><sub><code>--user [username]</code></sub></td>
   <td>Sets your Sauce Labs username. You can also use the environment variable <code>SAUCE_USERNAME</code> on the command line. For more info, see <a href="/secure-connections/sauce-connect/environment-variables">Sauce Connect Proxy Environment Variables</a>.
   </td>
  </tr>
  <tr>
   <td><sub><code>-k</code></sub>
   </td>
   <td><sub><code>
    --api-key [api-key]
   </code></sub></td>
   <td>Sets your Sauce Labs API key. You can also use the environment variable <code>SAUCE_ACCESS_KEY</code> on the command line. For more info, see <a href="/secure-connections/sauce-connect/environment-variables">Sauce Connect Proxy Environment Variables</a>.
   </td>
  </tr>
  <tr>
   <td><sub><code>-c</code></sub>
   </td>
   <td><sub><code>
    --config-file [path]
   </code></sub></td>
   <td><p>Sets the local path to a YAML file containing a Sauce Connect Proxy configuration. Use this in conjunction with the <code>--config-file</code> option. An example YAML configuration file, <strong>config.yaml</strong>, is included for your reference as part of the <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863">Sauce Connect Proxy download package</a>.</p>
   We recommend using a YAML configuration file in production environments, rather than command-line options, as it facilitates tracking configuration changes, managing tunnel-domains and direct-domains options (which can get very long), and securing Sauce Connect credentials with tighter access control over the config file.
   </td>
  </tr>
  <tr>
   <td><sub><code>-B</code></sub>
   </td>
   <td><sub><code>
    --no-ssl-bump-domains
   </code></sub></td>
   <td><p>Comma-separated list of domains. Requests, including hosts that match one of these domains, will not be SSL re-encrypted. See <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=80414353">Sauce Connect Proxy and SSL Certificate Bumping</a> for more information about scenarios in which you would want to use this command. For more info, see <a href="/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands">Formatting Domains guidelines</a>.</p>
   <p>HTTP Header Injection is disabled for all HTTPS domains passed to <code>--no-ssl-bump-domains</code> argument.</p>
   </td>
  </tr>
  <tr>
   <td><sub><code>-N</code></sub>
   </td>
   <td><sub><code>
    --no-proxy-caching
   </code></sub></td>
   <td>Disables caching in Sauce Connect Proxy. All requests will be sent through the tunnel.
   </td>
  </tr>
  <tr>
   <td><sub><code>-M</code></sub>
   </td>
   <td><sub><code>
    --max-missed-acks
   </code></sub></td>
   <td>Sets the maximum amount of keepalive ACKs that can be missed before the client will trigger a reconnect. The default is 30.
   </td>
  </tr>
  <tr>
   <td><sub><code>-D</code></sub>
   </td>
   <td><sub><code>
    --direct-domains [...]
   </code></sub></td>
   <td>Comma-separated list of domains. Requests, including hosts that match one of these domains, will be relayed directly through the Internet instead of through the Sauce Connect tunnel. For more info, see <a href="/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands">Formatting Domains guidelines</a>.</td>
  </tr>
  <tr>
   <td><sub><code>-t</code></sub>
   </td>
   <td><sub><code>
    --tunnel-domains [...]
   </code></sub></td>
   <td>Inverse of <code>--direct-domains</code>. Overrides <code>--direct-domains</code>. Only requests for domains in this list will be sent through the Sauce Connect Proxy tunnel. For more info, see <a href="/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands">Formatting Domains guidelines</a>.
   </td>
  </tr>
  <tr>
   <td><sub><code>-v</code></sub></td>
   <td><sub><code>
    --verbose
   </code></sub></td>
   <td><p>Enables verbose debugging. Use this to output HTTP headers.</p>
   <strong>NOTE</strong>: <code>-vv</code> (very verbose), which outputs HTTP headers and KGP logs, is meant for troubleshooting purposes only. It is system-resource demanding and adversely affects Sauce Connect Proxy performance.
   </td>
  </tr>
  <tr>
   <td><sub><code>-F</code></sub>
   </td>
   <td><sub><code>
    --fast-fail-regexps [...]
   </code></sub></td>
   <td>Tests for application and site degradation based on missing assets or resources. It can be used to simulate non-loading of scripts, styles, or other resources. Use this option followed by a comma-separated list of regular expressions. Requests with URLs matching one of these will get dropped instantly and will not go through the tunnel. See <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365877#SauceConnectProxyFAQs-HowcanIuseSauceConnectProxytotestgratefuldegradation">Using Sauce Connect Proxy to Test Graceful Degradation</a> for an example.
   </td>
  </tr>
  <tr>
   <td><sub><code>-i</code></sub>
   </td>
   <td><sub><code>
    --tunnel-identifier [id]
   </code></sub></td>
   <td><p>Assigns an ID to a Sauce Connect Proxy tunnel. Future jobs will use this tunnel only when explicitly specified by the <code>tunnelIdentifier</code> Capability in a Selenium client. <strong>Required</strong>: Your ID must be ASCII.</p>
   For information on using <code>--tunnel-identifier</code> to run multiple Sauce Connect tunnels simultaneously, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717567">High Availability Sauce Connect Proxy Setup</a>. To learn about the syntax for setting <code>--tunnelIdentifier</code> as a capability, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492">Test Configuration Options</a>.
   </td>
  </tr>
  <tr>
   <td><sub><code>-l</code></sub>
   </td>
   <td><sub><code>
    --logfile [file]
   </code></sub></td>
   <td>Captures the Sauce Connect Proxy logs in <code>file</code>. If a path is not specified in <code>file</code>, the <code>file</code> location will default to the location where the Sauce Connect executable can be found on your machine.
   </td>
  </tr>
  <tr>
   <td><sub><code>-P</code></sub>
   </td>
   <td><sub><code>
    --se-port [port]
   </code></sub></td>
   <td>Sets the port on which Sauce Connect's Selenium relay will listen for requests. Selenium commands reaching Sauce Connect on this port will be relayed to Sauce Labs securely and reliably through Sauce Connect's tunnel. This feature is <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=66292142">disabled unless specified</a>.
   </td>
  </tr>
  <tr>
   <td><sub><code>-p</code></sub></td>
   <td><sub><code>
    --proxy [host:port]
   </code></sub></td>
   <td><p>Sets the proxy host and port that Sauce Connect should use to connect to the Sauce Labs REST API and test traffic. For information about the <code>-p</code> option and configuring Sauce Connect with other proxies, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.</p>
   Alternatively, you can use corresponding <a href="/secure-connections/sauce-connect/environment-variables">environment variables</a> <code>HTTP_PROXY</code>, <code>http_proxy</code>, <code>all_proxy</code>, or <code>ALL_PROXY</code> on the command line.
   </td>
  </tr>
  <tr>
   <td><sub><code>-w</code></sub>
   </td>
   <td><sub><code>
    --proxy-userpwd [user:pwd]
   </code></sub></td>
   <td><p>Requires username and password to be sent via basic authentication to access the proxy configured with <code>-p (--proxy)</code>. For more information, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.</p>
   <strong>NOTE</strong>: Sauce Connect Proxy versions older than 4.6.1 do <em>not</em> support the <code>-p</code> option combined with <code>--pac</code>. Update to the latest version <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863">here</a>.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --pac [url]
   </code></sub></td>
   <td>Defines proxy auto-configuration (PAC) URL. You can input a <code>http(s)</code> or local <code>file://URL</code>. Absolute paths are required when specifying a local PAC file (e.g., <code>file:///Users/JohnSmith/Desktop/MyPac.pac</code>). For more information, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --pac-auth
    [username:password@host:port]
   </code></sub></td>
   <td>Supplies PAC authentication string in format <code>username:password@host:port</code>. This option can be used multiple times for each authenticated host in the PAC file. This option is compatible only with Sauce Connect versions 4.6.3 and higher.
   </td>
  </tr>
  <tr>
   <td><sub><code>-T</code></sub>
   </td>
   <td><sub><code>
    --proxy-tunnel
   </code></sub></td>
   <td><p>Uses the proxy configured with <code>-p</code> for the tunnel connection. For more information about the <code>-T</code> option and configuring Sauce Connect with other proxies, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.</p>
   You'll need to use this option if you have a PAC file that contains Sauce Labs DNS names.
   </td>
  </tr>
  <tr>
   <td><sub><code>-s</code></sub>
   </td>
   <td><sub><code>
    --shared-tunnel
   </code></sub></td>
   <td>Allows other users of the tunnel owner to use the tunnel. For more information, visit the <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=78414547">Sharing Sauce Connect Proxy Tunnels - Extended Team Management</a> page.
   </td>
  </tr>
  <tr>
   <td><sub><code>-x</code></sub>
   </td>
   <td><sub><code>
    --rest-url [arg]
   </code></sub></td>
   <td>Allows you to connect to a different Sauce Labs cloud (e.g., EU Virtual Device and Desktop Cloud or US Real Device Cloud) other than the default, US-West-1. For a full list of Sauce Connect Proxy endpoints, see <a href="https://wiki.saucelabs.com/display/DOCS/Data+Center+Endpoints">Data Center Endpoints</a>
   </td>
  </tr>
  <tr>
   <td><sub><code>-f</code></sub>
   </td>
   <td><sub><code>
    --readyfile
   </code></sub></td>
   <td>File that will be touched to indicate when the tunnel is ready.
   </td>
  </tr>
  <tr>
   <td><sub><code>-a</code></sub>
   </td>
   <td><sub><code>
   --auth [host:port:user:pwd]
   </code></sub></td>
   <td><p>Performs basic authentication when a URL on <code>host:port</code> asks for a username and password. This option can be used multiple times. For examples, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=65607085">Using <code>--auth</code> with Sauce Connect Proxy</a>.</p>
  <p>Sauce Connect's <code>--auth</code> flag will only send the header Authorization with a type of 'Basic'.  If a resource responds with the header WWW-Authenticate of a type any other than 'Basic,' your authentication will fail and return a non-200 HTTP response.</p>
  <p>HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect, which means performing basic authentication in this way is disabled for all HTTPS domains passed to <code>--no-ssl-bump-domains</code>argument.</p>
   </td>
  </tr>
  <tr>
   <td><sub><code>-z</code></sub>
   </td>
   <td><sub><code>
    --log-stats [seconds]
   </code></sub></td>
   <td>Logs statistics about HTTP traffic every <code>seconds</code>. Information includes bytes transmitted, requests made, and responses received.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --max-logsize [bytes]
   </code></sub></td>
   <td>Rotates log file after reaching <code>bytes</code> size. Disabled by default.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --doctor
   </code></sub></td>
   <td>Performs checks to detect possible misconfiguration or problems. Check out <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=65605320">Sauce Connect Proxy Debugging and Diagnostics with --doctor flag</a> for more information about the errors that <code>--doctor</code> will detect and how to resolve them. Please note that when using the <code>--doctor</code> flag, place it at the end of your command for best results.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --no-autodetect
   </code></sub></td>
   <td>Disables the auto-detection of proxy settings.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --version
   </code></sub></td>
   <td>Displays version information and exit.
   </td>
  </tr>
  <tr>
   <td><sub><code>-X</code></sub>
   </td>
   <td><sub><code>
    --scproxy-port [port]
   </code></sub></td>
   <td>Sets port to use for the built-in HTTP proxy.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --cainfo [cainfo file]
   </code></sub></td>
   <td>CA certificate bundle to use for verifying REST connections.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --capath [capath dir]
   </code></sub></td>
   <td>Directory of CA certs to use for verifying REST connections.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --tunnel-cert public
   </code></sub></td>
   <td><p>Requires that the certificates on the Sauce Labs internal tunnel Virtual Machine be signed by a Certificate Authority instead of self-signed certificates. See <a href="https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Change+Logs">Sauce Connect Proxy Change Logs</a> for details.</p>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --tunnel-cainfo [cainfo file]
   </code></sub></td>
   <td>CA certificate bundle to use for verifying tunnel connections.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --tunnel-capath [capath dir]
   </code></sub></td>
   <td>Directory of CA certificates to use for verifying tunnel connections.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --scproxy-read-limit [bytes per second]
   </code></sub></td>
   <td>Rates limit reads in scproxy to X bytes per second. This option can be used to adjust local network transfer rate in order not to overload the tunnel connection.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --scproxy-write-limit [bytes per second]
   </code></sub></td>
   <td>Rates limit writes in scproxy to X bytes per second. This option can be used to adjust local network transfer rate in order not to overload the tunnel connection.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --dns [server[,server..]]
   </code></sub></td>
   <td>Uses specified name server. To specify multiple servers, separate them with a comma. Use IP addresses, optionally with a port number, the two separated by a colon. Example: <code>--dns 8.8.8.8,8.8.4.4:53</code>.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --no-remove-colliding-tunnels
   </code></sub></td>
   <td>By default, colliding tunnels will be removed when Sauce Connect is starting up. Use this option to prevent removal of identified tunnels with the same name or any other default tunnels. Jobs will be distributed across all tunnels, enabling load balancing and high availability.
   </td>
  </tr>
  <tr>
   <td><sub><code>-d</code></sub>
   </td>
   <td><sub><code>
    --pidfile [file]
   </code></sub></td>
   <td>Specifies the file in which to write the Sauce Connect Proxy process ID. This is useful for programmatically stopping Sauce Connect. Although Sauce Connect Proxy makes a best effort, we cannot guarantee that the pidfile will be removed when shutting down Sauce Connect Proxy. With that in mind, relying on the pidfile as a means to monitor Sauce Connect Proxy is not supported.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --metrics-address=address
   </code></sub></td>
   <td>Defines host:port for the internal web server used to expose client side metrics (default is <code>localhost:8888</code>).
   </td>
  </tr>
  <tr>
   <td><sub><code>-h</code></sub>
   </td>
   <td><sub><code>
     --help
   </code></sub></td>
   <td>Displays the help text.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --extra-info
    '["inject_job_id":true]'
   </code></sub></td>
   <td><p>Injects job id and tunnel id as HTTP request headers.</p>
<p>
HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy. Header Injection is disabled for all HTTPS domains passed to <code>--no-ssl-bump-domains</code> argument.</p>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --ocsp log-only
   </code></sub></td>
   <td>Sets an CSP tunnel certificate validation "log-only" policy that simply logs errors only.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --ocsp attempt
   </code></sub></td>
   <td>Sets an OCSP tunnel certificate validation "soft-fail" policy that allows Sauce Connect to run unless OCSP server returns a “revoked” status (e.g., timeouts, unknown status). It will not stop Sauce Connect from connecting to a tunnel. Connection to OCSP server will be set to time out after 5 seconds.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --ocsp strict
   </code></sub></td>
   <td>Sets an OCSP tunnel certificate validation "hard-fail" policy that blocks Sauce Connect from running unless the OCSP server returns a “good” status (e.g., timeouts, revoked certificate, unknown status). It will stop Sauce Connect from connecting to a tunnel. Connection to OCSP server will be set to time out after 10 seconds.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --no-ocsp-verify
   </code></sub></td>
   <td>Sets an OCSP tunnel certificate validation "bypass" policy that allows you to skip OCSP checks.
   </td>
  </tr>
</table>

**NOTE**: OCSP supports the following Sauce Connect flags: `--kgp-host`, `--kgp-port`, `--proxy`, `--pac`, `--no-autodetect`, `--proxy-tunnel`, `--tunnel-cainfo`, `--tunnel-capath`. More information: [Sauce Connect Proxy Certificate Handling](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365729).


## Additional Resources

### Formatting Domains in Your Command Lines

Here are some guidelines to follow when formatting domains:

*   Make sure your comma-separated list of domains doesn't include any spaces. For example, `mydomain.com,saucelabs.com,mysite.com`, instead of `mydomain.com, saucelabs.com, mysite.com`
*   Use only the domain name; no need to precede it with `http:` or `https:`
*   Prefix a domain name with "`*."` or simply `"."` to match all its subdomains. For example, you could refer to both `wiki.saucelabs.com` and `my.saucelabs.com` with "`*.saucelabs.com"` or` ".saucelabs.com"`. Enclose the argument in quotes to prevent shell expansion of asterisk.
*   If you don't want any domains to be SSL re-encrypted, you can specify `all` with the argument (i.e., `-B all` or `--no-ssl-bump-domains all`)
*   WebSockets are not compatible with SSL bumping; you'll need to disable SSL Bumping for WebSocket domains

### Related Docs
* [Download Sauce Connect Proxy](https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863)
* [Sauce Connect Proxy Environment Variables](/secure-connections/sauce-connect/environment-variables)
* [Sauce Connect Proxy Setup and Configuration](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Setup+and+Configuration)
* [Sauce Connect Proxy Network Security](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+and+Network+Security)
* [Sauce Connect Proxy Changelog](secure-connections/sauce-connect/changelog)
