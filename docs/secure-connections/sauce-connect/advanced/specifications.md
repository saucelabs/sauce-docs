---
id: specifications
title: Sauce Connect Proxy Specifications
sidebar_label: Specifications
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you're a security or network administrator, you may find it useful to review the Sauce Connect Proxy security specifications to better evaluate its security.
If you use Sauce Connect Proxy as part of your CI/CD pipeline, you may find it useful to review timeout values to better configure CI/CD success/failure parameters.

## What You'll Need

- Review [Using Sauce Connect Proxy Tunnels](/secure-connections/sauce-connect/proxy-tunnels).

## Security Specifications

Sauce Connect Proxy Tunnel connection TLS specifications

<table>
  <tr>
   <td><strong>Name</strong>
   </td>
   <td><strong>Value</strong>
   </td>
   <td><strong>SC Versions</strong>
   </td>
  </tr>
  <tr>
   <td>Supported TLS Versions
   </td>
   <td>1.2, 1.3
   </td>
   <td>4.7.x, 4.8.x
   </td>
  </tr>
  <tr>
   <td>Sauce Connect Proxy client OpenSSL Version
   </td>
   <td>1.1.1k
   </td>
   <td>4.7.x, 4.8.x
   </td>
  </tr>
  <tr>
   <td>Sauce Connect Proxy client-supported ciphers
   </td>
   <td><small>
   <p>ECDHE-ECDSA-AES256-GCM-SHA384</p>
   <p>ECDHE-RSA-AES256-GCM-SHA384</p>
   <p>ECDHE-ECDSA-CHACHA20-POLY1305</p>
   <p>ECDHE-RSA-CHACHA20-POLY1305</p>
   <p>ECDHE-ECDSA-AES128-GCM-SHA256</p>
   <p>ECDHE-RSA-AES128-GCM-SHA256</p>
   <p>ECDHE-ECDSA-AES256-SHA384</p>
   <p>ECDHE-RSA-AES256-SHA384</p>
   <p>ECDHE-ECDSA-AES128-SHA256</p>
   <p>ECDHE-RSA-AES128-SHA256</p></small>
   </td>
   <td>4.7.x, 4.8.x
   </td>
  </tr>
  <tr>
   <td>Sauce Connect Proxy server-supported ciphers
   </td>
   <td><small>
   <p>ECDHE-ECDSA-AES256-GCM-SHA384</p>
   <p>ECDHE-RSA-AES256-GCM-SHA384</p>
   <p>ECDHE-ECDSA-CHACHA20-POLY1305</p>
   <p>ECDHE-RSA-CHACHA20-POLY1305</p>
   <p>ECDHE-ECDSA-AES128-GCM-SHA256</p>
   <p>ECDHE-RSA-AES128-GCM-SHA256</p></small>
   </td>
   <td>
   </td>
  </tr>
</table>

## Timeout Values

### Start Timeouts

<img src={useBaseUrl('img/sauce-connect/timeout-values.png')} alt="Sauce Connect download file contents" width="550" />

### Timeouts Summary

<table>
  <tr>
   <td><strong>Name</strong>
   </td>
   <td><strong>Value</strong>
   </td>
   <td><strong>Notes</strong>
   </td>
  </tr>
  <tr>
   <td>"REST API GET `/USER/tunnels/ID`" timeout
   </td>
   <td>5 seconds
   </td>
   <td>Sauce Connect Proxy "HTTP long polling" (each 5 seconds) requests to get the backend status.
   </td>
  </tr>
  <tr>
   <td>"REST API POST `/USER/tunnels/ID`" timeout
   </td>
   <td>10 seconds
   </td>
   <td>Sauce Connect Proxy "HTTP long polling" (each 30 seconds) requests to update the client status.
   </td>
  </tr>
  <tr>
   <td>"Tunnel provisioning" timeout
   </td>
   <td>45 seconds
   </td>
   <td>Tunnel provisioning may take anywhere from 3 to 45 seconds, depending on the load and the tunnel features.
   </td>
  </tr>
  <tr>
   <td>"Initial tunnel connection" timeout
   </td>
   <td>15 seconds
   </td>
   <td>Sauce Connect Proxy tunnel must be established within this timeout after the server is provisioned.
   </td>
  </tr>
  <tr>
   <td>"Tunnel disconnected" timeout
   </td>
   <td>60 seconds
   </td>
   <td>Sauce Connect Proxy client may disconnect from the server (after establishing the initial connection) for up to 60 seconds.
   </td>
  </tr>
    <tr>
   <td>"Jobs wait" timeout
   </td>
   <td>300 seconds
   </td>
   <td>On receiving a "tunnel shutdown" request, Sauce Labs REST API would wait for, at most, 300 seconds for jobs, using the tunnel, to finish. Jobs that require longer time to complete may fail after the tunnel is terminated.
   </td>
  </tr>
</table>

## Supported Browsers and Ports

The following commonly used browsers and ports are subject to change as new versions are released.

Microsoft Edge, Chrome 71+, and the Safari browser on OS X 10.10+ and mobile iOS 8+ proxy these common ports:

    443, 888,
    2000, 2001, 2020, 2109, 2222, 2310,
    3000, 3001, 3010, 3030, 3210, 3333,
    4000, 4001, 4201, 4040, 4321, 4502, 4503, 4567,
    5000, 5001, 5002, 5050, 5555, 5432,
    6000, 6001, 6060, 6666, 6543,
    7000, 7070, 7774, 7777,
    8000, 8001, 8003, 8031, 8080, 8081, 8443, 8765, 8777, 8888,
    9000, 9001, 9031, 9080, 9081, 9090, 9191, 9876, 9877, 9999,
    49221, 55001

:::note
On Android devices, ports 5555 and 8080 cannot be used with Sauce Connect Proxy.
:::

:::note Using `.local` domains
Using [Bonjour / ZeroConf](https://developer.apple.com/bonjour) for hostnames on a local network does not work on Safari 15 and above.
:::
