---
id: azure
title: Sauce Labs with Azure DevOps
sidebar_label: Azure Integration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Azure DevOps (formerly Visual Studio Team Services or VSTS) is a Microsoft product that provides version control, reporting, requirements management, project management, automated builds, testing and release management capabilities.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* An existing Azure DevOps pipeline

:::note
The Sauce Labs OnDemand plugin for Azure DevOps has been deprecated.
:::


## Using Azure DevOps

Follow the instructions below to integrate Sauce Labs testing into your Azure pipeline.

1. Sign in to your Azure DevOps organization and go to your project.
2. Go to **Pipelines** > **New pipeline**.
3. Link the new pipeline to your repository (see [Azure Pipelines Documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/) for guidance). You'll likely need to provide permissions for Azure Pipelines to access your repository management system.
4. Set your [Sauce Labs username and access key as environment variables](https://ultimateqa.com/tfs-vsts-and-azure-devops/#1_Setup_your_username_and_access_key_in_ADO) in your pipeline by clicking **Pipeline** > **Variables**, and then pasting the values of your username and access key.
5. In your source code, you'll need to reference the Sauce Labs environment variables that you set in Azure DevOps. For example:
  ```csharp title="C# example"
  var sauceUserName = Environment.GetEnvironmentVariable("SAUCE_USERNAME");
  var sauceAccessKey = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY");
  ```
6. Create a YAML file using one of the templates below. You'll also need to reference your Sauce Labs environment variables here.
   <Tabs
     defaultValue="node.js"
     values={[
       {label: 'Node.js', value: 'node.js'},
       {label: 'Java', value: 'java'},
       {label: 'C#', value: 'C#'},
     ]}>

   <TabItem value="node.js">

   ```yml
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
   |

    env:
      # Reads the value from 'sauceUsername' in Azure DevOps and
      # stores it into SAUCE_USERNAME env variable
      SAUCE_USERNAME: $(sauceUsername)
      SAUCE_ACCESS_KEY: $(sauceAccessKey)
    displayName: 'install and run WebdriverIO tests in Sauce Labs'
   ```

   </TabItem>
   <TabItem value="java">

   ```yaml
   # Build your Java project and run tests with Apache Maven.
   trigger:
   – main
   pr:
   – main

   pool:
     vmImage: 'ubuntu-latest'

   # Sets the environment variables for the pipeline.
   # We create a variable sauce_user and assign it a value of $(SAUCE_USERNAME), which comes from the Azure DevOps.
   variables:
   – name: sauce_user
     value: $(SAUCE_USERNAME)
   – name: sauce_key
     value: $(SAUCE_ACCESS_KEY)

   steps:
   – bash: echo $SAUCE_USER
   – bash: echo $SAUCE_KEY

   # Builds and runs the tests in the Maven project.
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

   ```yaml
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
       Write-Host "Sauce Username stored in Azure DevOps variables is=>$($env:SAUCE_USER)";
       Write-Host "Sauce Access Key stored in Azure DevOps variables is=>$($env:SAUCE_KEY)";
       Write-Host "Sauce Username stored in Env variables is=>$($env:SAUCE_USERNAME)";
       Write-Host "Sauce Access Key stored in Env variables is=>$($env:SAUCE_ACCESS_KEY)";
       Write-Host "Sauce Build Repository URI stored in Env variables is=>$($env:BUILD_REPOSITORY_URI)";
  |

    # Checking to make sure that environment variables were set between yml tasks
    – powershell: |
        Write-Host "Sauce Username stored in Env Variables variables is=>$($env:SAUCE_USERNAME)";
        Write-Host "Sauce Access Key stored in Azure DevOps variables is=>$($env:SAUCE_ACCESS_KEY)";
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

* [Sauce Labs Testing with Azure DevOps](https://ultimateqa.com/tfs-vsts-and-azure-devops/)
* [Azure DevOps Pipelines documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops)
  * [Build JavaScript and Node.js apps](https://docs.microsoft.com/azure/devops/pipelines/languages/javascript)
  * [Build Java apps](https://docs.microsoft.com/azure/devops/pipelines/languages/java)
  * [Build ASP.NET apps with .NET Framework](https://docs.microsoft.com/en-us/azure/devops/pipelines/apps/aspnet/build-aspnet-4?view=azure-devops)
