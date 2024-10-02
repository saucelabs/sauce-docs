---
id: sauce-connect
title: Using Sauce Connect Proxy with Sauce Orchestrate
sidebar_label: Using Sauce Connect
description: Get a Sauce Connect Proxy up and running quickly for your Sauce Orchestrate tests.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Orchestrate fully integrates with Sauce Connect Proxy. If the application or site you are testing is already accessed via Sauce Connect, no change to your code is needed.
If your **test code** running in a Sauce Orchestrate container requires an access to a service behind a firewall or on your private network, follow the steps below to launch a secure trusted connection between your network and the Sauce Orchestrate runner.

:::note
[Sauce Connect Proxy 4](/secure-connections/sauce-connect/) and [Sauce Connect Proxy 5](/secure-connections/sauce-connect-5/) are configured differently.
:::


## Configure Sauce Connect Proxy

Sauce Connect Proxy configuration to be used with Sauce Orchestrate differ between [Sauce Connect Proxy 4](/secure-connections/sauce-connect/) and [Sauce Connect Proxy 5](/secure-connections/sauce-connect-5/).

<Tabs
  defaultValue="sc5"
  values={[
    {label: 'Sauce Connect 5', value: 'sc5'},
    {label: 'Sauce Connect 4', value: 'sc4'},
  ]}>

<TabItem value="sc5">

1. The specific configuration required for Sauce Orchestrate involves setting the [metadata](/dev/cli/sauce-connect-5/run/#metadata) option to the fixed value listed below and adding the backend service domains to the [`tunnel-domains`](/dev/cli/sauce-connect-5/run/#tunnel-domains) list.
2. Make sure the tunnel has a unique [name](/dev/cli/sauce-connect-5/run/#tunnel-name) to distinguish it from other instances of Sauce Connect Proxy. For example: 'my_sauce_orchestrate_only_tunnel_name'.
3. Refer to the [Sauce Connect Proxy 5 Quickstart](/secure-connections/sauce-connect-5/quickstart/) for other steps and configuration required to start Sauce Connect Proxy 5.

```yaml
---
metadata: 'vm_version=v2alpha2'
tunnel-domains: ['.*your.domain']
```

</TabItem>
<TabItem value="sc4">

1. The specific configuration required for Sauce Orchestrate involves setting the `vm-version` option to the fixed value listed below and adding the backend service domains to the [`tunnel-domains`](/dev/cli/sauce-connect-proxy/#--tunnel-domains) list.
2. Make sure the tunnel has a unique [name](/dev/cli/sauce-connect-proxy/#--tunnel-name) to distinguish it from other instances of Sauce Connect Proxy. For example: 'my_sauce_orchestrate_only_tunnel_name'.
3. Refer to the [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart/) for other steps and configuration required to start Sauce Connect Proxy 4.

```yaml
---
vm-version: 'v2alpha2'
tunnel-domains: ['.your.domain']
```

</TabItem>
</Tabs>

## Configure the Sauce Orchestrate Runner to Use Sauce Connect

1. Add the [`tunnel`](/orchestrate/saucectl-configuration/#tunnel) key to the runner configuration.

```yaml
sauce:
  tunnel:
    name: my_sauce_orchestrate_only_tunnel_name
```

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

In most programming languages (such as Go, Python, and Node.js),
the standard proxy environment variables are supported, so no additional steps are required to configure Sauce Connect Proxy.

### Java

Java is a notable exception. The standard proxy environment variable are not
supported, and system properties must be used instead. One way to configure
the system properties is to pass the `SAUCE_JAVA_OPTS` options when starting
a Java VM.

In Maven this may be done in several place
- For the main maven process setting `MAVEN_OPTS=$SAUCE_JAVA_OPTS`, or alternatively
  in `settings.xml`
- For the Surefire processes in  pom.xml as below:
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

This should suffice for libraries that use the standard Java HTTP client.
However, some libraries require proxy configuration to be explicitly implemented in the code.

## More Information

- [Sauce Connect Proxy 5 Setup and Configuration](/secure-connections/sauce-connect-5/operation/overview)
- [Using Sauce Connect Proxy 4](/secure-connections/sauce-connect)
- [Using Additional Proxies with Sauce Connect](/secure-connections/sauce-connect/setup-configuration/additional-proxies)
