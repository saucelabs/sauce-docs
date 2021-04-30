---
id: sauce-connect-proxy
title: Sauce Connect Proxy CLI Reference
sidebar_label: Sauce Connect Proxy
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Below is a list of required and optional flags to use on your Sauce Connect command line to specify parameters. See [Basic Setup for Sauce Connect Proxy](/secure-connections/sauce-connect/setup-configuration/basic-setup) for detailed setup instructions and use cases.

:::tip
You can also view these options directly in the command line terminal by running the `--help` flag.
:::

## Required

### `--user`

__Description__: Sets your Sauce Labs username. You can also use the <a href="/secure-connections/sauce-connect/environment-variables">SAUCE_USERNAME environment variable</a> on the command line.

__Shorthand__: `-u`


### `--accessKey`

__Description__: Sets your Sauce Labs API key. You can also use the <a href="/secure-connections/sauce-connect/environment-variables">environment variable</a> SAUCE_ACCESS_KEY on the command line.

__Shorthand__: `-k`


### Data Center Endpoint

__Description__: You'll also need to add the Data Center endpoint for your Sauce Connect tests; either US or EU. Please note that Sauce Connect endpoints are different from the regular device cloud endpoints. See our [Data Center Endpoints](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068) list for more info.

<Tabs
  defaultValue="US Data Center"
  values={[
    {label: 'US Data Center', value: 'US Data Center'},
    {label: 'EU Data Center', value: 'EU Data Center'},
  ]}>

<TabItem value="US Data Center">

Full example that includes all required commands plus the Data Center endpoint:

```bash
$ bin/sc -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx https://saucelabs.com/rest/v1/
```

</TabItem>
<TabItem value="EU Data Center">

Full example that includes all required commands plus the Data Center endpoint:

```bash
$ bin/sc -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx -x https://eu-central-1.saucelabs.com/rest/v1
```

>**NOTE**: Connecting to the EU Data Center requires one extra step: place `-x` immediately before the endpoint URL.

</TabItem>
</Tabs>


## Optional

### `--tunnel-identifier [id]`

__Description__: Assigns an ID to a Sauce Connect Proxy tunnel. Future jobs will use this tunnel only when explicitly specified by the tunnelIdentifier Capability in a Selenium client. **Required**: Your ID must be ASCII.

For information on using `--tunnel-identifier` to run several Sauce Connect Proxy tunnels simultaneously, see [High Availability Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/high-availability). To learn about the syntax for setting `--tunnelIdentifier` as a capability, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=80417492">Test Configuration Options</a>.

__Shorthand__: `-i`

__Example__:

```bash
$ bin/sc -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx https://saucelabs.com/rest/v1/ -i your-tunnel-name
```

### `--config-file <path>`

__Description__: Sets the local path to a YAML file containing a Sauce Connect Proxy configuration. Use this in conjunction with the --config-file option. An example YAML configuration file, **config.yaml**, is included for your reference as part of the <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863">Sauce Connect Proxy download package</a>.

We recommend using a YAML configuration file in production environments, rather than command-line options, as it facilitates tracking configuration changes, managing tunnel-domains and direct-domains options (which can get very long), and securing Sauce Connect Proxy credentials with tighter access control over the config file.

__Shorthand__: `-c`


### `--no-ssl-bump-domains`

__Description__: Disables [SSL Bumping functionality](https://docs.saucelabs.com/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping). Specifying this option will prevent your tests from being interrupted with security warnings by automatically re-signing self-signed and invalid SSL certificates not trusted by stock browsers.

Use this option when you start Sauce Connect Proxy and [specify the domains in comma-separated list](https://docs.saucelabs.com/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands)that you don't want bumped or SSL re-encrypted. You can also specify all, which prevents all domains passing through the tunnel from being bumped.

__Shorthand__: `-B`


### `--no-proxy-caching`

__Description__: Disables caching in Sauce Connect Proxy. All requests will be sent through the tunnel.

__Shorthand__: `-N`


### `--max-missed-acks`

__Description__: Sets the maximum amount of keepalive ACKs that can be missed before the client will trigger a reconnect. The default is 30.

__Shorthand__: `-M`


### `--direct-domains [...]`

__Description__: Use this option along with a <a href="https://docs.saucelabs.com/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands">comma-separated list of domains</a> that you want to be relayed directly through the Internet instead of through the Sauce Connect Proxy tunnel.

__Shorthand__: `-D`


### `--tunnel-domains [...]`

__Description__:  This option does the inverse of --direct-domains; it sends domains that you request through the Sauce Connect Proxy tunnel. Be sure to format your domains as a <a href="https://docs.saucelabs.com/dev/cli/sauce-connect-proxy#formatting-domains-in-your-command-lines">comma-separated list</a>.

__Shorthand__: `-t`


### `--verbose`

__Description__:  Enables verbose debugging. Use this to output HTTP headers.

> **NOTE**: `-vv` (very verbose), which outputs HTTP headers and KGP logs, is meant for troubleshooting purposes only. It is system-resource demanding and adversely affects Sauce Connect Proxy performance.

__Shorthand__: `-v`


### `--fast-fail-regexps [...]`

__Description__:  Tests for application and site degradation based on missing assets or resources. It can be used to simulate non-loading of scripts, styles, or other resources. Use this option followed by a comma-separated list of regular expressions. Requests with URLs matching one of these will get dropped instantly and will not go through the tunnel. See <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365877#SauceConnectProxyFAQs-HowcanIuseSauceConnectProxytotestgratefuldegradation">Using Sauce Connect Proxy to Test Graceful Degradation</a> for an example.

__Shorthand__: `-F`


### `--logfile [file]`

__Description__: Captures the Sauce Connect Proxy logs in file. If a path is not specified in file, the file location will default to the location where the Sauce Connect Proxy executable can be found on your machine.

__Shorthand__: `-l`


### `--se-port [port]`

__Description__: Sets the port on which [Sauce Connect Proxy's Selenium relay](disabled unless specified) will listen for requests. Selenium commands reaching Sauce Connect Proxy on this port will be relayed to Sauce Labs securely and reliably through Sauce Connect Proxy's tunnel. This feature is disabled unless specified.

__Shorthand__: `-P`


### `--proxy [host:port]`

__Description__: Sets the proxy host and port that Sauce Connect Proxy should use to connect to the Sauce Labs REST API and test traffic. For information about the -p option and configuring Sauce Connect Proxy with other proxies, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).

Alternatively, you can use corresponding [environment variables](/secure-connections/sauce-connect/environment-variables) `HTTP_PROXY`, `http_proxy`, `all_proxy,` or `ALL_PROXY `on the command line.

__Shorthand__: `-p`


### `--proxy-userpwd [user:pwd]`

__Description__: Requires username and password to be sent via basic authentication to access the proxy configured with `-p (--proxy)`. For more information, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.

**NOTE**: Sauce Connect Proxy versions older than 4.6.1 do <em>not</em> support the -p option combined with --pac. Update to the latest version <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863">here</a>.

__Shorthand__: `-w`


### `--pac [url]`

__Description__: Defines proxy auto-configuration (PAC) URL. You can input a http(s) or local file://URL. Absolute paths are required when specifying a local PAC file (e.g., file:///Users/JohnSmith/Desktop/MyPac.pac). For more information, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.

__Shorthand__: n/a



### `--pac-auth`

__Description__: Supplies PAC authentication string in format `username:password@host:port`. This option can be used multiple times for each authenticated host in the PAC file. This option is compatible only with Sauce Connect Proxy versions 4.6.3 and higher.

__Shorthand__: n/a


### `--proxy-tunnel`

__Description__: Uses the proxy configured with `-p` for the tunnel connection. For more information about the `-T `option and configuring Sauce Connect Proxy with other proxies, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717562">Sauce Connect Proxy Setup with Additional Proxies</a>.

You'll need to use this option if you have a PAC file that contains Sauce Labs DNS names.

__Shorthand__: `-T`


### `--shared-tunnel`

__Description__: Allows other users of the tunnel owner to use the tunnel. For more information, visit the <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=78414547">Sharing Sauce Connect Proxy Tunnels - Extended Team Management</a> page.

__Shorthand__: `-s`



### `--rest-url [arg]`

__Description__: Allows you to connect to a different Sauce Labs cloud (e.g., EU Virtual Device and Desktop Cloud or US Real Device Cloud) other than the default, US-West-1. For a full list of Sauce Connect Proxy endpoints, see <a href="https://wiki.saucelabs.com/display/DOCS/Data+Center+Endpoints">Data Center Endpoints</a>.

__Shorthand__: `-x`


### `--readyfile`

__Description__: Sets file that will be touched to indicate when the tunnel is ready.

__Shorthand__: `-f`


### `--auth [host:port:user:pwd]`

__Description__: Performs basic authentication when a URL on host:port asks for a username and password. This option can be used multiple times. For examples, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=65607085">Using `--auth` with Sauce Connect Proxy</a>.

Sauce Connect Proxy's `--auth` flag will only send the header Authorization with a type of 'Basic'.  If a resource responds with the header WWW-Authenticate of a type any other than 'Basic,' your authentication will fail and return a non-200 HTTP response.
HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy, which means performing basic authentication in this way is disabled for all HTTPS domains passed to `--no-ssl-bump-domains` argument.

__Shorthand__: `-a`


### `--auth [host:port:user:pwd]`

__Description__: Performs basic authentication when a URL on host:port asks for a username and password. This option can be used multiple times. For examples, see <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=65607085">Using `--auth` with Sauce Connect Proxy</a>.

Sauce Connect Proxy's `--auth` flag will only send the header Authorization with a type of 'Basic'.  If a resource responds with the header WWW-Authenticate of a type any other than 'Basic,' your authentication will fail and return a non-200 HTTP response.
HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy, which means performing basic authentication in this way is disabled for all HTTPS domains passed to `--no-ssl-bump-domains` argument.

__Shorthand__: `-a`



### `--log-stats [seconds]`

__Description__: Logs statistics about HTTP traffic every seconds. Information includes bytes transmitted, requests made, and responses received.

__Shorthand__: `-z`



### `--max-logsize [bytes]`

__Description__: Rotates log file after reaching bytes size. Disabled by default.

__Shorthand__: n/a


### `--doctor`

__Description__: Performs checks to detect possible misconfiguration or problems. Check out <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=65605320">Sauce Connect Proxy Debugging and Diagnostics with --doctor flag</a> for more information about the errors that --doctor will detect and how to resolve them. Please note that when using the --doctor flag, place it at the end of your command for best results.

__Shorthand__: n/a


### `--no-autodetect`

__Description__: Disables the auto-detection of proxy settings.

__Shorthand__: n/a


### `--version`

__Description__: Displays version information and exit.

__Shorthand__: n/a  



### `--scproxy-port [port]`

__Description__: Sets port to use for the built-in HTTP proxy.

__Shorthand__: `-X`


### `--cainfo [cainfo file]`

__Description__: CA certificate bundle to use for verifying REST connections.

__Shorthand__: n/a  


### `--capath [capath dir]`

__Description__: Directory of CA certs to use for verifying REST connections.

__Shorthand__: n/a  



### `--tunnel-cert public`

__Description__: Use this to require certificates on the Sauce Labs internal tunnel Virtual Machine to be signed by a Certificate Authority instead of self-signed certificates.

__Shorthand__: n/a  


### `--tunnel-cainfo [cainfo file]`

__Description__: CA certificate bundle to use for verifying tunnel connections.

__Shorthand__: n/a  


### `--tunnel-capath [capath dir]`

__Description__: Directory of CA certificates to use for verifying tunnel connections.

__Shorthand__: n/a  


### `--scproxy-read-limit [bytes per second]`

__Description__: Rates limit reads in scproxy to the number of bytes per second that you specify. This option can be used to adjust local network transfer rate to prevent overloading the tunnel connection.


### `--scproxy-write-limit [bytes per second]`

__Description__: Rates limit writes in scproxy to the number of bytes per second that you specify. This option can be used to adjust local network transfer rate to prevent overloading the tunnel connection.

__Shorthand__: n/a  


### `--dns [server[,server..]]`

__Description__: Uses specified name server. To specify multiple servers, separate them with a comma. Use IP addresses, optionally with a port number, the two separated by a colon. Example: --dns 8.8.8.8,8.8.4.4:53.

__Shorthand__: n/a  


### `--no-remove-colliding-tunnels`

__Description__: Use this option to prevent removal of <a href="https://wiki.saucelabs.com/pages/viewpage.action?pageId=64717567">colliding tunnels</a>, which are removed when Sauce Connect Proxy starts up. <em>Colliding tunnels</em> are tunnels with the same tunnel ID name. This includes unnamed (default) tunnels. Jobs will be distributed across all tunnels, enabling load balancing and high availability.

__Shorthand__: n/a  


### `--pidfile [file]`

__Description__: Specifies the file where you want the Sauce Connect Proxy process ID to be written. This is useful for programmatically stopping Sauce Connect Proxy. Although Sauce Connect Proxy makes a best effort, we cannot guarantee that the pidfile will be removed when shutting down Sauce Connect Proxy. With that in mind, relying on the pidfile as a means to monitor Sauce Connect Proxy is not supported.

__Shorthand__: `-d`



### `--metrics-address=address`

__Description__: Use this option to define the host:port for the internal web server used to expose client side metrics. The default is `localhost:8888`.

__Shorthand__: n/a


### `--help`

__Description__: Displays the Help text.

__Shorthand__: `-h`


### `--extra-info '["inject_job_id":true]'`

__Description__: Injects the job id and tunnel id as HTTP request headers.
HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy and all HTTPS domains passed to `--no-ssl-bump-domains` argument.

__Shorthand__: n/a


### `--ocsp log-only`

__Description__: Sets an OCSP tunnel certificate validation "log-only" policy, which specifically logs errors.

__Shorthand__: n/a


### `--ocsp attempt`

__Description__: Sets an OCSP tunnel certificate validation "soft-fail" policy that allows Sauce Connect Proxy to run unless OCSP server returns a “revoked” status (e.g., timeouts, unknown status). It will not stop Sauce Connect Proxy from connecting to a tunnel. Connection to OCSP server will be set to time out after 5 seconds.

__Shorthand__: n/a



### `--ocsp strict`

__Description__: Sets an OCSP tunnel certificate validation "hard-fail" policy that blocks Sauce Connect Proxy from running unless the OCSP server returns a “good” status (e.g., timeouts, revoked certificate, unknown status). It will stop Sauce Connect Proxy from connecting to a tunnel. Connection to OCSP server will be set to time out after 10 seconds.

__Shorthand__: n/a



### `--no-ocsp-verify`

__Description__: Sets an OCSP tunnel certificate validation "bypass" policy that allows you to skip OCSP checks.

__Shorthand__: n/a    

>**NOTE**: OCSP supports the following Sauce Connect Proxy flags: `--kgp-host`, `--kgp-port`, `--proxy`, `--pac`, `--no-autodetect`, `--proxy-tunnel`, `--tunnel-cainfo`, `--tunnel-capath`. More information: [Sauce Connect Proxy Certificate Handling](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365729).


## Formatting Domains in Your Command Lines

Here are some guidelines to follow when formatting domains:

* Use only the domain name. Do not precede it with `http:` or `https:`
  * Example: `mydomain.com`
* Make sure your comma-separated list of domains doesn't include any spaces.
  * Example, `mydomain.com,saucelabs.com,mysite.com`
* Prefix domain names with `*.` or simply `.` to match all its subdomains.
  * Example: You could refer to both `wiki.saucelabs.com` and `my.saucelabs.com` with "`*.saucelabs.com"` or` ".saucelabs.com"`. Enclose the argument in quotes to prevent shell expansion of asterisk.
* If you don't want any domains to be SSL re-encrypted, you can specify `all` with the argument (i.e., `-B all` or `--no-ssl-bump-domains all`)
* WebSockets domains are not compatible with SSL bumping, so you'll need to disable SSL Bumping for them


## Additional Resources

* [Downloading Sauce Connect Proxy](https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863)
* [Sauce Connect Proxy Environment Variables](/secure-connections/sauce-connect/environment-variables)
* [Sauce Connect Proxy Setup and Configuration](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+Setup+and+Configuration)
* [Sauce Connect Proxy Network Security](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy+and+Network+Security)
* [Sauce Connect Proxy Changelog](secure-connections/sauce-connect/changelog)

