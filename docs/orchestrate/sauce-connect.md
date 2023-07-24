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


## What You'll Need


## Configure a Sauce Connect Tunnel with access to the management services.

1.  The specific configuration needed for Sauce Orchestrate is setting the `vm-version` to the fixed value listed below and adding the domains of backend services to the [`tunnel-domains`](/dev/cli/sauce-connect-proxy/#--tunnel-domains) list.
2.  All other steps and confgiration are the same. Please reference the [Sauce Connect Proxy Quickstart](/secure-connections/sauce-connect/quickstart/). 


```yaml
---
vm-version: 'v2alpha2'
tunnel-domains: [ ]
```

## Configure the Sauce Orchestrate runner to use this management tunnel.

1. Add the [`tunnel`](/secure-connections/orchestrate/saucectl-configuration/#tunnel) key to the runner configuration.


## More Information

- [Using Sauce Connect Proxy](/secure-connections/sauce-connect)
- [Using Additional Proxies with Sauce Connect Setups](/secure-connections/sauce-connect/setup-configuration/additional-proxies)