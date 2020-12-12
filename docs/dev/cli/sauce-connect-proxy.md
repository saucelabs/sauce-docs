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
   <td><code>-u</code>
   </td>
   <td>

    --user <username>

   </td>
   <td><p>Sauce Labs username.</p>
   <p>You can also use the environment variable <code>SAUCE_USERNAME</code> on the command line. For more info, see <a href="/secure-connections/sauce-connect/environment-variables">Environment Variables Used by Sauce Connect Proxy</a> and <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365921">Best Practice: Use Environment Variables for Authentication Credentials</a>.</p>
   </td>
  </tr>
  <tr>
   <td><code>-k</code>
   </td>
   <td>

    --api-key <api-key>

   </td>
   <td>Sauce Labs API key.
   <p>You can also use the environment variable <code>SAUCE_ACCESS_KEY</code> on the command line. For more info, see <a href="/secure-connections/sauce-connect/environment-variables">Environment Variables Used by Sauce Connect Proxy</a> and <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365921">Best Practice: Use Environment Variables for Authentication Credentials</a>.</p>
   </td>
  </tr>
  <tr>
   <td><code>-c</code>
   </td>
   <td>

    --config-file <path>

   </td>
   <td><p>Included as part of the Sauce Connect Proxy download package (sc.exe) is the example configuration file <strong>config.yaml</strong>, to be used with the <code>--config-file</code> command-line option. This is the local path to a YAML file containing Sauce Connect Proxy configuration. Download and review our <a href="https://wiki.saucelabs.com/download/attachments/63475846/config.yml?version=2&modificationDate=1541880007875&api=v2">sample YAML file</a> for more information.</p>
<p> Here is the order of precedence when the same argument is provided through multiple methods, with methods to the left having higher precedence: <strong>Command Line Argument</strong> > <strong>Environment Variable</strong> > <strong>Config File</strong>.</p>
<p>In production environments, we recommend using a configuration file rather than command-line arguments for the following reasons:</p>

<ul>
<li>Ability to track configuration changes</li>
<li>Easier to manage tunnel-domains and direct-domains options, which can get very long</li>
<li>Secure Sauce Connect credentials with tighter access control over the config file</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><code>-B</code>
   </td>
   <td>

    --no-ssl-bump-domains

   </td>
   <td>Comma-separated list of domains. Requests, including hosts that match one of these domains, will not be SSL re-encrypted. See <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=80414353">Sauce Connect Proxy and SSL Certificate Bumping</a> for more information about scenarios in which you would want to use this command.
<p>For more info, see <a href="/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands">Formatting Domains guidelines</a>.</p>
<p>HTTP Header Injection is disabled for all HTTPS domains passed to <code>--no-ssl-bump-domains</code> argument.</p>
   </td>
  </tr>
  <tr>
   <td><code>-N</code>
   </td>
   <td>

    --no-proxy-caching

   </td>
   <td>Disables caching in Sauce Connect Proxy. All requests will be sent through the tunnel.
   </td>
  </tr>
  <tr>
   <td><code>-M</code>
   </td>
   <td>

    --max-missed-acks

   </td>
   <td>Sets the maximum amount of keepalive ACKs that can be missed before the client will trigger a reconnect. The default is 30.
   </td>
  </tr>
  <tr>
   <td><code>-D</code>
   </td>
   <td>

    --direct-domains <...>

   </td>
   <td><p>Comma-separated list of domains. Requests, including hosts that match one of these domains, will be relayed directly through the Internet instead of through the Sauce Connect tunnel.</p>
   <p>For more info, see <a href="/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands">Formatting Domains guidelines</a>.</p></td>
  </tr>
  <tr>
   <td><code>-t</code>
   </td>
   <td>

    --tunnel-domains <...>

   </td>
   <td><p>Inverse of <code>--direct-domains</code>. Overrides <code>--direct-domains</code>. Only requests for domains in this list will be sent through the Sauce Connect Proxy tunnel. For more info, see <a href="/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands">Formatting Domains guidelines</a>.</p>
   </td>
  </tr>
  <tr>
   <td><code>-v</code></td>
   <td>

    --verbose

   </td>
   <td>Enables verbose debugging. Use <code>-v</code> to output HTTP headers.
<p>You can also use the<code> -vv</code> (very verbose) option to output HTTP headers and KGP logs, however, it's meant for troubleshooting only. It's not for long-term use, nor should it be used in production. Running Sauce Connect Proxy with the very verbose<code> -vv</code> option is system-resource demanding and will adversely affect Sauce Connect Proxy performance.</p>
   </td>
  </tr>
  <tr>
   <td><code>-F</code>
   </td>
   <td>

    --fast-fail-regexps <...>

   </td>
   <td>Comma-separated list of regular expressions. Requests with URLs matching one of these will get dropped instantly and will not go through the tunnel. See <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365877">Sauce Connect Proxy FAQs</a> > <strong>How Can I Use Sauce Connect Proxy to Test Graceful Degradation</strong>? for an example of using this command to test for application or site degradation based on missing assets or resources.
   </td>
  </tr>
  <tr>
   <td><code>-i</code>
   </td>
   <td>

    --tunnel-identifier <id>

   </td>
   <td><p>Assigns an <code>id</code> to a Sauce Connect Proxy tunnel. Future jobs will use this tunnel only when explicitly specified by the <code>tunnelIdentifier</code> Capability in a Selenium client. Note that <code>id</code> must be ASCII.</p>
   <p>For more information on using <code>--tunnel-identifier</code> to run multiple Sauce Connect tunnels simultaneously, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717567">High Availability Sauce Connect Proxy Setup</a>. For more information about the syntax for setting <code>tunnelIdentifier</code> as a capability, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492">Test Configuration Options</a>.</p>
   </td>
  </tr>
  <tr>
   <td><code>-l</code>
   </td>
   <td>

    --logfile <file>

   </td>
   <td><p>Capture the Sauce Connect Proxy logs in `file` If a path is not specified in `file`, the default location of the `file` is the same location where the Sauce Connect executable can be found on your machine.</p>
   </td>
  </tr>
  <tr>
   <td><code>-P</code>
   </td>
   <td>

    --se-port <port>

   </td>
   <td><p>Sets the port on which Sauce Connect's Selenium relay will listen for requests. Selenium commands reaching Sauce Connect on this port will be relayed to Sauce Labs securely and reliably through Sauce Connect's tunnel. This feature is disabled unless specified.</p>
   <p><strong>NOTE</strong>: Effective with Sauce Connect Proxy version 4.6.0, this feature is no longer enabled by default.</p>
   </td>
  </tr>
  <tr>
   <td><code>-p</code></td>
   <td>

    --proxy <host:port>

   </td>
   <td><p>Proxy host and port that Sauce Connect Proxy should use to connect to the Sauce Labs REST API and test traffic. For more information about the <code>-p</code> option and configuring Sauce Connect with other proxies, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.</p>
   <p>As an alternative, you can also use environment variables <code>HTTP_PROXY, http_proxy, all_proxy, or ALL_PROXY </code>on the command line. For more information, see <a href="/secure-connections/sauce-connect/environment-variables">Environment Variables Used by Sauce Connect Proxy</a>.</p>
   </td>
  </tr>
  <tr>
   <td><code>-w</code>
   </td>
   <td>

    --proxy-userpwd <user:pwd>

   </td>
   <td><p>Username and password sent via basic authentication required to access the proxy configured with <code>-p (--proxy)</code>. For more information about the <code>-w</code> option and configuring Sauce Connect with other proxies, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.</p>
   <p><strong>NOTE</strong>: Sauce Connect Proxy versions older than 4.6.1 do <em>not</em> support the <code>-p</code> option combined with <code>--pac</code>. Update to the latest version here: <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863">Downloading Sauce Connect Proxy</a>.</p>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --pac <url>

   </td>
   <td><p>Proxy auto-configuration (PAC). Can be a http(s) or local file://URL. For more information about the <code>-pac</code> option and configuring Sauce Connect with other proxies, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.</p>
<p>Absolute paths are required when specifying a local PAC file (e.g., <code>file:///Users/JohnSmith/Desktop/MyPac.pac</code>).</p>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --pac-auth <username:password@host:port>

   </td>
   <td><p>Supplies PAC authentication string in format <code>username:password@host:port</code>. This option can be used multiple times for each authenticated host in the PAC file.</p>
   <p><strong>New Feature</strong> Option is only compatible with Sauce Connect Proxy client version 4.6.3+.</p>
   </td>
  </tr>
  <tr>
   <td><code>-T</code>
   </td>
   <td>

    --proxy-tunnel

   </td>
   <td>Uses the proxy configured with<code> -p</code> for the tunnel connection. For more information about the <code>-T</code> option and configuring Sauce Connect with other proxies, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.
  <p>You'll need to use this option if you use a PAC file that contains Sauce Labs DNS names.</p>
   </td>
  </tr>
  <tr>
   <td><code>-s</code>
   </td>
   <td>

    --shared-tunnel

   </td>
   <td>Allows other users of the tunnel owner to use the tunnel. For more information, visit the <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=78414547">Sharing Sauce Connect Proxy Tunnels - Extended Team Management</a> page.
   </td>
  </tr>
  <tr>
   <td><code>-x</code>
   </td>
   <td>

    --rest-url <arg>

   </td>
   <td><p>By default, Sauce Connect Proxy connects to the US Virtual Device and Desktop Cloud (US-West-1). Use this option if you need to connect to a different Sauce Labs cloud (e.g., EU Virtual Device and Desktop Cloud or US Real Device Cloud).</p>
<p>For a full list of Sauce Connect Proxy endpoints, see <a href="https://wiki.saucelabs.com/display/DOCS/Data+Center+Endpoints">Data Center Endpoints</a>.</p>
   </td>
  </tr>
  <tr>
   <td><code>-f</code>
   </td>
   <td>

    --readyfile

   </td>
   <td>File that will be touched to indicate when the tunnel is ready.
   </td>
  </tr>
  <tr>
   <td><code>-a</code>
   </td>
   <td>

    --auth <host:port:user:pwd>

   </td>
   <td>Performs basic authentication when a URL on <code>host:port</code> asks for a username and password. This option can be used multiple times. For examples, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=65607085">Using --auth with Sauce Connect Proxy</a>.
  <p><strong>Basic Authentication Only</strong></p>
  <p>Sauce Connect's <code>--auth</code> flag will only send the header Authorization with a type of 'Basic'.  If a resource responds with the header WWW-Authenticate of a type any other than 'Basic,' your authentication will fail and return a non-200 HTTP response.</p>
  <p>HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect, which means performing basic authentication in this way is disabled for all HTTPS domains passed to <code>--no-ssl-bump-domains</code>argument.</p>
   </td>
  </tr>
  <tr>
   <td><code>-z</code>
   </td>
   <td>

    --log-stats <seconds>

   </td>
   <td>Logs statistics about HTTP traffic every <code>seconds</code>. Information includes bytes transmitted, requests made, and responses received.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --max-logsize <bytes>

   </td>
   <td>Rotates log file after reaching <code>bytes</code> size. Disabled by default.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --doctor

   </td>
   <td>Performs checks to detect possible misconfiguration or problems. Check out <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=65605320">Sauce Connect Proxy Debugging and Diagnostics with --doctor flag</a> for more information about the errors that <code>--doctor</code> will detect and how to resolve them. Please note that when using the <code>--doctor</code> flag, place it at the end of your command for best results.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --no-autodetect

   </td>
   <td>Disables the auto-detection of proxy settings.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --version

   </td>
   <td>Displays version information and exit.
   </td>
  </tr>
  <tr>
   <td><code>-X</code>
   </td>
   <td>

    --scproxy-port <port>

   </td>
   <td>Sets port to use for the built-in HTTP proxy.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --cainfo <cainfo file>

   </td>
   <td>CA certificate bundle to use for verifying REST connections.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --capath <capath dir>

   </td>
   <td>Directory of CA certs to use for verifying REST connections.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --tunnel-cert public

   </td>
   <td><p>Requires that the certificates on the Sauce Labs internal tunnel Virtual Machine be signed by a Certificate Authority instead of self-signed certificates. See <a href="https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Change+Logs">Sauce Connect Proxy Change Logs</a> for details.</p>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --tunnel-cainfo <cainfo file>

   </td>
   <td>CA certificate bundle to use for verifying tunnel connections.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --tunnel-capath <capath dir>

   </td>
   <td>Directory of CA certificates to use for verifying tunnel connections.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --scproxy-read-limit <X>

   </td>
   <td>Rates limit reads in scproxy to X bytes per second. This option can be used to adjust local network transfer rate in order not to overload the tunnel connection.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --scproxy-write-limit <X>

   </td>
   <td>Rates limit writes in scproxy to X bytes per second. This option can be used to adjust local network transfer rate in order not to overload the tunnel connection.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --dns <server[,server..]>

   </td>
   <td>Uses specified name server. To specify multiple servers, separate them with a comma. Use IP addresses, optionally with a port number, the two separated by a colon. Example: <code>--dns 8.8.8.8,8.8.4.4:53</code>.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --no-remove-colliding-tunnels

   </td>
   <td>By default, colliding tunnels will be removed when Sauce Connect is starting up. Use this option to prevent removal of identified tunnels with the same name or any other default tunnels. Jobs will be distributed across all tunnels, enabling load balancing and high availability.
   </td>
  </tr>
  <tr>
   <td><code>-d</code>
   </td>
   <td>

    --pidfile <file>

   </td>
   <td>Specifies the file in which to write the Sauce Connect Proxy process ID. This is useful for programmatically stopping Sauce Connect.
<p>
Sauce Connect Proxy makes a best effort but cannot guarantee that the pidfile will be removed when shutting down Sauce Connect Proxy. With that in mind, relying on the pidfile as a means to monitor Sauce Connect Proxy is not supported.</p>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --metrics-address=address

   </td>
   <td>Defines host:port for the internal web server used to expose client side metrics (default is <code>localhost:8888</code>).
   </td>
  </tr>
  <tr>
   <td><code>-h</code>
   </td>
   <td>

     --help

   </td>
   <td>Displays the help text.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --extra-info '{"inject_job_id": true}'

   </td>
   <td><p>Injects job id and tunnel id as HTTP request headers.</p>
<p>
HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy. Header Injection is disabled for all HTTPS domains passed to <code>--no-ssl-bump-domains</code> argument.</p>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --ocsp log-only

   </td>
   <td>OCSP tunnel certificate validation command that logs errors only; it will not stop Sauce Connect from connecting to a tunnel.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --ocsp attempt

   </td>
   <td>Sets an OCSP tunnel certificate validation "soft-fail" policy that allows Sauce Connect to run unless OCSP server returns a “revoked” status (e.g., timeouts, unknown status). It will not stop Sauce Connect from connecting to a tunnel. Connection to OCSP server will be set to time out after 5 seconds.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --ocsp strict

   </td>
   <td>Sets an OCSP tunnel certificate validation "hard-fail" policy that blocks Sauce Connect from running unless the OCSP server returns a “good” status (e.g., timeouts, revoked certificate, unknown status). It will stop Sauce Connect from connecting to a tunnel. Connection to OCSP server will be set to time out after 10 seconds.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --no-ocsp-verify

   </td>
   <td>OCSP tunnel certificate validation command that allows you to bypass OCSP checks.
   </td>
  </tr>
</table>

**NOTE**: OCSP supports the following Sauce Connect flags: `--kgp-host, --kgp-port, --proxy, --pac, --no-autodetect, --proxy-tunnel, --tunnel-cainfo, --tunnel-capath`. More information: [Sauce Connect Proxy Certificate Handling](https://wiki.saucelabs.com/display/DOCSDEV/Sauce+Connect+Proxy+Certificate+Handling).


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
   <td>

    --no-cert-verify

   </td>
   <td>Disables certificate verification for tunnel/KGP connections.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --no-http-cert-verify

   </td>
   <td>Disables certificate verification for HTTP connections.
   </td>
  </tr>
  <tr>
   <td><code>-r</code>
   </td>
   <td>

    --reconnect <seconds>

   </td>
   <td>Maximum time in seconds to wait between tunnel reconnect attempts.
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>

    --vm-version

   </td>
   <td>Requests a specific tunnel VM version.
   </td>
  </tr>
  <tr>
   <td><code>-o</code>
   </td>
   <td>

    --output-config

   </td>
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
