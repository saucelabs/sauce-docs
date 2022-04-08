---
id: azure
title: Sauce Labs with Azure DevOps
sidebar_label: Azure
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs support Azure DevOps (formerly Visual Studio Team Services or VSTS) as a 3rd party integration. Follow the instructions here to get started: they just need to do some work on their end. That work is documented here with C#, here with NodeJs, and with Java

:::note
The Sauce Labs OnDemand plugin for Azure DevOps has been deprecated.
:::

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* An existing Azure DevOps pipeline


## Installing the Plugin

1. Sign in to your Azure DevOps organization and go to your project.
2. Go to **Pipelines**, and then select **New pipeline**.
3. Link the new pipeline to your repository. You'll likely need to provide permissions to Azure Pipelines in your repository management system.
4. Add your Sauce Labs username and access key to your pipeline by clicking **Pipeline** > **Variables**, then paste the values of your username and access key. See [Setting $SAUCE_USERNAME and $SAUCE_ACCESS_KEY as environment variables](https://ultimateqa.com/tfs-vsts-and-azure-devops/#1_Setup_your_username_and_access_key_in_ADO).
5. In your source code, you can reference environment variables like this:
  <Tabs
    defaultValue="Node.js"
    values={[
      {label: 'Node.js', value: 'Node.js'},
      {label: 'Java', value: 'Java'},
      {label: 'C#', value: 'C#'},
    ]}>

  <TabItem value="Node.js">

  ??

  </TabItem>
  <TabItem value="Java">

  ??

  </TabItem>
  <TabItem value="C#">

  ```csharp
  var sauceUserName = Environment.GetEnvironmentVariable("SAUCE_USERNAME");
  var sauceAccessKey = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY");
  ```

  Be sure not to set the `EnvironmentVariableTarget.User` as your second parameter; Azure DevOps will not be able to read that variable.

  </TabItem>
  </Tabs>

6. Read values from Azure Variables in your YAML file:

C#
  ```yaml
  - task: DotNetCoreCLI@2
    displayName: 'Run tests'
    env:
      SAUCE_USERNAME: $(sauceUsername)
      SAUCE_ACCESS_KEY: $(sauceKey)
  ```

7. Create a YAML file containing the following code:
  <Tabs
    defaultValue="node.js"
    values={[
      {label: 'Node.js', value: 'node.js'},
      {label: 'Java', value: 'java'},
      {label: 'C#', value: 'C#'},
    ]}>

  <TabItem value="node.js">

   ```YAML
   trigger:
   - main

   pool:
     vmImage: ubuntu-latest

   # multiple pipelines can re-use variables that are stored in a variable group
   variables:
   - group: sauce-labs-variables

   steps:
   - task: NodeTool@0
     inputs:
       versionSpec: '14.x'
     displayName: 'Install Node.js'

   # Below we navigate to the working directory, install node packages, run tests on Sauce.
   # Make sure to set SAUCE_USERNAME and SAUCE_ACCESS_KEY variables
   - script: |
      cd ./webdriverio/webdriver/examples/w3c/
      npm install
      npm run test.saucelabs.us -- --logLevel "debug"
      #it's wise to enable a high level of logging for CI |

    env:
      SAUCE_USERNAME: $(sauceUsername) #this will read the value from 'sauceUsername' in ADO and will store it into SAUCE_USERNAME env variable
      SAUCE_ACCESS_KEY: $(sauceAccessKey)
    displayName: 'install and run WebdriverIO tests in Sauce Labs'

   ```

  </TabItem>
  <TabItem value="java">

   ```YAML
   # Maven
   # Build your Java project and run tests with Apache Maven.
   # Add steps that analyze code, save build artifacts, deploy, and more:
   # https://docs.microsoft.com/azure/devops/pipelines/languages/java
   trigger:
   – main
   pr:
   – main

   pool:
     vmImage: 'ubuntu-latest'

   # Set the environment variables for the pipeline.
   # We create a variable sauce_user and assign it a value of $(SAUCE_USERNAME), which comes from the ADO
   variables:
   – name: sauce_user
   variables:
   – name: sauce_user
     value: $(SAUCE_USERNAME)
   – name: sauce_key
     value: $(SAUCE_ACCESS_KEY)

   steps:
   – bash: echo $SAUCE_USER
   – bash: echo $SAUCE_KEY

   # This will build and run the tests in the Maven project
   – task: Maven@3
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
  <TabItem value="C#">

   ```YAML
   pool:
     name: Hosted VS2017
     demands:
     – msbuild
     – visualstudio
     – vstest

   steps:
   – script: set
     displayName: print all variables
   – task: NuGetToolInstaller@0
     displayName: 'Use NuGet 4.4.1'
     inputs:
       versionSpec: 4.4.1

   – task: NuGetCommand@2
     displayName: 'NuGet restore'
     inputs:
       restoreSolution: '**\*.sln'

   – task: VSBuild@1
     displayName: 'Build solution'
     inputs:
       solution: '**\*.sln'
       msbuildArgs: '/p:DeployOnBuild=true /p:WebPublishMethod=Package /p:PackageAsSingleFile=true /p:SkipInvalidConfigurations=true /p:DesktopBuildPackageLocation="$(build.artifactstagingdirectory)\WebApp.zip" /p:DeployIisAppPath="Default Web Site"'
       logProjectEvents: true

   – task: PowerShell@2
     displayName: 'Set Sauce Environment Variables'
     inputs:
       targetType: filePath
       filePath: ./setEnvironmentVariables.ps1
       arguments: '$env:SAUCE_USER $env:SAUCE_KEY'

   # Using powershell ##vso command to set an environment variable in the system
   – powershell: |
       Write-Host "Sauce Username stored in ADO variables is=>$($env:SAUCE_USER)";
       Write-Host "Sauce Access Key stored in ADO variables is=>$($env:SAUCE_KEY)";
       Write-Host "Sauce Username stored in Env variables is=>$($env:SAUCE_USERNAME)";
       Write-Host "Sauce Access Key stored in Env variables is=>$($env:SAUCE_ACCESS_KEY)";
       Write-Host "Sauce Build Repository URI stored in Env variables is=>$($env:BUILD_REPOSITORY_URI)";

    # checking to make sure that env variables were set between yml tasks
    – powershell: |
       Write-Host "Sauce Username stored in Env Variables variables is=>$($env:SAUCE_USERNAME)";
       Write-Host "Sauce Access Key stored in ADO variables is=>$($env:SAUCE_ACCESS_KEY)";
      displayName: display env variables bw posh tasks

    – task: VSTest@2
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


## More Information

* [Microsoft Azure DevOps Pipelines documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops)
* [Build JavaScript and Node.js apps](https://docs.microsoft.com/azure/devops/pipelines/languages/javascript)
* [Build Java apps](https://docs.microsoft.com/azure/devops/pipelines/languages/java)
* [Build ASP.NET apps with .NET Framework](https://docs.microsoft.com/en-us/azure/devops/pipelines/apps/aspnet/build-aspnet-4?view=azure-devops)
