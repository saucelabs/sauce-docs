---
id: jdbc
title: 'Bloodhound: JBDC Module'
sidebar_label: JBDC
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

The module implements multiple actors involving the connection to JDBC databases.

## Proxy

### `UpstreamJdbcActor`

An upstream actor that acts as a backend for a route.

::note
The current implementation is **synchronous**
:::

**class:** `com.apifortress.afthem.modules.jdbc.actors.proxy.UpstreamJdbcActor`

**configuration:**

- `url`: a JDBC url, such as `jdbc:postgresql://localhost:5432/mydb?user=john&password=111aa`
- `driver`: the fully qualified path of the jdbc driver, such as `org.postgresql.Driver`
- `max_rows`: a limiter to the number of returned rows. Default: `100`
