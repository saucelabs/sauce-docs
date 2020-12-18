---
id: sauce-connect-proxy
title: Sauce Connect Proxy CLI
sidebar_label: Sauce Connect Proxy
---

Sauce Connect Proxy provides several command-line arguments. The table below outlines all of the current flags you can use to specify Sauce Connect Proxy parameters.

Some command-line arguments can be passed through a config file or an environment variable. When the same argument is passed through multiple methods, the order of precedence is as follows: Command Line Argument > Environment Variable > Config File.

To ensure compatibility with these variables, make sure that you're using the latest version of Sauce Connect Proxy ([download here](https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863)).

## List of Sauce Connect Proxy Command-Line Arguments

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
   <td><p>Sauce Labs username.</p>
   <p>You can also use the environment variable <code>SAUCE_USERNAME</code> on the command line. For more info, see <a href="/secure-connections/sauce-connect/environment-variables">Environment Variables Used by Sauce Connect Proxy</a> and <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365921">Best Practice: Use Environment Variables for Authentication Credentials</a>.</p>
   </td>
  </tr>
  <tr>
   <td><sub><code>-k</code></sub>
   </td>
   <td><sub><code>
    --api-key [api-key]
   </code></sub></td>
   <td><p>Sauce Labs API key.</p>
   <p>You can also use the environment variable <code>SAUCE_ACCESS_KEY</code> on the command line. For more info, see <a href="/secure-connections/sauce-connect/environment-variables">Environment Variables Used by Sauce Connect Proxy</a> and <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365921">Best Practice: Use Environment Variables for Authentication Credentials</a>.</p>
   </td>
  </tr>
  <tr>
   <td><sub><code>-c</code></sub>
   </td>
   <td><sub><code>
    --config-file [path]
   </code></sub></td>
   <td><p>Included as part of the Sauce Connect Proxy download package (sc.exe), <strong>config.yaml</strong> is the example configuration file to be used with the <code>--config-file</code> command-line option. This is the local path to a YAML file containing Sauce Connect Proxy configuration. Download and review our <a href="https://wiki.saucelabs.com/download/attachments/63475846/config.yml?version=2&modificationDate=1541880007875&api=v2">sample YAML file</a> for more information.</p>
   <p> Here is the order of precedence when the same argument is provided through multiple methods, with methods to the left having higher precedence: Command Line Argument > Environment Variable > Config File.</p>
   <p>In production environments, we recommend using a configuration file rather than command-line arguments for the following reasons:</p>

<ul>
<li>Ability to track configuration changes</li>
<li>Easier to manage tunnel-domains and direct-domains options, which can get very long</li>
<li>Secure Sauce Connect credentials with tighter access control over the config file</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><sub><code>-B</code></sub>
   </td>
   <td><sub><code>
    --no-ssl-bump-domains
   </code></sub></td>
   <td><p>Comma-separated list of domains. Requests, including hosts that match one of these domains, will not be SSL re-encrypted. See <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=80414353">Sauce Connect Proxy and SSL Certificate Bumping</a> for more information about scenarios in which you would want to use this command.</p>
   <p>For more info, see <a href="/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands">Formatting Domains guidelines</a>.</p>
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
   <td><p>Comma-separated list of domains. Requests, including hosts that match one of these domains, will be relayed directly through the Internet instead of through the Sauce Connect tunnel.</p>
   <p>For more info, see <a href="/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands">Formatting Domains guidelines</a>.</p></td>
  </tr>
  <tr>
   <td><sub><code>-t</code></sub>
   </td>
   <td><sub><code>
    --tunnel-domains [...]
   </code></sub></td>
   <td><p>Inverse of <code>--direct-domains</code>. Overrides <code>--direct-domains</code>. Only requests for domains in this list will be sent through the Sauce Connect Proxy tunnel. For more info, see <a href="/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands">Formatting Domains guidelines</a>.</p>
   </td>
  </tr>
  <tr>
   <td><sub><code>-v</code></sub></td>
   <td><sub><code>
    --verbose
   </code></sub></td>
   <td><p>Enables verbose debugging. Use <code>-v</code> to output HTTP headers. You can also use the<code> -vv</code> (very verbose) option to output HTTP headers and KGP logs, however, it's meant for troubleshooting only. It's not for long-term use, nor should it be used in production. Running Sauce Connect Proxy with the very verbose<code> -vv</code> option is system-resource demanding and will adversely affect Sauce Connect Proxy performance.</p>
   </td>
  </tr>
  <tr>
   <td><sub><code>-F</code></sub>
   </td>
   <td><sub><code>
    --fast-fail-regexps [...]
   </code></sub></td>
   <td>Comma-separated list of regular expressions. Requests with URLs matching one of these will get dropped instantly and will not go through the tunnel. See <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365877">Sauce Connect Proxy FAQs</a> > <strong>How Can I Use Sauce Connect Proxy to Test Graceful Degradation</strong>? for an example of using this command to test for application or site degradation based on missing assets or resources.
   </td>
  </tr>
  <tr>
   <td><sub><code>-i</code></sub>
   </td>
   <td><sub><code>
    --tunnel-identifier [id]
   </code></sub></td>
   <td><p>Assigns an <code>id</code> to a Sauce Connect Proxy tunnel. Future jobs will use this tunnel only when explicitly specified by the <code>tunnelIdentifier</code> Capability in a Selenium client. Note that <code>id</code> must be ASCII.</p>
   <p>For more information on using <code>--tunnel-identifier</code> to run multiple Sauce Connect tunnels simultaneously, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717567">High Availability Sauce Connect Proxy Setup</a>. For more information about the syntax for setting <code>tunnelIdentifier</code> as a capability, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492">Test Configuration Options</a>.</p>
   </td>
  </tr>
  <tr>
   <td><sub><code>-l</code></sub>
   </td>
   <td><sub><code>
    --logfile [file]
   </code></sub></td>
   <td><p>Capture the Sauce Connect Proxy logs in `file` If a path is not specified in `file`, the default location of the `file` is the same location where the Sauce Connect executable can be found on your machine.</p>
   </td>
  </tr>
  <tr>
   <td><sub><code>-P</code></sub>
   </td>
   <td><sub><code>
    --se-port [port]
   </code></sub></td>
   <td><p>Sets the port on which Sauce Connect's Selenium relay will listen for requests. Selenium commands reaching Sauce Connect on this port will be relayed to Sauce Labs securely and reliably through Sauce Connect's tunnel. This feature is disabled unless specified.</p>
   <p><strong>NOTE</strong>: Effective with Sauce Connect Proxy version 4.6.0, this feature is no longer enabled by default.</p>
   </td>
  </tr>
  <tr>
   <td><sub><code>-p</code></sub></td>
   <td><sub><code>
    --proxy [host:port]
   </code></sub></td>
   <td><p>Proxy host and port that Sauce Connect Proxy should use to connect to the Sauce Labs REST API and test traffic. For more information about the <code>-p</code> option and configuring Sauce Connect with other proxies, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.</p>
   <p>As an alternative, you can also use environment variables <code>HTTP_PROXY</code>, <code>http_proxy</code>, <code>all_proxy</code>, or <code>ALL_PROXY</code> on the command line. For more information, see <a href="/secure-connections/sauce-connect/environment-variables">Environment Variables Used by Sauce Connect Proxy</a>.</p>
   </td>
  </tr>
  <tr>
   <td><sub><code>-w</code></sub>
   </td>
   <td><sub><code>
    --proxy-userpwd [user:pwd]
   </code></sub></td>
   <td><p>Username and password sent via basic authentication required to access the proxy configured with <code>-p (--proxy)</code>. For more information about the <code>-w</code> option and configuring Sauce Connect with other proxies, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.</p>
   <p><strong>NOTE</strong>: Sauce Connect Proxy versions older than 4.6.1 do <em>not</em> support the <code>-p</code> option combined with <code>--pac</code>. Update to the latest version here: <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863">Downloading Sauce Connect Proxy</a>.</p>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --pac [url]
   </code></sub></td>
   <td><p>Proxy auto-configuration (PAC). Can be a http(s) or local file://URL. For more information about the <code>-pac</code> option and configuring Sauce Connect with other proxies, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.</p>
<p>Absolute paths are required when specifying a local PAC file (e.g., file:///Users/JohnSmith/Desktop/MyPac.pac).</p>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --pac-auth
    [username:password@host:port]
   </code></sub></td>
   <td><p>Supplies PAC authentication string in format <sub><code>username:password@host:port</code></sub>. This option can be used multiple times for each authenticated host in the PAC file.</p>
   <p>Option is only compatible with Sauce Connect Proxy client version 4.6.3+.</p>
   </td>
  </tr>
  <tr>
   <td><sub><code>-T</code></sub>
   </td>
   <td><sub><code>
    --proxy-tunnel
   </code></sub></td>
   <td><p>Uses the proxy configured with<code> -p</code> for the tunnel connection. For more information about the <code>-T</code> option and configuring Sauce Connect with other proxies, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.</p>
  <p>You'll need to use this option if you use a PAC file that contains Sauce Labs DNS names.</p>
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
   <td><p>By default, Sauce Connect Proxy connects to the US Virtual Device and Desktop Cloud (US-West-1). Use this option if you need to connect to a different Sauce Labs cloud (e.g., EU Virtual Device and Desktop Cloud or US Real Device Cloud).</p>
<p>For a full list of Sauce Connect Proxy endpoints, see <a href="https://wiki.saucelabs.com/display/DOCS/Data+Center+Endpoints">Data Center Endpoints</a>.</p>
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
   <td><p>Performs basic authentication when a URL on <code>host:port</code> asks for a username and password. This option can be used multiple times. For examples, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=65607085">Using --auth with Sauce Connect Proxy</a>.</p>
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
   <td>Specifies the file in which to write the Sauce Connect Proxy process ID. This is useful for programmatically stopping Sauce Connect.
<p>
Sauce Connect Proxy makes a best effort but cannot guarantee that the pidfile will be removed when shutting down Sauce Connect Proxy. With that in mind, relying on the pidfile as a means to monitor Sauce Connect Proxy is not supported.</p>
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
   <td>OCSP tunnel certificate validation command that logs errors only; it will not stop Sauce Connect from connecting to a tunnel.
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
   <td>OCSP tunnel certificate validation command that allows you to bypass OCSP checks.
   </td>
  </tr>
</table>

**NOTE**: OCSP supports the following Sauce Connect flags: `--kgp-host`, `--kgp-port`, `--proxy`, `--pac`, `--no-autodetect`, `--proxy-tunnel`, `--tunnel-cainfo`, `--tunnel-capath`. More information: [Sauce Connect Proxy Certificate Handling](https://wiki.saucelabs.com/display/DOCSDEV/Sauce+Connect+Proxy+Certificate+Handling).


## Developer-Only Command-Line Arguments

The following command-line arguments are only to be used when explicitly requested by our Support team.

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
   <td>
   </td>
   <td><sub><code>
    --no-cert-verify
   </code></sub></td>
   <td>Disables certificate verification for tunnel/KGP connections.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --no-http-cert-verify
   </code></sub></td>
   <td>Disables certificate verification for HTTP connections.
   </td>
  </tr>
  <tr>
   <td><sub><code>-r</code></sub>
   </td>
   <td><sub><code>
    --reconnect [seconds]
   </code></sub></td>
   <td>Maximum time in seconds to wait between tunnel reconnect attempts.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td><sub><code>
    --vm-version
   </code></sub></td>
   <td>Requests a specific tunnel VM version.
   </td>
  </tr>
  <tr>
   <td><sub><code>-o</code></sub>
   </td>
   <td><sub><code>
    --output-config
   </code></sub></td>
   <td>Writes all configuration options as JSON to <code>stdout</code>. This flag is used by our Jenkins plugin and is not intended to be used by end users.
   </td>
  </tr>
</table>

## Formatting Domains in Your Commands

Here are some guidelines to follow when formatting domains within your commands:

*   Make sure your comma-separated list of domains doesn't include any spaces. For example, `mydomain.com,saucelabs.com,mysite.com`, instead of `mydomain.com, saucelabs.com, mysite.com`
*   Use only the domain name; no need to precede it with `http:` or `https:`
*   Prefix a domain name with "`*."` or simply `"."` to match all its subdomains. For example, you could refer to both `wiki.saucelabs.com` and `my.saucelabs.com` with "`*.saucelabs.com"` or` ".saucelabs.com"`. Enclose the argument in quotes to prevent shell expansion of asterisk.
*   If you don't want any domains to be SSL re-encrypted, you can specify `all` with the argument (i.e., `-B all` or `--no-ssl-bump-domains all`)
*   WebSockets are not compatible with SSL bumping; you'll need to disable SSL Bumping for WebSocket domains
