---
id: apif-auto
title: "Jenkins: APIF-Auto"
sidebar_label: APIF-Auto
keywords:
    - cicd
    - jenkins
    - apif-auto
    - api-fortress
---

APIF-Auto, a command line tool that supports automated API Fortress test execution is an ideal tool for executing API Fortress tests in a Jenkins workflow.

The pipeline script below serves as a template for creating a stage in your Jenkins Pipeline for testing your APIs with API Fortress. If you’d like to take a look at the documentation for APIF-Auto, click [here](https://apifortress.com/doc/command-line-tools/).

> __NOTE__: It's important to note that this is an **example** of a `jenkinsfile` (Jenkins Pipeline). Experienced Jenkins users are free to configure their workflow as best suits their needs.

```bash
pipeline{
   agent any
stages {
   stage('Execute API Fortress Tests') {
     steps {
       sh 'mkdir -p apifortress-reports'
       sh 'python /Path/to/apif-Auto/directory/apif-run.py run-all demo -S -f junit -o apifortress-reports/apif.xml'
       }
   post {
     always {
       junit "apifortress-reports/"
       }
     }
   }
  }
}
```

1. **`sh 'mkdir -p apifortress-reports'`**

    Let’s break down what’s going on here! First, we’re telling jenkins to create a new directory called `apifortress-reports`. 

    You can name this directory whatever you’d like, but there are a couple of important notes to remember:

      * First, remember the **`-p`** flag! It’ll keep the pipeline from overwriting the directory if it already exists in the future.

      * Second, remember the name! We’re going to need it later.

2. `sh 'python /Path/to/apif-Auto/directory/apif-run.py run-all demo -S -f junit -o apifortress-reports/apif.xml'`

    Next, we’re going to execute the actual test execution with API Fortress via APIF-Auto. 

    We’re invoking the tool with **`python`** and the **path to the tool**. We’re passing a run-all argument for the project and credentials defined with the **demo** config key. 
    
    The test is executing in **sync** mode, reporting in **`junit`** and **outputting** to **`apifortress-reports/apif.xml`**. If you notice, the output file is being placed in the directory we created in the previous step!

3. `junit "apifortress-reports/"`

    In this final step, we’re publishing the junit test report located in the directory that we established in the first step and called in the second step. By using the above workflow, we have a modular method of running API Fortress tests in authenticated mode in our Jenkins pipeline.
