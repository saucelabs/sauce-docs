---
id: sauce-connect-proxy
title: Sauce Connect Proxy CLI Reference
sidebar_label: Sauce Connect Proxy
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Below is a list of required and optional flags to use on your Sauce Connect command line to specify parameters. See [Basic Setup for Sauce Connect Proxy](/secure-connections/sauce-connect/setup-configuration/basic-setup) for detailed setup instructions and use cases.

:::tip
View these options directly in the command line terminal by running the `--help` flag.
:::

## Required

### `--user`

__Description__: Sets your Sauce Labs username. You can also use the [`SAUCE_USERNAME` environment variable](/secure-connections/sauce-connect/environment-variables) on the command line.

__Shorthand__: `-u`
<br/>


### `--accessKey`

__Description__: Sets your Sauce Labs API key. You can also use the [`SAUCE_ACCESS_KEY` environment variable](/secure-connections/sauce-connect/environment-variables) on the command line.

__Shorthand__: `-k`
<br/>

### Data Center Endpoint

__Description__: depending on the Data Center location of the device you're testing on (US or EU), you may need to add a [Data Center Endpoint](/basics/data-center-endpoints/data-center-endpoints).

__Examples__:

<Tabs
  defaultValue="US Data Center"
  values={[
    {label: 'US Data Center', value: 'US Data Center'},
    {label: 'EU Data Center', value: 'EU Data Center'},
  ]}>

<TabItem value="US Data Center">

No endpoint needed. Connection to the US Data Center occurs by default. So your only required options would be username and access key.

```bash
$ bin/sc -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

</TabItem>
<TabItem value="EU Data Center">

To connect to the EU Data Center, add the endpoint URL and place an `-x` immediately before it. Here's a full example that includes all required options, plus the EU Data Center endpoint:

```bash
$ bin/sc -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx -x https://eu-central-1.saucelabs.com/rest/v1
```

</TabItem>
</Tabs>
<br/>

See the **Tunnels** page for quick start info.

## Optional

### `--tunnel-identifier [id]`

__Description__: assigns an ID to a Sauce Connect Proxy tunnel. While not required, this option is very strongly recommended. Future jobs will use this tunnel only when explicitly specified by the `tunnelIdentifier` Capability in a Selenium client.

For information on using `--tunnel-identifier` to run several Sauce Connect Proxy tunnels simultaneously, see [High Availability Sauce Connect Proxy Setup](/secure-connections/sauce-connect/setup-configuration/high-availability). To learn about the syntax for setting `--tunnelIdentifier` as a capability, see [Test Configuration Options](/dev/test-configuration-options).

Your ID must be ASCII.

__Shorthand__: `-i`

__Example__:

```bash
$ bin/sc -u john.smith -k ab015c1e-xxxx-xxxx-xxxx-xxxxxxxxxxx https://saucelabs.com/rest/v1/ -i your-tunnel-name
```
<br/>

### `--config-file <path>`

__Description__: sets the local path to a YAML file containing a Sauce Connect Proxy configuration. Use this in conjunction with the --config-file option. An example YAML configuration file, **config.yaml**, is included for your reference as part of the [Sauce Connect Proxy download package](/secure-connections/sauce-connect/installation).

We recommend using a YAML configuration file in production environments, rather than command-line options, as it facilitates tracking configuration changes, managing tunnel-domains and direct-domains options (which can get very long), and securing Sauce Connect Proxy credentials with tighter access control over the config file.

__Shorthand__: `-c`
<br/>

### `--no-ssl-bump-domains`

__Description__: disables [SSL Bumping functionality](https://docs.saucelabs.com/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping). Specifying this option will prevent your tests from being interrupted with security warnings by automatically re-signing self-signed and invalid SSL certificates not trusted by stock browsers.

Use this option when you start Sauce Connect Proxy and [specify the domains in comma-separated list](https://docs.saucelabs.com/dev/cli/sauce-connect-proxy#formatting-domains-in-your-commands)that you don't want bumped or SSL re-encrypted. You can also specify all, which prevents all domains passing through the tunnel from being bumped.

__Shorthand__: `-B`
<br/>

### `--no-proxy-caching`

__Description__: disables caching in Sauce Connect Proxy. All requests will be sent through the tunnel.

__Shorthand__: `-N`
<br/>

### `--max-missed-acks`

__Description__: sets the maximum amount of keepalive ACKs that can be missed before the client will trigger a reconnect. The default is 30.

__Shorthand__: `-M`
<br/>

### `--direct-domains [...]`

__Description__: Use this option along with a [comma-separated list of domains](https://docs.saucelabs.com/dev/cli/sauce-connect-proxy#formatting-domains-in-your-command-lines). that you want to be relayed directly through the Internet instead of through the Sauce Connect Proxy tunnel.

__Shorthand__: `-D`
<br/>

### `--tunnel-domains [...]`

__Description__: does the inverse of `--direct-domains`; it sends domains that you request through the Sauce Connect Proxy tunnel. Be sure to format your domains as a [comma-separated list](https://docs.saucelabs.com/dev/cli/sauce-connect-proxy#formatting-domains-in-your-command-lines).

__Shorthand__: `-t`
<br/>

### `--verbose`

__Description__: enables verbose debugging. Use this to output HTTP headers.

> **NOTE**: `-vv` (very verbose), which outputs HTTP headers and KGP logs, is meant for troubleshooting purposes only. It is system-resource demanding and adversely affects Sauce Connect Proxy performance.

__Shorthand__: `-v`
<br/>

### `--fast-fail-regexps [...]`

__Description__:  Tests for application and site degradation based on missing assets or resources. It can be used to simulate non-loading of scripts, styles, or other resources. Use this option followed by a comma-separated list of regular expressions. Requests with URLs matching one of these will get dropped instantly and will not go through the tunnel. See Using [Sauce Connect Proxy to Test Graceful Degradation](https://docs.saucelabs.com/secure-connections/sauce-connect/faq#how-can-i-use-sauce-connect-proxy-to-test-graceful-degradation) for an example.

__Shorthand__: `-F`
<br/>

### `--logfile [file]`

__Description__: captures the Sauce Connect Proxy logs in a file. If a path is not specified in file, the file location will default to the location where the Sauce Connect Proxy executable can be found on your machine.

__Shorthand__: `-l`
<br/>

### `--se-port [port]`

__Description__: sets the port on which [Sauce Connect Proxy's Selenium relay](https://docs.saucelabs.com/secure-connections/sauce-connect/proxy-tunnels#using-the-selenium-relay) will listen for requests. Selenium commands reaching Sauce Connect Proxy on this port will be relayed to Sauce Labs securely and reliably through Sauce Connect Proxy's tunnel. This feature is disabled unless specified.

__Shorthand__: `-P`
<br/>

### `--proxy [host:port]`

__Description__: Sets the proxy host and port that Sauce Connect Proxy should use to connect to the Sauce Labs REST API and test traffic. For information about the -p option and configuring Sauce Connect Proxy with other proxies, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).

Alternatively, you can use corresponding [environment variables](/secure-connections/sauce-connect/environment-variables) `HTTP_PROXY`, `http_proxy`, `all_proxy,` or `ALL_PROXY `on the command line.

__Shorthand__: `-p`
<br/>

### `--proxy-userpwd [user:pwd]`

__Description__: Requires username and password to be sent via basic authentication to access the proxy configured with `-p (--proxy)`. For more information, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).

**NOTE**: Sauce Connect Proxy versions older than 4.6.1 do not support the `-p` option combined with `--pac`. Update to the latest version [here](/secure-connections/sauce-connect/installation).

__Shorthand__: `-w`
<br/>

### `--pac [url]`

__Description__: Defines proxy auto-configuration (PAC) URL. You can input a http(s) or local file://URL. Absolute paths are required when specifying a local PAC file. For more information, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).

__Shorthand__: n/a

__Example__:
```bash
--pac file:///Users/JohnSmith/Desktop/MyPac.pac
```
<br/>

### `--pac-auth`

__Description__: Supplies PAC authentication string in format `username:password@host:port`. This option can be used multiple times for each authenticated host in the PAC file. This option is compatible only with Sauce Connect Proxy versions 4.6.3 and higher.

__Shorthand__: n/a
<br/>

### `--proxy-tunnel`

__Description__: Uses the proxy configured with `-p` for the tunnel connection. For more information about the `-T `option and configuring Sauce Connect Proxy with other proxies, see [Sauce Connect Proxy Setup with Additional Proxies](/secure-connections/sauce-connect/setup-configuration/additional-proxies).

You'll need to use this option if you have a PAC file that contains Sauce Labs DNS names.

__Shorthand__: `-T`
<br/>

### `--shared-tunnel`

__Description__: Allows other users of the tunnel owner to use the tunnel. For more information, see [Sharing Sauce Connect Proxy Tunnels - Extended Team Management](/basics/acct-team-mgmt/sauce-connect-proxy-tunnels).

__Shorthand__: `-s`
<br/>

### `--rest-url [arg]`

__Description__: Allows you to connect to a different Sauce Labs cloud (e.g., EU Virtual Device and Desktop Cloud or US Real Device Cloud) other than the default, US-West-1. For a full list of Sauce Connect Proxy endpoints, see [Data Center Endpoints](/basics/data-center-endpoints/data-center-endpoints).

__Shorthand__: `-x`
<br/>

### `--readyfile`

__Description__: Sets file that will be touched to indicate when the tunnel is ready.

__Shorthand__: `-f`
<br/>

### `--auth [host:port:user:pwd]`

__Description__: Performs basic authentication when a URL on host:port asks for a username and password. This option can be used multiple times. For examples, see [Using `--auth` with Sauce Connect Proxy](https://docs.saucelabs.com/secure-connections/sauce-connect/security-authentication/index.html#authentication-using---auth).

Sauce Connect Proxy's `--auth` flag will only send the header Authorization with a type of 'Basic'. If a resource responds with the header WWW-Authenticate of a type any other than 'Basic,' your authentication will fail and return a non-200 HTTP response.
HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy, which means performing basic authentication in this way is disabled for all HTTPS domains passed to `--no-ssl-bump-domains` argument.

__Shorthand__: `-a`
<br/>

### `--log-stats [seconds]`

__Description__: Logs statistics about HTTP traffic every seconds. Information includes bytes transmitted, requests made, and responses received.

__Shorthand__: `-z`
<br/>

### `--max-logsize [bytes]`

__Description__: After reaching the max bytes size, creates a new log and appends an order number to the previous log. Disabled by default.

__Shorthand__: n/a
<br/>

### `--doctor`

__Description__: Performs checks to detect possible misconfiguration or problems. Check out [Sauce Connect Proxy Debugging and Diagnostics with `--doctor` flag](https://docs.saucelabs.com/secure-connections/sauce-connect/troubleshooting#debugging-and-diagnostics-with---doctor-flag) for more information about the errors that `--doctor` will detect and how to resolve them. Please note that when using the `--doctor` flag, place it at the end of your command for best results.


__Shorthand__: n/a
<br/>

### `--no-autodetect`

__Description__: Disables the auto-detection of proxy settings.

__Shorthand__: n/a
<br/>

### `--version`

__Description__: Displays version information and exit.

__Shorthand__: n/a  
<br/>

### `--scproxy-port [port]`

__Description__: Sets port to use for the built-in HTTP proxy.

__Shorthand__: `-X`
<br/>

### `--cainfo [cainfo file]`

__Description__: CA certificate bundle to use for verifying REST connections.

__Shorthand__: n/a  
<br/>

### `--capath [capath dir]`

__Description__: Directory of CA certs to use for verifying REST connections.

__Shorthand__: n/a  
<br/>

### `--tunnel-cert public`

__Description__: Use this to require certificates on the Sauce Labs internal tunnel Virtual Machine to be signed by a Certificate Authority instead of self-signed certificates.

__Shorthand__: n/a  
<br/>

### `--tunnel-cainfo [cainfo file]`

__Description__: CA certificate bundle to use for verifying tunnel connections.

__Shorthand__: n/a  
<br/>

### `--tunnel-capath [capath dir]`

__Description__: Directory of CA certificates to use for verifying tunnel connections.

__Shorthand__: n/a  
<br/>

### `--scproxy-read-limit [bytes per second]`

__Description__: Rates limit reads in scproxy to the number of bytes per second that you specify. This option can be used to adjust local network transfer rate to prevent overloading the tunnel connection.

__Shorthand__: n/a  
<br/>

### `--scproxy-write-limit [bytes per second]`

__Description__: Rates limit writes in scproxy to the number of bytes per second that you specify. This option can be used to adjust local network transfer rate to prevent overloading the tunnel connection.

__Shorthand__: n/a  
<br/>


### `--dns [server[,server..]]`

__Description__: Uses specified name server. To specify multiple servers, separate them with a comma. Use IP addresses, optionally with a port number, the two separated by a colon.

__Shorthand__: n/a  

__Example__:

```bash
--dns 8.8.8.8,8.8.4.4:53
```
<br/>


### `--no-remove-colliding-tunnels`

__Description__: Use this option to prevent the removal of [colliding tunnels](https://docs.saucelabs.com/secure-connections/sauce-connect/setup-configuration/high-availability#what-are-colliding-tunnels), which would otherwise happen by default when Sauce Connect Proxy starts up. ***Colliding tunnels*** are tunnels with the same tunnel ID name. This includes unnamed (default) tunnels. Jobs will be distributed across all tunnels, enabling load balancing and high availability.

__Shorthand__: n/a  
<br/>

### `--pidfile [file]`

__Description__: specifies the file where you want the Sauce Connect Proxy process ID (pid) to be written. This is useful for programmatically stopping Sauce Connect Proxy. Although Sauce Connect Proxy makes a best effort, we cannot guarantee that the pidfile will be removed when shutting down Sauce Connect Proxy. With that in mind, relying on the pidfile as a means to monitor Sauce Connect Proxy is not supported.

__Shorthand__: `-d`
<br/>


### `--metrics-address=address`

__Description__: Use this option to define the host:port for the internal web server used to expose client side metrics. The default is `localhost:8888`.

__Shorthand__: n/a
<br/>

### `--help`

__Description__: Displays the Help text.

__Shorthand__: `-h`
<br/>

### `--extra-info '["inject_job_id":true]'`

__Description__: Injects the job id and tunnel id as HTTP request headers.
HTTP Header Injection is disabled for SSL domains that are not re-encrypted by Sauce Connect Proxy and all HTTPS domains passed to `--no-ssl-bump-domains` argument.

__Shorthand__: n/a
<br/>


### `--ocsp log-only`

__Description__: Sets an OCSP tunnel certificate validation "log-only" policy, which specifically logs errors.

__Shorthand__: n/a
<br/>

### `--ocsp attempt`

__Description__: Sets an OCSP tunnel certificate validation "soft-fail" policy that allows Sauce Connect Proxy to run unless OCSP server returns a “revoked” status (e.g., timeouts, unknown status). It will not stop Sauce Connect Proxy from connecting to a tunnel. Connection to OCSP server will be set to time out after 5 seconds.

__Shorthand__: n/a
<br/>

### `--ocsp strict`

__Description__: Sets an OCSP tunnel certificate validation "hard-fail" policy that blocks Sauce Connect Proxy from running unless the OCSP server returns a “good” status (e.g., timeouts, revoked certificate, unknown status). It will stop Sauce Connect Proxy from connecting to a tunnel. Connection to OCSP server will be set to time out after 10 seconds.

__Shorthand__: n/a
<br/>


### `--no-ocsp-verify`

__Description__: Sets an OCSP tunnel certificate validation "bypass" policy that allows you to skip OCSP checks.

__Shorthand__: n/a    

>**NOTE**: OCSP supports the following Sauce Connect Proxy flags: `--kgp-host`, `--kgp-port`, `--proxy`, `--pac`, `--no-autodetect`, `--proxy-tunnel`, `--tunnel-cainfo`, `--tunnel-capath`. More information: [Sauce Connect Proxy Certificate Handling](https://docs.saucelabs.com/secure-connections/sauce-connect/security-authentication#certificate-handling).
<br/>

## Formatting Domains in Your Command Lines

Here are some guidelines to follow when formatting domains:

* Use only the domain name. Do not precede it with `http:` or `https:`
  * Example: `mydomain.com`
* Make sure your comma-separated list of domains doesn't include any spaces.
  * Example, `mydomain.com,saucelabs.com,mysite.com`
* Prefix domain names with `*.` or simply `.` to match all its subdomains.
  * Example: You could refer to `docs.saucelabs.com` and `my.saucelabs.com` as "`*.saucelabs.com"` or` ".saucelabs.com"`. Enclose the argument in quotes to prevent shell expansion of asterisk.
* If you don't want any domains to be SSL re-encrypted, you can specify `all` with the argument (i.e., `-B all` or `--no-ssl-bump-domains all`)
* WebSockets domains are not compatible with SSL bumping, so you'll need to disable SSL Bumping for them


## Additional Resources

* [Downloading Sauce Connect Proxy](/secure-connections/sauce-connect/installation)
* [Sauce Connect Proxy Environment Variables](/secure-connections/sauce-connect/environment-variables)
* [Sauce Connect Proxy Setup and Configuration](/secure-connections/sauce-connect/setup-configuration/setup-configuration)
* [Sauce Connect Proxy Network Security](/secure-connections/sauce-connect/security-authentication)
* [Sauce Connect Proxy Changelog](secure-connections/sauce-connect/changelog)
