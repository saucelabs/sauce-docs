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

## GitLab Setup and Configuration - Sauce Labs

[GitLab](https://about.gitlab.com/) is a collaboration platform that allows you to build a Continuous Integration (CI) pipeline as a series
of steps in a configuration file. Steps can include things like launching a containerized test environment,
building your software, starting your tests using your preferred test runner, and deploying to production.

This high-level guide shows how to configure GitLab’s Continuous Integration Pipeline to execute tests on Sauce Labs.

- How Sauce Labs fits in with GitLab
- Sauce Connect and GitLab
- Additional Resources

### How Sauce Labs fits in with GitLab

If your tests are running locally they may point to your internal Selenium Grid or local Simulators. When you configure
your tests to run on Sauce Labs, you will change your tests to point to a Sauce Labs data center and our
VMs/Real Devices/Emulators/Simulators.

The way you set up your GitLab pipeline will determine how you need to initiate the Sauce Connect Proxy–covered in
the next section.

CI/CD systems rely heavily on repeatable steps and phases. This high level of abstraction and customization makes the
tool adaptable to your business needs, in that you can mix/match/repeat complex steps with a single line of config.
Sauce Labs tests may be included in one or more of those steps.

### The .yml File

GitLab uses `.yml` for configuration. GitLab allows you to configure your environment the same way you would to run a
shell script. For ultimate flexibility, GitLab allows you to launch docker images as “services”. This gives you
ephemeral and/or shared APIs or other services to be available at any time in the build process, which can be created
or torn down at a moment’s notice.

In the example below (adapted from the [GitLab CI/CD pipeline configuration reference](https://gitlab.com/gitlab-org/gitlab/-/blob/e042b023f461be91c62d95dfd1de4547e1a8c572/doc/ci/yaml/README.md),
step 3 runs our end-to-end suite. Job names are meant to be descriptive, so we’ve named it `e2e-Sauce`.

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

### Sauce Connect and GitLab

[Sauce Connect](/secure-connections/sauce-connect-5/) is an HTTP proxy server that opens a secure "tunnel" connection for testing between a Sauce Labs
virtual machine or real device and a website or mobile app hosted in your local environment (for example, behind a
corporate firewall). It gives Sauce Labs secure access to your application or website.

Sauce Connect can be downloaded and managed in a few ways, some of which lend themselves better to GitLab, but all
are do-able.

#### Continuously Running Sauce Connect Tunnel

:::note
This first method is recommended for those with a supportive DevOps team who is willing to host and maintain this image.
:::
Users download the Sauce Connect Binary and run it as a service on a dedicated machine (VM/server) that is available
24/7. This instance of Sauce Connect is shared by the organization and utilized by the tests running in the CI
pipeline. Running Sauce Connect as a service is the recommended method of running the Sauce Connect Proxy, which
we call “[Tunnel Pool](/secure-connections/sauce-connect-5/guides/tunnel-pool/)”.

#### Ephemeral Tunnel, Started in Every Build

:::note
Recommended for those experienced with shell scripting
:::
Using bash or equivalent in the GitLab .yml file, users can download Sauce Connect to a container and run it as
a set-up step in their CI. Below is an example of what this might look like.

:::caution
This script assumes that the environment variables SAUCE_USERNAME and SAUCE_ACCESS_KEY [have been set and are available to the script](/basics/environment-variables/).
:::

:::note
Replace the Sauce Connect version in the script with the most recent one. You can check for the latest version at
the [Sauce Connect download links](/secure-connections/sauce-connect-5/installation/).

Also, make sure to set the `--region` flag to the correct [Sauce Labs data center](/basics/data-center-endpoints/)
for your account.
:::

<Tabs>
<TabItem value="linux" label="Linux (Bash)" default>

```yaml title="gitlab-sc.yml"
script:
  - curl -L -o sauce-connect.tar.gz https://saucelabs.com/downloads/sauce-connect/5.2.2/sauce-connect-5.2.2_linux.x86_64.tar.gz
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
This script requires a GitLab Runner configured with a PowerShell executor on Windows.
In Windows, we recommend to start Sauce Connect in the same job as the tests that will use it, to ensure that the
tunnel is properly closed after the tests finish and the job ends.
:::

```yaml title="gitlab-sc.yml"
build_test_windows:
  stage: build_test
  before_script:
    # Getting Sauce Connect ready
    - echo "Sauce Connect on Windows"
    - Invoke-WebRequest -Uri "https://saucelabs.com/downloads/sauce-connect/5.5.0/sauce-connect-5.5.0_windows.x86_64.zip" -OutFile "sauce-connect.zip"
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

### Additional Resources

- [Sauce Labs Data Center Endpoints](/basics/data-center-endpoints/)
- [Sauce Connect Proxy Overview](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview)
- [Sauce Labs Integrations](/basics/integrations-overview/)
- [saucectl and GitLab Integration](/dev/cli/saucectl/usage/ci/gitlab/)
