---
id: gitlab
title: "GitLab CI with APIF-Auto"
sidebar_label: GitLab
keywords:
    - cicd
    - gitlab
    - apif-auto
    - yaml
---

APIF-Auto, a command line tool that supports automated API Fortress test execution is an ideal tool for executing API Fortress tests in a GitLab CI workflow.

The pipeline script below serves as a template for creating a stage in your GitLab Pipeline for testing your APIs with API Fortress. If you’d like to take a look at the documentation for APIF-Auto, click [here](/api-testing/mark2/ci/apif-auto).

> __NOTE__: It’s important to note that this is an **example** of a `.gitlab-ci.yml`.  Experienced GitLab CI users are free to configure their workflow as best suits their needs. Please mind the yaml formatting.

```yaml
image: "python 3.7"
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