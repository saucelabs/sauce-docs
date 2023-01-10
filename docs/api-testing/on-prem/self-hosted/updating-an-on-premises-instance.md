---
id: updating-an-on-premises-instance
title: Updating a Self-Hosted Instance
sidebar_label: Updating an Instance
keywords:
- api
- api-fortress
- update
- onpremises
- selfhosted
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

Updating an On Premises instance of API Fortress is done as follows:

- **Back up the databases. (Optional, but recommended)**

  - If you're storing the API Fortress data on a persistent volume in a cloud system, you can take a snapshot of the disk.
  - You can archive the data directories defined in the docker-compose.yml file.
  - You can dump the databases as described here: [Backing up Your Data](/api-testing/on-prem/self-hosted/on-premises-backing-up-your-data)

- **Stop the containers**

  - From the 'core' directory, issue a **`docker-compose stop`** command and wait for the operation to complete. This command stops the currently-running Docker containers.

- **Pull the updated containers**

  - From the 'core' directory, issue a **`docker-compose pull`** command and wait for the operation to complete. This command pulls updated images from the API Fortress Docker repository.

- **Restart the containers**
  - From the 'core' directory, issue a **`./start_all.sh`** command to restart the containers and wait for the operation to complete. This script restarts the containers in the proper order.

Once the preceding steps are completed, the On Premises version of API Fortress will be fully updated.

Please note to update the instance you only need to stop and restart the "core" container. However, it is recommended that you verify the downloader is still up and running. To do so run the following command to see if the downloader is up:

```bash
sudo docker ps
```

If the downloader is not listed in the response, please navigate to the "downloader" directory and issue the following command:

```bash
sudo docker-compose up -d
```
