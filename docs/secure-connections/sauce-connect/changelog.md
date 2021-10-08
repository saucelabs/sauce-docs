---
id: changelog
title: Sauce Connect Proxy Changelog
sidebar_label: Changelog
---

For best performance and to take advantage of our latest security enhancements, upgrade to the [latest version](/secure-connections/sauce-connect/installation).

## v4.6.4 and above

Changelogs for Sauce Connect v4.6.4 and above are hosted [here](https://changelog.saucelabs.com/en?category=sauce%20connect).

## v4.6.3

Release Date: December 9, 2020.

#### New Features

**sc client configuration now stored in DB**: sc client may be configured via command-line arguments, config file or any combination of both. Configuration will be stored in DB regardless of the origin to enable better support and debugging.

**sc client now checks for server messages during startup sequence**: Info messages will include newly released versions info, deprecation warnings, client platform support information. This feature would allow SC team to communicate updates directly sc client users.

**More sc client startup log**: The log now shows explicit messages about sc client failure to connect to SC server at tunnel startup time.

**Basic authentication for multiple upstream proxies in a PAC file is now supported**: Use the `--pac-auth <username:password@host:port>` command-line option. The option can be used multiple times for each authenticated host in the PAC file.

#### Internal Tooling and Improvements

* Moved sauceproxy-rest library to GitLab, while keeping it mirrored to GitHub for backwards compatibility.
* Changed sauceproxy-rest library status from open-source to private to avoid exposing internal API that is subject to change.
* Added logging of what certificate is returned from REST connection, useful for identifying proxy or firewall that does https inspection.
* Added logging when loading certificates from keychain on OS X.
* Added dev flags to debug SC over SSL+SNI connection without DNS resolution of KGP servername.

#### Bug Fixes

* You can now use [OpenSSL library function flags](https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_set_options.html) to control TLS protocol versions used by the connection between KGP client and server.

* You can now start tunnels using `--cainfo` and `--capath` command-line options at tunnel startup. These options were previously only used by `Doctor`.
    * If you have your certificates in a non-default system location, you no longer need to use the `--no-http-cert-verify` workaround.
    * If you're using MITM, you no longer need to enable [SSL Bumping](/secure-connections/sauce-connect/security-authentication) for connections to Sauce Labs REST.

* We've removed `Doctor` attempts to resolve non-existent maki hosts   
  * Attempts to run domain name resolution check for hard-coded defunct maki hosts created confusing errors; removed these checks.

#### Known Issues

* When attempting to run two or more instances of sc client on the same host in High Availability mode, second and subsequent instances will fail to start with error due to conflicting SC metrics port assignment.
  * As a workaround, use the `--metrics-address :0` command-line option in your sc client.


## v4.6.2

Release Date: May 31, 2020.

#### Bug Fixes

* Sauce Connect now correctly handles server response when parsing `HEAD` requests that use a `Transfer-Encoding: chunked` header.


## v4.6.1

Release Date: May 18, 2020.

#### New Features

We are changing how we manage SSL certificates to improve assurance and compatibility with SSL-inspecting web proxies.

**Public Certificates are now supported**: We've enabled support for public certificates and deprecated support for private certificates. You'll need to ensure that the operating system on which you're running Sauce Connect has its certificate store set up correctly:
* Linux
   * OpenSSL stores CA certificates, which are accessed by the sc client.
   * The default OpenSSL certificates directory can be found using: `openssl version -d`.
   * Set the `SSL_CERT_DIR` environment variable to this folder or another containing certificates in PEM format.
   * Optional: Set the `SSL_CERT_FILE` environment variable to a file of certificates in PEM format.
   * Certificates will be automatically updated, manual certificate update can be achieved via the command-line `update-ca-certificates`.
* Windows
   * The sc client loads certificates directly from the CA and ROOT Windows Store
   * Windows Update will keep certificates up to date. See the following Microsoft docs for more information:
      * <a href="https://docs.microsoft.com/en-us/windows/desktop/secauthn/certificate-stores">Microsoft Certificate Stores</a>
      * <a href="https://docs.microsoft.com/en-us/windows/win32/seccertenroll/about-certificate-directory#certificate-stores">Microsoft Certificate Directory</a>
* macOS and OS X
   * Certificates will be read from the macOS Keychain Access automatically.
   * Alternatively, if the Homebrew OpenSSL package is installed, you can use the default `cert.pem` file, `--tunnel-cainfo /usr/local/etc/openssl/cert.pem`.

**OCSP tunnel certificate validation**: This feature lets the sc client validate that the tunnel endpoint's public certificate has not been revoked. OCSP relies on Public Key Infrastructure and needs to make additional HTTP requests to OCSP servers associated with the tunnel endpoint’s certificate chain. This is configurable via our new [OCSP-specific command-line options](/dev/cli/sauce-connect-proxy) and [existing flags compatible with OCSP](/secure-connections/sauce-connect/security-authentication).

**Selenium Relay is no longer enabled by default**: You can still [enable this feature](/dev/cli/sauce-connect-proxy) on a specified port using the `--se-port` option.

**App Notarization - macOS Catalina support**: Effective with this release, all Sauce Connect Proxy executables will be Apple-notarized to support the more stringent security standards introduced by macOS Catalina.

#### Bug Fixes

* Fixed the compatibility of `--pac`, `--proxy` and `--proxy-userpwd` flags. You can now use them in the same command line.
* Characters used in tunnel identifier names must now be only ASCII, so that they're captured correctly in the Sauce Labs UI.
* Removed ANSI color codes from the Sauce Connect log to improve readability.
* Fixed WebSockets handling functionality on HTTP/2 servers.


## v4.6.0 and below

v4.6.0 and below, which were supporting Private Certificates, reached end of life and [are no longer available for download](/secure-connections/sauce-connect/installation/#all-sauce-connect-proxy-versions-below-460-which-were-supporting-private-certificates-reached-end-of-life-and-are-no-longer-available-for-download).

To align with security best practices, Sauce Connect Proxy began supporting certificates signed by Public Certificate Authorities effective with v4.6.1.

To request historical information, please contact our [Support Team](https://support.saucelabs.com/).
