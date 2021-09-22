---
id: best-practices-for-disaster-recovery
title: "Best Practices for Disaster Recovery (Self-Hosted)"
sidebar_label: "Best Practices for Disaster Recovery (Self-Hosted)"
keywords:
    - api
    - api-fortress
    - self-hosted
    - docker
---

:::note 
This document is referential only to the API Fortress-HA (High Availability) deployment.
:::

## **Components:**

**Databases:**

- PostgreSQL
- MongoDB

**Message queues:**

- RabbitMQ

**API Fortress:**

- API Fortress Dashboard
- Microservices (mailer, scheduler, connector)
- Remote workers (downloaders, core-server)

## Resiliency / High availability

**Databases** can be replicated using their specific mechanism and the systems will connect to the clusters. Each replica will carry the full database in a streaming replication fashion.

Therefore, a failure (software, hardware, network) of any of the instances will not cause a service disruption.

When a replica is brought back to life, whether it's the same server or another, their specific replication systems will synchronize the new instance.

Databases are the only components in need of a persistent state, therefore the machines spinning them need to be able to provide a persistent storage.

**The message queue** is stateless (therefore does not require persistent storage) and queues and exchanges are replicated using the high availability internal mechanism. Services can connect to both so that if one replica goes down, the other will take care of the work without service disruption.

**The API Fortress dashboards** are stateless (with the exclusion of in-memory web sessions) and can be scaled horizontally and load balanced.

**The API Fortress microservices** are stateless single-instance services that can be respawed in any server, without any specific concern.

**The API Fortress remote workers** are stateless multi-instance services that can be scaled horizontally and load balanced.

## Backup and Restore

### Backup

There are 2 primary types of backups:

- Taking **snapshots** of the persisted database disks. The procedure is runtime dependent (AWS, GCloud, OpenShift etc.)
- Dumping databases to files for classic restore. These procedures are described  [here](https://apifortress.com/doc/backing-up-your-data-on-premises-only/). The actual commands may vary based on the runtime.

### Restoration

- Given the **snapshot** of a disk, the runtime should provide the ability to create a new disk from it.
- Given the dump files, you can follow the procedure described [here](https://apifortress.com/doc/backing-up-your-data-on-premises-only/). The actual commands may vary based on the runtime.

:::note
No service except the two databases require access to persistent storage.
:::

## Disaster recovery

**Databases:**

- In case of a database being **unreachable** for connectivity issues, the system will continue working using a replica. When the issue is solved, the system will sync itself automatically. No service degradation is expected.
- In case of a **system failure, disk failure, or data corruption**, spin a new server in the same cluster with the same hostname. This will trigger the database automatic replication. No service degradation is expected.
- In case of a **global failure of all replicas**, API Fortress will stop working. Spin a new database cluster starting from a backup and restart all services. Service degradation is expected. Data loss may occur, depending on your backup strategy.

**Message queues:**

- In case of a message queue being **unreachable** for connectivity issues, the system will continue working using a replica. A respawn of the failing message queue will bring it back to the cluster. No service degradation is expected.
- In case of a **system failure**, spin a new server in the same cluster with the same hostname.  No service degradation is expected.
- In case of a **global failure of all replicas**, API Fortress will stop executing scheduled tests and will not send notifications. Start a new message queue cluster. A restart of all services is not required but recommended. Service degradation is expected.