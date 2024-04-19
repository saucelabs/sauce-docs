---
id: sauce-connect
title: Using Sauce Connect Tunnels with Sauce Orchestrate
sidebar_label: Using Sauce Connect
description: Get a Sauce Connect tunnel up and running quickly for your Sauce Orchestrate tests.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Orchestrate fully integrates with Sauce Connect. If the service or site you are testing is already accessed via Sauce Connect, no change to your code is needed.
If your code makes direct calls to any backend service, such as an API or database that is behind a firewall on your private network, follow the steps below to launch a secure trusted connection between your network and the Sauce Orchestrate runner.

## Configure a Sauce Connect Tunnel with Access to the Management Services

1.  The specific configuration needed for Sauce Orchestrate is setting the `vm-version` to the fixed value listed below and adding the domains of backend services to the [`tunnel-domains`](/dev/cli/sauce-connect-proxy/#--tunnel-domains) list.
2.  All other steps and configuration are the same. Refer to the [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart/).

```yaml
---
vm-version: 'v2alpha2'
tunnel-domains: [ ]
```

## Configure the Sauce Orchestrate Runner to Use This Management Tunnel

1. Add the [`tunnel`](/orchestrate/saucectl-configuration/#tunnel) key to the runner configuration.

## Container Configuration

When a Sauce Orchestrate container starts with Sauce Connect enabled, the following
environment variables are set:

```bash
# Reference (for manual configuration)
no_proxy=host.sauceconnect.internal,saucelabs.com,*.saucelabs.com
proxy_port=1080

# Java Opts (for manual configuration)
SAUCE_JAVA_OPTS=-Dhttp.proxyHost=host.sauceconnect.internal -Dhttp.proxyPort=1080 -Dhttps.proxyHost=host.sauceconnect.internal -Dhttps.proxyPort=1080 -Dhttp.nonProxyHosts=host.sauceconnect.internal|saucelabs.com|*.saucelabs.com

# Standard Proxy
https_proxy=http://host.sauceconnect.internal:1080
proxy_host=host.sauceconnect.internal
NO_PROXY=host.sauceconnect.internal,saucelabs.com,*.saucelabs.com
HTTPS_PROXY=http://host.sauceconnect.internal:1080
HTTP_PROXY=http://host.sauceconnect.internal:1080
http_proxy=http://host.sauceconnect.internal:1080
```

### Standard Proxy Configuration

In most programing language (Go, Python, Node.js...) the standard proxy environment
variables are supported, and there is no extra step to configure the
Sauce Connect.

### Java

Java is a notable exception. The standard proxy environment variable are not
supported, and system properties must be used instead. One way to configure
the system properties is to pass the `SAUCE_JAVA_OPTS` options when starting
a Java VM.

In Maven this may be done in several place

- For the main maven process setting `MAVEN_OPTS=$SAUCE_JAVA_OPTS`, or alternatively
  in `settings.xml`
- For the Surefire processes in pom.xml as below:

```
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    ...
    <properties>
        ...
        <argLine>${env.SAUCE_JAVA_OPTS}</argLine>
    </properties>
```

This should me enough for libraries using the standard Java HTTP client. Some libraries
however differ from the standard and require the proxy configuration to be implemented
within code.

## More Information

- [Using Sauce Connect Proxy](/secure-connections/sauce-connect)
- [Using Additional Proxies with Sauce Connect Setups](/secure-connections/sauce-connect/setup-configuration/additional-proxies)
