---
id: api-testing
title: API Testing
sidebar_label: Getting Started
description: Running API tests with Sauce Labs
hide_table_of_contents: true
---
:::info 
Sauce Labs API Testing will reach its End of Life (EOL) on September 1, 2025. As such, we will not be accepting new customers. For existing customers, your account team will work with you to provide the appropriate transition
:::

At its core, Sauce Labs API Testing allows you to use an HTTP client or a proprietary test composer to generate and edit intelligent contract or functional tests. The tests can be automated with any CI/CD tool or using the platform’s scheduler. Functional tests can then be used as load tests or scheduled as uptime monitors.

> **Documentation**<br/>You're viewing documentation for the API Testing and Monitoring cloud solution. To view the documentation for the on-premise solution see [API Fortress On-Prem (Legacy)](/api-testing/on-prem/quick-start/).

<img src="/img/api-testing/APITestingGettingStarted-logo_removed.png" width="600"/>
<div className="box-wrapper" markdown="1">

<div className="box box1 card">
<div className="container">
<h2>Contract Testing</h2>
<p>
</p>
<p>
Use the API Testing platform to generate contract tests from an OpenAPI specification file. When used with Piestry, our mocking tool, you can test both the consumer and the producer side.

</p>
<ul>
<li><a href="/api-testing/contract-testing">API Contract Testing</a></li>
<li><a href="/api-testing/mocking">API Mocking with Piestry</a></li>
</ul>
</div>
</div>

<div className="box box2 card">
<div className="container">

<h2>Functional Testing</h2>
<p></p>
<p>
Create functional tests from multiple locations:
<ul>
<li><a href="/api-testing/quickstart">HTTP client</a></li>
<li><a href="/api-testing/import-postman-collection">Postman collection (in the HTTP client)</a></li>
<li><a href="/api-testing/build-from-spec">OpenAPI spec file</a></li>
<li><a href="/api-testing/import-har-files/">Import from HAR file (including HAR files from RDC and VDC)</a></li>
<li><a href="/api-testing/composer">Test composer</a></li>
</ul>
</p>
</div>
</div>

<div className="box box3 card">
<div className="container">

<h2>Monitoring</h2>
<p></p>
<p>
Schedule existing functional tests against any environment for staging and production monitoring, and to validate the functional uptime of business critical APIs. See <a href="/api-testing/schedule-test">Scheduling API Tests</a> for more information.
</p>
</div>
</div>

<div className="box box4 card">
<div className="container">

<h2>Load Testing</h2>
<p></p>
<p>
Create and execute load tests using existing functional tests. See <a href="/api-testing/load-testing/">Load Testing with API Testing</a> for more information.
</p>
</div>
</div>

<div className="box box5 card">
<div className="container">

<h2>Testing Private APIs</h2>
<p></p>
<p>
Use Sauce Connect Proxy to test APIs behind a firewall. This launches a secure tunnel between the Sauce Labs API Testing platform and your APIs. See <a href="/api-testing/sauce-connect/">Sauce Connect Proxy</a> for more information.
</p>
</div>
</div>

</div>
