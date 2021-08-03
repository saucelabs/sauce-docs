---
id: proxy-settings-in-downloader
title: Proxy Settings in Downloader
sidebar_label: Proxy Settings in Downloader
keywords:
    - api
    - api-fortress
    - proxy
    - settings
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you need your downloader to go through a proxy to reach your API follow the below steps to configure the proxy settings.

:::warning
**This is for Self-Hosted/On-Premises deployments only!**
:::

## Downloader Configuration

You will need to modify the downloader config file, by adding an environment field for proxy settings.

### Docker

* Navigate to the “downloader” folder within your installation files, and find the file named `docker-compose.yml`

* Locate the `environment` field at the end of the file 
* Add a field in this section called `proxy_configuration`. 
  See example below:
  ```yaml
  proxy_configuration: '{"*":
    {
    "address":"10.10.10.10",
    "port":3128,
    "authentication":"basic",
    "username":"foo",
    "password":"bar"
    }
    }'
  ```

### Kubernetes  

* Navigate to the file named `downloader.yml`.
* You will find a section named `env`, add a field to this section called `proxy_configuration`. 

See example below:

```yaml
name: proxy_configuration
value: '{
  "*":
  {
  "address":"10.10.10.10",
  "port":3128,
  "authentication":"basic",
  "username":"foo",
  "password":"bar"
  }
  }'

```

Where `address` and `port` are, respectively, the addresses and port of the proxy. Authentication is optional.

## Proxy Configuration Syntax

The proxy configuration syntax is as below (multiple proxy configurations should be comma separated):

```json
{
  "foo.com": {
    "address": "172.18.0.1",
    "port": 3128,
    "username": "proxyuser",
    "password": "password"
  },
  "bar.com": {
    "address": "172.18.0.1",
    "port": 3128,
    "username": "proxyuser",
    "password": "password"
  }
}
```

There is also a catch-all syntax:

```json
{
  "*": {
    "address": "172.18.0.1",
    "port": 3128,
    "username": "proxyuser",
    "password": "password"
  }
}
```
In addition, you can use a wildcard in place of the lowest level of the domain, as in:

```json
{
  "*.google.com": {
    "address": "172.18.0.1",
    "port": 3128,
    "username": "proxyuser",
    "password": "password"
  }
}
```

### Priority

The proxy configuration now has a priority sequence, the entries at the beginning of the configuration block have **higher** priority, the ones at the ending have **lower** priority.

The `"*"` entry is not involved in the priority verification, and is always the last to be used, regardless of where it appears.

### Wildcards

In the previous versions of the downloader, the wildcards only cover the level of the domain. For example `*.domain.com` covered `sub1.domain.com` and `sub2.domain.com` but not `third.sub1.domain.com`

This is not the case anymore with the current version of the downloader. The wildcard will cover all the lower levels of the domain. **This makes the priority essential**.

### Negative Selection

It is now possible to deactivate proxy settings for specific selectors.

Simply add one entry looking like this: `"sub3.domain.com":{"address":"NONE"}`

If `sub3.domain.com` is matched, then no proxy will be selected and the priority rundown will stop. Wildcards can also apply here, as in `"*.domain.com": {"address":"NONE"}`

Again, check the order of appearance for priority!

### Examples

<Tabs
  defaultValue="ex1"
  values={[
    {label: 'Example 1', value: 'ex1'},
    {label: 'Example 2', value: 'ex2'},
    {label: 'Example 3', value: 'ex3'},
    {label: 'Example 4', value: 'ex4'},
    {label: 'Example 5', value: 'ex5'},
  ]}>

<TabItem value="ex1">

Only `sub.domain.com` will go through `proxy1.com`. Other requests will go through no proxy.

```json
{
  "sub.domain.com": {
    "address": "http://proxy1.com/",
    "port": 2255
  }
} 
```

</TabItem>
<TabItem value="ex2">

Only `sub1.domain.com` will go through `proxy1.com`. Other requests will go through `proxy2.com`.

```json
{
  "sub1.domain.com": {
    "address": "proxy1.com",
    "port": 2255
  },
  "*": {
    "address": "proxy2.com",
    "port": 2255
  }
}
```

</TabItem>
<TabItem value="ex3">

Only `sub1.domain.com` will go through `proxy1.com`. Requests to any `domain.com` subdomain will go through `proxy2.com`. Other requests will not go through a proxy.

```json
{
  "sub1.domain.com": {
    "address": "proxy1.com",
    "port": 2255
  },
  "*.domain.com": {
    "address": "proxy2.com",
    "port": 2255
  }
}
```

</TabItem>
<TabItem value="ex4">

All subdomains of `sub1.domain.com`  will go through `proxy1.com`. Other subdomains of `domain.com` will go through `proxy2.com`. Any other domain will not go through a proxy.

```json
{
  "*.sub1.domain.com": {
    "address": "proxy1.com",
    "port": 2255
  },
  "*.domain.com": {
    "address": "proxy2.com",
    "port": 2255
  }
}
```

</TabItem>
<TabItem value="ex5">

All subdomains of `sub1.domain.com` will NOT go through a proxy. All subdomains of `domain.com` will go through `proxy2.com`. All other domains will go through `proxy3.com`.

```json
{
  "*.sub1.domain.com": {
    "address": "NONE"
  },
  "*.domain.com": {
    "address": "proxy2.com",
    "port": 2255
  },
  "*": {
    "address": "proxy3.com",
    "port": 2255
  }
}
```

</TabItem>
</Tabs>