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
* Review the [Using Sauce Connect Proxy Tunnels](/secure-connections/sauce-connect/proxy-tunnels).


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
   <td>
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
   <td>Sauce Connect Proxy client supported ciphers
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
   <td>Sauce Connect Proxy server supported ciphers
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

## Sauce Connect Proxy Start Up Sequence
1. Send a request to Sauce Labs REST API to get the configuration updates.
1. Request  Sauce Labs REST API to provision a Sauce Connect Proxy server.
1. Establish a secure connection between Sauce Connect Client and Sauce Connect server.
1. Sauce Connect Proxy is ready, its console log would read: "Sauce Connect is up, you may start your tests."

## Timeout Values

<img src={useBaseUrl('img/sauce-connect/timeout-values.png')} alt="Sauce Connect download file contents" width="550" />

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
   <td>Sauce Connect Proxy client tunnel provisioning timeout
   </td>
   <td>45 seconds
   </td>
   <td>Sauce Connect Proxy client requests Sauce Labs REST API to provision a server as part of the start sequence.
   </td>
  </tr>
  <tr>
   <td>Sauce Connect Proxy client initial connect timeout
   </td>
   <td>15 seconds
   </td>
   <td>Sauce Connect Proxy tunnel must be established within this timeout after the server is provisioned and the URL is returned to the client.
   </td>
  </tr>
  <tr>
   <td>Sauce Connect Proxy client disconnected timeout
   </td>
   <td>60 seconds
   </td>
   <td>Sauce Connect Proxy client may disconnect from the server (after establishing the initial connection) for up to 60 seconds.
   </td>
  </tr>
    <tr>
   <td>Sauce Connect Proxy finish running jobs on shutdown timeout
   </td>
   <td>300 seconds
   </td>
   <td>When Sauce Labs REST API receives a "tunnel shutdown" request, jobs that use the tunnel must finish within 300 seconds. Jobs that require longer time to complete may fail after the tunnel is terminated.
   </td>
  </tr>
</table>
