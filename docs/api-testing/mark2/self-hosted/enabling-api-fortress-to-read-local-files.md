---
id: enabling-api-fortress-to-read-local-files
title: Enabling API Fortress to Read Local Files
sidebar_label: Enabling API Fortress to Read Local Files
keywords:
    - api
    - api-fortress
    - onpremises
    - read
---

Using the [read-file](/api-testing/mark2/reference/read-file) command, you can have your test read local files.

Currently, there is no GUI functionality to upload the files, however, you can set up your container to connect to a local folder on your host machine.

To do so, you have to update your docker-compose.yml file in the `core/` directory.

In the "apifortress" service definition, modify the "volumes" block by adding one entry looking like this:

```yaml
volumes:
  - /var/local/data:/data
```

Where `/var/local/data` is the path in your host machine where you want to store the files.
