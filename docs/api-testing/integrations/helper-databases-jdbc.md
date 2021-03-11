---
id: helper-databases-jdbc
title: "Helper – Connect to Any Database"
sidebar_label: "Helper – Connect to Any Database"
keywords:
    - api-testing
    - integrations
    - helpers
    - jdbc
---

This API Fortress Helper utility allows you to access databases via an API.

## Configuration Deployment

Place the package in a machine that has access to the databases that you wish to use, and which could be reached by API Fortress via HTTP.

As a default, the system will connect to PostgreSQL, but you can configure it to run against any DB that can be accessed with JDBC.

Of course, this requires a bit more configuration located in apps/db-api-helper/db-api-helper.xml. Next steps are pretty straight forward.

Look for the following element:
```
<db:generic-config name="Generic_Database_Configuration" url="jdbc:postgresql://[172.28.0.1:5432/apipulse?password=jk5112&amp;user=apipulse](http://172.28.0.1:5432/apipulse?password=jk5112&user=apipulse)" driverClassName="org.postgresql.Driver" doc:name="Generic Database Configuration"> 
```
If you plan to use another database, you will need to download the matching JDBC driver, place it in the apps/db-api-helper/lib directory, and configure the flow accordingly.

In our example, hitting the route like this:

```
curl -H 'content-type:text/plain' -d '\* from auser' http://<machine\_hostname>:8092/db/select
```

will trigger a select query that will return the result as a JSON array payload. 

:::note
`INSERT`, `UPDATE`, `DELETE` routes are also available and they work similarly.
:::

## Running  
  
It’s as easy as:

```bash
sudo docker-compose up -d
```
