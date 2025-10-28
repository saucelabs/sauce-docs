---
id: tls-resigning
title: Sauce Connect TLS Resigning
sidebar_label: TLS Resigning
---

Self-signed and invalid SSL certificates, commonly used in test environments, are not trusted by stock browsers, such as those installed on the Sauce Labs infrastructure. This causes tests to be interrupted with security warnings that can't be programmatically dismissed.
Sauce Connect resolves this by automatically resigning all TLS traffic, a feature enabled by default. This process is known as **TLS resigning** or **SSL Bumping**.

Encrypted traffic is intercepted, decrypted, and re-encrypted with a Sauce Labs certificate, which is trusted by browsers and test automation tools running in the Sauce Labs environment. This eliminates SSL-related test failures while preserving end-to-end encryption and avoiding unauthorized access to your network.

### When to Disable TLS Resigning

TLS resigning is enabled by default and generally should not be disabled unless you are experiencing SSL issues during your tests. For example, if your site or application verifies the certificate used to sign the responses, it may not accept the responses signed with Sauce Labs certificate, causing errors.

#### Disabling TLS Resigning

To bypass TLS resigning for specific domains, use the [`--tls-passthrough-domains`](/dev/cli/sauce-connect-5/run/#tls-passthrough-domains) flag. This option accepts [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) to match domains. Use `.*` to disable TLS resigning for all domains.

```bash
--tls-passthrough-domains .*
```

Use this option cautiously, as disabling resigning may introduce SSL validation issues in your tests.
