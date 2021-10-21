---
id: keystores-for-downloader
title: Keystores for Downloader
sidebar_label: Keystores for Downloader
keywords:
    - api-testing
    - how-to
    - keystores
    - downloader
---

The __downloader__ (aka: `RemoteDownloadAgent`) receives inbound HTTPS connections from the dashboard, encrypting everything with a self-signed certificate.

Here are the steps to install an actual certificate to a RemoteDownloadAgent.

## What You'll Need: 

* Java installed in your system

  :::tip
  The Downloader uses a Java Keystore to store the certificate.
  :::

## Walkthrough

1. Follow the steps from this Oracle blog post to create a Java Keystore starting from a certificate chain: [https://blogs.oracle.com/jtc/installing-trusted-certificates-into-a-java-keystore](https://blogs.oracle.com/jtc/installing-trusted-certificates-into-a-java-keystore). 
   :::caution **IMPORTANT!** 
   The keystore password must be **450311aa**
   :::
2. Create a derivative image starting from the provided downloader image, which will contain the newly created keystore.  
   :::caution **IMPORTANT!** 
   The file needs to be called keystore and must be placed in: `/opt/remoteDownloadAgent/`
   :::
   
For step 2, an example `Dockerfile` may look like the following:

```bash
FROM apifortress/remoteDownloadAgent:latest  
COPY keystore /opt/remoteDownloadAgent/keystore
```