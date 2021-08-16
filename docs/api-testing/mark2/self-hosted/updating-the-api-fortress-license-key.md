---
id: updating-the-api-fortress-license-key
title: Updating the API Fortress License Key
sidebar_label: Updating the API Fortress License Key
keywords:
    - api
    - api-fortress
    - licensekey
---

If you need an updated API Fortress license please reach out to your account manager or [sales@saucelabs.com](mailto:sales@saucelabs.com)

The below instructions will show you where to replace the license key in the configuration file:

## For Docker Users

1. Find the `docker-compose.yml` file located in the `core` directory
2. Locate the section labeled “APIFORTRESS DASHBOARD”
3. Towards the bottom of the section you will find the key `license:` 
4. Replace the string to the right of the `:` 

:::caution
Be mindful to keep the single quotes around the license key
:::

## For Kubernetes Users

1. Find the `apifortress.yml` file located in the `root` directory
2. Locate the section labeled “API Fortress Dashboard”
3. Towards the bottom of the section you will find `- name: license`
4. Below that you will see “value:” replace the string to the right of the `:` 

:::caution
Be mindful to keep the single quotes around the license key
:::