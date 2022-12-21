---
id: gitlab
title: 'GitLab CI with APIF-Auto'
sidebar_label: GitLab
keywords:
- cicd
- gitlab
- apif-auto
- yaml
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

APIF-Auto, a command line tool that supports automated API Fortress test execution is an ideal tool for executing API Fortress tests in a GitLab CI workflow.

The pipeline script below serves as a template for creating a stage in your GitLab Pipeline for testing your APIs with API Fortress. If you’d like to take a look at the documentation for APIF-Auto, click [here](/api-testing/on-prem/ci/apif-auto).

> **NOTE**: It’s important to note that this is an **example** of a `.gitlab-ci.yml`. Experienced GitLab CI users are free to configure their workflow as best suits their needs. Please mind the yaml formatting.

```yaml
image: 'python 3.7'
before_script:
- python --version
- pip install -r requirements.txt
stages:
- API Fortress
apif:
stage: API Fortress
script:
- python directory/apif-run.py run-all ci_project -S -o output/directory
```

:::tip call APIs directly
You can configure the `yaml` file to make `curl` calls directly to the API Fortress API to achieve the same behavior.
:::
