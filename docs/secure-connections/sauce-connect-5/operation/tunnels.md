---
id: tunnels
title: Using Sauce Connect 5 Tunnels
sidebar_label: Using Tunnels
---

## Improving Sauce Connect Performance {#sc5perf}

During testing, your website or app may load resources (e.g. tracking services, images/videos, advertisements), which can impact page load times and even cause tests to fail.
If these resources are not needed at all for testing purposes, you can disable the traffic to improve performance.

See [How to Remove Third Party Resources](http://elementalselenium.com/tips/66-blacklist) for more information.

### Tuning Sauce Connect Traffic

If you're using Sauce Connect, the additional network hops required to access external resources have the potential to slow test execution dramatically.
When Sauce Connect is used, all the traffic is forwarded over the Sauce Connect connection.
The following flags provide fine control over the Sauce Connect tunneled traffic:

- [`--tunnel-domains`](/dev/cli/sauce-connect-5/run/#tunnel-domains)
- [`--direct-domains`](/dev/cli/sauce-connect-5/run/#direct-domains)
- [`--deny-domains`](/dev/cli/sauce-connect-5/run/#deny-domains)

#### Tunnel Domains

[`--tunnel-domains`](/dev/cli/sauce-connect-5/run/#tunnel-domains) flag allows to specify requests which should always be forwarded from the Sauce Labs hosted browser to customer-side over the Sauce Connect Proxy connection.
Starting Sauce Connect Proxy with [`--tunnel-domains`](/dev/cli/sauce-connect-5/run/#tunnel-domains) implies that requests that don't match "tunnel domains" will be forwarded over the public internet.
This is the recommended option for the best performance since it minimizes the expensive tunnelled traffic and uses it only for the internal domains that are not publicly available.

#### Direct Domains

[`--direct-domains`](/dev/cli/sauce-connect-5/run/#direct-domains) flag allows to specify requests which should always be forwarded from the Sauce Labs browser to their origin server over the public internet.
Starting Sauce Connect with [`--direct-domains`](/dev/cli/sauce-connect-proxy/#--tunnel-domains) implies that requests that don't match "direct domains" will be forwarded to customer-side over the Sauce Connect connection.
This option, in general, is not recommended for performance, with the exception of the cases where known large requests can be forwarded to the public internet.

#### Fast-fail Domains

[`--deny-domains`](/dev/cli/sauce-connect-5/run/#deny-domains) flag allows to specify requests which should be immediately dropped.
Unlike tunnel/direct domains, this option takes regular expressions and provides a powerful way to disable unwanted traffic.
It can also be used to simulate non-loading of scripts, styles, or other resources.

#### Configuring Tunnel or Direct Domains

- Use only the domain name. Do not precede it with the scheme like `http://` or `https://`.
  - Example: `mydomain.com`
- Use wildcards to include subdomains by prefixing domain name with a dot `.`
  - Example: `.mydomain.com` will include `sub.mydomain.com` and `sub1.mydomain.com` but not `sub.myotherdomain.com`
- See [`Formatting domains for CLI`](/dev/cli/sauce-connect-5/run/#formatting-domains)
- Configuring domains in [YAML config file](/secure-connections/sauce-connect-5/guides/configuration/#config-file)
  ```yaml
  ---
  # this will include all subdomains of example.com as well as dev.httpbin.org
  tunnel-domains:
  - '.example.com'
  - 'dev.httbin.org'
  ```

#### Configuring Domain Regular Expressions (--deny-domains)

- Quote to avoid shell expansion
- Make sure to use correct regular expressions
  - Example: `*.mydomain.com` is incorrect and `.*.mydomain.com` is correct regular expression
- Always use quotes to avoid shell expansion
  - Example: `--deny-domains "*.mydomain.com"` instead of `--deny-domains *.mydomain.com`
- Configuring multiple regexps for CLI follows formatting rules similar to [`Formatting domains for CLI`](/dev/cli/sauce-connect-5/run/#formatting-domains)
  - Comma-separated
  - No spaces between each regexp
  - Example: `--fast-fail-regexp ".*.mydomain.*,.*.example.com"`
- Configuring regexps in [YAML config file](/secure-connections/sauce-connect/setup-configuration/yaml-config/)
  ```yaml
  ---
  deny-domains:
  - '.*mydomain.*'
  - '.*.example.com'
  ```

### Sauce Connect Host Performance Optimization

Insufficient Sauce Connect host resources may cause performance degradation that may be difficult to diagnose. Please see the [Configuring Your System to Use Sauce Connect](/secure-connections/sauce-connect/system-requirements/#configuring-your-system-to-use-sauce-connect) guidelines to ensure that your system has enough resources such as:

- Memory
- CPU
- Open File Limit
