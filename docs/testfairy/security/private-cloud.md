---
id: private-cloud
title: Private Cloud
sidebar_label: Private Cloud
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The "Private Cloud" deployment provides a completely isolated environment for a single tenant of Sauce Mobile App Distribution. This ensures 
dedicated resources and enhanced security, making it ideal for organizations with stringent data privacy and compliance
requirements. 

Each Private Cloud instance operates independently, ensuring no shared resources with other tenants.

<img src={useBaseUrl('/img/testfairy/security/private-cloud-architecture.png')} alt="Private Cloud Architecture"/>

#### Key Components

- **Dedicated Instance**

  A dedicated instance is provisioned for each Private Cloud. This guarantees that compute resources are
  not shared with other tenants, providing consistent performance, isolation and security. 

- **Dedicated Database** 

  Each Private Cloud instance comes with its own dedicated database. This ensures that all data is completely 
  isolated, providing enhanced data security and performance benefits.

- **Dedicated Data Storage (S3)**

  For object storage, each tenant has a dedicated S3 bucket. This ensures that files and data stored in the cloud 
  are securely isolated and managed separately.

- **Dedicated IP Address**

  Each Private Cloud instance is assigned a dedicated IP address. This allows for better control over network traffic,
  improved security through IP whitelisting.

#### Customizable Configuration

A Private Cloud instance can suit your needs better by its available customizations:

- **Select Hosted Region**

  You may decide where the data is hosted, select from one of AWS available regions.

- **Firewall Rules**

  A dedicate IP address and instance also allows you to select custom firewall rules. For example, admin panel is
  only available through company VPN.

- **Custom Data Retention**

  Apply specific rules as to how long your files are stored and when they are removed

- **Provide S3 Bucket**

  Host the apps on your own S3 bucket. Your bucket, your rules. 





