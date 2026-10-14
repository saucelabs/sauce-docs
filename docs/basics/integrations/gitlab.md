---
id: gitlab
title: GitLab Integration
sidebar_label: GitLab
description: Use GitLab with Sauce Labs to scale up your CI/CD testing process
keywords:
- gitlab
- ci/cd
- automated-testing
- how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[GitLab](https://about.gitlab.com/) is a collaboration platform that lets you build a Continuous Integration (CI) pipeline as a series of steps in a configuration file. Steps can include launching a containerized test environment, building your software, starting your tests with your preferred test runner, and deploying to production. The Sauce Labs integration with GitLab lets you run your tests on Sauce Labs as one or more steps of your GitLab CI/CD pipeline.

## How It Works

If your tests run locally, they may point to your internal Selenium Grid or local Simulators. When you configure your tests to run on Sauce Labs, you change them to point to a Sauce Labs data center and our virtual machines, real devices, Emulators, and Simulators.

CI/CD systems rely heavily on repeatable steps and phases. This high level of abstraction and customization makes GitLab adaptable to your business needs, because you can mix, match, and repeat complex steps with a single line of configuration. Sauce Labs tests can be included in one or more of those steps.

GitLab uses a `.yml` file for configuration. You configure your environment the same way you would to run a shell script. For more flexibility, GitLab lets you launch Docker images as "services". This makes ephemeral or shared APIs and other services available at any time in the build process, and you can create or remove them at a moment's notice.

If the site or app you test is not publicly accessible, your pipeline also needs Sauce Connect. The way you set up your GitLab pipeline determines how you start Sauce Connect. See [Set Up Sauce Connect](#set-up-sauce-connect).

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings), set as the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables. See [Authentication](#authentication).
- A GitLab project with a CI/CD pipeline configured in a `.yml` file.
- Tests that are configured to run on Sauce Labs.
- (Optional) A GitLab Runner that can run Bash (Linux) or PowerShell (Windows), if you start Sauce Connect in your pipeline.

## Set Up the Integration

To run your Sauce Labs tests in GitLab, add a job that runs them to your pipeline configuration file.

1. Open the `.yml` file that defines your GitLab CI/CD pipeline.
2. Add a job that runs your Sauce Labs tests to the stage where your tests run. Job names are meant to be descriptive, so the following example names it `e2e-sauce`.
3. Commit the file to your repository.

The following example is adapted from the [GitLab CI/CD pipeline configuration reference](https://gitlab.com/gitlab-org/gitlab/-/blob/e042b023f461be91c62d95dfd1de4547e1a8c572/doc/ci/yaml/README.md). Job 3 runs the end-to-end test suite on Sauce Labs.

```yaml title="gitlab.yml"
stages:
 - build
 - test
 - deploy
job 0:
 stage: .pre
 script: make something useful before build stage
job 1:
 stage: build
 script: make build dependencies
job 2:
 stage: build
 script: make build artifacts

e2e-sauce (job 3):
 stage: test
 script: run-sauce-tests
job 4:
 stage: deploy
 script: deploy-something
job 5:
 stage: post
 script: make something useful at the end of the pipeline
```

### Set Up Sauce Connect

[Sauce Connect](/secure-connections/sauce-connect-5/) is an HTTP proxy server that opens a secure "tunnel" connection for testing between a Sauce Labs virtual machine or real device and a website or mobile app hosted in your local environment (for example, behind a corporate firewall). It gives Sauce Labs secure access to your application or website.

You can download and manage Sauce Connect in a few ways. Some of them suit GitLab better than others, but all of them work.

#### Continuously Running Sauce Connect Tunnel

:::note
This first method is recommended for those with a supportive DevOps team who is willing to host and maintain this image.
:::

Download the Sauce Connect binary and run it as a service on a dedicated machine (VM or server) that is available 24/7. This instance of Sauce Connect is shared by your organization and used by the tests running in the CI pipeline. Running Sauce Connect as a service is the recommended way to run the Sauce Connect Proxy, which we call "[Tunnel Pool](/secure-connections/sauce-connect-5/guides/tunnel-pool/)".

#### Ephemeral Tunnel, Started in Every Build

:::note
Recommended for those experienced with shell scripting.
:::

Using Bash or an equivalent in your GitLab `.yml` file, you can download Sauce Connect to a container and run it as a setup step in your CI pipeline. The following examples show what this might look like.

:::caution
These scripts assume that the environment variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` [have been set and are available to the script](/basics/environment-variables/).
:::

:::note
Replace the Sauce Connect version in the script with the most recent one. You can check for the latest version at the [Sauce Connect download links](/secure-connections/sauce-connect-5/installation/).

Also, make sure to set the `--region` flag to the correct [Sauce Labs data center](/basics/data-center-endpoints/) for your account.
:::

<Tabs>
<TabItem value="linux" label="Linux (Bash)" default>

```yaml title="gitlab-sc.yml"
script:
  - curl -L -o sauce-connect.tar.gz https://saucelabs.com/downloads/sauce-connect/5.5.3/sauce-connect-5.5.3_linux.x86_64.tar.gz
  - mkdir -p ./sauce-connect && tar -xzf sauce-connect.tar.gz -C ./sauce-connect
  - export PATH="./sauce-connect:$PATH"
  # The --api-address flag starts a local API server to enable readiness checks
  - sc run --region us-west --api-address :8032 --tunnel-name "gitlabTunnel" &
  - |
    timeout=180; elapsed=0
    until [ "$(curl -s -o /dev/null -w '%{http_code}' localhost:8032/readyz)" == "200" ]; do
      echo "Waiting for Sauce Connect to be ready... ($elapsed seconds)"
      sleep 1; elapsed=$((elapsed + 1))
      if [ $elapsed -ge $timeout ]; then echo "Sauce Connect failed to start within $timeout seconds"; exit 1; fi
    done
  - echo "Sauce Connect Proxy is ready"
```

</TabItem>
<TabItem value="windows" label="Windows (PowerShell)">

:::note
This script requires a GitLab Runner configured with a PowerShell executor on Windows. On Windows, we recommend that you start Sauce Connect in the same job as the tests that use it, to make sure that the tunnel is closed properly after the tests finish and the job ends.
:::

```yaml title="gitlab-sc.yml"
build_test_windows:
  stage: build_test
  before_script:
    # Getting Sauce Connect ready
    - echo "Sauce Connect on Windows"
    - Invoke-WebRequest -Uri "https://saucelabs.com/downloads/sauce-connect/5.5.3/sauce-connect-5.5.3_windows.x86_64.zip" -OutFile "sauce-connect.zip"
    - Expand-Archive -Path "sauce-connect.zip" -DestinationPath ".\sauce-connect"
    - $env:PATH = ".\sauce-connect;$env:PATH"
    # The --api-address flag starts a local API server to enable readiness checks
    - |
      $scProcess = Start-Process -NoNewWindow -FilePath ".\sauce-connect\sauce-connect.exe" -ArgumentList "run","--region","us-west","--api-address",":8032","--tunnel-name","gitlabTunnelWindows"
      Write-Host "Sauce Connect process started with PID: $($scProcess.Id)"
      # Store PID for cleanup
      $scProcess.Id | Out-File -FilePath "sc_pid.txt"
    - |
      $timeout = 180; $elapsed = 0
      while ($elapsed -lt $timeout) {
        try { if ((Invoke-WebRequest -Uri "http://localhost:8032/readyz" -UseBasicParsing).StatusCode -eq 200) { break } } catch { }
        Write-Host "Waiting for Sauce Connect to be ready... ($elapsed seconds)"
        Start-Sleep -Seconds 1; $elapsed++
      }
      if ($elapsed -ge $timeout) { Write-Error "Sauce Connect failed to start within $timeout seconds"; exit 1 }
    - Write-Host "Sauce Connect Proxy is ready"
  script:
    - run tests
    # Kill Sauce Connect process
    - |
      try {
        if (Test-Path "sc_pid.txt") {
          $scPid = Get-Content "sc_pid.txt"
          Write-Host "Stopping Sauce Connect process (PID: $scPid)"
          Stop-Process -Id $scPid -Force -ErrorAction SilentlyContinue
        }
        # Also kill by process name as backup
        Get-Process | Where-Object {$_.ProcessName -like "*sauce-connect*"} | Stop-Process -Force -ErrorAction SilentlyContinue
        Write-Host "Sauce Connect stopped"
      } catch {
        Write-Host "Error stopping Sauce Connect: $_"
      }
```

</TabItem>
</Tabs>

## Authentication

Your tests authenticate with Sauce Labs using your Sauce Labs **username** and **access key**, which you can find in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings). Store them as the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables so that your pipeline jobs and the Sauce Connect scripts can read them, rather than writing them into your `.yml` file or test code. See [Environment Variables](/basics/environment-variables/).

## Verify the Integration

1. Run your GitLab pipeline.
2. If you start Sauce Connect in the pipeline, open the job log and confirm that it shows `Sauce Connect Proxy is ready`.
3. Open your Sauce Labs test results and confirm that the tests from the pipeline appear.

## Use the Integration

After you set up the integration, you can run your Sauce Labs tests every time your GitLab pipeline runs.

To run your Sauce Labs tests in GitLab:

1. Push a change to your repository, or start the pipeline from GitLab.
2. Wait for the job that runs your Sauce Labs tests, for example `e2e-sauce`, to finish.
3. Open your Sauce Labs test results.

**Result:** The tests run on Sauce Labs as part of your pipeline, and the results appear in Sauce Labs.

## Troubleshooting

<details>
<summary>**`Sauce Connect failed to start within 180 seconds`**</summary>

The readiness check did not get a `200` response from `localhost:8032/readyz` in time. Check that the `--region` flag matches the [Sauce Labs data center](/basics/data-center-endpoints/) for your account, and that `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` are set.

</details>

<details>
<summary>**The Sauce Connect download fails**</summary>

The version in the script may be out of date. Replace it with the most recent version from the [Sauce Connect download links](/secure-connections/sauce-connect-5/installation/).

</details>

<details>
<summary>**The tunnel stays open after a Windows job ends**</summary>

Start Sauce Connect in the same job as the tests that use it, and stop the process at the end of the job, as shown in the Windows (PowerShell) example in
[Ephemeral Tunnel, Started in Every Build](#ephemeral-tunnel-started-in-every-build).

</details>

<details>
<summary>**Tests cannot authenticate with Sauce Labs**</summary>

Set `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` as environment variables that are available to the job. See [Authentication](#authentication).

</details>

## Next Steps

- [Sauce Labs Data Center Endpoints](/basics/data-center-endpoints/)
- [Sauce Connect Proxy Overview](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview)
- [Sauce Labs Integrations](/basics/integrations-overview/)
- [saucectl and GitLab Integration](/dev/cli/saucectl/usage/ci/gitlab/)
