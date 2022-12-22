---
id: test-linter
title: Testing MD Linter
sidebar_label: Testing Our Linter
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

import useBaseUrl from '@docusaurus/useBaseUrl';

## What You'll Need

<p> <Highlight color="#013a70">Enterprise Plans only</Highlight> </p>

- Sauce IPSec Proxy is an enterprise-only feature that must be configured by our Support Team prior to use. Contact your Sauce Labs Sales Engineer or Customer Success Manager to learn more about how this solution can meet your business needs.
- Authorization to use your organization's Sauce IPSec Proxy tunnel. You can verify this by going to the **Tunnels** page, where you should see the tunnel name displayed. If you don't see it, contact the organization admin for your Sauce Labs account to request access.

- **Restricted**: Only organization admins can utilize Sauce IPSec Proxy tunnels
- **Organization-wide**: All users in your organization can utilize Sauce IPSec Proxy tunnels

### Public Real Devices

To run tests on public real devices in the Sauce Labs cloud using Sauce IPSec Proxy, organization admins must set the **Enable Sauce Connect Proxy/IPSec VPN for Public Cloud Devices** option to **Enabled**. See [Security Settings](/basics/acct-team-mgmt/org-settings) for more information.

<img src={useBaseUrl('img/ipsec-vpn/ipsec-vpn-architecture.png')} alt="Sauce IPSec Proxy Network Architecture"/>

:::note
We set up all Sauce IPSec Proxy customers with a redundant, High Availability (HA) tunnel pool with two tunnel gateways.
:::

| Number of Concurrent Sessions | Recommended Number of IPSec Tunnels | Recommended Total Bandwidth |
| :---------------------------- | :---------------------------------- | :-------------------------- |
| 20                            | 1                                   | 50Mbps                      |
| 100                           | 1                                   | 250Mbps                     |
| 500                           | 2                                   | 750Mbps                     |
| 1,000                         | 2                                   | 1.5Gbps                     |
| 2,000                         | 2                                   | 3Gbps                       |

### Automated Testing

Depending on the type of framework you're using and the device you're testing on, you'll need to include test script capabilities and/or CLI flags that point to your Sauce IPSec Proxy tunnel.

#### Appium and Selenium Frameworks

In your test script, you'll need to:

1. Specify the [data center endpoint](/basics/data-center-endpoints) location of the device you're testing on. See the [Sauce Labs Training Repo](https://github.com/saucelabs-training) for examples in JavaScript, Java, Python, Ruby, and C#.
2. Use the [`tunnelName`](/dev/test-configuration-options#tunnelName) capability to specify the name of your organization's Sauce IPSec Proxy tunnel, and then set the [`tunnelOwner`](/dev/test-configuration-options#tunnelOwner) capability to the Sauce Labs username of your organization admin.

```java title="Java example"
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("tunnelName", "$TUNNEL_NAME");
caps.setCapability("tunnelOwner","$SAUCE_USERNAME");
```
