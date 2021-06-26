---
id: secure-connections
title: Secure Connection for Visual E2E Testing
sidebar_label: Secure Connections
---

For testing applications that are hosted locally or behind a firewall, we provide the ability to establish a secure tunnel connection to your environment. The secure tunnel is only accessible to our testing environment.

Screener uses [Ngrok Link](https://ngrok.com/product/ngrok-link) to create private and secure tunnels.

1. [Send us a message](https://support.saucelabs.com/hc/en-us/requests/new) and let us know the internal URL you would like to test.
2. We will pass you a `config` file with a reserved tunnel domain dedicated to your Screener account.
3. Download and unzip the [Ngrok tunnel client](https://ngrok.com/download) for your platform.
4. Start the tunnel using the `config` file with the following command:
  ```java
  ./ngrok start -config=config.yml tunnel
  ```

This will establish an encrypted tunnel connection, which Screener will use to access and run tests against your internal environment.
