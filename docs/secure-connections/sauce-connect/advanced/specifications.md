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

### Start Sequence
1. Sauce Connect Proxy client sends a request to Sauce Labs REST API to get the latest configuration defaults.
1. Sauce Connect Proxy client requests Sauce Labs REST API to provision a Sauce Connect Proxy server.
1. Sauce Connect Proxy client establishes a TLS connection to the server.
1. Sauce Connect Proxy client, optionally, checks the server certificate revocation status.
1. Sauce Connect Proxy client follows the handshake procedure with the server and establishes a tunnel connection.
1. Sauce Connect Proxy is ready, the console log would read "Sauce Connect is up, you may start your tests."

<img src={useBaseUrl('img/sauce-connect/start-sequence.png')} alt="Sauce Connect Proxy start sequence" width="800"/>

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
   <td>"REST API GET request" timeout
   </td>
   <td>10 seconds
   </td>
   <td>Sauce Connect Proxy periodically sends a GET request to get the tunnel status.
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
