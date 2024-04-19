---
id: databases
title: Using Low Code with Databases 
sidebar_label: Databases 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

To use Microsoft SQL database query via Sauce Labs Low Code:

1. Connect to the database
2. Execute a query
3. Extract the value

### Connect to the Database

Connect to db "" with url `jdbc:sqlserver://<IP:Port>` with user as `<username>` and password as `<password>` with db_id `<Db_id>`.

#### Example

To connect to db "" with url
`jdbc:sqlserver://sql-server-2030.cgck8ublk7h6.us-west-1.rds.amazonaws.com:1433` with user as `devops` and password `test456!@!` with db_id `test`

:::note
`Db_id` is the connection id used by Sauce Labs to identify different DB sessions.
:::

### Execute a Query

Syntax:
execute query `<query>` against `<Db_id>` and save it as `<variable name>`

#### Example

Execute query `select *from testDB.user` against `test` and save it as `query_data`

### Extract the Value

We can use js or py snippets to parse the output value.

#### Example

Save:`_js{return eval(${query_data})[1][1]}`
as: `fname`
Where query_data (input):

```
[[1000, "James", "Bond"], [1001, "Roger", "Federer"], [1002, "Rafael", "Nadal"]]
fname(Output)::
Roger
```

### Supported Database Versions

Database versions supported out of the box:

- MySQL 8.0.11
- MySQL 8.0.22
- Oracle 11.2.0.4
- Oracle 12.2.0.1
- SQL Server (2012, 14, 16, 17, 19)
- SQL Server (2008 R2, 2008)
