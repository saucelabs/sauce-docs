---
id: azure
title: Sauce Labs with Azure DevOps
sidebar_label: Azure
description: Run your Sauce Labs tests in your Azure DevOps pipelines.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Azure DevOps (formerly Visual Studio Team Services or VSTS) is a Microsoft product that provides version control, reporting, requirements management, project management, automated builds, testing, and release management capabilities. The Sauce Labs integration with Azure DevOps lets you run your Sauce Labs tests in your Azure pipeline.

## How It Works

Azure Pipelines runs your tests as steps in a pipeline that is defined in a YAML file in your repository. You store your Sauce Labs username and access key as pipeline variables in Azure DevOps, and the pipeline passes them to your tests as the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables. Your tests read these variables to authenticate with Sauce Labs and run on Sauce Labs, and the test results appear in Sauce Labs.

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings).
- An existing Azure DevOps pipeline, or an Azure DevOps project where you can create one.
- Permission for Azure Pipelines to access your repository management system.

## Set Up the Integration

Follow these steps to integrate Sauce Labs testing into your Azure pipeline.

### Create the Pipeline

1. Sign in to your Azure DevOps organization and go to your project.
2. Go to **Pipelines** > **New pipeline**.
3. Link the new pipeline to your repository (see the [Azure Pipelines documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/) for guidance). You'll likely need to provide permissions for Azure Pipelines to access your repository management system.
4. Set your Sauce Labs credentials as pipeline variables. See [Authentication](#authentication).

### Configure the Pipeline

Create a YAML file for your pipeline using one of the following templates. Each template references your Sauce Labs environment variables.

<Tabs>
<TabItem value="node.js" label="Node.js" default>

```yaml
trigger:
- main

pool:
  vmImage: ubuntu-latest

# Multiple pipelines can re-use variables
# that are stored in a variable group
variables:
- group: sauce-labs-variables

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '14.x'
  displayName: 'Install Node.js'

- script: |
    # Navigate to the working directory
    cd ./webdriverio/webdriver/examples/w3c/
    # Install node packages
    npm install
    # Run tests on Sauce and enables a high level of logging for CI
    npm run test.saucelabs.us -- --logLevel "debug"
  env:
    # Reads the value from 'sauceUsername' in Azure DevOps and
    # stores it into SAUCE_USERNAME env variable
    SAUCE_USERNAME: $(sauceUsername)
    SAUCE_ACCESS_KEY: $(sauceAccessKey)
  displayName: 'install and run WebdriverIO tests in Sauce Labs'
```

</TabItem>
<TabItem value="java" label="Java">

```yaml
# Build your Java project and run tests with Apache Maven.
trigger:
- main
pr:
- main

pool:
  vmImage: 'ubuntu-latest'

# Sets the environment variables for the pipeline.
# We create a variable sauce_user and assign it a value of $(SAUCE_USERNAME), which comes from the Azure DevOps.
variables:
- name: sauce_user
  value: $(SAUCE_USERNAME)
- name: sauce_key
  value: $(SAUCE_ACCESS_KEY)

steps:
- bash: echo $SAUCE_USER
- bash: echo $SAUCE_KEY

# Builds and runs the tests in the Maven project.
- task: Maven@3
  inputs:
    mavenPomFile: 'pom.xml'
    mavenOptions: '-Xmx3072m'
    javaHomeOption: 'JDKVersion'
    jdkVersionOption: '1.8'
    jdkArchitectureOption: 'x64'
    publishJUnitResults: true
    testResultsFiles: '**/surefire-reports/TEST-*.xml'
    goals: 'package'
```

</TabItem>
<TabItem value="C#" label="C#">

```yaml
pool:
  name: Hosted VS2017
  demands:
  - msbuild
  - visualstudio
  - vstest

steps:
- script: set
  displayName: print all variables
- task: NuGetToolInstaller@0
  displayName: 'Use NuGet 4.4.1'
  inputs:
    versionSpec: 4.4.1

- task: NuGetCommand@2
  displayName: 'NuGet restore'
  inputs:
    restoreSolution: '**\*.sln'

- task: VSBuild@1
  displayName: 'Build solution'
  inputs:
    solution: '**\*.sln'
    msbuildArgs: '/p:DeployOnBuild=true /p:WebPublishMethod=Package /p:PackageAsSingleFile=true /p:SkipInvalidConfigurations=true /p:DesktopBuildPackageLocation="$(build.artifactstagingdirectory)\WebApp.zip" /p:DeployIisAppPath="Default Web Site"'
    logProjectEvents: true

- task: PowerShell@2
  displayName: 'Set Sauce Environment Variables'
  inputs:
    targetType: filePath
    filePath: ./setEnvironmentVariables.ps1
    arguments: '$env:SAUCE_USER $env:SAUCE_KEY'

# Using powershell ##vso command to set an environment variable in the system
- powershell: |
    Write-Host "Sauce Username stored in Azure DevOps variables is=>$($env:SAUCE_USER)";
    Write-Host "Sauce Access Key stored in Azure DevOps variables is=>$($env:SAUCE_KEY)";
    Write-Host "Sauce Username stored in Env variables is=>$($env:SAUCE_USERNAME)";
    Write-Host "Sauce Access Key stored in Env variables is=>$($env:SAUCE_ACCESS_KEY)";
    Write-Host "Sauce Build Repository URI stored in Env variables is=>$($env:BUILD_REPOSITORY_URI)";

# Checking to make sure that environment variables were set between yml tasks
- powershell: |
    Write-Host "Sauce Username stored in Env Variables variables is=>$($env:SAUCE_USERNAME)";
    Write-Host "Sauce Access Key stored in Azure DevOps variables is=>$($env:SAUCE_ACCESS_KEY)";
  displayName: display env variables bw posh tasks

- task: VSTest@2
  displayName: 'Run Best Practices Framework'
  inputs:
    searchFolder: '$(System.DefaultWorkingDirectory)'
    testSelector: 'testAssemblies'
    testAssemblyVer2: |
      **\*Selenium*.dll
      !**\SauceExamples\packages\*.dll
      !**\packages\*.dll
    testFiltercriteria: 'TestCategory=BestPractices'
    runInParallel: true
    codeCoverageEnabled: true
    testRunTitle: 'NUnit Automation Framework'
    rerunFailedTests: true
    rerunFailedThreshold: 10
    rerunMaxAttempts: 2
    failOnMinTestsNotRun: true
```

</TabItem>
</Tabs>

## Authentication

Your tests authenticate with Sauce Labs using your Sauce Labs **username** and **access key**, which you can find in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings). Store them as pipeline variables in Azure DevOps, rather than in your source code or YAML file.

1. In your pipeline, click **Pipeline** > **Variables**.
2. [Set your Sauce Labs username and access key as environment variables](https://ultimateqa.com/tfs-vsts-and-azure-devops/#1_Setup_your_username_and_access_key_in_ADO) by pasting the values of your username and access key.
3. In your source code, reference the Sauce Labs environment variables that you set in Azure DevOps. For example:

```csharp title="C# example"
var sauceUserName = Environment.GetEnvironmentVariable("SAUCE_USERNAME");
var sauceAccessKey = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY");
```

You also reference these variables in your pipeline YAML file. See [Configure the Pipeline](#configure-the-pipeline).

## Verify the Integration

1. Run your Azure pipeline.
2. Open the pipeline run in Azure DevOps and confirm that the test step completes.
3. Open your Sauce Labs test results and confirm that the tests from the pipeline run appear.

## Use the Integration

After you set up the integration, you can run your Sauce Labs tests every time your Azure pipeline runs.

To run your Sauce Labs tests in Azure DevOps:

1. Push a change to the branch that triggers your pipeline, for example `main`, or run the pipeline manually.
2. Wait for the test step to finish.
3. Open your Sauce Labs test results.

**Result:** The tests run on Sauce Labs as part of your Azure pipeline, and the results appear in Sauce Labs.

## Troubleshooting

<details>
<summary>**Azure Pipelines cannot access your repository**</summary>

Grant Azure Pipelines permission to access your repository management system when you link the pipeline. See the [Azure Pipelines documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/).

</details>

<details>
<summary>**Tests cannot authenticate with Sauce Labs**</summary>

Set your Sauce Labs username and access key as pipeline variables, and map them to `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` in the `env` section of the step that runs your tests, as shown in the Node.js template in [Configure the Pipeline](#configure-the-pipeline).

</details>

<details>
<summary>**Environment variables are empty in a later task**</summary>

Variables set in one task are not always available in the next. Print them in each task to check, as shown in the C# template in [Configure the Pipeline](#configure-the-pipeline).

</details>

## Next Steps

- [Sauce Labs Testing with Azure DevOps](https://ultimateqa.com/tfs-vsts-and-azure-devops/)
- [Azure DevOps Pipelines documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops)
  - [Build JavaScript and Node.js apps](https://docs.microsoft.com/azure/devops/pipelines/languages/javascript)
  - [Build Java apps](https://docs.microsoft.com/azure/devops/pipelines/languages/java)
  - [Build ASP.NET apps with .NET Framework](https://docs.microsoft.com/en-us/azure/devops/pipelines/apps/aspnet/build-aspnet-4?view=azure-devops)
