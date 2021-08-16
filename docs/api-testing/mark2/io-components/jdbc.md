---
id: jdbc
title: "Databases – JDBC (direct)"
sidebar_label: "Databases – JDBC (direct)"
keywords:
    - api-testing
    - io-components
    - jdbc
    - database 
    - data 
    - base 
    - sql 
    - mysql
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The JDBC component allows a test to query data from a database. Typical use cases are:

- to retrieve data items to use as input data
- to perform data driven testing

The currently supported databases are: MySQL, PostgreSQL, and Microsft SQL Server.

Configuration keys:

- _Url_: the JDBC url to the database. Depending on the database type, URLs will look like the following:
    - jdbc:mysql://database.example.com/databaseName
    - jdbc:postgresql://database.example.com/databaseName
    - jdbc:sqlserver://database.example.com;databaseName=databaseName;
- _Driver_: the type of driver; you can choose it from the options available in the drop down:
    - org.postgresql.Driver
    - com.microsoft.sqlserver.jdbc.SQLServerDriver
    - com.mysql.jdbc.Driver
- _Username_: the username to access the database
- _Password_: the password to access the database
- _Content_: the SQL query
- _Variable_: the name of the variable that will store the results

<img src={useBaseUrl('img/api-fortress/2019/10/Screen-Shot-2019-10-31-at-9.59.13-AM.png')} alt="screenshot"/>

The result of the query will be represented as an array where each item is a row. Every row is a key/value map, as in:

```json
[
 {"id",123,"first_name":"John","last_name":"Doe"},
 {"id",456,"first_name":"Annie","last_name":"Doe"}
]
```

Therefore, you can then iterate over the results to use them according to your needs.

To see another way to connect to a database using the API Fortress Helper Utility [click here!](https://apifortress.com/doc/helper-databases/)