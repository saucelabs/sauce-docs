---
id: azure-devops
title: "Azure DevOps with APIF-Auto"
sidebar_label: Azure DevOps
keywords:
    - cicd
    - microsoft tfs
    - team foundation server
    - azure devops
---

import useBaseUrl from '@docusaurus/useBaseUrl';

APIF-Auto, a command line tool that supports automated API Fortress test execution, is the ideal tool for executing tests in an Azure DevOps workflow.

## Example Pipeline Script

The pipeline script below serves as a template for creating a step in your Azure DevOps Pipeline for testing your APIs with API Fortress. If you’d like to take a look at the documentation for APIF-Auto, click [here](/api-testing/mark2/ci/apif-auto).

:::note
This is an **example** of an Azure DevOps Pipeline. Experienced users are free to configure their workflow as best suits their needs.
:::

```yaml
trigger:  
- master  
jobs:  
- job: 'apif'  
  pool:  
    vmImage: 'ubuntu-latest'  
  strategy:  
    matrix:  
      Python37:  
        python.version: '3.7'  

  steps:  
  - script: |  
      python -m pip install --upgrade pip  
      python -m pip install -r requirements.txt  
    displayName: 'Install dependencies'  

  - script: |  
      python apif-run.py run-all security -S -f junit -o results/TEST-junit.xml  
    displayName: 'Run APIF Tests'  

  - task: PublishTestResults@2  
    inputs:  
      testRestultFiles: 'result/junit.xml'  
      testRunTitle: 'APIF Test Results'  
    condition: succeededOrFailed()
```

### Explanation

First, it’s worth mentioning that in this example we have the APIF-Auto files in our Azure DevOps repository. Let’s break down what’s happening in the script above:  

- First, we are defining the OS image we would like to use as the testing environment. In our case we chose the latest Ubuntu which has support for the latest Python version.
- Next, in the same scope we are defining which version of Python we will be using for the test (Apif-Auto is a Python script)
- Then, in the part labeled "steps" there are a few things happening:
    - In the first section labeled "script" we are installing `pip`, and then installing the dependencies from our `requirements.txt` file
    - In the second section labeled "script" we are running `apif-run.py` to execute all of the tests in our project called "security"
    - Finally, there is a section labeled "task," this is where we are evaluating the outputted results from the `apif-run` execution.

### Example Output

Below is a sample output from the above execution:  
<img src={useBaseUrl('img/api-fortress/2020/06/Screen-Shot-2020-06-18-at-10.08.50-AM.png')} alt="Azure APIF-Auto Pic1"/>
