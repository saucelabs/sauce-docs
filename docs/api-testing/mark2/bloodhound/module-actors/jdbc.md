---
id: jdbc
title: "Bloodhound: JBDC Module"
sidebar_label: JBDC
---

The module implements multiple actors involving the connection to JDBC databases.

## Proxy

### `UpstreamJdbcActor`

An upstream actor that acts as a backend for a route.

::note
The current implementation is **synchronous**
:::

**class:** `com.apifortress.afthem.modules.jdbc.actors.proxy.UpstreamJdbcActor`

**configuration:**

* `url`: a JDBC url, such as `jdbc:postgresql://localhost:5432/mydb?user=john&password=111aa`
* `driver`: the fully qualified path of the jdbc driver, such as `org.postgresql.Driver`
* `max_rows`: a limiter to the number of returned rows. Default: `100`
