---
id: disable-ssl-validation
title: Disable SSL Validation
sidebar_label: Disable SSL Validation
keywords:
- ssl-validation
- how-to
- disable
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

## SaaS / Cloud Customers

If you are using the API Fortress SaaS (cloud) platform you can use the downloader named "US East No SSL Check".

This downloader ignores invalid and not matching certificates.

## Self Hosted / On-Premises Customers

To disable the SSL validation in the downloader do the following steps:

> **NOTE**: We will assume you're using a docker-compose based deployment, if you are not please reach out to [support@apifortress.com](mailto:support@apifortress.com).)

1. First access the machine that runs the downloader service (likely the one that runs the rest of API Fortress as well)
2. Then navigate to the `downloader/` directory
3. Stop the downloader by issuing:

```bash
sudo docker-compose stop
```

4. Next edit the `docker-compose.yml` file
5. In the `environment` section, add the following entry:

```yaml
disable_ssl_validation: 'true'
```

6. Save and exit the file
7. Now restart the downloader by issuing:

```bash
sudo docker-compose up -d
```

This downloader will now ignore invalid and not matching certificates.
