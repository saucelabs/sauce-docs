---
id: specifications
title: Sauce Connect Proxy Specifications
sidebar_label: Specifications
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you're a security or network administrator, you may find it useful to review the Sauce Connect Proxy specifications to better evaluate its security.

## What You'll Need
- Have a working understanding of [Sauce Connect Proxy architecture](/secure-connections/sauce-connect/advanced/architecture).

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
   <td>SC client requests Sauce Labs REST API to provision an SC server as part of SC start sequence.
   </td>
  </tr>
  <tr>
   <td>Sauce Connect Proxy client initial connect timeout
   </td>
   <td>15 seconds
   </td>
   <td>SC client first connection to SC server must happen within 15 seconds after SC server is provisioned and URL is returned to SC client.
   </td>
  </tr>
  <tr>
   <td>Sauce Connect Proxy client disconnected timeout
   </td>
   <td>60 seconds
   </td>
   <td>SC client may disconnect from SC sever (after establishing an initial connection) for up to 60 seconds.
   </td>
  </tr>
    <tr>
   <td>Sauce Connect Proxy finish running jobs on shutdown timeout
   </td>
   <td>300 seconds
   </td>
   <td>When Sauce Labs REST API receives a "tunnel shutdown" request, it will keep SC server running for some time to allow the jobs that use the tunnel to finish. "DELETE" request may specify <code>wait_for_jobs=false</code> to shut down the tunnel server immediately.
   </td>
  </tr>
</table>
