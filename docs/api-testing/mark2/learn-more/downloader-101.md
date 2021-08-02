---
id: downloader-101
title: Downloader 101
sidebar_label: Downloader 101
keywords:
    - api-testing
    - downloader
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## What is the Downloader?

The API Fortress Downloader is the agent that retrieves the resources (payloads) to be tested. For cloud customers, we have various downloaders already available to you such as US East, US West, and Europe. 

For self hosted (on-premises) customers it is important that you deploy the Downloaders along with the API Fortress Dashboard. Without at least one Downloader, the dashboard doesn’t have the ability to make the API call and get the response. You can deploy multiple Downloaders in various locations, so factors such as latency and download time can be measured more precisely.  
  
<img src={useBaseUrl('img/api-fortress/2020/03/APIF_Downloader_Docs@4x.png')} alt="APIF Downloader Pic"/>

## Local (Hybrid) Use of Downloader

The API Fortress Remote Download Agent can also sit inside of your infrastructure to allow the cloud (SaaS) platform to test systems that are not exposed externally. It will listen to an HTTPS port for jobs requested by an API Fortress engine. The agent will perform an HTTP(S) request to an endpoint as described in the job, and once completed will serialize the data back to the engine, adding contextual information such as the metrics. No data is retained in the agent memory after job completion. The agent will use the DNS settings provided by the machine it’s installed on.  
  
## The Downloader Is Configurable

* You may [disable SSL validation](/api-testing/mark2/how-to/disable-ssl-validation)  
* It can be configured to [go through a proxy](/api-testing/mark2/self-hosted/proxy-settings-in-downloader):  
* The Downloader (aka: RemoteDownloadAgent) receives inbound HTTPS connections from the dashboard, encrypting everything with its own certificate
    * You can also install [an actual certificate to a RemoteDownloadAgent](/api-testing/mark2/how-to/keystores-for-downloader)

