---
id: on-premises-backing-up-your-data
title: "Backing Up your Data (Self-Hosted)"
sidebar_label: Backing Up your Data
keywords:
    - api
    - api-fortress
    - backup
    - selfhosted
    - onpremises
---

When running a self-hosted/on-premises installation, you will certainly want to run periodic backups of all your data.

In this article, we will provide you the scripts to perform a data dump of API Fortress. You will then need to wire them up in your scheduled operations system, such as `cron`.

We will assume you have a **running API Fortress installation**, ability to **`sudo`** to root privileges and a general idea of how Docker works.

## Backup

1. In the host server, create a directory that will host your backup. In this example, it's `/var/local/backups` but it can be anything. Make sure the directory has read/write permissions docker can use,

2. Run (change the directory according to your needs):

```
sudo docker run --rm --net apifortress --link core_apifortress-mongo_1:mongo.apifortress -v /var/local/backups:/backup mongo:3.0.14 bash -c 'mongodump --out /backup --host mongo.apifortress'
```

3. Run (change the directory according to your needs):

```
sudo docker run --rm --net apifortress --link core_apifortress-postgres_1:postgres.apifortress -v /var/local/backups:/backup postgres:9.5.5 bash -c 'pg_dump --dbname postgresql://apipulse:jk5112@postgres.apifortress:5432/apipulse > /backup/postgres.sql'
```

4. Access the `/var/local/backups` directory. You will find both an "apipulse" directory and a "postgres.sql" file. This is all your backup. You can now zip it and copy it wherever your backup procedures require. At this point we suggest you to clear the directory used for backup to have it empty for the next backup iteration.

## Backup restore

1. in the `core/` directory, stop all services by issuing:

```
sudo docker-compose stop
```

2. Remove all data files from your persistent volume on the host machine. 

:::caution Extreme Caution
This will erase all your current data. Make sure that the backup you are going to restore is available. If unsure, just MOVE the current data to another location.
:::

3. Activate MongoDB and PostgreSQL by issuing:

```
sudo docker-compose up -d apifortress-postgres
sudo docker-compose up -d apifortress-mongo
```

4. We will assume your backup is located in `/var/local/backups`. Run the following commands:
```
sudo docker run --rm --net apifortress --link core_apifortress-mongo_1:mongo.apifortress -v /var/local/backups:/backup mongo:3.0.14 bash -c 'mongorestore /backup --host mongo.apifortress'

sudo docker run --rm --net apifortress --link core_apifortress-postgres_1:postgres.apifortress -v /var/local/backups:/backup postgres:9.5.5 bash -c 'psql -h postgres.apifortress --dbname postgresql://apipulse:jk5112@postgres.apifortress:5432/apipulse  < /backup/postgres.sql'
```

5. Verify that files are now present in the persistent volume location of your host machine,

6. You can now start the platform by running the `./start_all.sh` script.
