---
id: using-rds-and-documentdb
title: Using RDS and DocumentDB
sidebar_label: Using RDS and DocumentDB
keywords:
    - api
    - api-fortress
    - rds
    - documentdb
---

API Fortress supports the use of one or both RDS and DocumentDB instead of the default Postgres and MongoDB. Below we detail the steps needed to make the switch.  

## RDS

Once Deployed a PostgreSQL 9.5 series RDS instance, the configuration is straight forward. All that is required is to change the PostgreSQL settings in the configuration. Postgres is solely used by the dashboard service.  

:::warning PostGres 9.5 EOL
Amazon no longer supports PostGres 9.5, to use the current PostGres 12 in AWS you will need to change your API Fortress image to:

```sh
apifortress/apifortress:20.2.0-POSTGRES-PATCH
```
:::

The involved configuration keys are:

```
psqlhost  
psqlUsername  
psqlPassword
```

:::caution Database Name Requirement
The database name MUST BE `apipulse`  
:::

## DocumentDB

### Premise  

We don't use DocumentDB internally. Keep in mind DocumentDB is not MongoDB as a Service, it's a clone developed by Amazon and there are differences. Some incompatibilities have been addressed by us in the software, but we have no data concerning the long term success of Amazon DocumentDB.  
  
### Steps on AWS 

1. Create a DocumentDB cluster. A single instance is perfectly fine as long as backups are configured.  
  
2. Change the preferences group to disable TLS. Currently, API Fortress does not support TLS transport to DocumentDB (and it would be superfluous as all internal communications in AWS are peer-encrypted)  
   1. Make sure you restart your instance once that is done (choose to restart immediately and not during a maintenance window, otherwise you'll wait quite a long time...)   
3. Make sure to assign a security group that allows the communication between your EKS cluster and the DocumentDB cluster. We discovered that as a default, that is not the case.  
  

### Changes in the APIF Configuration

1. Apply the following changes in the apifortress deployment section:  
   1. set the dbHost key to reflect the DocumentDB endpoint  
   2. add the dbUsername key to reflect the DocumentDB username  
   3. add the dbPassword key to reflect the DocumentDB password  
  
2. Apply the following changes to the afscheduler section:  
   1. set the mongoHost key to reflect the DocumentDB endpoint  
   2. add the mongoUsername key to reflect the DocumentDB username  
   3. add the mongoPassword key to reflect the DocumentDB password  
  
3. Apply the following changes to the afconnector section:  
   1. set the mongoHost key to reflect the DocumentDB endpoint  
   2. add the mongoUsername key to reflect the DocumentDB username  
   3. add the mongoPassword key to reflect the DocumentDB password  
  

## Before you Deploy 
Make sure the Kubernetes or EC2 cluster and the MongoDB instance live in the same VPC
