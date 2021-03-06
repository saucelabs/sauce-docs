---
id: backing-up-your-data-kubernetes-on-premises-self-hosted
title: "Backing Up your Data - Kubernetes (Self-Hosted)"
sidebar_label: "Backing Up your Data - Kubernetes (Self-Hosted)"
keywords:
    - api
    - api-fortress
    - kubernetes
    - self-hosted
---

When running an self-hosted/on-premises installation, you will certainly want to run periodic backups of all your data.

In this article, we will provide you the scripts to perform a data dump of API Fortress. You will then need to wire them up in your scheduled operations system, such as `cron`.

We will assume you have a **running API Fortress installation**, ability to **`sudo`** to root privileges and a general idea of how Kubernetes works.

If you are using EKS, you can simply take snapshots of the postgres and mongo disks directly through EKS. If you would like to take data dumps via Kubernetes please see the instructions below.

On the machine where you have Kubernetes installed and running, execute the following commands:

```
kubectl get pods
```

Now we will start with backing up the postgres disk, please run the following two commands in order:

```
kubectl exec -ti postgres-0 -- bash -c "pg_dump -U apipulse > apifortress_postgres.sql" 
kubectl cp postgres-0:apifortress_postgres.sql apifortress_postgres.sql
```

Next we will back up the mongodb disk, please run the following two commands in order:

```
kubectl exec -ti mongodb-0 -- mongodump
kubectl cp mongodb-0:dump dump
```

Note that the mongodb dumps can become quite large, so we recommend that these dumps be done on a volume disk or use a separate desk that is mounted to all of this that will only be used for backups.